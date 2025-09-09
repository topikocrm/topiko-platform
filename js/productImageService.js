/* ========================================
   PRODUCT IMAGE SERVICE - GOOGLE DRIVE VERSION
   Loads product images from Google Drive CDN
   ======================================== */

// Configuration
const IMAGE_CONFIG = {
    // Google Drive Configuration
    GOOGLE_DRIVE_BASE_URL: 'https://drive.google.com/uc?export=view&id=',
    GOOGLE_DRIVE_FOLDER_URL: 'https://drive.google.com/drive/folders/1gvnE_UccnBzZAaTzUYq7SWaHzVXtI_rG',
    
    // Image loading settings
    USE_GOOGLE_DRIVE: true,
    USE_UNSPLASH_FALLBACK: true,
    
    // Cache settings
    CACHE_DURATION: 24 * 60 * 60 * 1000, // 24 hours
    CACHE_KEY_PREFIX: 'topiko_img_',
    
    // Image dimensions
    DEFAULT_WIDTH: 400,
    DEFAULT_HEIGHT: 400
};

// Google Drive file IDs for product images
// You'll need to map your actual file IDs here
const GOOGLE_DRIVE_IMAGE_MAPPINGS = {
    // Example mapping structure - replace with your actual Drive file IDs
    // Format: 'product-slug': 'google-drive-file-id',
    // To get file ID: Open image in Drive, click Share, copy the ID from the URL
    
    // Men's Clothing
    'formal-cotton-shirt': '1_example_file_id_here',
    'casual-tshirt': '1_example_file_id_here',
    'slim-fit-jeans': '1_example_file_id_here',
    
    // Add your actual mappings here
    // The ID is the part after /d/ in the Drive share URL
    // Example: https://drive.google.com/file/d/1ABC123XYZ/view -> ID is 1ABC123XYZ
};

// Category to image mapping for fallbacks
const CATEGORY_IMAGE_MAPPINGS = {
    'mens-clothing': 'default-mens-clothing',
    'womens-clothing': 'default-womens-clothing',
    'kids-wear': 'default-kids-wear',
    'footwear': 'default-footwear',
    'accessories': 'default-accessories',
    'restaurants': 'default-food',
    'home-cooked-food': 'default-food',
    'sweets-desserts': 'default-sweets',
    'beverages': 'default-beverages',
    'fresh-produce': 'default-vegetables',
    'electronics': 'default-electronics',
    'beauty-wellness': 'default-beauty',
    'salons-spas': 'default-salon'
};

class ProductImageService {
    constructor() {
        this.imageCache = this.loadCache();
        this.loadingImages = new Map();
    }

    // Load cache from localStorage
    loadCache() {
        try {
            const cache = {};
            for (let key in localStorage) {
                if (key.startsWith(IMAGE_CONFIG.CACHE_KEY_PREFIX)) {
                    const data = JSON.parse(localStorage.getItem(key));
                    if (data && data.expires > Date.now()) {
                        cache[key.replace(IMAGE_CONFIG.CACHE_KEY_PREFIX, '')] = data.url;
                    } else {
                        localStorage.removeItem(key);
                    }
                }
            }
            return cache;
        } catch (e) {
            console.warn('Failed to load image cache:', e);
            return {};
        }
    }

    // Save to cache
    saveToCache(productId, imageUrl) {
        try {
            const cacheData = {
                url: imageUrl,
                expires: Date.now() + IMAGE_CONFIG.CACHE_DURATION
            };
            localStorage.setItem(
                IMAGE_CONFIG.CACHE_KEY_PREFIX + productId,
                JSON.stringify(cacheData)
            );
            this.imageCache[productId] = imageUrl;
        } catch (e) {
            console.warn('Failed to save to cache:', e);
        }
    }

    // Get Google Drive direct link
    getGoogleDriveUrl(fileId) {
        if (!fileId) return null;
        return `${IMAGE_CONFIG.GOOGLE_DRIVE_BASE_URL}${fileId}`;
    }

    // Get product image from Google Drive
    getGoogleDriveImage(productSlug, productName) {
        // Try exact match first
        if (GOOGLE_DRIVE_IMAGE_MAPPINGS[productSlug]) {
            return this.getGoogleDriveUrl(GOOGLE_DRIVE_IMAGE_MAPPINGS[productSlug]);
        }

        // Try product name variations
        const nameVariations = [
            productName.toLowerCase().replace(/\s+/g, '-'),
            productName.toLowerCase().replace(/\s+/g, '_'),
            productName.toLowerCase().replace(/[^a-z0-9]/g, '')
        ];

        for (const variant of nameVariations) {
            if (GOOGLE_DRIVE_IMAGE_MAPPINGS[variant]) {
                return this.getGoogleDriveUrl(GOOGLE_DRIVE_IMAGE_MAPPINGS[variant]);
            }
        }

        return null;
    }

    // Get Unsplash fallback image
    getUnsplashFallback(productName, category) {
        const searchTerms = {
            'mens-clothing': 'mens fashion clothing',
            'womens-clothing': 'womens fashion clothing',
            'kids-wear': 'kids children clothing',
            'footwear': 'shoes footwear fashion',
            'accessories': 'fashion accessories jewelry',
            'restaurants': 'indian food restaurant',
            'home-cooked-food': 'homemade food indian',
            'sweets-desserts': 'indian sweets desserts',
            'beverages': 'beverages drinks coffee tea',
            'fresh-produce': 'vegetables fruits fresh',
            'electronics': 'electronics gadgets technology',
            'beauty-wellness': 'beauty salon spa wellness',
            'salons-spas': 'salon spa beauty treatment'
        };

        const searchTerm = searchTerms[category] || productName;
        const encodedSearch = encodeURIComponent(searchTerm);
        
        return `https://source.unsplash.com/${IMAGE_CONFIG.DEFAULT_WIDTH}x${IMAGE_CONFIG.DEFAULT_HEIGHT}/?${encodedSearch}`;
    }

    // Main function to get product image
    async getProductImage(productId, productName, category, subcategory) {
        // 1. Check cache first
        if (this.imageCache[productId]) {
            console.log(`✅ Using cached image for ${productName}`);
            return this.imageCache[productId];
        }

        // 2. Check if already loading
        if (this.loadingImages.has(productId)) {
            return this.loadingImages.get(productId);
        }

        // 3. Start loading process
        const loadingPromise = this.loadImageWithFallbacks(productId, productName, category, subcategory);
        this.loadingImages.set(productId, loadingPromise);

        try {
            const result = await loadingPromise;
            this.loadingImages.delete(productId);
            return result;
        } catch (e) {
            this.loadingImages.delete(productId);
            throw e;
        }
    }

    // Load image with fallback chain
    async loadImageWithFallbacks(productId, productName, category, subcategory) {
        let imageUrl = null;

        // 1. Try Google Drive first if enabled
        if (IMAGE_CONFIG.USE_GOOGLE_DRIVE) {
            const productSlug = productName.toLowerCase().replace(/\s+/g, '-');
            imageUrl = this.getGoogleDriveImage(productSlug, productName);
            
            if (imageUrl) {
                const validUrl = await this.testImageUrl(imageUrl);
                if (validUrl) {
                    console.log(`✅ Using Google Drive image for ${productName}`);
                    this.saveToCache(productId, validUrl);
                    return validUrl;
                }
            }
        }

        // 2. Try Unsplash fallback
        if (IMAGE_CONFIG.USE_UNSPLASH_FALLBACK) {
            imageUrl = this.getUnsplashFallback(productName, subcategory || category);
            const validUrl = await this.testImageUrl(imageUrl);
            if (validUrl) {
                console.log(`✅ Using Unsplash fallback for ${productName}`);
                this.saveToCache(productId, validUrl);
                return validUrl;
            }
        }

        // 3. Return a default placeholder URL
        const placeholderUrl = `https://via.placeholder.com/${IMAGE_CONFIG.DEFAULT_WIDTH}x${IMAGE_CONFIG.DEFAULT_HEIGHT}/6366f1/ffffff?text=${encodeURIComponent(productName.substring(0, 20))}`;
        console.log(`ℹ️ Using placeholder for ${productName}`);
        return placeholderUrl;
    }

    // Test if image URL loads successfully
    async testImageUrl(url) {
        return new Promise((resolve) => {
            const img = new Image();
            img.onload = () => resolve(url);
            img.onerror = () => resolve(false);
            img.src = url;
            
            // Timeout after 5 seconds
            setTimeout(() => resolve(false), 5000);
        });
    }

    // Update image element with progressive loading
    async updateImageElement(imgElement, productId, productName, category, subcategory) {
        // 1. Set loading state
        imgElement.classList.add('image-loading');
        
        // 2. Set temporary placeholder
        const tempPlaceholder = `https://via.placeholder.com/${IMAGE_CONFIG.DEFAULT_WIDTH}x${IMAGE_CONFIG.DEFAULT_HEIGHT}/f3f4f6/9ca3af?text=Loading...`;
        imgElement.src = tempPlaceholder;

        try {
            // 3. Load real image
            const imageUrl = await this.getProductImage(productId, productName, category, subcategory);
            
            // 4. Update image source
            const newImg = new Image();
            newImg.onload = () => {
                imgElement.src = imageUrl;
                imgElement.classList.remove('image-loading');
                imgElement.classList.add('image-loaded');
            };
            newImg.onerror = () => {
                // Keep placeholder on error
                imgElement.classList.remove('image-loading');
                imgElement.classList.add('image-error');
            };
            newImg.src = imageUrl;
        } catch (e) {
            console.warn(`Failed to load image for ${productName}:`, e);
            imgElement.classList.remove('image-loading');
            imgElement.classList.add('image-error');
        }
    }

    // Clear cache
    clearCache() {
        const keys = Object.keys(localStorage).filter(key => 
            key.startsWith(IMAGE_CONFIG.CACHE_KEY_PREFIX)
        );
        keys.forEach(key => localStorage.removeItem(key));
        this.imageCache = {};
        console.log('✅ Image cache cleared');
    }

    // Get cache statistics
    getCacheStats() {
        const cacheSize = Object.keys(this.imageCache).length;
        const totalSize = Object.keys(localStorage).filter(key => 
            key.startsWith(IMAGE_CONFIG.CACHE_KEY_PREFIX)
        ).length;
        
        return {
            loaded: cacheSize,
            total: totalSize,
            cacheHitRate: cacheSize > 0 ? (cacheSize / totalSize * 100).toFixed(1) + '%' : '0%'
        };
    }
}

// Create global instance
window.ProductImageService = new ProductImageService();

// Add CSS for image loading states
if (!document.getElementById('product-image-styles')) {
    const style = document.createElement('style');
    style.id = 'product-image-styles';
    style.innerHTML = `
        .image-loading {
            opacity: 0.6;
            transition: opacity 0.3s ease;
        }
        
        .image-loaded {
            opacity: 1;
            animation: fadeIn 0.5s ease;
        }
        
        .image-error {
            opacity: 0.8;
        }
        
        @keyframes fadeIn {
            from { opacity: 0.6; }
            to { opacity: 1; }
        }
        
        .product-image {
            object-fit: cover;
            background-color: #f3f4f6;
        }
    `;
    document.head.appendChild(style);
}

// Helper function to add Google Drive image mappings
window.addGoogleDriveImageMapping = function(productSlug, fileId) {
    GOOGLE_DRIVE_IMAGE_MAPPINGS[productSlug] = fileId;
    console.log(`✅ Added Google Drive mapping for ${productSlug}`);
};

// Helper to batch add mappings
window.addGoogleDriveImageMappings = function(mappings) {
    Object.assign(GOOGLE_DRIVE_IMAGE_MAPPINGS, mappings);
    console.log(`✅ Added ${Object.keys(mappings).length} Google Drive mappings`);
};

console.log('✅ Product Image Service (Google Drive) initialized');
console.log('📊 Cache stats:', window.ProductImageService.getCacheStats());
console.log('🌐 Google Drive integration:', IMAGE_CONFIG.USE_GOOGLE_DRIVE ? 'Enabled' : 'Disabled');
console.log('📸 Unsplash fallback:', IMAGE_CONFIG.USE_UNSPLASH_FALLBACK ? 'Enabled' : 'Disabled');

// Instructions for adding Google Drive images:
console.log(`
📌 To add Google Drive image mappings:
1. Get the file ID from your Google Drive share URL
2. Use: window.addGoogleDriveImageMapping('product-slug', 'file-id')
3. Or batch add: window.addGoogleDriveImageMappings({ 'slug1': 'id1', 'slug2': 'id2' })
`);
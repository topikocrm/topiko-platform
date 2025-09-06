/* ========================================
   PRODUCT IMAGE SERVICE
   Smart image loading with multiple sources and caching
   ======================================== */

// Configuration
const IMAGE_CONFIG = {
    // Free API keys - Replace with your own for production
    PEXELS_API_KEY: 'YOUR_PEXELS_API_KEY', // Get free at: https://www.pexels.com/api/
    PIXABAY_API_KEY: 'YOUR_PIXABAY_API_KEY', // Get free at: https://pixabay.com/api/docs/
    
    // For demo, we'll use a different approach
    USE_DEMO_MODE: true,
    USE_STATIC_IMAGES: true, // Use curated static image URLs
    
    // Cache settings
    CACHE_DURATION: 24 * 60 * 60 * 1000, // 24 hours in milliseconds
    CACHE_KEY_PREFIX: 'topiko_img_',
    
    // Placeholder paths - use relative path for file:// protocol
    PLACEHOLDER_BASE_PATH: 'images/products/placeholders/',
    
    // Image dimensions
    DEFAULT_WIDTH: 400,
    DEFAULT_HEIGHT: 400
};

// Category to placeholder mapping
const CATEGORY_PLACEHOLDERS = {
    'boutique': 'clothing.svg',
    'mens-wear': 'clothing.svg',
    'womens-wear': 'clothing.svg',
    'kids-wear': 'kids.svg',
    'home-foods': 'food.svg',
    'north-indian': 'food.svg',
    'south-indian': 'food.svg',
    'sweets-desserts': 'food.svg',
    'beverages': 'food.svg',
    'salons': 'beauty.svg',
    'hair-services': 'beauty.svg',
    'beauty-services': 'beauty.svg',
    'spa-wellness': 'beauty.svg',
    'grocery': 'grocery.svg',
    'fresh-produce': 'grocery.svg',
    'staples': 'grocery.svg',
    'packaged-foods': 'grocery.svg',
    'furniture': 'furniture.svg',
    'electronics': 'electronics.svg',
    'mobile-devices': 'electronics.svg',
    'computers': 'electronics.svg',
    'home-appliances': 'electronics.svg',
    'footwear': 'footwear.svg',
    'accessories': 'accessories.svg',
    'fitness': 'default.svg',
    'restaurants': 'food.svg',
    'default': 'default.svg'
};

// Indian product keyword mapping for better search results
const PRODUCT_KEYWORDS = {
    // Clothing
    'kurta': 'kurta,mens,clothing,indian,traditional',
    'saree': 'saree,womens,indian,silk,traditional',
    'lehenga': 'lehenga,indian,bridal,wedding,dress',
    'salwar': 'salwar,kameez,indian,womens,dress',
    'sherwani': 'sherwani,indian,mens,formal,wedding',
    'anarkali': 'anarkali,indian,womens,dress,ethnic',
    'shirt': 'mens,shirt,formal,clothing,business',
    'tshirt': 'tshirt,casual,mens,clothing',
    't-shirt': 'tshirt,casual,mens,clothing',
    'jeans': 'jeans,denim,pants,casual,clothing',
    'dress': 'womens,dress,fashion,clothing',
    'kids': 'kids,children,clothing,fashion',
    'party dress': 'kids,party,dress,children,clothing',
    
    // Food
    'biryani': 'biryani,indian,rice,food,chicken',
    'dosa': 'dosa,indian,food,breakfast,south',
    'idli': 'idli,indian,food,breakfast,south',
    'samosa': 'samosa,indian,snack,food,fried',
    'butter chicken': 'butter,chicken,curry,indian,food',
    'dal': 'dal,lentils,indian,food,curry',
    'paneer': 'paneer,indian,cheese,food,curry',
    'tandoori': 'tandoori,indian,grilled,chicken,food',
    'masala': 'spices,indian,masala,cooking',
    'chai': 'chai,tea,indian,beverage,drink',
    'lassi': 'lassi,yogurt,indian,drink,beverage',
    'coffee': 'coffee,beverage,drink,cafe',
    
    // Grocery
    'tomato': 'tomatoes,fresh,vegetables,produce,red',
    'tomatoes': 'tomatoes,fresh,vegetables,produce,red',
    'onion': 'onions,vegetables,produce,fresh',
    'potato': 'potatoes,vegetables,produce,fresh',
    'banana': 'bananas,fruit,fresh,produce,yellow',
    'apple': 'apples,fruit,fresh,produce,red',
    'carrot': 'carrots,vegetables,fresh,produce,orange',
    'spinach': 'spinach,leafy,greens,vegetables,fresh',
    'mango': 'mangoes,fruit,tropical,fresh,indian',
    'rice': 'rice,grain,food,staple,white',
    'vegetables': 'vegetables,fresh,produce,market',
    'fruits': 'fruits,fresh,produce,market',
    
    // Electronics
    'laptop': 'laptop,computer,technology,electronics',
    'gaming': 'gaming,computer,laptop,electronics',
    'smartphone': 'smartphone,mobile,phone,electronics',
    'phone': 'smartphone,mobile,phone,electronics',
    
    // Beauty
    'facial': 'facial,beauty,spa,skincare,treatment',
    'haircut': 'haircut,salon,barber,hairstyle',
    'massage': 'massage,spa,relaxation,wellness',
    'makeup': 'makeup,cosmetics,beauty,salon',
    
    // Footwear
    'shoes': 'shoes,footwear,formal,mens',
    'sandals': 'sandals,footwear,womens,casual',
    'sneakers': 'sneakers,shoes,sports,running',
    'running': 'running,shoes,sports,athletics',
    
    // Accessories
    'handbag': 'handbag,purse,womens,leather,fashion',
    'watch': 'watch,timepiece,accessories,fashion',
    'wallet': 'wallet,leather,mens,accessories',
    'sunglasses': 'sunglasses,eyewear,fashion,accessories',
    
    // Sweets
    'gulab jamun': 'gulab,jamun,indian,sweet,dessert',
    'rasgulla': 'rasgulla,indian,sweet,dessert',
    'jalebi': 'jalebi,indian,sweet,dessert,orange',
    'kulfi': 'kulfi,indian,icecream,dessert',
    'halwa': 'halwa,indian,sweet,dessert',
    'cake': 'cake,dessert,bakery,chocolate',
    
    // Default fallbacks
    'default': 'product,shopping,retail'
};

class ProductImageService {
    constructor() {
        this.imageCache = this.loadCache();
        this.loadingImages = new Map(); // Track images being loaded
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
                        // Clean expired cache
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

    // Get keywords for product
    getSearchKeywords(productName, category) {
        const nameLower = productName.toLowerCase();
        
        // Check if we have specific keywords for this product
        for (const [key, keywords] of Object.entries(PRODUCT_KEYWORDS)) {
            if (nameLower.includes(key)) {
                return keywords;
            }
        }
        
        // Fallback to category-based search
        const categoryKeywords = {
            'boutique': 'fashion clothing indian',
            'home-foods': 'indian food cuisine',
            'salons': 'beauty salon spa',
            'grocery': 'vegetables fruits grocery',
            'electronics': 'gadgets electronics devices',
            'furniture': 'furniture home decor',
            'footwear': 'shoes footwear indian'
        };
        
        return categoryKeywords[category] || productName;
    }

    // Get placeholder SVG path
    getPlaceholderPath(category, subcategory) {
        const filename = CATEGORY_PLACEHOLDERS[subcategory] || 
                        CATEGORY_PLACEHOLDERS[category] || 
                        CATEGORY_PLACEHOLDERS['default'];
        return IMAGE_CONFIG.PLACEHOLDER_BASE_PATH + filename;
    }

    // Fetch from Lorem Picsum (no API key needed)
    async fetchFromPicsum() {
        try {
            // Lorem Picsum provides random images
            const seed = Math.random().toString(36).substring(7);
            return `https://picsum.photos/seed/${seed}/${IMAGE_CONFIG.DEFAULT_WIDTH}/${IMAGE_CONFIG.DEFAULT_HEIGHT}`;
        } catch (e) {
            console.warn('Picsum fetch failed:', e);
            return null;
        }
    }

    // Fetch from Pexels API
    async fetchFromPexels(keywords) {
        if (IMAGE_CONFIG.USE_DEMO_MODE || !IMAGE_CONFIG.PEXELS_API_KEY || IMAGE_CONFIG.PEXELS_API_KEY === 'YOUR_PEXELS_API_KEY') {
            return null; // Skip if no API key
        }

        try {
            const response = await fetch(
                `https://api.pexels.com/v1/search?query=${encodeURIComponent(keywords)}&per_page=1&orientation=square`,
                {
                    headers: {
                        'Authorization': IMAGE_CONFIG.PEXELS_API_KEY
                    }
                }
            );

            if (response.ok) {
                const data = await response.json();
                if (data.photos && data.photos.length > 0) {
                    return data.photos[0].src.medium;
                }
            }
        } catch (e) {
            console.warn('Pexels API error:', e);
        }
        return null;
    }

    // Fetch from Pixabay API
    async fetchFromPixabay(keywords) {
        if (IMAGE_CONFIG.USE_DEMO_MODE || !IMAGE_CONFIG.PIXABAY_API_KEY || IMAGE_CONFIG.PIXABAY_API_KEY === 'YOUR_PIXABAY_API_KEY') {
            return null; // Skip if no API key
        }

        try {
            const response = await fetch(
                `https://pixabay.com/api/?key=${IMAGE_CONFIG.PIXABAY_API_KEY}&q=${encodeURIComponent(keywords)}&image_type=photo&per_page=3&min_width=${IMAGE_CONFIG.DEFAULT_WIDTH}&min_height=${IMAGE_CONFIG.DEFAULT_HEIGHT}`
            );

            if (response.ok) {
                const data = await response.json();
                if (data.hits && data.hits.length > 0) {
                    return data.hits[0].webformatURL;
                }
            }
        } catch (e) {
            console.warn('Pixabay API error:', e);
        }
        return null;
    }

    // Use free CDN service (no API key needed)
    getFreeCDNImage(productName, category) {
        // Map products to specific image search terms
        const searchTerm = this.getSearchKeywords(productName, category);
        
        // Use Unsplash Source with specific search terms (better than random)
        // This will at least try to find relevant images
        const encodedSearch = encodeURIComponent(searchTerm);
        
        // Return Unsplash source with product-specific search
        // Fallback to placeholder if this fails
        return `https://source.unsplash.com/${IMAGE_CONFIG.DEFAULT_WIDTH}x${IMAGE_CONFIG.DEFAULT_HEIGHT}/?${encodedSearch}`;
    }

    // Main function to get product image
    async getProductImage(productId, productName, category, subcategory) {
        // 1. Check cache first
        if (this.imageCache[productId]) {
            console.log(`✅ Using cached image for ${productId}`);
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
        const keywords = this.getSearchKeywords(productName, category);
        
        // Try different sources in order
        let imageUrl = null;

        // 0. PRIORITY: Try LOCAL images first (our 872 mapped images)
        if (window.LocalProductImages) {
            // Pass product name for smart matching
            const localImage = window.LocalProductImages.getLocalProductImage(productId, category, productName);
            // Check if it's not a placeholder
            if (localImage && !localImage.includes('placeholders')) {
                console.log(`🖼️ Using local image for ${productId} (${productName})`);
                this.saveToCache(productId, localImage);
                return localImage;
            }
        }

        // 0.5. Also check DirectProductImages for exact mappings
        if (window.DirectProductImages) {
            const directImage = window.DirectProductImages.getDirectProductImage(productId);
            if (directImage && !directImage.startsWith('http')) {
                console.log(`✅ Using direct mapped image for ${productId}`);
                this.saveToCache(productId, directImage);
                return directImage;
            }
        }

        // 1. Try static curated images first (if enabled)
        if (IMAGE_CONFIG.USE_STATIC_IMAGES && window.StaticProductImages) {
            imageUrl = window.StaticProductImages.getStaticProductImage(productName);
            if (imageUrl) {
                const validUrl = await this.testImageUrl(imageUrl);
                if (validUrl) {
                    console.log(`✅ Using static image for ${productName}`);
                    this.saveToCache(productId, validUrl);
                    return validUrl;
                }
            }
        }

        // 2. Try Pexels API
        if (!IMAGE_CONFIG.USE_DEMO_MODE) {
            imageUrl = await this.fetchFromPexels(keywords);
            if (imageUrl) {
                console.log(`✅ Found image from Pexels for ${productName}`);
                this.saveToCache(productId, imageUrl);
                return imageUrl;
            }
        }

        // 3. Try Pixabay API
        if (!IMAGE_CONFIG.USE_DEMO_MODE) {
            imageUrl = await this.fetchFromPixabay(keywords);
            if (imageUrl) {
                console.log(`✅ Found image from Pixabay for ${productName}`);
                this.saveToCache(productId, imageUrl);
                return imageUrl;
            }
        }

        // 4. Skip free CDN in demo mode - go straight to placeholder
        // Free CDNs give random images which is worse than placeholders
        if (!IMAGE_CONFIG.USE_DEMO_MODE) {
            imageUrl = this.getFreeCDNImage(productName, category);
            // Test if the image actually loads
            const validUrl = await this.testImageUrl(imageUrl);
            if (validUrl) {
                console.log(`✅ Using free CDN image for ${productName}`);
                return validUrl;
            }
        }

        // 5. Use local SVG placeholder as final fallback
        const placeholder = this.getPlaceholderPath(category, subcategory);
        console.log(`ℹ️ Using SVG placeholder for ${productName}`);
        return placeholder;
    }

    // Preload image to check if it works, with WebP fallback
    async testImageUrl(url) {
        return new Promise((resolve) => {
            const img = new Image();
            img.onload = () => resolve(url); // Return the working URL
            img.onerror = async () => {
                // If original fails, try WebP version
                if (!url.endsWith('.webp')) {
                    const webpUrl = url.replace(/\.(jpg|jpeg|png)$/i, '.webp');
                    if (webpUrl !== url) {
                        const webpImg = new Image();
                        webpImg.onload = () => {
                            console.log(`✅ Found WebP version: ${webpUrl}`);
                            resolve(webpUrl); // Return the WebP URL
                        };
                        webpImg.onerror = () => resolve(false);
                        webpImg.src = webpUrl;
                    } else {
                        resolve(false);
                    }
                } else {
                    resolve(false);
                }
            };
            img.src = url;
        });
    }

    // Update image element with progressive loading
    async updateImageElement(imgElement, productId, productName, category, subcategory) {
        // 1. Set placeholder immediately
        const placeholder = this.getPlaceholderPath(category, subcategory);
        imgElement.src = placeholder;
        // Don't add blur for SVG placeholders
        imgElement.classList.remove('image-loading');
        imgElement.classList.add('image-placeholder');

        // 2. Load real image
        try {
            const imageUrl = await this.getProductImage(productId, productName, category, subcategory);
            
            // 3. Test if image loads
            const validUrl = await this.testImageUrl(imageUrl);
            
            if (validUrl && validUrl !== placeholder) {
                // Create new image element for smooth transition
                const newImg = new Image();
                newImg.onload = () => {
                    imgElement.src = validUrl;
                    imgElement.classList.remove('image-loading', 'image-placeholder');
                    imgElement.classList.add('image-loaded');
                };
                newImg.src = validUrl;
            } else {
                // Keep placeholder without blur
                imgElement.classList.remove('image-loading');
                imgElement.classList.add('image-placeholder');
            }
        } catch (e) {
            console.warn(`Failed to load image for ${productName}:`, e);
            // Placeholder is already set, so we're good
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
            filter: blur(2px);
            transition: filter 0.3s ease;
        }
        
        .image-placeholder {
            filter: blur(0) !important;
            opacity: 1 !important;
        }
        
        .image-loaded {
            filter: blur(0);
            animation: fadeIn 0.5s ease;
        }
        
        @keyframes fadeIn {
            from { opacity: 0.7; }
            to { opacity: 1; }
        }
        
        .product-image-error {
            background: linear-gradient(135deg, #f0f1ff 0%, #e0e7ff 100%);
            display: flex;
            align-items: center;
            justify-content: center;
            color: #6366f1;
            font-size: 14px;
            font-weight: 500;
        }
        
        /* Ensure SVG images are crisp */
        img[src$=".svg"] {
            image-rendering: crisp-edges;
            image-rendering: -webkit-optimize-contrast;
        }
    `;
    document.head.appendChild(style);
}

console.log('✅ Product Image Service initialized');
console.log('📊 Cache stats:', window.ProductImageService.getCacheStats());
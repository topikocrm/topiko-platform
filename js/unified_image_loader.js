/* ========================================
   UNIFIED IMAGE LOADER - Complete Fallback System
   Integrates all image sources with smart fallbacks
   ======================================== */

// Enhanced image loading with all fallback levels
class UnifiedImageLoader {
    constructor() {
        this.imageCache = new Map();
        this.failedUrls = new Set();
        this.loadAttempts = new Map();
        
        console.log('🚀 Unified Image Loader initialized');
    }

    // Test if an image URL is accessible
    async testImageUrl(url, timeout = 5000) {
        if (this.failedUrls.has(url)) {
            return false;
        }

        return new Promise((resolve) => {
            const img = new Image();
            const timer = setTimeout(() => {
                img.src = '';
                resolve(false);
            }, timeout);

            img.onload = () => {
                clearTimeout(timer);
                resolve(true);
            };

            img.onerror = () => {
                clearTimeout(timer);
                this.failedUrls.add(url);
                resolve(false);
            };

            img.src = url;
        });
    }

    // Get working image with complete fallback chain
    async getWorkingImage(productId, productName, category = null, subcategory = null) {
        const cacheKey = `${productId}-${productName}`;
        
        // Check cache first
        if (this.imageCache.has(cacheKey)) {
            console.log(`✅ Using cached image for ${productId}`);
            return this.imageCache.get(cacheKey);
        }

        console.log(`🔍 Finding image for: ${productName} (${productId})`);

        // Level 1: Direct Product Images (Real photos)
        const directImage = await this.tryDirectImage(productId);
        if (directImage) {
            this.imageCache.set(cacheKey, directImage);
            return directImage;
        }

        // Level 2: Smart Image Sources (External APIs)
        const smartImage = await this.trySmartImage(productName);
        if (smartImage) {
            this.imageCache.set(cacheKey, smartImage);
            return smartImage;
        }

        // Level 3: SVG Vector Images
        const svgImage = this.getSVGImage(productName);
        if (svgImage) {
            this.imageCache.set(cacheKey, svgImage);
            return svgImage;
        }

        // Level 4: CSS Gradient Fallback
        const gradientImage = this.getGradientImage(productName);
        this.imageCache.set(cacheKey, gradientImage);
        return gradientImage;
    }

    // Level 1: Try direct product images
    async tryDirectImage(productId) {
        if (!window.DirectProductImages) return null;

        const directUrl = window.DirectProductImages.getDirectProductImage(productId);
        if (!directUrl) return null;

        console.log(`🔄 Testing direct image for ${productId}`);
        const isWorking = await this.testImageUrl(directUrl);
        
        if (isWorking) {
            console.log(`✅ Direct image working: ${productId}`);
            return directUrl;
        } else {
            console.log(`❌ Direct image failed: ${productId}`);
            return null;
        }
    }

    // Level 2: Try smart image sources
    async trySmartImage(productName) {
        if (!window.SmartImageLoader) return null;

        const sources = this.getSmartImageSources(productName);
        
        for (let i = 0; i < sources.length; i++) {
            const url = sources[i];
            console.log(`🔄 Testing smart image ${i + 1}/${sources.length} for ${productName}`);
            
            const isWorking = await this.testImageUrl(url);
            if (isWorking) {
                console.log(`✅ Smart image working: ${url}`);
                return url;
            }
        }

        console.log(`❌ All smart images failed for ${productName}`);
        return null;
    }

    // Get smart image sources for a product
    getSmartImageSources(productName) {
        const nameLower = (productName || '').toLowerCase();
        
        // Use SmartImageLoader sources if available
        if (window.SmartImageLoader && window.SmartImageLoader.IMAGE_SOURCES) {
            const sources = window.SmartImageLoader.IMAGE_SOURCES;
            
            // Find matching category
            for (const [keyword, urls] of Object.entries(sources)) {
                if (nameLower.includes(keyword)) {
                    return urls;
                }
            }
            
            return sources['default'] || [];
        }
        
        return [];
    }

    // Level 3: SVG vector images
    getSVGImage(productName) {
        if (!window.SVGProductImages) return null;

        console.log(`🎨 Using SVG fallback for ${productName}`);
        return window.SVGProductImages.getProductSVG(productName, 'fallback');
    }

    // Level 4: CSS gradient image
    getGradientImage(productName) {
        if (!window.InlineSVGImages) {
            // Basic fallback if InlineSVGImages not available
            return this.createBasicPlaceholder(productName);
        }

        console.log(`🌈 Using gradient fallback for ${productName}`);
        const gradient = window.InlineSVGImages.getCSSGradient(productName);
        const initial = (productName || 'P').charAt(0).toUpperCase();
        
        // Create a data URL with gradient and text
        return this.createGradientDataUrl(gradient, initial);
    }

    // Create gradient data URL
    createGradientDataUrl(gradient, text) {
        const svg = `
            <svg width="300" height="300" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style="stop-color:#6366f1;stop-opacity:1" />
                        <stop offset="100%" style="stop-color:#4f46e5;stop-opacity:1" />
                    </linearGradient>
                </defs>
                <rect width="300" height="300" fill="url(#grad)"/>
                <text x="150" y="170" text-anchor="middle" fill="white" font-size="72" font-weight="bold">${text}</text>
            </svg>
        `.replace(/\s+/g, ' ').trim();

        const base64 = btoa(unescape(encodeURIComponent(svg)));
        return `data:image/svg+xml;base64,${base64}`;
    }

    // Basic placeholder fallback
    createBasicPlaceholder(productName) {
        const initial = (productName || 'P').charAt(0).toUpperCase();
        return `https://ui-avatars.com/api/?name=${encodeURIComponent(initial)}&background=6366f1&color=fff&size=300&font-size=0.4&bold=true&format=png`;
    }

    // Enhanced image loading for DOM elements
    async loadImageToElement(element, productId, productName, category = null, subcategory = null) {
        if (!element) return;

        // Set loading state
        element.classList.add('loading-image');
        
        try {
            const imageUrl = await this.getWorkingImage(productId, productName, category, subcategory);
            
            if (element.tagName === 'IMG') {
                element.src = imageUrl;
                element.onerror = () => {
                    // Emergency fallback
                    element.src = this.createBasicPlaceholder(productName);
                };
            } else {
                // For div elements, set as background
                element.style.backgroundImage = `url("${imageUrl}")`;
                element.style.backgroundSize = 'cover';
                element.style.backgroundPosition = 'center';
                element.style.backgroundRepeat = 'no-repeat';
            }
            
            console.log(`✅ Image loaded to element: ${productName}`);
        } catch (error) {
            console.error(`❌ Error loading image for ${productName}:`, error);
            
            // Emergency fallback
            const fallback = this.createBasicPlaceholder(productName);
            if (element.tagName === 'IMG') {
                element.src = fallback;
            } else {
                element.style.backgroundImage = `url("${fallback}")`;
            }
        } finally {
            element.classList.remove('loading-image');
        }
    }

    // Preload images for better performance
    async preloadImages(products) {
        console.log(`🔄 Preloading ${products.length} images...`);
        
        const preloadPromises = products.map(product => {
            return this.getWorkingImage(
                product.id, 
                product.name, 
                product.category, 
                product.subcategory
            );
        });

        try {
            await Promise.all(preloadPromises);
            console.log(`✅ Preloaded ${products.length} images successfully`);
        } catch (error) {
            console.warn('⚠️ Some images failed to preload:', error);
        }
    }

    // Clear cache and failed URLs
    clearCache() {
        this.imageCache.clear();
        this.failedUrls.clear();
        this.loadAttempts.clear();
        console.log('🧹 Image cache cleared');
    }

    // Get cache stats
    getCacheStats() {
        return {
            cached: this.imageCache.size,
            failed: this.failedUrls.size,
            attempts: this.loadAttempts.size
        };
    }
}

// Create global instance
const unifiedImageLoader = new UnifiedImageLoader();

// Export for global use
if (typeof window !== 'undefined') {
    window.UnifiedImageLoader = unifiedImageLoader;
    
    // Legacy compatibility
    window.loadImageWithRetry = (element, productId, productName, category, subcategory) => {
        return unifiedImageLoader.loadImageToElement(element, productId, productName, category, subcategory);
    };
    
    console.log('✅ Unified Image Loader ready for use!');
}

// Auto-initialize if other modules are available
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        console.log('🔄 Checking image system integration...');
        
        const stats = {
            directImages: !!window.DirectProductImages,
            svgImages: !!window.SVGProductImages,
            smartLoader: !!window.SmartImageLoader,
            inlineSVG: !!window.InlineSVGImages
        };
        
        console.log('📊 Image system status:', stats);
        
        if (Object.values(stats).every(v => v)) {
            console.log('✅ All image systems integrated successfully!');
        } else {
            console.warn('⚠️ Some image systems are missing. Check module loading order.');
        }
    }, 1000);
});
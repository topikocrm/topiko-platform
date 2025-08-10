/* ========================================
   ENHANCED IMAGE CONFIGURATION SYSTEM
   ======================================== */

// Professional Image Service Configuration
const IMAGE_SERVICES = {
    // LoremFlickr - Best for product-specific images
    loremFlickr: {
        baseUrl: 'https://loremflickr.com',
        getUrl: (width, height, keywords, lock) => 
            `https://loremflickr.com/${width}/${height}/${keywords}?lock=${lock}`
    },
    
    // Picsum - Beautiful random images
    picsum: {
        baseUrl: 'https://picsum.photos',
        getUrl: (width, height, seed) => 
            `https://picsum.photos/seed/${seed}/${width}/${height}`
    },
    
    // DummyImage - Text-based placeholders
    dummyImage: {
        baseUrl: 'https://dummyimage.com',
        getUrl: (width, height, text, bgColor = '6b46c1', textColor = 'ffffff') => 
            `https://dummyimage.com/${width}x${height}/${bgColor}/${textColor}&text=${encodeURIComponent(text)}`
    },
    
    // Placeholder.com - Simple placeholders
    placeholder: {
        baseUrl: 'https://via.placeholder.com',
        getUrl: (width, height, text, bgColor = '6b46c1', textColor = 'ffffff') => 
            `https://via.placeholder.com/${width}x${height}/${bgColor}/${textColor}?text=${encodeURIComponent(text)}`
    }
};

// Category-specific keywords for better image matching
const CATEGORY_IMAGE_KEYWORDS = {
    // Boutique & Fashion
    'mens-wear': 'mens,fashion,shirt,clothing',
    'womens-wear': 'women,fashion,dress,saree',
    'kids-wear': 'kids,children,baby,clothes',
    'designer-collection': 'luxury,wedding,designer,fashion',
    'accessories': 'bags,watches,jewelry,accessories',
    'footwear': 'shoes,sandals,footwear,sneakers',
    
    // Specific subcategories
    'shirts': 'shirt,formal,casual,mens',
    'kurtas': 'kurta,indian,ethnic,traditional',
    'sarees': 'saree,indian,women,traditional',
    'lehengas': 'lehenga,wedding,indian,bridal',
    'baby-clothes': 'baby,infant,toddler,clothes',
    'boys-clothing': 'boys,kids,children,clothing',
    'girls-clothing': 'girls,kids,children,dress',
    'designer-sarees': 'designer,saree,silk,wedding',
    'bridal-wear': 'wedding,bridal,bride,indian',
    'groom-wear': 'groom,wedding,sherwani,suit',
    
    // Food categories
    'north-indian': 'indian,food,curry,restaurant',
    'south-indian': 'dosa,idli,south,indian,food',
    'sweets-desserts': 'sweets,dessert,cake,pastry',
    'beverages': 'coffee,tea,drinks,beverages',
    
    // Salon & Beauty
    'hair-services': 'hair,salon,beauty,styling',
    'beauty-services': 'beauty,makeup,facial,spa',
    'spa-wellness': 'spa,massage,wellness,relaxation',
    
    // Electronics
    'mobile-devices': 'smartphone,mobile,phone,gadget',
    'computers': 'laptop,computer,technology,tech',
    'home-appliances': 'appliances,electronics,home,kitchen',
    
    // Default
    'default': 'product,shopping,retail,store'
};

// Static CDN images (if you have them)
const STATIC_PRODUCT_IMAGES = {
    // Example structure - replace with your CDN URLs
    'kurta-cotton-001': 'https://your-cdn.com/products/kurta-001.jpg',
    'saree-silk-001': 'https://your-cdn.com/products/saree-001.jpg',
    // Add more as needed
};

// Enhanced image retrieval function
function getOptimizedProductImage(product, category, subcategory) {
    // 1. Check for static CDN image first
    if (STATIC_PRODUCT_IMAGES[product.id]) {
        return STATIC_PRODUCT_IMAGES[product.id];
    }
    
    // 2. Get category-specific keywords
    const keywords = CATEGORY_IMAGE_KEYWORDS[subcategory] || 
                    CATEGORY_IMAGE_KEYWORDS[category] || 
                    CATEGORY_IMAGE_KEYWORDS['default'];
    
    // 3. Generate a consistent seed for the product
    const seed = product.id || `${category}-${subcategory}-${Math.random()}`;
    const lock = seed.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0) % 1000;
    
    // 4. Return LoremFlickr URL with category-specific keywords
    return IMAGE_SERVICES.loremFlickr.getUrl(300, 300, keywords, lock);
}

// Batch image preloader for better performance
function preloadProductImages(products) {
    const imagePromises = products.map(product => {
        return new Promise((resolve) => {
            const img = new Image();
            img.onload = () => resolve({ product: product.id, status: 'loaded' });
            img.onerror = () => resolve({ product: product.id, status: 'failed' });
            img.src = product.image;
        });
    });
    
    return Promise.all(imagePromises);
}

// Image optimization helper
function getResponsiveImageUrl(baseUrl, width, quality = 80) {
    // For different screen sizes
    const sizes = {
        thumbnail: 150,
        card: 300,
        detail: 600,
        full: 1200
    };
    
    return baseUrl.replace(/(\d+)x(\d+)/, `${sizes[width] || width}x${sizes[width] || width}`);
}

// Export for use in main application
if (typeof window !== 'undefined') {
    window.ImageConfig = {
        IMAGE_SERVICES,
        CATEGORY_IMAGE_KEYWORDS,
        STATIC_PRODUCT_IMAGES,
        getOptimizedProductImage,
        preloadProductImages,
        getResponsiveImageUrl
    };
    
    console.log('✅ Enhanced Image Configuration loaded!');
}
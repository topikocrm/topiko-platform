/* ========================================
   IMAGE-BASED PRODUCTS DATABASE
   Generated from 872 actual images in images/products folder
   Every product here has a real image file
   ======================================== */

(function() {
    'use strict';
    
    // Helper function to convert image name to product name
    function formatProductName(imageName) {
        // Remove file extension and clean up
        let name = imageName.replace(/\.(jpg|jpeg|png|webp|svg)$/i, '');
        
        // Replace separators with spaces
        name = name.replace(/[-_]/g, ' ');
        
        // Capitalize each word
        name = name.split(' ').map(word => 
            word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        ).join(' ');
        
        // Clean up common abbreviations
        name = name.replace(/\bspf\b/gi, 'SPF');
        name = name.replace(/\buv\b/gi, 'UV');
        name = name.replace(/\bxxl\b/gi, 'XXL');
        name = name.replace(/\bxl\b/gi, 'XL');
        
        return name;
    }
    
    // Helper function to generate description based on product type
    function generateDescription(productName, category, subcategory) {
        const templates = {
            'beauty': {
                'skincare': 'Premium skincare product for healthy, glowing skin',
                'makeup': 'High-quality makeup product for a flawless look',
                'haircare': 'Professional haircare solution for beautiful hair',
                'fragrances': 'Long-lasting fragrance with captivating scent',
                'default': 'Quality beauty product for your daily routine'
            },
            'fashion': {
                'mens': 'Stylish and comfortable menswear for modern men',
                'womens': 'Elegant and trendy womenswear for every occasion',
                'kids': 'Comfortable and durable clothing for kids',
                'default': 'Fashionable clothing with premium quality'
            },
            'footwear': {
                'mens': 'Comfortable and durable footwear for men',
                'womens': 'Stylish and comfortable footwear for women',
                'kids': 'Quality footwear designed for active kids',
                'default': 'Premium footwear combining style and comfort'
            },
            'electronics': {
                'mobiles': 'Latest technology smartphone with advanced features',
                'laptops': 'High-performance laptop for work and entertainment',
                'audio': 'Premium audio equipment for superior sound quality',
                'default': 'Quality electronics with latest technology'
            },
            'grocery': {
                'fruits': 'Fresh and nutritious fruits',
                'vegetables': 'Farm-fresh vegetables',
                'dairy': 'Fresh dairy products',
                'grains': 'Quality grains and cereals',
                'default': 'Fresh grocery items for your daily needs'
            },
            'health': {
                'medicines': 'Quality healthcare products',
                'supplements': 'Nutritional supplements for better health',
                'devices': 'Medical devices for home healthcare',
                'default': 'Healthcare products for your wellbeing'
            },
            'sports': {
                'equipment': 'Professional sports equipment',
                'fitness': 'Fitness equipment for home workouts',
                'outdoor': 'Outdoor sports and adventure gear',
                'default': 'Quality sports equipment for active lifestyle'
            },
            'home': {
                'furniture': 'Stylish furniture for modern homes',
                'decor': 'Beautiful home decor items',
                'kitchen': 'Essential kitchen items for cooking',
                'default': 'Quality home products for comfortable living'
            }
        };
        
        const categoryTemplates = templates[category] || templates['fashion'];
        return categoryTemplates[subcategory] || categoryTemplates['default'] || 'Quality product for everyday use';
    }
    
    // Helper function to generate appropriate price based on category
    function generatePrice(productName, category, subcategory) {
        const priceRanges = {
            'beauty': { min: 199, max: 2999 },
            'fashion': { min: 399, max: 4999 },
            'footwear': { min: 499, max: 3999 },
            'electronics': { min: 999, max: 99999 },
            'grocery': { min: 29, max: 999 },
            'health': { min: 99, max: 2999 },
            'sports': { min: 299, max: 9999 },
            'home': { min: 199, max: 19999 },
            'jewelry': { min: 999, max: 49999 },
            'books': { min: 99, max: 999 },
            'stationery': { min: 19, max: 499 },
            'food': { min: 49, max: 999 }
        };
        
        const range = priceRanges[category] || { min: 299, max: 2999 };
        
        // Generate price based on product name keywords
        let priceMultiplier = 1;
        const premiumKeywords = ['premium', 'luxury', 'gold', 'silk', 'leather', 'designer', 'pro', 'plus', 'advanced'];
        const budgetKeywords = ['basic', 'simple', 'economy', 'value'];
        
        const lowerName = productName.toLowerCase();
        if (premiumKeywords.some(keyword => lowerName.includes(keyword))) {
            priceMultiplier = 1.5;
        } else if (budgetKeywords.some(keyword => lowerName.includes(keyword))) {
            priceMultiplier = 0.7;
        }
        
        const basePrice = range.min + (range.max - range.min) * 0.3;
        const finalPrice = Math.round((basePrice * priceMultiplier) / 10) * 10 - 1; // Round to nearest 10 and subtract 1
        
        return Math.min(Math.max(finalPrice, range.min), range.max);
    }
    
    // Generate size variants based on category
    function generateVariants(category, subcategory) {
        const variantMap = {
            'fashion': {
                'default': ['S', 'M', 'L', 'XL', 'XXL'],
                'sarees': ['Free Size'],
                'jewelry': ['Free Size']
            },
            'footwear': {
                'mens': ['7', '8', '9', '10', '11'],
                'womens': ['5', '6', '7', '8', '9'],
                'kids': ['1', '2', '3', '4', '5']
            },
            'electronics': {
                'default': ['Standard']
            },
            'beauty': {
                'default': ['50ml', '100ml', '200ml']
            },
            'grocery': {
                'default': ['500g', '1kg', '2kg']
            }
        };
        
        const categoryVariants = variantMap[category] || variantMap['fashion'];
        return categoryVariants[subcategory] || categoryVariants['default'] || ['Standard'];
    }
    
    // Convert the LOCAL_PRODUCT_IMAGES to a full product database
    const IMAGE_BASED_PRODUCTS = [];
    
    // Import the image mappings from LocalProductImages
    if (window.LocalProductImages && window.LocalProductImages.LOCAL_PRODUCT_IMAGES) {
        const imageMap = window.LocalProductImages.LOCAL_PRODUCT_IMAGES;
        let productIndex = 0;
        
        for (const [imageId, imagePath] of Object.entries(imageMap)) {
            // Skip null entries (products without images)
            if (!imagePath) continue;
            
            // Extract category and subcategory from image path
            // Example: 'images/products/beauty/makeup/face/blush/Makeup_blush.png'
            const pathParts = imagePath.split('/');
            const category = pathParts[2] || 'general'; // beauty, fashion, etc.
            const subcategory = pathParts[3] || 'general'; // makeup, skincare, etc.
            
            // Generate product details
            const productName = formatProductName(imageId);
            const description = generateDescription(productName, category, subcategory);
            const price = generatePrice(productName, category, subcategory);
            const variants = generateVariants(category, subcategory);
            
            // Determine popularity based on common products
            const popularProducts = ['body wash', 'shampoo', 'face wash', 'lipstick', 'kurta', 'saree', 'jeans', 'shoes', 'mobile', 'laptop'];
            const isPopular = popularProducts.some(popular => productName.toLowerCase().includes(popular));
            
            // Create product object
            const product = {
                id: imageId,
                name: productName,
                image: imagePath,
                description: description,
                suggestedPrice: price,
                category: category,
                subcategory: subcategory,
                variants: variants,
                isSelected: false,
                isPopular: isPopular,
                hasRealImage: true // Flag to indicate this has a real image
            };
            
            IMAGE_BASED_PRODUCTS.push(product);
            productIndex++;
        }
    }
    
    // Organize products by category and subcategory for easy access
    const PRODUCTS_BY_CATEGORY = {};
    
    IMAGE_BASED_PRODUCTS.forEach(product => {
        if (!PRODUCTS_BY_CATEGORY[product.category]) {
            PRODUCTS_BY_CATEGORY[product.category] = {};
        }
        if (!PRODUCTS_BY_CATEGORY[product.category][product.subcategory]) {
            PRODUCTS_BY_CATEGORY[product.category][product.subcategory] = [];
        }
        PRODUCTS_BY_CATEGORY[product.category][product.subcategory].push(product);
    });
    
    // Export for global use
    window.ImageBasedProducts = {
        ALL_PRODUCTS: IMAGE_BASED_PRODUCTS,
        BY_CATEGORY: PRODUCTS_BY_CATEGORY,
        
        // Get products by category
        getProductsByCategory: function(category) {
            return PRODUCTS_BY_CATEGORY[category] || {};
        },
        
        // Get all products for selected categories
        getProductsForCategories: function(categories) {
            const products = [];
            categories.forEach(category => {
                if (PRODUCTS_BY_CATEGORY[category]) {
                    Object.values(PRODUCTS_BY_CATEGORY[category]).forEach(subcategoryProducts => {
                        products.push(...subcategoryProducts);
                    });
                }
            });
            return products;
        },
        
        // Search products
        searchProducts: function(query) {
            const lowerQuery = query.toLowerCase();
            return IMAGE_BASED_PRODUCTS.filter(product => 
                product.name.toLowerCase().includes(lowerQuery) ||
                product.description.toLowerCase().includes(lowerQuery)
            );
        },
        
        // Get product by ID
        getProductById: function(productId) {
            return IMAGE_BASED_PRODUCTS.find(p => p.id === productId);
        },
        
        // Get popular products
        getPopularProducts: function(limit = 10) {
            return IMAGE_BASED_PRODUCTS
                .filter(p => p.isPopular)
                .slice(0, limit);
        }
    };
    
    console.log(`✅ Image-based products database loaded: ${IMAGE_BASED_PRODUCTS.length} products with real images`);
})();
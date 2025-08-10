/* ========================================
   BETTER PRODUCT IMAGE SOLUTION
   Using placeholder.com with product names
   ======================================== */

// Generate product-specific placeholder with text
function getProductPlaceholder(productName, price, category) {
    // Clean product name for URL
    const shortName = (productName || 'Product')
        .split(' ')
        .slice(0, 2)
        .join(' ')
        .substring(0, 15);
    
    // Category-based colors
    const colors = {
        'boutique': '8B5CF6', // Purple
        'womens-wear': 'EC4899', // Pink
        'mens-wear': '3B82F6', // Blue
        'kids-wear': '10B981', // Green
        'designer-collection': 'F59E0B', // Gold
        'footwear': '6B7280', // Gray
        'accessories': 'EF4444', // Red
        'electronics': '1F2937', // Dark
        'home-foods': 'F97316', // Orange
        'salons': 'DB2777', // Rose
        'grocery': '059669', // Teal
        'furniture': '7C3AED', // Violet
        'default': '6366F1' // Indigo
    };
    
    const bgColor = colors[category] || colors['default'];
    
    // Use via.placeholder.com which is more reliable
    return `https://via.placeholder.com/300x300/${bgColor}/ffffff?text=${encodeURIComponent(shortName)}`;
}

// Use DummyJSON for fake product data with better images
async function fetchDummyJSONProducts() {
    try {
        const response = await fetch('https://dummyjson.com/products?limit=100');
        const data = await response.json();
        
        // Create a mapping of product types to images
        const productImageMap = {};
        data.products.forEach(product => {
            // Map by category and title keywords
            const keywords = product.title.toLowerCase().split(' ');
            keywords.forEach(keyword => {
                if (keyword.length > 3) {
                    productImageMap[keyword] = product.thumbnail;
                }
            });
            
            // Map by category
            if (product.category) {
                productImageMap[product.category.toLowerCase()] = product.thumbnail;
            }
        });
        
        window.dummyProductImages = productImageMap;
        console.log('✅ DummyJSON products loaded:', Object.keys(productImageMap).length, 'mappings');
        
        return productImageMap;
    } catch (error) {
        console.error('Error fetching DummyJSON:', error);
        return {};
    }
}

// Better CDN product images with specific Indian products
const BETTER_CDN_IMAGES = {
    // Women's Wear - Using fashion e-commerce CDNs
    'saree': 'https://cdn.pixabay.com/photo/2022/03/04/13/54/woman-7047087_640.jpg',
    'lehenga': 'https://cdn.pixabay.com/photo/2022/02/26/06/56/woman-7035059_640.jpg',
    'kurti': 'https://cdn.pixabay.com/photo/2020/07/08/04/07/woman-5382466_640.jpg',
    'salwar': 'https://cdn.pixabay.com/photo/2022/03/02/13/42/woman-7043108_640.jpg',
    'anarkali': 'https://cdn.pixabay.com/photo/2015/03/14/19/45/suit-673697_640.jpg',
    
    // Men's Wear
    'kurta': 'https://cdn.pixabay.com/photo/2020/08/14/15/22/canal-5488271_640.jpg',
    'sherwani': 'https://cdn.pixabay.com/photo/2017/08/01/20/38/man-2567924_640.jpg',
    'shirt': 'https://cdn.pixabay.com/photo/2015/08/25/11/49/man-906540_640.jpg',
    'blazer': 'https://cdn.pixabay.com/photo/2017/11/02/14/27/model-2911332_640.jpg',
    
    // Kids Wear
    'kids': 'https://cdn.pixabay.com/photo/2016/11/14/03/16/boy-1822471_640.jpg',
    'baby': 'https://cdn.pixabay.com/photo/2016/01/20/11/22/baby-1151351_640.jpg',
    'school': 'https://cdn.pixabay.com/photo/2014/07/31/23/49/child-407543_640.jpg',
    
    // Footwear
    'shoes': 'https://cdn.pixabay.com/photo/2016/11/19/18/06/feet-1840619_640.jpg',
    'sandals': 'https://cdn.pixabay.com/photo/2014/09/03/15/05/sandals-434244_640.jpg',
    'sneakers': 'https://cdn.pixabay.com/photo/2016/11/21/16/55/shoes-1846637_640.jpg',
    'heels': 'https://cdn.pixabay.com/photo/2016/03/27/22/16/fashion-1284496_640.jpg',
    
    // Accessories
    'handbag': 'https://cdn.pixabay.com/photo/2016/01/11/11/33/bag-1133260_640.jpg',
    'watch': 'https://cdn.pixabay.com/photo/2016/11/29/13/39/analog-watch-1869928_640.jpg',
    'jewelry': 'https://cdn.pixabay.com/photo/2016/02/02/15/54/jewellery-1175532_640.jpg',
    'wallet': 'https://cdn.pixabay.com/photo/2016/12/09/09/52/wallet-1894256_640.jpg'
};

// Main function to get best available image
function getBetterProductImage(product, category, subcategory) {
    const productName = (product.name || '').toLowerCase();
    const productId = product.id;
    
    // 1. First check Indian product images if available
    if (window.IndianProductImages && window.IndianProductImages.INDIAN_PRODUCT_IMAGES[productId]) {
        return window.IndianProductImages.INDIAN_PRODUCT_IMAGES[productId];
    }
    
    // 2. Check CDN images by keywords
    for (const [keyword, imageUrl] of Object.entries(BETTER_CDN_IMAGES)) {
        if (productName.includes(keyword)) {
            return imageUrl;
        }
    }
    
    // 3. Check DummyJSON mapped images
    if (window.dummyProductImages) {
        const words = productName.split(' ');
        for (const word of words) {
            if (window.dummyProductImages[word]) {
                return window.dummyProductImages[word];
            }
        }
    }
    
    // 4. Return product placeholder with name
    return getProductPlaceholder(product.name, product.suggestedPrice, category);
}

// Initialize on load
if (typeof window !== 'undefined') {
    window.BetterProductImages = {
        getProductPlaceholder,
        fetchDummyJSONProducts,
        BETTER_CDN_IMAGES,
        getBetterProductImage
    };
    
    // Auto-fetch DummyJSON products
    fetchDummyJSONProducts();
    
    console.log('✅ Better Product Images System Loaded!');
}
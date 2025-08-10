/* ========================================
   REAL PRODUCT IMAGE URLS
   Using actual e-commerce product images
   ======================================== */

const REAL_PRODUCT_IMAGES = {
    boutique: {
        'mens-wear': [
            // Kurtas
            {id: 'kurta-cotton-001', image: 'https://m.media-amazon.com/images/I/71xY9zXSyDL._AC_UL320_.jpg'},
            {id: 'shirt-formal-001', image: 'https://m.media-amazon.com/images/I/71lYY2P6BVL._AC_UL320_.jpg'},
            {id: 'sherwani-wedding-001', image: 'https://m.media-amazon.com/images/I/61PzJm2kYlL._AC_UL320_.jpg'},
            {id: 'jeans-casual-001', image: 'https://m.media-amazon.com/images/I/61KcmPn5oSL._AC_UL320_.jpg'},
            {id: 'blazer-formal-001', image: 'https://m.media-amazon.com/images/I/71WKBxqZtCL._AC_UL320_.jpg'},
            {id: 'dhoti-traditional-001', image: 'https://m.media-amazon.com/images/I/61Y7Sc8NvbL._AC_UL320_.jpg'},
            {id: 'tshirt-casual-001', image: 'https://m.media-amazon.com/images/I/61ksXcFqXPL._AC_UL320_.jpg'},
        ],
        'womens-wear': [
            {id: 'saree-silk-001', image: 'https://m.media-amazon.com/images/I/91TmVgSeRkL._AC_UL320_.jpg'},
            {id: 'lehenga-wedding-001', image: 'https://m.media-amazon.com/images/I/71+0x7PWPML._AC_UL320_.jpg'},
            {id: 'kurti-cotton-001', image: 'https://m.media-amazon.com/images/I/71mDLfU5u8L._AC_UL320_.jpg'},
            {id: 'dress-western-001', image: 'https://m.media-amazon.com/images/I/61RppqB0fJL._AC_UL320_.jpg'},
            {id: 'salwar-suit-001', image: 'https://m.media-amazon.com/images/I/71K-Dxyk6QL._AC_UL320_.jpg'},
        ],
        'kids-wear': [
            {id: 'baby-romper-001', image: 'https://m.media-amazon.com/images/I/61+BCOawZ3L._AC_UL320_.jpg'},
            {id: 'boys-tshirt-001', image: 'https://m.media-amazon.com/images/I/71z8dEqCY5L._AC_UL320_.jpg'},
            {id: 'girls-dress-001', image: 'https://m.media-amazon.com/images/I/61qPqKC1SxL._AC_UL320_.jpg'},
            {id: 'school-uniform-001', image: 'https://m.media-amazon.com/images/I/51uGdvnjPpL._AC_UL320_.jpg'},
            {id: 'kids-party-suit-001', image: 'https://m.media-amazon.com/images/I/61cYhS7GNCL._AC_UL320_.jpg'},
        ],
        'footwear': [
            {id: 'shoes-formal-001', image: 'https://m.media-amazon.com/images/I/71Jy9UeB6hL._AC_UL320_.jpg'},
            {id: 'sandals-women-001', image: 'https://m.media-amazon.com/images/I/71VmSpqQQQL._AC_UL320_.jpg'},
            {id: 'sneakers-sports-001', image: 'https://m.media-amazon.com/images/I/71D9ImsvnvL._AC_UL320_.jpg'},
        ]
    }
};

// Alternative: Use Fake Store API (free, no auth required)
const FAKESTORE_CATEGORIES = {
    'mens-clothing': 'https://fakestoreapi.com/products/category/men\'s%20clothing',
    'womens-clothing': 'https://fakestoreapi.com/products/category/women\'s%20clothing',
    'electronics': 'https://fakestoreapi.com/products/category/electronics',
    'jewelery': 'https://fakestoreapi.com/products/category/jewelery'
};

// Alternative: Use free CDN product images
const CDN_PRODUCT_IMAGES = {
    // Using Unsplash with specific product searches
    'kurta': 'https://images.unsplash.com/photo-1596783047904-4000addd05cd?w=300&h=300&fit=crop',
    'saree': 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=300&h=300&fit=crop',
    'lehenga': 'https://images.unsplash.com/photo-1583391733975-4770270d3c5e?w=300&h=300&fit=crop',
    'shirt': 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=300&h=300&fit=crop',
    'dress': 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=300&h=300&fit=crop',
    'shoes': 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=300&fit=crop',
    'watch': 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=300&h=300&fit=crop',
    'handbag': 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=300&h=300&fit=crop',
    'jewelry': 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=300&h=300&fit=crop',
    'kids': 'https://images.unsplash.com/photo-1514090458221-65bb69cf63e6?w=300&h=300&fit=crop',
    'baby': 'https://images.unsplash.com/photo-1522771930-78848d9293e8?w=300&h=300&fit=crop'
};

// Function to get real product image
function getRealProductImage(productId, productName, category, subcategory) {
    // 1. Check for specific product image
    const categoryImages = REAL_PRODUCT_IMAGES[category];
    if (categoryImages) {
        const productImage = categoryImages[subcategory]?.find(p => p.id === productId);
        if (productImage) {
            return productImage.image;
        }
    }
    
    // 2. Try to match by product type in name
    const productNameLower = productName.toLowerCase();
    for (const [key, url] of Object.entries(CDN_PRODUCT_IMAGES)) {
        if (productNameLower.includes(key)) {
            return url;
        }
    }
    
    // 3. Return category-specific image
    return CDN_PRODUCT_IMAGES[subcategory] || CDN_PRODUCT_IMAGES[category] || null;
}

// Export
if (typeof window !== 'undefined') {
    window.RealProductImages = {
        REAL_PRODUCT_IMAGES,
        CDN_PRODUCT_IMAGES,
        getRealProductImage
    };
}
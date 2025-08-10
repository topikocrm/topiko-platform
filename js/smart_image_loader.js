/* ========================================
   SMART IMAGE LOADER WITH RETRY LOGIC
   Tries multiple sources until one works
   ======================================== */

// Multiple image sources to try for each product type
const IMAGE_SOURCES = {
    // For each keyword, we have multiple image options to try
    'kurta': [
        'https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=400&fit=crop',
        'https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=400&fit=crop',
        'https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg',
        'https://via.placeholder.com/300x300/8B5CF6/ffffff?text=Kurta'
    ],
    'saree': [
        'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=400&fit=crop',
        'https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=400&fit=crop',
        'https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg',
        'https://via.placeholder.com/300x300/EC4899/ffffff?text=Saree'
    ],
    'lehenga': [
        'https://images.unsplash.com/photo-1583391733975-4770270d3c5e?w=400&fit=crop',
        'https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=400&fit=crop',
        'https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg',
        'https://via.placeholder.com/300x300/EC4899/ffffff?text=Lehenga'
    ],
    'shirt': [
        'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=400&fit=crop',
        'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&fit=crop',
        'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
        'https://via.placeholder.com/300x300/3B82F6/ffffff?text=Shirt'
    ],
    'dress': [
        'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&fit=crop',
        'https://images.unsplash.com/photo-1566479179817-c0efeb382d13?w=400&fit=crop',
        'https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg',
        'https://via.placeholder.com/300x300/EC4899/ffffff?text=Dress'
    ],
    'tshirt': [
        'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&fit=crop',
        'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&fit=crop',
        'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
        'https://via.placeholder.com/300x300/10B981/ffffff?text=T-Shirt'
    ],
    'jeans': [
        'https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&fit=crop',
        'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400&fit=crop',
        'https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg',
        'https://via.placeholder.com/300x300/1F2937/ffffff?text=Jeans'
    ],
    'shoes': [
        'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&fit=crop',
        'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&fit=crop',
        'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
        'https://via.placeholder.com/300x300/6B7280/ffffff?text=Shoes'
    ],
    'sandals': [
        'https://images.unsplash.com/photo-1603487742131-4160ec999306?w=400&fit=crop',
        'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400&fit=crop',
        'https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg',
        'https://via.placeholder.com/300x300/6B7280/ffffff?text=Sandals'
    ],
    'handbag': [
        'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&fit=crop',
        'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&fit=crop',
        'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
        'https://via.placeholder.com/300x300/EF4444/ffffff?text=Handbag'
    ],
    'watch': [
        'https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=400&fit=crop',
        'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&fit=crop',
        'https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg',
        'https://via.placeholder.com/300x300/F59E0B/ffffff?text=Watch'
    ],
    'kids': [
        'https://images.unsplash.com/photo-1514090458221-65bb69cf63e6?w=400&fit=crop',
        'https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?w=400&fit=crop',
        'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
        'https://via.placeholder.com/300x300/10B981/ffffff?text=Kids+Wear'
    ],
    'baby': [
        'https://images.unsplash.com/photo-1522771930-78848d9293e8?w=400&fit=crop',
        'https://images.unsplash.com/photo-1519689680058-324335c77eba?w=400&fit=crop',
        'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg',
        'https://via.placeholder.com/300x300/10B981/ffffff?text=Baby+Clothes'
    ],
    'jewelry': [
        'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&fit=crop',
        'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&fit=crop',
        'https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg',
        'https://via.placeholder.com/300x300/F59E0B/ffffff?text=Jewelry'
    ],
    'default': [
        'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
        'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
        'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg',
        'https://via.placeholder.com/300x300/6366F1/ffffff?text=Product'
    ]
};

// Cache for successful images
const imageCache = {};

// Function to test if an image loads successfully
function testImage(url) {
    return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => resolve(url);
        img.onerror = () => resolve(null);
        img.src = url;
    });
}

// Main function to get working image with retry
async function getWorkingProductImage(productName, productId) {
    // Check cache first
    if (imageCache[productId]) {
        console.log(`✅ Using cached image for ${productId}`);
        return imageCache[productId];
    }
    
    // Find matching image sources based on product name
    const nameLower = (productName || '').toLowerCase();
    let imageSources = IMAGE_SOURCES['default'];
    
    // Try to find better matching sources
    for (const [keyword, sources] of Object.entries(IMAGE_SOURCES)) {
        if (nameLower.includes(keyword)) {
            imageSources = sources;
            console.log(`🔍 Found keyword match: ${keyword} for ${productName}`);
            break;
        }
    }
    
    // Try each image source until one works
    for (let i = 0; i < imageSources.length; i++) {
        const url = imageSources[i];
        console.log(`🔄 Trying image ${i + 1}/${imageSources.length} for ${productName}`);
        
        const result = await testImage(url);
        if (result) {
            console.log(`✅ Image loaded successfully: ${url}`);
            imageCache[productId] = url;
            return url;
        }
    }
    
    // If nothing worked, return the last fallback
    const fallback = imageSources[imageSources.length - 1];
    console.log(`⚠️ Using final fallback for ${productName}`);
    imageCache[productId] = fallback;
    return fallback;
}

// Synchronous version that returns immediately with a placeholder
function getProductImageSync(productName, productId) {
    const nameLower = (productName || '').toLowerCase();
    
    // Try to find matching sources
    for (const [keyword, sources] of Object.entries(IMAGE_SOURCES)) {
        if (nameLower.includes(keyword)) {
            // Return first URL (will be tested async later)
            return sources[0];
        }
    }
    
    // Return default
    return IMAGE_SOURCES['default'][0];
}

// Function to update image element with retry logic
function loadImageWithRetry(imgElement, productName, productId) {
    getWorkingProductImage(productName, productId).then(url => {
        if (imgElement && url) {
            imgElement.src = url;
            imgElement.onerror = () => {
                // If this fails too, use placeholder
                imgElement.src = `https://via.placeholder.com/300x300/6366F1/ffffff?text=${encodeURIComponent(productName.substring(0, 10))}`;
            };
        }
    });
}

// Export for use
if (typeof window !== 'undefined') {
    window.SmartImageLoader = {
        IMAGE_SOURCES,
        getWorkingProductImage,
        getProductImageSync,
        loadImageWithRetry,
        testImage
    };
    
    console.log('✅ Smart Image Loader initialized!');
}
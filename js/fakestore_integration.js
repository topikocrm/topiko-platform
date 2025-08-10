/* ========================================
   FAKE STORE API INTEGRATION
   Free e-commerce API with real product images
   ======================================== */

// Fake Store API Configuration
const FAKESTORE_API = {
    baseUrl: 'https://fakestoreapi.com',
    endpoints: {
        allProducts: '/products',
        singleProduct: '/products/', // + id
        categories: '/products/categories',
        categoryProducts: '/products/category/', // + category name
        limitProducts: '/products?limit=' // + number
    }
};

// Fetch all products from Fake Store API
async function fetchFakeStoreProducts() {
    try {
        const response = await fetch(`${FAKESTORE_API.baseUrl}${FAKESTORE_API.endpoints.allProducts}`);
        const products = await response.json();
        
        console.log('📦 Fetched products from Fake Store API:', products.length);
        return products;
    } catch (error) {
        console.error('❌ Error fetching from Fake Store API:', error);
        return [];
    }
}

// Map Fake Store products to your format
function mapFakeStoreToYourFormat(fakeStoreProduct) {
    return {
        id: `fakestore-${fakeStoreProduct.id}`,
        name: fakeStoreProduct.title,
        image: fakeStoreProduct.image, // Real product image!
        description: fakeStoreProduct.description,
        suggestedPrice: Math.round(fakeStoreProduct.price * 83), // Convert USD to INR
        category: mapCategory(fakeStoreProduct.category),
        subcategory: mapSubcategory(fakeStoreProduct.category),
        variants: ['S', 'M', 'L', 'XL'],
        isSelected: false,
        isPopular: fakeStoreProduct.rating.rate > 4
    };
}

// Map Fake Store categories to your categories
function mapCategory(fakeStoreCategory) {
    const mapping = {
        "men's clothing": 'mens-wear',
        "women's clothing": 'womens-wear',
        "electronics": 'electronics',
        "jewelery": 'accessories'
    };
    return mapping[fakeStoreCategory] || 'others';
}

function mapSubcategory(fakeStoreCategory) {
    const mapping = {
        "men's clothing": 'casual-wear',
        "women's clothing": 'western-wear',
        "electronics": 'gadgets',
        "jewelery": 'jewelry'
    };
    return mapping[fakeStoreCategory] || 'general';
}

// Get products by category
async function getFakeStoreByCategory(category) {
    try {
        const response = await fetch(
            `${FAKESTORE_API.baseUrl}${FAKESTORE_API.endpoints.categoryProducts}${category}`
        );
        const products = await response.json();
        return products;
    } catch (error) {
        console.error('❌ Error fetching category:', error);
        return [];
    }
}

// Example: Use Fake Store images for your products
const FAKESTORE_IMAGE_MAPPING = {
    // Men's Wear
    'tshirt-casual-001': 'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
    'jacket-winter-001': 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg',
    'casual-shirt-001': 'https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg',
    
    // Women's Wear  
    'womens-jacket-001': 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
    'womens-tshirt-001': 'https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg',
    
    // Electronics
    'hard-disk-001': 'https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg',
    'ssd-001': 'https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg',
    'monitor-001': 'https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg',
    
    // Jewelry/Accessories
    'bracelet-001': 'https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg',
    'necklace-001': 'https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg',
    'ring-001': 'https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg'
};

// Initialize Fake Store products on page load
async function initializeFakeStoreProducts() {
    const products = await fetchFakeStoreProducts();
    
    // Store in window for global access
    window.fakeStoreProducts = products;
    
    // Map to your format
    window.fakeStoreMapped = products.map(mapFakeStoreToYourFormat);
    
    console.log('✅ Fake Store API initialized with', products.length, 'products');
    
    return window.fakeStoreMapped;
}

// Export for use
if (typeof window !== 'undefined') {
    window.FakeStoreAPI = {
        fetchFakeStoreProducts,
        getFakeStoreByCategory,
        mapFakeStoreToYourFormat,
        FAKESTORE_IMAGE_MAPPING,
        initializeFakeStoreProducts
    };
    
    // Auto-initialize
    initializeFakeStoreProducts();
}
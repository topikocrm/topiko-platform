/* ========================================
   SIMPLE RELIABLE IMAGE SYSTEM
   Direct mapping for each product
   ======================================== */

// Direct product ID to image URL mapping
const PRODUCT_IMAGE_MAP = {
    // Men's Wear
    'kurta-cotton-001': 'https://m.media-amazon.com/images/I/71sNyvc-9GL._AC_UL320_.jpg',
    'shirt-formal-001': 'https://m.media-amazon.com/images/I/41SIm-g6MQL._AC_UL320_.jpg',
    'sherwani-wedding-001': 'https://m.media-amazon.com/images/I/61MXrcYU6XL._AC_UL320_.jpg',
    'jeans-casual-001': 'https://m.media-amazon.com/images/I/71O08x+7XPL._AC_UL320_.jpg',
    'blazer-formal-001': 'https://m.media-amazon.com/images/I/71dQXp0Yw7L._AC_UL320_.jpg',
    'dhoti-traditional-001': 'https://m.media-amazon.com/images/I/61DM0oTrOQL._AC_UL320_.jpg',
    'tshirt-casual-001': 'https://m.media-amazon.com/images/I/61qlKqzhO4L._AC_UL320_.jpg',
    'tracksuit-men-001': 'https://m.media-amazon.com/images/I/61W3UYLHnuL._AC_UL320_.jpg',
    'winter-jacket-001': 'https://m.media-amazon.com/images/I/71VjM5LOeYL._AC_UL320_.jpg',
    'ethnic-kurta-designer-001': 'https://m.media-amazon.com/images/I/71Y0nVOKXsL._AC_UL320_.jpg',
    'polo-tshirt-001': 'https://m.media-amazon.com/images/I/61yjUCNkQiL._AC_UL320_.jpg',
    'nehru-jacket-001': 'https://m.media-amazon.com/images/I/61o+V9loTHL._AC_UL320_.jpg',
    'linen-shirt-001': 'https://m.media-amazon.com/images/I/71dKr0k4TdL._AC_UL320_.jpg',
    'cargo-pants-001': 'https://m.media-amazon.com/images/I/61EOiIkiWYL._AC_UL320_.jpg',
    'hoodie-winter-001': 'https://m.media-amazon.com/images/I/61NZPCkMtVL._AC_UL320_.jpg',

    // Women's Wear
    'saree-silk-001': 'https://m.media-amazon.com/images/I/91bDaemBXnL._AC_UL320_.jpg',
    'lehenga-wedding-001': 'https://m.media-amazon.com/images/I/71x6NBN5BuL._AC_UL320_.jpg',
    'kurti-cotton-001': 'https://m.media-amazon.com/images/I/71cSleKA+VL._AC_UL320_.jpg',
    'dress-western-001': 'https://m.media-amazon.com/images/I/61E2mzXO6UL._AC_UL320_.jpg',
    'salwar-suit-001': 'https://m.media-amazon.com/images/I/71ek3FcvPPL._AC_UL320_.jpg',
    'saree-cotton-001': 'https://m.media-amazon.com/images/I/81Ze3U6bpKL._AC_UL320_.jpg',
    'blouse-silk-001': 'https://m.media-amazon.com/images/I/71D4hRVZ0JL._AC_UL320_.jpg',
    'party-dress-001': 'https://m.media-amazon.com/images/I/61K-FIs8SQL._AC_UL320_.jpg',
    'palazzo-set-001': 'https://m.media-amazon.com/images/I/61OmJKKVDaL._AC_UL320_.jpg',
    'winter-shawl-001': 'https://m.media-amazon.com/images/I/71tHQP+EHXL._AC_UL320_.jpg',
    'crop-top-001': 'https://m.media-amazon.com/images/I/61dVvQNLAaL._AC_UL320_.jpg',
    'anarkali-suit-001': 'https://m.media-amazon.com/images/I/71R5bBvPgKL._AC_UL320_.jpg',
    'jeans-women-001': 'https://m.media-amazon.com/images/I/71cZzurHBRL._AC_UL320_.jpg',
    'ethnic-jacket-001': 'https://m.media-amazon.com/images/I/61ZiM8mZ7WL._AC_UL320_.jpg',
    'formal-shirt-women-001': 'https://m.media-amazon.com/images/I/71XEwpK6v7L._AC_UL320_.jpg',

    // Kids Wear
    'baby-romper-001': 'https://m.media-amazon.com/images/I/61B2jiHFYkL._AC_UL320_.jpg',
    'boys-tshirt-001': 'https://m.media-amazon.com/images/I/61joiWLh5LL._AC_UL320_.jpg',
    'girls-dress-001': 'https://m.media-amazon.com/images/I/61Qb7C3gFsL._AC_UL320_.jpg',
    'school-uniform-001': 'https://m.media-amazon.com/images/I/51rks10EJNL._AC_UL320_.jpg',
    'kids-party-suit-001': 'https://m.media-amazon.com/images/I/51T5h5E4HQL._AC_UL320_.jpg',
    'kids-kurta-001': 'https://m.media-amazon.com/images/I/71ZCxMKQjGL._AC_UL320_.jpg',
    'kids-pajama-001': 'https://m.media-amazon.com/images/I/61lYGfCKA1L._AC_UL320_.jpg',
    'kids-swimsuit-001': 'https://m.media-amazon.com/images/I/71MwE7ghe5L._AC_UL320_.jpg',
    'kids-jacket-001': 'https://m.media-amazon.com/images/I/514NipHFvuL._AC_UL320_.jpg',
    'baby-onesie-001': 'https://m.media-amazon.com/images/I/51xKjnBNYGL._AC_UL320_.jpg',
    'boys-shorts-001': 'https://m.media-amazon.com/images/I/61sKbJmaKgL._AC_UL320_.jpg',
    'girls-lehenga-001': 'https://m.media-amazon.com/images/I/71o5wM3XpXL._AC_UL320_.jpg',

    // Designer Collection
    'designer-saree-001': 'https://m.media-amazon.com/images/I/71GBrJitFyL._AC_UL320_.jpg',
    'designer-lehenga-001': 'https://m.media-amazon.com/images/I/61UgTXL0JOL._AC_UL320_.jpg',
    'designer-suit-001': 'https://m.media-amazon.com/images/I/71VyB2BqxKL._AC_UL320_.jpg',
    'bridal-lehenga-001': 'https://m.media-amazon.com/images/I/71cBz3F1PCL._AC_UL320_.jpg',
    'groom-sherwani-001': 'https://m.media-amazon.com/images/I/61VMDPZA7PL._AC_UL320_.jpg',
    'cocktail-dress-001': 'https://m.media-amazon.com/images/I/61AUoUgBjBL._AC_UL320_.jpg',
    'evening-gown-001': 'https://m.media-amazon.com/images/I/61LBqYQykbL._AC_UL320_.jpg',
    'luxury-handbag-001': 'https://m.media-amazon.com/images/I/71Y12hUMxIL._AC_UL320_.jpg',
    'premium-watch-001': 'https://m.media-amazon.com/images/I/71XkG-3aRWL._AC_UL320_.jpg',
    'designer-saree-002': 'https://m.media-amazon.com/images/I/81WudxL-9WL._AC_UL320_.jpg',
    'groom-suit-001': 'https://m.media-amazon.com/images/I/61FU-RZnw1L._AC_UL320_.jpg',
    'luxury-clutch-001': 'https://m.media-amazon.com/images/I/71iCn7SYuIL._AC_UL320_.jpg',

    // Footwear
    'shoes-formal-001': 'https://m.media-amazon.com/images/I/71G5YFRJKQL._AC_UL320_.jpg',
    'sandals-women-001': 'https://m.media-amazon.com/images/I/61utX8kBDlL._AC_UL320_.jpg',
    'sneakers-sports-001': 'https://m.media-amazon.com/images/I/61Dw5Z8LzJL._AC_UL320_.jpg',
    'chappals-leather-001': 'https://m.media-amazon.com/images/I/61t9sHHONkL._AC_UL320_.jpg',
    'heels-party-001': 'https://m.media-amazon.com/images/I/61EBp8uCuPL._AC_UL320_.jpg',
    'boots-winter-001': 'https://m.media-amazon.com/images/I/71h0fZMDnFL._AC_UL320_.jpg',
    'slippers-home-001': 'https://m.media-amazon.com/images/I/61QCKF6Z5lL._AC_UL320_.jpg',
    'floaters-casual-001': 'https://m.media-amazon.com/images/I/71pMypG2nQL._AC_UL320_.jpg',
    'ethnic-mojari-001': 'https://m.media-amazon.com/images/I/71zLPOFCZaL._AC_UL320_.jpg',

    // Accessories
    'handbag-leather-001': 'https://m.media-amazon.com/images/I/71-QO7P3IML._AC_UL320_.jpg',
    'watch-analog-001': 'https://m.media-amazon.com/images/I/71H1bgGLGGL._AC_UL320_.jpg',
    'sunglasses-uv-001': 'https://m.media-amazon.com/images/I/61AYbVoUjbL._AC_UL320_.jpg',
    'wallet-leather-001': 'https://m.media-amazon.com/images/I/71A++kqOqVL._AC_UL320_.jpg',
    'scarf-silk-001': 'https://m.media-amazon.com/images/I/71V9G4PkY1L._AC_UL320_.jpg',
    'belt-leather-001': 'https://m.media-amazon.com/images/I/61OZC-bdnaL._AC_UL320_.jpg',
    'backpack-travel-001': 'https://m.media-amazon.com/images/I/71PYZlcXTmL._AC_UL320_.jpg',
    'cap-sports-001': 'https://m.media-amazon.com/images/I/61-llYH++NL._AC_UL320_.jpg',
    'jewelry-earrings-001': 'https://m.media-amazon.com/images/I/61SDHNzxp5L._AC_UL320_.jpg'
};

// Simple fallback for unmapped products
const CATEGORY_DEFAULTS = {
    'mens-wear': 'https://m.media-amazon.com/images/I/71sNyvc-9GL._AC_UL320_.jpg',
    'womens-wear': 'https://m.media-amazon.com/images/I/91bDaemBXnL._AC_UL320_.jpg',
    'kids-wear': 'https://m.media-amazon.com/images/I/61B2jiHFYkL._AC_UL320_.jpg',
    'designer-collection': 'https://m.media-amazon.com/images/I/71GBrJitFyL._AC_UL320_.jpg',
    'footwear': 'https://m.media-amazon.com/images/I/71G5YFRJKQL._AC_UL320_.jpg',
    'accessories': 'https://m.media-amazon.com/images/I/71-QO7P3IML._AC_UL320_.jpg'
};

// Get image for product - VERY SIMPLE
function getSimpleProductImage(productId, category, subcategory) {
    // 1. Direct mapping
    if (PRODUCT_IMAGE_MAP[productId]) {
        return PRODUCT_IMAGE_MAP[productId];
    }
    
    // 2. Category default
    if (CATEGORY_DEFAULTS[subcategory]) {
        return CATEGORY_DEFAULTS[subcategory];
    }
    
    if (CATEGORY_DEFAULTS[category]) {
        return CATEGORY_DEFAULTS[category];
    }
    
    // 3. Generic fashion image
    return 'https://m.media-amazon.com/images/I/71sNyvc-9GL._AC_UL320_.jpg';
}

// Export
if (typeof window !== 'undefined') {
    window.SimpleProductImages = {
        PRODUCT_IMAGE_MAP,
        CATEGORY_DEFAULTS,
        getSimpleProductImage
    };
    
    console.log('✅ Simple Product Images Loaded with', Object.keys(PRODUCT_IMAGE_MAP).length, 'products!');
}
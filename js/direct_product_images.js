/* ========================================
   DIRECT PRODUCT IMAGE MAPPING
   Maps product IDs to local image files
   ======================================== */

// Direct mapping - product ID to local image path
const DIRECT_IMAGE_MAP = {
    // ========== MEN'S WEAR ==========
    'kurta-cotton-001': '/images/products/fashion/mens-clothing/ethnic/kurta-white-cotton/kurta-white-cotton.png',
    'kurta-cotton-002': '/images/products/fashion/mens-clothing/ethnic/kurta-blue-silk/kurta-blue-silk.png',
    'kurta-cotton-003': '/images/products/fashion/mens-clothing/ethnic/kurta-pajama-set/kurta-pajama-set.png',
    
    'shirt-formal-001': '/images/products/fashion/mens-clothing/shirts/formal-white-shirt/formal-white-shirt.png',
    'shirt-formal-002': '/images/products/fashion/mens-clothing/shirts/formal-blue-shirt/formal-blue-shirt.jpg',
    'shirt-formal-003': '/images/products/fashion/mens-clothing/shirts/formal-black-shirt/formal-black-shirt.png',
    
    'tshirt-casual-001': '/images/products/fashion/mens-clothing/tshirts/polo-navy-blue/polo-navy-blue.jpeg',
    'tshirt-casual-002': '/images/products/fashion/mens-clothing/tshirts/round-neck-black/round-neck-black.png',
    'tshirt-casual-003': '/images/products/fashion/mens-clothing/tshirts/v-neck-blue/v-neck-blue.png',
    
    'jeans-casual-001': '/images/products/fashion/mens-clothing/jeans/slim-fit-blue/slim-fit-blue.png',
    'jeans-casual-002': '/images/products/fashion/mens-clothing/jeans/regular-fit-black/regular-fit-black.jpeg',
    'jeans-casual-003': '/images/products/fashion/mens-clothing/jeans/skinny-grey/skinny-grey.webp',
    
    // ========== WOMEN'S WEAR ==========
    'saree-silk-001': '/images/products/fashion/womens-clothing/sarees/silk-red-saree/silk-red-saree.png',
    'saree-silk-002': '/images/products/fashion/womens-clothing/sarees/cotton-blue-saree/cotton-blue-saree.png',
    'saree-silk-003': '/images/products/fashion/womens-clothing/sarees/georgette-pink-saree/georgette-pink-saree.jpeg',
    
    'lehenga-wedding-001': '/images/products/fashion/womens-clothing/lehenga/bridal-red-lehenga/bridal-red-lehenga.png',
    'lehenga-wedding-002': '/images/products/fashion/womens-clothing/lehenga/party-blue-lehenga/party-blue-lehenga.png',
    'lehenga-wedding-003': '/images/products/fashion/womens-clothing/lehenga/crop-top-lehenga/crop-top-lehenga.png',
    
    'kurti-cotton-001': '/images/products/fashion/womens-clothing/kurtis/cotton-white-kurti/cotton-white-kurti.jpeg',
    'kurti-cotton-002': '/images/products/fashion/womens-clothing/kurtis/printed-blue-kurti/printed-blue-kurti.jpeg',
    'kurti-cotton-003': '/images/products/fashion/womens-clothing/kurtis/embroidered-kurti/embroidered-kurti.png',
    
    'dress-western-001': '/images/products/fashion/womens-clothing/western/midi-dress/midi-dress.jpg',
    'dress-western-002': '/images/products/fashion/womens-clothing/western/maxi-dress/maxi-dress.jpg',
    'dress-western-003': '/images/products/fashion/womens-clothing/western/shirt-dress/shirt-dress.jpg',
    
    // ========== FOOTWEAR ==========
    'shoes-formal-001': '/images/products/footwear/mens/formal/oxford-shoes-black/oxford-shoes-black.png',
    'shoes-formal-002': '/images/products/footwear/mens/formal/derby-shoes-brown/derby-shoes-brown.png',
    
    'sneakers-sports-001': '/images/products/footwear/mens/sports/running-shoes/running-shoes.png',
    'sneakers-sports-002': '/images/products/footwear/mens/sports/basketball-shoes/basketball-shoes.jpg',
    
    'sandals-women-001': '/images/products/footwear/womens/sandals/flat-sandals/flat-sandals.png',
    'sandals-women-002': '/images/products/footwear/womens/sandals/wedge-sandals/wedge-sandals.jpg',
    
    // ========== ACCESSORIES ==========
    'handbag-leather-001': '/images/products/fashion/accessories/bags/handbag-tote/handbag-tote.png',
    'handbag-leather-002': '/images/products/fashion/accessories/bags/sling-bag/sling-bag.png',
    
    'watch-analog-001': '/images/products/fashion/accessories/watches/analog-watch-mens/analog-watch-mens.jpeg',
    'watch-analog-002': '/images/products/jewelry/watches/womens/analog-gold/analog-gold.jpg',
    
    'sunglasses-uv-001': '/images/products/fashion/accessories/sunglasses/aviator/aviator.jpg',
    'wallet-leather-001': '/images/products/fashion/accessories/wallets/mens-leather/mens-leather.jpg',
    'cap-sports-001': '/images/products/fashion/accessories/caps/baseball-cap/baseball-cap.png',
    'luxury-handbag-001': '/images/products/fashion/accessories/bags/handbag-tote/handbag-tote.png',
    
    // ========== ELECTRONICS ==========
    'mobile-samsung-001': '/images/products/electronics/mobiles/smartphones/samsung-s23/samsung-s23.jpg',
    'mobile-iphone-001': '/images/products/electronics/mobiles/smartphones/iphone-15/iphone-15.jpg',
    'laptop-dell-001': '/images/products/electronics/laptops/business/dell-inspiron/dell-inspiron.jpg',
    'laptop-hp-001': '/images/products/electronics/laptops/budget/hp-pavilion/hp-pavilion.png',
    'headphones-sony-001': '/images/products/electronics/audio/headphones/sony-wh1000xm5/sony-wh1000xm5.png',
    'earbuds-boat-001': '/images/products/electronics/audio/earbuds/boat-airdopes/boat-airdopes.png',
    
    // ========== FOOD ==========
    'biryani-chicken-001': '/images/products/food/indian/north-indian/chicken-biryani/chicken-biryani.jpg',
    'pizza-margherita-001': '/images/products/food/international/italian/pizza-margherita/pizza-margherita.png',
    'burger-veg-001': '/images/products/food/international/american/burger/burger.jpg',
    'dosa-masala-001': '/images/products/food/indian/south-indian/masala-dosa/masala-dosa.jpg',
    'samosa-001': '/images/products/food/indian/street-food/samosa/samosa.png',
    'gulab-jamun-001': '/images/products/food/sweets/traditional/gulab-jamun/gulab-jamun.png',
    'gajar-halwa-001': '/images/products/food/sweets/traditional/halwa-gajar/halwa-gajar.png',
    'rasmalai-001': '/images/products/food/sweets/traditional/rasmalai/rasmalai.png',
    'rasgulla-001': '/images/products/food/sweets/traditional/rasgulla/rasgulla.webp',
    'kheer-rice-001': '/images/products/food/sweets/traditional/kheer/kheer.webp',
    'kulfi-malai-001': '/images/products/food/desserts/ice-cream/kulfi-malai/kulfi-malai.png',
    'chocolate-cake-001': '/images/products/food/desserts/cakes/chocolate-cake/chocolate-cake.png',
    'chole-bhature-001': '/images/products/food/indian/north-indian/chole-bhature/chole-bhature.png',
    
    // ========== GROCERY ==========
    'rice-basmati-001': '/images/products/grocery/rice/rice/basmati/basmati-premium/basmati-premium.jpg',
    'oil-sunflower-001': '/images/products/grocery/oils/cooking/sunflower-oil/sunflower-oil.png',
    'dal-toor-001': '/images/products/grocery/pulses/dal/toor-dal/toor-dal.webp',
    'atta-wheat-001': '/images/products/grocery/rice/flour/wheat/whole-wheat-atta/whole-wheat-atta.jpg',
    
    // ========== BEAUTY ==========
    'facewash-001': '/images/products/beauty/skincare/cleansers/face-wash-gel/face-wash-gel.png',
    'lipstick-red-001': '/images/products/beauty/makeup/lips/lipstick-red/lipstick-red.png',
    'shampoo-001': '/images/products/beauty/haircare/shampoo/anti-dandruff/anti-dandruff.jpg',
    'perfume-001': '/images/products/beauty/fragrances/perfumes/perfume-women/perfume-women.jpg',
    
    // ========== HOME & FURNITURE ==========
    'sofa-3seater-001': '/images/products/home/living-room/sofas/3-seater-fabric/3-seater-fabric.jpg',
    'bed-double-001': '/images/products/home/bedroom/beds/double-bed-wooden/double-bed-wooden.png',
    'wardrobe-3door-001': '/images/products/home/bedroom/wardrobes/3-door-wardrobe/3-door-wardrobe.jpg',
    'dining-table-001': '/images/products/home/dining/dining-tables/6-seater-wooden/6-seater-wooden.jpg'
};

// Simple function to get image URL for product ID
function getDirectProductImage(productId) {
    // First check direct mapping
    if (DIRECT_IMAGE_MAP[productId]) {
        return DIRECT_IMAGE_MAP[productId];
    }
    
    // If LocalProductImages is loaded, use it as fallback
    if (window.LocalProductImages) {
        const localImage = window.LocalProductImages.getLocalProductImage(productId);
        if (localImage && !localImage.includes('placeholder')) {
            return localImage;
        }
    }
    
    return null;
}

// Export for global use
if (typeof window !== 'undefined') {
    window.DirectProductImages = {
        DIRECT_IMAGE_MAP,
        getDirectProductImage
    };
    
    console.log(`✅ Direct Product Images loaded - ${Object.keys(DIRECT_IMAGE_MAP).length} local mappings`);
}
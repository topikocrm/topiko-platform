/* ========================================
   DIRECT PRODUCT IMAGE MAPPING
   Simple, clean mappings to working image URLs only
   ======================================== */

// Direct mapping - product ID to working image URL
const DIRECT_IMAGE_MAP = {
    // ========== MEN'S WEAR ==========
    'kurta-cotton-001': 'https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=400&h=400&fit=crop',
    'kurta-cotton-002': 'https://images.unsplash.com/photo-1566479179817-c0efeb382d13?w=400&h=400&fit=crop',
    'kurta-cotton-003': 'https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=400&h=400&fit=crop',
    
    'shirt-formal-001': 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=400&h=400&fit=crop',
    'shirt-formal-002': 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&h=400&fit=crop',
    'shirt-formal-003': 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=400&h=400&fit=crop',
    
    'tshirt-casual-001': 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop',
    'tshirt-casual-002': 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&h=400&fit=crop',
    'tshirt-casual-003': 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop',
    
    'jeans-casual-001': 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=400&fit=crop',
    'jeans-casual-002': 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400&h=400&fit=crop',
    'jeans-casual-003': 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=400&fit=crop',
    
    // ========== WOMEN'S WEAR ==========
    'saree-silk-001': 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=400&h=400&fit=crop',
    'saree-silk-002': 'https://images.unsplash.com/photo-1583391733975-4770270d3c5e?w=400&h=400&fit=crop',
    'saree-silk-003': 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=400&h=400&fit=crop',
    
    'lehenga-wedding-001': 'https://images.unsplash.com/photo-1594736797933-d0ea8baa3b9a?w=400&h=400&fit=crop',
    'lehenga-wedding-002': 'https://images.unsplash.com/photo-1583391733975-4770270d3c5e?w=400&h=400&fit=crop',
    'lehenga-wedding-003': 'https://images.unsplash.com/photo-1594736797933-d0ea8baa3b9a?w=400&h=400&fit=crop',
    
    'kurti-cotton-001': 'https://images.unsplash.com/photo-1583391733975-4770270d3c5e?w=400&h=400&fit=crop',
    'kurti-cotton-002': 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=400&h=400&fit=crop',
    'kurti-cotton-003': 'https://images.unsplash.com/photo-1583391733975-4770270d3c5e?w=400&h=400&fit=crop',
    
    'dress-western-001': 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=400&fit=crop',
    'dress-western-002': 'https://images.unsplash.com/photo-1566479179817-c0efeb382d13?w=400&h=400&fit=crop',
    'dress-western-003': 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=400&fit=crop',
    
    // ========== FOOTWEAR ==========
    'shoes-formal-001': 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop',
    'shoes-formal-002': 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop',
    
    'sneakers-sports-001': 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=400&h=400&fit=crop',
    'sneakers-sports-002': 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=400&h=400&fit=crop',
    
    'sandals-women-001': 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400&h=400&fit=crop',
    'sandals-women-002': 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400&h=400&fit=crop',
    
    // ========== ACCESSORIES ==========
    'handbag-leather-001': 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop',
    'handbag-leather-002': 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop',
    
    'watch-analog-001': 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop',
    'watch-analog-002': 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop',
    
    'sunglasses-uv-001': 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400&h=400&fit=crop',
    'wallet-leather-001': 'https://images.unsplash.com/photo-1627123424574-724758594e93?w=400&h=400&fit=crop'
};

// Simple function to get image URL for product ID
function getDirectProductImage(productId) {
    return DIRECT_IMAGE_MAP[productId] || null;
}

// Export for global use
if (typeof window !== 'undefined') {
    window.DirectProductImages = {
        DIRECT_IMAGE_MAP,
        getDirectProductImage
    };
    
    console.log(`✅ Direct Product Images loaded - ${Object.keys(DIRECT_IMAGE_MAP).length} working mappings`);
}
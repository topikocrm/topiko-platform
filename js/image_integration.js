/* ========================================
   IMAGE INTEGRATION HELPER
   Easy integration of unified image system
   ======================================== */

// Simple helper to load images on any page
function initializeProductImages() {
    console.log('🔧 Initializing product images...');
    
    // Find all elements that need product images
    const imageElements = document.querySelectorAll('[data-product-id]');
    
    imageElements.forEach(async (element) => {
        const productId = element.getAttribute('data-product-id');
        const productName = element.getAttribute('data-product-name') || 'Product';
        const category = element.getAttribute('data-category');
        const subcategory = element.getAttribute('data-subcategory');
        
        if (window.UnifiedImageLoader) {
            await window.UnifiedImageLoader.loadImageToElement(
                element, 
                productId, 
                productName, 
                category, 
                subcategory
            );
        } else {
            console.warn('UnifiedImageLoader not available');
        }
    });
}

// Legacy support for existing functions
function updateProductImage(element, productId, productName, category, subcategory) {
    if (window.UnifiedImageLoader) {
        return window.UnifiedImageLoader.loadImageToElement(
            element, 
            productId, 
            productName, 
            category, 
            subcategory
        );
    }
}

// Auto-initialize when page loads
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(initializeProductImages, 500);
});

// Export functions
if (typeof window !== 'undefined') {
    window.ImageIntegration = {
        initializeProductImages,
        updateProductImage
    };
    
    console.log('✅ Image Integration Helper loaded');
}
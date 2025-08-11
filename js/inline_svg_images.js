/* ========================================
   INLINE SVG PRODUCT IMAGES
   Using inline SVG elements for better compatibility
   ======================================== */

// Create SVG element from template
function createSVGElement(svgString) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(svgString, 'image/svg+xml');
    return doc.documentElement;
}

// Get SVG as HTML string for direct insertion
function getSVGHTML(productName) {
    const nameLower = (productName || '').toLowerCase();
    
    // Determine which SVG to use based on product name
    let svgColor = '#6366f1';
    let svgIcon = 'M';
    
    if (nameLower.includes('kurta')) {
        svgColor = '#8b5cf6';
        svgIcon = 'K';
    } else if (nameLower.includes('saree')) {
        svgColor = '#ec4899';
        svgIcon = 'S';
    } else if (nameLower.includes('lehenga')) {
        svgColor = '#f59e0b';
        svgIcon = 'L';
    } else if (nameLower.includes('shirt')) {
        svgColor = '#3b82f6';
        svgIcon = 'S';
    } else if (nameLower.includes('dress')) {
        svgColor = '#ec4899';
        svgIcon = 'D';
    } else if (nameLower.includes('tshirt') || nameLower.includes('t-shirt')) {
        svgColor = '#10b981';
        svgIcon = 'T';
    } else if (nameLower.includes('jean') || nameLower.includes('pant')) {
        svgColor = '#1f2937';
        svgIcon = 'J';
    } else if (nameLower.includes('shoe') || nameLower.includes('sandal')) {
        svgColor = '#6b7280';
        svgIcon = 'F';
    } else if (nameLower.includes('bag')) {
        svgColor = '#ef4444';
        svgIcon = 'B';
    } else if (nameLower.includes('watch')) {
        svgColor = '#f59e0b';
        svgIcon = 'W';
    } else if (nameLower.includes('jewelry')) {
        svgColor = '#fbbf24';
        svgIcon = 'J';
    } else if (nameLower.includes('kids')) {
        svgColor = '#10b981';
        svgIcon = 'K';
    }
    
    // Simple, clean SVG that should work everywhere
    return `<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect width="200" height="200" fill="#f3f4f6"/>
        <rect x="40" y="40" width="120" height="120" rx="10" fill="${svgColor}" opacity="0.9"/>
        <text x="100" y="110" text-anchor="middle" fill="white" font-size="48" font-weight="bold">${svgIcon}</text>
    </svg>`;
}

// Get CSS gradient as ultra-fallback
function getCSSGradient(productName) {
    const nameLower = (productName || '').toLowerCase();
    
    if (nameLower.includes('kurta')) {
        return 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)';
    } else if (nameLower.includes('saree')) {
        return 'linear-gradient(135deg, #ec4899 0%, #db2777 100%)';
    } else if (nameLower.includes('lehenga')) {
        return 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)';
    } else if (nameLower.includes('shirt')) {
        return 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)';
    } else if (nameLower.includes('dress')) {
        return 'linear-gradient(135deg, #ec4899 0%, #db2777 100%)';
    } else if (nameLower.includes('tshirt') || nameLower.includes('t-shirt')) {
        return 'linear-gradient(135deg, #10b981 0%, #059669 100%)';
    } else if (nameLower.includes('jean') || nameLower.includes('pant')) {
        return 'linear-gradient(135deg, #1f2937 0%, #111827 100%)';
    } else if (nameLower.includes('shoe') || nameLower.includes('sandal')) {
        return 'linear-gradient(135deg, #6b7280 0%, #4b5563 100%)';
    } else if (nameLower.includes('bag')) {
        return 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)';
    } else if (nameLower.includes('watch')) {
        return 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)';
    } else if (nameLower.includes('jewelry')) {
        return 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)';
    } else if (nameLower.includes('kids')) {
        return 'linear-gradient(135deg, #10b981 0%, #059669 100%)';
    }
    
    return 'linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)';
}

// Apply fallback styling to element
function applyFallbackStyle(element, productName) {
    if (!element) return;
    
    // Apply gradient background
    element.style.background = getCSSGradient(productName);
    element.style.position = 'relative';
    
    // Add text overlay
    const initial = (productName || 'P').charAt(0).toUpperCase();
    element.innerHTML = `<div style="
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: white;
        font-size: 48px;
        font-weight: bold;
        text-shadow: 0 2px 4px rgba(0,0,0,0.3);
    ">${initial}</div>`;
}

// Enhanced image getter with multiple fallback levels
function getProductImageWithFallbacks(productId, productName) {
    // Level 1: Check direct mapping
    if (window.DirectProductImages) {
        const directImage = window.DirectProductImages.getDirectProductImage(productId);
        if (directImage) {
            return {
                type: 'url',
                value: directImage
            };
        }
    }
    
    // Level 2: Return SVG HTML for inline rendering
    return {
        type: 'svg',
        value: getSVGHTML(productName)
    };
}

// Apply image to element with proper fallbacks
function applyImageToElement(element, productId, productName) {
    const imageData = getProductImageWithFallbacks(productId, productName);
    
    if (imageData.type === 'url') {
        // Regular image URL
        element.style.backgroundImage = `url('${imageData.value}')`;
        element.style.backgroundSize = 'cover';
        element.style.backgroundPosition = 'center';
    } else if (imageData.type === 'svg') {
        // Use CSS gradient fallback since SVG data URIs might not work
        applyFallbackStyle(element, productName);
    }
}

// Export
if (typeof window !== 'undefined') {
    window.InlineSVGImages = {
        createSVGElement,
        getSVGHTML,
        getCSSGradient,
        applyFallbackStyle,
        getProductImageWithFallbacks,
        applyImageToElement
    };
    
    console.log('✅ Inline SVG Images loaded - Enhanced fallback system ready!');
}
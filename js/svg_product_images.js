/* ========================================
   SVG PRODUCT IMAGES - Vector fallbacks
   Clean, professional vector images for products
   ======================================== */

// SVG templates for different product types
const SVG_TEMPLATES = {
    // T-Shirt SVG
    'tshirt': `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <rect width="200" height="200" fill="#f3f4f6"/>
        <path d="M50 60 L50 40 Q50 30 60 30 L80 30 Q85 35 90 35 L110 35 Q115 35 120 30 L140 30 Q150 30 150 40 L150 60 L130 80 L130 150 Q130 160 120 160 L80 160 Q70 160 70 150 L70 80 Z" 
              fill="#a78bfa" stroke="#7c3aed" stroke-width="2"/>
    </svg>`,
    
    // Dress SVG
    'dress': `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <rect width="200" height="200" fill="#f3f4f6"/>
        <path d="M70 40 Q70 30 80 30 L120 30 Q130 30 130 40 L130 60 Q125 65 120 65 L80 65 Q75 65 70 60 Z" 
              fill="#ec4899" stroke="#db2777" stroke-width="2"/>
        <path d="M60 65 L140 65 L150 170 Q150 180 140 180 L60 180 Q50 180 50 170 Z" 
              fill="#ec4899" stroke="#db2777" stroke-width="2"/>
    </svg>`,
    
    // Kurta SVG
    'kurta': `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <rect width="200" height="200" fill="#f3f4f6"/>
        <path d="M60 40 Q60 30 70 30 L90 30 Q95 35 100 35 Q105 35 110 30 L130 30 Q140 30 140 40 L140 140 Q140 150 130 150 L110 150 L110 180 L90 180 L90 150 L70 150 Q60 150 60 140 Z" 
              fill="#8b5cf6" stroke="#7c3aed" stroke-width="2"/>
        <line x1="100" y1="40" x2="100" y2="120" stroke="#7c3aed" stroke-width="2"/>
    </svg>`,
    
    // Saree SVG
    'saree': `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <rect width="200" height="200" fill="#f3f4f6"/>
        <path d="M40 30 L160 30 L160 170 L40 170 Z" fill="#f472b6" stroke="#ec4899" stroke-width="2"/>
        <path d="M40 150 L160 150 L160 170 L40 170 Z" fill="#db2777"/>
        <path d="M40 30 Q80 50 120 40 Q160 30 160 30" fill="none" stroke="#ec4899" stroke-width="2"/>
    </svg>`,
    
    // Lehenga SVG
    'lehenga': `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <rect width="200" height="200" fill="#f3f4f6"/>
        <path d="M80 40 Q80 30 90 30 L110 30 Q120 30 120 40 L120 60 L80 60 Z" 
              fill="#f59e0b" stroke="#d97706" stroke-width="2"/>
        <path d="M60 65 L140 65 L160 180 L40 180 Z" 
              fill="#f59e0b" stroke="#d97706" stroke-width="2"/>
        <circle cx="100" cy="65" r="3" fill="#d97706"/>
    </svg>`,
    
    // Shirt SVG
    'shirt': `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <rect width="200" height="200" fill="#f3f4f6"/>
        <path d="M60 50 L60 40 Q60 35 65 35 L80 35 L85 30 Q90 25 100 25 Q110 25 115 30 L120 35 L135 35 Q140 35 140 40 L140 50 L125 65 L125 160 L75 160 L75 65 Z" 
              fill="#3b82f6" stroke="#2563eb" stroke-width="2"/>
        <line x1="100" y1="35" x2="100" y2="120" stroke="#2563eb" stroke-width="2"/>
        <circle cx="100" cy="50" r="2" fill="#2563eb"/>
        <circle cx="100" cy="70" r="2" fill="#2563eb"/>
        <circle cx="100" cy="90" r="2" fill="#2563eb"/>
    </svg>`,
    
    // Pants/Jeans SVG
    'pants': `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <rect width="200" height="200" fill="#f3f4f6"/>
        <path d="M70 30 L130 30 L130 100 L110 100 L100 120 L90 100 L70 100 Z" 
              fill="#1f2937" stroke="#111827" stroke-width="2"/>
        <path d="M70 100 L70 180 L90 180 L90 100" fill="#1f2937" stroke="#111827" stroke-width="2"/>
        <path d="M110 100 L110 180 L130 180 L130 100" fill="#1f2937" stroke="#111827" stroke-width="2"/>
    </svg>`,
    
    // Shoes SVG
    'shoes': `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <rect width="200" height="200" fill="#f3f4f6"/>
        <ellipse cx="100" cy="120" rx="60" ry="30" fill="#6b7280" stroke="#4b5563" stroke-width="2"/>
        <path d="M40 120 Q40 100 60 95 L140 95 Q160 100 160 120" fill="#6b7280" stroke="#4b5563" stroke-width="2"/>
        <circle cx="80" cy="105" r="3" fill="#4b5563"/>
        <circle cx="100" cy="105" r="3" fill="#4b5563"/>
        <circle cx="120" cy="105" r="3" fill="#4b5563"/>
    </svg>`,
    
    // Handbag SVG
    'handbag': `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <rect width="200" height="200" fill="#f3f4f6"/>
        <rect x="50" y="80" width="100" height="80" rx="10" fill="#ef4444" stroke="#dc2626" stroke-width="2"/>
        <path d="M75 80 Q75 60 85 50 Q95 40 100 40 Q105 40 115 50 Q125 60 125 80" 
              fill="none" stroke="#dc2626" stroke-width="3" stroke-linecap="round"/>
        <circle cx="100" cy="120" r="8" fill="#dc2626"/>
    </svg>`,
    
    // Watch SVG
    'watch': `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <rect width="200" height="200" fill="#f3f4f6"/>
        <rect x="85" y="40" width="30" height="120" rx="5" fill="#6b7280" stroke="#4b5563" stroke-width="2"/>
        <circle cx="100" cy="100" r="35" fill="#fbbf24" stroke="#f59e0b" stroke-width="2"/>
        <circle cx="100" cy="100" r="30" fill="#fff"/>
        <line x1="100" y1="100" x2="100" y2="80" stroke="#1f2937" stroke-width="2" stroke-linecap="round"/>
        <line x1="100" y1="100" x2="115" y2="105" stroke="#1f2937" stroke-width="2" stroke-linecap="round"/>
        <circle cx="100" cy="100" r="3" fill="#1f2937"/>
    </svg>`,
    
    // Jewelry SVG
    'jewelry': `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <rect width="200" height="200" fill="#f3f4f6"/>
        <circle cx="100" cy="100" r="40" fill="none" stroke="#fbbf24" stroke-width="4"/>
        <circle cx="100" cy="60" r="8" fill="#fbbf24"/>
        <circle cx="130" cy="80" r="8" fill="#fbbf24"/>
        <circle cx="130" cy="120" r="8" fill="#fbbf24"/>
        <circle cx="100" cy="140" r="8" fill="#fbbf24"/>
        <circle cx="70" cy="120" r="8" fill="#fbbf24"/>
        <circle cx="70" cy="80" r="8" fill="#fbbf24"/>
    </svg>`,
    
    // Kids wear SVG
    'kids': `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <rect width="200" height="200" fill="#f3f4f6"/>
        <path d="M70 60 L70 50 Q70 45 75 45 L85 45 Q90 40 100 40 Q110 40 115 45 L125 45 Q130 45 130 50 L130 60 L120 70 L120 120 Q120 125 115 125 L85 125 Q80 125 80 120 L80 70 Z" 
              fill="#10b981" stroke="#059669" stroke-width="2"/>
        <circle cx="90" cy="85" r="5" fill="#059669"/>
        <circle cx="110" cy="85" r="5" fill="#059669"/>
        <path d="M90 100 Q100 105 110 100" fill="none" stroke="#059669" stroke-width="2" stroke-linecap="round"/>
    </svg>`,
    
    // Default/Generic product SVG
    'default': `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <rect width="200" height="200" fill="#f3f4f6"/>
        <rect x="50" y="50" width="100" height="100" rx="10" fill="#6366f1" stroke="#4f46e5" stroke-width="2"/>
        <text x="100" y="105" text-anchor="middle" fill="white" font-size="16" font-weight="bold">Product</text>
    </svg>`
};

// Generate SVG data URL from template
function getSVGDataURL(svgTemplate) {
    // Remove unnecessary whitespace and newlines for cleaner encoding
    const cleanedSvg = svgTemplate.replace(/\s+/g, ' ').trim();
    // Use base64 encoding for better compatibility
    const base64 = btoa(unescape(encodeURIComponent(cleanedSvg)));
    return `data:image/svg+xml;base64,${base64}`;
}

// Get appropriate SVG for product
function getProductSVG(productName, productId) {exit
    
    const nameLower = (productName || '').toLowerCase();
    
    // Check for specific product types
    if (nameLower.includes('kurta')) return getSVGDataURL(SVG_TEMPLATES['kurta']);
    if (nameLower.includes('saree')) return getSVGDataURL(SVG_TEMPLATES['saree']);
    if (nameLower.includes('lehenga')) return getSVGDataURL(SVG_TEMPLATES['lehenga']);
    if (nameLower.includes('shirt') && !nameLower.includes('t-shirt')) return getSVGDataURL(SVG_TEMPLATES['shirt']);
    if (nameLower.includes('t-shirt') || nameLower.includes('tshirt')) return getSVGDataURL(SVG_TEMPLATES['tshirt']);
    if (nameLower.includes('dress') || nameLower.includes('gown')) return getSVGDataURL(SVG_TEMPLATES['dress']);
    if (nameLower.includes('pant') || nameLower.includes('jean') || nameLower.includes('trouser')) return getSVGDataURL(SVG_TEMPLATES['pants']);
    if (nameLower.includes('shoe') || nameLower.includes('sandal') || nameLower.includes('heel') || nameLower.includes('sneaker')) return getSVGDataURL(SVG_TEMPLATES['shoes']);
    if (nameLower.includes('bag') || nameLower.includes('purse') || nameLower.includes('clutch')) return getSVGDataURL(SVG_TEMPLATES['handbag']);
    if (nameLower.includes('watch')) return getSVGDataURL(SVG_TEMPLATES['watch']);
    if (nameLower.includes('jewelry') || nameLower.includes('earring') || nameLower.includes('necklace') || nameLower.includes('ring')) return getSVGDataURL(SVG_TEMPLATES['jewelry']);
    if (nameLower.includes('kids') || nameLower.includes('baby') || nameLower.includes('boys') || nameLower.includes('girls')) return getSVGDataURL(SVG_TEMPLATES['kids']);
    
    // Check for variations
    if (nameLower.includes('suit') && !nameLower.includes('swim')) return getSVGDataURL(SVG_TEMPLATES['kurta']);
    if (nameLower.includes('palazzo')) return getSVGDataURL(SVG_TEMPLATES['pants']);
    if (nameLower.includes('top') || nameLower.includes('blouse')) return getSVGDataURL(SVG_TEMPLATES['tshirt']);
    if (nameLower.includes('jacket') || nameLower.includes('blazer')) return getSVGDataURL(SVG_TEMPLATES['shirt']);
    if (nameLower.includes('sherwani')) return getSVGDataURL(SVG_TEMPLATES['kurta']);
    if (nameLower.includes('anarkali')) return getSVGDataURL(SVG_TEMPLATES['dress']);
    
    // Default
    return getSVGDataURL(SVG_TEMPLATES['default']);
}

// Enhanced image getter with SVG fallback
function getProductImageWithSVGFallback(productId, productName) {
    // First check if we have a direct image mapping
    if (window.DirectProductImages) {
        const directImage = window.DirectProductImages.getDirectProductImage(productId);
        if (directImage) {
            return directImage;
        }
    }
    
    // Return appropriate SVG as fallback
    return getProductSVG(productName, productId);
}

// Test SVG functionality
function testSVGRendering() {
    const testSvg = SVG_TEMPLATES['tshirt'];
    const dataUrl = getSVGDataURL(testSvg);
    console.log('📐 Testing SVG Data URL (first 100 chars):', dataUrl.substring(0, 100));
    
    // Create a test image to verify it loads
    const testImg = new Image();
    testImg.onload = () => console.log('✅ SVG test successful - Images can render!');
    testImg.onerror = () => console.log('❌ SVG test failed - Check encoding!');
    testImg.src = dataUrl;
}

// Export
if (typeof window !== 'undefined') {
    window.SVGProductImages = {
        SVG_TEMPLATES,
        getSVGDataURL,
        getProductSVG,
        getProductImageWithSVGFallback,
        testSVGRendering
    };
    
    console.log('✅ SVG Product Images loaded - Vector fallbacks ready!');
    // Run test on load
    setTimeout(testSVGRendering, 100);
}
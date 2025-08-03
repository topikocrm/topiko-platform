/* ========================================
   TOPIKO LEAD FORM - ENHANCED CONFIGURATION & DATA
   🖼️ ENHANCED UNSPLASH IMAGE SYSTEM IMPLEMENTED
   ======================================== */

// ========================================
// API CONFIGURATION
// ========================================

const SUPABASE_CONFIG = {
    URL: 'https://xssbtsfjtwjholygdbqo.supabase.co',
    ANON_KEY: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhzc2J0c2ZqdHdqaG9seWdkYnFvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTMxOTk5MjUsImV4cCI6MjA2ODc3NTkyNX0.eOSIHTpvllcH-fK6MARoe5HPiXlujsrzUWfAhmUh94k'
};

// ========================================
// 🖼️ ENHANCED UNSPLASH IMAGE SYSTEM
// ========================================

// Enhanced Unsplash URL formatting with proper API parameters
function formatUnsplashUrl(photoId, width = 300, height = 300, quality = 80) {
    return `https://images.unsplash.com/photo-${photoId}?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=${width}&h=${height}&q=${quality}`;
}

// Dynamic Unsplash Source URL generator
function getUnsplashSourceUrl(searchTerms, width = 300, height = 300, sig = 'random') {
    const encodedTerms = encodeURIComponent(searchTerms);
    return `https://source.unsplash.com/${width}x${height}/?${encodedTerms}&sig=${sig}`;
}

// Category-specific search terms for better image matching
function getCategorySearchTerms(category, subcategory) {
    const searchTerms = {
        'mens-wear': 'indian+mens+clothing+kurta+shirt',
        'womens-wear': 'indian+women+saree+dress+ethnic',
        'accessories': 'fashion+accessories+bags+jewelry',
        'footwear': 'shoes+footwear+sandals',
        'north-indian': 'indian+food+curry+biryani+dal',
        'south-indian': 'south+indian+dosa+idli+food',
        'sweets-desserts': 'indian+sweets+desserts+mithai',
        'beverages': 'drinks+beverages+tea+coffee',
        'hair-services': 'hair+salon+beauty+styling',
        'beauty-services': 'beauty+makeup+facial+spa',
        'spa-wellness': 'spa+massage+wellness+therapy',
        'fresh-produce': 'vegetables+fruits+fresh+organic',
        'staples': 'grains+rice+spices+ingredients',
        'packaged-foods': 'packaged+food+snacks+groceries',
        'mobile-devices': 'smartphone+mobile+electronics',
        'computers': 'laptop+computer+technology',
        'home-appliances': 'home+appliances+kitchen+electronics',
        'gym-fitness': 'gym+fitness+workout+exercise',
        'yoga-meditation': 'yoga+meditation+wellness+mindfulness',
        'fine-dining': 'fine+dining+restaurant+gourmet',
        'casual-dining': 'casual+dining+food+restaurant',
        'cafes': 'cafe+coffee+bakery+pastries'
    };
    
    return searchTerms[subcategory] || searchTerms[category] || 'business+product+service';
}

// Enhanced fallback images with multiple options per category
const ENHANCED_FALLBACK_IMAGES = {
    'mens-wear': [
        formatUnsplashUrl('1620012253295-c15cc3e65df4'),
        formatUnsplashUrl('1596755094514-f87e34085b2c'),
        formatUnsplashUrl('1583743814966-8936f37f4ec6'),
        getUnsplashSourceUrl('indian+mens+clothing+kurta+shirt', 300, 300, 'mens1')
    ],
    'womens-wear': [
        formatUnsplashUrl('1515372039744-b8f02a3ae446'),
        formatUnsplashUrl('1583744946564-b52ac1c389c8'),
        formatUnsplashUrl('1594223274512-ad4803739b7c'),
        getUnsplashSourceUrl('indian+women+saree+dress+ethnic', 300, 300, 'women1')
    ],
    'accessories': [
        formatUnsplashUrl('1553062407-98eeb64c6a62'),
        formatUnsplashUrl('1523275335684-37898b6baf30'),
        formatUnsplashUrl('1511499767150-a48a237f0083'),
        getUnsplashSourceUrl('fashion+accessories+bags+jewelry', 300, 300, 'acc1')
    ],
    'footwear': [
        formatUnsplashUrl('1549298916-b41d501d3772'),
        formatUnsplashUrl('1543163521-1bf539c55dd2'),
        formatUnsplashUrl('1560769629-975ec94e6a86'),
        getUnsplashSourceUrl('shoes+footwear+sandals', 300, 300, 'foot1')
    ],
    'north-indian': [
        formatUnsplashUrl('1585937421612-70a008356fbe'),
        formatUnsplashUrl('1565557623262-b51c2513a641'),
        formatUnsplashUrl('1631515243349-e0cb75fb8d3a'),
        getUnsplashSourceUrl('indian+food+curry+biryani+dal', 300, 300, 'north1')
    ],
    'south-indian': [
        formatUnsplashUrl('1630383249896-424e482df921'),
        formatUnsplashUrl('1589301760014-d929f3979dbc'),
        formatUnsplashUrl('1606491956689-2ea866880c84'),
        getUnsplashSourceUrl('south+indian+dosa+idli+food', 300, 300, 'south1')
    ],
    'sweets-desserts': [
        formatUnsplashUrl('1571877277200-a0d98ea607e9'),
        formatUnsplashUrl('1578985545062-69928b1d9587'),
        getUnsplashSourceUrl('indian+sweets+desserts+mithai', 300, 300, 'sweet1')
    ],
    'beverages': [
        formatUnsplashUrl('1571934811356-5cc061b6821f'),
        formatUnsplashUrl('1546173159-315724a31696'),
        formatUnsplashUrl('1553979459-d2229ba7433a'),
        getUnsplashSourceUrl('drinks+beverages+tea+coffee', 300, 300, 'bev1')
    ],
    'hair-services': [
        formatUnsplashUrl('1560869713-7d0954d92f5b'),
        formatUnsplashUrl('1521590832167-7bcbfaa6381f'),
        formatUnsplashUrl('1562004760-acb5685654e8'),
        getUnsplashSourceUrl('hair+salon+beauty+styling', 300, 300, 'hair1')
    ],
    'beauty-services': [
        formatUnsplashUrl('1616394584738-fc6e612e71b9'),
        formatUnsplashUrl('1487412947147-5cebf100ffc2'),
        formatUnsplashUrl('1580618672591-eb180b1a973f'),
        getUnsplashSourceUrl('beauty+makeup+facial+spa', 300, 300, 'beauty1')
    ],
    'spa-wellness': [
        formatUnsplashUrl('1616394584738-fc6e612e71b9'),
        getUnsplashSourceUrl('spa+massage+wellness+therapy', 300, 300, 'spa1')
    ],
    'fresh-produce': [
        formatUnsplashUrl('1546470427-e1295e888100'),
        formatUnsplashUrl('1618512496248-a07fe83aa8cb'),
        formatUnsplashUrl('1571771894821-ce9b6c11b08e'),
        getUnsplashSourceUrl('vegetables+fruits+fresh+organic', 300, 300, 'produce1')
    ],
    'staples': [
        formatUnsplashUrl('1586201375761-83865001e31c'),
        formatUnsplashUrl('1596097900113-bdf6c7ffaba6'),
        formatUnsplashUrl('1474979266404-7eaacbcd87c5'),
        getUnsplashSourceUrl('grains+rice+spices+ingredients', 300, 300, 'staples1')
    ],
    'packaged-foods': [
        formatUnsplashUrl('1558961363-fa8fdf82db35'),
        formatUnsplashUrl('1563636619-e9143da7973b'),
        formatUnsplashUrl('1509440159596-0249088772ff'),
        getUnsplashSourceUrl('packaged+food+snacks+groceries', 300, 300, 'packed1')
    ],
    'mobile-devices': [
        formatUnsplashUrl('1511707171634-5f897ff02aa9'),
        formatUnsplashUrl('1484704849700-f032a568e944'),
        formatUnsplashUrl('1609592707680-9d9b9f1e7bf9'),
        getUnsplashSourceUrl('smartphone+mobile+electronics', 300, 300, 'mobile1')
    ],
    'computers': [
        formatUnsplashUrl('1496181133206-80ce9b88a853'),
        formatUnsplashUrl('1587829741301-dc798b83add3'),
        formatUnsplashUrl('1527864550417-7fd91fc51a46'),
        getUnsplashSourceUrl('laptop+computer+technology', 300, 300, 'comp1')
    ],
    'home-appliances': [
        formatUnsplashUrl('1586953208448-b95a79798f07'),
        formatUnsplashUrl('1558618666-fcd25c85cd64'),
        getUnsplashSourceUrl('home+appliances+kitchen+electronics', 300, 300, 'appliance1')
    ],
    'gym-fitness': [
        formatUnsplashUrl('1534438327276-14e5300c3a48'),
        formatUnsplashUrl('1571019613454-1cb2f99b2d8b'),
        formatUnsplashUrl('1593095948071-474c5cc2989d'),
        getUnsplashSourceUrl('gym+fitness+workout+exercise', 300, 300, 'gym1')
    ],
    'yoga-meditation': [
        formatUnsplashUrl('1506126613408-eca07ce68773'),
        formatUnsplashUrl('1593811167562-9cef47bfc4a7'),
        getUnsplashSourceUrl('yoga+meditation+wellness+mindfulness', 300, 300, 'yoga1')
    ],
    'fine-dining': [
        formatUnsplashUrl('1551183053-bf91a1d81141'),
        formatUnsplashUrl('1532636618209-8da5c4bf2c5a'),
        formatUnsplashUrl('1565557623262-b51c2513a641'),
        getUnsplashSourceUrl('fine+dining+restaurant+gourmet', 300, 300, 'fine1')
    ],
    'casual-dining': [
        formatUnsplashUrl('1513104890138-7c749659a591'),
        formatUnsplashUrl('1568901346375-23c9450c58cd'),
        formatUnsplashUrl('1509722747041-616f39b57569'),
        getUnsplashSourceUrl('casual+dining+food+restaurant', 300, 300, 'casual1')
    ],
    'cafes': [
        formatUnsplashUrl('1571934811356-5cc061b6821f'),
        formatUnsplashUrl('1509440159596-0249088772ff'),
        getUnsplashSourceUrl('cafe+coffee+bakery+pastries', 300, 300, 'cafe1')
    ],
    'default': [
        formatUnsplashUrl('1505740420928-5e560c06d30e'),
        formatUnsplashUrl('1556742049-0cfed4f6a45d'),
        formatUnsplashUrl('1544947950-fa07a98d237f'),
        getUnsplashSourceUrl('business+product+service', 300, 300, 'default1')
    ]
};

// Smart image retrieval with 4-layer fallback system
function getReliableProductImage(product, category, subcategory, attemptIndex = 0) {
    console.log(`🖼️ Getting reliable image for: ${product.id || 'unknown'} (attempt ${attemptIndex + 1})`);
    
    if (attemptIndex === 0 && product.image) {
        // Layer 1: Original image (properly formatted if Unsplash)
        if (product.image.includes('unsplash.com') && !product.image.includes('ixlib=rb-4.0.3')) {
            // Extract photo ID and reformat
            const photoIdMatch = product.image.match(/photo-([a-zA-Z0-9_-]+)/);
            if (photoIdMatch) {
                const properUrl = formatUnsplashUrl(photoIdMatch[1]);
                console.log(`🔧 Reformatted Unsplash URL: ${properUrl}`);
                return properUrl;
            }
        }
        return product.image;
    }
    
    // Layer 2: Category-specific fallback images
    const categoryKey = subcategory || category;
    if (attemptIndex === 1 && ENHANCED_FALLBACK_IMAGES[categoryKey]) {
        const fallbacks = ENHANCED_FALLBACK_IMAGES[categoryKey];
        const fallbackUrl = fallbacks[Math.floor(Math.random() * fallbacks.length)];
        console.log(`🎯 Using category fallback: ${fallbackUrl}`);
        return fallbackUrl;
    }
    
    // Layer 3: Dynamic Unsplash Source API
    if (attemptIndex === 2) {
        const searchTerms = getCategorySearchTerms(category, subcategory);
        const dynamicUrl = getUnsplashSourceUrl(searchTerms, 300, 300, `${category}-${Date.now()}`);
        console.log(`🔍 Using dynamic source: ${dynamicUrl}`);
        return dynamicUrl;
    }
    
    // Layer 4: SVG placeholder (always works)
    console.log(`📦 Using final placeholder for: ${product.id || 'unknown'}`);
    return getPlaceholderImage();
}

// Enhanced fallback image function
function getFallbackImage(category, subcategory) {
    return getReliableProductImage({ id: 'fallback' }, category, subcategory, 1);
}

// Ultimate fallback - SVG placeholder
function getPlaceholderImage() {
    return 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDMwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiIGZpbGw9IiNGN0Y4RkEiLz48Y2lyY2xlIGN4PSIxNTAiIGN5PSIxMjAiIHI9IjMwIiBmaWxsPSIjRTVFN0VCIi8+PHBhdGggZD0iTTEyMCAxNTBIMTgwVjE4MEgxMjBWMTUwWiIgZmlsbD0iI0U1RTdFQiIvPjx0ZXh0IHg9IjE1MCIgeT0iMjMwIiBmb250LWZhbWlseT0iYXJpYWwiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM5Q0EzQUYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPk5vIEltYWdlPC90ZXh0Pjwvc3ZnPg==';
}

// Frontend image loading with retry
function loadImageWithRetry(imageElement, productId, category, subcategory, maxAttempts = 4) {
    let currentAttempt = 0;
    
    function attemptLoad() {
        const reliableUrl = getReliableProductImage(
            { id: productId, image: imageElement.src }, 
            category, 
            subcategory, 
            currentAttempt
        );
        
        const testImg = new Image();
        testImg.onload = () => {
            console.log(`✅ Image loaded successfully: ${productId} (attempt ${currentAttempt + 1})`);
            imageElement.src = reliableUrl;
            if (imageElement.style) {
                imageElement.style.backgroundImage = `url("${reliableUrl}")`;
            }
        };
        
        testImg.onerror = () => {
            currentAttempt++;
            if (currentAttempt < maxAttempts) {
                console.log(`🔄 Trying fallback ${currentAttempt + 1} for: ${productId}`);
                setTimeout(attemptLoad, 500); // Brief delay before retry
            } else {
                console.log(`📦 All attempts failed for: ${productId}, using placeholder`);
                const placeholder = getPlaceholderImage();
                imageElement.src = placeholder;
                if (imageElement.style) {
                    imageElement.style.backgroundImage = `url("${placeholder}")`;
                }
            }
        };
        
        testImg.src = reliableUrl;
    }
    
    attemptLoad();
}

// ========================================
// STEP CONFIGURATION
// ========================================

const STEP_CONFIG = {
    ORDER: [
        'welcome',
        'language', 
        'goals',
        'registration',
        'qualifying-questions',
        'categories',
        'products',
        'themes'
    ],
    PROGRESS_STEPS: ['goals', 'registration', 'qualifying-questions', 'categories', 'products', 'themes']
};

// ========================================
// SPECIAL OFFERS CONFIGURATION
// ========================================

const SPECIAL_OFFERS = [
    {
        id: 'free_logo_design',
        title: 'Free Logo Design',
        description: 'Professional logo design worth ₹5,000 absolutely free'
    },
    {
        id: 'free_onboarding_setup',
        title: 'Free Onboarding Setup',
        description: 'Complete business setup and onboarding assistance'
    },
    {
        id: 'free_meta_campaign',
        title: 'Free Meta Campaign Setup',
        description: 'Facebook & Instagram advertising setup worth ₹8,000'
    },
    {
        id: 'extra_seo_keywords',
        title: '2 Extra SEO Keywords',
        description: 'Additional keyword optimization for better search ranking'
    },
    {
        id: 'digital_visiting_card',
        title: 'Free Digital Visiting Card',
        description: 'Modern digital business card with QR code'
    },
    {
        id: 'social_media_templates',
        title: 'Free Social Media Post Template',
        description: 'Professional social media post templates for your brand'
    },
    {
        id: 'whatsapp_business_setup',
        title: 'Free WhatsApp Business Setup',
        description: 'Complete WhatsApp Business configuration and automation'
    },
    {
        id: 'google_my_business',
        title: 'Free Google My Business Listing',
        description: 'Professional Google Business profile setup and optimization'
    },
    {
        id: 'payment_gateway_setup',
        title: 'Free Payment Gateway Setup',
        description: 'Secure payment gateway integration worth ₹3,000'
    },
    {
        id: 'custom_domain',
        title: 'Free Custom Domain (.in) for 1 Year',
        description: 'Professional .in domain name registration worth ₹1,500'
    },
    {
        id: 'analytics_report_setup',
        title: 'Free Analytics Report Setup',
        description: 'Google Analytics and performance tracking setup'
    },
    {
        id: 'priority_support',
        title: 'Priority Support for 1st Month',
        description: 'Dedicated support and faster response times'
    },
    {
        id: 'custom_website_change',
        title: 'One custom change to website',
        description: 'Free website customization and modification'
    }
];

// ========================================
// BUSINESS CATEGORIES DATA
// ========================================

const BUSINESS_CATEGORIES = {
    boutique: {
        id: 'boutique',
        name: 'Boutique & Fashion',
        icon: '🏪',
        categories: {
            'mens-wear': {
                name: "Men's Wear",
                icon: '👔',
                subcategories: ['shirts', 'pants', 'suits', 'ethnic-wear', 'casual-wear', 'formal-wear', 'kurtas', 'sherwanis']
            },
            'womens-wear': {
                name: "Women's Wear",
                icon: '👗',
                subcategories: ['dresses', 'tops', 'bottoms', 'sarees', 'lehengas', 'salwar-suits', 'western-wear', 'ethnic-wear', 'kurtis']
            },
            'accessories': {
                name: 'Fashion Accessories',
                icon: '👜',
                subcategories: ['bags', 'belts', 'wallets', 'scarves', 'hats', 'sunglasses', 'watches', 'jewelry']
            },
            'footwear': {
                name: 'Footwear',
                icon: '👠',
                subcategories: ['mens-shoes', 'womens-shoes', 'sandals', 'boots', 'sneakers', 'ethnic-footwear']
            }
        }
    },
    'home-foods': {
        id: 'home-foods',
        name: 'Home Foods & Catering',
        icon: '🍛',
        categories: {
            'north-indian': {
                name: 'North Indian Cuisine',
                icon: '🍛',
                subcategories: ['rotis-parathas', 'curries', 'dal-preparations', 'rice-dishes', 'snacks', 'biryanis', 'tandoor-items']
            },
            'south-indian': {
                name: 'South Indian Cuisine',
                icon: '🥥',
                subcategories: ['dosas', 'idlis', 'vadas', 'uttapam', 'sambar', 'rasam', 'chutneys', 'appams']
            },
            'sweets-desserts': {
                name: 'Sweets & Desserts',
                icon: '🧁',
                subcategories: ['traditional-sweets', 'cakes', 'pastries', 'ice-creams', 'mithai', 'cookies']
            },
            'beverages': {
                name: 'Beverages',
                icon: '☕',
                subcategories: ['tea', 'coffee', 'fresh-juices', 'smoothies', 'traditional-drinks', 'lassi']
            }
        }
    },
    salons: {
        id: 'salons',
        name: 'Salons & Beauty',
        icon: '💄',
        categories: {
            'hair-services': {
                name: 'Hair Services',
                icon: '💇',
                subcategories: ['haircuts', 'hair-coloring', 'hair-styling', 'hair-treatments', 'keratin', 'rebonding']
            },
            'beauty-services': {
                name: 'Beauty Services',
                icon: '✨',
                subcategories: ['facials', 'makeup', 'eyebrow-threading', 'manicure', 'pedicure', 'waxing']
            },
            'spa-wellness': {
                name: 'Spa & Wellness',
                icon: '🧘',
                subcategories: ['massages', 'body-treatments', 'aromatherapy', 'reflexology', 'steam-baths']
            }
        }
    },
    grocery: {
        id: 'grocery',
        name: 'Grocery & Provisions',
        icon: '🛒',
        categories: {
            'fresh-produce': {
                name: 'Fresh Produce',
                icon: '🥬',
                subcategories: ['vegetables', 'fruits', 'herbs', 'organic-produce', 'seasonal-items']
            },
            'staples': {
                name: 'Staples & Grains',
                icon: '🍚',
                subcategories: ['rice', 'wheat', 'pulses', 'spices', 'oils', 'flour']
            },
            'packaged-foods': {
                name: 'Packaged Foods',
                icon: '📦',
                subcategories: ['snacks', 'beverages', 'dairy', 'frozen-foods', 'ready-to-eat']
            }
        }
    },
    furniture: {
        id: 'furniture',
        name: 'Furniture & Home Decor',
        icon: '🛋️',
        categories: {
            'living-room': {
                name: 'Living Room',
                icon: '🛋️',
                subcategories: ['sofas', 'coffee-tables', 'tv-units', 'recliners', 'bean-bags']
            },
            'bedroom': {
                name: 'Bedroom',
                icon: '🛏️',
                subcategories: ['beds', 'wardrobes', 'mattresses', 'dressing-tables', 'bedside-tables']
            },
            'home-decor': {
                name: 'Home Decor',
                icon: '🎨',
                subcategories: ['wall-art', 'curtains', 'lighting', 'plants', 'mirrors', 'rugs']
            }
        }
    },
    electronics: {
        id: 'electronics',
        name: 'Electronics & Gadgets',
        icon: '📱',
        categories: {
            'mobile-devices': {
                name: 'Mobile Devices',
                icon: '📱',
                subcategories: ['smartphones', 'tablets', 'accessories', 'chargers', 'cases', 'headphones']
            },
            'computers': {
                name: 'Computers & Laptops',
                icon: '💻',
                subcategories: ['laptops', 'desktops', 'monitors', 'keyboards', 'mice', 'printers']
            },
            'home-appliances': {
                name: 'Home Appliances',
                icon: '🏠',
                subcategories: ['refrigerators', 'washing-machines', 'air-conditioners', 'fans', 'heaters']
            }
        }
    },
    jewellery: {
        id: 'jewellery',
        name: 'Jewellery & Accessories',
        icon: '💍',
        categories: {
            'gold-jewelry': {
                name: 'Gold Jewellery',
                icon: '👑',
                subcategories: ['necklaces', 'earrings', 'bangles', 'rings', 'chains', 'pendants']
            },
            'silver-jewelry': {
                name: 'Silver Jewellery',
                icon: '✨',
                subcategories: ['rings', 'bracelets', 'anklets', 'nose-pins', 'toe-rings']
            },
            'fashion-jewelry': {
                name: 'Fashion Jewellery',
                icon: '💎',
                subcategories: ['artificial-jewelry', 'costume-jewelry', 'beaded-jewelry', 'oxidized-jewelry']
            }
        }
    },
    restaurants: {
        id: 'restaurants',
        name: 'Restaurants & Cafes',
        icon: '🍽️',
        categories: {
            'fine-dining': {
                name: 'Fine Dining',
                icon: '🍽️',
                subcategories: ['multi-cuisine', 'continental', 'italian', 'chinese', 'thai', 'mexican']
            },
            'casual-dining': {
                name: 'Casual Dining',
                icon: '🍕',
                subcategories: ['pizza', 'burgers', 'sandwiches', 'wraps', 'pasta', 'grilled-items']
            },
            'cafes': {
                name: 'Cafes & Bakeries',
                icon: '☕',
                subcategories: ['coffee', 'tea', 'pastries', 'cakes', 'cookies', 'breakfast-items']
            }
        }
    },
    fitness: {
        id: 'fitness',
        name: 'Fitness & Wellness',
        icon: '💪',
        categories: {
            'gym-fitness': {
                name: 'Gym & Fitness',
                icon: '🏋️',
                subcategories: ['weight-training', 'cardio', 'group-classes', 'personal-training', 'crossfit']
            },
            'yoga-meditation': {
                name: 'Yoga & Meditation',
                icon: '🧘',
                subcategories: ['hatha-yoga', 'vinyasa', 'meditation', 'pranayama', 'therapeutic-yoga']
            },
            'sports': {
                name: 'Sports Activities',
                icon: '⚽',
                subcategories: ['badminton', 'tennis', 'swimming', 'cricket', 'football', 'basketball']
            }
        }
    },
    education: {
        id: 'education',
        name: 'Education & Training',
        icon: '📚',
        categories: {
            'academic-coaching': {
                name: 'Academic Coaching',
                icon: '🎓',
                subcategories: ['math-tutoring', 'science-coaching', 'language-classes', 'exam-prep', 'homework-help']
            },
            'skill-development': {
                name: 'Skill Development',
                icon: '💻',
                subcategories: ['computer-courses', 'programming', 'digital-marketing', 'graphic-design', 'photography']
            },
            'arts-music': {
                name: 'Arts & Music',
                icon: '🎵',
                subcategories: ['music-lessons', 'dance-classes', 'art-classes', 'crafts', 'singing']
            }
        }
    },
    automotive: {
        id: 'automotive',
        name: 'Automotive Services',
        icon: '🚗',
        categories: {
            'repair-maintenance': {
                name: 'Repair & Maintenance',
                icon: '🔧',
                subcategories: ['engine-repair', 'brake-service', 'oil-change', 'tire-service', 'battery-replacement']
            },
            'car-accessories': {
                name: 'Car Accessories',
                icon: '🚙',
                subcategories: ['seat-covers', 'floor-mats', 'audio-systems', 'navigation', 'car-care-products']
            }
        }
    },
    healthcare: {
        id: 'healthcare',
        name: 'Healthcare Services',
        icon: '🏥',
        categories: {
            'general-medicine': {
                name: 'General Medicine',
                icon: '👨‍⚕️',
                subcategories: ['consultations', 'health-checkups', 'vaccinations', 'prescriptions', 'diagnostics']
            },
            'specialty-care': {
                name: 'Specialty Care',
                icon: '🩺',
                subcategories: ['dentistry', 'orthopedics', 'cardiology', 'dermatology', 'ophthalmology']
            }
        }
    },
    professional: {
        id: 'professional',
        name: 'Professional Services',
        icon: '💼',
        categories: {
            'legal-services': {
                name: 'Legal Services',
                icon: '⚖️',
                subcategories: ['legal-consultation', 'documentation', 'court-representation', 'contract-drafting']
            },
            'financial-services': {
                name: 'Financial Services',
                icon: '💰',
                subcategories: ['tax-filing', 'accounting', 'investment-advice', 'loan-assistance', 'insurance']
            }
        }
    },
    'arts-crafts': {
        id: 'arts-crafts',
        name: 'Arts & Crafts',
        icon: '🎨',
        categories: {
            'handmade-items': {
                name: 'Handmade Items',
                icon: '✋',
                subcategories: ['pottery', 'woodwork', 'textiles', 'paintings', 'sculptures', 'decorative-items']
            },
            'craft-supplies': {
                name: 'Craft Supplies',
                icon: '🖌️',
                subcategories: ['paints', 'brushes', 'canvas', 'clay', 'fabrics', 'beads']
            }
        }
    },
    travel: {
        id: 'travel',
        name: 'Travel & Tourism',
        icon: '✈️',
        categories: {
            'travel-planning': {
                name: 'Travel Planning',
                icon: '🗺️',
                subcategories: ['tour-packages', 'hotel-booking', 'flight-booking', 'visa-assistance', 'travel-insurance']
            },
            'local-tours': {
                name: 'Local Tours',
                icon: '🚌',
                subcategories: ['city-tours', 'adventure-tours', 'cultural-tours', 'food-tours', 'nature-walks']
            }
        }
    },
    'pet-services': {
        id: 'pet-services',
        name: 'Pet Services & Supplies',
        icon: '🐾',
        categories: {
            'pet-grooming': {
                name: 'Pet Grooming',
                icon: '✂️',
                subcategories: ['dog-grooming', 'cat-grooming', 'nail-trimming', 'pet-bathing', 'fur-styling']
            },
            'pet-supplies': {
                name: 'Pet Supplies', 
                icon: '🦴',
                subcategories: ['pet-food', 'toys', 'leashes-collars', 'pet-beds', 'pet-accessories']
            },
            'veterinary': {
                name: 'Veterinary Services',
                icon: '🩺', 
                subcategories: ['health-checkups', 'vaccinations', 'pet-surgery', 'emergency-care']
            }
        }
    },
    'real-estate': {
        id: 'real-estate',
        name: 'Real Estate Services',
        icon: '🏠',
        categories: {
            'property-sales': {
                name: 'Property Sales',
                icon: '🏘️',
                subcategories: ['residential-sales', 'commercial-sales', 'plot-sales', 'investment-properties']
            },
            'rentals': {
                name: 'Property Rentals',
                icon: '🔑',
                subcategories: ['house-rentals', 'apartment-rentals', 'commercial-rentals', 'pg-hostels']
            },
            'property-management': {
                name: 'Property Management',
                icon: '📋',
                subcategories: ['maintenance', 'tenant-management', 'property-valuation', 'legal-services']
            }
        }
    },
    'event-services': {
        id: 'event-services', 
        name: 'Event & Wedding Services',
        icon: '🎉',
        categories: {
            'wedding-planning': {
                name: 'Wedding Planning',
                icon: '💒',
                subcategories: ['wedding-decor', 'catering', 'photography', 'venue-booking', 'invitation-cards']
            },
            'event-management': {
                name: 'Event Management', 
                icon: '🎪',
                subcategories: ['corporate-events', 'birthday-parties', 'cultural-events', 'exhibitions']
            },
            'entertainment': {
                name: 'Entertainment Services',
                icon: '🎵',
                subcategories: ['dj-services', 'live-music', 'dance-performances', 'anchor-services']
            }
        }
    },
    'agriculture': {
        id: 'agriculture',
        name: 'Agriculture & Farming', 
        icon: '🌾',
        categories: {
            'crop-farming': {
                name: 'Crop Farming',
                icon: '🌱',
                subcategories: ['organic-vegetables', 'fruits', 'grains', 'spices', 'medicinal-plants']
            },
            'dairy-farming': {
                name: 'Dairy & Livestock',
                icon: '🐄', 
                subcategories: ['fresh-milk', 'dairy-products', 'poultry', 'goat-farming', 'fish-farming']
            },
            'farm-equipment': {
                name: 'Farm Equipment',
                icon: '🚜',
                subcategories: ['tractors', 'farming-tools', 'irrigation-systems', 'seeds-fertilizers']
            }
        }
    },
    'others': {
        id: 'others',
        name: 'Other Services',
        icon: '🔧', 
        categories: {
            'general-services': {
                name: 'General Services',
                icon: '⚙️',
                subcategories: ['consulting', 'maintenance', 'repairs', 'installations', 'custom-services']
            },
            'specialty-products': {
                name: 'Specialty Products',
                icon: '🎁',
                subcategories: ['custom-products', 'handmade-items', 'imported-goods', 'unique-services']
            }
        }
    }
};

// ========================================
// SUBCATEGORY NAMES MAPPING
// ========================================

const SUBCATEGORY_NAMES = {
    // Fashion & Boutique
    'shirts': 'Shirts', 'pants': 'Pants', 'suits': 'Suits', 'ethnic-wear': 'Ethnic Wear',
    'casual-wear': 'Casual Wear', 'formal-wear': 'Formal Wear', 'kurtas': 'Kurtas', 'sherwanis': 'Sherwanis',
    'dresses': 'Dresses', 'tops': 'Tops', 'bottoms': 'Bottoms', 'sarees': 'Sarees',
    'lehengas': 'Lehengas', 'salwar-suits': 'Salwar Suits', 'western-wear': 'Western Wear', 'kurtis': 'Kurtis',
    'bags': 'Bags', 'belts': 'Belts', 'wallets': 'Wallets', 'scarves': 'Scarves',
    'hats': 'Hats', 'sunglasses': 'Sunglasses', 'watches': 'Watches', 'jewelry': 'Jewelry',
    'mens-shoes': "Men's Shoes", 'womens-shoes': "Women's Shoes", 'sandals': 'Sandals',
    'boots': 'Boots', 'sneakers': 'Sneakers', 'ethnic-footwear': 'Ethnic Footwear',

    // Food & Catering
    'rotis-parathas': 'Rotis & Parathas', 'curries': 'Curries', 'dal-preparations': 'Dal',
    'rice-dishes': 'Rice Dishes', 'snacks': 'Snacks', 'biryanis': 'Biryanis', 'tandoor-items': 'Tandoor Items',
    'dosas': 'Dosas', 'idlis': 'Idlis', 'vadas': 'Vadas', 'uttapam': 'Uttapam',
    'sambar': 'Sambar', 'rasam': 'Rasam', 'chutneys': 'Chutneys', 'appams': 'Appams',
    'traditional-sweets': 'Traditional Sweets', 'cakes': 'Cakes', 'pastries': 'Pastries',
    'ice-creams': 'Ice Creams', 'mithai': 'Mithai', 'cookies': 'Cookies',

    // Salon & Beauty
    'haircuts': 'Haircuts', 'hair-coloring': 'Hair Coloring', 'hair-styling': 'Hair Styling',
    'hair-treatments': 'Hair Treatments', 'keratin': 'Keratin Treatment', 'rebonding': 'Rebonding',
    'facials': 'Facials', 'makeup': 'Makeup', 'eyebrow-threading': 'Eyebrow Threading',
    'manicure': 'Manicure', 'pedicure': 'Pedicure', 'waxing': 'Waxing',

    // Electronics
    'smartphones': 'Smartphones', 'tablets': 'Tablets', 'accessories': 'Accessories',
    'chargers': 'Chargers', 'cases': 'Cases', 'headphones': 'Headphones',
    'laptops': 'Laptops', 'desktops': 'Desktops', 'monitors': 'Monitors',

    // Pet Services
    'dog-grooming': 'Dog Grooming', 'cat-grooming': 'Cat Grooming', 'nail-trimming': 'Nail Trimming',
    'pet-bathing': 'Pet Bathing', 'fur-styling': 'Fur Styling', 'pet-food': 'Pet Food', 'toys': 'Pet Toys',
    'leashes-collars': 'Leashes & Collars', 'pet-beds': 'Pet Beds', 'pet-accessories': 'Pet Accessories',
    'health-checkups': 'Health Checkups', 'vaccinations': 'Vaccinations', 'pet-surgery': 'Pet Surgery', 
    'emergency-care': 'Emergency Care',

    // Real Estate  
    'residential-sales': 'Residential Sales', 'commercial-sales': 'Commercial Sales', 'plot-sales': 'Plot Sales',
    'investment-properties': 'Investment Properties', 'house-rentals': 'House Rentals', 
    'apartment-rentals': 'Apartment Rentals', 'commercial-rentals': 'Commercial Rentals', 'pg-hostels': 'PG & Hostels',
    'tenant-management': 'Tenant Management', 'property-valuation': 'Property Valuation',

    // Events & Weddings
    'wedding-decor': 'Wedding Decoration', 'catering': 'Catering Services', 'photography': 'Photography & Videography',
    'venue-booking': 'Venue Booking', 'invitation-cards': 'Invitation Cards', 'corporate-events': 'Corporate Events',
    'birthday-parties': 'Birthday Parties', 'cultural-events': 'Cultural Events', 'exhibitions': 'Exhibitions',
    'dj-services': 'DJ Services', 'live-music': 'Live Music', 'dance-performances': 'Dance Performances',
    'anchor-services': 'Anchor Services',

    // Agriculture
    'organic-vegetables': 'Organic Vegetables', 'fruits': 'Fresh Fruits', 'grains': 'Grains & Cereals',
    'spices': 'Spices & Herbs', 'medicinal-plants': 'Medicinal Plants', 'fresh-milk': 'Fresh Milk',
    'dairy-products': 'Dairy Products', 'poultry': 'Poultry & Eggs', 'goat-farming': 'Goat Farming',
    'fish-farming': 'Fish Farming', 'tractors': 'Tractors', 'farming-tools': 'Farming Tools',
    'irrigation-systems': 'Irrigation Systems', 'seeds-fertilizers': 'Seeds & Fertilizers',

    // Others
    'consulting': 'Consulting Services', 'maintenance': 'Maintenance Services', 'repairs': 'Repair Services',
    'installations': 'Installation Services', 'custom-services': 'Custom Services', 'custom-products': 'Custom Products',
    'handmade-items': 'Handmade Items', 'imported-goods': 'Imported Goods', 'unique-services': 'Unique Services'
};

// ========================================
// INDIAN PRODUCTS DATABASE (keeping original for compatibility)
// ========================================

const INDIAN_PRODUCTS_DB = {
    boutique: {
        'mens-wear': [
            {id: 'kurta-cotton-001', name: 'Premium Cotton Kurta', image: 'https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=300', description: 'Comfortable daily wear cotton kurta with traditional design', suggestedPrice: 899, category: 'mens-wear', subcategory: 'kurtas', variants: ['S', 'M', 'L', 'XL'], isSelected: false, isPopular: true},
            {id: 'shirt-formal-001', name: 'Formal Cotton Shirt', image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=300', description: 'Classic formal shirt for office wear', suggestedPrice: 1299, category: 'mens-wear', subcategory: 'shirts', variants: ['S', 'M', 'L', 'XL', 'XXL'], isSelected: false, isPopular: true},
            {id: 'sherwani-wedding-001', name: 'Royal Wedding Sherwani', image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300', description: 'Elegant sherwani for weddings and special occasions', suggestedPrice: 4999, category: 'mens-wear', subcategory: 'sherwanis', variants: ['S', 'M', 'L', 'XL'], isSelected: false, isPopular: false}
        ],
        'womens-wear': [
            {id: 'saree-silk-001', name: 'Silk Banarasi Saree', image: 'https://images.unsplash.com/photo-1583391733975-4770270d3c5e?w=300', description: 'Traditional Banarasi silk saree with gold border', suggestedPrice: 6999, category: 'womens-wear', subcategory: 'sarees', variants: ['One Size'], isSelected: false, isPopular: true},
            {id: 'lehenga-wedding-001', name: 'Designer Wedding Lehenga', image: 'https://images.unsplash.com/photo-1594736797933-d0ea8baa3b9a?w=300', description: 'Heavy embroidered lehenga for weddings', suggestedPrice: 12999, category: 'womens-wear', subcategory: 'lehengas', variants: ['S', 'M', 'L', 'XL'], isSelected: false, isPopular: true}
        ]
    },
    'home-foods': {
        'north-indian': [
            {id: 'butter-chicken-001', name: 'Butter Chicken', image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=300', description: 'Creamy and delicious butter chicken curry', suggestedPrice: 320, category: 'north-indian', subcategory: 'curries', variants: ['Regular', 'Large'], isSelected: false, isPopular: true},
            {id: 'dal-makhani-001', name: 'Dal Makhani', image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=300', description: 'Rich and creamy black lentil curry', suggestedPrice: 280, category: 'north-indian', subcategory: 'dal-preparations', variants: ['Regular', 'Large'], isSelected: false, isPopular: true}
        ]
    }
    // ... rest of your existing product data
};

// Helper function to get products by category
function getProductsByCategory(categoryId) {
    return INDIAN_PRODUCTS_DB[categoryId] || {};
}

// Helper function to get all products with search/filter
function searchProducts(searchTerm = '', categoryFilter = 'all', sortBy = 'name', priceRange = { min: 0, max: 10000 }) {
    let allProducts = [];
    
    // Collect all products
    Object.keys(INDIAN_PRODUCTS_DB).forEach(categoryKey => {
        Object.keys(INDIAN_PRODUCTS_DB[categoryKey]).forEach(subcategoryKey => {
            const products = INDIAN_PRODUCTS_DB[categoryKey][subcategoryKey];
            products.forEach(product => {
                if (categoryFilter === 'all' || product.category.includes(categoryFilter) || categoryKey === categoryFilter) {
                    if (product.suggestedPrice >= priceRange.min && product.suggestedPrice <= priceRange.max) {
                        if (!searchTerm || product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            product.description.toLowerCase().includes(searchTerm.toLowerCase())) {
                            allProducts.push({...product, parentCategory: categoryKey});
                        }
                    }
                }
            });
        });
    });
    
    // Sort products
    switch(sortBy) {
        case 'price-low':
            allProducts.sort((a, b) => a.suggestedPrice - b.suggestedPrice);
            break;
        case 'price-high':
            allProducts.sort((a, b) => b.suggestedPrice - a.suggestedPrice);
            break;
        case 'category':
            allProducts.sort((a, b) => a.parentCategory.localeCompare(b.parentCategory));
            break;
        default: // name
            allProducts.sort((a, b) => a.name.localeCompare(b.name));
    }
    
    return allProducts;
}

// Helper function to get popular products
function getPopularProducts(limit = 20) {
    let popularProducts = [];
    
    Object.keys(INDIAN_PRODUCTS_DB).forEach(categoryKey => {
        Object.keys(INDIAN_PRODUCTS_DB[categoryKey]).forEach(subcategoryKey => {
            const products = INDIAN_PRODUCTS_DB[categoryKey][subcategoryKey];
            products.forEach(product => {
                if (product.isPopular) {
                    popularProducts.push({...product, parentCategory: categoryKey});
                }
            });
        });
    });
    
    return popularProducts.slice(0, limit);
}

// ========================================
// MOTIVATIONAL MESSAGE TEMPLATES
// ========================================

const MOTIVATIONAL_MESSAGE_TEMPLATES = [
    "Just {stepsLeft} more step{plural} to see {businessName} live online.",
    "You're almost there. See how your customers will see {businessName}.",
    "Businesses like {businessName} got 43% more customers after going online. Want to see how?",
    "Your products are almost ready to be seen online – don't miss your next customer.",
    "Thousands of businesses in your {category} are already online. Don't be the last."
];

// ========================================
// FOMO SYSTEM DATA
// ========================================

const INDIAN_BUSINESS_NAMES = [
    // Traditional/Regional Names
    'Vasavi Silks', 'Lakshmi Textiles', 'Sree Krishna Stores', 'Ganesh Traders', 'Shiva Electronics',
    'Rama Jewellers', 'Vishnu Enterprises', 'Durga Fashions', 'Saraswati Boutique', 'Hanuman Hardware',
    'Ganesha Sweets', 'Murugan Stores', 'Balaji Textiles', 'Venkateswara Mills', 'Karthik Garments',
    
    // Modern Business Names
    'StyleHub Fashion', 'TechPoint Solutions', 'FreshMart Grocery', 'GlowUp Beauty', 'TasteBuds Cafe',
    'UrbanStyle Boutique', 'SmartTech Electronics', 'PureVibe Wellness', 'CreativeMinds Studio', 'EcoLife Products',
    'TrendyWear Collection', 'DigitalCraft Solutions', 'HealthFirst Pharmacy', 'SparkleClean Services', 'FlavorTown Restaurant',
    
    // Category-Specific Names
    'Royal Beauty Salon', 'Spice Garden Restaurant', 'Golden Touch Jewellery', 'Modern Home Furniture',
    'QuickFix Electronics', 'Fresh & Natural Foods', 'Elite Fashion House', 'Comfort Zone Interiors',
    'Wellness Plus Clinic', 'TechSavvy Computers', 'Artisan Craft Studio', 'Green Valley Organic',
    
    // Regional Variations
    'Mumbai Masala House', 'Delhi Darbar Restaurant', 'Bangalore IT Solutions', 'Chennai Silks Emporium',
    'Kolkata Sweet Corner', 'Hyderabad Biryani House', 'Pune Fashion Gallery', 'Jaipur Handicrafts',
    'Kochi Spice Mart', 'Mysore Silk Palace', 'Coimbatore Cotton Mills', 'Indore Jewelry Bazaar',
    
    // Contemporary Names
    'The Style Studio', 'Pixel Perfect Designs', 'Organic Harvest', 'Fitness First Gym',
    'Coffee Culture Cafe', 'Digital Dreams Agency', 'Wellness Warriors', 'Flavor Junction',
    'Style Statements', 'Tech Titans', 'Healthy Habits Store', 'Creative Canvas Studio'
];

const INDIAN_CITIES = [
    'Mumbai', 'Delhi', 'Bangalore', 'Chennai', 'Kolkata', 'Hyderabad', 'Pune', 'Ahmedabad',
    'Mysore', 'Coimbatore', 'Kochi', 'Jaipur', 'Lucknow', 'Kanpur', 'Nagpur', 'Indore',
    'Surat', 'Vadodara', 'Visakhapatnam', 'Bhopal', 'Patna', 'Ludhiana', 'Agra', 'Nashik',
    'Faridabad', 'Ghaziabad', 'Rajkot', 'Meerut', 'Jabalpur', 'Thane', 'Howrah', 'Ranchi',
    'Allahabad', 'Vijayawada', 'Jodhpur', 'Madurai', 'Raipur', 'Kota', 'Guwahati', 'Chandigarh'
];

const FOMO_MESSAGE_TEMPLATES = [
    { text: '{business} from {city} just went live with help of Topiko', status: 'Just Registered' },
    { text: '{business} in {city} started selling online with Topiko just helped', status: 'Now Live' },
    { text: '{business} from {city} launched their digital presence — Topiko just helped', status: 'Just Launched' },
    { text: '{business} in {city} joined our platform with help of Topiko', status: 'New Member' },
    { text: '{business} from {city} completed their business setup with help of Topiko', status: 'Setup Complete' },
    { text: '{business} in {city} is now accepting online orders — Topiko just helped', status: 'Orders Live' },
    { text: '{business} from {city} went digital today with help of Topiko', status: 'Digital Launch' }
];

// ========================================
// THEME CONFIGURATION
// ========================================

const THEME_CONFIG = {
    'modern': {
        name: 'Modern & Minimalist',
        icon: '✨',
        description: 'Clean, simple design that focuses on your products'
    },
    'vibrant': {
        name: 'Colorful & Vibrant',
        icon: '🌈', 
        description: 'Bold colors and energetic design to attract customers'
    },
    'professional': {
        name: 'Professional & Corporate',
        icon: '💼',
        description: 'Sophisticated design that builds trust and credibility'
    },
    'traditional': {
        name: 'Traditional & Classic',
        icon: '🏛️',
        description: 'Timeless design with warm, welcoming feel'
    },
    'creative': {
        name: 'Creative & Artistic',
        icon: '🎨',
        description: 'Unique, artistic design that showcases creativity'
    },
    'luxury': {
        name: 'Elegant & Luxury',
        icon: '💎',
        description: 'Premium design for high-end products and services'
    }
};

// ========================================
// GOAL NAMES MAPPING
// ========================================

const GOAL_NAMES = {
    ecommerce: '🛒 Sell Online',
    customers: '📈 Reach More Customers', 
    manage: '👥 Manage Customers',
    search: '🔍 Appear in Search Results',
    brand: '⭐ Establish Brand'
};

// ========================================
// LANGUAGE CONFIGURATION
// ========================================

const LANGUAGE_CONFIG = {
    'en': 'English',
    'hi': 'हिन्दी', 
    'te': 'తెలుగు',
    'ta': 'தமிழ்'
};

// ========================================
// DEFAULT VALUES
// ========================================

const DEFAULTS = {
    BUSINESS_COUNTER: 247,
    HELP_CLAIMED_COUNT: 47,
    LEAD_SCORE: 0,
    SESSION_START_TIME: Date.now(),
    PAGE_VIEWS: 1,
    OTP_DEFAULT: '1111'
};

// ========================================
// EXPORTS (for module systems)
// ========================================

// For browser compatibility, attach to window object
if (typeof window !== 'undefined') {
    window.TopikoConfig = {
        SUPABASE_CONFIG,
        STEP_CONFIG,
        SPECIAL_OFFERS,
        BUSINESS_CATEGORIES,
        SUBCATEGORY_NAMES,
        INDIAN_PRODUCTS_DB,
        getProductsByCategory,
        searchProducts,
        getPopularProducts,
        
        // 🖼️ ENHANCED IMAGE SYSTEM FUNCTIONS
        formatUnsplashUrl,
        getUnsplashSourceUrl,
        getCategorySearchTerms,
        getReliableProductImage,
        getFallbackImage,
        getPlaceholderImage,
        loadImageWithRetry,
        ENHANCED_FALLBACK_IMAGES,
        
        MOTIVATIONAL_MESSAGE_TEMPLATES,
        INDIAN_BUSINESS_NAMES,
        INDIAN_CITIES,
        FOMO_MESSAGE_TEMPLATES,
        THEME_CONFIG,
        GOAL_NAMES,
        LANGUAGE_CONFIG,
        DEFAULTS
    };
    
    console.log('✅ Enhanced image loading system ready!');
}
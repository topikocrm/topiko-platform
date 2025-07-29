/* ========================================
   TOPIKO LEAD FORM - COMPLETE CONFIGURATION
   ======================================== */

// ========================================
// SUPABASE DATABASE CONFIGURATION
// ========================================

const SUPABASE_CONFIG = {
    URL: 'https://xssbtsfjtwjholygdbqo.supabase.co',
    ANON_KEY: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhzc2J0c2ZqdHdqaG9seWdkYnFvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTMxOTk5MjUsImV4cCI6MjA2ODc3NTkyNX0.eOSIHTpvllcH-fK6MARoe5HPiXlujsrzUWfAhmUh94k',
    // Database table names
    TABLES: {
        USERS: 'users',
        PRODUCTS: 'products', 
        LEAD_INTELLIGENCE: 'lead_intelligence',
        COMPLETED_SETUPS: 'completed_setups',
        FOLLOWUP_REQUESTS: 'followup_requests',
        SCHEDULED_CALLS: 'scheduled_calls',
        HESITATION_FEEDBACK: 'hesitation_feedback',
        CATEGORY_SELECTIONS: 'category_selections',
        QUALIFYING_RESPONSES: 'qualifying_responses',
        THEME_SELECTIONS: 'theme_selections',
        OFFER_CONFIRMATIONS: 'offer_confirmations'
    }
};

// ========================================
// STEP CONFIGURATION - RESTORED
// ========================================

const STEP_CONFIG = {
    PROGRESS_STEPS: [
        { id: 'goals', label: 'Business Goals', number: 1 },
        { id: 'registration', label: 'Sign Up', number: 2 },
        { id: 'qualifying-questions', label: 'Success Factors', number: 3 },
        { id: 'categories', label: 'Business Live-1', number: 4 },
        { id: 'products', label: 'Business Live-2', number: 5 },
        { id: 'themes', label: 'Business Live-3', number: 6 }
    ],
    STEP_ORDER: ['welcome', 'language', 'goals', 'registration', 'qualifying-questions', 'categories', 'products', 'themes']
};

// ========================================
// FOMO SYSTEM CONFIGURATION - UPDATED WITH TOPIKO REFERENCES
// ========================================

const FOMO_MESSAGE_TEMPLATES = [
    { text: '{business} from {city} just set up their online store with help of Topiko', status: 'Just Registered' },
    { text: 'Topiko just helped {business} in {city} start selling online', status: 'Now Live' },
    { text: '{business} from {city} launched their digital presence with Topiko', status: 'Just Launched' },
    { text: 'Topiko helped {business} in {city} join our platform', status: 'New Member' },
    { text: '{business} from {city} completed their business setup with Topiko', status: 'Setup Complete' },
    { text: 'Topiko just helped {business} in {city} start accepting online orders', status: 'Orders Live' },
    { text: '{business} from {city} went digital today with help of Topiko', status: 'Digital Launch' }
];

const FOMO_BUSINESSES = [
    { name: 'Shree Saree Center', city: 'Mysore' },
    { name: 'Annapurna Foods', city: 'Bangalore' },
    { name: 'Golden Jewellers', city: 'Chennai' },
    { name: 'Classic Tailors', city: 'Hyderabad' },
    { name: 'Fresh Fruits Market', city: 'Pune' },
    { name: 'Vishnu Electronics', city: 'Coimbatore' },
    { name: 'Lakshmi Beauty Parlour', city: 'Kochi' },
    { name: 'Raja Sweets', city: 'Madurai' },
    { name: 'Modern Furniture', city: 'Vijayawada' },
    { name: 'Surya Mobiles', city: 'Trichy' },
    { name: 'Kaveri Textiles', city: 'Salem' },
    { name: 'Bharat Hardware', city: 'Mangalore' },
    { name: 'Sri Krishna Bakery', city: 'Tirupati' },
    { name: 'Mahalakshmi Silks', city: 'Thanjavur' },
    { name: 'Royal Restaurant', city: 'Vellore' },
    { name: 'Ganga Medical Store', city: 'Hubli' },
    { name: 'Perfect Tiles', city: 'Erode' },
    { name: 'Diamond Cut Salon', city: 'Guntur' },
    { name: 'Spice Garden', city: 'Wayanad' },
    { name: 'Tech Solutions', city: 'Thrissur' }
];

// ========================================
// SPECIAL OFFERS CONFIGURATION - NEW
// ========================================

const SPECIAL_OFFERS = [
    '✅ Free Logo Design',
    '✅ Free Onboarding Setup', 
    '✅ Free Meta Campaign Setup',
    '✅ 2 Extra SEO Keywords',
    '✅ Free Digital Visiting Card',
    '✅ Free Social Media Post Template',
    '✅ Free WhatsApp Business Setup',
    '✅ Free Google My Business Listing',
    '✅ Free Payment Gateway Setup',
    '✅ Free Custom Domain (.in) for 1 Year',
    '✅ Free Analytics Report Setup',
    '✅ Priority Support for 1st Month',
    '✅ One custom change to website'
];

// Function to get 4 random offers for the day (consistent per day)
function getDailyOffers() {
    const today = new Date().toDateString();
    const seed = today.split('').reduce((a, b) => { a = ((a << 5) - a) + b.charCodeAt(0); return a & a; }, 0);
    
    // Shuffle array based on date seed
    const shuffled = [...SPECIAL_OFFERS];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.abs(seed + i) % (i + 1);
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    
    return shuffled.slice(0, 4);
}

// ========================================
// LANGUAGE CONFIGURATION
// ========================================

const LANGUAGE_CONFIG = {
    'en': 'English',
    'hi': 'हिन्दी (Hindi)',
    'te': 'తెలుగు (Telugu)', 
    'ta': 'தமிழ் (Tamil)'
};

// ========================================
// GOAL NAMES CONFIGURATION
// ========================================

const GOAL_NAMES = {
    'ecommerce': 'Sell Online (E-commerce)',
    'customers': 'Reach More Customers',
    'manage': 'Manage Customers',
    'search': 'Appear in Search Results',
    'brand': 'Establish my Brand'
};

// ========================================
// THEME CONFIGURATION
// ========================================

const THEME_CONFIG = {
    'modern': {
        name: 'Modern & Minimalist',
        colors: ['#f8fafc', '#e2e8f0', '#6b46c1'],
        description: 'Clean, simple design that focuses on your products'
    },
    'vibrant': {
        name: 'Colorful & Vibrant',
        colors: ['#fef3c7', '#fed7aa', '#fecaca'],
        description: 'Bold colors and energetic design to attract customers'
    },
    'professional': {
        name: 'Professional & Corporate',
        colors: ['#1e293b', '#334155', '#ffffff'],
        description: 'Sophisticated design that builds trust and credibility'
    },
    'traditional': {
        name: 'Traditional & Classic',
        colors: ['#fef7cd', '#fde68a', '#92400e'],
        description: 'Timeless design with warm, welcoming feel'
    },
    'creative': {
        name: 'Creative & Artistic',
        colors: ['#ddd6fe', '#c7d2fe', '#bfdbfe'],
        description: 'Unique, artistic design that showcases creativity'
    },
    'luxury': {
        name: 'Elegant & Luxury',
        colors: ['#1c1917', '#292524', '#d6d3d1'],
        description: 'Premium design for high-end products and services'
    }
};

// ========================================
// BUSINESS CATEGORIES CONFIGURATION
// ========================================

const BUSINESS_CATEGORIES = {
    'boutique': {
        name: 'Boutique & Fashion',
        icon: '🏪',
        categories: {
            'clothing': {
                name: 'Clothing & Apparel',
                icon: '👕',
                subcategories: ['mens-wear', 'womens-wear', 'kids-wear', 'ethnic-wear', 'western-wear', 'party-wear', 'casual-wear', 'formal-wear', 'sportswear', 'innerwear', 'accessories']
            },
            'footwear': {
                name: 'Footwear',
                icon: '👟',
                subcategories: ['mens-shoes', 'womens-shoes', 'kids-shoes', 'sports-shoes', 'formal-shoes', 'casual-shoes', 'sandals', 'slippers', 'boots']
            },
            'bags': {
                name: 'Bags & Luggage',
                icon: '👜',
                subcategories: ['handbags', 'backpacks', 'travel-bags', 'laptop-bags', 'school-bags', 'wallets', 'clutches', 'suitcases']
            }
        }
    },
    'home-foods': {
        name: 'Home Foods & Catering',
        icon: '🍛',
        categories: {
            'homemade': {
                name: 'Homemade Foods',
                icon: '🍱',
                subcategories: ['tiffin-service', 'sweets', 'snacks', 'pickles', 'masala-powders', 'breakfast-items', 'lunch-boxes', 'dinner-specials']
            },
            'catering': {
                name: 'Catering Services',
                icon: '🍽️',
                subcategories: ['wedding-catering', 'party-catering', 'corporate-catering', 'festival-catering', 'bulk-orders', 'event-planning']
            },
            'baking': {
                name: 'Baking & Desserts',
                icon: '🎂',
                subcategories: ['custom-cakes', 'cupcakes', 'cookies', 'pastries', 'bread', 'birthday-cakes', 'wedding-cakes']
            }
        }
    },
    'salons': {
        name: 'Salons & Beauty',
        icon: '💄',
        categories: {
            'hair': {
                name: 'Hair Services',
                icon: '💇',
                subcategories: ['haircut', 'hair-color', 'hair-styling', 'hair-treatment', 'hair-spa', 'hair-straightening', 'hair-curling']
            },
            'beauty': {
                name: 'Beauty Services',
                icon: '✨',
                subcategories: ['facial', 'makeup', 'bridal-makeup', 'party-makeup', 'eyebrow-threading', 'waxing', 'manicure', 'pedicure', 'skin-treatment']
            },
            'spa': {
                name: 'Spa & Wellness',
                icon: '🧖',
                subcategories: ['body-massage', 'aromatherapy', 'body-scrub', 'body-wrap', 'relaxation-therapy']
            }
        }
    },
    'grocery': {
        name: 'Grocery & Provisions',
        icon: '🛒',
        categories: {
            'staples': {
                name: 'Staples & Grains',
                icon: '🌾',
                subcategories: ['rice', 'wheat', 'dal', 'flour', 'oil', 'spices', 'sugar', 'salt']
            },
            'fresh': {
                name: 'Fresh Produce',
                icon: '🥬',
                subcategories: ['vegetables', 'fruits', 'herbs', 'dairy', 'eggs', 'meat', 'fish']
            },
            'packaged': {
                name: 'Packaged Foods',
                icon: '📦',
                subcategories: ['snacks', 'beverages', 'instant-foods', 'canned-goods', 'frozen-foods', 'breakfast-cereals']
            }
        }
    },
    'furniture': {
        name: 'Furniture & Home Decor',
        icon: '🛋️',
        categories: {
            'furniture': {
                name: 'Furniture',
                icon: '🪑',
                subcategories: ['sofa-sets', 'dining-sets', 'bedroom-sets', 'office-furniture', 'storage', 'tables', 'chairs', 'beds', 'wardrobes']
            },
            'decor': {
                name: 'Home Decor',
                icon: '🏺',
                subcategories: ['wall-art', 'curtains', 'carpets', 'lighting', 'vases', 'mirrors', 'cushions', 'plants']
            },
            'kitchen': {
                name: 'Kitchen & Dining',
                icon: '🍽️',
                subcategories: ['cookware', 'tableware', 'kitchen-appliances', 'storage-containers', 'cutlery']
            }
        }
    },
    'electronics': {
        name: 'Electronics & Gadgets',
        icon: '📱',
        categories: {
            'mobile': {
                name: 'Mobile & Tablets',
                icon: '📱',
                subcategories: ['smartphones', 'tablets', 'mobile-accessories', 'phone-cases', 'chargers', 'headphones']
            },
            'computers': {
                name: 'Computers & Laptops',
                icon: '💻',
                subcategories: ['laptops', 'desktops', 'computer-accessories', 'keyboards', 'mouse', 'monitors', 'printers']
            },
            'appliances': {
                name: 'Home Appliances',
                icon: '🔌',
                subcategories: ['refrigerators', 'washing-machines', 'air-conditioners', 'televisions', 'microwaves', 'mixers', 'fans']
            }
        }
    },
    'jewellery': {
        name: 'Jewellery & Accessories',
        icon: '💍',
        categories: {
            'gold': {
                name: 'Gold Jewellery',
                icon: '🏆',
                subcategories: ['gold-rings', 'gold-necklaces', 'gold-earrings', 'gold-bracelets', 'gold-chains', 'gold-bangles']
            },
            'silver': {
                name: 'Silver Jewellery',
                icon: '🥈',
                subcategories: ['silver-rings', 'silver-necklaces', 'silver-earrings', 'silver-bracelets', 'silver-anklets']
            },
            'fashion': {
                name: 'Fashion Jewellery',
                icon: '💎',
                subcategories: ['artificial-jewellery', 'costume-jewellery', 'fashion-accessories', 'watches', 'sunglasses']
            }
        }
    },
    'restaurants': {
        name: 'Restaurants & Cafes',
        icon: '🍽️',
        categories: {
            'cuisine': {
                name: 'Cuisine Types',
                icon: '🍛',
                subcategories: ['south-indian', 'north-indian', 'chinese', 'continental', 'pizza', 'biryani', 'street-food', 'fast-food']
            },
            'beverages': {
                name: 'Beverages',
                icon: '☕',
                subcategories: ['tea', 'coffee', 'fresh-juices', 'smoothies', 'mocktails', 'lassi', 'milkshakes']
            },
            'specialties': {
                name: 'Specialties',
                icon: '⭐',
                subcategories: ['breakfast', 'lunch', 'dinner', 'desserts', 'healthy-food', 'vegan-options', 'live-counters']
            }
        }
    },
    'fitness': {
        name: 'Fitness & Wellness',
        icon: '💪',
        categories: {
            'gym': {
                name: 'Gym & Fitness',
                icon: '🏋️',
                subcategories: ['weight-training', 'cardio', 'personal-training', 'group-classes', 'fitness-equipment']
            },
            'yoga': {
                name: 'Yoga & Meditation',
                icon: '🧘',
                subcategories: ['hatha-yoga', 'power-yoga', 'meditation', 'pranayama', 'yoga-therapy']
            },
            'sports': {
                name: 'Sports & Activities',
                icon: '⚽',
                subcategories: ['badminton', 'tennis', 'swimming', 'cricket', 'football', 'basketball', 'martial-arts']
            }
        }
    },
    'education': {
        name: 'Education & Training',
        icon: '📚',
        categories: {
            'academic': {
                name: 'Academic Coaching',
                icon: '📖',
                subcategories: ['school-tuition', 'competitive-exams', 'language-classes', 'computer-courses', 'skill-development']
            },
            'arts': {
                name: 'Arts & Hobbies',
                icon: '🎨',
                subcategories: ['music-classes', 'dance-classes', 'art-classes', 'craft-workshops', 'photography']
            },
            'professional': {
                name: 'Professional Training',
                icon: '💼',
                subcategories: ['corporate-training', 'technical-courses', 'certification-programs', 'workshops']
            }
        }
    },
    'automotive': {
        name: 'Automotive Services',
        icon: '🚗',
        categories: {
            'repair': {
                name: 'Repair & Maintenance',
                icon: '🔧',
                subcategories: ['car-service', 'bike-service', 'ac-repair', 'battery-service', 'tire-service', 'oil-change']
            },
            'accessories': {
                name: 'Auto Accessories',
                icon: '🛠️',
                subcategories: ['car-accessories', 'bike-accessories', 'spare-parts', 'car-care-products']
            },
            'services': {
                name: 'Additional Services',
                icon: '🚙',
                subcategories: ['car-wash', 'insurance', 'vehicle-registration', 'loan-assistance']
            }
        }
    },
    'healthcare': {
        name: 'Healthcare Services',
        icon: '🏥',
        categories: {
            'medical': {
                name: 'Medical Services',
                icon: '👨‍⚕️',
                subcategories: ['general-medicine', 'specialty-consultation', 'diagnostic-tests', 'health-checkups']
            },
            'pharmacy': {
                name: 'Pharmacy & Medicines',
                icon: '💊',
                subcategories: ['prescription-medicines', 'otc-medicines', 'health-supplements', 'medical-devices']
            },
            'therapy': {
                name: 'Therapy & Rehabilitation',
                icon: '🏃',
                subcategories: ['physiotherapy', 'occupational-therapy', 'speech-therapy', 'counseling']
            }
        }
    },
    'professional': {
        name: 'Professional Services',
        icon: '💼',
        categories: {
            'legal': {
                name: 'Legal Services',
                icon: '⚖️',
                subcategories: ['legal-consultation', 'documentation', 'property-registration', 'court-representation']
            },
            'financial': {
                name: 'Financial Services',
                icon: '💰',
                subcategories: ['tax-filing', 'accounting', 'investment-advice', 'insurance', 'loan-assistance']
            },
            'consulting': {
                name: 'Consulting',
                icon: '🤝',
                subcategories: ['business-consulting', 'marketing-consulting', 'hr-consulting', 'it-consulting']
            }
        }
    },
    'arts-crafts': {
        name: 'Arts & Crafts',
        icon: '🎨',
        categories: {
            'handmade': {
                name: 'Handmade Crafts',
                icon: '✋',
                subcategories: ['pottery', 'woodwork', 'textiles', 'paper-crafts', 'metal-work', 'glass-work']
            },
            'supplies': {
                name: 'Art Supplies',
                icon: '🖌️',
                subcategories: ['paints', 'brushes', 'canvas', 'craft-materials', 'stationery', 'drawing-supplies']
            },
            'custom': {
                name: 'Custom Artwork',
                icon: '🖼️',
                subcategories: ['portraits', 'paintings', 'sculptures', 'custom-designs', 'commissioned-art']
            }
        }
    },
    'travel': {
        name: 'Travel & Tourism',
        icon: '✈️',
        categories: {
            'packages': {
                name: 'Travel Packages',
                icon: '🧳',
                subcategories: ['domestic-tours', 'international-tours', 'pilgrimage-tours', 'adventure-tours', 'family-packages']
            },
            'booking': {
                name: 'Booking Services',
                icon: '📅',
                subcategories: ['flight-booking', 'hotel-booking', 'car-rental', 'bus-booking', 'train-booking']
            },
            'services': {
                name: 'Travel Services',
                icon: '🗺️',
                subcategories: ['visa-assistance', 'travel-insurance', 'forex', 'travel-consultation', 'group-tours']
            }
        }
    },
    'pet-services': {
        name: 'Pet Services & Supplies',
        icon: '🐾',
        categories: {
            'care': {
                name: 'Pet Care',
                icon: '🐕',
                subcategories: ['veterinary-services', 'pet-grooming', 'pet-boarding', 'pet-training', 'pet-sitting']
            },
            'supplies': {
                name: 'Pet Supplies',
                icon: '🦴',
                subcategories: ['pet-food', 'pet-toys', 'pet-accessories', 'pet-medicines', 'pet-clothing']
            },
            'adoption': {
                name: 'Pet Adoption',
                icon: '💕',
                subcategories: ['dog-adoption', 'cat-adoption', 'bird-adoption', 'rescue-services']
            }
        }
    },
    'real-estate': {
        name: 'Real Estate Services',
        icon: '🏠',
        categories: {
            'residential': {
                name: 'Residential',
                icon: '🏡',
                subcategories: ['apartments', 'villas', 'plots', 'rental-properties', 'pg-accommodation']
            },
            'commercial': {
                name: 'Commercial',
                icon: '🏢',
                subcategories: ['office-spaces', 'retail-spaces', 'warehouses', 'commercial-plots', 'co-working-spaces']
            },
            'services': {
                name: 'Related Services',
                icon: '📋',
                subcategories: ['property-consultation', 'legal-services', 'home-loans', 'property-management', 'interior-design']
            }
        }
    },
    'event-services': {
        name: 'Event & Wedding Services',
        icon: '🎉',
        categories: {
            'wedding': {
                name: 'Wedding Services',
                icon: '💒',
                subcategories: ['wedding-planning', 'wedding-photography', 'bridal-makeup', 'wedding-catering', 'wedding-decoration', 'wedding-venues']
            },
            'events': {
                name: 'Event Management',
                icon: '🎊',
                subcategories: ['birthday-parties', 'corporate-events', 'cultural-events', 'conferences', 'exhibitions']
            },
            'vendors': {
                name: 'Event Vendors',
                icon: '🎭',
                subcategories: ['dj-services', 'band-services', 'anchoring', 'entertainment', 'audio-visual', 'transportation']
            }
        }
    },
    'agriculture': {
        name: 'Agriculture & Farming',
        icon: '🌾',
        categories: {
            'products': {
                name: 'Farm Products',
                icon: '🥕',
                subcategories: ['fresh-vegetables', 'fruits', 'grains', 'pulses', 'spices', 'organic-products']
            },
            'supplies': {
                name: 'Farm Supplies',
                icon: '🚜',
                subcategories: ['seeds', 'fertilizers', 'pesticides', 'farm-equipment', 'irrigation-supplies']
            },
            'services': {
                name: 'Agricultural Services',
                icon: '👨‍🌾',
                subcategories: ['farming-consultation', 'soil-testing', 'crop-insurance', 'machinery-rental', 'organic-certification']
            }
        }
    },
    'others': {
        name: 'Others',
        icon: '🔧',
        categories: {
            'general': {
                name: 'General Services',
                icon: '⚙️',
                subcategories: ['cleaning-services', 'maintenance', 'repair-services', 'delivery-services', 'personal-services']
            },
            'specialty': {
                name: 'Specialty Services',
                icon: '⭐',
                subcategories: ['custom-services', 'niche-products', 'unique-offerings', 'specialized-solutions']
            }
        }
    }
};

// ========================================
// SUBCATEGORY NAMES MAPPING
// ========================================

const SUBCATEGORY_NAMES = {
    // Clothing subcategories
    'mens-wear': "Men's Wear",
    'womens-wear': "Women's Wear",
    'kids-wear': "Kids' Wear",
    'ethnic-wear': 'Ethnic Wear',
    'western-wear': 'Western Wear',
    'party-wear': 'Party Wear',
    'casual-wear': 'Casual Wear',
    'formal-wear': 'Formal Wear',
    'sportswear': 'Sportswear',
    'innerwear': 'Innerwear',
    'accessories': 'Accessories',
    
    // Footwear subcategories
    'mens-shoes': "Men's Shoes",
    'womens-shoes': "Women's Shoes",
    'kids-shoes': "Kids' Shoes",
    'sports-shoes': 'Sports Shoes',
    'formal-shoes': 'Formal Shoes',
    'casual-shoes': 'Casual Shoes',
    'sandals': 'Sandals',
    'slippers': 'Slippers',
    'boots': 'Boots',
    
    // Bags subcategories
    'handbags': 'Handbags',
    'backpacks': 'Backpacks',
    'travel-bags': 'Travel Bags',
    'laptop-bags': 'Laptop Bags',
    'school-bags': 'School Bags',
    'wallets': 'Wallets',
    'clutches': 'Clutches',
    'suitcases': 'Suitcases',
    
    // Home Foods subcategories
    'tiffin-service': 'Tiffin Service',
    'sweets': 'Sweets',
    'snacks': 'Snacks',
    'pickles': 'Pickles',
    'masala-powders': 'Masala Powders',
    'breakfast-items': 'Breakfast Items',
    'lunch-boxes': 'Lunch Boxes',
    'dinner-specials': 'Dinner Specials',
    
    // Catering subcategories
    'wedding-catering': 'Wedding Catering',
    'party-catering': 'Party Catering',
    'corporate-catering': 'Corporate Catering',
    'festival-catering': 'Festival Catering',
    'bulk-orders': 'Bulk Orders',
    'event-planning': 'Event Planning',
    
    // Baking subcategories
    'custom-cakes': 'Custom Cakes',
    'cupcakes': 'Cupcakes',
    'cookies': 'Cookies',
    'pastries': 'Pastries',
    'bread': 'Bread',
    'birthday-cakes': 'Birthday Cakes',
    'wedding-cakes': 'Wedding Cakes',
    
    // Salon subcategories
    'haircut': 'Haircut',
    'hair-color': 'Hair Color',
    'hair-styling': 'Hair Styling',
    'hair-treatment': 'Hair Treatment',
    'hair-spa': 'Hair Spa',
    'hair-straightening': 'Hair Straightening',
    'hair-curling': 'Hair Curling',
    
    // Beauty subcategories
    'facial': 'Facial',
    'makeup': 'Makeup',
    'bridal-makeup': 'Bridal Makeup',
    'party-makeup': 'Party Makeup',
    'eyebrow-threading': 'Eyebrow Threading',
    'waxing': 'Waxing',
    'manicure': 'Manicure',
    'pedicure': 'Pedicure',
    'skin-treatment': 'Skin Treatment',
    
    // Spa subcategories
    'body-massage': 'Body Massage',
    'aromatherapy': 'Aromatherapy',
    'body-scrub': 'Body Scrub',
    'body-wrap': 'Body Wrap',
    'relaxation-therapy': 'Relaxation Therapy'
    
    // Add more subcategory mappings as needed...
};

// ========================================
// DEFAULT VALUES
// ========================================

const DEFAULTS = {
    OTP_DEFAULT: '1234',
    HELP_CLAIMED_COUNT: 47,
    HELP_TOTAL_COUNT: 75,
    FOMO_COUNTER_START: 247,
    LEAD_SCORE_BASE: 10
};

// ========================================
// SCORING CONFIGURATION
// ========================================

const SCORING_CONFIG = {
    LANGUAGE_SELECTION: 5,
    GOAL_SELECTION: 5,
    FORM_COMPLETION: 20,
    QUALIFYING_ANSWERS: {
        online_presence: {
            'none': 10,
            'whatsapp': 8,
            'social': 6,
            'basic_website': 4,
            'full_website': 2
        },
        budget: {
            '5000-10000': 5,
            '10000-25000': 8,
            '25000+': 10
        },
        decision_maker: {
            'yes': 10,
            'no': 3
        },
        timeline: {
            'immediately': 10,
            'within_week': 8,
            'this_month': 6,
            'just_checking': 2
        }
    },
    CATEGORY_SELECTION: 10,
    PRODUCT_ADDITION: 15,
    THEME_SELECTION: 10,
    COMPLETION_BONUS: 10
};

// ========================================
// MOTIVATIONAL MESSAGES CONFIGURATION - RESTORED
// ========================================

const MOTIVATIONAL_MESSAGE_TEMPLATES = [
    "{userName}, your {businessName} is shaping up perfectly!",
    "Great progress, {userName}! {businessName} is almost ready to go live!",
    "{businessName} is going to be amazing, {userName}!",
    "You're doing great, {userName}! {businessName} will love the online experience!",
    "Perfect choices, {userName}! {businessName} is ready for digital success!",
    "{userName}, {businessName} is just moments away from going online!",
    "Excellent work, {userName}! {businessName} is building something special!",
    "{businessName} is getting the perfect setup, {userName}!",
    "Almost there, {userName}! {businessName} is about to shine online!",
    "You're creating something beautiful for {businessName}, {userName}!"
];

// ========================================
// EXPORT CONFIGURATION
// ========================================

if (typeof window !== 'undefined') {
    window.TopikoConfig = {
        SUPABASE_CONFIG,
        STEP_CONFIG,
        FOMO_MESSAGE_TEMPLATES,
        FOMO_BUSINESSES,
        SPECIAL_OFFERS,
        getDailyOffers,
        LANGUAGE_CONFIG,
        GOAL_NAMES,
        THEME_CONFIG,
        BUSINESS_CATEGORIES,
        SUBCATEGORY_NAMES,
        DEFAULTS,
        SCORING_CONFIG,
        MOTIVATIONAL_MESSAGE_TEMPLATES
    };
}

console.log('🔧 Complete Topiko Configuration loaded with all features restored');

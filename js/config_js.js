/* ========================================
   TOPIKO LEAD FORM - CONFIGURATION & DATA
   ======================================== */

// ========================================
// API CONFIGURATION
// ========================================

const SUPABASE_CONFIG = {
    URL: 'https://xssbtsfjtwjholygdbqo.supabase.co',
    ANON_KEY: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhzc2J0c2ZqdHdqaG9seWdkYnFvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTMxOTk5MjUsImV4cCI6MjA2ODc3NTkyNX0.eOSIHTpvllcH-fK6MARoe5HPiXlujsrzUWfAhmUh94k'
};

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
// SPECIAL OFFERS CONFIGURATION - NEW
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
// INDIAN PRODUCTS DATABASE (500+ Products)
// ========================================

// COMPLETE ENHANCED INDIAN_PRODUCTS_DB - REPLACE YOUR EXISTING ONE
// This contains all your existing categories enhanced with more products (~125 total)

// EXPANDED INDIAN_PRODUCTS_DB - 500 PRODUCTS ACROSS ALL CATEGORIES
// Replace your existing INDIAN_PRODUCTS_DB with this expanded version

const INDIAN_PRODUCTS_DB = {
    boutique: {
        'mens-wear': [
            {id: 'kurta-cotton-001', name: 'Premium Cotton Kurta', image: 'https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=300', description: 'Comfortable daily wear cotton kurta with traditional design', suggestedPrice: 899, category: 'mens-wear', subcategory: 'kurtas', variants: ['S', 'M', 'L', 'XL'], isSelected: false, isPopular: true},
            {id: 'shirt-formal-001', name: 'Formal Cotton Shirt', image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=300', description: 'Classic formal shirt for office wear', suggestedPrice: 1299, category: 'mens-wear', subcategory: 'shirts', variants: ['S', 'M', 'L', 'XL', 'XXL'], isSelected: false, isPopular: true},
            {id: 'sherwani-wedding-001', name: 'Royal Wedding Sherwani', image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300', description: 'Elegant sherwani for weddings and special occasions', suggestedPrice: 4999, category: 'mens-wear', subcategory: 'sherwanis', variants: ['S', 'M', 'L', 'XL'], isSelected: false, isPopular: false},
            {id: 'jeans-casual-001', name: 'Denim Casual Jeans', image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=300', description: 'Comfortable casual jeans for everyday wear', suggestedPrice: 1599, category: 'mens-wear', subcategory: 'pants', variants: ['28', '30', '32', '34', '36'], isSelected: false, isPopular: true},
            {id: 'blazer-formal-001', name: 'Business Formal Blazer', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300', description: 'Professional blazer for business meetings', suggestedPrice: 3499, category: 'mens-wear', subcategory: 'formal-wear', variants: ['S', 'M', 'L', 'XL'], isSelected: false, isPopular: false},
            {id: 'dhoti-traditional-001', name: 'Traditional Cotton Dhoti', image: 'https://images.unsplash.com/photo-1566479179817-c0efeb382d13?w=300', description: 'Pure cotton dhoti for traditional occasions', suggestedPrice: 599, category: 'mens-wear', subcategory: 'ethnic-wear', variants: ['Free Size'], isSelected: false, isPopular: false},
            {id: 'tshirt-casual-001', name: 'Cotton Casual T-Shirt', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300', description: 'Comfortable cotton t-shirt for daily wear', suggestedPrice: 499, category: 'mens-wear', subcategory: 'casual-wear', variants: ['S', 'M', 'L', 'XL', 'XXL'], isSelected: false, isPopular: true},
            {id: 'tracksuit-men-001', name: 'Men\'s Track Suit', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300', description: 'Comfortable track suit for sports and fitness', suggestedPrice: 1299, category: 'mens-wear', subcategory: 'casual-wear', variants: ['S', 'M', 'L', 'XL'], isSelected: false, isPopular: true},
            {id: 'winter-jacket-001', name: 'Winter Jacket', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300', description: 'Warm winter jacket for cold weather', suggestedPrice: 2499, category: 'mens-wear', subcategory: 'winter-wear', variants: ['S', 'M', 'L', 'XL'], isSelected: false, isPopular: true},
            {id: 'ethnic-kurta-designer-001', name: 'Designer Ethnic Kurta', image: 'https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=300', description: 'Festive ethnic kurta with intricate embroidery', suggestedPrice: 1899, category: 'mens-wear', subcategory: 'ethnic-wear', variants: ['S', 'M', 'L', 'XL'], isSelected: false, isPopular: true},
            {id: 'polo-tshirt-001', name: 'Polo T-Shirt', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300', description: 'Classic polo t-shirt for casual wear', suggestedPrice: 799, category: 'mens-wear', subcategory: 'casual-wear', variants: ['S', 'M', 'L', 'XL'], isSelected: false, isPopular: true},
            {id: 'nehru-jacket-001', name: 'Nehru Jacket', image: 'https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=300', description: 'Traditional Nehru jacket for ethnic wear', suggestedPrice: 1699, category: 'mens-wear', subcategory: 'ethnic-wear', variants: ['S', 'M', 'L', 'XL'], isSelected: false, isPopular: false},
            {id: 'linen-shirt-001', name: 'Linen Casual Shirt', image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=300', description: 'Breathable linen shirt for summer', suggestedPrice: 1599, category: 'mens-wear', subcategory: 'shirts', variants: ['S', 'M', 'L', 'XL'], isSelected: false, isPopular: true},
            {id: 'cargo-pants-001', name: 'Cargo Utility Pants', image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=300', description: 'Multi-pocket cargo pants for outdoor activities', suggestedPrice: 1799, category: 'mens-wear', subcategory: 'pants', variants: ['30', '32', '34', '36'], isSelected: false, isPopular: false},
            {id: 'hoodie-winter-001', name: 'Winter Hoodie', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300', description: 'Warm fleece hoodie for winter', suggestedPrice: 1499, category: 'mens-wear', subcategory: 'winter-wear', variants: ['S', 'M', 'L', 'XL'], isSelected: false, isPopular: true}
        ],
        'womens-wear': [
            {id: 'saree-silk-001', name: 'Silk Banarasi Saree', image: 'https://images.unsplash.com/photo-1583391733975-4770270d3c5e?w=300', description: 'Traditional Banarasi silk saree with gold border', suggestedPrice: 6999, category: 'womens-wear', subcategory: 'sarees', variants: ['One Size'], isSelected: false, isPopular: true},
            {id: 'lehenga-wedding-001', name: 'Designer Wedding Lehenga', image: 'https://images.unsplash.com/photo-1594736797933-d0ea8baa3b9a?w=300', description: 'Heavy embroidered lehenga for weddings', suggestedPrice: 12999, category: 'womens-wear', subcategory: 'lehengas', variants: ['S', 'M', 'L', 'XL'], isSelected: false, isPopular: true},
            {id: 'kurti-cotton-001', name: 'Printed Cotton Kurti', image: 'https://images.unsplash.com/photo-1594736797933-d0ea8baa3b9a?w=300', description: 'Comfortable printed kurti for daily wear', suggestedPrice: 799, category: 'womens-wear', subcategory: 'kurtis', variants: ['S', 'M', 'L', 'XL'], isSelected: false, isPopular: true},
            {id: 'dress-western-001', name: 'Western Maxi Dress', image: 'https://images.unsplash.com/photo-1566479179817-c0efeb382d13?w=300', description: 'Elegant western maxi dress for parties', suggestedPrice: 1899, category: 'womens-wear', subcategory: 'western-wear', variants: ['XS', 'S', 'M', 'L', 'XL'], isSelected: false, isPopular: false},
            {id: 'salwar-suit-001', name: 'Designer Salwar Suit', image: 'https://images.unsplash.com/photo-1583391733975-4770270d3c5e?w=300', description: 'Beautiful designer salwar suit with dupatta', suggestedPrice: 2499, category: 'womens-wear', subcategory: 'salwar-suits', variants: ['S', 'M', 'L', 'XL'], isSelected: false, isPopular: true},
            {id: 'saree-cotton-001', name: 'Cotton Handloom Saree', image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=300', description: 'Handwoven cotton saree with traditional motifs', suggestedPrice: 1299, category: 'womens-wear', subcategory: 'sarees', variants: ['One Size'], isSelected: false, isPopular: true},
            {id: 'blouse-silk-001', name: 'Silk Designer Blouse', image: 'https://images.unsplash.com/photo-1594736797933-d0ea8baa3b9a?w=300', description: 'Elegant silk blouse with embroidery', suggestedPrice: 899, category: 'womens-wear', subcategory: 'tops', variants: ['S', 'M', 'L', 'XL'], isSelected: false, isPopular: false},
            {id: 'party-dress-001', name: 'Party Wear Dress', image: 'https://images.unsplash.com/photo-1594736797933-d0ea8baa3b9a?w=300', description: 'Elegant party dress for special occasions', suggestedPrice: 2999, category: 'womens-wear', subcategory: 'western-wear', variants: ['XS', 'S', 'M', 'L', 'XL'], isSelected: false, isPopular: true},
            {id: 'palazzo-set-001', name: 'Kurti Palazzo Set', image: 'https://images.unsplash.com/photo-1594736797933-d0ea8baa3b9a?w=300', description: 'Stylish kurti with palazzo pants', suggestedPrice: 1799, category: 'womens-wear', subcategory: 'ethnic-wear', variants: ['S', 'M', 'L', 'XL'], isSelected: false, isPopular: true},
            {id: 'winter-shawl-001', name: 'Woolen Shawl', image: 'https://images.unsplash.com/photo-1594736797933-d0ea8baa3b9a?w=300', description: 'Warm woolen shawl for winter', suggestedPrice: 899, category: 'womens-wear', subcategory: 'winter-wear', variants: ['Plain', 'Printed', 'Embroidered'], isSelected: false, isPopular: true},
            {id: 'crop-top-001', name: 'Trendy Crop Top', image: 'https://images.unsplash.com/photo-1594736797933-d0ea8baa3b9a?w=300', description: 'Modern crop top for young women', suggestedPrice: 599, category: 'womens-wear', subcategory: 'western-wear', variants: ['XS', 'S', 'M', 'L'], isSelected: false, isPopular: true},
            {id: 'anarkali-suit-001', name: 'Anarkali Suit Set', image: 'https://images.unsplash.com/photo-1583391733975-4770270d3c5e?w=300', description: 'Graceful Anarkali suit with dupatta', suggestedPrice: 2199, category: 'womens-wear', subcategory: 'ethnic-wear', variants: ['S', 'M', 'L', 'XL'], isSelected: false, isPopular: true},
            {id: 'jeans-women-001', name: 'Women\'s Skinny Jeans', image: 'https://images.unsplash.com/photo-1594736797933-d0ea8baa3b9a?w=300', description: 'Trendy skinny jeans for casual wear', suggestedPrice: 1399, category: 'womens-wear', subcategory: 'western-wear', variants: ['26', '28', '30', '32', '34'], isSelected: false, isPopular: true},
            {id: 'ethnic-jacket-001', name: 'Ethnic Jacket', image: 'https://images.unsplash.com/photo-1583391733975-4770270d3c5e?w=300', description: 'Traditional ethnic jacket with mirror work', suggestedPrice: 1599, category: 'womens-wear', subcategory: 'ethnic-wear', variants: ['S', 'M', 'L', 'XL'], isSelected: false, isPopular: false},
            {id: 'formal-shirt-women-001', name: 'Women\'s Formal Shirt', image: 'https://images.unsplash.com/photo-1594736797933-d0ea8baa3b9a?w=300', description: 'Professional formal shirt for office wear', suggestedPrice: 1199, category: 'womens-wear', subcategory: 'formal-wear', variants: ['S', 'M', 'L', 'XL'], isSelected: false, isPopular: true}
        ],
        'accessories': [
            {id: 'handbag-leather-001', name: 'Leather Handbag', image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300', description: 'Premium leather handbag for women', suggestedPrice: 2299, category: 'accessories', subcategory: 'bags', variants: ['Brown', 'Black', 'Tan'], isSelected: false, isPopular: true},
            {id: 'watch-analog-001', name: 'Analog Wrist Watch', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300', description: 'Stylish analog watch for everyday use', suggestedPrice: 1599, category: 'accessories', subcategory: 'watches', variants: ['Silver', 'Gold', 'Black'], isSelected: false, isPopular: true},
            {id: 'sunglasses-uv-001', name: 'UV Protection Sunglasses', image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=300', description: 'Stylish sunglasses with UV protection', suggestedPrice: 899, category: 'accessories', subcategory: 'sunglasses', variants: ['Black', 'Brown', 'Blue'], isSelected: false, isPopular: false},
            {id: 'wallet-leather-001', name: 'Genuine Leather Wallet', image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?w=300', description: 'Premium leather wallet with multiple card slots', suggestedPrice: 799, category: 'accessories', subcategory: 'wallets', variants: ['Brown', 'Black', 'Navy'], isSelected: false, isPopular: true},
            {id: 'scarf-silk-001', name: 'Silk Fashion Scarf', image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300', description: 'Elegant silk scarf for style', suggestedPrice: 599, category: 'accessories', subcategory: 'scarves', variants: ['Floral', 'Abstract', 'Solid'], isSelected: false, isPopular: true},
            {id: 'belt-leather-001', name: 'Leather Belt', image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?w=300', description: 'Classic leather belt for men and women', suggestedPrice: 699, category: 'accessories', subcategory: 'belts', variants: ['Black', 'Brown', 'Tan'], isSelected: false, isPopular: true},
            {id: 'backpack-travel-001', name: 'Travel Backpack', image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300', description: 'Durable travel backpack with multiple compartments', suggestedPrice: 1899, category: 'accessories', subcategory: 'bags', variants: ['Black', 'Navy', 'Grey'], isSelected: false, isPopular: true},
            {id: 'cap-sports-001', name: 'Sports Cap', image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=300', description: 'Adjustable sports cap for outdoor activities', suggestedPrice: 399, category: 'accessories', subcategory: 'hats', variants: ['Black', 'White', 'Navy'], isSelected: false, isPopular: true},
            {id: 'jewelry-earrings-001', name: 'Fashion Earrings', image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300', description: 'Trendy fashion earrings for women', suggestedPrice: 499, category: 'accessories', subcategory: 'jewelry', variants: ['Gold', 'Silver', 'Rose Gold'], isSelected: false, isPopular: true}
        ],
        'footwear': [
            {id: 'shoes-formal-001', name: 'Formal Leather Shoes', image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=300', description: 'Premium leather formal shoes for men', suggestedPrice: 2999, category: 'footwear', subcategory: 'mens-shoes', variants: ['6', '7', '8', '9', '10', '11'], isSelected: false, isPopular: true},
            {id: 'sandals-women-001', name: 'Designer Women Sandals', image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=300', description: 'Comfortable designer sandals for women', suggestedPrice: 1499, category: 'footwear', subcategory: 'womens-shoes', variants: ['5', '6', '7', '8', '9'], isSelected: false, isPopular: true},
            {id: 'sneakers-sports-001', name: 'Sports Sneakers', image: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=300', description: 'Comfortable sports sneakers for running', suggestedPrice: 3499, category: 'footwear', subcategory: 'sneakers', variants: ['6', '7', '8', '9', '10', '11'], isSelected: false, isPopular: true},
            {id: 'chappals-leather-001', name: 'Traditional Leather Chappals', image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=300', description: 'Handcrafted leather chappals', suggestedPrice: 899, category: 'footwear', subcategory: 'ethnic-footwear', variants: ['6', '7', '8', '9', '10'], isSelected: false, isPopular: false},
            {id: 'heels-party-001', name: 'Party Wear Heels', image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=300', description: 'Elegant heels for special occasions', suggestedPrice: 1899, category: 'footwear', subcategory: 'womens-shoes', variants: ['5', '6', '7', '8', '9'], isSelected: false, isPopular: true},
            {id: 'boots-winter-001', name: 'Winter Boots', image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=300', description: 'Warm boots for winter season', suggestedPrice: 2199, category: 'footwear', subcategory: 'boots', variants: ['6', '7', '8', '9', '10'], isSelected: false, isPopular: false},
            {id: 'slippers-home-001', name: 'Comfortable Home Slippers', image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=300', description: 'Soft and comfortable house slippers', suggestedPrice: 299, category: 'footwear', subcategory: 'slippers', variants: ['6', '7', '8', '9', '10'], isSelected: false, isPopular: true},
            {id: 'floaters-casual-001', name: 'Casual Floaters', image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=300', description: 'Comfortable floaters for casual wear', suggestedPrice: 799, category: 'footwear', subcategory: 'sandals', variants: ['6', '7', '8', '9', '10'], isSelected: false, isPopular: true},
            {id: 'ethnic-mojari-001', name: 'Traditional Mojari', image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=300', description: 'Handcrafted ethnic mojari shoes', suggestedPrice: 1299, category: 'footwear', subcategory: 'ethnic-footwear', variants: ['6', '7', '8', '9', '10'], isSelected: false, isPopular: false}
        ]
    },

    'home-foods': {
        'north-indian': [
            {id: 'butter-chicken-001', name: 'Butter Chicken', image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=300', description: 'Creamy and delicious butter chicken curry', suggestedPrice: 320, category: 'north-indian', subcategory: 'curries', variants: ['Regular', 'Large'], isSelected: false, isPopular: true},
            {id: 'dal-makhani-001', name: 'Dal Makhani', image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=300', description: 'Rich and creamy black lentil curry', suggestedPrice: 280, category: 'north-indian', subcategory: 'dal-preparations', variants: ['Regular', 'Large'], isSelected: false, isPopular: true},
            {id: 'biryani-chicken-001', name: 'Chicken Biryani', image: 'https://images.unsplash.com/photo-1563379091339-03246963d999?w=300', description: 'Aromatic basmati rice with tender chicken', suggestedPrice: 350, category: 'north-indian', subcategory: 'biryanis', variants: ['Half', 'Full'], isSelected: false, isPopular: true},
            {id: 'naan-butter-001', name: 'Butter Naan', image: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?w=300', description: 'Soft and fluffy butter naan bread', suggestedPrice: 60, category: 'north-indian', subcategory: 'rotis-parathas', variants: ['Single', 'Pair'], isSelected: false, isPopular: true},
            {id: 'tandoori-chicken-001', name: 'Tandoori Chicken', image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=300', description: 'Marinated chicken cooked in tandoor', suggestedPrice: 420, category: 'north-indian', subcategory: 'tandoor-items', variants: ['Half', 'Full'], isSelected: false, isPopular: true},
            {id: 'rajma-chawal-001', name: 'Rajma Chawal', image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=300', description: 'Kidney bean curry with steamed rice', suggestedPrice: 220, category: 'north-indian', subcategory: 'rice-dishes', variants: ['Regular', 'Large'], isSelected: false, isPopular: true},
            {id: 'chole-bhature-001', name: 'Chole Bhature', image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=300', description: 'Spicy chickpea curry with fried bread', suggestedPrice: 180, category: 'north-indian', subcategory: 'snacks', variants: ['Single', 'Double'], isSelected: false, isPopular: true},
            {id: 'paneer-tikka-001', name: 'Paneer Tikka', image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=300', description: 'Grilled cottage cheese with spices', suggestedPrice: 280, category: 'north-indian', subcategory: 'tandoor-items', variants: ['Regular', 'Large'], isSelected: false, isPopular: true},
            {id: 'aloo-paratha-001', name: 'Aloo Paratha', image: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?w=300', description: 'Stuffed potato flatbread with curd', suggestedPrice: 120, category: 'north-indian', subcategory: 'rotis-parathas', variants: ['Single', 'Double'], isSelected: false, isPopular: true},
            {id: 'kadhai-paneer-001', name: 'Kadhai Paneer', image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=300', description: 'Spicy cottage cheese curry with bell peppers', suggestedPrice: 300, category: 'north-indian', subcategory: 'curries', variants: ['Regular', 'Large'], isSelected: false, isPopular: true},
            {id: 'seekh-kebab-001', name: 'Seekh Kebab', image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=300', description: 'Spiced minced meat grilled on skewers', suggestedPrice: 380, category: 'north-indian', subcategory: 'tandoor-items', variants: ['6 Pieces', '12 Pieces'], isSelected: false, isPopular: true},
            {id: 'biryani-mutton-001', name: 'Mutton Biryani', image: 'https://images.unsplash.com/photo-1563379091339-03246963d999?w=300', description: 'Aromatic mutton biryani with fragrant spices', suggestedPrice: 450, category: 'north-indian', subcategory: 'biryanis', variants: ['Half', 'Full'], isSelected: false, isPopular: true}
        ],
        'south-indian': [
            {id: 'masala-dosa-001', name: 'Masala Dosa', image: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=300', description: 'Crispy dosa with spiced potato filling', suggestedPrice: 120, category: 'south-indian', subcategory: 'dosas', variants: ['Regular', 'Large'], isSelected: false, isPopular: true},
            {id: 'idli-sambar-001', name: 'Idli with Sambar', image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=300', description: 'Steamed rice cakes with lentil curry', suggestedPrice: 80, category: 'south-indian', subcategory: 'idlis', variants: ['2 Pieces', '4 Pieces'], isSelected: false, isPopular: true},
            {id: 'vada-sambar-001', name: 'Medu Vada', image: 'https://images.unsplash.com/photo-1611270629569-8b357cb88da6?w=300', description: 'Crispy lentil donuts with sambar', suggestedPrice: 90, category: 'south-indian', subcategory: 'vadas', variants: ['2 Pieces', '4 Pieces'], isSelected: false, isPopular: true},
            {id: 'uttapam-onion-001', name: 'Onion Uttapam', image: 'https://images.unsplash.com/photo-1630383249896-424e482df921?w=300', description: 'Thick pancake with onion toppings', suggestedPrice: 110, category: 'south-indian', subcategory: 'uttapam', variants: ['Regular', 'Large'], isSelected: false, isPopular: false},
            {id: 'coconut-chutney-001', name: 'Coconut Chutney', image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=300', description: 'Fresh coconut chutney with spices', suggestedPrice: 40, category: 'south-indian', subcategory: 'chutneys', variants: ['Small', 'Medium'], isSelected: false, isPopular: true},
            {id: 'rava-upma-001', name: 'Rava Upma', image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=300', description: 'Traditional semolina breakfast dish', suggestedPrice: 70, category: 'south-indian', subcategory: 'breakfast', variants: ['Regular', 'Large'], isSelected: false, isPopular: false},
            {id: 'pongal-sweet-001', name: 'Sweet Pongal', image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=300', description: 'Traditional sweet rice dish', suggestedPrice: 90, category: 'south-indian', subcategory: 'desserts', variants: ['Regular', 'Large'], isSelected: false, isPopular: true},
            {id: 'filter-coffee-001', name: 'Filter Coffee', image: 'https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=300', description: 'Authentic South Indian filter coffee', suggestedPrice: 35, category: 'south-indian', subcategory: 'beverages', variants: ['Regular', 'Strong'], isSelected: false, isPopular: true},
            {id: 'dosa-rava-001', name: 'Rava Dosa', image: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=300', description: 'Crispy semolina dosa with vegetables', suggestedPrice: 140, category: 'south-indian', subcategory: 'dosas', variants: ['Plain', 'Masala'], isSelected: false, isPopular: true},
            {id: 'sambar-rice-001', name: 'Sambar Rice', image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=300', description: 'Traditional sambar with steamed rice', suggestedPrice: 100, category: 'south-indian', subcategory: 'rice-dishes', variants: ['Regular', 'Large'], isSelected: false, isPopular: true}
        ],
        'sweets-desserts': [
            {id: 'gulab-jamun-001', name: 'Gulab Jamun', image: 'https://images.unsplash.com/photo-1571877277200-a0d98ea607e9?w=300', description: 'Soft milk dumplings in sugar syrup', suggestedPrice: 60, category: 'sweets-desserts', subcategory: 'traditional-sweets', variants: ['2 Pieces', '4 Pieces', '1 Kg'], isSelected: false, isPopular: true},
            {id: 'rasmalai-001', name: 'Rasmalai', image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=300', description: 'Soft cheese dumplings in flavored milk', suggestedPrice: 80, category: 'sweets-desserts', subcategory: 'traditional-sweets', variants: ['2 Pieces', '4 Pieces'], isSelected: false, isPopular: true},
            {id: 'chocolate-cake-001', name: 'Chocolate Cake', image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=300', description: 'Rich chocolate cake with ganache', suggestedPrice: 450, category: 'sweets-desserts', subcategory: 'cakes', variants: ['Slice', 'Half Kg', '1 Kg'], isSelected: false, isPopular: true},
            {id: 'kulfi-malai-001', name: 'Malai Kulfi', image: 'https://images.unsplash.com/photo-1571877277200-a0d98ea607e9?w=300', description: 'Traditional Indian ice cream', suggestedPrice: 50, category: 'sweets-desserts', subcategory: 'ice-creams', variants: ['Single', 'Double'], isSelected: false, isPopular: true},
            {id: 'kheer-rice-001', name: 'Rice Kheer', image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=300', description: 'Creamy rice pudding with nuts', suggestedPrice: 80, category: 'sweets-desserts', subcategory: 'traditional-sweets', variants: ['Small', 'Large'], isSelected: false, isPopular: true},
            {id: 'rasgulla-001', name: 'Rasgulla', image: 'https://images.unsplash.com/photo-1571877277200-a0d98ea607e9?w=300', description: 'Spongy cottage cheese balls in syrup', suggestedPrice: 60, category: 'sweets-desserts', subcategory: 'traditional-sweets', variants: ['4 Pieces', '8 Pieces'], isSelected: false, isPopular: true},
            {id: 'gajar-halwa-001', name: 'Gajar Ka Halwa', image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=300', description: 'Traditional carrot dessert with nuts', suggestedPrice: 120, category: 'sweets-desserts', subcategory: 'traditional-sweets', variants: ['Small', 'Large'], isSelected: false, isPopular: true}
        ],
        'beverages': [
            {id: 'masala-chai-001', name: 'Masala Chai', image: 'https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=300', description: 'Traditional spiced tea with milk', suggestedPrice: 25, category: 'beverages', subcategory: 'tea', variants: ['Regular', 'Large'], isSelected: false, isPopular: true},
            {id: 'fresh-lime-001', name: 'Fresh Lime Water', image: 'https://images.unsplash.com/photo-1546173159-315724a31696?w=300', description: 'Refreshing lime water with mint', suggestedPrice: 40, category: 'beverages', subcategory: 'fresh-juices', variants: ['Sweet', 'Salt', 'Soda'], isSelected: false, isPopular: true},
            {id: 'mango-lassi-001', name: 'Mango Lassi', image: 'https://images.unsplash.com/photo-1553979459-d2229ba7433a?w=300', description: 'Creamy mango yogurt drink', suggestedPrice: 80, category: 'beverages', subcategory: 'lassi', variants: ['Regular', 'Large'], isSelected: false, isPopular: true},
            {id: 'buttermilk-spiced-001', name: 'Spiced Buttermilk', image: 'https://images.unsplash.com/photo-1553979459-d2229ba7433a?w=300', description: 'Refreshing spiced buttermilk', suggestedPrice: 30, category: 'beverages', subcategory: 'traditional-drinks', variants: ['Regular', 'Large'], isSelected: false, isPopular: true},
            {id: 'sugarcane-juice-001', name: 'Fresh Sugarcane Juice', image: 'https://images.unsplash.com/photo-1546173159-315724a31696?w=300', description: 'Fresh squeezed sugarcane juice', suggestedPrice: 50, category: 'beverages', subcategory: 'fresh-juices', variants: ['Regular', 'Large'], isSelected: false, isPopular: true},
            {id: 'coconut-water-001', name: 'Tender Coconut Water', image: 'https://images.unsplash.com/photo-1546173159-315724a31696?w=300', description: 'Fresh tender coconut water', suggestedPrice: 45, category: 'beverages', subcategory: 'natural-drinks', variants: ['Single', 'Double'], isSelected: false, isPopular: true},
            {id: 'kulfi-drink-001', name: 'Kulfi Falooda', image: 'https://images.unsplash.com/photo-1553979459-d2229ba7433a?w=300', description: 'Traditional kulfi with vermicelli and rose syrup', suggestedPrice: 90, category: 'beverages', subcategory: 'traditional-drinks', variants: ['Regular', 'Large'], isSelected: false, isPopular: true}
        ]
    },

    salons: {
        'hair-services': [
            {id: 'haircut-men-001', name: 'Men\'s Haircut & Styling', image: 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=300', description: 'Professional haircut with styling', suggestedPrice: 300, category: 'hair-services', subcategory: 'haircuts', variants: ['Basic', 'Premium'], isSelected: false, isPopular: true},
            {id: 'haircut-women-001', name: 'Women\'s Haircut & Blow Dry', image: 'https://images.unsplash.com/photo-1562004760-acb5685654e8?w=300', description: 'Stylish haircut with professional blow dry', suggestedPrice: 800, category: 'hair-services', subcategory: 'haircuts', variants: ['Basic', 'Styled', 'Premium'], isSelected: false, isPopular: true},
            {id: 'hair-color-001', name: 'Hair Coloring Service', image: 'https://images.unsplash.com/photo-1634449571010-02389ed0f9b0?w=300', description: 'Professional hair coloring with premium products', suggestedPrice: 2500, category: 'hair-services', subcategory: 'hair-coloring', variants: ['Highlights', 'Full Color', 'Root Touch-up'], isSelected: false, isPopular: false},
            {id: 'keratin-treatment-001', name: 'Keratin Hair Treatment', image: 'https://images.unsplash.com/photo-1560869713-7d0954d92f5b?w=300', description: 'Smoothing keratin treatment for frizzy hair', suggestedPrice: 5000, category: 'hair-services', subcategory: 'keratin', variants: ['Basic', 'Premium'], isSelected: false, isPopular: false},
            {id: 'hair-spa-001', name: 'Hair Spa Treatment', image: 'https://images.unsplash.com/photo-1560869713-7d0954d92f5b?w=300', description: 'Nourishing hair spa for healthy hair', suggestedPrice: 1200, category: 'hair-services', subcategory: 'hair-treatments', variants: ['Basic', 'Premium'], isSelected: false, isPopular: true},
            {id: 'hair-straightening-001', name: 'Hair Straightening', image: 'https://images.unsplash.com/photo-1634449571010-02389ed0f9b0?w=300', description: 'Permanent hair straightening treatment', suggestedPrice: 4000, category: 'hair-services', subcategory: 'hair-styling', variants: ['Temporary', 'Permanent'], isSelected: false, isPopular: false},
            {id: 'hair-extensions-001', name: 'Hair Extensions', image: 'https://images.unsplash.com/photo-1562004760-acb5685654e8?w=300', description: 'Premium hair extensions for length and volume', suggestedPrice: 3500, category: 'hair-services', subcategory: 'hair-styling', variants: ['Clip-in', 'Tape-in', 'Bonded'], isSelected: false, isPopular: false},
            {id: 'scalp-treatment-001', name: 'Scalp Treatment', image: 'https://images.unsplash.com/photo-1560869713-7d0954d92f5b?w=300', description: 'Deep scalp cleansing and nourishing treatment', suggestedPrice: 1500, category: 'hair-services', subcategory: 'hair-treatments', variants: ['Anti-dandruff', 'Hair Fall', 'Dry Scalp'], isSelected: false, isPopular: true},
            {id: 'hair-wash-001', name: 'Hair Wash & Conditioning', image: 'https://images.unsplash.com/photo-1560869713-7d0954d92f5b?w=300', description: 'Professional hair wash with deep conditioning', suggestedPrice: 400, category: 'hair-services', subcategory: 'hair-treatments', variants: ['Basic', 'Premium'], isSelected: false, isPopular: true},
            {id: 'beard-styling-001', name: 'Beard Trim & Styling', image: 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=300', description: 'Professional beard trimming and styling', suggestedPrice: 200, category: 'hair-services', subcategory: 'haircuts', variants: ['Basic Trim', 'Full Styling'], isSelected: false, isPopular: true}
        ],
        'beauty-services': [
            {id: 'facial-basic-001', name: 'Deep Cleansing Facial', image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=300', description: 'Deep cleansing facial for glowing skin', suggestedPrice: 1200, category: 'beauty-services', subcategory: 'facials', variants: ['Basic', 'Deluxe', 'Premium'], isSelected: false, isPopular: true},
            {id: 'bridal-makeup-001', name: 'Bridal Makeup Package', image: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=300', description: 'Complete bridal makeup with hair styling', suggestedPrice: 8000, category: 'beauty-services', subcategory: 'makeup', variants: ['Traditional', 'Modern', 'Premium'], isSelected: false, isPopular: true},
            {id: 'eyebrow-threading-001', name: 'Eyebrow Threading & Shaping', image: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=300', description: 'Professional eyebrow threading and shaping', suggestedPrice: 150, category: 'beauty-services', subcategory: 'eyebrow-threading', variants: ['Basic', 'Styled'], isSelected: false, isPopular: true},
            {id: 'manicure-pedicure-001', name: 'Manicure & Pedicure', image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=300', description: 'Complete nail care with polish', suggestedPrice: 800, category: 'beauty-services', subcategory: 'manicure', variants: ['Basic', 'Gel Polish', 'French'], isSelected: false, isPopular: true},
            {id: 'party-makeup-001', name: 'Party Makeup', image: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=300', description: 'Glamorous party makeup service', suggestedPrice: 2000, category: 'beauty-services', subcategory: 'makeup', variants: ['Light', 'Heavy', 'HD'], isSelected: false, isPopular: true},
            {id: 'waxing-full-body-001', name: 'Full Body Waxing', image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=300', description: 'Complete body waxing service', suggestedPrice: 2500, category: 'beauty-services', subcategory: 'waxing', variants: ['Arms & Legs', 'Full Body'], isSelected: false, isPopular: true},
            {id: 'facial-anti-aging-001', name: 'Anti-Aging Facial', image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=300', description: 'Advanced anti-aging facial treatment', suggestedPrice: 2000, category: 'beauty-services', subcategory: 'facials', variants: ['Collagen', 'Vitamin C', 'Botox Alternative'], isSelected: false, isPopular: true},
            {id: 'makeup-natural-001', name: 'Natural Day Makeup', image: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=300', description: 'Light and natural makeup for everyday', suggestedPrice: 800, category: 'beauty-services', subcategory: 'makeup', variants: ['Office Look', 'Casual', 'Date Night'], isSelected: false, isPopular: true},
            {id: 'upper-lip-threading-001', name: 'Upper Lip Threading', image: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=300', description: 'Gentle upper lip hair removal', suggestedPrice: 50, category: 'beauty-services', subcategory: 'threading', variants: ['Threading', 'Waxing'], isSelected: false, isPopular: true},
            {id: 'bleach-facial-001', name: 'Bleach & Facial Combo', image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=300', description: 'Skin bleaching with moisturizing facial', suggestedPrice: 1000, category: 'beauty-services', subcategory: 'facials', variants: ['Face Only', 'Face & Neck'], isSelected: false, isPopular: true}
        ],
        'spa-wellness': [
            {id: 'full-body-massage-001', name: 'Full Body Relaxation Massage', image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=300', description: 'Complete body massage for stress relief', suggestedPrice: 2500, category: 'spa-wellness', subcategory: 'massages', variants: ['60 min', '90 min', '120 min'], isSelected: false, isPopular: true},
            {id: 'aromatherapy-session-001', name: 'Aromatherapy Session', image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=300', description: 'Relaxing aromatherapy with essential oils', suggestedPrice: 1800, category: 'spa-wellness', subcategory: 'aromatherapy', variants: ['45 min', '60 min'], isSelected: false, isPopular: false},
            {id: 'head-massage-001', name: 'Head & Shoulder Massage', image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=300', description: 'Relaxing head and shoulder massage', suggestedPrice: 800, category: 'spa-wellness', subcategory: 'massages', variants: ['30 min', '45 min'], isSelected: false, isPopular: true},
            {id: 'foot-massage-001', name: 'Foot Reflexology Massage', image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=300', description: 'Therapeutic foot massage and reflexology', suggestedPrice: 600, category: 'spa-wellness', subcategory: 'reflexology', variants: ['30 min', '45 min'], isSelected: false, isPopular: true},
            {id: 'couples-massage-001', name: 'Couples Massage Session', image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=300', description: 'Relaxing massage session for couples', suggestedPrice: 4500, category: 'spa-wellness', subcategory: 'massages', variants: ['60 min', '90 min'], isSelected: false, isPopular: false},
            {id: 'steam-bath-001', name: 'Steam Bath & Sauna', image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=300', description: 'Detoxifying steam bath and sauna session', suggestedPrice: 500, category: 'spa-wellness', subcategory: 'steam-baths', variants: ['15 min', '30 min'], isSelected: false, isPopular: true},
            {id: 'body-scrub-001', name: 'Exfoliating Body Scrub', image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=300', description: 'Full body exfoliation and moisturizing', suggestedPrice: 1500, category: 'spa-wellness', subcategory: 'body-treatments', variants: ['Coffee Scrub', 'Sugar Scrub', 'Salt Scrub'], isSelected: false, isPopular: true},
            {id: 'prenatal-massage-001', name: 'Prenatal Massage', image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=300', description: 'Gentle massage therapy for expecting mothers', suggestedPrice: 2000, category: 'spa-wellness', subcategory: 'massages', variants: ['45 min', '60 min'], isSelected: false, isPopular: false},
            {id: 'hot-stone-massage-001', name: 'Hot Stone Therapy', image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=300', description: 'Therapeutic massage using heated stones', suggestedPrice: 3000, category: 'spa-wellness', subcategory: 'massages', variants: ['60 min', '90 min'], isSelected: false, isPopular: true},
            {id: 'deep-tissue-massage-001', name: 'Deep Tissue Massage', image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=300', description: 'Intensive massage for muscle tension relief', suggestedPrice: 2200, category: 'spa-wellness', subcategory: 'massages', variants: ['60 min', '90 min'], isSelected: false, isPopular: true}
        ]
    },

    grocery: {
        'fresh-produce': [
            {id: 'tomatoes-fresh-001', name: 'Fresh Tomatoes', image: 'https://images.unsplash.com/photo-1546470427-e1295e888100?w=300', description: 'Farm fresh red tomatoes', suggestedPrice: 40, category: 'fresh-produce', subcategory: 'vegetables', variants: ['500g', '1kg', '2kg'], isSelected: false, isPopular: true},
            {id: 'onions-red-001', name: 'Red Onions', image: 'https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?w=300', description: 'Fresh red onions from local farms', suggestedPrice: 30, category: 'fresh-produce', subcategory: 'vegetables', variants: ['500g', '1kg', '2kg'], isSelected: false, isPopular: true},
            {id: 'bananas-fresh-001', name: 'Fresh Bananas', image: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=300', description: 'Sweet and ripe bananas', suggestedPrice: 60, category: 'fresh-produce', subcategory: 'fruits', variants: ['500g', '1kg'], isSelected: false, isPopular: true},
            {id: 'apples-kashmiri-001', name: 'Kashmiri Apples', image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=300', description: 'Premium Kashmiri red apples', suggestedPrice: 180, category: 'fresh-produce', subcategory: 'fruits', variants: ['500g', '1kg'], isSelected: false, isPopular: true},
            {id: 'potatoes-fresh-001', name: 'Fresh Potatoes', image: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=300', description: 'Farm fresh potatoes for daily cooking', suggestedPrice: 25, category: 'fresh-produce', subcategory: 'vegetables', variants: ['1kg', '2kg', '5kg'], isSelected: false, isPopular: true},
            {id: 'carrots-fresh-001', name: 'Fresh Carrots', image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=300', description: 'Crunchy fresh carrots', suggestedPrice: 50, category: 'fresh-produce', subcategory: 'vegetables', variants: ['500g', '1kg'], isSelected: false, isPopular: true},
            {id: 'spinach-fresh-001', name: 'Fresh Spinach', image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=300', description: 'Nutritious fresh spinach leaves', suggestedPrice: 30, category: 'fresh-produce', subcategory: 'vegetables', variants: ['250g', '500g'], isSelected: false, isPopular: true},
            {id: 'mangoes-alphonso-001', name: 'Alphonso Mangoes', image: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=300', description: 'Premium Alphonso mangoes from Maharashtra', suggestedPrice: 300, category: 'fresh-produce', subcategory: 'fruits', variants: ['1kg', '2kg', '5kg'], isSelected: false, isPopular: true},
            {id: 'cauliflower-fresh-001', name: 'Fresh Cauliflower', image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=300', description: 'White fresh cauliflower heads', suggestedPrice: 35, category: 'fresh-produce', subcategory: 'vegetables', variants: ['Per Piece', '500g', '1kg'], isSelected: false, isPopular: true},
            {id: 'green-beans-001', name: 'Fresh Green Beans', image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=300', description: 'Tender green beans for cooking', suggestedPrice: 80, category: 'fresh-produce', subcategory: 'vegetables', variants: ['250g', '500g'], isSelected: false, isPopular: true},
            {id: 'oranges-nagpur-001', name: 'Nagpur Oranges', image: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=300', description: 'Sweet Nagpur oranges rich in vitamin C', suggestedPrice: 80, category: 'fresh-produce', subcategory: 'fruits', variants: ['500g', '1kg', '2kg'], isSelected: false, isPopular: true},
            {id: 'ginger-fresh-001', name: 'Fresh Ginger', image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=300', description: 'Fresh organic ginger root', suggestedPrice: 100, category: 'fresh-produce', subcategory: 'herbs', variants: ['100g', '250g', '500g'], isSelected: false, isPopular: true}
        ],
        'staples': [
            {id: 'rice-basmati-001', name: 'Basmati Rice', image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=300', description: 'Premium long grain basmati rice', suggestedPrice: 200, category: 'staples', subcategory: 'rice', variants: ['1kg', '5kg', '10kg'], isSelected: false, isPopular: true},
            {id: 'dal-toor-001', name: 'Toor Dal (Arhar)', image: 'https://images.unsplash.com/photo-1596097900113-bdf6c7ffaba6?w=300', description: 'High quality toor dal lentils', suggestedPrice: 140, category: 'staples', subcategory: 'pulses', variants: ['500g', '1kg', '2kg'], isSelected: false, isPopular: true},
            {id: 'oil-mustard-001', name: 'Mustard Oil', image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=300', description: 'Pure mustard oil for cooking', suggestedPrice: 180, category: 'staples', subcategory: 'oils', variants: ['500ml', '1L', '2L'], isSelected: false, isPopular: true},
            {id: 'wheat-flour-001', name: 'Whole Wheat Flour', image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=300', description: 'Fresh ground whole wheat flour', suggestedPrice: 50, category: 'staples', subcategory: 'flour', variants: ['1kg', '2kg', '5kg'], isSelected: false, isPopular: true},
            {id: 'sugar-white-001', name: 'White Sugar', image: 'https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=300', description: 'Pure white refined sugar', suggestedPrice: 45, category: 'staples', subcategory: 'sugar', variants: ['1kg', '2kg', '5kg'], isSelected: false, isPopular: true},
            {id: 'dal-moong-001', name: 'Moong Dal', image: 'https://images.unsplash.com/photo-1596097900113-bdf6c7ffaba6?w=300', description: 'Yellow moong dal for healthy cooking', suggestedPrice: 120, category: 'staples', subcategory: 'pulses', variants: ['500g', '1kg'], isSelected: false, isPopular: true},
            {id: 'turmeric-powder-001', name: 'Turmeric Powder', image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=300', description: 'Pure turmeric powder for cooking', suggestedPrice: 80, category: 'staples', subcategory: 'spices', variants: ['100g', '250g', '500g'], isSelected: false, isPopular: true},
            {id: 'chili-powder-001', name: 'Red Chili Powder', image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=300', description: 'Spicy red chili powder', suggestedPrice: 120, category: 'staples', subcategory: 'spices', variants: ['100g', '250g', '500g'], isSelected: false, isPopular: true},
            {id: 'coriander-powder-001', name: 'Coriander Powder', image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=300', description: 'Aromatic coriander seed powder', suggestedPrice: 70, category: 'staples', subcategory: 'spices', variants: ['100g', '250g'], isSelected: false, isPopular: true},
            {id: 'cumin-seeds-001', name: 'Cumin Seeds (Jeera)', image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=300', description: 'Whole cumin seeds for tempering', suggestedPrice: 180, category: 'staples', subcategory: 'spices', variants: ['100g', '250g'], isSelected: false, isPopular: true},
            {id: 'rice-everyday-001', name: 'Regular Rice', image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=300', description: 'Daily use white rice', suggestedPrice: 60, category: 'staples', subcategory: 'rice', variants: ['1kg', '5kg', '10kg'], isSelected: false, isPopular: true},
            {id: 'salt-iodized-001', name: 'Iodized Salt', image: 'https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=300', description: 'Pure iodized table salt', suggestedPrice: 20, category: 'staples', subcategory: 'salt', variants: ['1kg', '2kg'], isSelected: false, isPopular: true}
        ],
        'packaged-foods': [
            {id: 'biscuits-tea-001', name: 'Tea Time Biscuits', image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=300', description: 'Crispy biscuits perfect with tea', suggestedPrice: 40, category: 'packaged-foods', subcategory: 'snacks', variants: ['200g', '400g'], isSelected: false, isPopular: true},
            {id: 'milk-packets-001', name: 'Fresh Milk Packets', image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=300', description: 'Fresh full cream milk', suggestedPrice: 60, category: 'packaged-foods', subcategory: 'dairy', variants: ['500ml', '1L'], isSelected: false, isPopular: true},
            {id: 'bread-white-001', name: 'White Bread', image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=300', description: 'Fresh white bread loaf', suggestedPrice: 25, category: 'packaged-foods', subcategory: 'bakery', variants: ['Small', 'Large'], isSelected: false, isPopular: true},
            {id: 'noodles-instant-001', name: 'Instant Noodles', image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=300', description: 'Quick cooking instant noodles', suggestedPrice: 20, category: 'packaged-foods', subcategory: 'ready-to-eat', variants: ['Single Pack', '5 Pack'], isSelected: false, isPopular: true},
            {id: 'yogurt-cups-001', name: 'Greek Yogurt Cups', image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=300', description: 'Creamy Greek yogurt cups', suggestedPrice: 80, category: 'packaged-foods', subcategory: 'dairy', variants: ['Plain', 'Strawberry', 'Vanilla'], isSelected: false, isPopular: true},
            {id: 'cheese-slices-001', name: 'Processed Cheese Slices', image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=300', description: 'Convenient cheese slices for sandwiches', suggestedPrice: 120, category: 'packaged-foods', subcategory: 'dairy', variants: ['8 Slices', '16 Slices'], isSelected: false, isPopular: true},
            {id: 'cornflakes-001', name: 'Breakfast Cornflakes', image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=300', description: 'Crispy cornflakes for healthy breakfast', suggestedPrice: 180, category: 'packaged-foods', subcategory: 'breakfast', variants: ['250g', '500g'], isSelected: false, isPopular: true},
            {id: 'pasta-penne-001', name: 'Penne Pasta', image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=300', description: 'Italian penne pasta for quick meals', suggestedPrice: 80, category: 'packaged-foods', subcategory: 'ready-to-cook', variants: ['500g', '1kg'], isSelected: false, isPopular: true},
            {id: 'cookies-chocolate-001', name: 'Chocolate Chip Cookies', image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=300', description: 'Delicious chocolate chip cookies', suggestedPrice: 120, category: 'packaged-foods', subcategory: 'snacks', variants: ['200g', '400g'], isSelected: false, isPopular: true},
            {id: 'juice-mango-001', name: 'Mango Juice', image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=300', description: 'Fresh mango juice in tetra pack', suggestedPrice: 45, category: 'packaged-foods', subcategory: 'beverages', variants: ['200ml', '1L'], isSelected: false, isPopular: true},
            {id: 'frozen-peas-001', name: 'Frozen Green Peas', image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=300', description: 'Quick-frozen green peas', suggestedPrice: 85, category: 'packaged-foods', subcategory: 'frozen-foods', variants: ['500g', '1kg'], isSelected: false, isPopular: true},
            {id: 'nuts-almonds-001', name: 'California Almonds', image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=300', description: 'Premium California almonds', suggestedPrice: 800, category: 'packaged-foods', subcategory: 'dry-fruits', variants: ['250g', '500g', '1kg'], isSelected: false, isPopular: true}
        ]
    },

    furniture: {
        'living-room': [
            {id: 'sofa-3seater-001', name: '3-Seater Fabric Sofa', image: 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=300', description: 'Comfortable 3-seater sofa with premium fabric upholstery', suggestedPrice: 35000, category: 'living-room', subcategory: 'sofas', variants: ['Grey', 'Brown', 'Navy Blue'], isSelected: false, isPopular: true},
            {id: 'coffee-table-wood-001', name: 'Wooden Coffee Table', image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300', description: 'Solid wood coffee table with storage drawer', suggestedPrice: 12000, category: 'living-room', subcategory: 'coffee-tables', variants: ['Teak', 'Sheesham', 'Mango Wood'], isSelected: false, isPopular: true},
            {id: 'tv-unit-modern-001', name: 'Modern TV Unit', image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300', description: 'Sleek TV unit with cable management and storage', suggestedPrice: 18000, category: 'living-room', subcategory: 'tv-units', variants: ['White', 'Walnut', 'Black'], isSelected: false, isPopular: true},
            {id: 'recliner-leather-001', name: 'Leather Recliner Chair', image: 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=300', description: 'Premium leather recliner with massage function', suggestedPrice: 45000, category: 'living-room', subcategory: 'recliners', variants: ['Black', 'Brown', 'Tan'], isSelected: false, isPopular: false},
            {id: 'bean-bag-large-001', name: 'Large Bean Bag', image: 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=300', description: 'Comfortable large bean bag with premium filling', suggestedPrice: 4500, category: 'living-room', subcategory: 'bean-bags', variants: ['Red', 'Blue', 'Black'], isSelected: false, isPopular: true},
            {id: 'bookshelf-wooden-001', name: '5-Tier Wooden Bookshelf', image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300', description: 'Spacious wooden bookshelf for home library', suggestedPrice: 8500, category: 'living-room', subcategory: 'storage', variants: ['Natural', 'Walnut', 'White'], isSelected: false, isPopular: true},
            {id: 'center-table-glass-001', name: 'Glass Center Table', image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300', description: 'Modern tempered glass center table', suggestedPrice: 15000, category: 'living-room', subcategory: 'coffee-tables', variants: ['Clear', 'Tinted', 'Frosted'], isSelected: false, isPopular: false},
            {id: 'accent-chair-001', name: 'Accent Armchair', image: 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=300', description: 'Stylish accent chair for living room', suggestedPrice: 12000, category: 'living-room', subcategory: 'chairs', variants: ['Beige', 'Grey', 'Green'], isSelected: false, isPopular: true},
            {id: 'ottoman-storage-001', name: 'Storage Ottoman', image: 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=300', description: 'Multi-functional storage ottoman with cushioned top', suggestedPrice: 6000, category: 'living-room', subcategory: 'ottomans', variants: ['Brown', 'Black', 'Grey'], isSelected: false, isPopular: true},
            {id: 'side-table-set-001', name: 'Nesting Side Tables Set', image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300', description: 'Set of 2 nesting side tables for living room', suggestedPrice: 7500, category: 'living-room', subcategory: 'side-tables', variants: ['Wood', 'Metal', 'Glass'], isSelected: false, isPopular: true}
        ],
        'bedroom': [
            {id: 'bed-king-size-001', name: 'King Size Wooden Bed', image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=300', description: 'Solid wood king size bed with headboard storage', suggestedPrice: 28000, category: 'bedroom', subcategory: 'beds', variants: ['Teak', 'Sheesham', 'Engineered Wood'], isSelected: false, isPopular: true},
            {id: 'wardrobe-3door-001', name: '3-Door Wooden Wardrobe', image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300', description: 'Spacious 3-door wardrobe with mirror and drawers', suggestedPrice: 35000, category: 'bedroom', subcategory: 'wardrobes', variants: ['Brown', 'White', 'Walnut'], isSelected: false, isPopular: true},
            {id: 'mattress-memory-foam-001', name: 'Memory Foam Mattress', image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=300', description: 'Orthopedic memory foam mattress for better sleep', suggestedPrice: 15000, category: 'bedroom', subcategory: 'mattresses', variants: ['Single', 'Double', 'King'], isSelected: false, isPopular: true},
            {id: 'dressing-table-001', name: 'Dressing Table with Mirror', image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300', description: 'Elegant dressing table with LED mirror and drawers', suggestedPrice: 18000, category: 'bedroom', subcategory: 'dressing-tables', variants: ['White', 'Brown', 'Black'], isSelected: false, isPopular: true},
            {id: 'bedside-table-pair-001', name: 'Bedside Tables (Pair)', image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300', description: 'Set of 2 matching bedside tables with drawers', suggestedPrice: 8000, category: 'bedroom', subcategory: 'bedside-tables', variants: ['Wood', 'White', 'Grey'], isSelected: false, isPopular: true},
            {id: 'study-table-001', name: 'Study Table with Storage', image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300', description: 'Compact study table with built-in storage compartments', suggestedPrice: 12000, category: 'bedroom', subcategory: 'study-tables', variants: ['Wood', 'White', 'Black'], isSelected: false, isPopular: true},
            {id: 'chest-drawers-001', name: '5-Drawer Chest', image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300', description: 'Tall chest of drawers for bedroom storage', suggestedPrice: 15000, category: 'bedroom', subcategory: 'storage', variants: ['Natural', 'White', 'Walnut'], isSelected: false, isPopular: true},
            {id: 'bedroom-chair-001', name: 'Bedroom Accent Chair', image: 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=300', description: 'Comfortable reading chair for bedroom', suggestedPrice: 8500, category: 'bedroom', subcategory: 'chairs', variants: ['Beige', 'Pink', 'Grey'], isSelected: false, isPopular: false},
            {id: 'full-length-mirror-001', name: 'Full Length Standing Mirror', image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300', description: 'Elegant full-length mirror with wooden frame', suggestedPrice: 4500, category: 'bedroom', subcategory: 'mirrors', variants: ['Natural', 'White', 'Black'], isSelected: false, isPopular: true},
            {id: 'storage-bench-001', name: 'Bedroom Storage Bench', image: 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=300', description: 'Upholstered storage bench for foot of bed', suggestedPrice: 6500, category: 'bedroom', subcategory: 'benches', variants: ['Grey', 'Brown', 'Navy'], isSelected: false, isPopular: true}
        ],
        'home-decor': [
            {id: 'wall-art-canvas-001', name: 'Abstract Canvas Wall Art', image: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=300', description: 'Modern abstract canvas painting for living room', suggestedPrice: 3500, category: 'home-decor', subcategory: 'wall-art', variants: ['Small', 'Medium', 'Large'], isSelected: false, isPopular: true},
            {id: 'curtains-blackout-001', name: 'Blackout Curtains', image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300', description: 'Premium blackout curtains for bedroom and living room', suggestedPrice: 2500, category: 'home-decor', subcategory: 'curtains', variants: ['Grey', 'Brown', 'Navy', 'Beige'], isSelected: false, isPopular: true},
            {id: 'table-lamp-modern-001', name: 'Modern Table Lamp', image: 'https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=300', description: 'Contemporary table lamp with fabric shade', suggestedPrice: 1800, category: 'home-decor', subcategory: 'lighting', variants: ['White', 'Black', 'Grey'], isSelected: false, isPopular: true},
            {id: 'indoor-plants-set-001', name: 'Indoor Plants Combo', image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=300', description: 'Set of 3 low-maintenance indoor plants with pots', suggestedPrice: 1200, category: 'home-decor', subcategory: 'plants', variants: ['Small Plants', 'Medium Plants', 'Large Plants'], isSelected: false, isPopular: true},
            {id: 'decorative-mirror-001', name: 'Decorative Round Mirror', image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300', description: 'Elegant round mirror with decorative frame', suggestedPrice: 2800, category: 'home-decor', subcategory: 'mirrors', variants: ['Gold', 'Silver', 'Bronze'], isSelected: false, isPopular: true},
            {id: 'area-rug-persian-001', name: 'Persian Style Area Rug', image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300', description: 'Traditional Persian design area rug', suggestedPrice: 4500, category: 'home-decor', subcategory: 'rugs', variants: ['5x7 ft', '6x9 ft', '8x10 ft'], isSelected: false, isPopular: true},
            {id: 'wall-shelves-floating-001', name: 'Floating Wall Shelves Set', image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300', description: 'Set of 3 floating shelves for wall decoration', suggestedPrice: 1500, category: 'home-decor', subcategory: 'wall-shelves', variants: ['White', 'Natural', 'Black'], isSelected: false, isPopular: true},
            {id: 'throw-pillows-set-001', name: 'Decorative Throw Pillows', image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300', description: 'Set of 4 decorative throw pillows for sofa', suggestedPrice: 1800, category: 'home-decor', subcategory: 'cushions', variants: ['Geometric', 'Floral', 'Abstract'], isSelected: false, isPopular: true},
            {id: 'ceiling-fan-decorative-001', name: 'Decorative Ceiling Fan', image: 'https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=300', description: 'Designer ceiling fan with LED lights', suggestedPrice: 6500, category: 'home-decor', subcategory: 'ceiling-fans', variants: ['Bronze', 'White', 'Black'], isSelected: false, isPopular: true},
            {id: 'photo-frames-set-001', name: 'Picture Frame Collection', image: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=300', description: 'Set of 6 different sized picture frames', suggestedPrice: 1200, category: 'home-decor', subcategory: 'photo-frames', variants: ['Black', 'White', 'Natural Wood'], isSelected: false, isPopular: true},
            {id: 'candles-aromatherapy-001', name: 'Aromatherapy Candle Set', image: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=300', description: 'Set of 3 scented candles for relaxation', suggestedPrice: 800, category: 'home-decor', subcategory: 'candles', variants: ['Lavender', 'Vanilla', 'Sandalwood'], isSelected: false, isPopular: true},
            {id: 'wall-clock-designer-001', name: 'Designer Wall Clock', image: 'https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=300', description: 'Modern designer wall clock for living room', suggestedPrice: 2200, category: 'home-decor', subcategory: 'clocks', variants: ['Silver', 'Gold', 'Black'], isSelected: false, isPopular: true},
            {id: 'vase-ceramic-001', name: 'Ceramic Decorative Vase', image: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=300', description: 'Handcrafted ceramic vase for flowers', suggestedPrice: 1500, category: 'home-decor', subcategory: 'vases', variants: ['White', 'Blue', 'Green'], isSelected: false, isPopular: true},
            {id: 'room-divider-screen-001', name: '3-Panel Room Divider', image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300', description: 'Foldable room divider screen for privacy', suggestedPrice: 5500, category: 'home-decor', subcategory: 'room-dividers', variants: ['Natural', 'Black', 'White'], isSelected: false, isPopular: false},
            {id: 'floor-lamp-modern-001', name: 'Modern Floor Lamp', image: 'https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=300', description: 'Contemporary floor lamp with adjustable height', suggestedPrice: 4200, category: 'home-decor', subcategory: 'lighting', variants: ['Black', 'White', 'Brass'], isSelected: false, isPopular: true}
        ]
    },

    electronics: {
        'mobile-devices': [
            {id: 'smartphone-android-001', name: 'Android Smartphone', image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300', description: 'Latest Android smartphone with dual camera', suggestedPrice: 15999, category: 'mobile-devices', subcategory: 'smartphones', variants: ['64GB', '128GB', '256GB'], isSelected: false, isPopular: true},
            {id: 'earphones-wireless-001', name: 'Wireless Earphones', image: 'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=300', description: 'Bluetooth wireless earphones with charging case', suggestedPrice: 2999, category: 'mobile-devices', subcategory: 'headphones', variants: ['Black', 'White', 'Blue'], isSelected: false, isPopular: true},
            {id: 'power-bank-001', name: '10000mAh Power Bank', image: 'https://images.unsplash.com/photo-1609592707680-9d9b9f1e7bf9?w=300', description: 'Fast charging power bank with dual USB ports', suggestedPrice: 1299, category: 'mobile-devices', subcategory: 'accessories', variants: ['10000mAh', '20000mAh'], isSelected: false, isPopular: true},
            {id: 'phone-case-001', name: 'Protective Phone Case', image: 'https://images.unsplash.com/photo-1601593346740-925612772716?w=300', description: 'Durable protective case for smartphones', suggestedPrice: 399, category: 'mobile-devices', subcategory: 'cases', variants: ['Clear', 'Black', 'Blue'], isSelected: false, isPopular: true},
            {id: 'screen-protector-001', name: 'Tempered Glass Screen Protector', image: 'https://images.unsplash.com/photo-1601593346740-925612772716?w=300', description: 'Premium tempered glass protection', suggestedPrice: 299, category: 'mobile-devices', subcategory: 'accessories', variants: ['Single', 'Pack of 2'], isSelected: false, isPopular: true},
            {id: 'smartphone-premium-001', name: 'Premium Flagship Smartphone', image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300', description: 'High-end smartphone with professional camera system', suggestedPrice: 45999, category: 'mobile-devices', subcategory: 'smartphones', variants: ['128GB', '256GB', '512GB'], isSelected: false, isPopular: true},
            {id: 'tablet-android-001', name: '10-inch Android Tablet', image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300', description: 'Large screen tablet for entertainment and work', suggestedPrice: 18999, category: 'mobile-devices', subcategory: 'tablets', variants: ['32GB', '64GB', '128GB'], isSelected: false, isPopular: true},
            {id: 'car-charger-001', name: 'Fast Car Charger', image: 'https://images.unsplash.com/photo-1609592707680-9d9b9f1e7bf9?w=300', description: 'Dual port fast charging car charger', suggestedPrice: 799, category: 'mobile-devices', subcategory: 'chargers', variants: ['Single Port', 'Dual Port'], isSelected: false, isPopular: true},
            {id: 'bluetooth-speaker-001', name: 'Portable Bluetooth Speaker', image: 'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=300', description: 'Wireless speaker with rich bass and long battery', suggestedPrice: 3999, category: 'mobile-devices', subcategory: 'speakers', variants: ['Small', 'Medium', 'Large'], isSelected: false, isPopular: true},
            {id: 'phone-stand-001', name: 'Adjustable Phone Stand', image: 'https://images.unsplash.com/photo-1601593346740-925612772716?w=300', description: 'Desktop phone stand for video calls and viewing', suggestedPrice: 599, category: 'mobile-devices', subcategory: 'accessories', variants: ['Plastic', 'Metal', 'Wood'], isSelected: false, isPopular: true}
        ],
        'computers': [
            {id: 'laptop-business-001', name: 'Business Laptop', image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=300', description: 'Professional laptop for business use', suggestedPrice: 45000, category: 'computers', subcategory: 'laptops', variants: ['i3/4GB', 'i5/8GB', 'i7/16GB'], isSelected: false, isPopular: true},
            {id: 'keyboard-wireless-001', name: 'Wireless Keyboard', image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=300', description: 'Ergonomic wireless keyboard', suggestedPrice: 1800, category: 'computers', subcategory: 'keyboards', variants: ['Black', 'White'], isSelected: false, isPopular: false},
            {id: 'mouse-wireless-001', name: 'Wireless Mouse', image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=300', description: 'Ergonomic wireless mouse with precision tracking', suggestedPrice: 899, category: 'computers', subcategory: 'mice', variants: ['Black', 'Silver'], isSelected: false, isPopular: true},
            {id: 'monitor-led-001', name: 'LED Monitor', image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=300', description: 'Full HD LED monitor for desktop', suggestedPrice: 12000, category: 'computers', subcategory: 'monitors', variants: ['21 inch', '24 inch', '27 inch'], isSelected: false, isPopular: true},
            {id: 'desktop-computer-001', name: 'Desktop Computer Set', image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=300', description: 'Complete desktop computer with monitor and peripherals', suggestedPrice: 35000, category: 'computers', subcategory: 'desktops', variants: ['Basic', 'Gaming', 'Professional'], isSelected: false, isPopular: true},
            {id: 'webcam-hd-001', name: 'HD Webcam', image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=300', description: 'High definition webcam for video calls', suggestedPrice: 2500, category: 'computers', subcategory: 'accessories', variants: ['720p', '1080p', '4K'], isSelected: false, isPopular: true},
            {id: 'external-hdd-001', name: 'External Hard Drive', image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=300', description: 'Portable external hard drive for data storage', suggestedPrice: 4500, category: 'computers', subcategory: 'storage', variants: ['500GB', '1TB', '2TB'], isSelected: false, isPopular: true},
            {id: 'printer-inkjet-001', name: 'All-in-One Inkjet Printer', image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=300', description: 'Multifunction printer with scan and copy features', suggestedPrice: 8500, category: 'computers', subcategory: 'printers', variants: ['Basic', 'WiFi Enabled', 'Photo Quality'], isSelected: false, isPopular: true},
            {id: 'ups-battery-001', name: 'UPS Battery Backup', image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=300', description: 'Uninterruptible power supply for computer protection', suggestedPrice: 3200, category: 'computers', subcategory: 'accessories', variants: ['600VA', '1000VA', '1500VA'], isSelected: false, isPopular: true},
            {id: 'gaming-headset-001', name: 'Gaming Headset', image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=300', description: 'Professional gaming headset with surround sound', suggestedPrice: 3500, category: 'computers', subcategory: 'accessories', variants: ['Wired', 'Wireless', 'RGB'], isSelected: false, isPopular: true}
        ],
        'home-appliances': [
            {id: 'fan-ceiling-001', name: 'Ceiling Fan', image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=300', description: 'Energy efficient ceiling fan with remote', suggestedPrice: 3500, category: 'home-appliances', subcategory: 'fans', variants: ['48 inch', '52 inch'], isSelected: false, isPopular: true},
            {id: 'iron-steam-001', name: 'Steam Iron', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300', description: 'Automatic steam iron with ceramic coating', suggestedPrice: 1800, category: 'home-appliances', subcategory: 'irons', variants: ['1200W', '1500W'], isSelected: false, isPopular: true},
            {id: 'mixer-grinder-001', name: 'Mixer Grinder', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300', description: '3-jar mixer grinder for kitchen', suggestedPrice: 3200, category: 'home-appliances', subcategory: 'kitchen', variants: ['500W', '750W'], isSelected: false, isPopular: true},
            {id: 'microwave-oven-001', name: 'Microwave Oven', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300', description: 'Compact microwave oven for quick cooking', suggestedPrice: 8500, category: 'home-appliances', subcategory: 'kitchen', variants: ['20L', '25L', '30L'], isSelected: false, isPopular: true},
            {id: 'refrigerator-single-001', name: 'Single Door Refrigerator', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300', description: 'Energy efficient single door refrigerator', suggestedPrice: 15000, category: 'home-appliances', subcategory: 'refrigerators', variants: ['165L', '190L', '215L'], isSelected: false, isPopular: true},
            {id: 'washing-machine-001', name: 'Top Load Washing Machine', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300', description: 'Fully automatic top loading washing machine', suggestedPrice: 18000, category: 'home-appliances', subcategory: 'washing-machines', variants: ['6kg', '7kg', '8kg'], isSelected: false, isPopular: true},
            {id: 'air-conditioner-001', name: 'Split Air Conditioner', image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=300', description: 'Energy efficient split AC with copper coil', suggestedPrice: 28000, category: 'home-appliances', subcategory: 'air-conditioners', variants: ['1 Ton', '1.5 Ton', '2 Ton'], isSelected: false, isPopular: true},
            {id: 'water-heater-001', name: 'Electric Water Heater', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300', description: 'Instant electric water heater for bathroom', suggestedPrice: 6500, category: 'home-appliances', subcategory: 'heaters', variants: ['10L', '15L', '25L'], isSelected: false, isPopular: true},
            {id: 'vacuum-cleaner-001', name: 'Vacuum Cleaner', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300', description: 'Multi-purpose vacuum cleaner for home cleaning', suggestedPrice: 4500, category: 'home-appliances', subcategory: 'cleaning', variants: ['Dry', 'Wet & Dry', 'Handheld'], isSelected: false, isPopular: true},
            {id: 'toaster-oven-001', name: 'Electric Toaster', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300', description: 'Automatic pop-up toaster for breakfast', suggestedPrice: 1200, category: 'home-appliances', subcategory: 'kitchen', variants: ['2 Slice', '4 Slice'], isSelected: false, isPopular: true}
        ]
    },

    jewellery: {
        'gold-jewelry': [
            {id: 'gold-necklace-001', name: 'Traditional Gold Necklace', image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=300', description: '22K gold traditional necklace with intricate design', suggestedPrice: 85000, category: 'gold-jewelry', subcategory: 'necklaces', variants: ['Light Weight', 'Medium Weight', 'Heavy Weight'], isSelected: false, isPopular: true},
            {id: 'gold-earrings-001', name: 'Gold Drop Earrings', image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=300', description: 'Elegant 22K gold drop earrings with traditional motifs', suggestedPrice: 25000, category: 'gold-jewelry', subcategory: 'earrings', variants: ['Small', 'Medium', 'Large'], isSelected: false, isPopular: true},
            {id: 'gold-bangles-001', name: 'Gold Bangles Set', image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=300', description: 'Set of 2 traditional gold bangles with carved patterns', suggestedPrice: 45000, category: 'gold-jewelry', subcategory: 'bangles', variants: ['Thin', 'Medium', 'Thick'], isSelected: false, isPopular: true},
            {id: 'gold-ring-001', name: 'Gold Wedding Ring', image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=300', description: 'Classic 22K gold wedding ring with smooth finish', suggestedPrice: 18000, category: 'gold-jewelry', subcategory: 'rings', variants: ['Size 14', 'Size 16', 'Size 18'], isSelected: false, isPopular: true},
            {id: 'gold-chain-001', name: 'Gold Chain', image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=300', description: '22K gold chain with secure clasp for daily wear', suggestedPrice: 32000, category: 'gold-jewelry', subcategory: 'chains', variants: ['18 inch', '20 inch', '22 inch'], isSelected: false, isPopular: true},
            {id: 'gold-pendant-001', name: 'Gold Pendant with Chain', image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=300', description: 'Beautiful gold pendant with matching chain', suggestedPrice: 28000, category: 'gold-jewelry', subcategory: 'pendants', variants: ['Religious', 'Abstract', 'Traditional'], isSelected: false, isPopular: true},
            {id: 'gold-bracelet-001', name: 'Gold Bracelet', image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=300', description: 'Delicate gold bracelet with charm details', suggestedPrice: 22000, category: 'gold-jewelry', subcategory: 'bracelets', variants: ['Thin', 'Medium', 'Chunky'], isSelected: false, isPopular: false},
            {id: 'gold-anklet-001', name: 'Gold Anklet', image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=300', description: 'Traditional gold anklet with small bells', suggestedPrice: 15000, category: 'gold-jewelry', subcategory: 'anklets', variants: ['Single', 'Pair'], isSelected: false, isPopular: false}
        ],
        'silver-jewelry': [
            {id: 'silver-rings-001', name: 'Sterling Silver Ring', image: 'https://images.unsplash.com/photo-1603561596112-13fa2783370f?w=300', description: '925 sterling silver ring with oxidized finish', suggestedPrice: 1200, category: 'silver-jewelry', subcategory: 'rings', variants: ['Size 14', 'Size 16', 'Size 18'], isSelected: false, isPopular: true},
            {id: 'silver-bracelets-001', name: 'Silver Charm Bracelet', image: 'https://images.unsplash.com/photo-1603561596112-13fa2783370f?w=300', description: 'Elegant silver bracelet with traditional charms', suggestedPrice: 2500, category: 'silver-jewelry', subcategory: 'bracelets', variants: ['Simple', 'Charm', 'Beaded'], isSelected: false, isPopular: true},
            {id: 'silver-anklets-001', name: 'Silver Anklet Pair', image: 'https://images.unsplash.com/photo-1603561596112-13fa2783370f?w=300', description: 'Pair of traditional silver anklets with ghungroo', suggestedPrice: 1800, category: 'silver-jewelry', subcategory: 'anklets', variants: ['Plain', 'With Bells', 'Stone Studded'], isSelected: false, isPopular: true},
            {id: 'silver-nose-pin-001', name: 'Silver Nose Pin', image: 'https://images.unsplash.com/photo-1603561596112-13fa2783370f?w=300', description: 'Delicate silver nose pin with small stone', suggestedPrice: 600, category: 'silver-jewelry', subcategory: 'nose-pins', variants: ['Plain', 'Stone', 'Pearl'], isSelected: false, isPopular: true},
            {id: 'silver-toe-rings-001', name: 'Silver Toe Rings Set', image: 'https://images.unsplash.com/photo-1603561596112-13fa2783370f?w=300', description: 'Set of 6 adjustable silver toe rings', suggestedPrice: 800, category: 'silver-jewelry', subcategory: 'toe-rings', variants: ['Plain', 'Textured', 'Stone Studded'], isSelected: false, isPopular: false},
            {id: 'silver-earrings-001', name: 'Silver Jhumka Earrings', image: 'https://images.unsplash.com/photo-1603561596112-13fa2783370f?w=300', description: 'Traditional silver jhumka earrings with oxidized finish', suggestedPrice: 1500, category: 'silver-jewelry', subcategory: 'earrings', variants: ['Small', 'Medium', 'Large'], isSelected: false, isPopular: true},
            {id: 'silver-necklace-001', name: 'Silver Chain Necklace', image: 'https://images.unsplash.com/photo-1603561596112-13fa2783370f?w=300', description: 'Simple silver chain necklace for daily wear', suggestedPrice: 2200, category: 'silver-jewelry', subcategory: 'necklaces', variants: ['16 inch', '18 inch', '20 inch'], isSelected: false, isPopular: true}
        ],
        'fashion-jewelry': [
            {id: 'artificial-jewelry-set-001', name: 'Artificial Jewelry Set', image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=300', description: 'Complete jewelry set with necklace, earrings and bangles', suggestedPrice: 800, category: 'fashion-jewelry', subcategory: 'artificial-jewelry', variants: ['Gold Plated', 'Silver Plated', 'Rose Gold'], isSelected: false, isPopular: true},
            {id: 'costume-earrings-001', name: 'Fashion Earrings', image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=300', description: 'Trendy costume earrings with colorful stones', suggestedPrice: 300, category: 'fashion-jewelry', subcategory: 'costume-jewelry', variants: ['Studs', 'Hoops', 'Danglers'], isSelected: false, isPopular: true},
            {id: 'beaded-necklace-001', name: 'Beaded Statement Necklace', image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=300', description: 'Colorful beaded necklace for casual wear', suggestedPrice: 600, category: 'fashion-jewelry', subcategory: 'beaded-jewelry', variants: ['Colorful', 'Monochrome', 'Pearl'], isSelected: false, isPopular: true},
            {id: 'oxidized-jewelry-001', name: 'Oxidized Silver Jewelry Set', image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=300', description: 'Traditional oxidized jewelry set with ethnic design', suggestedPrice: 1200, category: 'fashion-jewelry', subcategory: 'oxidized-jewelry', variants: ['Tribal', 'Traditional', 'Modern'], isSelected: false, isPopular: true},
            {id: 'bracelet-stack-001', name: 'Bracelet Stack Set', image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=300', description: 'Set of 5 stackable bracelets in different styles', suggestedPrice: 500, category: 'fashion-jewelry', subcategory: 'bracelets', variants: ['Boho', 'Minimalist', 'Colorful'], isSelected: false, isPopular: true},
            {id: 'statement-ring-001', name: 'Statement Cocktail Ring', image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=300', description: 'Bold statement ring with large center stone', suggestedPrice: 400, category: 'fashion-jewelry', subcategory: 'rings', variants: ['Red', 'Blue', 'Green'], isSelected: false, isPopular: false},
            {id: 'hair-accessories-001', name: 'Hair Jewelry Accessories', image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=300', description: 'Decorative hair accessories with pearls and stones', suggestedPrice: 350, category: 'fashion-jewelry', subcategory: 'hair-accessories', variants: ['Pins', 'Bands', 'Clips'], isSelected: false, isPopular: true},
            {id: 'layered-necklace-001', name: 'Layered Chain Necklace', image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=300', description: 'Multi-layer chain necklace for trendy look', suggestedPrice: 650, category: 'fashion-jewelry', subcategory: 'necklaces', variants: ['Gold', 'Silver', 'Mixed'], isSelected: false, isPopular: true},
            {id: 'charm-bracelet-001', name: 'Charm Bracelet', image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=300', description: 'Adjustable charm bracelet with assorted charms', suggestedPrice: 450, category: 'fashion-jewelry', subcategory: 'bracelets', variants: ['Hearts', 'Stars', 'Animals'], isSelected: false, isPopular: true}
        ]
    },

    restaurants: {
        'fine-dining': [
            {id: 'pasta-italian-001', name: 'Italian Pasta Primavera', image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=300', description: 'Fresh pasta with seasonal vegetables', suggestedPrice: 450, category: 'fine-dining', subcategory: 'italian', variants: ['Regular', 'Large'], isSelected: false, isPopular: true},
            {id: 'chicken-continental-001', name: 'Grilled Chicken Continental', image: 'https://images.unsplash.com/photo-1532636618209-8da5c4bf2c5a?w=300', description: 'Herb-grilled chicken with vegetables', suggestedPrice: 680, category: 'fine-dining', subcategory: 'continental', variants: ['Half', 'Full'], isSelected: false, isPopular: true},
            {id: 'fish-curry-001', name: 'Goan Fish Curry', image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=300', description: 'Authentic Goan fish curry with coconut', suggestedPrice: 550, category: 'fine-dining', subcategory: 'indian', variants: ['Regular', 'Large'], isSelected: false, isPopular: true},
            {id: 'steak-beef-001', name: 'Beef Tenderloin Steak', image: 'https://images.unsplash.com/photo-1532636618209-8da5c4bf2c5a?w=300', description: 'Premium beef steak with garlic butter sauce', suggestedPrice: 1200, category: 'fine-dining', subcategory: 'continental', variants: ['Medium Rare', 'Medium', 'Well Done'], isSelected: false, isPopular: true},
            {id: 'risotto-mushroom-001', name: 'Wild Mushroom Risotto', image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=300', description: 'Creamy arborio rice with wild mushrooms', suggestedPrice: 580, category: 'fine-dining', subcategory: 'italian', variants: ['Vegetarian', 'With Chicken'], isSelected: false, isPopular: false},
            {id: 'lobster-thermidor-001', name: 'Lobster Thermidor', image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=300', description: 'Classic French lobster dish with cheese sauce', suggestedPrice: 1800, category: 'fine-dining', subcategory: 'french', variants: ['Half Lobster', 'Full Lobster'], isSelected: false, isPopular: false},
            {id: 'duck-confit-001', name: 'Duck Confit', image: 'https://images.unsplash.com/photo-1532636618209-8da5c4bf2c5a?w=300', description: 'Slow-cooked duck leg with orange glaze', suggestedPrice: 950, category: 'fine-dining', subcategory: 'french', variants: ['Single Leg', 'Double Leg'], isSelected: false, isPopular: false},
            {id: 'tasting-menu-001', name: 'Chef\'s Tasting Menu', image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=300', description: '7-course tasting menu with wine pairing', suggestedPrice: 2500, category: 'fine-dining', subcategory: 'multi-cuisine', variants: ['Vegetarian', 'Non-Vegetarian', 'Seafood'], isSelected: false, isPopular: true}
        ],
        'casual-dining': [
            {id: 'pizza-margherita-001', name: 'Margherita Pizza', image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=300', description: 'Classic margherita with fresh basil', suggestedPrice: 320, category: 'casual-dining', subcategory: 'pizza', variants: ['Small', 'Medium', 'Large'], isSelected: false, isPopular: true},
            {id: 'burger-chicken-001', name: 'Chicken Burger', image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300', description: 'Juicy chicken burger with fries', suggestedPrice: 280, category: 'casual-dining', subcategory: 'burgers', variants: ['Regular', 'Large', 'Combo'], isSelected: false, isPopular: true},
            {id: 'sandwich-club-001', name: 'Club Sandwich', image: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?w=300', description: 'Triple layer club sandwich with fries', suggestedPrice: 220, category: 'casual-dining', subcategory: 'sandwiches', variants: ['Veg', 'Chicken', 'Turkey'], isSelected: false, isPopular: true},
            {id: 'pasta-carbonara-001', name: 'Chicken Carbonara', image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=300', description: 'Creamy pasta with chicken and bacon', suggestedPrice: 380, category: 'casual-dining', subcategory: 'pasta', variants: ['Regular', 'Large'], isSelected: false, isPopular: true},
            {id: 'quesadilla-001', name: 'Chicken Quesadilla', image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300', description: 'Grilled tortilla with chicken and cheese', suggestedPrice: 320, category: 'casual-dining', subcategory: 'mexican', variants: ['Chicken', 'Beef', 'Vegetarian'], isSelected: false, isPopular: true},
            {id: 'fish-chips-001', name: 'Fish and Chips', image: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?w=300', description: 'Beer-battered fish with crispy fries', suggestedPrice: 420, category: 'casual-dining', subcategory: 'british', variants: ['Regular', 'Large'], isSelected: false, isPopular: true},
            {id: 'wrap-chicken-001', name: 'Grilled Chicken Wrap', image: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?w=300', description: 'Healthy chicken wrap with fresh vegetables', suggestedPrice: 250, category: 'casual-dining', subcategory: 'wraps', variants: ['Grilled', 'Crispy', 'Spicy'], isSelected: false, isPopular: true},
            {id: 'nachos-loaded-001', name: 'Loaded Nachos', image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300', description: 'Crispy nachos with cheese, jalapenos and salsa', suggestedPrice: 300, category: 'casual-dining', subcategory: 'mexican', variants: ['Regular', 'Large', 'Extra Loaded'], isSelected: false, isPopular: true},
            {id: 'stir-fry-noodles-001', name: 'Chicken Stir Fry Noodles', image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=300', description: 'Asian style stir-fried noodles with vegetables', suggestedPrice: 280, category: 'casual-dining', subcategory: 'asian', variants: ['Chicken', 'Beef', 'Vegetarian'], isSelected: false, isPopular: true}
        ],
        'cafes': [
            {id: 'cappuccino-001', name: 'Cappuccino', image: 'https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=300', description: 'Rich cappuccino with perfect foam art', suggestedPrice: 120, category: 'cafes', subcategory: 'coffee', variants: ['Regular', 'Large', 'Decaf'], isSelected: false, isPopular: true},
            {id: 'croissant-001', name: 'Butter Croissant', image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=300', description: 'Flaky butter croissant, freshly baked', suggestedPrice: 80, category: 'cafes', subcategory: 'pastries', variants: ['Plain', 'Chocolate', 'Almond'], isSelected: false, isPopular: true},
            {id: 'cheesecake-001', name: 'New York Cheesecake', image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=300', description: 'Classic New York style cheesecake', suggestedPrice: 180, category: 'cafes', subcategory: 'desserts', variants: ['Plain', 'Berry', 'Chocolate'], isSelected: false, isPopular: true},
            {id: 'latte-001', name: 'Caffe Latte', image: 'https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=300', description: 'Smooth espresso with steamed milk', suggestedPrice: 140, category: 'cafes', subcategory: 'coffee', variants: ['Regular', 'Large', 'Iced'], isSelected: false, isPopular: true},
            {id: 'muffin-blueberry-001', name: 'Blueberry Muffin', image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=300', description: 'Fresh baked blueberry muffin', suggestedPrice: 90, category: 'cafes', subcategory: 'pastries', variants: ['Blueberry', 'Chocolate Chip', 'Vanilla'], isSelected: false, isPopular: true},
            {id: 'smoothie-mango-001', name: 'Mango Smoothie', image: 'https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=300', description: 'Fresh mango smoothie with yogurt', suggestedPrice: 160, category: 'cafes', subcategory: 'smoothies', variants: ['Mango', 'Berry', 'Green'], isSelected: false, isPopular: true},
            {id: 'panini-grilled-001', name: 'Grilled Panini', image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=300', description: 'Grilled panini with cheese and vegetables', suggestedPrice: 200, category: 'cafes', subcategory: 'sandwiches', variants: ['Vegetarian', 'Chicken', 'Ham'], isSelected: false, isPopular: true},
            {id: 'hot-chocolate-001', name: 'Hot Chocolate', image: 'https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=300', description: 'Rich hot chocolate with whipped cream', suggestedPrice: 100, category: 'cafes', subcategory: 'beverages', variants: ['Classic', 'Dark', 'White'], isSelected: false, isPopular: true},
            {id: 'bagel-cream-cheese-001', name: 'Bagel with Cream Cheese', image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=300', description: 'Fresh bagel with cream cheese spread', suggestedPrice: 120, category: 'cafes', subcategory: 'breakfast', variants: ['Plain', 'Everything', 'Sesame'], isSelected: false, isPopular: true},
            {id: 'iced-tea-001', name: 'Iced Tea', image: 'https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=300', description: 'Refreshing iced tea with lemon', suggestedPrice: 80, category: 'cafes', subcategory: 'beverages', variants: ['Lemon', 'Peach', 'Green Tea'], isSelected: false, isPopular: true}
        ]
    },

    fitness: {
        'gym-fitness': [
            {id: 'gym-membership-001', name: 'Monthly Gym Membership', image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=300', description: 'Full access gym membership with trainer', suggestedPrice: 2000, category: 'gym-fitness', subcategory: 'weight-training', variants: ['Basic', 'Premium', 'VIP'], isSelected: false, isPopular: true},
            {id: 'personal-training-001', name: 'Personal Training Session', image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300', description: 'One-on-one personal training session', suggestedPrice: 800, category: 'gym-fitness', subcategory: 'personal-training', variants: ['45 min', '60 min'], isSelected: false, isPopular: true},
            {id: 'protein-powder-001', name: 'Whey Protein Powder', image: 'https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=300', description: 'High quality whey protein for muscle building', suggestedPrice: 2500, category: 'gym-fitness', subcategory: 'supplements', variants: ['1kg', '2kg', '5kg'], isSelected: false, isPopular: true},
            {id: 'gym-equipment-001', name: 'Home Gym Equipment', image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=300', description: 'Basic home gym equipment set', suggestedPrice: 8000, category: 'gym-fitness', subcategory: 'equipment', variants: ['Basic Set', 'Premium Set'], isSelected: false, isPopular: false},
            {id: 'group-fitness-001', name: 'Group Fitness Classes', image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=300', description: 'High-energy group fitness classes', suggestedPrice: 600, category: 'gym-fitness', subcategory: 'group-classes', variants: ['Zumba', 'Aerobics', 'HIIT'], isSelected: false, isPopular: true},
            {id: 'resistance-bands-001', name: 'Resistance Bands Set', image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=300', description: 'Complete set of resistance bands for home workout', suggestedPrice: 1200, category: 'gym-fitness', subcategory: 'equipment', variants: ['Light', 'Medium', 'Heavy'], isSelected: false, isPopular: true},
            {id: 'dumbbells-set-001', name: 'Adjustable Dumbbells', image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=300', description: 'Space-saving adjustable dumbbell set', suggestedPrice: 5500, category: 'gym-fitness', subcategory: 'equipment', variants: ['5-25kg', '10-40kg'], isSelected: false, isPopular: true},
            {id: 'nutrition-consultation-001', name: 'Nutrition Consultation', image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300', description: 'Professional nutrition planning session', suggestedPrice: 1500, category: 'gym-fitness', subcategory: 'consultation', variants: ['Weight Loss', 'Muscle Gain', 'General Health'], isSelected: false, isPopular: true}
        ],
        'yoga-meditation': [
            {id: 'yoga-class-001', name: 'Hatha Yoga Class', image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=300', description: 'Traditional Hatha yoga class for beginners', suggestedPrice: 500, category: 'yoga-meditation', subcategory: 'hatha-yoga', variants: ['Drop-in', 'Monthly', 'Quarterly'], isSelected: false, isPopular: true},
            {id: 'meditation-session-001', name: 'Guided Meditation', image: 'https://images.unsplash.com/photo-1593811167562-9cef47bfc4a7?w=300', description: 'Guided meditation for stress relief', suggestedPrice: 300, category: 'yoga-meditation', subcategory: 'meditation', variants: ['30 min', '45 min', '60 min'], isSelected: false, isPopular: false},
            {id: 'yoga-mat-001', name: 'Premium Yoga Mat', image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=300', description: 'Non-slip yoga mat with carrying strap', suggestedPrice: 1200, category: 'yoga-meditation', subcategory: 'equipment', variants: ['6mm', '8mm', '10mm'], isSelected: false, isPopular: true},
            {id: 'vinyasa-yoga-001', name: 'Vinyasa Flow Class', image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=300', description: 'Dynamic vinyasa flow yoga class', suggestedPrice: 600, category: 'yoga-meditation', subcategory: 'vinyasa', variants: ['Beginner', 'Intermediate', 'Advanced'], isSelected: false, isPopular: true},
            {id: 'pranayama-class-001', name: 'Pranayama Session', image: 'https://images.unsplash.com/photo-1593811167562-9cef47bfc4a7?w=300', description: 'Breathing exercises for wellness', suggestedPrice: 400, category: 'yoga-meditation', subcategory: 'pranayama', variants: ['Basic', 'Advanced'], isSelected: false, isPopular: false},
            {id: 'therapeutic-yoga-001', name: 'Therapeutic Yoga', image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=300', description: 'Yoga therapy for specific health conditions', suggestedPrice: 800, category: 'yoga-meditation', subcategory: 'therapeutic-yoga', variants: ['Back Pain', 'Stress', 'Flexibility'], isSelected: false, isPopular: true}
        ],
        'sports': [
            {id: 'badminton-court-001', name: 'Badminton Court Booking', image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=300', description: 'Premium badminton court rental per hour', suggestedPrice: 400, category: 'sports', subcategory: 'badminton', variants: ['1 Hour', '2 Hours', 'Daily'], isSelected: false, isPopular: true},
            {id: 'tennis-lessons-001', name: 'Tennis Coaching', image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=300', description: 'Professional tennis coaching sessions', suggestedPrice: 1000, category: 'sports', subcategory: 'tennis', variants: ['Beginner', 'Intermediate', 'Advanced'], isSelected: false, isPopular: true},
            {id: 'swimming-pool-001', name: 'Swimming Pool Access', image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=300', description: 'Swimming pool access with changing facilities', suggestedPrice: 200, category: 'sports', subcategory: 'swimming', variants: ['Day Pass', 'Monthly', 'Quarterly'], isSelected: false, isPopular: true},
            {id: 'cricket-coaching-001', name: 'Cricket Coaching Classes', image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=300', description: 'Professional cricket coaching for all ages', suggestedPrice: 1500, category: 'sports', subcategory: 'cricket', variants: ['Kids', 'Adults', 'Advanced'], isSelected: false, isPopular: true},
            {id: 'football-turf-001', name: 'Football Turf Booking', image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=300', description: 'Artificial turf football field rental', suggestedPrice: 1200, category: 'sports', subcategory: 'football', variants: ['1 Hour', '2 Hours', 'Tournament'], isSelected: false, isPopular: true},
            {id: 'basketball-court-001', name: 'Basketball Court Access', image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=300', description: 'Indoor basketball court with equipment', suggestedPrice: 300, category: 'sports', subcategory: 'basketball', variants: ['1 Hour', 'Half Day', 'Full Day'], isSelected: false, isPopular: true}
        ]
    },

    education: {
        'academic-coaching': [
            {id: 'math-tutoring-001', name: 'Mathematics Tutoring', image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=300', description: 'One-on-one mathematics coaching for all grades', suggestedPrice: 800, category: 'academic-coaching', subcategory: 'math-tutoring', variants: ['Elementary', 'High School', 'College'], isSelected: false, isPopular: true},
            {id: 'science-coaching-001', name: 'Science Coaching Classes', image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=300', description: 'Comprehensive science coaching for students', suggestedPrice: 1000, category: 'academic-coaching', subcategory: 'science-coaching', variants: ['Physics', 'Chemistry', 'Biology'], isSelected: false, isPopular: true},
            {id: 'english-classes-001', name: 'English Language Classes', image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=300', description: 'English language improvement classes', suggestedPrice: 600, category: 'academic-coaching', subcategory: 'language-classes', variants: ['Beginner', 'Intermediate', 'Advanced'], isSelected: false, isPopular: true},
            {id: 'exam-preparation-001', name: 'Competitive Exam Prep', image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=300', description: 'Preparation classes for competitive exams', suggestedPrice: 2000, category: 'academic-coaching', subcategory: 'exam-prep', variants: ['JEE', 'NEET', 'UPSC'], isSelected: false, isPopular: true},
            {id: 'homework-help-001', name: 'Homework Assistance', image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=300', description: 'Daily homework help and guidance', suggestedPrice: 500, category: 'academic-coaching', subcategory: 'homework-help', variants: ['Daily', 'Weekly', 'Monthly'], isSelected: false, isPopular: true}
        ],
        'skill-development': [
            {id: 'computer-courses-001', name: 'Basic Computer Course', image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=300', description: 'Computer basics and MS Office training', suggestedPrice: 3000, category: 'skill-development', subcategory: 'computer-courses', variants: ['Basic', 'Advanced', 'Professional'], isSelected: false, isPopular: true},
            {id: 'programming-classes-001', name: 'Programming Classes', image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=300', description: 'Learn programming languages from scratch', suggestedPrice: 5000, category: 'skill-development', subcategory: 'programming', variants: ['Python', 'Java', 'Web Development'], isSelected: false, isPopular: true},
            {id: 'digital-marketing-001', name: 'Digital Marketing Course', image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=300', description: 'Complete digital marketing training program', suggestedPrice: 8000, category: 'skill-development', subcategory: 'digital-marketing', variants: ['Basic', 'Advanced', 'Professional'], isSelected: false, isPopular: true},
            {id: 'graphic-design-001', name: 'Graphic Design Course', image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=300', description: 'Learn graphic design with industry tools', suggestedPrice: 6000, category: 'skill-development', subcategory: 'graphic-design', variants: ['Photoshop', 'Illustrator', 'Complete Package'], isSelected: false, isPopular: true},
            {id: 'photography-course-001', name: 'Photography Workshop', image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=300', description: 'Professional photography techniques course', suggestedPrice: 4000, category: 'skill-development', subcategory: 'photography', variants: ['Basic', 'Wedding', 'Portrait'], isSelected: false, isPopular: true}
        ],
        'arts-music': [
            {id: 'music-lessons-001', name: 'Music Lessons', image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=300', description: 'Learn musical instruments with expert teachers', suggestedPrice: 1200, category: 'arts-music', subcategory: 'music-lessons', variants: ['Guitar', 'Piano', 'Violin'], isSelected: false, isPopular: true},
            {id: 'dance-classes-001', name: 'Dance Classes', image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=300', description: 'Learn various dance forms and styles', suggestedPrice: 1000, category: 'arts-music', subcategory: 'dance-classes', variants: ['Classical', 'Hip Hop', 'Bollywood'], isSelected: false, isPopular: true},
            {id: 'art-classes-001', name: 'Art & Drawing Classes', image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=300', description: 'Learn drawing and painting techniques', suggestedPrice: 800, category: 'arts-music', subcategory: 'art-classes', variants: ['Pencil', 'Watercolor', 'Oil Painting'], isSelected: false, isPopular: true},
            {id: 'craft-workshop-001', name: 'Craft Making Workshop', image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=300', description: 'Learn various craft making techniques', suggestedPrice: 600, category: 'arts-music', subcategory: 'crafts', variants: ['Paper Craft', 'Clay Work', 'Jewelry Making'], isSelected: false, isPopular: true},
            {id: 'singing-lessons-001', name: 'Vocal Training Classes', image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=300', description: 'Professional vocal training and singing lessons', suggestedPrice: 1500, category: 'arts-music', subcategory: 'singing', variants: ['Classical', 'Western', 'Bollywood'], isSelected: false, isPopular: true}
        ]
    },

    automotive: {
        'repair-maintenance': [
            {id: 'engine-repair-001', name: 'Engine Repair Service', image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=300', description: 'Complete engine diagnostic and repair service', suggestedPrice: 8000, category: 'repair-maintenance', subcategory: 'engine-repair', variants: ['Basic Service', 'Major Repair', 'Overhaul'], isSelected: false, isPopular: true},
            {id: 'brake-service-001', name: 'Brake System Service', image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=300', description: 'Brake pad replacement and system check', suggestedPrice: 2500, category: 'repair-maintenance', subcategory: 'brake-service', variants: ['Pad Replacement', 'Disc Service', 'Complete System'], isSelected: false, isPopular: true},
            {id: 'oil-change-001', name: 'Engine Oil Change', image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=300', description: 'Premium engine oil change with filter', suggestedPrice: 1200, category: 'repair-maintenance', subcategory: 'oil-change', variants: ['Mineral Oil', 'Semi-Synthetic', 'Fully Synthetic'], isSelected: false, isPopular: true},
            {id: 'tire-service-001', name: 'Tire Service & Alignment', image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=300', description: 'Tire replacement and wheel alignment service', suggestedPrice: 6000, category: 'repair-maintenance', subcategory: 'tire-service', variants: ['Alignment Only', 'New Tires', 'Complete Service'], isSelected: false, isPopular: true},
            {id: 'battery-replacement-001', name: 'Car Battery Replacement', image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=300', description: 'High quality car battery replacement service', suggestedPrice: 4500, category: 'repair-maintenance', subcategory: 'battery-replacement', variants: ['Basic Battery', 'Premium Battery', 'Maintenance Free'], isSelected: false, isPopular: true},
            {id: 'ac-service-001', name: 'AC Service & Repair', image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=300', description: 'Car air conditioning service and gas refill', suggestedPrice: 2000, category: 'repair-maintenance', subcategory: 'ac-service', variants: ['Gas Refill', 'Complete Service', 'Compressor Repair'], isSelected: false, isPopular: true}
        ],
        'car-accessories': [
            {id: 'seat-covers-001', name: 'Premium Seat Covers', image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=300', description: 'High quality leather seat covers for cars', suggestedPrice: 3500, category: 'car-accessories', subcategory: 'seat-covers', variants: ['Leather', 'Fabric', 'Mesh'], isSelected: false, isPopular: true},
            {id: 'floor-mats-001', name: 'Car Floor Mats Set', image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=300', description: 'Durable rubber floor mats for all weather', suggestedPrice: 1200, category: 'car-accessories', subcategory: 'floor-mats', variants: ['Rubber', 'Carpet', '3D Molded'], isSelected: false, isPopular: true},
            {id: 'audio-system-001', name: 'Car Audio System', image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=300', description: 'Premium car audio system with Bluetooth', suggestedPrice: 8000, category: 'car-accessories', subcategory: 'audio-systems', variants: ['Basic', 'Premium', 'Professional'], isSelected: false, isPopular: true},
            {id: 'gps-navigation-001', name: 'GPS Navigation System', image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=300', description: 'Advanced GPS navigation with voice guidance', suggestedPrice: 5500, category: 'car-accessories', subcategory: 'navigation', variants: ['Basic GPS', 'Touch Screen', 'Android Auto'], isSelected: false, isPopular: true},
            {id: 'car-care-products-001', name: 'Car Care Kit', image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=300', description: 'Complete car cleaning and maintenance kit', suggestedPrice: 1800, category: 'car-accessories', subcategory: 'car-care-products', variants: ['Basic Kit', 'Premium Kit', 'Professional Kit'], isSelected: false, isPopular: true},
            {id: 'dash-cam-001', name: 'Dashboard Camera', image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=300', description: 'HD dashboard camera for safety recording', suggestedPrice: 4000, category: 'car-accessories', subcategory: 'electronics', variants: ['720p', '1080p', '4K'], isSelected: false, isPopular: true},
            {id: 'car-perfume-001', name: 'Car Air Freshener', image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=300', description: 'Long-lasting car air freshener', suggestedPrice: 300, category: 'car-accessories', subcategory: 'car-care-products', variants: ['Citrus', 'Lavender', 'Ocean Breeze'], isSelected: false, isPopular: true}
        ]
    },

    healthcare: {
        'general-medicine': [
            {id: 'general-consultation-001', name: 'General Health Consultation', image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=300', description: 'Comprehensive health check-up with doctor consultation', suggestedPrice: 500, category: 'general-medicine', subcategory: 'consultations', variants: ['Basic', 'Detailed', 'Follow-up'], isSelected: false, isPopular: true},
            {id: 'health-checkup-001', name: 'Master Health Checkup', image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=300', description: 'Complete health screening with lab tests', suggestedPrice: 3000, category: 'general-medicine', subcategory: 'health-checkups', variants: ['Basic', 'Comprehensive', 'Executive'], isSelected: false, isPopular: true},
            {id: 'vaccination-001', name: 'Vaccination Services', image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=300', description: 'Adult and child vaccination services', suggestedPrice: 800, category: 'general-medicine', subcategory: 'vaccinations', variants: ['Flu Shot', 'Hepatitis', 'Travel Vaccines'], isSelected: false, isPopular: true},
            {id: 'prescription-001', name: 'Prescription Consultation', image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=300', description: 'Doctor consultation for prescription renewal', suggestedPrice: 300, category: 'general-medicine', subcategory: 'prescriptions', variants: ['New Prescription', 'Renewal', 'Adjustment'], isSelected: false, isPopular: true},
            {id: 'diagnostic-tests-001', name: 'Diagnostic Blood Tests', image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=300', description: 'Comprehensive blood tests and diagnostic services', suggestedPrice: 1500, category: 'general-medicine', subcategory: 'diagnostics', variants: ['Basic Panel', 'Lipid Profile', 'Diabetes Panel'], isSelected: false, isPopular: true}
        ],
        'specialty-care': [
            {id: 'dental-checkup-001', name: 'Dental Consultation', image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=300', description: 'Complete dental examination and cleaning', suggestedPrice: 800, category: 'specialty-care', subcategory: 'dentistry', variants: ['Consultation', 'Cleaning', 'Treatment'], isSelected: false, isPopular: true},
            {id: 'orthopedic-001', name: 'Orthopedic Consultation', image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=300', description: 'Bone and joint specialist consultation', suggestedPrice: 1000, category: 'specialty-care', subcategory: 'orthopedics', variants: ['Consultation', 'X-Ray', 'Treatment'], isSelected: false, isPopular: true},
            {id: 'cardiology-001', name: 'Cardiac Consultation', image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=300', description: 'Heart specialist consultation with ECG', suggestedPrice: 1200, category: 'specialty-care', subcategory: 'cardiology', variants: ['Consultation', 'ECG', 'Echo'], isSelected: false, isPopular: true},
            {id: 'dermatology-001', name: 'Skin Specialist Consultation', image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=300', description: 'Dermatologist consultation for skin issues', suggestedPrice: 800, category: 'specialty-care', subcategory: 'dermatology', variants: ['Consultation', 'Treatment', 'Cosmetic'], isSelected: false, isPopular: true},
            {id: 'eye-checkup-001', name: 'Eye Examination', image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=300', description: 'Comprehensive eye examination by specialist', suggestedPrice: 600, category: 'specialty-care', subcategory: 'ophthalmology', variants: ['Basic', 'Detailed', 'Surgery Consultation'], isSelected: false, isPopular: true}
        ]
    },

    professional: {
        'legal-services': [
            {id: 'legal-consultation-001', name: 'Legal Consultation', image: 'https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=300', description: 'Professional legal advice and consultation', suggestedPrice: 2000, category: 'legal-services', subcategory: 'legal-consultation', variants: ['Civil', 'Criminal', 'Corporate'], isSelected: false, isPopular: true},
            {id: 'documentation-001', name: 'Legal Documentation', image: 'https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=300', description: 'Preparation of legal documents and agreements', suggestedPrice: 1500, category: 'legal-services', subcategory: 'documentation', variants: ['Agreements', 'Wills', 'Property Papers'], isSelected: false, isPopular: true},
            {id: 'court-representation-001', name: 'Court Representation', image: 'https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=300', description: 'Professional legal representation in court', suggestedPrice: 5000, category: 'legal-services', subcategory: 'court-representation', variants: ['Civil Court', 'Family Court', 'High Court'], isSelected: false, isPopular: false},
            {id: 'contract-drafting-001', name: 'Contract Drafting', image: 'https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=300', description: 'Professional contract drafting and review', suggestedPrice: 3000, category: 'legal-services', subcategory: 'contract-drafting', variants: ['Business', 'Employment', 'Real Estate'], isSelected: false, isPopular: true}
        ],
        'financial-services': [
            {id: 'tax-filing-001', name: 'Income Tax Filing', image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=300', description: 'Professional income tax return filing service', suggestedPrice: 1000, category: 'financial-services', subcategory: 'tax-filing', variants: ['Individual', 'Business', 'Complex Returns'], isSelected: false, isPopular: true},
            {id: 'accounting-001', name: 'Accounting Services', image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=300', description: 'Complete bookkeeping and accounting services', suggestedPrice: 5000, category: 'financial-services', subcategory: 'accounting', variants: ['Monthly', 'Quarterly', 'Annual'], isSelected: false, isPopular: true},
            {id: 'investment-advice-001', name: 'Investment Advisory', image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=300', description: 'Professional investment planning and advice', suggestedPrice: 2500, category: 'financial-services', subcategory: 'investment-advice', variants: ['Mutual Funds', 'Stocks', 'Portfolio Review'], isSelected: false, isPopular: true},
            {id: 'loan-assistance-001', name: 'Loan Processing Assistance', image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=300', description: 'Help with loan applications and processing', suggestedPrice: 3000, category: 'financial-services', subcategory: 'loan-assistance', variants: ['Home Loan', 'Personal Loan', 'Business Loan'], isSelected: false, isPopular: true},
            {id: 'insurance-001', name: 'Insurance Consultation', image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=300', description: 'Insurance planning and policy guidance', suggestedPrice: 800, category: 'financial-services', subcategory: 'insurance', variants: ['Life Insurance', 'Health Insurance', 'Vehicle Insurance'], isSelected: false, isPopular: true}
        ]
    },

    'arts-crafts': {
        'handmade-items': [
            {id: 'pottery-vase-001', name: 'Handmade Ceramic Vase', image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300', description: 'Beautiful handcrafted ceramic vase', suggestedPrice: 1200, category: 'handmade-items', subcategory: 'pottery', variants: ['Small', 'Medium', 'Large'], isSelected: false, isPopular: true},
            {id: 'wooden-sculpture-001', name: 'Wooden Art Sculpture', image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300', description: 'Handcarved wooden decorative sculpture', suggestedPrice: 2500, category: 'handmade-items', subcategory: 'woodwork', variants: ['Abstract', 'Traditional', 'Modern'], isSelected: false, isPopular: false},
            {id: 'textile-wall-hanging-001', name: 'Handwoven Wall Hanging', image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300', description: 'Traditional handwoven textile wall decoration', suggestedPrice: 800, category: 'handmade-items', subcategory: 'textiles', variants: ['Traditional', 'Contemporary', 'Tribal'], isSelected: false, isPopular: true},
            {id: 'canvas-painting-001', name: 'Original Canvas Painting', image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300', description: 'Original artwork on canvas by local artist', suggestedPrice: 3500, category: 'handmade-items', subcategory: 'paintings', variants: ['Abstract', 'Landscape', 'Portrait'], isSelected: false, isPopular: true},
            {id: 'metal-sculpture-001', name: 'Metal Art Sculpture', image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300', description: 'Handcrafted metal decorative sculpture', suggestedPrice: 4000, category: 'handmade-items', subcategory: 'sculptures', variants: ['Iron', 'Brass', 'Copper'], isSelected: false, isPopular: false},
            {id: 'decorative-bowl-001', name: 'Handmade Decorative Bowl', image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300', description: 'Beautiful handcrafted decorative bowl', suggestedPrice: 600, category: 'handmade-items', subcategory: 'decorative-items', variants: ['Ceramic', 'Wood', 'Glass'], isSelected: false, isPopular: true}
        ],
        'craft-supplies': [
            {id: 'acrylic-paints-001', name: 'Acrylic Paint Set', image: 'https://images.unsplash.com/photo-1561948955-570b270e7c36?w=300', description: 'Professional acrylic paint set with brushes', suggestedPrice: 1500, category: 'craft-supplies', subcategory: 'paints', variants: ['Basic Set', 'Professional Set', 'Student Set'], isSelected: false, isPopular: true},
            {id: 'brush-set-001', name: 'Artist Brush Collection', image: 'https://images.unsplash.com/photo-1561948955-570b270e7c36?w=300', description: 'Complete set of artist brushes for painting', suggestedPrice: 800, category: 'craft-supplies', subcategory: 'brushes', variants: ['Synthetic', 'Natural Hair', 'Mixed'], isSelected: false, isPopular: true},
            {id: 'canvas-boards-001', name: 'Canvas Boards Pack', image: 'https://images.unsplash.com/photo-1561948955-570b270e7c36?w=300', description: 'Pre-primed canvas boards for painting', suggestedPrice: 400, category: 'craft-supplies', subcategory: 'canvas', variants: ['Small', 'Medium', 'Large'], isSelected: false, isPopular: true},
            {id: 'pottery-clay-001', name: 'Pottery Clay', image: 'https://images.unsplash.com/photo-1561948955-570b270e7c36?w=300', description: 'High quality clay for pottery making', suggestedPrice: 300, category: 'craft-supplies', subcategory: 'clay', variants: ['Earthenware', 'Stoneware', 'Porcelain'], isSelected: false, isPopular: true},
            {id: 'fabric-bundle-001', name: 'Craft Fabric Bundle', image: 'https://images.unsplash.com/photo-1561948955-570b270e7c36?w=300', description: 'Assorted fabric pieces for craft projects', suggestedPrice: 600, category: 'craft-supplies', subcategory: 'fabrics', variants: ['Cotton', 'Silk', 'Mixed'], isSelected: false, isPopular: true},
            {id: 'jewelry-beads-001', name: 'Jewelry Making Beads', image: 'https://images.unsplash.com/photo-1561948955-570b270e7c36?w=300', description: 'Assorted beads for jewelry making projects', suggestedPrice: 500, category: 'craft-supplies', subcategory: 'beads', variants: ['Glass', 'Wooden', 'Plastic'], isSelected: false, isPopular: true}
        ]
    },

    travel: {
        'travel-planning': [
            {id: 'goa-package-001', name: 'Goa Beach Holiday Package', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=300', description: '3 days 2 nights Goa beach holiday with accommodation', suggestedPrice: 8500, category: 'travel-planning', subcategory: 'tour-packages', variants: ['Budget', 'Deluxe', 'Premium'], isSelected: false, isPopular: true},
            {id: 'hotel-booking-001', name: 'Hotel Booking Service', image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=300', description: 'Hotel reservation and booking assistance', suggestedPrice: 500, category: 'travel-planning', subcategory: 'hotel-booking', variants: ['Budget Hotels', 'Mid-Range', 'Luxury'], isSelected: false, isPopular: true},
            {id: 'flight-booking-001', name: 'Flight Booking Service', image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=300', description: 'Domestic and international flight booking', suggestedPrice: 1000, category: 'travel-planning', subcategory: 'flight-booking', variants: ['Domestic', 'International', 'Group Booking'], isSelected: false, isPopular: true},
            {id: 'visa-assistance-001', name: 'Visa Processing Service', image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=300', description: 'Complete visa application and processing assistance', suggestedPrice: 2500, category: 'travel-planning', subcategory: 'visa-assistance', variants: ['Tourist Visa', 'Business Visa', 'Student Visa'], isSelected: false, isPopular: true},
            {id: 'travel-insurance-001', name: 'Travel Insurance', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=300', description: 'Comprehensive travel insurance coverage', suggestedPrice: 800, category: 'travel-planning', subcategory: 'travel-insurance', variants: ['Domestic', 'International', 'Family'], isSelected: false, isPopular: true}
        ],
        'local-tours': [
            {id: 'city-tour-001', name: 'Historical City Tour', image: 'https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?w=300', description: 'Guided tour of historical landmarks and monuments', suggestedPrice: 1200, category: 'local-tours', subcategory: 'city-tours', variants: ['Half Day', 'Full Day', 'Multi-Day'], isSelected: false, isPopular: true},
            {id: 'adventure-tour-001', name: 'Adventure Trekking Tour', image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=300', description: 'Exciting adventure trek in nearby hills', suggestedPrice: 2000, category: 'local-tours', subcategory: 'adventure-tours', variants: ['Easy Trek', 'Moderate Trek', 'Challenging Trek'], isSelected: false, isPopular: true},
            {id: 'cultural-tour-001', name: 'Cultural Heritage Tour', image: 'https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?w=300', description: 'Explore local culture, traditions and heritage sites', suggestedPrice: 1500, category: 'local-tours', subcategory: 'cultural-tours', variants: ['Temple Tour', 'Museum Tour', 'Village Tour'], isSelected: false, isPopular: true},
            {id: 'food-tour-001', name: 'Local Food Tour', image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=300', description: 'Taste authentic local cuisine and street food', suggestedPrice: 800, category: 'local-tours', subcategory: 'food-tours', variants: ['Street Food', 'Restaurant Tour', 'Cooking Class'], isSelected: false, isPopular: true},
            {id: 'nature-walk-001', name: 'Nature Photography Walk', image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=300', description: 'Guided nature walk with photography opportunities', suggestedPrice: 600, category: 'local-tours', subcategory: 'nature-walks', variants: ['Morning Walk', 'Evening Walk', 'Bird Watching'], isSelected: false, isPopular: true}
        ]
    },

    'pet-services': {
        'pet-grooming': [
            {id: 'dog-grooming-001', name: 'Professional Dog Grooming', image: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=300', description: 'Complete grooming service for dogs', suggestedPrice: 800, category: 'pet-grooming', subcategory: 'dog-grooming', variants: ['Basic', 'Premium', 'Full Service'], isSelected: false, isPopular: true},
            {id: 'cat-grooming-001', name: 'Cat Grooming Service', image: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=300', description: 'Gentle grooming service for cats', suggestedPrice: 600, category: 'pet-grooming', subcategory: 'cat-grooming', variants: ['Bath & Brush', 'Full Grooming', 'Nail Trim'], isSelected: false, isPopular: true},
            {id: 'nail-trimming-001', name: 'Pet Nail Trimming', image: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=300', description: 'Safe and professional nail trimming service', suggestedPrice: 200, category: 'pet-grooming', subcategory: 'nail-trimming', variants: ['Dogs', 'Cats', 'Small Pets'], isSelected: false, isPopular: true},
            {id: 'pet-bathing-001', name: 'Pet Bathing Service', image: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=300', description: 'Professional pet bathing with premium products', suggestedPrice: 400, category: 'pet-grooming', subcategory: 'pet-bathing', variants: ['Basic Bath', 'Medicated Bath', 'Flea Treatment'], isSelected: false, isPopular: true},
            {id: 'fur-styling-001', name: 'Pet Fur Styling', image: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=300', description: 'Creative fur styling and cutting for pets', suggestedPrice: 1000, category: 'pet-grooming', subcategory: 'fur-styling', variants: ['Standard Cut', 'Creative Style', 'Breed Specific'], isSelected: false, isPopular: false}
        ],
        'pet-supplies': [
            {id: 'premium-pet-food-001', name: 'Premium Pet Food', image: 'https://images.unsplash.com/photo-1425082661705-1834bfd09dca?w=300', description: 'High quality nutrition for dogs and cats', suggestedPrice: 1200, category: 'pet-supplies', subcategory: 'pet-food', variants: ['Puppy Food', 'Adult Dog', 'Cat Food'], isSelected: false, isPopular: true},
            {id: 'pet-toys-001', name: 'Interactive Pet Toys', image: 'https://images.unsplash.com/photo-1425082661705-1834bfd09dca?w=300', description: 'Fun and engaging toys for pets', suggestedPrice: 500, category: 'pet-supplies', subcategory: 'toys', variants: ['Chew Toys', 'Interactive', 'Plush Toys'], isSelected: false, isPopular: true},
            {id: 'leash-collar-001', name: 'Pet Leash & Collar Set', image: 'https://images.unsplash.com/photo-1425082661705-1834bfd09dca?w=300', description: 'Durable leash and collar set for walks', suggestedPrice: 800, category: 'pet-supplies', subcategory: 'leashes-collars', variants: ['Small', 'Medium', 'Large'], isSelected: false, isPopular: true},
            {id: 'pet-bed-001', name: 'Comfortable Pet Bed', image: 'https://images.unsplash.com/photo-1425082661705-1834bfd09dca?w=300', description: 'Soft and comfortable bed for pets', suggestedPrice: 1500, category: 'pet-supplies', subcategory: 'pet-beds', variants: ['Small', 'Medium', 'Large'], isSelected: false, isPopular: true},
            {id: 'pet-carrier-001', name: 'Pet Travel Carrier', image: 'https://images.unsplash.com/photo-1425082661705-1834bfd09dca?w=300', description: 'Safe and comfortable carrier for pet travel', suggestedPrice: 2000, category: 'pet-supplies', subcategory: 'pet-accessories', variants: ['Small', 'Medium', 'Large'], isSelected: false, isPopular: true}
        ],
        'veterinary': [
            {id: 'pet-checkup-001', name: 'Pet Health Checkup', image: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=300', description: 'Comprehensive health examination for pets', suggestedPrice: 800, category: 'veterinary', subcategory: 'health-checkups', variants: ['Basic Checkup', 'Comprehensive', 'Senior Pet'], isSelected: false, isPopular: true},
            {id: 'pet-vaccination-001', name: 'Pet Vaccination', image: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=300', description: 'Essential vaccinations for dogs and cats', suggestedPrice: 1000, category: 'veterinary', subcategory: 'vaccinations', variants: ['Puppy Shots', 'Adult Boosters', 'Cat Vaccines'], isSelected: false, isPopular: true},
            {id: 'pet-surgery-001', name: 'Pet Surgery Services', image: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=300', description: 'Professional surgical procedures for pets', suggestedPrice: 8000, category: 'veterinary', subcategory: 'pet-surgery', variants: ['Minor Surgery', 'Major Surgery', 'Emergency'], isSelected: false, isPopular: false},
            {id: 'emergency-care-001', name: 'Pet Emergency Care', image: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=300', description: '24/7 emergency veterinary care', suggestedPrice: 2500, category: 'veterinary', subcategory: 'emergency-care', variants: ['Emergency Visit', 'Critical Care', 'Overnight Stay'], isSelected: false, isPopular: true}
        ]
    },

    'real-estate': {
        'property-sales': [
            {id: 'residential-apartment-001', name: '2BHK Apartment Sale', image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=300', description: 'Modern 2BHK apartment in prime location', suggestedPrice: 4500000, category: 'property-sales', subcategory: 'residential-sales', variants: ['1BHK', '2BHK', '3BHK'], isSelected: false, isPopular: true},
            {id: 'commercial-office-001', name: 'Commercial Office Space', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=300', description: 'Premium office space in business district', suggestedPrice: 8000000, category: 'property-sales', subcategory: 'commercial-sales', variants: ['Small Office', 'Medium Office', 'Large Office'], isSelected: false, isPopular: true},
            {id: 'residential-plot-001', name: 'Residential Plot', image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=300', description: 'DTCP approved residential plot for construction', suggestedPrice: 2500000, category: 'property-sales', subcategory: 'plot-sales', variants: ['1000 sqft', '1500 sqft', '2000 sqft'], isSelected: false, isPopular: true},
            {id: 'investment-property-001', name: 'Investment Property', image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=300', description: 'High ROI investment property opportunity', suggestedPrice: 6000000, category: 'property-sales', subcategory: 'investment-properties', variants: ['Rental Income', 'Capital Appreciation', 'Mixed Use'], isSelected: false, isPopular: true}
        ],
        'rentals': [
            {id: 'house-rental-001', name: 'Independent House Rental', image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=300', description: 'Spacious independent house for rent', suggestedPrice: 25000, category: 'rentals', subcategory: 'house-rentals', variants: ['2BHK', '3BHK', '4BHK'], isSelected: false, isPopular: true},
            {id: 'apartment-rental-001', name: 'Apartment Rental', image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=300', description: 'Modern apartment with amenities', suggestedPrice: 18000, category: 'rentals', subcategory: 'apartment-rentals', variants: ['1BHK', '2BHK', '3BHK'], isSelected: false, isPopular: true},
            {id: 'commercial-rental-001', name: 'Commercial Space Rental', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=300', description: 'Prime commercial space for business', suggestedPrice: 50000, category: 'rentals', subcategory: 'commercial-rentals', variants: ['Retail Shop', 'Office Space', 'Warehouse'], isSelected: false, isPopular: true},
            {id: 'pg-hostel-001', name: 'PG Accommodation', image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=300', description: 'Comfortable PG accommodation for working professionals', suggestedPrice: 8000, category: 'rentals', subcategory: 'pg-hostels', variants: ['Single Sharing', 'Double Sharing', 'Triple Sharing'], isSelected: false, isPopular: true}
        ],
        'property-management': [
            {id: 'property-maintenance-001', name: 'Property Maintenance Service', image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=300', description: 'Complete property maintenance and repair services', suggestedPrice: 5000, category: 'property-management', subcategory: 'maintenance', variants: ['Monthly Service', 'Emergency Repair', 'Annual Contract'], isSelected: false, isPopular: true},
            {id: 'tenant-management-001', name: 'Tenant Management Service', image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=300', description: 'Professional tenant screening and management', suggestedPrice: 3000, category: 'property-management', subcategory: 'tenant-management', variants: ['Screening', 'Monthly Management', 'Full Service'], isSelected: false, isPopular: true},
            {id: 'property-valuation-001', name: 'Property Valuation', image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=300', description: 'Professional property valuation for sale/purchase', suggestedPrice: 2000, category: 'property-management', subcategory: 'property-valuation', variants: ['Residential', 'Commercial', 'Land'], isSelected: false, isPopular: true},
            {id: 'legal-services-property-001', name: 'Property Legal Services', image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=300', description: 'Legal assistance for property transactions', suggestedPrice: 8000, category: 'property-management', subcategory: 'legal-services', variants: ['Sale Deed', 'Registration', 'Title Verification'], isSelected: false, isPopular: true}
        ]
    },

    'event-services': {
        'wedding-planning': [
            {id: 'wedding-decoration-001', name: 'Wedding Decoration Package', image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=300', description: 'Complete wedding decoration with flowers and lighting', suggestedPrice: 50000, category: 'wedding-planning', subcategory: 'wedding-decor', variants: ['Basic', 'Premium', 'Luxury'], isSelected: false, isPopular: true},
            {id: 'wedding-catering-001', name: 'Wedding Catering Service', image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=300', description: 'Multi-cuisine catering for wedding celebrations', suggestedPrice: 800, category: 'wedding-planning', subcategory: 'catering', variants: ['Vegetarian', 'Non-Vegetarian', 'Mixed'], isSelected: false, isPopular: true},
            {id: 'wedding-photography-001', name: 'Wedding Photography Package', image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=300', description: 'Professional wedding photography and videography', suggestedPrice: 25000, category: 'wedding-planning', subcategory: 'photography', variants: ['Photography Only', 'Video Only', 'Complete Package'], isSelected: false, isPopular: true},
            {id: 'wedding-venue-001', name: 'Wedding Venue Booking', image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=300', description: 'Beautiful venue booking for wedding ceremonies', suggestedPrice: 30000, category: 'wedding-planning', subcategory: 'venue-booking', variants: ['Banquet Hall', 'Garden Venue', 'Heritage Venue'], isSelected: false, isPopular: true},
            {id: 'wedding-cards-001', name: 'Wedding Invitation Cards', image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=300', description: 'Custom designed wedding invitation cards', suggestedPrice: 8000, category: 'wedding-planning', subcategory: 'invitation-cards', variants: ['Traditional', 'Modern', 'Digital'], isSelected: false, isPopular: true}
        ],
        'event-management': [
            {id: 'corporate-event-001', name: 'Corporate Event Management', image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=300', description: 'Professional corporate event planning and execution', suggestedPrice: 75000, category: 'event-management', subcategory: 'corporate-events', variants: ['Conference', 'Product Launch', 'Annual Day'], isSelected: false, isPopular: true},
            {id: 'birthday-party-001', name: 'Birthday Party Planning', image: 'https://images.unsplash.com/photo-1464207687429-7505649dae38?w=300', description: 'Complete birthday party planning and decoration', suggestedPrice: 15000, category: 'event-management', subcategory: 'birthday-parties', variants: ['Kids Party', 'Adult Party', 'Theme Party'], isSelected: false, isPopular: true},
            {id: 'cultural-event-001', name: 'Cultural Event Management', image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=300', description: 'Traditional and cultural event organization', suggestedPrice: 40000, category: 'event-management', subcategory: 'cultural-events', variants: ['Festival', 'Cultural Show', 'Religious Event'], isSelected: false, isPopular: true},
            {id: 'exhibition-001', name: 'Exhibition & Trade Show', image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=300', description: 'Professional exhibition and trade show management', suggestedPrice: 100000, category: 'event-management', subcategory: 'exhibitions', variants: ['Small Exhibition', 'Large Exhibition', 'Trade Fair'], isSelected: false, isPopular: false}
        ],
        'entertainment': [
            {id: 'dj-services-001', name: 'Professional DJ Service', image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300', description: 'Professional DJ with sound system for events', suggestedPrice: 8000, category: 'entertainment', subcategory: 'dj-services', variants: ['4 Hours', '6 Hours', 'Full Day'], isSelected: false, isPopular: true},
            {id: 'live-music-001', name: 'Live Music Performance', image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300', description: 'Live band or solo artist performance', suggestedPrice: 15000, category: 'entertainment', subcategory: 'live-music', variants: ['Solo Artist', 'Duo', 'Full Band'], isSelected: false, isPopular: true},
            {id: 'dance-performance-001', name: 'Dance Performance Group', image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300', description: 'Professional dance troupe for events', suggestedPrice: 12000, category: 'entertainment', subcategory: 'dance-performances', variants: ['Classical', 'Folk', 'Contemporary'], isSelected: false, isPopular: true},
            {id: 'anchor-services-001', name: 'Event Anchor/Host', image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300', description: 'Professional event anchor and host services', suggestedPrice: 5000, category: 'entertainment', subcategory: 'anchor-services', variants: ['Wedding', 'Corporate', 'Cultural'], isSelected: false, isPopular: true}
        ]
    },

    agriculture: {
        'crop-farming': [
            {id: 'organic-vegetables-001', name: 'Organic Vegetable Box', image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=300', description: 'Fresh organic vegetables directly from farm', suggestedPrice: 500, category: 'crop-farming', subcategory: 'organic-vegetables', variants: ['Small Box', 'Medium Box', 'Large Box'], isSelected: false, isPopular: true},
            {id: 'seasonal-fruits-001', name: 'Seasonal Fresh Fruits', image: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=300', description: 'Fresh seasonal fruits from local orchards', suggestedPrice: 300, category: 'crop-farming', subcategory: 'fruits', variants: ['Mixed Fruits', 'Citrus Fruits', 'Tropical Fruits'], isSelected: false, isPopular: true},
            {id: 'organic-grains-001', name: 'Organic Grain Variety', image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=300', description: 'Chemical-free grains and cereals', suggestedPrice: 200, category: 'crop-farming', subcategory: 'grains', variants: ['Wheat', 'Rice', 'Millets'], isSelected: false, isPopular: true},
            {id: 'herb-spices-001', name: 'Fresh Herbs & Spices', image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=300', description: 'Farm fresh herbs and spices', suggestedPrice: 150, category: 'crop-farming', subcategory: 'spices', variants: ['Cooking Herbs', 'Medicinal Herbs', 'Spice Mix'], isSelected: false, isPopular: true},
            {id: 'medicinal-plants-001', name: 'Medicinal Plant Saplings', image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=300', description: 'Ayurvedic medicinal plant saplings', suggestedPrice: 100, category: 'crop-farming', subcategory: 'medicinal-plants', variants: ['Tulsi', 'Neem', 'Aloe Vera'], isSelected: false, isPopular: false}
        ],
        'dairy-farming': [
            {id: 'fresh-cow-milk-001', name: 'Fresh Cow Milk', image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=300', description: 'Pure fresh cow milk from local dairy farm', suggestedPrice: 60, category: 'dairy-farming', subcategory: 'fresh-milk', variants: ['500ml', '1L', '2L'], isSelected: false, isPopular: true},
            {id: 'homemade-ghee-001', name: 'Pure Homemade Ghee', image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=300', description: 'Traditional homemade ghee from cow milk', suggestedPrice: 800, category: 'dairy-farming', subcategory: 'dairy-products', variants: ['250g', '500g', '1kg'], isSelected: false, isPopular: true},
            {id: 'country-chicken-001', name: 'Free Range Chicken', image: 'https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=300', description: 'Naturally raised free-range chicken', suggestedPrice: 350, category: 'dairy-farming', subcategory: 'poultry', variants: ['Whole Chicken', 'Chicken Pieces', 'Eggs'], isSelected: false, isPopular: true},
            {id: 'goat-milk-001', name: 'Fresh Goat Milk', image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=300', description: 'Nutritious fresh goat milk', suggestedPrice: 120, category: 'dairy-farming', subcategory: 'goat-farming', variants: ['500ml', '1L'], isSelected: false, isPopular: false},
            {id: 'fish-fresh-001', name: 'Fresh Water Fish', image: 'https://images.unsplash.com/photo-1544943835-ad6a800813ce?w=300', description: 'Fresh fish from local fish farm', suggestedPrice: 400, category: 'dairy-farming', subcategory: 'fish-farming', variants: ['Rohu', 'Catla', 'Tilapia'], isSelected: false, isPopular: true}
        ],
        'farm-equipment': [
            {id: 'mini-tractor-001', name: 'Mini Tractor Rental', image: 'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=300', description: 'Mini tractor rental for small farms', suggestedPrice: 2000, category: 'farm-equipment', subcategory: 'tractors', variants: ['Half Day', 'Full Day', 'Weekly'], isSelected: false, isPopular: true},
            {id: 'farming-tools-001', name: 'Traditional Farming Tools', image: 'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=300', description: 'Essential hand tools for farming', suggestedPrice: 1500, category: 'farm-equipment', subcategory: 'farming-tools', variants: ['Basic Set', 'Complete Set', 'Professional Set'], isSelected: false, isPopular: true},
            {id: 'irrigation-system-001', name: 'Drip Irrigation Setup', image: 'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=300', description: 'Water-efficient drip irrigation system', suggestedPrice: 8000, category: 'farm-equipment', subcategory: 'irrigation-systems', variants: ['Small Farm', 'Medium Farm', 'Large Farm'], isSelected: false, isPopular: true},
            {id: 'seeds-fertilizers-001', name: 'Organic Seeds & Fertilizers', image: 'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=300', description: 'High quality seeds and organic fertilizers', suggestedPrice: 500, category: 'farm-equipment', subcategory: 'seeds-fertilizers', variants: ['Vegetable Seeds', 'Fruit Seeds', 'Fertilizer Mix'], isSelected: false, isPopular: true}
        ]
    },

    others: {
        'general-services': [
            {id: 'business-consulting-001', name: 'Business Consulting Service', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300', description: 'Professional business strategy and consulting', suggestedPrice: 5000, category: 'general-services', subcategory: 'consulting', variants: ['Strategy', 'Operations', 'Marketing'], isSelected: false, isPopular: true},
            {id: 'home-maintenance-001', name: 'Home Maintenance Service', image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=300', description: 'Complete home repair and maintenance services', suggestedPrice: 2000, category: 'general-services', subcategory: 'maintenance', variants: ['Plumbing', 'Electrical', 'General Repair'], isSelected: false, isPopular: true},
            {id: 'appliance-repair-001', name: 'Appliance Repair Service', image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=300', description: 'Expert repair service for home appliances', suggestedPrice: 800, category: 'general-services', subcategory: 'repairs', variants: ['Washing Machine', 'Refrigerator', 'AC Repair'], isSelected: false, isPopular: true},
            {id: 'installation-service-001', name: 'Installation Services', image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=300', description: 'Professional installation of appliances and fixtures', suggestedPrice: 1000, category: 'general-services', subcategory: 'installations', variants: ['AC Installation', 'TV Mounting', 'Furniture Assembly'], isSelected: false, isPopular: true},
            {id: 'custom-service-001', name: 'Custom Service Solutions', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300', description: 'Tailored service solutions for specific needs', suggestedPrice: 3000, category: 'general-services', subcategory: 'custom-services', variants: ['Consultation', 'Implementation', 'Ongoing Support'], isSelected: false, isPopular: false}
        ],
        'specialty-products': [
            {id: 'custom-products-001', name: 'Custom Made Products', image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300', description: 'Personalized products made to order', suggestedPrice: 2500, category: 'specialty-products', subcategory: 'custom-products', variants: ['Personalized Gifts', 'Custom Design', 'Made to Order'], isSelected: false, isPopular: true},
            {id: 'handmade-crafts-001', name: 'Handmade Craft Items', image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300', description: 'Unique handcrafted items by local artisans', suggestedPrice: 800, category: 'specialty-products', subcategory: 'handmade-items', variants: ['Decorative', 'Functional', 'Gift Items'], isSelected: false, isPopular: true},
            {id: 'imported-goods-001', name: 'Imported Specialty Items', image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300', description: 'Unique imported products and specialty goods', suggestedPrice: 1500, category: 'specialty-products', subcategory: 'imported-goods', variants: ['Electronics', 'Fashion', 'Home Decor'], isSelected: false, isPopular: false},
            {id: 'unique-services-001', name: 'Unique Service Offerings', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300', description: 'Specialized services not available elsewhere', suggestedPrice: 4000, category: 'specialty-products', subcategory: 'unique-services', variants: ['Creative Services', 'Technical Services', 'Consulting'], isSelected: false, isPopular: true}
        ]
    }
};

// ========================================
// FALLBACK IMAGES BY CATEGORY
// ========================================

const FALLBACK_IMAGES = {
    'mens-wear': [
        'https://images.unsplash.com/photo-1620012253295-c15cc3e65df4?w=300',
        'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=300',
        'https://images.unsplash.com/photo-1583743814966-8936f37f4ec6?w=300',
        'https://images.unsplash.com/photo-1622445275576-721325763afe?w=300'
    ],
    'womens-wear': [
        'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=300',
        'https://images.unsplash.com/photo-1583744946564-b52ac1c389c8?w=300',
        'https://images.unsplash.com/photo-1594223274512-ad4803739b7c?w=300',
        'https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=300'
    ],
    'accessories': [
        'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300',
        'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300',
        'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=300',
        'https://images.unsplash.com/photo-1627123424574-724758594e93?w=300'
    ],
    'footwear': [
        'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=300',
        'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=300',
        'https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=300',
        'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=300'
    ],
    'north-indian': [
        'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=300',
        'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=300',
        'https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?w=300',
        'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=300'
    ],
    'south-indian': [
        'https://images.unsplash.com/photo-1630383249896-424e482df921?w=300',
        'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=300',
        'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=300',
        'https://images.unsplash.com/photo-1611270629569-8b357cb88da6?w=300'
    ],
    'sweets-desserts': [
        'https://images.unsplash.com/photo-1571877277200-a0d98ea607e9?w=300',
        'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=300',
        'https://images.unsplash.com/photo-1571877277200-a0d98ea607e9?w=300',
        'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=300'
    ],
    'beverages': [
        'https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=300',
        'https://images.unsplash.com/photo-1546173159-315724a31696?w=300',
        'https://images.unsplash.com/photo-1553979459-d2229ba7433a?w=300',
        'https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=300'
    ],
    'hair-services': [
        'https://images.unsplash.com/photo-1560869713-7d0954d92f5b?w=300',
        'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=300',
        'https://images.unsplash.com/photo-1562004760-acb5685654e8?w=300',
        'https://images.unsplash.com/photo-1634449571010-02389ed0f9b0?w=300'
    ],
    'beauty-services': [
        'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=300',
        'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=300',
        'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=300',
        'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=300'
    ],
    'spa-wellness': [
        'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=300',
        'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=300',
        'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=300',
        'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=300'
    ],
    'fresh-produce': [
        'https://images.unsplash.com/photo-1546470427-e1295e888100?w=300',
        'https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?w=300',
        'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=300',
        'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=300'
    ],
    'staples': [
        'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=300',
        'https://images.unsplash.com/photo-1596097900113-bdf6c7ffaba6?w=300',
        'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=300',
        'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=300'
    ],
    'packaged-foods': [
        'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=300',
        'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=300',
        'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=300',
        'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=300'
    ],
    'mobile-devices': [
        'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300',
        'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=300',
        'https://images.unsplash.com/photo-1609592707680-9d9b9f1e7bf9?w=300',
        'https://images.unsplash.com/photo-1601593346740-925612772716?w=300'
    ],
    'computers': [
        'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=300',
        'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=300',
        'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=300',
        'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=300'
    ],
    'home-appliances': [
        'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=300',
        'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300',
        'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300',
        'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300'
    ],
    'gym-fitness': [
        'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=300',
        'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300',
        'https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=300',
        'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=300'
    ],
    'yoga-meditation': [
        'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=300',
        'https://images.unsplash.com/photo-1593811167562-9cef47bfc4a7?w=300',
        'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=300',
        'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=300'
    ],
    'fine-dining': [
        'https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=300',
        'https://images.unsplash.com/photo-1532636618209-8da5c4bf2c5a?w=300',
        'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=300',
        'https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=300'
    ],
    'casual-dining': [
        'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=300',
        'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300',
        'https://images.unsplash.com/photo-1509722747041-616f39b57569?w=300',
        'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=300'
    ],
    'cafes': [
        'https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=300',
        'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=300',
        'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=300',
        'https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=300'
    ],
    'default': [
        'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300',
        'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=300',
        'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300',
        'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=300'
    ]
};

// Function to get fallback image for category
function getFallbackImage(category, subcategory) {
    // Try subcategory first
    if (subcategory && FALLBACK_IMAGES[subcategory]) {
        const images = FALLBACK_IMAGES[subcategory];
        return images[Math.floor(Math.random() * images.length)];
    }
    
    // Try main category
    if (category && FALLBACK_IMAGES[category]) {
        const images = FALLBACK_IMAGES[category];
        return images[Math.floor(Math.random() * images.length)];
    }
    
    // Default fallback
    const defaultImages = FALLBACK_IMAGES.default;
    return defaultImages[Math.floor(Math.random() * defaultImages.length)];
}

// Ultimate fallback - SVG placeholder
function getPlaceholderImage() {
    return 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDMwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiIGZpbGw9IiNGN0Y4RkEiLz48Y2lyY2xlIGN4PSIxNTAiIGN5PSIxMjAiIHI9IjMwIiBmaWxsPSIjRTVFN0VCIi8+PHBhdGggZD0iTTEyMCAxNTBIMTgwVjE4MEgxMjBWMTUwWiIgZmlsbD0iI0U1RTdFQiIvPjx0ZXh0IHg9IjE1MCIgeT0iMjMwIiBmb250LWZhbWlseT0iYXJpYWwiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM5Q0EzQUYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPk5vIEltYWdlPC90ZXh0Pjwvc3ZnPg==';
}

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
        MOTIVATIONAL_MESSAGE_TEMPLATES,
        INDIAN_BUSINESS_NAMES,
        INDIAN_CITIES,
        FOMO_MESSAGE_TEMPLATES,
        THEME_CONFIG,
        GOAL_NAMES,
        LANGUAGE_CONFIG,
        DEFAULTS
    };
}

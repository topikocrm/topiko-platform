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

const INDIAN_PRODUCTS_DB = {
    boutique: {
        'mens-wear': [
            {
                id: 'kurta-cotton-001',
                name: 'Premium Cotton Kurta',
                image: 'https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=300',
                description: 'Comfortable daily wear cotton kurta with traditional design',
                suggestedPrice: 899,
                category: 'mens-wear',
                subcategory: 'kurtas',
                variants: ['S', 'M', 'L', 'XL'],
                isSelected: false,
                isPopular: true
            },
            {
                id: 'shirt-formal-001',
                name: 'Formal Cotton Shirt',
                image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=300',
                description: 'Classic formal shirt for office wear',
                suggestedPrice: 1299,
                category: 'mens-wear',
                subcategory: 'shirts',
                variants: ['S', 'M', 'L', 'XL', 'XXL'],
                isSelected: false,
                isPopular: true
            },
            {
                id: 'sherwani-wedding-001',
                name: 'Royal Wedding Sherwani',
                image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300',
                description: 'Elegant sherwani for weddings and special occasions',
                suggestedPrice: 4999,
                category: 'mens-wear',
                subcategory: 'sherwanis',
                variants: ['S', 'M', 'L', 'XL'],
                isSelected: false,
                isPopular: false
            },
            {
                id: 'jeans-casual-001',
                name: 'Denim Casual Jeans',
                image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=300',
                description: 'Comfortable casual jeans for everyday wear',
                suggestedPrice: 1599,
                category: 'mens-wear',
                subcategory: 'pants',
                variants: ['28', '30', '32', '34', '36'],
                isSelected: false,
                isPopular: true
            },
            {
                id: 'blazer-formal-001',
                name: 'Business Formal Blazer',
                image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300',
                description: 'Professional blazer for business meetings',
                suggestedPrice: 3499,
                category: 'mens-wear',
                subcategory: 'formal-wear',
                variants: ['S', 'M', 'L', 'XL'],
                isSelected: false,
                isPopular: false
            },
            {
                id: 'dhoti-traditional-001',
                name: 'Traditional Cotton Dhoti',
                image: 'https://images.unsplash.com/photo-1566479179817-c0efeb382d13?w=300',
                description: 'Pure cotton dhoti for traditional occasions',
                suggestedPrice: 599,
                category: 'mens-wear',
                subcategory: 'ethnic-wear',
                variants: ['Free Size'],
                isSelected: false,
                isPopular: false
            },
            {
                id: 'tshirt-casual-001',
                name: 'Cotton Casual T-Shirt',
                image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300',
                description: 'Comfortable cotton t-shirt for daily wear',
                suggestedPrice: 499,
                category: 'mens-wear',
                subcategory: 'casual-wear',
                variants: ['S', 'M', 'L', 'XL', 'XXL'],
                isSelected: false,
                isPopular: true
            }
        ],
        'womens-wear': [
            {
                id: 'saree-silk-001',
                name: 'Silk Banarasi Saree',
                image: 'https://images.unsplash.com/photo-1583391733975-4770270d3c5e?w=300',
                description: 'Traditional Banarasi silk saree with gold border',
                suggestedPrice: 6999,
                category: 'womens-wear',
                subcategory: 'sarees',
                variants: ['One Size'],
                isSelected: false,
                isPopular: true
            },
            {
                id: 'lehenga-wedding-001',
                name: 'Designer Wedding Lehenga',
                image: 'https://images.unsplash.com/photo-1594736797933-d0ea8baa3b9a?w=300',
                description: 'Heavy embroidered lehenga for weddings',
                suggestedPrice: 12999,
                category: 'womens-wear',
                subcategory: 'lehengas',
                variants: ['S', 'M', 'L', 'XL'],
                isSelected: false,
                isPopular: true
            },
            {
                id: 'kurti-cotton-001',
                name: 'Printed Cotton Kurti',
                image: 'https://images.unsplash.com/photo-1594736797933-d0ea8baa3b9a?w=300',
                description: 'Comfortable printed kurti for daily wear',
                suggestedPrice: 799,
                category: 'womens-wear',
                subcategory: 'kurtis',
                variants: ['S', 'M', 'L', 'XL'],
                isSelected: false,
                isPopular: true
            },
            {
                id: 'dress-western-001',
                name: 'Western Maxi Dress',
                image: 'https://images.unsplash.com/photo-1566479179817-c0efeb382d13?w=300',
                description: 'Elegant western maxi dress for parties',
                suggestedPrice: 1899,
                category: 'womens-wear',
                subcategory: 'western-wear',
                variants: ['XS', 'S', 'M', 'L', 'XL'],
                isSelected: false,
                isPopular: false
            },
            {
                id: 'salwar-suit-001',
                name: 'Designer Salwar Suit',
                image: 'https://images.unsplash.com/photo-1583391733975-4770270d3c5e?w=300',
                description: 'Beautiful designer salwar suit with dupatta',
                suggestedPrice: 2499,
                category: 'womens-wear',
                subcategory: 'salwar-suits',
                variants: ['S', 'M', 'L', 'XL'],
                isSelected: false,
                isPopular: true
            },
            {
                id: 'saree-cotton-001',
                name: 'Cotton Handloom Saree',
                image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=300',
                description: 'Handwoven cotton saree with traditional motifs',
                suggestedPrice: 1299,
                category: 'womens-wear',
                subcategory: 'sarees',
                variants: ['One Size'],
                isSelected: false,
                isPopular: true
            },
            {
                id: 'blouse-silk-001',
                name: 'Silk Designer Blouse',
                image: 'https://images.unsplash.com/photo-1594736797933-d0ea8baa3b9a?w=300',
                description: 'Elegant silk blouse with embroidery',
                suggestedPrice: 899,
                category: 'womens-wear',
                subcategory: 'tops',
                variants: ['S', 'M', 'L', 'XL'],
                isSelected: false,
                isPopular: false
            }
        ],
        'accessories': [
            {
                id: 'handbag-leather-001',
                name: 'Leather Handbag',
                image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300',
                description: 'Premium leather handbag for women',
                suggestedPrice: 2299,
                category: 'accessories',
                subcategory: 'bags',
                variants: ['Brown', 'Black', 'Tan'],
                isSelected: false,
                isPopular: true
            },
            {
                id: 'watch-analog-001',
                name: 'Analog Wrist Watch',
                image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300',
                description: 'Stylish analog watch for everyday use',
                suggestedPrice: 1599,
                category: 'accessories',
                subcategory: 'watches',
                variants: ['Silver', 'Gold', 'Black'],
                isSelected: false,
                isPopular: true
            },
            {
                id: 'sunglasses-uv-001',
                name: 'UV Protection Sunglasses',
                image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=300',
                description: 'Stylish sunglasses with UV protection',
                suggestedPrice: 899,
                category: 'accessories',
                subcategory: 'sunglasses',
                variants: ['Black', 'Brown', 'Blue'],
                isSelected: false,
                isPopular: false
            },
            {
                id: 'wallet-leather-001',
                name: 'Genuine Leather Wallet',
                image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?w=300',
                description: 'Premium leather wallet with multiple card slots',
                suggestedPrice: 799,
                category: 'accessories',
                subcategory: 'wallets',
                variants: ['Brown', 'Black', 'Navy'],
                isSelected: false,
                isPopular: true
            }
        ],
        'footwear': [
            {
                id: 'shoes-formal-001',
                name: 'Formal Leather Shoes',
                image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=300',
                description: 'Premium leather formal shoes for men',
                suggestedPrice: 2999,
                category: 'footwear',
                subcategory: 'mens-shoes',
                variants: ['6', '7', '8', '9', '10', '11'],
                isSelected: false,
                isPopular: true
            },
            {
                id: 'sandals-women-001',
                name: 'Designer Women Sandals',
                image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=300',
                description: 'Comfortable designer sandals for women',
                suggestedPrice: 1499,
                category: 'footwear',
                subcategory: 'womens-shoes',
                variants: ['5', '6', '7', '8', '9'],
                isSelected: false,
                isPopular: true
            },
            {
                id: 'sneakers-sports-001',
                name: 'Sports Sneakers',
                image: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=300',
                description: 'Comfortable sports sneakers for running',
                suggestedPrice: 3499,
                category: 'footwear',
                subcategory: 'sneakers',
                variants: ['6', '7', '8', '9', '10', '11'],
                isSelected: false,
                isPopular: true
            },
            {
                id: 'chappals-leather-001',
                name: 'Traditional Leather Chappals',
                image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=300',
                description: 'Handcrafted leather chappals',
                suggestedPrice: 899,
                category: 'footwear',
                subcategory: 'ethnic-footwear',
                variants: ['6', '7', '8', '9', '10'],
                isSelected: false,
                isPopular: false
            }
        ]
    },

    'home-foods': {
        'north-indian': [
            {
                id: 'butter-chicken-001',
                name: 'Butter Chicken',
                image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=300',
                description: 'Creamy and delicious butter chicken curry',
                suggestedPrice: 320,
                category: 'north-indian',
                subcategory: 'curries',
                variants: ['Regular', 'Large'],
                isSelected: false,
                isPopular: true
            },
            {
                id: 'dal-makhani-001',
                name: 'Dal Makhani',
                image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=300',
                description: 'Rich and creamy black lentil curry',
                suggestedPrice: 280,
                category: 'north-indian',
                subcategory: 'dal-preparations',
                variants: ['Regular', 'Large'],
                isSelected: false,
                isPopular: true
            },
            {
                id: 'biryani-chicken-001',
                name: 'Chicken Biryani',
                image: 'https://images.unsplash.com/photo-1563379091339-03246963d999?w=300',
                description: 'Aromatic basmati rice with tender chicken',
                suggestedPrice: 350,
                category: 'north-indian',
                subcategory: 'biryanis',
                variants: ['Half', 'Full'],
                isSelected: false,
                isPopular: true
            },
            {
                id: 'naan-butter-001',
                name: 'Butter Naan',
                image: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?w=300',
                description: 'Soft and fluffy butter naan bread',
                suggestedPrice: 60,
                category: 'north-indian',
                subcategory: 'rotis-parathas',
                variants: ['Single', 'Pair'],
                isSelected: false,
                isPopular: true
            },
            {
                id: 'tandoori-chicken-001',
                name: 'Tandoori Chicken',
                image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=300',
                description: 'Marinated chicken cooked in tandoor',
                suggestedPrice: 420,
                category: 'north-indian',
                subcategory: 'tandoor-items',
                variants: ['Half', 'Full'],
                isSelected: false,
                isPopular: true
            },
            {
                id: 'rajma-chawal-001',
                name: 'Rajma Chawal',
                image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=300',
                description: 'Kidney bean curry with steamed rice',
                suggestedPrice: 220,
                category: 'north-indian',
                subcategory: 'rice-dishes',
                variants: ['Regular', 'Large'],
                isSelected: false,
                isPopular: true
            },
            {
                id: 'chole-bhature-001',
                name: 'Chole Bhature',
                image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=300',
                description: 'Spicy chickpea curry with fried bread',
                suggestedPrice: 180,
                category: 'north-indian',
                subcategory: 'snacks',
                variants: ['Single', 'Double'],
                isSelected: false,
                isPopular: true
            }
        ],
        'south-indian': [
            {
                id: 'masala-dosa-001',
                name: 'Masala Dosa',
                image: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=300',
                description: 'Crispy dosa with spiced potato filling',
                suggestedPrice: 120,
                category: 'south-indian',
                subcategory: 'dosas',
                variants: ['Regular', 'Large'],
                isSelected: false,
                isPopular: true
            },
            {
                id: 'idli-sambar-001',
                name: 'Idli with Sambar',
                image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=300',
                description: 'Steamed rice cakes with lentil curry',
                suggestedPrice: 80,
                category: 'south-indian',
                subcategory: 'idlis',
                variants: ['2 Pieces', '4 Pieces'],
                isSelected: false,
                isPopular: true
            },
            {
                id: 'vada-sambar-001',
                name: 'Medu Vada',
                image: 'https://images.unsplash.com/photo-1611270629569-8b357cb88da6?w=300',
                description: 'Crispy lentil donuts with sambar',
                suggestedPrice: 90,
                category: 'south-indian',
                subcategory: 'vadas',
                variants: ['2 Pieces', '4 Pieces'],
                isSelected: false,
                isPopular: true
            },
            {
                id: 'uttapam-onion-001',
                name: 'Onion Uttapam',
                image: 'https://images.unsplash.com/photo-1630383249896-424e482df921?w=300',
                description: 'Thick pancake with onion toppings',
                suggestedPrice: 110,
                category: 'south-indian',
                subcategory: 'uttapam',
                variants: ['Regular', 'Large'],
                isSelected: false,
                isPopular: false
            },
            {
                id: 'coconut-chutney-001',
                name: 'Coconut Chutney',
                image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=300',
                description: 'Fresh coconut chutney with spices',
                suggestedPrice: 40,
                category: 'south-indian',
                subcategory: 'chutneys',
                variants: ['Small', 'Medium'],
                isSelected: false,
                isPopular: true
            },
            {
                id: 'rava-upma-001',
                name: 'Rava Upma',
                image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=300',
                description: 'Traditional semolina breakfast dish',
                suggestedPrice: 70,
                category: 'south-indian',
                subcategory: 'dosas',
                variants: ['Regular', 'Large'],
                isSelected: false,
                isPopular: false
            }
        ],
        'sweets-desserts': [
            {
                id: 'gulab-jamun-001',
                name: 'Gulab Jamun',
                image: 'https://images.unsplash.com/photo-1571877277200-a0d98ea607e9?w=300',
                description: 'Soft milk dumplings in sugar syrup',
                suggestedPrice: 60,
                category: 'sweets-desserts',
                subcategory: 'traditional-sweets',
                variants: ['2 Pieces', '4 Pieces', '1 Kg'],
                isSelected: false,
                isPopular: true
            },
            {
                id: 'rasmalai-001',
                name: 'Rasmalai',
                image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=300',
                description: 'Soft cheese dumplings in flavored milk',
                suggestedPrice: 80,
                category: 'sweets-desserts',
                subcategory: 'traditional-sweets',
                variants: ['2 Pieces', '4 Pieces'],
                isSelected: false,
                isPopular: true
            },
            {
                id: 'chocolate-cake-001',
                name: 'Chocolate Cake',
                image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=300',
                description: 'Rich chocolate cake with ganache',
                suggestedPrice: 450,
                category: 'sweets-desserts',
                subcategory: 'cakes',
                variants: ['Slice', 'Half Kg', '1 Kg'],
                isSelected: false,
                isPopular: true
            },
            {
                id: 'kulfi-malai-001',
                name: 'Malai Kulfi',
                image: 'https://images.unsplash.com/photo-1571877277200-a0d98ea607e9?w=300',
                description: 'Traditional Indian ice cream',
                suggestedPrice: 50,
                category: 'sweets-desserts',
                subcategory: 'ice-creams',
                variants: ['Single', 'Double'],
                isSelected: false,
                isPopular: true
            }
        ],
        'beverages': [
            {
                id: 'masala-chai-001',
                name: 'Masala Chai',
                image: 'https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=300',
                description: 'Traditional spiced tea with milk',
                suggestedPrice: 25,
                category: 'beverages',
                subcategory: 'tea',
                variants: ['Regular', 'Large'],
                isSelected: false,
                isPopular: true
            },
            {
                id: 'fresh-lime-001',
                name: 'Fresh Lime Water',
                image: 'https://images.unsplash.com/photo-1546173159-315724a31696?w=300',
                description: 'Refreshing lime water with mint',
                suggestedPrice: 40,
                category: 'beverages',
                subcategory: 'fresh-juices',
                variants: ['Sweet', 'Salt', 'Soda'],
                isSelected: false,
                isPopular: true
            },
            {
                id: 'mango-lassi-001',
                name: 'Mango Lassi',
                image: 'https://images.unsplash.com/photo-1553979459-d2229ba7433a?w=300',
                description: 'Creamy mango yogurt drink',
                suggestedPrice: 80,
                category: 'beverages',
                subcategory: 'lassi',
                variants: ['Regular', 'Large'],
                isSelected: false,
                isPopular: true
            },
            {
                id: 'filter-coffee-001',
                name: 'South Indian Filter Coffee',
                image: 'https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=300',
                description: 'Authentic filter coffee with chicory',
                suggestedPrice: 35,
                category: 'beverages',
                subcategory: 'coffee',
                variants: ['Regular', 'Strong'],
                isSelected: false,
                isPopular: true
            }
        ]
    },

    salons: {
        'hair-services': [
            {
                id: 'haircut-men-001',
                name: 'Men\'s Haircut & Styling',
                image: 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=300',
                description: 'Professional haircut with styling',
                suggestedPrice: 300,
                category: 'hair-services',
                subcategory: 'haircuts',
                variants: ['Basic', 'Premium'],
                isSelected: false,
                isPopular: true
            },
            {
                id: 'haircut-women-001',
                name: 'Women\'s Haircut & Blow Dry',
                image: 'https://images.unsplash.com/photo-1562004760-acb5685654e8?w=300',
                description: 'Stylish haircut with professional blow dry',
                suggestedPrice: 800,
                category: 'hair-services',
                subcategory: 'haircuts',
                variants: ['Basic', 'Styled', 'Premium'],
                isSelected: false,
                isPopular: true
            },
            {
                id: 'hair-color-001',
                name: 'Hair Coloring Service',
                image: 'https://images.unsplash.com/photo-1634449571010-02389ed0f9b0?w=300',
                description: 'Professional hair coloring with premium products',
                suggestedPrice: 2500,
                category: 'hair-services',
                subcategory: 'hair-coloring',
                variants: ['Highlights', 'Full Color', 'Root Touch-up'],
                isSelected: false,
                isPopular: false
            },
            {
                id: 'keratin-treatment-001',
                name: 'Keratin Hair Treatment',
                image: 'https://images.unsplash.com/photo-1560869713-7d0954d92f5b?w=300',
                description: 'Smoothing keratin treatment for frizzy hair',
                suggestedPrice: 5000,
                category: 'hair-services',
                subcategory: 'keratin',
                variants: ['Basic', 'Premium'],
                isSelected: false,
                isPopular: false
            }
        ],
        'beauty-services': [
            {
                id: 'facial-basic-001',
                name: 'Deep Cleansing Facial',
                image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=300',
                description: 'Deep cleansing facial for glowing skin',
                suggestedPrice: 1200,
                category: 'beauty-services',
                subcategory: 'facials',
                variants: ['Basic', 'Deluxe', 'Premium'],
                isSelected: false,
                isPopular: true
            },
            {
                id: 'bridal-makeup-001',
                name: 'Bridal Makeup Package',
                image: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=300',
                description: 'Complete bridal makeup with hair styling',
                suggestedPrice: 8000,
                category: 'beauty-services',
                subcategory: 'makeup',
                variants: ['Traditional', 'Modern', 'Premium'],
                isSelected: false,
                isPopular: true
            },
            {
                id: 'eyebrow-threading-001',
                name: 'Eyebrow Threading & Shaping',
                image: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=300',
                description: 'Professional eyebrow threading and shaping',
                suggestedPrice: 150,
                category: 'beauty-services',
                subcategory: 'eyebrow-threading',
                variants: ['Basic', 'Styled'],
                isSelected: false,
                isPopular: true
            },
            {
                id: 'manicure-pedicure-001',
                name: 'Manicure & Pedicure',
                image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=300',
                description: 'Complete nail care with polish',
                suggestedPrice: 800,
                category: 'beauty-services',
                subcategory: 'manicure',
                variants: ['Basic', 'Gel Polish', 'French'],
                isSelected: false,
                isPopular: true
            }
        ],
        'spa-wellness': [
            {
                id: 'full-body-massage-001',
                name: 'Full Body Relaxation Massage',
                image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=300',
                description: 'Complete body massage for stress relief',
                suggestedPrice: 2500,
                category: 'spa-wellness',
                subcategory: 'massages',
                variants: ['60 min', '90 min', '120 min'],
                isSelected: false,
                isPopular: true
            },
            {
                id: 'aromatherapy-session-001',
                name: 'Aromatherapy Session',
                image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=300',
                description: 'Relaxing aromatherapy with essential oils',
                suggestedPrice: 1800,
                category: 'spa-wellness',
                subcategory: 'aromatherapy',
                variants: ['45 min', '60 min'],
                isSelected: false,
                isPopular: false
            }
        ]
    },

    grocery: {
        'fresh-produce': [
            {
                id: 'tomatoes-fresh-001',
                name: 'Fresh Tomatoes',
                image: 'https://images.unsplash.com/photo-1546470427-e1295e888100?w=300',
                description: 'Farm fresh red tomatoes',
                suggestedPrice: 40,
                category: 'fresh-produce',
                subcategory: 'vegetables',
                variants: ['500g', '1kg', '2kg'],
                isSelected: false,
                isPopular: true
            },
            {
                id: 'onions-red-001',
                name: 'Red Onions',
                image: 'https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?w=300',
                description: 'Fresh red onions from local farms',
                suggestedPrice: 30,
                category: 'fresh-produce',
                subcategory: 'vegetables',
                variants: ['500g', '1kg', '2kg'],
                isSelected: false,
                isPopular: true
            },
            {
                id: 'bananas-fresh-001',
                name: 'Fresh Bananas',
                image: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=300',
                description: 'Sweet and ripe bananas',
                suggestedPrice: 60,
                category: 'fresh-produce',
                subcategory: 'fruits',
                variants: ['500g', '1kg'],
                isSelected: false,
                isPopular: true
            },
            {
                id: 'apples-kashmiri-001',
                name: 'Kashmiri Apples',
                image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=300',
                description: 'Premium Kashmiri red apples',
                suggestedPrice: 180,
                category: 'fresh-produce',
                subcategory: 'fruits',
                variants: ['500g', '1kg'],
                isSelected: false,
                isPopular: true
            },
            {
                id: 'potatoes-fresh-001',
                name: 'Fresh Potatoes',
                image: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=300',
                description: 'Farm fresh potatoes for daily cooking',
                suggestedPrice: 25,
                category: 'fresh-produce',
                subcategory: 'vegetables',
                variants: ['1kg', '2kg', '5kg'],
                isSelected: false,
                isPopular: true
            }
        ],
        'staples': [
            {
                id: 'rice-basmati-001',
                name: 'Basmati Rice',
                image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=300',
                description: 'Premium long grain basmati rice',
                suggestedPrice: 200,
                category: 'staples',
                subcategory: 'rice',
                variants: ['1kg', '5kg', '10kg'],
                isSelected: false,
                isPopular: true
            },
            {
                id: 'dal-toor-001',
                name: 'Toor Dal (Arhar)',
                image: 'https://images.unsplash.com/photo-1596097900113-bdf6c7ffaba6?w=300',
                description: 'High quality toor dal lentils',
                suggestedPrice: 140,
                category: 'staples',
                subcategory: 'pulses',
                variants: ['500g', '1kg', '2kg'],
                isSelected: false,
                isPopular: true
            },
            {
                id: 'oil-mustard-001',
                name: 'Mustard Oil',
                image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=300',
                description: 'Pure mustard oil for cooking',
                suggestedPrice: 180,
                category: 'staples',
                subcategory: 'oils',
                variants: ['500ml', '1L', '2L'],
                isSelected: false,
                isPopular: true
            },
            {
                id: 'wheat-flour-001',
                name: 'Whole Wheat Flour',
                image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=300',
                description: 'Fresh ground whole wheat flour',
                suggestedPrice: 50,
                category: 'staples',
                subcategory: 'flour',
                variants: ['1kg', '2kg', '5kg'],
                isSelected: false,
                isPopular: true
            }
        ],
        'packaged-foods': [
            {
                id: 'biscuits-tea-001',
                name: 'Tea Time Biscuits',
                image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=300',
                description: 'Crispy biscuits perfect with tea',
                suggestedPrice: 40,
                category: 'packaged-foods',
                subcategory: 'snacks',
                variants: ['200g', '400g'],
                isSelected: false,
                isPopular: true
            },
            {
                id: 'milk-packets-001',
                name: 'Fresh Milk Packets',
                image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=300',
                description: 'Fresh full cream milk',
                suggestedPrice: 60,
                category: 'packaged-foods',
                subcategory: 'dairy',
                variants: ['500ml', '1L'],
                isSelected: false,
                isPopular: true
            }
        ]
    },

    electronics: {
        'mobile-devices': [
            {
                id: 'smartphone-android-001',
                name: 'Android Smartphone',
                image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300',
                description: 'Latest Android smartphone with dual camera',
                suggestedPrice: 15999,
                category: 'mobile-devices',
                subcategory: 'smartphones',
                variants: ['64GB', '128GB', '256GB'],
                isSelected: false,
                isPopular: true
            },
            {
                id: 'earphones-wireless-001',
                name: 'Wireless Earphones',
                image: 'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=300',
                description: 'Bluetooth wireless earphones with charging case',
                suggestedPrice: 2999,
                category: 'mobile-devices',
                subcategory: 'headphones',
                variants: ['Black', 'White', 'Blue'],
                isSelected: false,
                isPopular: true
            },
            {
                id: 'power-bank-001',
                name: '10000mAh Power Bank',
                image: 'https://images.unsplash.com/photo-1609592707680-9d9b9f1e7bf9?w=300',
                description: 'Fast charging power bank with dual USB ports',
                suggestedPrice: 1299,
                category: 'mobile-devices',
                subcategory: 'accessories',
                variants: ['10000mAh', '20000mAh'],
                isSelected: false,
                isPopular: true
            },
            {
                id: 'phone-case-001',
                name: 'Protective Phone Case',
                image: 'https://images.unsplash.com/photo-1601593346740-925612772716?w=300',
                description: 'Durable protective case for smartphones',
                suggestedPrice: 399,
                category: 'mobile-devices',
                subcategory: 'cases',
                variants: ['Clear', 'Black', 'Blue'],
                isSelected: false,
                isPopular: true
            }
        ],
        'computers': [
            {
                id: 'laptop-business-001',
                name: 'Business Laptop',
                image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=300',
                description: 'Professional laptop for business use',
                suggestedPrice: 45000,
                category: 'computers',
                subcategory: 'laptops',
                variants: ['i3/4GB', 'i5/8GB', 'i7/16GB'],
                isSelected: false,
                isPopular: true
            },
            {
                id: 'keyboard-wireless-001',
                name: 'Wireless Keyboard',
                image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=300',
                description: 'Ergonomic wireless keyboard',
                suggestedPrice: 1800,
                category: 'computers',
                subcategory: 'keyboards',
                variants: ['Black', 'White'],
                isSelected: false,
                isPopular: false
            },
            {
                id: 'mouse-wireless-001',
                name: 'Wireless Mouse',
                image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=300',
                description: 'Ergonomic wireless mouse with precision tracking',
                suggestedPrice: 899,
                category: 'computers',
                subcategory: 'mice',
                variants: ['Black', 'Silver'],
                isSelected: false,
                isPopular: true
            }
        ],
        'home-appliances': [
            {
                id: 'fan-ceiling-001',
                name: 'Ceiling Fan',
                image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=300',
                description: 'Energy efficient ceiling fan with remote',
                suggestedPrice: 3500,
                category: 'home-appliances',
                subcategory: 'fans',
                variants: ['48 inch', '52 inch'],
                isSelected: false,
                isPopular: true
            },
            {
                id: 'iron-steam-001',
                name: 'Steam Iron',
                image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300',
                description: 'Automatic steam iron with ceramic coating',
                suggestedPrice: 1800,
                category: 'home-appliances',
                subcategory: 'irons',
                variants: ['1200W', '1500W'],
                isSelected: false,
                isPopular: true
            }
        ]
    },

    fitness: {
        'gym-fitness': [
            {
                id: 'gym-membership-001',
                name: 'Monthly Gym Membership',
                image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=300',
                description: 'Full access gym membership with trainer',
                suggestedPrice: 2000,
                category: 'gym-fitness',
                subcategory: 'weight-training',
                variants: ['Basic', 'Premium', 'VIP'],
                isSelected: false,
                isPopular: true
            },
            {
                id: 'personal-training-001',
                name: 'Personal Training Session',
                image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300',
                description: 'One-on-one personal training session',
                suggestedPrice: 800,
                category: 'gym-fitness',
                subcategory: 'personal-training',
                variants: ['45 min', '60 min'],
                isSelected: false,
                isPopular: true
            },
            {
                id: 'protein-powder-001',
                name: 'Whey Protein Powder',
                image: 'https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=300',
                description: 'High quality whey protein for muscle building',
                suggestedPrice: 2500,
                category: 'gym-fitness',
                subcategory: 'supplements',
                variants: ['1kg', '2kg', '5kg'],
                isSelected: false,
                isPopular: true
            }
        ],
        'yoga-meditation': [
            {
                id: 'yoga-class-001',
                name: 'Hatha Yoga Class',
                image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=300',
                description: 'Traditional Hatha yoga class for beginners',
                suggestedPrice: 500,
                category: 'yoga-meditation',
                subcategory: 'hatha-yoga',
                variants: ['Drop-in', 'Monthly', 'Quarterly'],
                isSelected: false,
                isPopular: true
            },
            {
                id: 'meditation-session-001',
                name: 'Guided Meditation',
                image: 'https://images.unsplash.com/photo-1593811167562-9cef47bfc4a7?w=300',
                description: 'Guided meditation for stress relief',
                suggestedPrice: 300,
                category: 'yoga-meditation',
                subcategory: 'meditation',
                variants: ['30 min', '45 min', '60 min'],
                isSelected: false,
                isPopular: false
            },
            {
                id: 'yoga-mat-001',
                name: 'Premium Yoga Mat',
                image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=300',
                description: 'Non-slip yoga mat with carrying strap',
                suggestedPrice: 1200,
                category: 'yoga-meditation',
                subcategory: 'equipment',
                variants: ['6mm', '8mm', '10mm'],
                isSelected: false,
                isPopular: true
            }
        ]
    },

    restaurants: {
        'fine-dining': [
            {
                id: 'pasta-italian-001',
                name: 'Italian Pasta Primavera',
                image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=300',
                description: 'Fresh pasta with seasonal vegetables',
                suggestedPrice: 450,
                category: 'fine-dining',
                subcategory: 'italian',
                variants: ['Regular', 'Large'],
                isSelected: false,
                isPopular: true
            },
            {
                id: 'chicken-continental-001',
                name: 'Grilled Chicken Continental',
                image: 'https://images.unsplash.com/photo-1532636618209-8da5c4bf2c5a?w=300',
                description: 'Herb-grilled chicken with vegetables',
                suggestedPrice: 680,
                category: 'fine-dining',
                subcategory: 'continental',
                variants: ['Half', 'Full'],
                isSelected: false,
                isPopular: true
            },
            {
                id: 'fish-curry-001',
                name: 'Goan Fish Curry',
                image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=300',
                description: 'Authentic Goan fish curry with coconut',
                suggestedPrice: 550,
                category: 'fine-dining',
                subcategory: 'indian',
                variants: ['Regular', 'Large'],
                isSelected: false,
                isPopular: true
            }
        ],
        'casual-dining': [
            {
                id: 'pizza-margherita-001',
                name: 'Margherita Pizza',
                image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=300',
                description: 'Classic margherita with fresh basil',
                suggestedPrice: 320,
                category: 'casual-dining',
                subcategory: 'pizza',
                variants: ['Small', 'Medium', 'Large'],
                isSelected: false,
                isPopular: true
            },
            {
                id: 'burger-chicken-001',
                name: 'Chicken Burger',
                image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300',
                description: 'Juicy chicken burger with fries',
                suggestedPrice: 280,
                category: 'casual-dining',
                subcategory: 'burgers',
                variants: ['Regular', 'Large', 'Combo'],
                isSelected: false,
                isPopular: true
            },
            {
                id: 'sandwich-club-001',
                name: 'Club Sandwich',
                image: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?w=300',
                description: 'Triple layer club sandwich with fries',
                suggestedPrice: 220,
                category: 'casual-dining',
                subcategory: 'sandwiches',
                variants: ['Veg', 'Chicken', 'Turkey'],
                isSelected: false,
                isPopular: true
            }
        ],
        'cafes': [
            {
                id: 'cappuccino-001',
                name: 'Cappuccino',
                image: 'https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=300',
                description: 'Rich cappuccino with perfect foam art',
                suggestedPrice: 120,
                category: 'cafes',
                subcategory: 'coffee',
                variants: ['Regular', 'Large', 'Decaf'],
                isSelected: false,
                isPopular: true
            },
            {
                id: 'croissant-001',
                name: 'Butter Croissant',
                image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=300',
                description: 'Flaky butter croissant, freshly baked',
                suggestedPrice: 80,
                category: 'cafes',
                subcategory: 'pastries',
                variants: ['Plain', 'Chocolate', 'Almond'],
                isSelected: false,
                isPopular: true
            }
        ]
    }
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
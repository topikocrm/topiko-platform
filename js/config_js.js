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
    { text: '{business} from {city} just set up their online store', status: 'Just Registered' },
    { text: '{business} in {city} started selling online', status: 'Now Live' },
    { text: '{business} from {city} launched their digital presence', status: 'Just Launched' },
    { text: '{business} in {city} joined our platform', status: 'New Member' },
    { text: '{business} from {city} completed their business setup', status: 'Setup Complete' },
    { text: '{business} in {city} is now accepting online orders', status: 'Orders Live' },
    { text: '{business} from {city} went digital today', status: 'Digital Launch' }
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

// If using ES6 modules (uncomment if needed):
// export {
//     SUPABASE_CONFIG, STEP_CONFIG, BUSINESS_CATEGORIES, SUBCATEGORY_NAMES,
//     MOTIVATIONAL_MESSAGE_TEMPLATES, INDIAN_BUSINESS_NAMES, INDIAN_CITIES,
//     FOMO_MESSAGE_TEMPLATES, THEME_CONFIG, GOAL_NAMES, LANGUAGE_CONFIG, DEFAULTS
// };

// For browser compatibility, attach to window object
if (typeof window !== 'undefined') {
    window.TopikoConfig = {
        SUPABASE_CONFIG,
        STEP_CONFIG,
        BUSINESS_CATEGORIES,
        SUBCATEGORY_NAMES,
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
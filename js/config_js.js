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

// ==========================================
// TOPIKO PRODUCTS DATABASE - ADDED
// ==========================================

const TOPIKO_PRODUCTS = {
  // Boutique & Fashion
  boutique: [
    { id: 'b001', name: 'Designer Kurti Set', price: 1299, category: 'boutique', subcategory: 'ethnic-wear', image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=300&h=300&fit=crop', description: 'Cotton blend designer kurti with palazzo' },
    { id: 'b002', name: 'Silk Saree', price: 2499, category: 'boutique', subcategory: 'ethnic-wear', image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=300&h=300&fit=crop', description: 'Pure silk saree with traditional motifs' },
    { id: 'b003', name: 'Cotton Dupatta', price: 599, category: 'boutique', subcategory: 'accessories', image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=300&h=300&fit=crop', description: 'Hand-block printed cotton duparta' },
    { id: 'b004', name: 'Lehenga Choli', price: 3499, category: 'boutique', subcategory: 'ethnic-wear', image: 'https://images.unsplash.com/photo-1583391733981-24c9fee3278d?w=300&h=300&fit=crop', description: 'Festive lehenga with embroidery' },
    { id: 'b005', name: 'Palazzo Pants', price: 899, category: 'boutique', subcategory: 'bottoms', image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=300&h=300&fit=crop', description: 'Comfortable palazzo pants in cotton' },
    { id: 'b006', name: 'Ethnic Jacket', price: 1599, category: 'boutique', subcategory: 'tops', image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=300&h=300&fit=crop', description: 'Indo-western jacket for men' },
    { id: 'b007', name: 'Handloom Shirt', price: 1199, category: 'boutique', subcategory: 'tops', image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=300&h=300&fit=crop', description: 'Handwoven cotton shirt' },
    { id: 'b008', name: 'Designer Blouse', price: 799, category: 'boutique', subcategory: 'tops', image: 'https://images.unsplash.com/photo-1583391733981-24c9fee3278d?w=300&h=300&fit=crop', description: 'Stylish blouse with mirror work' },
    { id: 'b009', name: 'Khadi Kurta', price: 999, category: 'boutique', subcategory: 'ethnic-wear', image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=300&h=300&fit=crop', description: 'Pure khadi kurta for men' },
    { id: 'b010', name: 'Bandhani Dupatta', price: 699, category: 'boutique', subcategory: 'accessories', image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=300&h=300&fit=crop', description: 'Traditional bandhani print dupatta' },
    { id: 'b011', name: 'Cotton Salwar', price: 649, category: 'boutique', subcategory: 'bottoms', image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=300&h=300&fit=crop', description: 'Comfortable cotton salwar' },
    { id: 'b012', name: 'Nehru Jacket', price: 1299, category: 'boutique', subcategory: 'ethnic-wear', image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=300&h=300&fit=crop', description: 'Classic Nehru jacket in silk' },
    { id: 'b013', name: 'Anarkali Suit', price: 1899, category: 'boutique', subcategory: 'ethnic-wear', image: 'https://images.unsplash.com/photo-1583391733981-24c9fee3278d?w=300&h=300&fit=crop', description: 'Flowing anarkali suit set' },
    { id: 'b014', name: 'Printed Scarf', price: 499, category: 'boutique', subcategory: 'accessories', image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=300&h=300&fit=crop', description: 'Silk printed scarf' },
    { id: 'b015', name: 'Dhoti Pants', price: 799, category: 'boutique', subcategory: 'bottoms', image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=300&h=300&fit=crop', description: 'Modern dhoti style pants' },
    { id: 'b016', name: 'Chanderi Saree', price: 2199, category: 'boutique', subcategory: 'ethnic-wear', image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=300&h=300&fit=crop', description: 'Elegant chanderi silk saree' },
    { id: 'b017', name: 'Block Print Kurta', price: 1099, category: 'boutique', subcategory: 'ethnic-wear', image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=300&h=300&fit=crop', description: 'Hand block printed cotton kurta' },
    { id: 'b018', name: 'Banarasi Dupatta', price: 1499, category: 'boutique', subcategory: 'accessories', image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=300&h=300&fit=crop', description: 'Banarasi silk dupatta with gold zari' },
    { id: 'b019', name: 'Indo Western Dress', price: 1699, category: 'boutique', subcategory: 'western-wear', image: 'https://images.unsplash.com/photo-1583391733981-24c9fee3278d?w=300&h=300&fit=crop', description: 'Fusion indo-western dress' },
    { id: 'b020', name: 'Chikan Work Kurti', price: 1399, category: 'boutique', subcategory: 'ethnic-wear', image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=300&h=300&fit=crop', description: 'Lucknowi chikan work kurti' }
  ],

  // Home Foods
  homefoods: [
    { id: 'hf001', name: 'Homemade Pickles Combo', price: 899, category: 'homefoods', subcategory: 'pickles', image: 'https://images.unsplash.com/photo-1589621316382-008455b857cd?w=300&h=300&fit=crop', description: 'Mango, lemon & garlic pickle set' },
    { id: 'hf002', name: 'Ghee (1kg)', price: 1299, category: 'homefoods', subcategory: 'dairy', image: 'https://images.unsplash.com/photo-1628088062854-d1870b4553da?w=300&h=300&fit=crop', description: 'Pure cow ghee made at home' },
    { id: 'hf003', name: 'Masala Powder Set', price: 649, category: 'homefoods', subcategory: 'spices', image: 'https://images.unsplash.com/photo-1596040033229-a292df4856fd?w=300&h=300&fit=crop', description: 'Garam masala, sambar, rasam powder' },
    { id: 'hf004', name: 'Homemade Sweets Box', price: 799, category: 'homefoods', subcategory: 'sweets', image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop', description: 'Mixed traditional sweets box' },
    { id: 'hf005', name: 'Organic Honey (500g)', price: 599, category: 'homefoods', subcategory: 'organic', image: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=300&h=300&fit=crop', description: 'Pure forest honey' },
    { id: 'hf006', name: 'Homemade Papad', price: 299, category: 'homefoods', subcategory: 'snacks', image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=300&h=300&fit=crop', description: 'Crispy urad dal papad pack' },
    { id: 'hf007', name: 'Fresh Paneer (500g)', price: 199, category: 'homefoods', subcategory: 'dairy', image: 'https://images.unsplash.com/photo-1628088062854-d1870b4553da?w=300&h=300&fit=crop', description: 'Soft homemade paneer' },
    { id: 'hf008', name: 'Murukku Variety Pack', price: 449, category: 'homefoods', subcategory: 'snacks', image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=300&h=300&fit=crop', description: 'Traditional South Indian murukku' },
    { id: 'hf009', name: 'Coconut Oil (1L)', price: 399, category: 'homefoods', subcategory: 'oil', image: 'https://images.unsplash.com/photo-1628088062854-d1870b4553da?w=300&h=300&fit=crop', description: 'Cold pressed coconut oil' },
    { id: 'hf010', name: 'Homemade Chutneys', price: 549, category: 'homefoods', subcategory: 'condiments', image: 'https://images.unsplash.com/photo-1589621316382-008455b857cd?w=300&h=300&fit=crop', description: 'Coconut, mint, tomato chutney set' },
    { id: 'hf011', name: 'Dry Fruits Mix (1kg)', price: 1999, category: 'homefoods', subcategory: 'dry-fruits', image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop', description: 'Premium mixed dry fruits' },
    { id: 'hf012', name: 'Homemade Jam Set', price: 699, category: 'homefoods', subcategory: 'spreads', image: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=300&h=300&fit=crop', description: 'Mango, strawberry, orange jam' },
    { id: 'hf013', name: 'Fresh Yogurt (1kg)', price: 149, category: 'homefoods', subcategory: 'dairy', image: 'https://images.unsplash.com/photo-1628088062854-d1870b4553da?w=300&h=300&fit=crop', description: 'Thick homemade yogurt' },
    { id: 'hf014', name: 'Organic Turmeric Powder', price: 299, category: 'homefoods', subcategory: 'spices', image: 'https://images.unsplash.com/photo-1596040033229-a292df4856fd?w=300&h=300&fit=crop', description: 'Pure turmeric powder 500g' },
    { id: 'hf015', name: 'Homemade Appalam', price: 199, category: 'homefoods', subcategory: 'snacks', image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=300&h=300&fit=crop', description: 'Traditional rice appalam pack' },
    { id: 'hf016', name: 'Sesame Oil (500ml)', price: 349, category: 'homefoods', subcategory: 'oil', image: 'https://images.unsplash.com/photo-1628088062854-d1870b4553da?w=300&h=300&fit=crop', description: 'Cold pressed sesame oil' },
    { id: 'hf017', name: 'Homemade Laddu', price: 599, category: 'homefoods', subcategory: 'sweets', image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop', description: 'Besan and coconut laddu box' },
    { id: 'hf018', name: 'Organic Jaggery (1kg)', price: 299, category: 'homefoods', subcategory: 'sweeteners', image: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=300&h=300&fit=crop', description: 'Pure organic jaggery blocks' },
    { id: 'hf019', name: 'Homemade Vadagam', price: 249, category: 'homefoods', subcategory: 'condiments', image: 'https://images.unsplash.com/photo-1589621316382-008455b857cd?w=300&h=300&fit=crop', description: 'Sun-dried vadagam for curries' },
    { id: 'hf020', name: 'Fresh Butter (500g)', price: 399, category: 'homefoods', subcategory: 'dairy', image: 'https://images.unsplash.com/photo-1628088062854-d1870b4553da?w=300&h=300&fit=crop', description: 'Creamy homemade butter' }
  ],

  // Grocery & Provisions
  grocery: [
    { id: 'g001', name: 'Basmati Rice (5kg)', price: 899, category: 'grocery', subcategory: 'grains', image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=300&h=300&fit=crop', description: 'Premium aged basmati rice' },
    { id: 'g002', name: 'Atta Whole Wheat (10kg)', price: 649, category: 'grocery', subcategory: 'flour', image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=300&h=300&fit=crop', description: 'Fresh ground wheat flour' },
    { id: 'g003', name: 'Moong Dal (1kg)', price: 199, category: 'grocery', subcategory: 'pulses', image: 'https://images.unsplash.com/photo-1596040033229-a292df4856fd?w=300&h=300&fit=crop', description: 'Premium quality moong dal' },
    { id: 'g004', name: 'Toor Dal (1kg)', price: 179, category: 'grocery', subcategory: 'pulses', image: 'https://images.unsplash.com/photo-1596040033229-a292df4856fd?w=300&h=300&fit=crop', description: 'Yellow toor dal' },
    { id: 'g005', name: 'Mustard Oil (1L)', price: 199, category: 'grocery', subcategory: 'oil', image: 'https://images.unsplash.com/photo-1628088062854-d1870b4553da?w=300&h=300&fit=crop', description: 'Pure mustard cooking oil' },
    { id: 'g006', name: 'Refined Sugar (1kg)', price: 59, category: 'grocery', subcategory: 'sweeteners', image: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=300&h=300&fit=crop', description: 'White refined sugar' },
    { id: 'g007', name: 'Rock Salt (1kg)', price: 49, category: 'grocery', subcategory: 'salt', image: 'https://images.unsplash.com/photo-1596040033229-a292df4856fd?w=300&h=300&fit=crop', description: 'Natural rock salt' },
    { id: 'g008', name: 'Tea Powder (500g)', price: 299, category: 'grocery', subcategory: 'beverages', image: 'https://images.unsplash.com/photo-1597318130004-412c361b9b00?w=300&h=300&fit=crop', description: 'Premium CTC tea powder' },
    { id: 'g009', name: 'Coffee Powder (500g)', price: 399, category: 'grocery', subcategory: 'beverages', image: 'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=300&h=300&fit=crop', description: 'Filter coffee powder blend' },
    { id: 'g010', name: 'Chana Dal (1kg)', price: 149, category: 'grocery', subcategory: 'pulses', image: 'https://images.unsplash.com/photo-1596040033229-a292df4856fd?w=300&h=300&fit=crop', description: 'Split chickpea lentils' }
  ],

  // Electronics & Gadgets
  electronics: [
    { id: 'e001', name: 'Bluetooth Earphones', price: 1299, category: 'electronics', subcategory: 'audio', image: 'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=300&h=300&fit=crop', description: 'Wireless bluetooth earphones with mic' },
    { id: 'e002', name: 'Power Bank 10000mAh', price: 1199, category: 'electronics', subcategory: 'accessories', image: 'https://images.unsplash.com/photo-1609592806074-8997bb81d694?w=300&h=300&fit=crop', description: 'Fast charging power bank' },
    { id: 'e003', name: 'Phone Case & Screen Guard', price: 599, category: 'electronics', subcategory: 'accessories', image: 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=300&h=300&fit=crop', description: 'Protective case with tempered glass' },
    { id: 'e004', name: 'USB Cable Set', price: 399, category: 'electronics', subcategory: 'accessories', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=300&fit=crop', description: 'Multi-connector charging cables' },
    { id: 'e005', name: 'Bluetooth Speaker', price: 1599, category: 'electronics', subcategory: 'audio', image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=300&h=300&fit=crop', description: 'Portable wireless speaker' },
    { id: 'e006', name: 'Smart Watch', price: 2499, category: 'electronics', subcategory: 'wearables', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=300&fit=crop', description: 'Fitness tracking smart watch' },
    { id: 'e007', name: 'Wireless Mouse', price: 899, category: 'electronics', subcategory: 'computer', image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=300&h=300&fit=crop', description: 'Ergonomic wireless mouse' },
    { id: 'e008', name: 'Keyboard Cover', price: 299, category: 'electronics', subcategory: 'computer', image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=300&h=300&fit=crop', description: 'Silicone keyboard protector' },
    { id: 'e009', name: 'Phone Stand', price: 199, category: 'electronics', subcategory: 'accessories', image: 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=300&h=300&fit=crop', description: 'Adjustable mobile phone stand' },
    { id: 'e010', name: 'Car Charger', price: 499, category: 'electronics', subcategory: 'automotive', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=300&fit=crop', description: 'Dual USB car charger' }
  ],

  // Fitness & Wellness
  fitness: [
    { id: 'f001', name: 'Yoga Mat', price: 899, category: 'fitness', subcategory: 'exercise', image: 'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=300&h=300&fit=crop', description: 'Non-slip yoga mat with carry bag' },
    { id: 'f002', name: 'Resistance Bands Set', price: 699, category: 'fitness', subcategory: 'exercise', image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=300&fit=crop', description: 'Multi-resistance exercise bands' },
    { id: 'f003', name: 'Dumbbells (5kg pair)', price: 1299, category: 'fitness', subcategory: 'weights', image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=300&fit=crop', description: 'Rubber coated dumbbells' },
    { id: 'f004', name: 'Protein Powder (1kg)', price: 2199, category: 'fitness', subcategory: 'nutrition', image: 'https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=300&h=300&fit=crop', description: 'Whey protein isolate' },
    { id: 'f005', name: 'Gym Gloves', price: 399, category: 'fitness', subcategory: 'accessories', image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=300&fit=crop', description: 'Breathable workout gloves' },
    { id: 'f006', name: 'Skipping Rope', price: 299, category: 'fitness', subcategory: 'cardio', image: 'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=300&h=300&fit=crop', description: 'Adjustable speed skipping rope' },
    { id: 'f007', name: 'Ab Roller', price: 599, category: 'fitness', subcategory: 'exercise', image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=300&fit=crop', description: 'Core strengthening ab wheel' },
    { id: 'f008', name: 'Gym Bag', price: 1199, category: 'fitness', subcategory: 'accessories', image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=300&fit=crop', description: 'Waterproof gym duffle bag' },
    { id: 'f009', name: 'Sports Water Bottle', price: 449, category: 'fitness', subcategory: 'accessories', image: 'https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=300&h=300&fit=crop', description: 'Insulated steel water bottle' },
    { id: 'f010', name: 'Push-up Bars', price: 499, category: 'fitness', subcategory: 'exercise', image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=300&fit=crop', description: 'Ergonomic push-up handles' }
  ],

  // Restaurant & Food
  restaurant: [
    { id: 'r001', name: 'Thali Meal', price: 199, category: 'restaurant', subcategory: 'main-course', image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=300&h=300&fit=crop', description: 'Complete Indian thali with rice, dal, sabzi' },
    { id: 'r002', name: 'Biryani (Chicken)', price: 299, category: 'restaurant', subcategory: 'main-course', image: 'https://images.unsplash.com/photo-1563379091339-03246963d296?w=300&h=300&fit=crop', description: 'Aromatic chicken biryani with raita' },
    { id: 'r003', name: 'Masala Dosa', price: 149, category: 'restaurant', subcategory: 'south-indian', image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=300&h=300&fit=crop', description: 'Crispy dosa with potato masala' },
    { id: 'r004', name: 'Paneer Butter Masala', price: 239, category: 'restaurant', subcategory: 'main-course', image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=300&h=300&fit=crop', description: 'Rich paneer curry with naan' },
    { id: 'r005', name: 'Chole Bhature', price: 179, category: 'restaurant', subcategory: 'north-indian', image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=300&h=300&fit=crop', description: 'Spicy chickpea curry with bhature' },
    { id: 'r006', name: 'Idli Sambar (4 pcs)', price: 99, category: 'restaurant', subcategory: 'south-indian', image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=300&h=300&fit=crop', description: 'Steamed rice cakes with sambar' },
    { id: 'r007', name: 'Chicken Curry', price: 269, category: 'restaurant', subcategory: 'main-course', image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=300&h=300&fit=crop', description: 'Traditional chicken curry with rice' },
    { id: 'r008', name: 'Vada Pav', price: 49, category: 'restaurant', subcategory: 'street-food', image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=300&h=300&fit=crop', description: 'Mumbai style vada pav with chutney' },
    { id: 'r009', name: 'Pav Bhaji', price: 129, category: 'restaurant', subcategory: 'street-food', image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=300&h=300&fit=crop', description: 'Spicy bhaji with buttered pav' },
    { id: 'r010', name: 'Dal Tadka', price: 159, category: 'restaurant', subcategory: 'main-course', image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=300&h=300&fit=crop', description: 'Tempered yellow lentil curry' }
  ]
};

// Product categories for filtering
const PRODUCT_CATEGORIES = {
  boutique: { name: 'Boutique & Fashion', subcategories: ['ethnic-wear', 'western-wear', 'accessories', 'tops', 'bottoms'] },
  homefoods: { name: 'Home Foods', subcategories: ['pickles', 'dairy', 'spices', 'sweets', 'organic', 'snacks', 'condiments'] },
  grocery: { name: 'Grocery & Provisions', subcategories: ['grains', 'flour', 'pulses', 'oil', 'sweeteners', 'beverages', 'salt'] },
  electronics: { name: 'Electronics & Gadgets', subcategories: ['audio', 'accessories', 'computer', 'wearables', 'lighting', 'home-appliances'] },
  fitness: { name: 'Fitness & Wellness', subcategories: ['exercise', 'weights', 'nutrition', 'accessories', 'cardio', 'yoga', 'recovery'] },
  restaurant: { name: 'Restaurant & Food', subcategories: ['main-course', 'south-indian', 'north-indian', 'street-food', 'snacks', 'breakfast'] }
};

// Utility functions for product management
const getAllProducts = () => Object.values(TOPIKO_PRODUCTS).flat();
const getProductsByCategory = (category) => TOPIKO_PRODUCTS[category] || [];
const searchProducts = (query) => {
  const allProducts = getAllProducts();
  return allProducts.filter(product => 
    product.name.toLowerCase().includes(query.toLowerCase()) ||
    product.description.toLowerCase().includes(query.toLowerCase())
  );
};
const filterProductsByPrice = (products, minPrice, maxPrice) => {
  return products.filter(product => product.price >= minPrice && product.price <= maxPrice);
};

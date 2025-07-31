/* ========================================
   TOPIKO CONFIGURATION - WITH NAVIGATION TRACKING
   ======================================== */

window.TopikoConfig = {
    
    // ========================================
    // SUPABASE CONFIGURATION
    // ========================================
    
    SUPABASE: {
        URL: 'YOUR_SUPABASE_URL_HERE',
        ANON_KEY: 'YOUR_SUPABASE_ANON_KEY_HERE'
    },
    
    // ========================================
    // DEFAULT VALUES
    // ========================================
    
    DEFAULTS: {
        OTP_DEFAULT: '1234',
        LANGUAGE: 'en',
        LEAD_SCORE_MIN: 0,
        LEAD_SCORE_MAX: 100
    },
    
    // ========================================
    // LANGUAGE CONFIGURATION
    // ========================================
    
    LANGUAGE_CONFIG: {
        'en': 'English',
        'hi': 'हिन्दी',
        'te': 'తెలుగు',
        'ta': 'தமிழ்'
    },
    
    // ========================================
    // GOAL CONFIGURATION
    // ========================================
    
    GOAL_NAMES: {
        'ecommerce': 'Sell Online (E-commerce)',
        'customers': 'Reach More Customers',
        'manage': 'Manage Customers',
        'search': 'Appear in Search Results',
        'brand': 'Establish my Brand'
    },
    
    // ========================================
    // THEME CONFIGURATION
    // ========================================
    
    THEME_CONFIG: {
        'modern': {
            name: 'Modern & Minimalist',
            description: 'Clean, simple design that focuses on your products',
            primaryColor: '#6366f1',
            secondaryColor: '#e5e7eb'
        },
        'vibrant': {
            name: 'Colorful & Vibrant',
            description: 'Bold colors and energetic design to attract customers',
            primaryColor: '#f59e0b',
            secondaryColor: '#fef3c7'
        },
        'professional': {
            name: 'Professional & Corporate',
            description: 'Sophisticated design that builds trust and credibility',
            primaryColor: '#1e293b',
            secondaryColor: '#334155'
        },
        'traditional': {
            name: 'Traditional & Classic',
            description: 'Timeless design with warm, welcoming feel',
            primaryColor: '#92400e',
            secondaryColor: '#fef7cd'
        },
        'creative': {
            name: 'Creative & Artistic',
            description: 'Unique, artistic design that showcases creativity',
            primaryColor: '#7c3aed',
            secondaryColor: '#ddd6fe'
        },
        'luxury': {
            name: 'Elegant & Luxury',
            description: 'Premium design for high-end products and services',
            primaryColor: '#1c1917',
            secondaryColor: '#d6d3d1'
        }
    },
    
    // ========================================
    // NEW: PAGE NAVIGATION CONFIGURATION
    // ========================================
    
    PAGE_NAVIGATION: {
        // Page names mapping for consistency
        PAGES: {
            'welcome': 'Welcome Screen',
            'language': 'Language Selection', 
            'goals': 'Business Goals',
            'registration': 'Registration Form',
            'qualifying-questions': 'Qualifying Questions',
            'categories': 'Category Selection',
            'products': 'Product Selection',
            'themes': 'Theme Selection',
            'completion': 'Completion Screen'
        },
        
        // Navigation types
        NAVIGATION_TYPES: {
            FORWARD: 'forward',
            BACK: 'back', 
            DIRECT_CLICK: 'direct_click',
            REFRESH: 'refresh',
            INITIAL_LOAD: 'initial_load',
            PAGE_EXIT: 'page_exit'
        },
        
        // Tracking configuration
        TRACKING_CONFIG: {
            BATCH_SIZE: 10, // Number of events to batch before sending
            RETRY_ATTEMPTS: 3,
            RETRY_DELAY: 1000, // ms
            OFFLINE_STORAGE_KEY: 'topiko_navigation_queue',
            SESSION_STORAGE_KEY: 'topiko_session_id',
            MAX_PAGE_DATA_SIZE: 5000, // bytes
            MIN_TIME_THRESHOLD: 1 // minimum seconds to track
        },
        
        // Debug settings
        DEBUG: {
            ENABLED: true,
            LOG_LEVEL: 'info', // 'error', 'warn', 'info', 'debug'
            TRACK_CONSOLE_ERRORS: true
        }
    },
    
    // NEW: Page-specific data collection rules
    PAGE_DATA_COLLECTION: {
        'language': ['selectedLanguage'],
        'goals': ['selectedGoals', 'goalsCount'],
        'registration': ['formProgress', 'userName', 'businessName', 'email', 'businessType', 'category'],
        'qualifying-questions': ['qualifyingAnswers', 'answersComplete'],
        'categories': ['selectedCategories', 'selectedSubcategories', 'categoriesCount', 'subcategoriesCount'],
        'products': ['selectedProducts', 'customProducts', 'productsCount'],
        'themes': ['selectedTheme'],
        'completion': ['leadScore', 'completionType']
    },
    
    // NEW: Analytics configuration
    ANALYTICS: {
        CRITICAL_PAGES: ['registration', 'qualifying-questions', 'completion'],
        DROP_OFF_TRACKING: true,
        TIME_TRACKING: true,
        INTERACTION_TRACKING: true
    },
    
    // ========================================
    // BUSINESS CATEGORIES CONFIGURATION
    // ========================================
    
    BUSINESS_CATEGORIES: {
        'boutique': {
            name: 'Boutique & Fashion',
            icon: '🏪',
            categories: {
                'womens-clothing': {
                    name: 'Women\'s Clothing',
                    icon: '👗',
                    subcategories: ['sarees', 'kurti-sets', 'western-wear', 'ethnic-wear', 'accessories']
                },
                'mens-clothing': {
                    name: 'Men\'s Clothing',
                    icon: '👔',
                    subcategories: ['shirts', 'pants', 'kurtas', 'traditional-wear', 'accessories']
                },
                'kids-clothing': {
                    name: 'Kids Clothing',
                    icon: '👶',
                    subcategories: ['boys-wear', 'girls-wear', 'baby-clothes', 'school-uniforms', 'party-wear']
                }
            }
        },
        
        'home-foods': {
            name: 'Home Foods & Catering',
            icon: '🍛',
            categories: {
                'home-meals': {
                    name: 'Home-made Meals',
                    icon: '🍽️',
                    subcategories: ['daily-meals', 'tiffin-service', 'special-occasions', 'diet-meals', 'regional-cuisine']
                },
                'snacks-sweets': {
                    name: 'Snacks & Sweets',
                    icon: '🍰',
                    subcategories: ['traditional-sweets', 'namkeens', 'festival-specials', 'healthy-snacks', 'bakery-items']
                },
                'catering': {
                    name: 'Catering Services',
                    icon: '🎉',
                    subcategories: ['party-catering', 'wedding-catering', 'corporate-catering', 'bulk-orders', 'event-management']
                }
            }
        },
        
        'grocery': {
            name: 'Grocery & Provisions',
            icon: '🛒',
            categories: {
                'fresh-produce': {
                    name: 'Fresh Produce',
                    icon: '🥬',
                    subcategories: ['vegetables', 'fruits', 'herbs-spices', 'dairy-products', 'meat-fish']
                },
                'packaged-goods': {
                    name: 'Packaged Goods',
                    icon: '📦',
                    subcategories: ['rice-grains', 'pulses-lentils', 'oils-ghee', 'ready-to-cook', 'beverages']
                },
                'household': {
                    name: 'Household Items',
                    icon: '🧽',
                    subcategories: ['cleaning-supplies', 'personal-care', 'kitchen-utensils', 'storage-containers', 'disposables']
                }
            }
        },
        
        'electronics': {
            name: 'Electronics & Gadgets',
            icon: '📱',
            categories: {
                'mobile-accessories': {
                    name: 'Mobile & Accessories',
                    icon: '📱',
                    subcategories: ['smartphones', 'cases-covers', 'chargers-cables', 'headphones', 'power-banks']
                },
                'home-appliances': {
                    name: 'Home Appliances',
                    icon: '🏠',
                    subcategories: ['kitchen-appliances', 'fans-coolers', 'lighting', 'small-appliances', 'home-automation']
                },
                'computers': {
                    name: 'Computers & Tech',
                    icon: '💻',
                    subcategories: ['laptops-desktops', 'computer-accessories', 'software', 'networking', 'gaming']
                }
            }
        },
        
        'fitness': {
            name: 'Fitness & Wellness',
            icon: '💪',
            categories: {
                'fitness-equipment': {
                    name: 'Fitness Equipment',
                    icon: '🏋️',
                    subcategories: ['home-gym', 'cardio-equipment', 'weights', 'yoga-accessories', 'sports-gear']
                },
                'wellness-products': {
                    name: 'Wellness Products',
                    icon: '🌿',
                    subcategories: ['supplements', 'organic-products', 'ayurvedic', 'aromatherapy', 'meditation']
                },
                'fitness-services': {
                    name: 'Fitness Services',
                    icon: '🧘',
                    subcategories: ['personal-training', 'yoga-classes', 'diet-consultation', 'wellness-coaching', 'group-classes']
                }
            }
        },
        
        'restaurant': {
            name: 'Restaurant & Food',
            icon: '🍽️',
            categories: {
                'quick-bites': {
                    name: 'Quick Bites',
                    icon: '🍕',
                    subcategories: ['street-food', 'fast-food', 'sandwiches', 'wraps', 'beverages']
                },
                'full-meals': {
                    name: 'Full Meals',
                    icon: '🍛',
                    subcategories: ['north-indian', 'south-indian', 'chinese', 'continental', 'regional-specials']
                },
                'desserts': {
                    name: 'Desserts & Sweets',
                    icon: '🍰',
                    subcategories: ['ice-cream', 'cakes', 'traditional-sweets', 'pastries', 'cold-drinks']
                }
            }
        }
    },
    
    // ========================================
    // SUBCATEGORY NAMES
    // ========================================
    
    SUBCATEGORY_NAMES: {
        // Boutique & Fashion
        'sarees': 'Sarees',
        'kurti-sets': 'Kurti Sets',
        'western-wear': 'Western Wear',
        'ethnic-wear': 'Ethnic Wear',
        'shirts': 'Shirts',
        'pants': 'Pants',
        'kurtas': 'Kurtas',
        'traditional-wear': 'Traditional Wear',
        'boys-wear': 'Boys Wear',
        'girls-wear': 'Girls Wear',
        'baby-clothes': 'Baby Clothes',
        'school-uniforms': 'School Uniforms',
        'party-wear': 'Party Wear',
        'accessories': 'Accessories',
        
        // Home Foods & Catering
        'daily-meals': 'Daily Meals',
        'tiffin-service': 'Tiffin Service',
        'special-occasions': 'Special Occasions',
        'diet-meals': 'Diet Meals',
        'regional-cuisine': 'Regional Cuisine',
        'traditional-sweets': 'Traditional Sweets',
        'namkeens': 'Namkeens',
        'festival-specials': 'Festival Specials',
        'healthy-snacks': 'Healthy Snacks',
        'bakery-items': 'Bakery Items',
        'party-catering': 'Party Catering',
        'wedding-catering': 'Wedding Catering',
        'corporate-catering': 'Corporate Catering',
        'bulk-orders': 'Bulk Orders',
        'event-management': 'Event Management',
        
        // Grocery & Provisions
        'vegetables': 'Vegetables',
        'fruits': 'Fruits',
        'herbs-spices': 'Herbs & Spices',
        'dairy-products': 'Dairy Products',
        'meat-fish': 'Meat & Fish',
        'rice-grains': 'Rice & Grains',
        'pulses-lentils': 'Pulses & Lentils',
        'oils-ghee': 'Oils & Ghee',
        'ready-to-cook': 'Ready to Cook',
        'beverages': 'Beverages',
        'cleaning-supplies': 'Cleaning Supplies',
        'personal-care': 'Personal Care',
        'kitchen-utensils': 'Kitchen Utensils',
        'storage-containers': 'Storage Containers',
        'disposables': 'Disposables',
        
        // Electronics & Gadgets
        'smartphones': 'Smartphones',
        'cases-covers': 'Cases & Covers',
        'chargers-cables': 'Chargers & Cables',
        'headphones': 'Headphones',
        'power-banks': 'Power Banks',
        'kitchen-appliances': 'Kitchen Appliances',
        'fans-coolers': 'Fans & Coolers',
        'lighting': 'Lighting',
        'small-appliances': 'Small Appliances',
        'home-automation': 'Home Automation',
        'laptops-desktops': 'Laptops & Desktops',
        'computer-accessories': 'Computer Accessories',
        'software': 'Software',
        'networking': 'Networking',
        'gaming': 'Gaming',
        
        // Fitness & Wellness
        'home-gym': 'Home Gym',
        'cardio-equipment': 'Cardio Equipment',
        'weights': 'Weights',
        'yoga-accessories': 'Yoga Accessories',
        'sports-gear': 'Sports Gear',
        'supplements': 'Supplements',
        'organic-products': 'Organic Products',
        'ayurvedic': 'Ayurvedic',
        'aromatherapy': 'Aromatherapy',
        'meditation': 'Meditation',
        'personal-training': 'Personal Training',
        'yoga-classes': 'Yoga Classes',
        'diet-consultation': 'Diet Consultation',
        'wellness-coaching': 'Wellness Coaching',
        'group-classes': 'Group Classes',
        
        // Restaurant & Food
        'street-food': 'Street Food',
        'fast-food': 'Fast Food',
        'sandwiches': 'Sandwiches',
        'wraps': 'Wraps',
        'north-indian': 'North Indian',
        'south-indian': 'South Indian',
        'chinese': 'Chinese',
        'continental': 'Continental',
        'regional-specials': 'Regional Specials',
        'ice-cream': 'Ice Cream',
        'cakes': 'Cakes',
        'pastries': 'Pastries',
        'cold-drinks': 'Cold Drinks'
    },
    
    // ========================================
    // SPECIAL OFFERS CONFIGURATION
    // ========================================
    
    SPECIAL_OFFERS: [
        {
            id: 'offer-logo-design',
            title: 'Free Professional Logo Design',
            description: 'Get a custom logo designed by our professional team (worth ₹5,000)',
            value: 5000,
            category: 'design'
        },
        {
            id: 'offer-seo-setup',
            title: 'Free SEO Setup & Optimization',
            description: 'Complete SEO setup to get your business found on Google (worth ₹8,000)',
            value: 8000,
            category: 'marketing'
        },
        {
            id: 'offer-social-media',
            title: 'Free Social Media Setup',
            description: 'Professional Facebook and Instagram business pages setup (worth ₹3,000)',
            value: 3000,
            category: 'social'
        },
        {
            id: 'offer-google-business',
            title: 'Free Google My Business Setup',
            description: 'Complete Google My Business profile with optimization (worth ₹2,500)',
            value: 2500,
            category: 'local'
        },
        {
            id: 'offer-training-session',
            title: 'Free 1-Hour Training Session',
            description: 'Learn how to manage your online business effectively (worth ₹1,500)',
            value: 1500,
            category: 'training'
        },
        {
            id: 'offer-content-creation',
            title: 'Free Product Photography',
            description: '10 professional product photos for your online store (worth ₹4,000)',
            value: 4000,
            category: 'content'
        }
    ],
    
    // ========================================
    // PRODUCTS DATABASE (SAMPLE)
    // ========================================
    
    INDIAN_PRODUCTS_DB: {
        'boutique': {
            'womens-clothing': [
                {
                    id: 'saree-001',
                    name: 'Silk Saree',
                    description: 'Beautiful handwoven silk saree with golden border',
                    suggestedPrice: 2500,
                    category: 'womens-clothing',
                    subcategory: 'sarees',
                    variants: ['Red', 'Blue', 'Green'],
                    image: 'https://via.placeholder.com/300x200?text=Silk+Saree',
                    isPopular: true
                },
                {
                    id: 'kurti-001',
                    name: 'Cotton Kurti Set',
                    description: 'Comfortable cotton kurti with matching dupatta',
                    suggestedPrice: 899,
                    category: 'womens-clothing',
                    subcategory: 'kurti-sets',
                    variants: ['S', 'M', 'L', 'XL'],
                    image: 'https://via.placeholder.com/300x200?text=Cotton+Kurti',
                    isPopular: false
                }
            ],
            'mens-clothing': [
                {
                    id: 'shirt-001',
                    name: 'Formal Shirt',
                    description: 'Premium cotton formal shirt for office wear',
                    suggestedPrice: 1299,
                    category: 'mens-clothing',
                    subcategory: 'shirts',
                    variants: ['S', 'M', 'L', 'XL', 'XXL'],
                    image: 'https://via.placeholder.com/300x200?text=Formal+Shirt',
                    isPopular: true
                }
            ]
        },
        
        'home-foods': {
            'home-meals': [
                {
                    id: 'meal-001',
                    name: 'Home-style Dal Rice',
                    description: 'Fresh dal, rice, vegetable curry and pickle',
                    suggestedPrice: 120,
                    category: 'home-meals',
                    subcategory: 'daily-meals',
                    variants: ['Regular', 'Large'],
                    image: 'https://via.placeholder.com/300x200?text=Dal+Rice',
                    isPopular: true
                }
            ],
            'snacks-sweets': [
                {
                    id: 'sweet-001',
                    name: 'Homemade Laddu',
                    description: 'Traditional besan laddu made with pure ghee',
                    suggestedPrice: 350,
                    category: 'snacks-sweets',
                    subcategory: 'traditional-sweets',
                    variants: ['250g', '500g', '1kg'],
                    image: 'https://via.placeholder.com/300x200?text=Besan+Laddu',
                    isPopular: false
                }
            ]
        },
        
        'grocery': {
            'fresh-produce': [
                {
                    id: 'veg-001',
                    name: 'Fresh Vegetables Combo',
                    description: 'Daily fresh vegetables - onion, tomato, potato, green vegetables',
                    suggestedPrice: 200,
                    category: 'fresh-produce',
                    subcategory: 'vegetables',
                    variants: ['2kg', '5kg', '10kg'],
                    image: 'https://via.placeholder.com/300x200?text=Fresh+Vegetables',
                    isPopular: true
                }
            ]
        },
        
        'electronics': {
            'mobile-accessories': [
                {
                    id: 'mobile-001',
                    name: 'Mobile Phone Case',
                    description: 'Durable phone case with screen protection',
                    suggestedPrice: 299,
                    category: 'mobile-accessories',
                    subcategory: 'cases-covers',
                    variants: ['iPhone', 'Samsung', 'OnePlus'],
                    image: 'https://via.placeholder.com/300x200?text=Phone+Case',
                    isPopular: true
                }
            ]
        },
        
        'fitness': {
            'fitness-equipment': [
                {
                    id: 'fitness-001',
                    name: 'Yoga Mat',
                    description: 'Non-slip yoga mat for home workouts',
                    suggestedPrice: 799,
                    category: 'fitness-equipment',
                    subcategory: 'yoga-accessories',
                    variants: ['Blue', 'Purple', 'Green'],
                    image: 'https://via.placeholder.com/300x200?text=Yoga+Mat',
                    isPopular: false
                }
            ]
        },
        
        'restaurant': {
            'quick-bites': [
                {
                    id: 'food-001',
                    name: 'Masala Dosa',
                    description: 'Crispy dosa with spiced potato filling and chutneys',
                    suggestedPrice: 80,
                    category: 'quick-bites',
                    subcategory: 'south-indian',
                    variants: ['Plain', 'Masala', 'Cheese'],
                    image: 'https://via.placeholder.com/300x200?text=Masala+Dosa',
                    isPopular: true
                }
            ]
        }
    },
    
    // ========================================
    // UTILITY FUNCTIONS
    // ========================================
    
    // Get popular products across all categories
    getPopularProducts: function(limit = 10) {
        const allProducts = [];
        
        Object.keys(this.INDIAN_PRODUCTS_DB).forEach(businessCategory => {
            Object.keys(this.INDIAN_PRODUCTS_DB[businessCategory]).forEach(category => {
                const products = this.INDIAN_PRODUCTS_DB[businessCategory][category];
                allProducts.push(...products);
            });
        });
        
        // Filter popular products and return limited set
        const popularProducts = allProducts.filter(product => product.isPopular);
        return popularProducts.slice(0, limit);
    },
    
    // Get products by category
    getProductsByCategory: function(businessCategory, categoryKey = null) {
        if (!this.INDIAN_PRODUCTS_DB[businessCategory]) {
            return [];
        }
        
        if (categoryKey && this.INDIAN_PRODUCTS_DB[businessCategory][categoryKey]) {
            return this.INDIAN_PRODUCTS_DB[businessCategory][categoryKey];
        }
        
        // Return all products from business category
        const allProducts = [];
        Object.keys(this.INDIAN_PRODUCTS_DB[businessCategory]).forEach(cat => {
            allProducts.push(...this.INDIAN_PRODUCTS_DB[businessCategory][cat]);
        });
        
        return allProducts;
    },
    
    // Get business category configuration
    getBusinessCategoryConfig: function(categoryKey) {
        return this.BUSINESS_CATEGORIES[categoryKey] || null;
    },
    
    // Get subcategory name
    getSubcategoryName: function(subcategoryKey) {
        return this.SUBCATEGORY_NAMES[subcategoryKey] || subcategoryKey.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase());
    }
};

// Export for debugging
console.log('🔧 TopikoConfig with Navigation Tracking loaded successfully');
console.log('📊 Navigation tracking configuration ready');
console.log('🎯 Analytics features enabled');

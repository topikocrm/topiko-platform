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
            {id: 'nehru-jacket-001', name: 'Nehru Jacket', image: 'https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=300', description: 'Traditional Nehru jacket for ethnic wear', suggestedPrice: 1699, category: 'mens-wear', subcategory: 'ethnic-wear', variants: ['S', 'M', 'L', 'XL'], isSelected: false, isPopular: false}
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
            {id: 'anarkali-suit-001', name: 'Anarkali Suit Set', image: 'https://images.unsplash.com/photo-1583391733975-4770270d3c5e?w=300', description: 'Graceful Anarkali suit with dupatta', suggestedPrice: 2199, category: 'womens-wear', subcategory: 'ethnic-wear', variants: ['S', 'M', 'L', 'XL'], isSelected: false, isPopular: true}
        ],
        'accessories': [
            {id: 'handbag-leather-001', name: 'Leather Handbag', image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300', description: 'Premium leather handbag for women', suggestedPrice: 2299, category: 'accessories', subcategory: 'bags', variants: ['Brown', 'Black', 'Tan'], isSelected: false, isPopular: true},
            {id: 'watch-analog-001', name: 'Analog Wrist Watch', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300', description: 'Stylish analog watch for everyday use', suggestedPrice: 1599, category: 'accessories', subcategory: 'watches', variants: ['Silver', 'Gold', 'Black'], isSelected: false, isPopular: true},
            {id: 'sunglasses-uv-001', name: 'UV Protection Sunglasses', image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=300', description: 'Stylish sunglasses with UV protection', suggestedPrice: 899, category: 'accessories', subcategory: 'sunglasses', variants: ['Black', 'Brown', 'Blue'], isSelected: false, isPopular: false},
            {id: 'wallet-leather-001', name: 'Genuine Leather Wallet', image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?w=300', description: 'Premium leather wallet with multiple card slots', suggestedPrice: 799, category: 'accessories', subcategory: 'wallets', variants: ['Brown', 'Black', 'Navy'], isSelected: false, isPopular: true},
            {id: 'scarf-silk-001', name: 'Silk Fashion Scarf', image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300', description: 'Elegant silk scarf for style', suggestedPrice: 599, category: 'accessories', subcategory: 'scarves', variants: ['Floral', 'Abstract', 'Solid'], isSelected: false, isPopular: true},
            {id: 'belt-leather-001', name: 'Leather Belt', image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?w=300', description: 'Classic leather belt for men and women', suggestedPrice: 699, category: 'accessories', subcategory: 'belts', variants: ['Black', 'Brown', 'Tan'], isSelected: false, isPopular: true}
        ],
        'footwear': [
            {id: 'shoes-formal-001', name: 'Formal Leather Shoes', image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=300', description: 'Premium leather formal shoes for men', suggestedPrice: 2999, category: 'footwear', subcategory: 'mens-shoes', variants: ['6', '7', '8', '9', '10', '11'], isSelected: false, isPopular: true},
            {id: 'sandals-women-001', name: 'Designer Women Sandals', image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=300', description: 'Comfortable designer sandals for women', suggestedPrice: 1499, category: 'footwear', subcategory: 'womens-shoes', variants: ['5', '6', '7', '8', '9'], isSelected: false, isPopular: true},
            {id: 'sneakers-sports-001', name: 'Sports Sneakers', image: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=300', description: 'Comfortable sports sneakers for running', suggestedPrice: 3499, category: 'footwear', subcategory: 'sneakers', variants: ['6', '7', '8', '9', '10', '11'], isSelected: false, isPopular: true},
            {id: 'chappals-leather-001', name: 'Traditional Leather Chappals', image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=300', description: 'Handcrafted leather chappals', suggestedPrice: 899, category: 'footwear', subcategory: 'ethnic-footwear', variants: ['6', '7', '8', '9', '10'], isSelected: false, isPopular: false},
            {id: 'heels-party-001', name: 'Party Wear Heels', image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=300', description: 'Elegant heels for special occasions', suggestedPrice: 1899, category: 'footwear', subcategory: 'womens-shoes', variants: ['5', '6', '7', '8', '9'], isSelected: false, isPopular: true},
            {id: 'boots-winter-001', name: 'Winter Boots', image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=300', description: 'Warm boots for winter season', suggestedPrice: 2199, category: 'footwear', subcategory: 'boots', variants: ['6', '7', '8', '9', '10'], isSelected: false, isPopular: false}
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
            {id: 'aloo-paratha-001', name: 'Aloo Paratha', image: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?w=300', description: 'Stuffed potato flatbread with curd', suggestedPrice: 120, category: 'north-indian', subcategory: 'rotis-parathas', variants: ['Single', 'Double'], isSelected: false, isPopular: true}
        ],
        'south-indian': [
            {id: 'masala-dosa-001', name: 'Masala Dosa', image: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=300', description: 'Crispy dosa with spiced potato filling', suggestedPrice: 120, category: 'south-indian', subcategory: 'dosas', variants: ['Regular', 'Large'], isSelected: false, isPopular: true},
            {id: 'idli-sambar-001', name: 'Idli with Sambar', image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=300', description: 'Steamed rice cakes with lentil curry', suggestedPrice: 80, category: 'south-indian', subcategory: 'idlis', variants: ['2 Pieces', '4 Pieces'], isSelected: false, isPopular: true},
            {id: 'vada-sambar-001', name: 'Medu Vada', image: 'https://images.unsplash.com/photo-1611270629569-8b357cb88da6?w=300', description: 'Crispy lentil donuts with sambar', suggestedPrice: 90, category: 'south-indian', subcategory: 'vadas', variants: ['2 Pieces', '4 Pieces'], isSelected: false, isPopular: true},
            {id: 'uttapam-onion-001', name: 'Onion Uttapam', image: 'https://images.unsplash.com/photo-1630383249896-424e482df921?w=300', description: 'Thick pancake with onion toppings', suggestedPrice: 110, category: 'south-indian', subcategory: 'uttapam', variants: ['Regular', 'Large'], isSelected: false, isPopular: false},
            {id: 'coconut-chutney-001', name: 'Coconut Chutney', image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=300', description: 'Fresh coconut chutney with spices', suggestedPrice: 40, category: 'south-indian', subcategory: 'chutneys', variants: ['Small', 'Medium'], isSelected: false, isPopular: true},
            {id: 'rava-upma-001', name: 'Rava Upma', image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=300', description: 'Traditional semolina breakfast dish', suggestedPrice: 70, category: 'south-indian', subcategory: 'breakfast', variants: ['Regular', 'Large'], isSelected: false, isPopular: false},
            {id: 'pongal-sweet-001', name: 'Sweet Pongal', image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=300', description: 'Traditional sweet rice dish', suggestedPrice: 90, category: 'south-indian', subcategory: 'desserts', variants: ['Regular', 'Large'], isSelected: false, isPopular: true}
        ],
        'sweets-desserts': [
            {id: 'gulab-jamun-001', name: 'Gulab Jamun', image: 'https://images.unsplash.com/photo-1571877277200-a0d98ea607e9?w=300', description: 'Soft milk dumplings in sugar syrup', suggestedPrice: 60, category: 'sweets-desserts', subcategory: 'traditional-sweets', variants: ['2 Pieces', '4 Pieces', '1 Kg'], isSelected: false, isPopular: true},
            {id: 'rasmalai-001', name: 'Rasmalai', image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=300', description: 'Soft cheese dumplings in flavored milk', suggestedPrice: 80, category: 'sweets-desserts', subcategory: 'traditional-sweets', variants: ['2 Pieces', '4 Pieces'], isSelected: false, isPopular: true},
            {id: 'chocolate-cake-001', name: 'Chocolate Cake', image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=300', description: 'Rich chocolate cake with ganache', suggestedPrice: 450, category: 'sweets-desserts', subcategory: 'cakes', variants: ['Slice', 'Half Kg', '1 Kg'], isSelected: false, isPopular: true},
            {id: 'kulfi-malai-001', name: 'Malai Kulfi', image: 'https://images.unsplash.com/photo-1571877277200-a0d98ea607e9?w=300', description: 'Traditional Indian ice cream', suggestedPrice: 50, category: 'sweets-desserts', subcategory: 'ice-creams', variants: ['Single', 'Double'], isSelected: false, isPopular: true},
            {id: 'kheer-rice-001', name: 'Rice Kheer', image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=300', description: 'Creamy rice pudding with nuts', suggestedPrice: 80, category: 'sweets-desserts', subcategory: 'traditional-sweets', variants: ['Small', 'Large'], isSelected: false, isPopular: true}
        ],
        'beverages': [
            {id: 'masala-chai-001', name: 'Masala Chai', image: 'https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=300', description: 'Traditional spiced tea with milk', suggestedPrice: 25, category: 'beverages', subcategory: 'tea', variants: ['Regular', 'Large'], isSelected: false, isPopular: true},
            {id: 'fresh-lime-001', name: 'Fresh Lime Water', image: 'https://images.unsplash.com/photo-1546173159-315724a31696?w=300', description: 'Refreshing lime water with mint', suggestedPrice: 40, category: 'beverages', subcategory: 'fresh-juices', variants: ['Sweet', 'Salt', 'Soda'], isSelected: false, isPopular: true},
            {id: 'mango-lassi-001', name: 'Mango Lassi', image: 'https://images.unsplash.com/photo-1553979459-d2229ba7433a?w=300', description: 'Creamy mango yogurt drink', suggestedPrice: 80, category: 'beverages', subcategory: 'lassi', variants: ['Regular', 'Large'], isSelected: false, isPopular: true},
            {id: 'filter-coffee-001', name: 'South Indian Filter Coffee', image: 'https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=300', description: 'Authentic filter coffee with chicory', suggestedPrice: 35, category: 'beverages', subcategory: 'coffee', variants: ['Regular', 'Strong'], isSelected: false, isPopular: true},
            {id: 'buttermilk-spiced-001', name: 'Spiced Buttermilk', image: 'https://images.unsplash.com/photo-1553979459-d2229ba7433a?w=300', description: 'Refreshing spiced buttermilk', suggestedPrice: 30, category: 'beverages', subcategory: 'traditional-drinks', variants: ['Regular', 'Large'], isSelected: false, isPopular: true}
        ]
    },

    salons: {
        'hair-services': [
            {id: 'haircut-men-001', name: 'Men\'s Haircut & Styling', image: 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=300', description: 'Professional haircut with styling', suggestedPrice: 300, category: 'hair-services', subcategory: 'haircuts', variants: ['Basic', 'Premium'], isSelected: false, isPopular: true},
            {id: 'haircut-women-001', name: 'Women\'s Haircut & Blow Dry', image: 'https://images.unsplash.com/photo-1562004760-acb5685654e8?w=300', description: 'Stylish haircut with professional blow dry', suggestedPrice: 800, category: 'hair-services', subcategory: 'haircuts', variants: ['Basic', 'Styled', 'Premium'], isSelected: false, isPopular: true},
            {id: 'hair-color-001', name: 'Hair Coloring Service', image: 'https://images.unsplash.com/photo-1634449571010-02389ed0f9b0?w=300', description: 'Professional hair coloring with premium products', suggestedPrice: 2500, category: 'hair-services', subcategory: 'hair-coloring', variants: ['Highlights', 'Full Color', 'Root Touch-up'], isSelected: false, isPopular: false},
            {id: 'keratin-treatment-001', name: 'Keratin Hair Treatment', image: 'https://images.unsplash.com/photo-1560869713-7d0954d92f5b?w=300', description: 'Smoothing keratin treatment for frizzy hair', suggestedPrice: 5000, category: 'hair-services', subcategory: 'keratin', variants: ['Basic', 'Premium'], isSelected: false, isPopular: false},
            {id: 'hair-spa-001', name: 'Hair Spa Treatment', image: 'https://images.unsplash.com/photo-1560869713-7d0954d92f5b?w=300', description: 'Nourishing hair spa for healthy hair', suggestedPrice: 1200, category: 'hair-services', subcategory: 'hair-treatments', variants: ['Basic', 'Premium'], isSelected: false, isPopular: true},
            {id: 'hair-straightening-001', name: 'Hair Straightening', image: 'https://images.unsplash.com/photo-1634449571010-02389ed0f9b0?w=300', description: 'Permanent hair straightening treatment', suggestedPrice: 4000, category: 'hair-services', subcategory: 'hair-styling', variants: ['Temporary', 'Permanent'], isSelected: false, isPopular: false}
        ],
        'beauty-services': [
            {id: 'facial-basic-001', name: 'Deep Cleansing Facial', image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=300', description: 'Deep cleansing facial for glowing skin', suggestedPrice: 1200, category: 'beauty-services', subcategory: 'facials', variants: ['Basic', 'Deluxe', 'Premium'], isSelected: false, isPopular: true},
            {id: 'bridal-makeup-001', name: 'Bridal Makeup Package', image: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=300', description: 'Complete bridal makeup with hair styling', suggestedPrice: 8000, category: 'beauty-services', subcategory: 'makeup', variants: ['Traditional', 'Modern', 'Premium'], isSelected: false, isPopular: true},
            {id: 'eyebrow-threading-001', name: 'Eyebrow Threading & Shaping', image: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=300', description: 'Professional eyebrow threading and shaping', suggestedPrice: 150, category: 'beauty-services', subcategory: 'eyebrow-threading', variants: ['Basic', 'Styled'], isSelected: false, isPopular: true},
            {id: 'manicure-pedicure-001', name: 'Manicure & Pedicure', image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=300', description: 'Complete nail care with polish', suggestedPrice: 800, category: 'beauty-services', subcategory: 'manicure', variants: ['Basic', 'Gel Polish', 'French'], isSelected: false, isPopular: true},
            {id: 'party-makeup-001', name: 'Party Makeup', image: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=300', description: 'Glamorous party makeup service', suggestedPrice: 2000, category: 'beauty-services', subcategory: 'makeup', variants: ['Light', 'Heavy', 'HD'], isSelected: false, isPopular: true},
            {id: 'waxing-full-body-001', name: 'Full Body Waxing', image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=300', description: 'Complete body waxing service', suggestedPrice: 2500, category: 'beauty-services', subcategory: 'waxing', variants: ['Arms & Legs', 'Full Body'], isSelected: false, isPopular: true}
        ],
        'spa-wellness': [
            {id: 'full-body-massage-001', name: 'Full Body Relaxation Massage', image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=300', description: 'Complete body massage for stress relief', suggestedPrice: 2500, category: 'spa-wellness', subcategory: 'massages', variants: ['60 min', '90 min', '120 min'], isSelected: false, isPopular: true},
            {id: 'aromatherapy-session-001', name: 'Aromatherapy Session', image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=300', description: 'Relaxing aromatherapy with essential oils', suggestedPrice: 1800, category: 'spa-wellness', subcategory: 'aromatherapy', variants: ['45 min', '60 min'], isSelected: false, isPopular: false},
            {id: 'head-massage-001', name: 'Head & Shoulder Massage', image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=300', description: 'Relaxing head and shoulder massage', suggestedPrice: 800, category: 'spa-wellness', subcategory: 'massages', variants: ['30 min', '45 min'], isSelected: false, isPopular: true}
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
            {id: 'spinach-fresh-001', name: 'Fresh Spinach', image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=300', description: 'Nutritious fresh spinach leaves', suggestedPrice: 30, category: 'fresh-produce', subcategory: 'vegetables', variants: ['250g', '500g'], isSelected: false, isPopular: true}
        ],
        'staples': [
            {id: 'rice-basmati-001', name: 'Basmati Rice', image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=300', description: 'Premium long grain basmati rice', suggestedPrice: 200, category: 'staples', subcategory: 'rice', variants: ['1kg', '5kg', '10kg'], isSelected: false, isPopular: true},
            {id: 'dal-toor-001', name: 'Toor Dal (Arhar)', image: 'https://images.unsplash.com/photo-1596097900113-bdf6c7ffaba6?w=300', description: 'High quality toor dal lentils', suggestedPrice: 140, category: 'staples', subcategory: 'pulses', variants: ['500g', '1kg', '2kg'], isSelected: false, isPopular: true},
            {id: 'oil-mustard-001', name: 'Mustard Oil', image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=300', description: 'Pure mustard oil for cooking', suggestedPrice: 180, category: 'staples', subcategory: 'oils', variants: ['500ml', '1L', '2L'], isSelected: false, isPopular: true},
            {id: 'wheat-flour-001', name: 'Whole Wheat Flour', image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=300', description: 'Fresh ground whole wheat flour', suggestedPrice: 50, category: 'staples', subcategory: 'flour', variants: ['1kg', '2kg', '5kg'], isSelected: false, isPopular: true},
            {id: 'sugar-white-001', name: 'White Sugar', image: 'https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=300', description: 'Pure white refined sugar', suggestedPrice: 45, category: 'staples', subcategory: 'sugar', variants: ['1kg', '2kg', '5kg'], isSelected: false, isPopular: true}
        ],
        'packaged-foods': [
            {id: 'biscuits-tea-001', name: 'Tea Time Biscuits', image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=300', description: 'Crispy biscuits perfect with tea', suggestedPrice: 40, category: 'packaged-foods', subcategory: 'snacks', variants: ['200g', '400g'], isSelected: false, isPopular: true},
            {id: 'milk-packets-001', name: 'Fresh Milk Packets', image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=300', description: 'Fresh full cream milk', suggestedPrice: 60, category: 'packaged-foods', subcategory: 'dairy', variants: ['500ml', '1L'], isSelected: false, isPopular: true},
            {id: 'bread-white-001', name: 'White Bread', image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=300', description: 'Fresh white bread loaf', suggestedPrice: 25, category: 'packaged-foods', subcategory: 'bakery', variants: ['Small', 'Large'], isSelected: false, isPopular: true}
        ]
    },

    electronics: {
        'mobile-devices': [
            {id: 'smartphone-android-001', name: 'Android Smartphone', image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300', description: 'Latest Android smartphone with dual camera', suggestedPrice: 15999, category: 'mobile-devices', subcategory: 'smartphones', variants: ['64GB', '128GB', '256GB'], isSelected: false, isPopular: true},
            {id: 'earphones-wireless-001', name: 'Wireless Earphones', image: 'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=300', description: 'Bluetooth wireless earphones with charging case', suggestedPrice: 2999, category: 'mobile-devices', subcategory: 'headphones', variants: ['Black', 'White', 'Blue'], isSelected: false, isPopular: true},
            {id: 'power-bank-001', name: '10000mAh Power Bank', image: 'https://images.unsplash.com/photo-1609592707680-9d9b9f1e7bf9?w=300', description: 'Fast charging power bank with dual USB ports', suggestedPrice: 1299, category: 'mobile-devices', subcategory: 'accessories', variants: ['10000mAh', '20000mAh'], isSelected: false, isPopular: true},
            {id: 'phone-case-001', name: 'Protective Phone Case', image: 'https://images.unsplash.com/photo-1601593346740-925612772716?w=300', description: 'Durable protective case for smartphones', suggestedPrice: 399, category: 'mobile-devices', subcategory: 'cases', variants: ['Clear', 'Black', 'Blue'], isSelected: false, isPopular: true},
            {id: 'screen-protector-001', name: 'Tempered Glass Screen Protector', image: 'https://images.unsplash.com/photo-1601593346740-925612772716?w=300', description: 'Premium tempered glass protection', suggestedPrice: 299, category: 'mobile-devices', subcategory: 'accessories', variants: ['Single', 'Pack of 2'], isSelected: false, isPopular: true}
        ],
        'computers': [
            {id: 'laptop-business-001', name: 'Business Laptop', image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=300', description: 'Professional laptop for business use', suggestedPrice: 45000, category: 'computers', subcategory: 'laptops', variants: ['i3/4GB', 'i5/8GB', 'i7/16GB'], isSelected: false, isPopular: true},
            {id: 'keyboard-wireless-001', name: 'Wireless Keyboard', image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=300', description: 'Ergonomic wireless keyboard', suggestedPrice: 1800, category: 'computers', subcategory: 'keyboards', variants: ['Black', 'White'], isSelected: false, isPopular: false},
            {id: 'mouse-wireless-001', name: 'Wireless Mouse', image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=300', description: 'Ergonomic wireless mouse with precision tracking', suggestedPrice: 899, category: 'computers', subcategory: 'mice', variants: ['Black', 'Silver'], isSelected: false, isPopular: true},
            {id: 'monitor-led-001', name: 'LED Monitor', image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=300', description: 'Full HD LED monitor for desktop', suggestedPrice: 12000, category: 'computers', subcategory: 'monitors', variants: ['21 inch', '24 inch', '27 inch'], isSelected: false, isPopular: true}
        ],
        'home-appliances': [
            {id: 'fan-ceiling-001', name: 'Ceiling Fan', image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=300', description: 'Energy efficient ceiling fan with remote', suggestedPrice: 3500, category: 'home-appliances', subcategory: 'fans', variants: ['48 inch', '52 inch'], isSelected: false, isPopular: true},
            {id: 'iron-steam-001', name: 'Steam Iron', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300', description: 'Automatic steam iron with ceramic coating', suggestedPrice: 1800, category: 'home-appliances', subcategory: 'irons', variants: ['1200W', '1500W'], isSelected: false, isPopular: true},
            {id: 'mixer-grinder-001', name: 'Mixer Grinder', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300', description: '3-jar mixer grinder for kitchen', suggestedPrice: 3200, category: 'home-appliances', subcategory: 'kitchen', variants: ['500W', '750W'], isSelected: false, isPopular: true}
        ]
    },

    fitness: {
        'gym-fitness': [
            {id: 'gym-membership-001', name: 'Monthly Gym Membership', image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=300', description: 'Full access gym membership with trainer', suggestedPrice: 2000, category: 'gym-fitness', subcategory: 'weight-training', variants: ['Basic', 'Premium', 'VIP'], isSelected: false, isPopular: true},
            {id: 'personal-training-001', name: 'Personal Training Session', image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300', description: 'One-on-one personal training session', suggestedPrice: 800, category: 'gym-fitness', subcategory: 'personal-training', variants: ['45 min', '60 min'], isSelected: false, isPopular: true},
            {id: 'protein-powder-001', name: 'Whey Protein Powder', image: 'https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=300', description: 'High quality whey protein for muscle building', suggestedPrice: 2500, category: 'gym-fitness', subcategory: 'supplements', variants: ['1kg', '2kg', '5kg'], isSelected: false, isPopular: true},
            {id: 'gym-equipment-001', name: 'Home Gym Equipment', image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=300', description: 'Basic home gym equipment set', suggestedPrice: 8000, category: 'gym-fitness', subcategory: 'equipment', variants: ['Basic Set', 'Premium Set'], isSelected: false, isPopular: false}
        ],
        'yoga-meditation': [
            {id: 'yoga-class-001', name: 'Hatha Yoga Class', image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=300', description: 'Traditional Hatha yoga class for beginners', suggestedPrice: 500, category: 'yoga-meditation', subcategory: 'hatha-yoga', variants: ['Drop-in', 'Monthly', 'Quarterly'], isSelected: false, isPopular: true},
            {id: 'meditation-session-001', name: 'Guided Meditation', image: 'https://images.unsplash.com/photo-1593811167562-9cef47bfc4a7?w=300', description: 'Guided meditation for stress relief', suggestedPrice: 300, category: 'yoga-meditation', subcategory: 'meditation', variants: ['30 min', '45 min', '60 min'], isSelected: false, isPopular: false},
            {id: 'yoga-mat-001', name: 'Premium Yoga Mat', image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=300', description: 'Non-slip yoga mat with carrying strap', suggestedPrice: 1200, category: 'yoga-meditation', subcategory: 'equipment', variants: ['6mm', '8mm', '10mm'], isSelected: false, isPopular: true}
        ]
    },

    restaurants: {
        'fine-dining': [
            {id: 'pasta-italian-001', name: 'Italian Pasta Primavera', image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=300', description: 'Fresh pasta with seasonal vegetables', suggestedPrice: 450, category: 'fine-dining', subcategory: 'italian', variants: ['Regular', 'Large'], isSelected: false, isPopular: true},
            {id: 'chicken-continental-001', name: 'Grilled Chicken Continental', image: 'https://images.unsplash.com/photo-1532636618209-8da5c4bf2c5a?w=300', description: 'Herb-grilled chicken with vegetables', suggestedPrice: 680, category: 'fine-dining', subcategory: 'continental', variants: ['Half', 'Full'], isSelected: false, isPopular: true},
            {id: 'fish-curry-001', name: 'Goan Fish Curry', image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=300', description: 'Authentic Goan fish curry with coconut', suggestedPrice: 550, category: 'fine-dining', subcategory: 'indian', variants: ['Regular', 'Large'], isSelected: false, isPopular: true}
        ],
        'casual-dining': [
            {id: 'pizza-margherita-001', name: 'Margherita Pizza', image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=300', description: 'Classic margherita with fresh basil', suggestedPrice: 320, category: 'casual-dining', subcategory: 'pizza', variants: ['Small', 'Medium', 'Large'], isSelected: false, isPopular: true},
            {id: 'burger-chicken-001', name: 'Chicken Burger', image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300', description: 'Juicy chicken burger with fries', suggestedPrice: 280, category: 'casual-dining', subcategory: 'burgers', variants: ['Regular', 'Large', 'Combo'], isSelected: false, isPopular: true},
            {id: 'sandwich-club-001', name: 'Club Sandwich', image: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?w=300', description: 'Triple layer club sandwich with fries', suggestedPrice: 220, category: 'casual-dining', subcategory: 'sandwiches', variants: ['Veg', 'Chicken', 'Turkey'], isSelected: false, isPopular: true}
        ],
        'cafes': [
            {id: 'cappuccino-001', name: 'Cappuccino', image: 'https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=300', description: 'Rich cappuccino with perfect foam art', suggestedPrice: 120, category: 'cafes', subcategory: 'coffee', variants: ['Regular', 'Large', 'Decaf'], isSelected: false, isPopular: true},
            {id: 'croissant-001', name: 'Butter Croissant', image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=300', description: 'Flaky butter croissant, freshly baked', suggestedPrice: 80, category: 'cafes', subcategory: 'pastries', variants: ['Plain', 'Chocolate', 'Almond'], isSelected: false, isPopular: true},
            {id: 'cheesecake-001', name: 'New York Cheesecake', image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=300', description: 'Classic New York style cheesecake', suggestedPrice: 180, category: 'cafes', subcategory: 'desserts', variants: ['Plain', 'Berry', 'Chocolate'], isSelected: false, isPopular: true}
        ]
    }
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

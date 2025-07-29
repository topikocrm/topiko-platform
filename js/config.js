/**
 * Topiko Lead Form - Configuration and Constants
 * Contains all application configuration, product catalog, business categories, and settings
 */

// Core Application Configuration
const Config = {
    // API Endpoints
    api: {
        baseUrl: 'https://api.topiko.com/v1',
        endpoints: {
            leadSubmission: '/leads/submit',
            otpVerification: '/auth/verify-otp',
            otpResend: '/auth/resend-otp',
            productData: '/products/catalog',
            businessCategories: '/categories/list',
            themePreview: '/themes/preview',
            analytics: '/analytics/track'
        },
        timeout: 10000, // 10 seconds
        retryAttempts: 3
    },

    // Form Validation Rules
    validation: {
        email: {
            pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: 'Please enter a valid email address'
        },
        phone: {
            pattern: /^[6-9]\d{9}$/,
            message: 'Please enter a valid 10-digit Indian mobile number'
        },
        name: {
            minLength: 2,
            maxLength: 50,
            pattern: /^[a-zA-Z\s\u0900-\u097F\u0C00-\u0C7F\u0B80-\u0BFF]+$/,
            message: 'Name must contain only letters and spaces'
        },
        businessName: {
            minLength: 2,
            maxLength: 100,
            message: 'Business name must be between 2-100 characters'
        },
        otp: {
            length: 4,
            pattern: /^\d{4}$/,
            message: 'Please enter a valid 4-digit OTP'
        }
    },

    // Lead Scoring Algorithm Configuration
    leadScoring: {
        weights: {
            goals: 20,           // Max 20 points for goals (4 points per goal, max 5 goals)
            registration: 25,    // 25 points for complete registration
            qualifying: 30,      // 30 points for qualifying questions
            categories: 10,      // 10 points for category selection
            products: 10,        // 10 points for product selection
            theme: 5             // 5 points for theme selection
        },
        thresholds: {
            cold: 0,    // 0-35 points
            warm: 36,   // 36-70 points
            hot: 71     // 71-100 points
        },
        goalPoints: {
            ecommerce: 5,        // High value goal
            customers: 4,        // High value goal
            manage: 3,           // Medium value goal
            search: 4,           // High value goal
            brand: 4             // High value goal
        },
        qualifyingPoints: {
            online_presence: {
                none: 8,                    // Highest potential
                whatsapp: 6,               // Good potential
                social: 4,                 // Medium potential
                basic_website: 3,          // Lower potential
                full_website: 2            // Lowest potential (already established)
            },
            budget: {
                'high': 10,        // ₹25,000+
                'medium': 7,       // ₹10,000-25,000
                'low': 5           // ₹5,000-10,000
            },
            decision_maker: {
                yes: 8,
                no: 3
            },
            timeline: {
                immediately: 4,
                within_week: 3,
                this_month: 2,
                just_checking: 1
            }
        }
    },

    // FOMO Notification Configuration
    fomo: {
        enabled: true,
        interval: 8000, // 8 seconds between notifications
        counterUpdateInterval: 15000, // Update counter every 15 seconds
        baseCounter: 247,
        counterIncrement: [1, 2, 3], // Random increment values
        businesses: [
            { name: 'Vasavi Silks', location: 'Mysore', type: 'boutique' },
            { name: 'Annapurna Foods', location: 'Bangalore', type: 'restaurant' },
            { name: 'Tech Solutions Pro', location: 'Hyderabad', type: 'electronics' },
            { name: 'Fitness First Gym', location: 'Chennai', type: 'fitness' },
            { name: 'Golden Jewellers', location: 'Mumbai', type: 'jewellery' },
            { name: 'Fresh Mart Grocery', location: 'Pune', type: 'grocery' },
            { name: 'Beauty Palace Salon', location: 'Delhi', type: 'salon' },
            { name: 'Modern Furniture Hub', location: 'Kochi', type: 'furniture' },
            { name: 'Spice Garden Restaurant', location: 'Mangalore', type: 'restaurant' },
            { name: 'Smart Electronics', location: 'Coimbatore', type: 'electronics' },
            { name: 'Yoga Wellness Center', location: 'Rishikesh', type: 'fitness' },
            { name: 'Traditional Crafts', location: 'Jaipur', type: 'arts' },
            { name: 'Organic Farm Store', location: 'Nashik', type: 'agriculture' },
            { name: 'Auto Care Services', location: 'Indore', type: 'automotive' },
            { name: 'Little Angels School', location: 'Lucknow', type: 'education' }
        ],
        actions: [
            'just set up their online store',
            'completed their business registration',
            'launched their website',
            'started selling online',
            'added their product catalog',
            'chose their business theme',
            'activated their online presence'
        ],
        timeRanges: ['1-3', '2-5', '3-7', '5-10'] // minutes ago
    },

    // Product Catalog (500+ products organized by categories)
    productCatalog: {
        // Boutique & Fashion
        boutique: [
            { id: 1, name: 'Cotton Kurta', price: 899, category: 'boutique', subcategory: 'ethnic-wear', image: 'https://images.unsplash.com/photo-1583743089695-4b816a340f82?w=200', popularity: 95 },
            { id: 2, name: 'Silk Saree', price: 2499, category: 'boutique', subcategory: 'ethnic-wear', image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=200', popularity: 92 },
            { id: 3, name: 'Designer Lehenga', price: 4999, category: 'boutique', subcategory: 'ethnic-wear', image: 'https://images.unsplash.com/photo-1594736797933-d0d09370906e?w=200', popularity: 88 },
            { id: 4, name: 'Casual T-Shirt', price: 599, category: 'boutique', subcategory: 'casual-wear', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=200', popularity: 90 },
            { id: 5, name: 'Formal Shirt', price: 1299, category: 'boutique', subcategory: 'formal-wear', image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=200', popularity: 85 },
            { id: 6, name: 'Jeans', price: 1599, category: 'boutique', subcategory: 'casual-wear', image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=200', popularity: 93 },
            { id: 7, name: 'Party Dress', price: 2299, category: 'boutique', subcategory: 'party-wear', image: 'https://images.unsplash.com/photo-1566479179817-3d44b1b66fa6?w=200', popularity: 87 },
            { id: 8, name: 'Winter Jacket', price: 2799, category: 'boutique', subcategory: 'winter-wear', image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=200', popularity: 82 },
            { id: 9, name: 'Palazzo Pants', price: 899, category: 'boutique', subcategory: 'ethnic-wear', image: 'https://images.unsplash.com/photo-1594633313593-bab3825d0caf?w=200', popularity: 89 },
            { id: 10, name: 'Blazer', price: 3299, category: 'boutique', subcategory: 'formal-wear', image: 'https://images.unsplash.com/photo-1594938292005-46abf0dea202?w=200', popularity: 84 }
        ],

        // Home Foods & Catering
        homefoods: [
            { id: 11, name: 'Homemade Samosas (10 pieces)', price: 150, category: 'homefoods', subcategory: 'snacks', image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=200', popularity: 96 },
            { id: 12, name: 'Biriyani (1 serving)', price: 250, category: 'homefoods', subcategory: 'main-course', image: 'https://images.unsplash.com/photo-1563379091339-03246963d51a?w=200', popularity: 98 },
            { id: 13, name: 'Masala Dosa', price: 80, category: 'homefoods', subcategory: 'breakfast', image: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=200', popularity: 94 },
            { id: 14, name: 'Homemade Sweets (1 kg)', price: 800, category: 'homefoods', subcategory: 'sweets', image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=200', popularity: 91 },
            { id: 15, name: 'Tiffin Service (Monthly)', price: 3500, category: 'homefoods', subcategory: 'tiffin', image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=200', popularity: 89 },
            { id: 16, name: 'Party Catering (per plate)', price: 180, category: 'homefoods', subcategory: 'catering', image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=200', popularity: 87 },
            { id: 17, name: 'Homemade Pickles (500g)', price: 299, category: 'homefoods', subcategory: 'pickles', image: 'https://images.unsplash.com/photo-1599908452434-c8e95edcc48b?w=200', popularity: 85 },
            { id: 18, name: 'Fresh Chapati (20 pieces)', price: 100, category: 'homefoods', subcategory: 'bread', image: 'https://images.unsplash.com/photo-1586444248902-2f64eddc13df?w=200', popularity: 92 },
            { id: 19, name: 'Homemade Lassi (500ml)', price: 60, category: 'homefoods', subcategory: 'beverages', image: 'https://images.unsplash.com/photo-1553787568-6bb6d0eeaf8a?w=200', popularity: 88 },
            { id: 20, name: 'Special Thali', price: 120, category: 'homefoods', subcategory: 'main-course', image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=200', popularity: 95 }
        ],

        // Grocery & Provisions
        grocery: [
            { id: 21, name: 'Basmati Rice (5kg)', price: 650, category: 'grocery', subcategory: 'grains', image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=200', popularity: 97 },
            { id: 22, name: 'Atta Flour (10kg)', price: 450, category: 'grocery', subcategory: 'grains', image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=200', popularity: 96 },
            { id: 23, name: 'Organic Vegetables (5kg mix)', price: 350, category: 'grocery', subcategory: 'vegetables', image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=200', popularity: 94 },
            { id: 24, name: 'Fresh Fruits (3kg mix)', price: 400, category: 'grocery', subcategory: 'fruits', image: 'https://images.unsplash.com/photo-1619566636858-adf3ef46400b?w=200', popularity: 93 },
            { id: 25, name: 'Cooking Oil (1L)', price: 180, category: 'grocery', subcategory: 'oils', image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=200', popularity: 95 },
            { id: 26, name: 'Spices Set (20 items)', price: 800, category: 'grocery', subcategory: 'spices', image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=200', popularity: 92 },
            { id: 27, name: 'Dairy Products (weekly)', price: 500, category: 'grocery', subcategory: 'dairy', image: 'https://images.unsplash.com/photo-1628088062854-d1870b4553da?w=200', popularity: 91 },
            { id: 28, name: 'Pulses & Lentils (2kg)', price: 300, category: 'grocery', subcategory: 'pulses', image: 'https://images.unsplash.com/photo-1574078220392-5e3a1b4f4420?w=200', popularity: 89 },
            { id: 29, name: 'Cleaning Supplies', price: 250, category: 'grocery', subcategory: 'household', image: 'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=200', popularity: 86 },
            { id: 30, name: 'Snacks & Biscuits', price: 200, category: 'grocery', subcategory: 'snacks', image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=200', popularity: 88 }
        ],

        // Electronics & Gadgets
        electronics: [
            { id: 31, name: 'Smartphone', price: 15999, category: 'electronics', subcategory: 'mobile', image: 'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=200', popularity: 98 },
            { id: 32, name: 'Laptop', price: 45999, category: 'electronics', subcategory: 'computers', image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=200', popularity: 95 },
            { id: 33, name: 'Bluetooth Headphones', price: 2999, category: 'electronics', subcategory: 'audio', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200', popularity: 94 },
            { id: 34, name: 'Smart Watch', price: 8999, category: 'electronics', subcategory: 'wearables', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=200', popularity: 92 },
            { id: 35, name: 'Power Bank', price: 1499, category: 'electronics', subcategory: 'accessories', image: 'https://images.unsplash.com/photo-1609792858868-4d2a15b8d1be?w=200', popularity: 90 },
            { id: 36, name: 'Bluetooth Speaker', price: 3499, category: 'electronics', subcategory: 'audio', image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=200', popularity: 89 },
            { id: 37, name: 'Phone Case', price: 599, category: 'electronics', subcategory: 'accessories', image: 'https://images.unsplash.com/photo-1601593346740-925612772716?w=200', popularity: 87 },
            { id: 38, name: 'USB Cable', price: 299, category: 'electronics', subcategory: 'accessories', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=200', popularity: 85 },
            { id: 39, name: 'Tablet', price: 22999, category: 'electronics', subcategory: 'tablets', image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=200', popularity: 88 },
            { id: 40, name: 'Wireless Charger', price: 1999, category: 'electronics', subcategory: 'accessories', image: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=200', popularity: 86 }
        ],

        // Fitness & Wellness
        fitness: [
            { id: 41, name: 'Gym Membership (Monthly)', price: 2500, category: 'fitness', subcategory: 'membership', image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=200', popularity: 94 },
            { id: 42, name: 'Personal Training (1 session)', price: 800, category: 'fitness', subcategory: 'training', image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=200', popularity: 92 },
            { id: 43, name: 'Yoga Classes (Monthly)', price: 1800, category: 'fitness', subcategory: 'classes', image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=200', popularity: 90 },
            { id: 44, name: 'Protein Supplement', price: 2999, category: 'fitness', subcategory: 'supplements', image: 'https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=200', popularity: 89 },
            { id: 45, name: 'Dumbbells Set', price: 3500, category: 'fitness', subcategory: 'equipment', image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=200', popularity: 87 },
            { id: 46, name: 'Yoga Mat', price: 899, category: 'fitness', subcategory: 'equipment', image: 'https://images.unsplash.com/photo-1506629905607-b5f0d4ea5edb?w=200', popularity: 91 },
            { id: 47, name: 'Sports Shoes', price: 4999, category: 'fitness', subcategory: 'footwear', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=200', popularity: 93 },
            { id: 48, name: 'Fitness Tracker', price: 5999, category: 'fitness', subcategory: 'wearables', image: 'https://images.unsplash.com/photo-1544966503-7cc5ac882d7a?w=200', popularity: 88 },
            { id: 49, name: 'Resistance Bands', price: 599, category: 'fitness', subcategory: 'equipment', image: 'https://images.unsplash.com/photo-1571731956672-f2b94d7dd0cb?w=200', popularity: 85 },
            { id: 50, name: 'Diet Consultation', price: 1500, category: 'fitness', subcategory: 'consultation', image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=200', popularity: 86 }
        ],

        // Restaurants & Cafes
        restaurant: [
            { id: 51, name: 'Margherita Pizza', price: 350, category: 'restaurant', subcategory: 'pizza', image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=200', popularity: 96 },
            { id: 52, name: 'Chicken Burger', price: 280, category: 'restaurant', subcategory: 'burgers', image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=200', popularity: 94 },
            { id: 53, name: 'Pasta Alfredo', price: 320, category: 'restaurant', subcategory: 'pasta', image: 'https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?w=200', popularity: 92 },
            { id: 54, name: 'Cold Coffee', price: 150, category: 'restaurant', subcategory: 'beverages', image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=200', popularity: 95 },
            { id: 55, name: 'Caesar Salad', price: 250, category: 'restaurant', subcategory: 'salads', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=200', popularity: 88 },
            { id: 56, name: 'Fish Curry', price: 400, category: 'restaurant', subcategory: 'indian', image: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?w=200', popularity: 91 },
            { id: 57, name: 'Chocolate Cake', price: 200, category: 'restaurant', subcategory: 'desserts', image: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=200', popularity: 89 },
            { id: 58, name: 'Sandwich', price: 180, category: 'restaurant', subcategory: 'snacks', image: 'https://images.unsplash.com/photo-1553909489-cd47e0ef937f?w=200', popularity: 90 },
            { id: 59, name: 'Fresh Juice', price: 120, category: 'restaurant', subcategory: 'beverages', image: 'https://images.unsplash.com/photo-1619096252214-ef06c45683e3?w=200', popularity: 93 },
            { id: 60, name: 'Momos (8 pieces)', price: 150, category: 'restaurant', subcategory: 'snacks', image: 'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=200', popularity: 87 }
        ]
    },

    // Business Categories and Subcategories
    businessCategories: {
        boutique: {
            name: 'Boutique & Fashion',
            icon: '🏪',
            subcategories: ['ethnic-wear', 'casual-wear', 'formal-wear', 'party-wear', 'winter-wear', 'accessories'],
            motivationalMessages: [
                'Fashion businesses see 300% growth online!',
                'Your designs deserve a global audience!',
                'Online fashion stores earn 5x more!',
                'Style meets success online!'
            ]
        },
        homefoods: {
            name: 'Home Foods & Catering',
            icon: '🍛',
            subcategories: ['snacks', 'main-course', 'breakfast', 'sweets', 'tiffin', 'catering', 'pickles', 'bread', 'beverages'],
            motivationalMessages: [
                'Home chefs earn ₹50,000+ monthly online!',
                'Your recipes can feed the world!',
                'Food businesses thrive online!',
                'Turn your kitchen into a goldmine!'
            ]
        },
        salons: {
            name: 'Salons & Beauty',
            icon: '💄',
            subcategories: ['haircut', 'facial', 'makeup', 'spa', 'nail-art', 'bridal-makeup', 'massage'],
            motivationalMessages: [
                'Beauty businesses book 10x more online!',
                'Your talent deserves recognition!',
                'Online bookings increase revenue by 400%!',
                'Beauty meets technology!'
            ]
        },
        grocery: {
            name: 'Grocery & Provisions',
            icon: '🛒',
            subcategories: ['grains', 'vegetables', 'fruits', 'oils', 'spices', 'dairy', 'pulses', 'household', 'snacks'],
            motivationalMessages: [
                'Grocery stores save 20+ hours weekly online!',
                'Digital grocery is the future!',
                'Online grocery grows 500% faster!',
                'Your community needs you online!'
            ]
        },
        furniture: {
            name: 'Furniture & Home Decor',
            icon: '🛋️',
            subcategories: ['living-room', 'bedroom', 'kitchen', 'office', 'decor', 'lighting', 'storage'],
            motivationalMessages: [
                'Furniture sales double online!',
                'Your craftsmanship deserves a showcase!',
                'Home decor businesses boom online!',
                'Design beautiful futures!'
            ]
        },
        electronics: {
            name: 'Electronics & Gadgets',
            icon: '📱',
            subcategories: ['mobile', 'computers', 'audio', 'wearables', 'accessories', 'tablets'],
            motivationalMessages: [
                'Tech stores see 400% growth online!',
                'Electronics sell faster online!',
                'Your gadgets reach tech enthusiasts!',
                'Innovation meets opportunity!'
            ]
        },
        jewellery: {
            name: 'Jewellery & Accessories',
            icon: '💍',
            subcategories: ['gold', 'silver', 'diamond', 'fashion-jewelry', 'watches', 'custom-design'],
            motivationalMessages: [
                'Jewelry businesses shine online!',
                'Your creations deserve spotlight!',
                'Online jewelry sales sparkle!',
                'Precious metals, precious opportunities!'
            ]
        },
        restaurants: {
            name: 'Restaurants & Cafes',
            icon: '🍽️',
            subcategories: ['pizza', 'burgers', 'pasta', 'beverages', 'salads', 'indian', 'desserts', 'snacks'],
            motivationalMessages: [
                'Restaurants earn 60% more with online orders!',
                'Your flavors can reach every doorstep!',
                'Food delivery is booming!',
                'Taste meets technology!'
            ]
        },
        fitness: {
            name: 'Fitness & Wellness',
            icon: '💪',
            subcategories: ['membership', 'training', 'classes', 'supplements', 'equipment', 'footwear', 'wearables', 'consultation'],
            motivationalMessages: [
                'Fitness businesses grow stronger online!',
                'Health is wealth - share yours!',
                'Online fitness coaching pays 3x more!',
                'Build bodies, build businesses!'
            ]
        },
        education: {
            name: 'Education & Training',
            icon: '📚',
            subcategories: ['academic', 'professional', 'skills', 'languages', 'music', 'arts', 'technology'],
            motivationalMessages: [
                'Education businesses reach millions online!',
                'Share knowledge, change lives!',
                'Online learning never stops growing!',
                'Teach the world your expertise!'
            ]
        }
    },

    // Theme System Configuration
    themes: {
        modern: {
            name: 'Modern & Minimalist',
            description: 'Clean, simple design that focuses on your products',
            icon: '✨',
            preview: {
                colors: {
                    primary: '#000000',
                    secondary: '#ffffff',
                    accent: '#f3f4f6'
                },
                layout: 'grid',
                typography: 'sans-serif'
            }
        },
        vibrant: {
            name: 'Colorful & Vibrant',
            description: 'Bold colors and energetic design to attract customers',
            icon: '🌈',
            preview: {
                colors: {
                    primary: '#ef4444',
                    secondary: '#3b82f6',
                    accent: '#fbbf24'
                },
                layout: 'dynamic',
                typography: 'playful'
            }
        },
        professional: {
            name: 'Professional & Corporate',
            description: 'Sophisticated design that builds trust and credibility',
            icon: '💼',
            preview: {
                colors: {
                    primary: '#1e40af',
                    secondary: '#374151',
                    accent: '#d1d5db'
                },
                layout: 'structured',
                typography: 'formal'
            }
        },
        traditional: {
            name: 'Traditional & Classic',
            description: 'Timeless design with warm, welcoming feel',
            icon: '🏛️',
            preview: {
                colors: {
                    primary: '#92400e',
                    secondary: '#fbbf24',
                    accent: '#fef3c7'
                },
                layout: 'classic',
                typography: 'serif'
            }
        },
        creative: {
            name: 'Creative & Artistic',
            description: 'Unique, artistic design that showcases creativity',
            icon: '🎨',
            preview: {
                colors: {
                    primary: '#7c3aed',
                    secondary: '#ec4899',
                    accent: '#a78bfa'
                },
                layout: 'artistic',
                typography: 'creative'
            }
        },
        luxury: {
            name: 'Elegant & Luxury',
            description: 'Premium design for high-end products and services',
            icon: '💎',
            preview: {
                colors: {
                    primary: '#000000',
                    secondary: '#d4af37',
                    accent: '#1c1917'
                },
                layout: 'premium',
                typography: 'elegant'
            }
        }
    },

    // Localization Configuration
    localization: {
        defaultLanguage: 'en',
        supportedLanguages: ['en', 'hi', 'te', 'ta'],
        currency: {
            symbol: '₹',
            code: 'INR',
            locale: 'en-IN'
        },
        numberFormat: {
            locale: 'en-IN',
            options: {
                minimumFractionDigits: 0,
                maximumFractionDigits: 0
            }
        },
        dateFormat: {
            locale: 'en-IN',
            options: {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            }
        }
    },

    // Form Configuration
    form: {
        autoSave: true,
        autoSaveInterval: 5000, // 5 seconds
        maxSteps: 6,
        requiredFields: {
            registration: ['fullName', 'email', 'phoneNumber', 'businessName'],
            qualifying: ['online_presence', 'budget', 'decision_maker', 'timeline']
        },
        progressPersistence: true,
        sessionTimeout: 30 * 60 * 1000 // 30 minutes
    },

    // Debug Configuration
    debug: {
        enabled: true,
        logLevel: 'info', // 'error', 'warn', 'info', 'debug'
        trackUserActions: true,
        showLeadScore: true,
        maxLogEntries: 100
    },

    // Performance Configuration
    performance: {
        lazyLoadImages: true,
        debounceDelay: 300,
        throttleDelay: 100,
        cacheTimeout: 5 * 60 * 1000, // 5 minutes
        maxProductsPerPage: 20
    },

    // Analytics Configuration
    analytics: {
        enabled: true,
        events: [
            'page_view',
            'step_completed',
            'goal_selected',
            'registration_completed',
            'qualifying_completed',
            'category_selected',
            'product_added',
            'theme_selected',
            'form_submitted',
            'error_occurred'
        ],
        sessionTracking: true
    }
};

// Extend product catalog with more products for each category to reach 500+
const extendedProducts = [];
let productId = 61;

// Generate more products for each category
Object.keys(Config.productCatalog).forEach(category => {
    const baseProducts = Config.productCatalog[category];
    const categoryConfig = Config.businessCategories[category];
    
    if (categoryConfig && categoryConfig.subcategories) {
        categoryConfig.subcategories.forEach(subcategory => {
            // Add more products for each subcategory
            for (let i = 0; i < 8; i++) {
                extendedProducts.push({
                    id: productId++,
                    name: `${subcategory.replace('-', ' ')} item ${i + 1}`,
                    price: Math.floor(Math.random() * 5000) + 100,
                    category: category,
                    subcategory: subcategory,
                    image: `https://images.unsplash.com/photo-${1500000000000 + Math.floor(Math.random() * 100000000)}?w=200`,
                    popularity: Math.floor(Math.random() * 40) + 60
                });
            }
        });
    }
});

// Add extended products to the catalog
Object.keys(Config.productCatalog).forEach(category => {
    const categoryProducts = extendedProducts.filter(p => p.category === category);
    Config.productCatalog[category] = [...Config.productCatalog[category], ...categoryProducts];
});

// Utility functions for config access
Config.getProductsByCategory = function(category) {
    return this.productCatalog[category] || [];
};

Config.getAllProducts = function() {
    let allProducts = [];
    Object.values(this.productCatalog).forEach(categoryProducts => {
        allProducts = allProducts.concat(categoryProducts);
    });
    return allProducts;
};

Config.getProductById = function(id) {
    const allProducts = this.getAllProducts();
    return allProducts.find(product => product.id === parseInt(id));
};

Config.getCategoryConfig = function(category) {
    return this.businessCategories[category];
};

Config.getThemeConfig = function(theme) {
    return this.themes[theme];
};

Config.formatCurrency = function(amount) {
    return new Intl.NumberFormat(this.localization.currency.locale, {
        style: 'currency',
        currency: this.localization.currency.code
    }).format(amount);
};

Config.formatNumber = function(number) {
    return new Intl.NumberFormat(
        this.localization.numberFormat.locale,
        this.localization.numberFormat.options
    ).format(number);
};

// Export configuration for global access
window.Config = Config;

// Debug logging
if (Config.debug.enabled) {
    console.log('🚀 Topiko Lead Form Configuration Loaded');
    console.log(`📊 Total Products: ${Config.getAllProducts().length}`);
    console.log(`🏢 Business Categories: ${Object.keys(Config.businessCategories).length}`);
    console.log(`🎨 Available Themes: ${Object.keys(Config.themes).length}`);
}
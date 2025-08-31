// ============================================
// COMPREHENSIVE CATEGORIES DATABASE
// 25 Main Categories | 435+ Subcategories
// ============================================

const COMPREHENSIVE_CATEGORIES = {
    // 1. FASHION & APPAREL
    fashion: {
        id: 'fashion',
        name: 'Fashion & Apparel',
        icon: '👗',
        categories: {
            'mens-clothing': {
                name: "Men's Clothing",
                icon: '👔',
                subcategories: [
                    'shirts', 'tshirts', 'jeans', 'trousers', 'kurtas', 'kurta-pajamas',
                    'sherwanis', 'suits', 'blazers', 'jackets', 'sweaters', 'hoodies',
                    'shorts', 'track-pants', 'ethnic-wear', 'formal-wear', 'casual-wear',
                    'party-wear', 'nightwear', 'innerwear', 'thermals', 'rainwear'
                ]
            },
            'womens-clothing': {
                name: "Women's Clothing",
                icon: '👗',
                subcategories: [
                    'sarees', 'lehengas', 'salwar-suits', 'kurtis', 'kurta-sets', 'anarkalis',
                    'gowns', 'dresses', 'tops', 'shirts', 'tshirts', 'jeans', 'trousers',
                    'skirts', 'shorts', 'palazzos', 'dupatta', 'shawls', 'jackets', 'sweaters',
                    'cardigans', 'nightwear', 'lingerie', 'sportswear', 'maternity-wear'
                ]
            },
            'kids-clothing': {
                name: "Kids' Clothing",
                icon: '👶',
                subcategories: [
                    'baby-clothes', 'boys-clothing', 'girls-clothing', 'infant-wear',
                    'party-wear-kids', 'ethnic-kids', 'school-uniforms', 'sportswear-kids',
                    'winter-wear-kids', 'summer-wear-kids', 'nightwear-kids', 'innerwear-kids'
                ]
            },
            'designer-wear': {
                name: 'Designer & Premium',
                icon: '✨',
                subcategories: [
                    'designer-sarees', 'designer-lehengas', 'designer-suits', 'designer-gowns',
                    'bridal-wear', 'groom-wear', 'indo-western', 'luxury-clothing',
                    'haute-couture', 'boutique-collection'
                ]
            },
            'winter-wear': {
                name: 'Winter Wear',
                icon: '🧥',
                subcategories: [
                    'coats', 'leather-jackets', 'wool-sweaters', 'cardigans', 'pullovers',
                    'thermals', 'mufflers', 'scarves', 'gloves', 'winter-caps'
                ]
            },
            'sportswear': {
                name: 'Sportswear & Activewear',
                icon: '🏃',
                subcategories: [
                    'gym-wear', 'yoga-wear', 'running-gear', 'sports-jerseys', 'track-suits',
                    'swimming-wear', 'sports-bra', 'compression-wear', 'athletic-shorts'
                ]
            }
        }
    },

    // 2. FOOD & RESTAURANTS
    food: {
        id: 'food',
        name: 'Food & Restaurants',
        icon: '🍽️',
        categories: {
            'restaurants': {
                name: 'Restaurants & Dining',
                icon: '🍽️',
                subcategories: [
                    'fine-dining', 'casual-dining', 'fast-food', 'cafes', 'bakeries',
                    'food-courts', 'cloud-kitchens', 'tiffin-services', 'catering'
                ]
            },
            'north-indian': {
                name: 'North Indian Cuisine',
                icon: '🍛',
                subcategories: [
                    'punjabi', 'mughlai', 'kashmiri', 'rajasthani', 'awadhi',
                    'delhi-cuisine', 'haryanvi', 'himachali', 'uttarakhandi'
                ]
            },
            'south-indian': {
                name: 'South Indian Cuisine',
                icon: '🥘',
                subcategories: [
                    'tamil', 'telugu', 'kerala', 'karnataka', 'andhra',
                    'chettinad', 'udupi', 'hyderabadi', 'mangalorean'
                ]
            },
            'international': {
                name: 'International Cuisine',
                icon: '🌏',
                subcategories: [
                    'chinese', 'continental', 'italian', 'mexican', 'thai',
                    'japanese', 'korean', 'mediterranean', 'arabic', 'american'
                ]
            },
            'street-food': {
                name: 'Street Food & Snacks',
                icon: '🍿',
                subcategories: [
                    'chaat', 'vada-pav', 'dosa', 'rolls', 'momos', 'kebabs',
                    'sandwiches', 'burgers', 'pizza', 'pasta', 'noodles'
                ]
            },
            'sweets-bakery': {
                name: 'Sweets & Bakery',
                icon: '🧁',
                subcategories: [
                    'mithai', 'cakes', 'pastries', 'cookies', 'chocolates',
                    'ice-cream', 'desserts', 'donuts', 'breads', 'croissants'
                ]
            },
            'beverages': {
                name: 'Beverages',
                icon: '☕',
                subcategories: [
                    'tea', 'coffee', 'juices', 'smoothies', 'shakes', 'lassi',
                    'soft-drinks', 'energy-drinks', 'mocktails', 'traditional-drinks'
                ]
            }
        }
    },

    // 3. ELECTRONICS & GADGETS
    electronics: {
        id: 'electronics',
        name: 'Electronics & Gadgets',
        icon: '📱',
        categories: {
            'mobiles': {
                name: 'Mobile Phones',
                icon: '📱',
                subcategories: [
                    'smartphones', 'feature-phones', 'refurbished-phones', 'mobile-accessories',
                    'cases-covers', 'screen-guards', 'chargers', 'cables', 'power-banks',
                    'earphones', 'headphones', 'mobile-holders'
                ]
            },
            'computers': {
                name: 'Computers & Laptops',
                icon: '💻',
                subcategories: [
                    'laptops', 'desktops', 'gaming-laptops', 'tablets', 'monitors',
                    'keyboards', 'mouse', 'webcams', 'printers', 'scanners',
                    'hard-drives', 'pen-drives', 'memory-cards'
                ]
            },
            'home-appliances': {
                name: 'Home Appliances',
                icon: '🏠',
                subcategories: [
                    'refrigerators', 'washing-machines', 'air-conditioners', 'televisions',
                    'microwaves', 'water-purifiers', 'vacuum-cleaners', 'fans',
                    'water-heaters', 'air-purifiers', 'room-heaters', 'coolers'
                ]
            },
            'kitchen-appliances': {
                name: 'Kitchen Appliances',
                icon: '🍳',
                subcategories: [
                    'mixer-grinders', 'juicers', 'food-processors', 'induction-cooktops',
                    'electric-kettles', 'toasters', 'coffee-makers', 'sandwich-makers',
                    'rice-cookers', 'pressure-cookers', 'air-fryers', 'dishwashers'
                ]
            },
            'audio-video': {
                name: 'Audio & Video',
                icon: '🎧',
                subcategories: [
                    'bluetooth-speakers', 'home-theaters', 'soundbars', 'headphones',
                    'earbuds', 'cameras', 'dslr', 'projectors', 'media-players'
                ]
            },
            'gaming': {
                name: 'Gaming',
                icon: '🎮',
                subcategories: [
                    'gaming-consoles', 'gaming-accessories', 'gaming-chairs', 'gaming-keyboards',
                    'gaming-mouse', 'gaming-headsets', 'graphics-cards', 'gaming-monitors'
                ]
            }
        }
    },

    // 4. BEAUTY & PERSONAL CARE
    beauty: {
        id: 'beauty',
        name: 'Beauty & Personal Care',
        icon: '💄',
        categories: {
            'skincare': {
                name: 'Skincare',
                icon: '✨',
                subcategories: [
                    'face-wash', 'cleansers', 'toners', 'moisturizers', 'serums',
                    'face-masks', 'scrubs', 'sunscreen', 'anti-aging', 'acne-care',
                    'face-oils', 'night-creams', 'day-creams', 'under-eye-creams'
                ]
            },
            'haircare': {
                name: 'Haircare',
                icon: '💇',
                subcategories: [
                    'shampoo', 'conditioner', 'hair-oil', 'hair-serum', 'hair-masks',
                    'hair-color', 'hair-styling', 'hair-spray', 'hair-gel', 'hair-treatments'
                ]
            },
            'makeup': {
                name: 'Makeup & Cosmetics',
                icon: '💋',
                subcategories: [
                    'foundation', 'concealer', 'compact', 'primer', 'blush',
                    'highlighter', 'lipstick', 'lip-gloss', 'mascara', 'eyeliner',
                    'eyeshadow', 'kajal', 'nail-polish', 'makeup-remover'
                ]
            },
            'fragrances': {
                name: 'Fragrances',
                icon: '🌸',
                subcategories: [
                    'perfumes', 'deodorants', 'body-mists', 'attars', 'eau-de-toilette',
                    'cologne', 'body-sprays', 'roll-ons'
                ]
            },
            'mens-grooming': {
                name: "Men's Grooming",
                icon: '🧔',
                subcategories: [
                    'beard-oil', 'beard-wash', 'shaving-cream', 'after-shave', 'razors',
                    'trimmers', 'face-wash-men', 'hair-wax', 'hair-gel-men'
                ]
            },
            'bath-body': {
                name: 'Bath & Body',
                icon: '🛁',
                subcategories: [
                    'body-wash', 'soaps', 'body-lotions', 'body-scrubs', 'body-oils',
                    'bath-salts', 'shower-gels', 'hand-wash', 'sanitizers'
                ]
            }
        }
    },

    // 5. HOME & LIVING
    home: {
        id: 'home',
        name: 'Home & Living',
        icon: '🏡',
        categories: {
            'furniture': {
                name: 'Furniture',
                icon: '🛋️',
                subcategories: [
                    'sofas', 'beds', 'dining-tables', 'chairs', 'wardrobes',
                    'tv-units', 'coffee-tables', 'study-tables', 'bookshelves',
                    'shoe-racks', 'dressing-tables', 'cabinets', 'recliners'
                ]
            },
            'home-decor': {
                name: 'Home Decor',
                icon: '🎨',
                subcategories: [
                    'wall-art', 'paintings', 'clocks', 'mirrors', 'vases',
                    'showpieces', 'photo-frames', 'candles', 'lamps', 'chandeliers',
                    'curtains', 'cushions', 'rugs', 'carpets', 'wallpapers'
                ]
            },
            'kitchen-dining': {
                name: 'Kitchen & Dining',
                icon: '🍴',
                subcategories: [
                    'cookware', 'dinnerware', 'glassware', 'containers', 'bottles',
                    'lunch-boxes', 'flasks', 'kitchen-tools', 'cutlery', 'serving-items'
                ]
            },
            'bedroom': {
                name: 'Bedroom',
                icon: '🛏️',
                subcategories: [
                    'bedsheets', 'blankets', 'quilts', 'pillows', 'mattresses',
                    'pillow-covers', 'duvets', 'bed-covers', 'mosquito-nets'
                ]
            },
            'bathroom': {
                name: 'Bathroom',
                icon: '🚿',
                subcategories: [
                    'towels', 'bath-mats', 'shower-curtains', 'bathroom-accessories',
                    'buckets', 'mugs', 'soap-dispensers', 'toothbrush-holders'
                ]
            },
            'garden-outdoor': {
                name: 'Garden & Outdoor',
                icon: '🌿',
                subcategories: [
                    'plants', 'planters', 'gardening-tools', 'seeds', 'fertilizers',
                    'outdoor-furniture', 'grills', 'outdoor-lighting'
                ]
            }
        }
    },

    // 6. GROCERY & ESSENTIALS
    grocery: {
        id: 'grocery',
        name: 'Grocery & Essentials',
        icon: '🛒',
        categories: {
            'vegetables-fruits': {
                name: 'Vegetables & Fruits',
                icon: '🥬',
                subcategories: [
                    'fresh-vegetables', 'fresh-fruits', 'leafy-vegetables', 'exotic-vegetables',
                    'exotic-fruits', 'seasonal-vegetables', 'seasonal-fruits', 'organic-vegetables',
                    'organic-fruits', 'cut-vegetables', 'fruit-baskets'
                ]
            },
            'dairy-eggs': {
                name: 'Dairy & Eggs',
                icon: '🥛',
                subcategories: [
                    'milk', 'curd', 'cheese', 'butter', 'ghee', 'paneer',
                    'yogurt', 'buttermilk', 'cream', 'eggs', 'condensed-milk'
                ]
            },
            'staples': {
                name: 'Staples',
                icon: '🌾',
                subcategories: [
                    'rice', 'wheat', 'atta', 'dal', 'pulses', 'flour',
                    'cooking-oil', 'sugar', 'salt', 'jaggery', 'spices', 'masalas'
                ]
            },
            'packaged-foods': {
                name: 'Packaged Foods',
                icon: '📦',
                subcategories: [
                    'noodles', 'pasta', 'breakfast-cereals', 'oats', 'biscuits',
                    'snacks', 'namkeen', 'chips', 'ready-to-eat', 'instant-mixes',
                    'pickles', 'jams', 'sauces', 'spreads'
                ]
            },
            'beverages-grocery': {
                name: 'Beverages',
                icon: '🥤',
                subcategories: [
                    'tea-leaves', 'coffee-powder', 'health-drinks', 'soft-drinks',
                    'juices-grocery', 'energy-drinks-grocery', 'water-bottles'
                ]
            },
            'household': {
                name: 'Household Items',
                icon: '🧹',
                subcategories: [
                    'detergents', 'cleaners', 'dishwash', 'toilet-cleaners', 'air-fresheners',
                    'mosquito-repellents', 'garbage-bags', 'tissues', 'paper-towels'
                ]
            }
        }
    },

    // 7. HEALTH & WELLNESS
    health: {
        id: 'health',
        name: 'Health & Wellness',
        icon: '💊',
        categories: {
            'medicines': {
                name: 'Medicines',
                icon: '💊',
                subcategories: [
                    'otc-medicines', 'prescription-drugs', 'first-aid', 'pain-relief',
                    'cold-flu', 'digestive', 'vitamins', 'antibiotics'
                ]
            },
            'health-supplements': {
                name: 'Health Supplements',
                icon: '🥤',
                subcategories: [
                    'protein-powder', 'multivitamins', 'omega-3', 'calcium', 'iron',
                    'weight-gainers', 'weight-loss', 'immunity-boosters'
                ]
            },
            'medical-devices': {
                name: 'Medical Devices',
                icon: '🩺',
                subcategories: [
                    'bp-monitors', 'thermometers', 'glucometers', 'oximeters', 'nebulizers',
                    'weighing-scales', 'wheelchairs', 'walkers', 'hearing-aids'
                ]
            },
            'ayurveda': {
                name: 'Ayurveda & Natural',
                icon: '🌿',
                subcategories: [
                    'ayurvedic-medicines', 'herbal-products', 'organic-supplements',
                    'essential-oils', 'natural-remedies', 'homeopathy'
                ]
            },
            'personal-hygiene': {
                name: 'Personal Hygiene',
                icon: '🧼',
                subcategories: [
                    'masks', 'sanitizers-health', 'gloves', 'adult-diapers', 'sanitary-pads',
                    'tampons', 'intimate-hygiene', 'dental-care'
                ]
            }
        }
    },

    // 8. SPORTS & FITNESS
    sports: {
        id: 'sports',
        name: 'Sports & Fitness',
        icon: '⚽',
        categories: {
            'sports-equipment': {
                name: 'Sports Equipment',
                icon: '🏏',
                subcategories: [
                    'cricket', 'football', 'badminton', 'tennis', 'basketball',
                    'volleyball', 'swimming', 'cycling', 'running', 'golf'
                ]
            },
            'gym-fitness': {
                name: 'Gym & Fitness',
                icon: '💪',
                subcategories: [
                    'dumbbells', 'gym-machines', 'yoga-mats', 'resistance-bands',
                    'kettlebells', 'pull-up-bars', 'treadmills', 'exercise-bikes'
                ]
            },
            'outdoor-adventure': {
                name: 'Outdoor & Adventure',
                icon: '🏕️',
                subcategories: [
                    'camping', 'trekking', 'hiking', 'climbing', 'fishing',
                    'hunting', 'backpacks', 'tents', 'sleeping-bags'
                ]
            },
            'sports-nutrition': {
                name: 'Sports Nutrition',
                icon: '🥤',
                subcategories: [
                    'protein-bars', 'energy-bars', 'sports-drinks', 'bcaa',
                    'creatine', 'pre-workout', 'post-workout'
                ]
            }
        }
    },

    // 9. JEWELRY & ACCESSORIES
    jewelry: {
        id: 'jewelry',
        name: 'Jewelry & Accessories',
        icon: '💍',
        categories: {
            'gold-jewelry': {
                name: 'Gold Jewelry',
                icon: '👑',
                subcategories: [
                    'gold-necklaces', 'gold-earrings', 'gold-rings', 'gold-bangles',
                    'gold-chains', 'gold-pendants', 'gold-bracelets', 'gold-anklets'
                ]
            },
            'silver-jewelry': {
                name: 'Silver Jewelry',
                icon: '💎',
                subcategories: [
                    'silver-rings', 'silver-earrings', 'silver-necklaces', 'silver-bracelets',
                    'silver-anklets', 'silver-toe-rings', 'silver-pendants'
                ]
            },
            'diamond-jewelry': {
                name: 'Diamond Jewelry',
                icon: '💎',
                subcategories: [
                    'diamond-rings', 'diamond-earrings', 'diamond-necklaces', 'diamond-pendants',
                    'diamond-bracelets', 'solitaires'
                ]
            },
            'fashion-jewelry': {
                name: 'Fashion Jewelry',
                icon: '📿',
                subcategories: [
                    'artificial-jewelry', 'oxidized-jewelry', 'beaded-jewelry', 'thread-jewelry',
                    'costume-jewelry', 'tribal-jewelry', 'antique-jewelry'
                ]
            },
            'watches': {
                name: 'Watches',
                icon: '⌚',
                subcategories: [
                    'analog-watches', 'digital-watches', 'smart-watches', 'luxury-watches',
                    'sports-watches', 'casual-watches', 'formal-watches'
                ]
            },
            'bags-wallets': {
                name: 'Bags & Wallets',
                icon: '👜',
                subcategories: [
                    'handbags', 'clutches', 'wallets', 'backpacks-accessories', 'sling-bags',
                    'tote-bags', 'laptop-bags', 'travel-bags', 'card-holders'
                ]
            }
        }
    },

    // 10. FOOTWEAR
    footwear: {
        id: 'footwear',
        name: 'Footwear',
        icon: '👞',
        categories: {
            'mens-footwear': {
                name: "Men's Footwear",
                icon: '👞',
                subcategories: [
                    'formal-shoes', 'casual-shoes', 'sports-shoes-men', 'sandals-men',
                    'slippers-men', 'boots-men', 'loafers', 'sneakers-men', 'ethnic-footwear-men'
                ]
            },
            'womens-footwear': {
                name: "Women's Footwear",
                icon: '👠',
                subcategories: [
                    'heels', 'wedges', 'flats', 'sandals-women', 'sports-shoes-women',
                    'boots-women', 'slippers-women', 'sneakers-women', 'ethnic-footwear-women'
                ]
            },
            'kids-footwear': {
                name: "Kids' Footwear",
                icon: '👟',
                subcategories: [
                    'school-shoes', 'casual-shoes-kids', 'sandals-kids', 'sports-shoes-kids',
                    'slippers-kids', 'boots-kids'
                ]
            }
        }
    },

    // 11. BABY & KIDS
    baby: {
        id: 'baby',
        name: 'Baby & Kids',
        icon: '🍼',
        categories: {
            'baby-care': {
                name: 'Baby Care',
                icon: '👶',
                subcategories: [
                    'diapers', 'baby-wipes', 'baby-powder', 'baby-oil', 'baby-lotion',
                    'baby-shampoo', 'baby-soap', 'baby-cream', 'baby-food', 'formula-milk'
                ]
            },
            'kids-toys': {
                name: 'Kids Toys',
                icon: '🧸',
                subcategories: [
                    'soft-toys', 'educational-toys', 'board-games', 'puzzles', 'building-blocks',
                    'remote-control-toys', 'dolls', 'action-figures', 'outdoor-toys'
                ]
            },
            'school-supplies': {
                name: 'School Supplies',
                icon: '🎒',
                subcategories: [
                    'school-bags', 'lunch-boxes', 'water-bottles', 'pencil-boxes',
                    'notebooks', 'stationery-kids', 'art-supplies-kids'
                ]
            },
            'baby-gear': {
                name: 'Baby Gear',
                icon: '🚼',
                subcategories: [
                    'strollers', 'car-seats', 'baby-carriers', 'cribs', 'high-chairs',
                    'baby-monitors', 'baby-walkers', 'feeding-bottles'
                ]
            }
        }
    },

    // 12. BOOKS & STATIONERY
    books: {
        id: 'books',
        name: 'Books & Stationery',
        icon: '📚',
        categories: {
            'books': {
                name: 'Books',
                icon: '📖',
                subcategories: [
                    'fiction', 'non-fiction', 'educational', 'children-books', 'comics',
                    'biographies', 'self-help', 'religious', 'competitive-exams'
                ]
            },
            'stationery': {
                name: 'Stationery',
                icon: '✏️',
                subcategories: [
                    'notebooks', 'pens', 'pencils', 'markers', 'files-folders',
                    'calculators', 'diaries', 'calendars', 'desk-organizers'
                ]
            },
            'office-supplies': {
                name: 'Office Supplies',
                icon: '📎',
                subcategories: [
                    'printers-scanners', 'paper', 'ink-toner', 'staplers', 'punches',
                    'whiteboard', 'sticky-notes', 'paper-clips', 'tape'
                ]
            },
            'art-craft': {
                name: 'Art & Craft',
                icon: '🎨',
                subcategories: [
                    'paints', 'brushes', 'canvas', 'sketch-pads', 'craft-paper',
                    'glue', 'scissors', 'craft-kits', 'origami'
                ]
            }
        }
    },

    // 13. AUTOMOTIVE
    automotive: {
        id: 'automotive',
        name: 'Automotive',
        icon: '🚗',
        categories: {
            'car-accessories': {
                name: 'Car Accessories',
                icon: '🚗',
                subcategories: [
                    'car-covers', 'seat-covers', 'floor-mats', 'steering-covers',
                    'air-fresheners', 'mobile-holders', 'dash-cams', 'car-chargers'
                ]
            },
            'bike-accessories': {
                name: 'Bike Accessories',
                icon: '🏍️',
                subcategories: [
                    'helmets', 'bike-covers', 'riding-gloves', 'riding-jackets',
                    'bike-locks', 'mobile-mounts', 'side-bags'
                ]
            },
            'spare-parts': {
                name: 'Spare Parts',
                icon: '🔧',
                subcategories: [
                    'batteries', 'tyres', 'engine-oil', 'filters', 'brake-pads',
                    'spark-plugs', 'headlights', 'wipers'
                ]
            },
            'car-care': {
                name: 'Car Care',
                icon: '🧽',
                subcategories: [
                    'car-wash', 'car-polish', 'car-wax', 'cleaning-kits',
                    'vacuum-cleaners-auto', 'tire-inflators'
                ]
            }
        }
    },

    // 14. PET SUPPLIES
    pets: {
        id: 'pets',
        name: 'Pet Supplies',
        icon: '🐾',
        categories: {
            'pet-food': {
                name: 'Pet Food',
                icon: '🦴',
                subcategories: [
                    'dog-food', 'cat-food', 'bird-food', 'fish-food', 'pet-treats',
                    'pet-supplements'
                ]
            },
            'pet-accessories': {
                name: 'Pet Accessories',
                icon: '🎾',
                subcategories: [
                    'pet-toys', 'pet-beds', 'pet-bowls', 'leashes-collars',
                    'pet-clothing', 'pet-carriers', 'pet-grooming'
                ]
            },
            'pet-healthcare': {
                name: 'Pet Healthcare',
                icon: '🩺',
                subcategories: [
                    'pet-medicines', 'flea-tick', 'pet-shampoo', 'pet-vitamins'
                ]
            }
        }
    },

    // 15. TRAVEL & LUGGAGE
    travel: {
        id: 'travel',
        name: 'Travel & Luggage',
        icon: '✈️',
        categories: {
            'luggage': {
                name: 'Luggage',
                icon: '🧳',
                subcategories: [
                    'suitcases', 'trolley-bags', 'duffel-bags', 'backpacks-travel',
                    'travel-pouches', 'laptop-bags-travel'
                ]
            },
            'travel-accessories': {
                name: 'Travel Accessories',
                icon: '🎒',
                subcategories: [
                    'neck-pillows', 'eye-masks', 'luggage-tags', 'travel-adapters',
                    'travel-locks', 'passport-holders', 'travel-bottles'
                ]
            }
        }
    },

    // 16. SERVICES
    services: {
        id: 'services',
        name: 'Services',
        icon: '🛠️',
        categories: {
            'home-services': {
                name: 'Home Services',
                icon: '🏠',
                subcategories: [
                    'plumbing', 'electrical', 'carpentry', 'painting', 'cleaning',
                    'pest-control', 'ac-repair', 'appliance-repair'
                ]
            },
            'professional-services': {
                name: 'Professional Services',
                icon: '💼',
                subcategories: [
                    'legal', 'accounting', 'consulting', 'marketing', 'design',
                    'photography', 'videography', 'content-writing'
                ]
            },
            'educational-services': {
                name: 'Educational Services',
                icon: '🎓',
                subcategories: [
                    'tuition', 'online-courses', 'coaching', 'music-classes',
                    'dance-classes', 'art-classes', 'language-classes'
                ]
            },
            'health-services': {
                name: 'Healthcare Services',
                icon: '🏥',
                subcategories: [
                    'doctor-consultation', 'dentist', 'physiotherapy', 'diagnostics',
                    'nursing-care', 'ambulance'
                ]
            }
        }
    },

    // 17. REAL ESTATE
    realestate: {
        id: 'realestate',
        name: 'Real Estate',
        icon: '🏢',
        categories: {
            'residential': {
                name: 'Residential',
                icon: '🏠',
                subcategories: [
                    'apartments', 'villas', 'plots', 'independent-houses',
                    'builder-floors', 'farm-houses'
                ]
            },
            'commercial': {
                name: 'Commercial',
                icon: '🏢',
                subcategories: [
                    'offices', 'shops', 'showrooms', 'warehouses', 'factories'
                ]
            },
            'rentals': {
                name: 'Rentals',
                icon: '🔑',
                subcategories: [
                    'rental-apartments', 'pg-hostels', 'co-working', 'vacation-rentals'
                ]
            }
        }
    },

    // 18. WEDDING & EVENTS
    wedding: {
        id: 'wedding',
        name: 'Wedding & Events',
        icon: '💒',
        categories: {
            'wedding-services': {
                name: 'Wedding Services',
                icon: '💍',
                subcategories: [
                    'wedding-venues', 'wedding-planners', 'wedding-photographers',
                    'wedding-decorators', 'wedding-catering', 'wedding-cards',
                    'mehendi-artists', 'makeup-artists', 'wedding-dresses'
                ]
            },
            'event-services': {
                name: 'Event Services',
                icon: '🎉',
                subcategories: [
                    'birthday-parties', 'corporate-events', 'dj-music', 'event-management',
                    'balloon-decoration', 'flower-decoration'
                ]
            }
        }
    },

    // 19. AGRICULTURE
    agriculture: {
        id: 'agriculture',
        name: 'Agriculture',
        icon: '🌾',
        categories: {
            'seeds-plants': {
                name: 'Seeds & Plants',
                icon: '🌱',
                subcategories: [
                    'vegetable-seeds', 'fruit-seeds', 'flower-seeds', 'crop-seeds',
                    'saplings', 'nursery-plants'
                ]
            },
            'farming-equipment': {
                name: 'Farming Equipment',
                icon: '🚜',
                subcategories: [
                    'tractors', 'harvesters', 'tillers', 'sprayers', 'irrigation-systems'
                ]
            },
            'fertilizers-pesticides': {
                name: 'Fertilizers & Pesticides',
                icon: '🧪',
                subcategories: [
                    'organic-fertilizers', 'chemical-fertilizers', 'pesticides',
                    'fungicides', 'growth-promoters'
                ]
            }
        }
    },

    // 20. INDUSTRIAL & B2B
    industrial: {
        id: 'industrial',
        name: 'Industrial & B2B',
        icon: '🏭',
        categories: {
            'machinery': {
                name: 'Machinery',
                icon: '⚙️',
                subcategories: [
                    'manufacturing-machines', 'packaging-machines', 'printing-machines',
                    'construction-equipment', 'material-handling'
                ]
            },
            'raw-materials': {
                name: 'Raw Materials',
                icon: '📦',
                subcategories: [
                    'metals', 'plastics', 'chemicals', 'textiles', 'paper',
                    'rubber', 'glass', 'wood'
                ]
            },
            'safety-equipment': {
                name: 'Safety Equipment',
                icon: '🦺',
                subcategories: [
                    'safety-helmets', 'safety-shoes', 'safety-gloves', 'safety-goggles',
                    'fire-extinguishers', 'first-aid-kits'
                ]
            }
        }
    },

    // 21. ARTS & CRAFTS
    arts: {
        id: 'arts',
        name: 'Arts & Crafts',
        icon: '🎨',
        categories: {
            'handicrafts': {
                name: 'Handicrafts',
                icon: '🪔',
                subcategories: [
                    'pottery', 'woodwork', 'metalwork', 'glasswork', 'embroidery',
                    'weaving', 'paper-crafts', 'stone-crafts'
                ]
            },
            'paintings': {
                name: 'Paintings',
                icon: '🖼️',
                subcategories: [
                    'oil-paintings', 'watercolor', 'acrylic', 'abstract', 'portraits',
                    'landscapes', 'modern-art', 'traditional-art'
                ]
            }
        }
    },

    // 22. ENTERTAINMENT
    entertainment: {
        id: 'entertainment',
        name: 'Entertainment',
        icon: '🎬',
        categories: {
            'movies-shows': {
                name: 'Movies & Shows',
                icon: '🎬',
                subcategories: [
                    'movie-tickets', 'streaming-services', 'dvds', 'music-albums'
                ]
            },
            'events-concerts': {
                name: 'Events & Concerts',
                icon: '🎤',
                subcategories: [
                    'concert-tickets', 'comedy-shows', 'theater', 'sports-events'
                ]
            },
            'gaming-entertainment': {
                name: 'Gaming',
                icon: '🎮',
                subcategories: [
                    'video-games', 'board-games', 'card-games', 'gaming-subscriptions'
                ]
            }
        }
    },

    // 23. EDUCATION & TRAINING
    education: {
        id: 'education',
        name: 'Education & Training',
        icon: '🎓',
        categories: {
            'academic': {
                name: 'Academic Courses',
                icon: '📚',
                subcategories: [
                    'school-education', 'college-courses', 'university-programs',
                    'distance-learning', 'online-degrees'
                ]
            },
            'professional': {
                name: 'Professional Training',
                icon: '💼',
                subcategories: [
                    'it-courses', 'management-courses', 'finance-courses',
                    'marketing-courses', 'design-courses'
                ]
            },
            'competitive': {
                name: 'Competitive Exams',
                icon: '📝',
                subcategories: [
                    'upsc', 'banking', 'ssc', 'railway', 'defense',
                    'medical-entrance', 'engineering-entrance'
                ]
            },
            'skill-development': {
                name: 'Skill Development',
                icon: '🛠️',
                subcategories: [
                    'programming', 'data-science', 'digital-marketing',
                    'graphic-design', 'video-editing', 'photography-courses'
                ]
            }
        }
    },

    // 24. FINANCIAL SERVICES
    financial: {
        id: 'financial',
        name: 'Financial Services',
        icon: '💰',
        categories: {
            'banking': {
                name: 'Banking',
                icon: '🏦',
                subcategories: [
                    'savings-accounts', 'current-accounts', 'fixed-deposits',
                    'credit-cards', 'debit-cards'
                ]
            },
            'insurance': {
                name: 'Insurance',
                icon: '🛡️',
                subcategories: [
                    'life-insurance', 'health-insurance', 'car-insurance',
                    'home-insurance', 'travel-insurance'
                ]
            },
            'investments': {
                name: 'Investments',
                icon: '📈',
                subcategories: [
                    'mutual-funds', 'stocks', 'bonds', 'gold-investment',
                    'real-estate-investment'
                ]
            },
            'loans': {
                name: 'Loans',
                icon: '💳',
                subcategories: [
                    'personal-loans', 'home-loans', 'car-loans', 'education-loans',
                    'business-loans'
                ]
            }
        }
    },

    // 25. GIFTS & FLOWERS
    gifts: {
        id: 'gifts',
        name: 'Gifts & Flowers',
        icon: '🎁',
        categories: {
            'gift-items': {
                name: 'Gift Items',
                icon: '🎁',
                subcategories: [
                    'personalized-gifts', 'birthday-gifts', 'anniversary-gifts',
                    'wedding-gifts', 'corporate-gifts', 'festival-gifts'
                ]
            },
            'flowers': {
                name: 'Flowers & Bouquets',
                icon: '💐',
                subcategories: [
                    'roses', 'orchids', 'lilies', 'mixed-bouquets', 'flower-arrangements',
                    'dried-flowers'
                ]
            },
            'cakes-gifts': {
                name: 'Cakes & Combos',
                icon: '🎂',
                subcategories: [
                    'birthday-cakes', 'wedding-cakes', 'photo-cakes', 'gift-combos'
                ]
            }
        }
    }
};

// Subcategory name mappings for display
const SUBCATEGORY_DISPLAY_NAMES = {
    // Fashion
    'shirts': 'Shirts',
    'tshirts': 'T-Shirts',
    'kurtas': 'Kurtas',
    'kurta-pajamas': 'Kurta Pajama Sets',
    'sherwanis': 'Sherwanis',
    'sarees': 'Sarees',
    'lehengas': 'Lehengas',
    'salwar-suits': 'Salwar Suits',
    'kurtis': 'Kurtis & Tunics',
    'anarkalis': 'Anarkali Suits',
    // Add more as needed...
};

// Export for use in other files
if (typeof window !== 'undefined') {
    window.COMPREHENSIVE_CATEGORIES = COMPREHENSIVE_CATEGORIES;
    window.SUBCATEGORY_DISPLAY_NAMES = SUBCATEGORY_DISPLAY_NAMES;
}
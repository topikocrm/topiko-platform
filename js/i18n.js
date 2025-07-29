/**
 * Topiko Lead Form - Internationalization System
 * Supports: English, Hindi, Telugu, Tamil
 */

// Translation data objects
const translations = {
    en: {
        // Page meta
        page: {
            title: "Topiko - Complete Business Platform"
        },

        // Welcome screen
        welcome: {
            tagline: "Complete Business Platform for Indian SMBs",
            try_free: "Try for Free"
        },

        // Language selection
        language: {
            title: "Choose Your Language",
            subtitle: "अपनी भाषा चुनें | మీ భాషను ఎంచుకోండి | உங்கள் மொழியைத் தேர்ந்தெடுக்கவும்",
            english: {
                name: "English",
                continue: "Continue in English"
            },
            hindi: {
                name: "हिन्दी",
                continue: "हिन्दी में जारी रखें"
            },
            telugu: {
                name: "తెలుగు",
                continue: "తెలుగులో కొనసాగించండి"
            },
            tamil: {
                name: "தமிழ்",
                continue: "தமிழில் தொடரவும்"
            }
        },

        // Progress bar
        progress: {
            goals: "Business Goals",
            signup: "Sign Up",
            success_factors: "Success Factors",
            business_live1: "Business Live-1",
            business_live2: "Business Live-2",
            business_live3: "Business Live-3"
        },

        // Goals section
        goals: {
            title: "Select Your Goals",
            subtitle: "Choose what you want to achieve with Topiko (select all that apply)",
            ecommerce: {
                title: "Sell Online (E-commerce)",
                description: "Start selling your products online with a complete e-commerce solution"
            },
            customers: {
                title: "Reach More Customers",
                description: "Expand your customer base and grow your market reach"
            },
            manage: {
                title: "Manage Customers",
                description: "Keep track of your customers and build lasting relationships"
            },
            search: {
                title: "Appear in Search Results",
                description: "Improve your online visibility and get found by potential customers"
            },
            brand: {
                title: "Establish my Brand",
                description: "Build a strong brand presence and professional image online"
            }
        },

        // Registration section
        registration: {
            title: "Get Started with Topiko",
            subtitle: "Tell us about your business to create your free account",
            create_account: "Create Free Account",
            fields: {
                name: {
                    label: "Your Name",
                    placeholder: "Enter your full name"
                },
                email: {
                    label: "Email Address",
                    placeholder: "Enter your email address"
                },
                phone: {
                    label: "Phone Number",
                    placeholder: "Enter your phone number"
                },
                business_name: {
                    label: "Business Name",
                    placeholder: "Enter your business name"
                },
                address: {
                    label: "Address",
                    placeholder: "Enter your business address"
                },
                business_type: {
                    label: "Business Type",
                    placeholder: "Select your business type",
                    options: {
                        startup: "Startup",
                        small_business: "Small Business",
                        medium_enterprise: "Medium Enterprise",
                        large_enterprise: "Large Enterprise",
                        freelancer: "Freelancer"
                    }
                },
                category: {
                    label: "Business Category",
                    placeholder: "Select your business category"
                }
            }
        },

        // Qualifying questions
        qualifying: {
            title: "Let's setup things for you",
            subtitle: "Just need a couple of details about your business",
            create_business: "Create my Business 🚀",
            online_presence: {
                question: "Do you currently have any online presence?",
                options: {
                    none: "No online presence at all",
                    whatsapp: "Only WhatsApp Business",
                    social: "Social media pages (Facebook/Instagram)",
                    basic_website: "Basic website",
                    full_website: "Full website with online ordering"
                }
            },
            budget: {
                question: "To meet your business goals, how much budget can you allocate per year?",
                options: {
                    low: "₹5,000 to ₹10,000",
                    medium: "₹10,000 to ₹25,000",
                    high: "More than ₹25,000"
                }
            },
            decision_maker: {
                question: "Are you the decision maker for your business?"
            },
            timeline: {
                question: "How soon do you want to get started?",
                options: {
                    immediately: "Immediately",
                    within_week: "Within a week",
                    this_month: "This month",
                    just_checking: "Just checking"
                }
            }
        },

        // Categories section
        categories: {
            title: "Select Your Business Categories",
            subtitle: "Choose specific categories and subcategories that best describe your business",
            continue_products: "Continue to Add Products",
            loading_messages: "🔄 Loading personalized messages for Perfect...",
            summary: {
                title: "📊 Your Selection Summary",
                categories: "Categories: ",
                subcategories: "Subcategories: "
            },
            boutique: "🏪 Boutique & Fashion",
            home_foods: "🍛 Home Foods & Catering",
            salons: "💄 Salons & Beauty",
            grocery: "🛒 Grocery & Provisions",
            furniture: "🛋️ Furniture & Home Decor",
            electronics: "📱 Electronics & Gadgets",
            jewellery: "💍 Jewellery & Accessories",
            restaurants: "🍽️ Restaurants & Cafes",
            fitness: "💪 Fitness & Wellness",
            education: "📚 Education & Training",
            automotive: "🚗 Automotive Services",
            healthcare: "🏥 Healthcare Services",
            professional: "💼 Professional Services",
            arts_crafts: "🎨 Arts & Crafts",
            travel: "✈️ Travel & Tourism",
            pet_services: "🐾 Pet Services & Supplies",
            real_estate: "🏠 Real Estate Services",
            event_services: "🎉 Event & Wedding Services",
            agriculture: "🌾 Agriculture & Farming",
            others: "🔧 Others"
        },

        // Products section
        products: {
            title: "Add Your Products",
            subtitle: "Choose from 500+ products or add your own custom products",
            back_categories: "← Back to Categories",
            choose_theme: "Choose Theme 🎨",
            loading: "Loading products...",
            help: {
                title: "🎯 Free Professional Setup Available!",
                text: "Topiko is helping with free setup for 75 businesses every month. 47 claimed for January. Click here for help!"
            },
            mode: {
                select: "Select from 500+ Products",
                custom: "Add Custom Product"
            },
            helpers: {
                popular: "✨ Select Popular Items",
                clear: "🗑️ Clear All"
            },
            filters: {
                all: "All Products",
                fashion: "Fashion",
                foods: "Home Foods",
                grocery: "Grocery",
                electronics: "Electronics",
                fitness: "Fitness",
                restaurant: "Restaurant"
            },
            search: {
                placeholder: "Search products..."
            },
            category_filter: {
                all: "All Categories"
            },
            sort: {
                name: "Sort by Name",
                price_low: "Price: Low to High",
                price_high: "Price: High to Low",
                category: "Category"
            },
            count: {
                products: "products"
            },
            price_range: {
                label: "Price Range: ₹",
                min: "Min",
                max: "Max",
                to: "to"
            },
            custom: {
                title: "Add Custom Product/Service",
                add_button: "➕ Add Custom Product",
                fields: {
                    name: {
                        label: "Product/Service Name",
                        placeholder: "e.g., Cotton Kurta, Masala Dosa, Haircut"
                    },
                    price: {
                        label: "Price (₹)",
                        placeholder: "e.g., 899"
                    },
                    category: {
                        label: "Category",
                        placeholder: "Select from your chosen categories"
                    },
                    subcategory: {
                        label: "Subcategory (Optional)",
                        placeholder: "Select a subcategory"
                    },
                    description: {
                        label: "Description",
                        placeholder: "Brief description of your product or service"
                    },
                    image: {
                        label: "Product Image URL (optional)",
                        placeholder: "https://example.com/image.jpg"
                    }
                }
            },
            selected: {
                title: "Selected Products"
            },
            catalog: {
                title: "Your Product Catalog",
                empty: "No products selected yet. Choose from 500+ products above or add custom products!"
            }
        },

        // Themes section
        themes: {
            title: "Choose Your Business Theme",
            subtitle: "Select a theme that represents your business style. See how your products will look!",
            back_products: "← Back to Products",
            complete_setup: "Complete Setup 🚀",
            no_theme_selected: "No theme selected",
            change_later: "You can change this anytime later",
            modern: {
                name: "Modern & Minimalist",
                description: "Clean, simple design that focuses on your products"
            },
            vibrant: {
                name: "Colorful & Vibrant",
                description: "Bold colors and energetic design to attract customers"
            },
            professional: {
                name: "Professional & Corporate",
                description: "Sophisticated design that builds trust and credibility"
            },
            traditional: {
                name: "Traditional & Classic",
                description: "Timeless design with warm, welcoming feel"
            },
            creative: {
                name: "Creative & Artistic",
                description: "Unique, artistic design that showcases creativity"
            },
            luxury: {
                name: "Elegant & Luxury",
                description: "Premium design for high-end products and services"
            }
        },

        // Modals
        modals: {
            goals_transition: {
                title: "Perfect! You've chosen the most important goals for business growth",
                subtitle: "These strategic choices will help us create the perfect online presence for your business!",
                selected_goals: "🎯 Your Selected Goals:",
                stats: "🚀 Over 5,200 businesses launched this month with our free setup!",
                get_setup: "Get My Free Setup! 🚀"
            },
            setup_intro: {
                title: "Excellent! We have everything we need to get started",
                steps_message: "Just 3 more quick steps and we'll show you exactly how your business will look online!",
                features: "💯 Completely free setup • ⚡ No technical knowledge needed • 🎯 Professional results guaranteed",
                create_amazing: "Let's Create Something Amazing! 🎯"
            },
            otp: {
                title: "Verify Your Phone Number",
                subtitle: "We've sent a 4-digit code to your phone. Enter it below to secure your account.",
                no_code: "Didn't receive the code?",
                resend: "Resend OTP",
                verify_continue: "Verify & Continue"
            }
        },

        // Widget and FOMO
        widget: {
            score: "Score"
        },
        fomo: {
            status: {
                just_registered: "Just Registered"
            },
            from: "from",
            action: {
                setup_store: "just set up their online store"
            },
            time: {
                minutes_ago: "minutes ago"
            },
            counter: {
                joined: "joined in<br>last 24 hours"
            }
        },

        // Common
        common: {
            next_step: "Next Step",
            yes: "Yes",
            no: "No"
        }
    },

    hi: {
        // Page meta
        page: {
            title: "टोपिको - पूर्ण व्यापार प्लेटफॉर्म"
        },

        // Welcome screen
        welcome: {
            tagline: "भारतीय एसएमबी के लिए पूर्ण व्यापार प्लेटफॉर्म",
            try_free: "मुफ्त में आज़माएं"
        },

        // Language selection
        language: {
            title: "अपनी भाषा चुनें",
            subtitle: "अपनी भाषा चुनें | మీ భాషను ఎంచుకోండి | உங்கள் மொழியைத் தேர்ந்தெடுக்கவும்",
            english: {
                name: "English",
                continue: "Continue in English"
            },
            hindi: {
                name: "हिन्दी",
                continue: "हिन्दी में जारी रखें"
            },
            telugu: {
                name: "తెలుగు",
                continue: "తెలుగులో కొనసాగించండి"
            },
            tamil: {
                name: "தமிழ்",
                continue: "தமிழில் தொடரवும்"
            }
        },

        // Progress bar
        progress: {
            goals: "व्यापार लक्ष्य",
            signup: "पंजीकरण",
            success_factors: "सफलता कारक",
            business_live1: "व्यापार लाइव-1",
            business_live2: "व्यापार लाइव-2",
            business_live3: "व्यापार लाइव-3"
        },

        // Goals section
        goals: {
            title: "अपने लक्ष्य चुनें",
            subtitle: "टोपिको के साथ आप क्या हासिल करना चाहते हैं (सभी लागू का चयन करें)",
            ecommerce: {
                title: "ऑनलाइन बेचें (ई-कॉमर्स)",
                description: "पूर्ण ई-कॉमर्स समाधान के साथ अपने उत्पाद ऑनलाइन बेचना शुरू करें"
            },
            customers: {
                title: "अधिक ग्राहक तक पहुंचें",
                description: "अपने ग्राहक आधार का विस्तार करें और अपनी बाजार पहुंच बढ़ाएं"
            },
            manage: {
                title: "ग्राहकों का प्रबंधन करें",
                description: "अपने ग्राहकों का ट्रैक रखें और स्थायी संबंध बनाएं"
            },
            search: {
                title: "खोज परिणामों में दिखाई दें",
                description: "अपनी ऑनलाइन दृश्यता सुधारें और संभावित ग्राहकों द्वारा पाए जाएं"
            },
            brand: {
                title: "अपना ब्रांड स्थापित करें",
                description: "ऑनलाइन मजबूत ब्रांड उपस्थिति और पेशेवर छवि बनाएं"
            }
        },

        // Registration section
        registration: {
            title: "टोपिको के साथ शुरुआत करें",
            subtitle: "अपना मुफ्त खाता बनाने के लिए हमें अपने व्यापार के बारे में बताएं",
            create_account: "मुफ्त खाता बनाएं",
            fields: {
                name: {
                    label: "आपका नाम",
                    placeholder: "अपना पूरा नाम दर्ज करें"
                },
                email: {
                    label: "ईमेल पता",
                    placeholder: "अपना ईमेल पता दर्ज करें"
                },
                phone: {
                    label: "फोन नंबर",
                    placeholder: "अपना फोन नंबर दर्ज करें"
                },
                business_name: {
                    label: "व्यापार का नाम",
                    placeholder: "अपने व्यापार का नाम दर्ज करें"
                },
                address: {
                    label: "पता",
                    placeholder: "अपने व्यापार का पता दर्ज करें"
                },
                business_type: {
                    label: "व्यापार प्रकार",
                    placeholder: "अपना व्यापार प्रकार चुनें",
                    options: {
                        startup: "स्टार्टअप",
                        small_business: "छोटा व्यापार",
                        medium_enterprise: "मध्यम उद्यम",
                        large_enterprise: "बड़ा उद्यम",
                        freelancer: "फ्रीलांसर"
                    }
                },
                category: {
                    label: "व्यापार श्रेणी",
                    placeholder: "अपनी व्यापार श्रेणी चुनें"
                }
            }
        },

        // Qualifying questions
        qualifying: {
            title: "आइए आपके लिए चीजें सेट करते हैं",
            subtitle: "बस आपके व्यापार के बारे में कुछ विवरण चाहिए",
            create_business: "मेरा व्यापार बनाएं 🚀",
            online_presence: {
                question: "क्या आपकी वर्तमान में कोई ऑनलाइन उपस्थिति है?",
                options: {
                    none: "बिल्कुल कोई ऑनलाइन उपस्थिति नहीं",
                    whatsapp: "केवल व्हाट्सएप बिजनेस",
                    social: "सोशल मीडिया पेज (फेसबुक/इंस्टाग्राम)",
                    basic_website: "बुनियादी वेबसाइट",
                    full_website: "ऑनलाइन ऑर्डरिंग के साथ पूर्ण वेबसाइट"
                }
            },
            budget: {
                question: "अपने व्यापार लक्ष्यों को पूरा करने के लिए, आप प्रति वर्ष कितना बजट आवंटित कर सकते हैं?",
                options: {
                    low: "₹5,000 से ₹10,000",
                    medium: "₹10,000 से ₹25,000",
                    high: "₹25,000 से अधिक"
                }
            },
            decision_maker: {
                question: "क्या आप अपने व्यापार के लिए निर्णय लेने वाले हैं?"
            },
            timeline: {
                question: "आप कितनी जल्दी शुरुआत करना चाहते हैं?",
                options: {
                    immediately: "तुरंत",
                    within_week: "एक सप्ताह के भीतर",
                    this_month: "इस महीने",
                    just_checking: "बस जांच रहा हूं"
                }
            }
        },

        // Continue with other sections...
        categories: {
            title: "अपनी व्यापार श्रेणियां चुनें",
            subtitle: "विशिष्ट श्रेणियां और उप-श्रेणियां चुनें जो आपके व्यापार का सबसे अच्छा वर्णन करती हैं",
            continue_products: "उत्पाद जोड़ने के लिए जारी रखें",
            loading_messages: "🔄 परफेक्ट के लिए व्यक्तिगत संदेश लोड हो रहे हैं...",
            summary: {
                title: "📊 आपका चयन सारांश",
                categories: "श्रेणियां: ",
                subcategories: "उप-श्रेणियां: "
            }
        },

        // Common
        common: {
            next_step: "अगला चरण",
            yes: "हाँ",
            no: "नहीं"
        }
    },

    te: {
        // Page meta
        page: {
            title: "టోపికో - పూర్తి వ్యాపార వేదిక"
        },

        // Welcome screen
        welcome: {
            tagline: "భారతీయ SMBల కోసం పూర్తి వ్యాపార వేదిక",
            try_free: "ఉచితంగా ప్రయత్నించండి"
        },

        // Language selection
        language: {
            title: "మీ భాషను ఎంచుకోండి",
            subtitle: "अपनी भाषा चुनें | మీ భాషను ఎంచుకోండి | உங்கள் மொழியைத் தேர்ந்தெடுக்கவும்",
            english: {
                name: "English",
                continue: "Continue in English"
            },
            hindi: {
                name: "हिन्दी",
                continue: "हिन्दी में जारी रखें"
            },
            telugu: {
                name: "తెలుగు",
                continue: "తెలుగులో కొనసాగించండి"
            },
            tamil: {
                name: "தமிழ்",
                continue: "தமிழில் தொடரवும்"
            }
        },

        // Progress bar
        progress: {
            goals: "వ్యాపార లక్ష్యాలు",
            signup: "నమోదు",
            success_factors: "విజయ కారకాలు",
            business_live1: "వ్యాపారం లైవ్-1",
            business_live2: "వ్యాపారం లైవ్-2",
            business_live3: "వ్యాపారం లైవ్-3"
        },

        // Goals section
        goals: {
            title: "మీ లక్ష్యాలను ఎంచుకోండి",
            subtitle: "టోపికోతో మీరు ఏమి సాధించాలనుకుంటున్నారు (వర్తించే అన్నింటిని ఎంచుకోండి)",
            ecommerce: {
                title: "ఆన్‌లైన్ అమ్మకం (ఈ-కామర్స్)",
                description: "పూర్తి ఈ-కామర్స్ పరిష్కారంతో మీ ఉత్పాదనలను ఆన్‌లైన్‌లో అమ్మడం ప్రారంభించండి"
            },
            customers: {
                title: "మరిన్ని కస్టమర్లను చేరుకోండి",
                description: "మీ కస్టమర్ బేస్‌ను విస్తరించండి మరియు మీ మార్కెట్ రీచ్‌ను పెంచండి"
            },
            manage: {
                title: "కస్టమర్లను నిర్వహించండి",
                description: "మీ కస్టమర్లను ట్రాక్ చేయండి మరియు శాశ్వత సంబంధాలను నిర్మించండి"
            },
            search: {
                title: "శోధన ఫలితాలలో కనిపించండి",
                description: "మీ ఆన్‌లైన్ దృశ్యమానతను మెరుగుపరచండి మరియు సంభావ్య కస్టమర్లచే కనుగొనబడండి"
            },
            brand: {
                title: "నా బ్రాండ్‌ను స్థాపించండి",
                description: "ఆన్‌లైన్‌లో బలమైన బ్రాండ్ ఉపస్థితి మరియు వృత్తిపరమైన ఇమేజ్‌ను నిర్మించండి"
            }
        },

        // Common
        common: {
            next_step: "తదుపరి దశ",
            yes: "అవును",
            no: "లేదు"
        }
    },

    ta: {
        // Page meta
        page: {
            title: "டோபிகோ - முழுமையான வணிக தளம்"
        },

        // Welcome screen
        welcome: {
            tagline: "இந்திய SMBகளுக்கான முழுமையான வணிக தளம்",
            try_free: "இலவசமாக முயற்சிக்கவும்"
        },

        // Language selection
        language: {
            title: "உங்கள் மொழியைத் தேர்ந்தெடுக்கவும்",
            subtitle: "अपनी भाषा चुनें | మీ భాషను ఎంచుకోండి | உங்கள் மொழியைத் தேர்ந்தெடுக்கவும்",
            english: {
                name: "English",
                continue: "Continue in English"
            },
            hindi: {
                name: "हिन्दी",
                continue: "हिन्दी में जारी रखें"
            },
            telugu: {
                name: "తెలుగు",
                continue: "తెలుగులో కొనసాగించండి"
            },
            tamil: {
                name: "தமிழ்",
                continue: "தமிழில் தொடரவும்"
            }
        },

        // Progress bar
        progress: {
            goals: "வணிக இலக்குகள்",
            signup: "பதிவு",
            success_factors: "வெற்றி காரணிகள்",
            business_live1: "வணிகம் லைவ்-1",
            business_live2: "வணிகம் லைவ்-2",
            business_live3: "வணிகம் லைவ்-3"
        },

        // Goals section
        goals: {
            title: "உங்கள் இலக்குகளைத் தேர்ந்தெடுக்கவும்",
            subtitle: "டோபிகோவுடன் நீங்கள் என்ன சாதிக்க விரும்புகிறீர்கள் (பொருந்தும் அனைத்தையும் தேர்ந்தெடுக்கவும்)",
            ecommerce: {
                title: "ஆன்லைனில் விற்பனை (ஈ-காமர்ஸ்)",
                description: "முழுமையான ஈ-காமர்ஸ் தீர்வுடன் உங்கள் தயாரிப்புகளை ஆன்லைனில் விற்க ஆரம்பிக்கவும்"
            },
            customers: {
                title: "அதிக வாடிக்கையாளர்களை அடையவும்",
                description: "உங்கள் வாடிக்கையாளர் தளத்தை விரிவுபடுத்தி உங்கள் சந்தை வரம்பை வளர்க்கவும்"
            },
            manage: {
                title: "வாடிக்கையாளர்களை நிர்வகிக்கவும்",
                description: "உங்கள் வாடிக்கையாளர்களை கண்காணித்து நீடித்த உறவுகளை உருவாக்கவும்"
            },
            search: {
                title: "தேடல் முடிவுகளில் தோன்றவும்",
                description: "உங்கள் ஆன்லைன் தெரிவுநிலையை மேம்படுத்தி சாத்தியமான வாடிக்கையாளர்களால் கண்டுபிடிக்கப்படவும்"
            },
            brand: {
                title: "எனது பிராண்டை நிறுவவும்",
                description: "ஆன்லைனில் வலுவான பிராண்ட் இருப்பு மற்றும் தொழில்முறை படத்தை உருவாக்கவும்"
            }
        },

        // Common
        common: {
            next_step: "அடுத்த படி",
            yes: "ஆம்",
            no: "இல்லை"
        }
    }
};

// Current language state
let currentLanguage = 'en';

// Translation engine functions
const i18n = {
    /**
     * Set the current language and translate the page
     * @param {string} lang - Language code (en, hi, te, ta)
     */
    setLanguage(lang) {
        if (!translations[lang]) {
            console.warn(`Language ${lang} not supported, falling back to English`);
            lang = 'en';
        }
        
        currentLanguage = lang;
        
        // Update HTML lang attribute
        document.documentElement.lang = lang;
        document.getElementById('htmlRoot').lang = lang;
        
        // Store language preference
        localStorage.setItem('topiko-language', lang);
        
        // Translate the page
        this.translatePage();
        
        // Update language-specific styling if needed
        this.updateLanguageStyles(lang);
        
        // Trigger custom event for other components
        window.dispatchEvent(new CustomEvent('languageChanged', { 
            detail: { language: lang } 
        }));
        
        console.log(`Language changed to: ${lang}`);
    },

    /**
     * Get the current language
     * @returns {string} Current language code
     */
    getCurrentLanguage() {
        return currentLanguage;
    },

    /**
     * Get translation for a specific key
     * @param {string} key - Translation key (e.g., 'welcome.title')
     * @param {string} lang - Optional language override
     * @returns {string} Translated text or key if not found
     */
    t(key, lang = currentLanguage) {
        const keys = key.split('.');
        let translation = translations[lang];
        
        for (const k of keys) {
            if (translation && typeof translation === 'object' && k in translation) {
                translation = translation[k];
            } else {
                console.warn(`Translation key not found: ${key} for language: ${lang}`);
                return key; // Return key if translation not found
            }
        }
        
        return translation || key;
    },

    /**
     * Translate all elements on the page
     */
    translatePage() {
        // Translate elements with data-i18n attribute
        const elementsToTranslate = document.querySelectorAll('[data-i18n]');
        elementsToTranslate.forEach(element => {
            const key = element.getAttribute('data-i18n');
            const translation = this.t(key);
            
            if (element.tagName === 'INPUT' && element.type === 'submit') {
                element.value = translation;
            } else if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.textContent = translation;
            } else {
                // Handle HTML content for elements like spans with line breaks
                if (translation.includes('<br>')) {
                    element.innerHTML = translation;
                } else {
                    element.textContent = translation;
                }
            }
        });

        // Translate placeholder attributes
        const elementsWithPlaceholders = document.querySelectorAll('[data-i18n-placeholder]');
        elementsWithPlaceholders.forEach(element => {
            const key = element.getAttribute('data-i18n-placeholder');
            const translation = this.t(key);
            element.placeholder = translation;
        });

        // Translate title attributes
        const elementsWithTitles = document.querySelectorAll('[data-i18n-title]');
        elementsWithTitles.forEach(element => {
            const key = element.getAttribute('data-i18n-title');
            const translation = this.t(key);
            element.title = translation;
        });

        // Translate aria-label attributes
        const elementsWithAriaLabels = document.querySelectorAll('[data-i18n-aria-label]');
        elementsWithAriaLabels.forEach(element => {
            const key = element.getAttribute('data-i18n-aria-label');
            const translation = this.t(key);
            element.setAttribute('aria-label', translation);
        });

        // Update document title
        document.title = this.t('page.title');
    },

    /**
     * Update language-specific styles
     * @param {string} lang - Language code
     */
    updateLanguageStyles(lang) {
        const body = document.body;
        
        // Remove existing language classes
        body.classList.remove('lang-en', 'lang-hi', 'lang-te', 'lang-ta');
        
        // Add current language class
        body.classList.add(`lang-${lang}`);
        
        // Set text direction for different languages
        if (['ar', 'he', 'ur'].includes(lang)) {
            document.documentElement.dir = 'rtl';
        } else {
            document.documentElement.dir = 'ltr';
        }
    },

    /**
     * Initialize i18n system
     */
    init() {
        // Check for saved language preference
        const savedLanguage = localStorage.getItem('topiko-language');
        
        // Detect browser language
        const browserLanguage = navigator.language.split('-')[0];
        
        // Determine initial language
        let initialLanguage = 'en'; // Default to English
        
        if (savedLanguage && translations[savedLanguage]) {
            initialLanguage = savedLanguage;
        } else if (translations[browserLanguage]) {
            initialLanguage = browserLanguage;
        }
        
        // Set initial language
        this.setLanguage(initialLanguage);
        
        console.log('i18n system initialized with language:', initialLanguage);
    },

    /**
     * Get list of available languages
     * @returns {Array} Array of language objects
     */
    getAvailableLanguages() {
        return [
            { code: 'en', name: 'English', native: 'English' },
            { code: 'hi', name: 'Hindi', native: 'हिन्दी' },
            { code: 'te', name: 'Telugu', native: 'తెలుగు' },
            { code: 'ta', name: 'Tamil', native: 'தமிழ்' }
        ];
    },

    /**
     * Translate dynamic content
     * @param {string} key - Translation key
     * @param {Object} replacements - Object with replacement values
     * @returns {string} Translated and interpolated text
     */
    translateDynamic(key, replacements = {}) {
        let translation = this.t(key);
        
        // Replace placeholders like {{name}} with actual values
        Object.keys(replacements).forEach(placeholder => {
            const regex = new RegExp(`{{${placeholder}}}`, 'g');
            translation = translation.replace(regex, replacements[placeholder]);
        });
        
        return translation;
    },

    /**
     * Format numbers according to language locale
     * @param {number} number - Number to format
     * @param {string} lang - Language code
     * @returns {string} Formatted number
     */
    formatNumber(number, lang = currentLanguage) {
        const localeMap = {
            'en': 'en-IN',
            'hi': 'hi-IN',
            'te': 'te-IN',
            'ta': 'ta-IN'
        };
        
        const locale = localeMap[lang] || 'en-IN';
        return new Intl.NumberFormat(locale).format(number);
    },

    /**
     * Format currency according to language locale
     * @param {number} amount - Amount to format
     * @param {string} lang - Language code
     * @returns {string} Formatted currency
     */
    formatCurrency(amount, lang = currentLanguage) {
        const localeMap = {
            'en': 'en-IN',
            'hi': 'hi-IN',
            'te': 'te-IN',
            'ta': 'ta-IN'
        };
        
        const locale = localeMap[lang] || 'en-IN';
        return new Intl.NumberFormat(locale, {
            style: 'currency',
            currency: 'INR'
        }).format(amount);
    }
};

// Language selection function for the UI
function selectLanguage(langCode, element) {
    // Update UI to show selected language
    document.querySelectorAll('.language-option').forEach(option => {
        option.classList.remove('selected');
    });
    element.classList.add('selected');
    
    // Set the language
    i18n.setLanguage(langCode);
    
    // Store the selection for the lead form
    if (typeof window.leadData !== 'undefined') {
        window.leadData.language = langCode;
    }
    
    // Show next step after a short delay
    setTimeout(() => {
        if (typeof navigateToStep === 'function') {
            navigateToStep('goals');
        }
    }, 500);
}

// Auto-initialize on DOM content loaded
document.addEventListener('DOMContentLoaded', () => {
    i18n.init();
});

// Export for global access
window.i18n = i18n;
window.selectLanguage = selectLanguage;
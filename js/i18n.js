/* ========================================
   TOPIKO i18n - INTERNATIONALIZATION
   ======================================== */

// ========================================
// TRANSLATION DATA
// ========================================

const TRANSLATIONS = {
    en: {
        // Welcome Screen
        welcome: {
            title: "Topiko",
            subtitle: "Complete Business Platform for Indian SMBs",
            button: "Try for Free"
        },

        // Language Selection
        language: {
            title: "Choose Your Language",
            subtitle: "अपनी भाषा चुनें | మీ భాషను ఎంచుకోండి | உங்கள் மொழியைத் தேர்ந்தெடுக்கவும்",
            english: "Continue in English",
            hindi: "हिन्दी में जारी रखें",
            telugu: "తెలుగులో కొనసాగించండి",
            tamil: "தமிழில் தொடரவும்"
        },

        // Goals Selection
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
            },
            button: "Next Step"
        },

        // Registration
        registration: {
            title: "Get Started with Topiko",
            subtitle: "Tell us about your business to create your free account",
            fields: {
                name: "Your Name",
                namePlaceholder: "Enter your full name",
                email: "Email Address",
                emailPlaceholder: "Enter your email address",
                phone: "Phone Number",
                phonePlaceholder: "Enter your phone number",
                business: "Business Name",
                businessPlaceholder: "Enter your business name",
                address: "Address",
                addressPlaceholder: "Enter your business address",
                type: "Business Type",
                typePlaceholder: "Select your business type",
                category: "Business Category",
                categoryPlaceholder: "Select your business category"
            },
            businessTypes: {
                startup: "Startup",
                smallBusiness: "Small Business",
                mediumEnterprise: "Medium Enterprise",
                largeEnterprise: "Large Enterprise",
                freelancer: "Freelancer"
            },
            button: "Create Free Account"
        },

        // Qualifying Questions
        qualifying: {
            title: "Let's setup things for you",
            subtitle: "Just need a couple of details about your business",
            questions: {
                presence: {
                    title: "Do you currently have any online presence?",
                    options: {
                        none: "No online presence at all",
                        whatsapp: "Only WhatsApp Business",
                        social: "Social media pages (Facebook/Instagram)",
                        basic: "Basic website",
                        full: "Full website with online ordering"
                    }
                },
                budget: {
                    title: "To meet your business goals, how much budget can you allocate per year?",
                    options: {
                        low: "₹5,000 to ₹10,000",
                        medium: "₹10,000 to ₹25,000",
                        high: "More than ₹25,000"
                    }
                },
                decision: {
                    title: "Are you the decision maker for your business?",
                    options: {
                        yes: "Yes",
                        no: "No"
                    }
                },
                timeline: {
                    title: "How soon do you want to get started?",
                    options: {
                        immediately: "Immediately",
                        week: "Within a week",
                        month: "This month",
                        checking: "Just checking"
                    }
                }
            },
            button: "Create my Business 🚀"
        },

        // Categories
        categories: {
            title: "Select Your Business Categories",
            subtitle: "Choose specific categories and subcategories that best describe your business",
            summaryTitle: "📊 Your Selection Summary",
            summaryCategories: "Categories:",
            summarySubcategories: "Subcategories:",
            button: "Continue to Add Products"
        },

        // Products
        products: {
            title: "Add Your Products",
            subtitle: "Choose from 500+ products or add your own custom products",
            helpTitle: "🎯 Free Professional Setup Available!",
            helpText: "Topiko is helping with free setup for 75 businesses every month. {claimed} claimed for {month}. Click here for help!",
            helpUrgent: "Only {remaining} spots left!",
            modes: {
                select: "Select from 500+ Products",
                custom: "Add Custom Product"
            },
            helpers: {
                popular: "✨ Select Popular Items",
                clear: "🗑️ Clear All"
            },
            filters: {
                all: "All Products",
                search: "Search products...",
                priceRange: "Price Range: ₹{min} - ₹{max}",
                count: "{count} products"
            },
            customForm: {
                title: "Add Custom Product/Service",
                fields: {
                    name: "Product/Service Name",
                    namePlaceholder: "e.g., Cotton Kurta, Masala Dosa, Haircut",
                    price: "Price (₹)",
                    pricePlaceholder: "e.g., 899",
                    category: "Category",
                    categoryPlaceholder: "Select from your chosen categories",
                    subcategory: "Subcategory (Optional)",
                    subcategoryPlaceholder: "Select a subcategory",
                    description: "Description",
                    descriptionPlaceholder: "Brief description of your product or service",
                    image: "Product Image URL (optional)",
                    imagePlaceholder: "https://example.com/image.jpg"
                },
                button: "➕ Add Custom Product"
            },
            catalogTitle: "Your Product Catalog ({count})",
            emptyMessage: "No products selected yet. Choose from 500+ products above or add custom products!",
            buttons: {
                back: "← Back to Categories",
                next: "Choose Theme 🎨"
            }
        },

        // Themes
        themes: {
            title: "Choose Your Business Theme",
            subtitle: "Select a theme that represents your business style. See how your products will look!",
            options: {
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
            noSelection: "No theme selected",
            canChange: "You can change this anytime later",
            buttons: {
                back: "← Back to Products",
                complete: "Complete Setup 🚀"
            }
        },

        // Common
        common: {
            loading: "Loading...",
            error: "Error occurred",
            success: "Success",
            cancel: "Cancel",
            save: "Save",
            edit: "Edit",
            delete: "Delete",
            confirm: "Confirm",
            back: "Back",
            next: "Next",
            finish: "Finish",
            close: "Close"
        },

        // Notifications
        notifications: {
            languageSelected: "Language: {language}",
            goalSelected: "Perfect! {count} goal{plural} selected!",
            accountCreated: "🎉 Welcome {name}! Account created successfully!",
            phoneVerified: "✅ Phone verified successfully!",
            productAdded: "✅ \"{name}\" added successfully!",
            themeSelected: "Perfect choice! {theme} theme selected!",
            setupComplete: "🎉 Congratulations {name}! Your business is ready to go online!"
        },

        // Business Categories (localized names)
        businessCategories: {
            boutique: "Boutique & Fashion",
            homefoods: "Home Foods & Catering",
            salons: "Salons & Beauty",
            grocery: "Grocery & Provisions",
            furniture: "Furniture & Home Decor",
            electronics: "Electronics & Gadgets",
            jewellery: "Jewellery & Accessories",
            restaurants: "Restaurants & Cafes",
            fitness: "Fitness & Wellness",
            education: "Education & Training",
            automotive: "Automotive Services",
            healthcare: "Healthcare Services",
            professional: "Professional Services",
            artsCrafts: "Arts & Crafts",
            travel: "Travel & Tourism",
            petServices: "Pet Services & Supplies",
            realEstate: "Real Estate Services",
            eventServices: "Event & Wedding Services",
            agriculture: "Agriculture & Farming",
            others: "Others"
        }
    },

    hi: {
        // Hindi Translations
        welcome: {
            title: "टोपिको",
            subtitle: "भारतीय छोटे व्यापार के लिए संपूर्ण बिजनेस प्लेटफॉर्म",
            button: "मुफ्त में आज़माएं"
        },

        language: {
            title: "अपनी भाषा चुनें",
            subtitle: "Choose Your Language | మీ భాషను ఎంచుకోండి | உங்கள் மொழியைத் தேர்ந்தெடுக்கவும்",
            english: "अंग्रेजी में जारी रखें",
            hindi: "हिन्दी में जारी रखें",
            telugu: "तेलुगु में जारी रखें",
            tamil: "तमिल में जारी रखें"
        },

        goals: {
            title: "अपने लक्ष्य चुनें",
            subtitle: "टोपिको के साथ आप क्या हासिल करना चाहते हैं (सभी लागू विकल्प चुनें)",
            ecommerce: {
                title: "ऑनलाइन बेचें (ई-कॉमर्स)",
                description: "संपूर्ण ई-कॉमर्स समाधान के साथ अपने उत्पादों को ऑनलाइन बेचना शुरू करें"
            },
            customers: {
                title: "अधिक ग्राहक तक पहुंचें",
                description: "अपने ग्राहक आधार का विस्तार करें और अपनी बाजार पहुंच बढ़ाएं"
            },
            manage: {
                title: "ग्राहकों का प्रबंधन करें",
                description: "अपने ग्राहकों का ट्रैक रखें और स्थायी रिश्ते बनाएं"
            },
            search: {
                title: "खोज परिणामों में दिखाई दें",
                description: "अपनी ऑनलाइन दृश्यता में सुधार करें और संभावित ग्राहकों द्वारा खोजे जाएं"
            },
            brand: {
                title: "अपना ब्रांड स्थापित करें",
                description: "ऑनलाइन एक मजबूत ब्रांड उपस्थिति और पेशेवर छवि बनाएं"
            },
            button: "अगला कदम"
        },

        registration: {
            title: "टोपिको के साथ शुरुआत करें",
            subtitle: "अपना मुफ्त खाता बनाने के लिए हमें अपने व्यापार के बारे में बताएं",
            fields: {
                name: "आपका नाम",
                namePlaceholder: "अपना पूरा नाम दर्ज करें",
                email: "ईमेल पता",
                emailPlaceholder: "अपना ईमेल पता दर्ज करें",
                phone: "फोन नंबर",
                phonePlaceholder: "अपना फोन नंबर दर्ज करें",
                business: "व्यापार का नाम",
                businessPlaceholder: "अपने व्यापार का नाम दर्ज करें",
                address: "पता",
                addressPlaceholder: "अपने व्यापार का पता दर्ज करें",
                type: "व्यापार का प्रकार",
                typePlaceholder: "अपने व्यापार का प्रकार चुनें",
                category: "व्यापार श्रेणी",
                categoryPlaceholder: "अपनी व्यापार श्रेणी चुनें"
            },
            businessTypes: {
                startup: "स्टार्टअप",
                smallBusiness: "छोटा व्यापार",
                mediumEnterprise: "मध्यम उद्यम",
                largeEnterprise: "बड़ा उद्यम",
                freelancer: "फ्रीलांसर"
            },
            button: "मुफ्त खाता बनाएं"
        },

        // Add more Hindi translations...
        common: {
            loading: "लोड हो रहा है...",
            error: "त्रुटि हुई",
            success: "सफलता",
            cancel: "रद्द करें",
            save: "सेव करें",
            edit: "संपादित करें",
            delete: "हटाएं",
            confirm: "पुष्टि करें",
            back: "वापस",
            next: "अगला",
            finish: "समाप्त",
            close: "बंद करें"
        }
    },

    te: {
        // Telugu Translations
        welcome: {
            title: "టోపికో",
            subtitle: "భారతీయ చిన్న వ్యాపారాల కోసం పూర్తి వ్యాపార వేదిక",
            button: "ఉచితంగా ప్రయత్నించండి"
        },

        language: {
            title: "మీ భాషను ఎంచుకోండి",
            subtitle: "Choose Your Language | अपनी भाषा चुनें | உங்கள் மொழியைத் தேர்ந்தெடுக்கவும்",
            english: "ఆంగ్లంలో కొనసాగించండి",
            hindi: "హిందీలో కొనసాగించండి",
            telugu: "తెలుగులో కొనసాగించండి",
            tamil: "తమిళంలో కొనసాగించండి"
        },

        goals: {
            title: "మీ లక్ష్యాలను ఎంచుకోండి",
            subtitle: "టోపికోతో మీరు ఏమి సాధించాలనుకుంటున్నారు (వర్తించే అన్నింటినీ ఎంచుకోండి)",
            ecommerce: {
                title: "ఆన్‌లైన్ అమ్మకం (ఈ-కామర్స్)",
                description: "పూర్తి ఈ-కామర్స్ పరిష్కారంతో మీ ఉత్పాదనలను ఆన్‌లైన్‌లో అమ్మడం ప్రారంభించండి"
            },
            customers: {
                title: "ఎక్కువ కస్టమర్లను చేరుకోండి",
                description: "మీ కస్టమర్ బేస్‌ను విస్తరించండి మరియు మీ మార్కెట్ రీచ్‌ను పెంచండి"
            },
            manage: {
                title: "కస్టమర్లను నిర్వహించండి",
                description: "మీ కస్టమర్లను ట్రాక్ చేయండి మరియు దీర్ఘకాలిక సంబంధాలను నిర్మించండి"
            },
            search: {
                title: "శోధన ఫలితాలలో కనిపించండి",
                description: "మీ ఆన్‌లైన్ దృశ్యమానతను మెరుగుపరచండి మరియు సంభావ్య కస్టమర్లచే కనుగొనబడండి"
            },
            brand: {
                title: "నా బ్రాండ్‌ను స్థాపించండి",
                description: "ఆన్‌లైన్‌లో బలమైన బ్రాండ్ ఉపస్థితి మరియు వృత్తిపరమైన ఇమేజ్‌ను నిర్మించండి"
            },
            button: "తదుపరి దశ"
        },

        // Add more Telugu translations...
        common: {
            loading: "లోడ్ అవుతోంది...",
            error: "లోపం సంభవించింది",
            success: "విజయం",
            cancel: "రద్దు చేయండి",
            save: "సేవ్ చేయండి",
            edit: "సవరించండి",
            delete: "తొలగించండి",
            confirm: "నిర్ధారించండి",
            back: "వెనుకకు",
            next: "తదుపరి",
            finish: "ముగించండి",
            close: "మూసివేయండి"
        }
    },

    ta: {
        // Tamil Translations
        welcome: {
            title: "டோபிகோ",
            subtitle: "இந்திய சிறு வணிகங்களுக்கான முழுமையான வணிக தளம்",
            button: "இலவசமாக முயற்சிக்கவும்"
        },

        language: {
            title: "உங்கள் மொழியைத் தேர்ந்தெடுக்கவும்",
            subtitle: "Choose Your Language | अपनी भाषा चुनें | మీ భాషను ఎంచుకోండి",
            english: "ஆங்கிலத்தில் தொடரவும்",
            hindi: "இந்தியில் தொடரவும்",
            telugu: "தெலுங்கில் தொடரவும்",
            tamil: "தமிழில் தொடரவும்"
        },

        goals: {
            title: "உங்கள் இலக்குகளைத் தேர்ந்தெடுக்கவும்",
            subtitle: "டோபிகோவுடன் நீங்கள் எதை அடைய விரும்புகிறீர்கள் (பொருந்தும் அனைத்தையும் தேர்ந்தெடுக்கவும்)",
            ecommerce: {
                title: "ஆன்லைனில் விற்பனை (இ-காமர்ஸ்)",
                description: "முழுமையான இ-காமர்ஸ் தீர்வுடன் உங்கள் தயாரிப்புகளை ஆன்லைனில் விற்க ஆரம்பிக்கவும்"
            },
            customers: {
                title: "அதிக வாடிக்கையாளர்களை அடையவும்",
                description: "உங்கள் வாடிக்கையாளர் அடிப்படையை விரிவுபடுத்தி உங்கள் சந்தை அணுகலை வளர்க்கவும்"
            },
            manage: {
                title: "வாடிக்கையாளர்களை நிர்வகிக்கவும்",
                description: "உங்கள் வாடிக்கையாளர்களைக் கண்காணித்து நீடித்த உறவுகளை உருவாக்கவும்"
            },
            search: {
                title: "தேடல் முடிவுகளில் தோன்றவும்",
                description: "உங்கள் ஆன்லைன் தெரிவுநிலையை மேம்படுத்தி சாத்தியமான வாடிக்கையாளர்களால் கண்டுபிடிக்கப்படவும்"
            },
            brand: {
                title: "எனது பிராண்டை நிறுவுங்கள்",
                description: "ஆன்லைனில் வலுவான பிராண்ட் இருப்பு மற்றும் தொழில்முறை பிம்பத்தை உருவாக்கவும்"
            },
            button: "அடுத்த படி"
        },

        // Add more Tamil translations...
        common: {
            loading: "ஏற்றுகிறது...",
            error: "பிழை ஏற்பட்டது",
            success: "வெற்றி",
            cancel: "ரத்து செய்",
            save: "சேமிக்கவும்",
            edit: "திருத்து",
            delete: "நீக்கு",
            confirm: "உறுதிப்படுத்து",
            back: "பின்னால்",
            next: "அடுத்து",
            finish: "முடிக்கவும்",
            close: "மூடு"
        }
    }
};

// ========================================
// i18n UTILITY FUNCTIONS
// ========================================

class TopikoI18n {
    constructor() {
        this.currentLanguage = 'en';
        this.translations = TRANSLATIONS;
        this.fallbackLanguage = 'en';
    }

    // Set current language
setLanguage(languageCode) {
    if (this.translations[languageCode]) {
        this.currentLanguage = languageCode;
        
        // Update HTML attributes
        document.body.setAttribute('data-lang', languageCode);
        document.body.setAttribute('lang', languageCode);
        
        // Set direction (for future RTL languages)
        const languageConfig = window.TopikoConfig.LANGUAGE_CONFIG[languageCode];
        if (languageConfig && languageConfig.direction) {
            document.body.setAttribute('dir', languageConfig.direction);
        }
        
        this.updateUI();
        this.saveLanguagePreference();
        console.log(`🌐 Language set to: ${languageCode}`);
    } else {
        console.warn(`⚠️ Language ${languageCode} not supported`);
    }
}

    // Get translation for a key
    t(key, replacements = {}) {
        const keys = key.split('.');
        let translation = this.translations[this.currentLanguage];
        
        // Navigate through nested keys
        for (const k of keys) {
            if (translation && typeof translation === 'object' && translation[k]) {
                translation = translation[k];
            } else {
                // Fallback to English if translation not found
                translation = this.translations[this.fallbackLanguage];
                for (const k of keys) {
                    if (translation && typeof translation === 'object' && translation[k]) {
                        translation = translation[k];
                    } else {
                        console.warn(`⚠️ Translation not found for key: ${key}`);
                        return key; // Return key as fallback
                    }
                }
                break;
            }
        }
        
        // Handle string replacements
        if (typeof translation === 'string' && Object.keys(replacements).length > 0) {
            Object.keys(replacements).forEach(placeholder => {
                const regex = new RegExp(`{${placeholder}}`, 'g');
                translation = translation.replace(regex, replacements[placeholder]);
            });
        }
        
        return translation || key;
    }

    // Update all UI elements with translations
    updateUI() {
        // Update elements with data-i18n attribute
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            const translation = this.t(key);
            
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                if (element.type === 'placeholder' || element.hasAttribute('placeholder')) {
                    element.placeholder = translation;
                } else {
                    element.value = translation;
                }
            } else {
                element.textContent = translation;
            }
        });

        // Update elements with data-i18n-html attribute (for HTML content)
        document.querySelectorAll('[data-i18n-html]').forEach(element => {
            const key = element.getAttribute('data-i18n-html');
            const translation = this.t(key);
            element.innerHTML = translation;
        });

        // Update select options
        this.updateSelectOptions();
        
        // Update dynamic content
        this.updateDynamicContent();
    }

    // Update select dropdown options
    updateSelectOptions() {
        // Business type options
        const businessTypeSelect = document.getElementById('businessType');
        if (businessTypeSelect) {
            const options = businessTypeSelect.querySelectorAll('option[value]');
            options.forEach(option => {
                const value = option.value;
                if (value) {
                    option.textContent = this.t(`registration.businessTypes.${value}`);
                }
            });
        }

        // Business category options
        const categorySelect = document.getElementById('category');
        if (categorySelect) {
            const options = categorySelect.querySelectorAll('option[value]');
            options.forEach(option => {
                const value = option.value;
                if (value) {
                    option.textContent = this.t(`businessCategories.${value}`);
                }
            });
        }
    }

    // Update dynamic content that can't use data attributes
    updateDynamicContent() {
        // Update progress bar labels
        this.updateProgressBar();
        
        // Update any dynamically generated content
        if (window.topikoApp && window.topikoApp.currentStep) {
            this.updateCurrentScreen(window.topikoApp.currentStep);
        }
    }

    // Update progress bar labels
    updateProgressBar() {
        const progressSteps = [
            { id: 'goals', label: this.t('progress.goals') || 'Business Goals' },
            { id: 'registration', label: this.t('progress.registration') || 'Sign Up' },
            { id: 'qualifying-questions', label: this.t('progress.qualifying') || 'Success Factors' },
            { id: 'categories', label: this.t('progress.categories') || 'Business Live-1' },
            { id: 'products', label: this.t('progress.products') || 'Business Live-2' },
            { id: 'themes', label: this.t('progress.themes') || 'Business Live-3' }
        ];

        progressSteps.forEach((step, index) => {
            const stepElement = document.querySelector(`[data-step="${step.id}"]`);
            if (stepElement) {
                const labelElement = stepElement.querySelector('.progress-label');
                if (labelElement) {
                    labelElement.textContent = step.label;
                }
            }
        });
    }

    // Update specific screen content
    updateCurrentScreen(screenId) {
        switch (screenId) {
            case 'categories':
                this.updateCategoriesScreen();
                break;
            case 'products':
                this.updateProductsScreen();
                break;
            case 'themes':
                this.updateThemesScreen();
                break;
        }
    }

    // Update categories screen
    updateCategoriesScreen() {
        // This will be called when categories are loaded
        // Category names will be translated in the loadCategories function
    }

    // Update products screen  
    updateProductsScreen() {
        // Update product-related text
        const productCount = window.topikoApp?.userProducts?.length || 0;
        const catalogTitle = document.querySelector('#productsTitle');
        if (catalogTitle) {
            catalogTitle.textContent = this.t('products.catalogTitle', { count: productCount });
        }
    }

    // Update themes screen
    updateThemesScreen() {
        // Theme names are updated via data-i18n attributes
    }

    // Save language preference
    saveLanguagePreference() {
        localStorage.setItem('topiko_language', this.currentLanguage);
        if (window.topikoApp) {
            window.topikoApp.selectedLanguage = this.currentLanguage;
        }
    }

    // Load language preference
    loadLanguagePreference() {
        const savedLanguage = localStorage.getItem('topiko_language');
        if (savedLanguage && this.translations[savedLanguage]) {
            this.setLanguage(savedLanguage);
        }
    }

    // Get available languages
    getAvailableLanguages() {
        return Object.keys(this.translations);
    }

    // Get current language
    getCurrentLanguage() {
        return this.currentLanguage;
    }

    // Get language name
    getLanguageName(languageCode) {
        const languageNames = {
            en: 'English',
            hi: 'हिन्दी',
            te: 'తెలుగు',
            ta: 'தமிழ்'
        };
        return languageNames[languageCode] || languageCode;
    }
}

// Create global i18n instance
window.i18n = new TopikoI18n();

// Export for module systems
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { TopikoI18n, TRANSLATIONS };
}

console.log('🌐 Topiko i18n system initialized');

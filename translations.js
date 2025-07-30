/* ========================================
   TOPIKO LEAD FORM - TRANSLATION SYSTEM
   Complete Hindi, Telugu & Tamil Implementation
   ======================================== */

// ========================================
// TRANSLATION DATA STRUCTURE
// ========================================

const TRANSLATIONS = {
    en: {
        // ========================================
        // WELCOME SCREEN
        // ========================================
        welcome: {
            tagline: "Complete Business Platform for Indian SMBs",
            tryFreeButton: "Try for Free"
        },

        // ========================================
        // LANGUAGE SCREEN
        // ========================================
        language: {
            title: "Choose Your Language",
            subtitle: "अपनी भाषा चुनें | మీ భాషను ఎంచుకోండి | உங்கள் மொழியைத் தேர்ந்தெடுக்கவும்",
            options: {
                en: "Continue in English",
                hi: "हिन्दी में जारी रखें",
                te: "తెలుగులో కొనసాగించండి",
                ta: "தமிழில் தொடரவும்"
            }
        },

        // ========================================
        // GOALS SCREEN
        // ========================================
        goals: {
            title: "Select Your Goals",
            subtitle: "Choose what you want to achieve with Topiko (select all that apply)",
            options: {
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
            nextButton: "Next Step"
        },

        // ========================================
        // REGISTRATION SCREEN
        // ========================================
        registration: {
            title: "Get Started with Topiko",
            subtitle: "Tell us about your business to create your free account",
            fields: {
                fullName: {
                    label: "Your Name",
                    placeholder: "Enter your full name"
                },
                email: {
                    label: "Email Address",
                    placeholder: "Enter your email address"
                },
                phoneNumber: {
                    label: "Phone Number",
                    placeholder: "Enter your phone number"
                },
                businessName: {
                    label: "Business Name",
                    placeholder: "Enter your business name"
                },
                address: {
                    label: "Address",
                    placeholder: "Enter your business address"
                },
                businessType: {
                    label: "Business Type",
                    placeholder: "Select your business type",
                    options: {
                        startup: "Startup",
                        smallBusiness: "Small Business",
                        mediumEnterprise: "Medium Enterprise",
                        largeEnterprise: "Large Enterprise",
                        freelancer: "Freelancer"
                    }
                },
                category: {
                    label: "Business Category",
                    placeholder: "Select your business category"
                }
            },
            submitButton: "Show my Business online"
        },

        // ========================================
        // QUALIFYING QUESTIONS SCREEN
        // ========================================
        qualifying: {
            title: "Let's setup things for you",
            subtitle: "Just need a couple of details about your business",
            questions: {
                onlinePresence: {
                    title: "Do you currently have any online presence?",
                    options: {
                        none: "No online presence at all",
                        whatsapp: "Only WhatsApp Business",
                        social: "Social media pages (Facebook/Instagram)",
                        basicWebsite: "Basic website",
                        fullWebsite: "Full website with online ordering"
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
                decisionMaker: {
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
                        withinWeek: "Within a week",
                        thisMonth: "This month",
                        justChecking: "Just checking"
                    }
                }
            },
            nextButton: "Create my Business 🚀"
        },

        // ========================================
        // CATEGORIES SCREEN
        // ========================================
        categories: {
            title: "Select Your Business Categories",
            subtitle: "Choose specific categories and subcategories that best describe your business",
            selectionSummary: {
                title: "📊 Your Selection Summary",
                categories: "Categories:",
                subcategories: "Subcategories:"
            },
            nextButton: "Continue to Add Products"
        },

        // ========================================
        // PRODUCTS SCREEN
        // ========================================
        products: {
            title: "Add Your Products",
            subtitle: "Choose products or add your own custom products",
            helpSection: {
                title: "🎯 Free Professional Setup Available!",
                text: "Topiko is helping with free setup for 75 businesses every month. {count} claimed for {month}. Click here for help!"
            },
            modes: {
                select: "Select Products",
                custom: "Add Custom Product"
            },
            helpers: {
                selectPopular: "✨ Select Popular Items",
                clearAll: "🗑️ Clear All"
            },
            filters: {
                search: "Search products...",
                allCategories: "All Categories",
                sortByName: "Sort by Name",
                sortByPriceLow: "Price: Low to High",
                sortByPriceHigh: "Price: High to Low",
                sortByCategory: "Category",
                priceRange: "Price Range: ₹{min} - ₹{max}"
            },
            customForm: {
                title: "Add Custom Product/Service",
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
                    imageUrl: {
                        label: "Product Image URL (optional)",
                        placeholder: "https://example.com/image.jpg"
                    }
                },
                addButton: "➕ Add Custom Product"
            },
            selectedProducts: {
                title: "🎯 Selected Products ({count})",
                catalogTitle: "Your Product Catalog ({count})",
                emptyMessage: "No products selected yet. Choose products above or add custom products!"
            },
            navigation: {
                backButton: "← Back to Categories",
                nextButton: "Choose Theme 🎨"
            }
        },

        // ========================================
        // THEMES SCREEN
        // ========================================
        themes: {
            title: "Choose Your Business Theme",
            subtitle: "Select a theme that represents your business style. See how your products will look!",
            options: {
                modern: {
                    title: "Modern & Minimalist",
                    description: "Clean, simple design that focuses on your products"
                },
                vibrant: {
                    title: "Colorful & Vibrant",
                    description: "Bold colors and energetic design to attract customers"
                },
                professional: {
                    title: "Professional & Corporate",
                    description: "Sophisticated design that builds trust and credibility"
                },
                traditional: {
                    title: "Traditional & Classic",
                    description: "Timeless design with warm, welcoming feel"
                },
                creative: {
                    title: "Creative & Artistic",
                    description: "Unique, artistic design that showcases creativity"
                },
                luxury: {
                    title: "Elegant & Luxury",
                    description: "Premium design for high-end products and services"
                }
            },
            selectedTheme: "No theme selected",
            note: "You can change this anytime later",
            navigation: {
                backButton: "← Back to Products",
                nextButton: "Complete Setup 🚀"
            }
        },

        // ========================================
        // COMPLETION SCREEN
        // ========================================
        completion: {
            title: "Congratulations, {businessName} is all set for the final touches!",
            subtitle: "Your business setup is complete! Our team will now create your professional online presence.",
            offers: {
                title: "🎁 Choose Your FREE Bonus Offer!",
                subtitle: "Select one offer that interests you most:",
                timer: "🔥 Limited Time: These offers expire in {time}"
            },
            actions: {
                title: "🎯 How would you like to proceed?",
                scheduleCall: {
                    title: "📞 Book a Call to Claim My Selected Offer",
                    subtitle: "Schedule a convenient time with our team"
                },
                explore: {
                    title: "🚀 I want to explore on my own",
                    subtitle: "Tell us what you're looking for"
                }
            }
        },

        // ========================================
        // MODALS
        // ========================================
        modals: {
            goalsTransition: {
                title: "Great! Your goals are set.",
                subtitle: "Now let's show you how Topiko can help with {goals} for your business — one step at a time",
                benefits: [
                    "✨ No technical knowledge needed",
                    "✅ ZERO obligation to continue",
                    "🧪 Try before you decide"
                ],
                button: "Get My Free Setup! 🚀"
            },
            setupIntro: {
                title: "Excellent, {name}! 🎉",
                subtitle: "In just 3 simple steps, we'll show you exactly how your {business} can look and work online — the Topiko way!",
                note: "🔥 Businesses like yours are going live every hour — don't miss the momentum!",
                button: "Let's Create Something Amazing! 🎯"
            },
            otpVerification: {
                title: "Verify Your Phone Number",
                subtitle: "We've sent a 4-digit code to your phone. Enter it below to secure your account.",
                resend: "Didn't receive the code? Resend OTP",
                button: "Verify & Continue"
            },
            callScheduler: {
                title: "Schedule Your Call to Claim Offer",
                subtitle: "Select a convenient time for our team to contact you:",
                timeSlots: {
                    today: "Today",
                    tomorrow: "Tomorrow",
                    dayAfter: "Day After"
                },
                button: "Complete & Schedule Call",
                close: "Close"
            },
            exploreForm: {
                title: "Tell us what you're looking for",
                subtitle: "Help us understand your business needs better:",
                reasons: {
                    budget: "Budget considerations",
                    timing: "Need more time to decide",
                    lookingElse: "Looking for something specific",
                    justBrowsing: "Just browsing for now"
                },
                commentLabel: "Additional details (optional):",
                commentPlaceholder: "Tell us more about what you're looking for...",
                button: "Complete Submission",
                close: "Close"
            }
        },

        // ========================================
        // NOTIFICATIONS & MESSAGES
        // ========================================
        notifications: {
            languageSelected: "Language: {language}",
            goalsSelected: "Perfect! {count} goal{plural} selected!",
            phoneVerified: "✅ Phone verified successfully!",
            accountCreated: "🎉 Welcome {name}! Account created successfully!",
            movingToCategories: "Perfect! Moving to categories...",
            movingToProducts: "Perfect! Moving to products with {count} categories selected...",
            productAdded: "✅ \"{name}\" added successfully!",
            productRemoved: "Removed \"{name}\"",
            themeSelected: "Perfect choice! {theme} theme selected!",
            setupComplete: "🎉 Congratulations {name}! Your business is ready for final touches!",
            
            // Error messages
            selectAtLeastOneGoal: "Please select at least one goal",
            fillAllFields: "Please fill all required fields",
            selectAtLeastOneCategory: "Please select at least one category to continue",
            addAtLeastOneProduct: "Add at least one product to see how your store will look!",
            
            // Info messages
            helpRequested: "🎯 Great! Our team will contact you within 2 hours for free setup assistance!",
            callScheduled: "🎉 Perfect! Call scheduled to claim \"{offer}\". Our team will contact you at the selected time.",
            feedbackReceived: "🚀 Thank you for your feedback! We'll use this to improve our service."
        },

        // ========================================
        // PROGRESS BAR LABELS
        // ========================================
        progress: {
            businessGoals: "Business Goals",
            signUp: "Sign Up", 
            successFactors: "Success Factors",
            businessLive1: "Business Live-1",
            businessLive2: "Business Live-2", 
            businessLive3: "Business Live-3"
        },

        // ========================================
        // COMMON ELEMENTS
        // ========================================
        common: {
            loading: "Loading...",
            next: "Next",
            back: "Back",
            continue: "Continue",
            submit: "Submit",
            cancel: "Cancel",
            close: "Close",
            save: "Save",
            edit: "Edit",
            delete: "Delete",
            select: "Select",
            remove: "Remove",
            add: "Add",
            search: "Search",
            filter: "Filter",
            sort: "Sort",
            price: "Price",
            category: "Category",
            name: "Name",
            description: "Description",
            optional: "Optional",
            required: "Required"
        }
    },

    // ========================================
    // HINDI TRANSLATIONS
    // ========================================
    hi: {
        // ========================================
        // WELCOME SCREEN
        // ========================================
        welcome: {
            tagline: "भारतीय SMBs के लिए संपूर्ण बिजनेस प्लेटफॉर्म",
            tryFreeButton: "मुफ्त में शुरू करें"
        },

        // ========================================
        // LANGUAGE SCREEN  
        // ========================================
        language: {
            title: "अपनी भाषा चुनें",
            subtitle: "अपनी भाषा चुनें | మీ భాషను ఎంచుకోండి | உங்கள் மொழியைத் தேர்ந்தெடுக்கவும்",
            options: {
                en: "अंग्रेजी में जारी रखें",
                hi: "हिन्दी में जारी रखें", 
                te: "తెలుగులో కొనసాగించండి",
                ta: "தமிழில் தொடरவும்"
            }
        },

        // ========================================
        // GOALS SCREEN
        // ========================================
        goals: {
            title: "अपने लक्ष्य चुनें",
            subtitle: "चुनें कि आप Topiko के साथ क्या हासिल करना चाहते हैं (जो भी लागू हो सभी चुनें)",
            options: {
                ecommerce: {
                    title: "ऑनलाइन बेचना (ई-कॉमर्स)",
                    description: "पूर्ण ई-कॉमर्स समाधान के साथ अपने उत्पाद ऑनलाइन बेचना शुरू करें"
                },
                customers: {
                    title: "अधिक ग्राहकों तक पहुंचना",
                    description: "अपने ग्राहक आधार का विस्तार करें और बाजार में अपनी पहुंच बढ़ाएं"
                },
                manage: {
                    title: "ग्राहकों का प्रबंधन",
                    description: "अपने ग्राहकों का ट्रैक रखें और स्थायी रिश्ते बनाएं"
                },
                search: {
                    title: "खोज परिणामों में दिखना",
                    description: "अपनी ऑनलाइन दृश्यता बेहतर बनाएं और संभावित ग्राहकों द्वारा खोजे जाएं"
                },
                brand: {
                    title: "अपना ब्रांड स्थापित करना",
                    description: "ऑनलाइन मजबूत ब्रांड उपस्थिति और पेशेवर छवि बनाएं"
                }
            },
            nextButton: "अगला चरण"
        },

        // ========================================
        // REGISTRATION SCREEN
        // ========================================
        registration: {
            title: "Topiko के साथ शुरुआत करें",
            subtitle: "अपना मुफ्त खाता बनाने के लिए अपने व्यवसाय के बारे में बताएं",
            fields: {
                fullName: {
                    label: "आपका नाम",
                    placeholder: "अपना पूरा नाम दर्ज करें"
                },
                email: {
                    label: "ईमेल पता",
                    placeholder: "अपना ईमेल पता दर्ज करें"
                },
                phoneNumber: {
                    label: "फोन नंबर",
                    placeholder: "अपना फोन नंबर दर्ज करें"
                },
                businessName: {
                    label: "व्यवसाय का नाम",
                    placeholder: "अपने व्यवसाय का नाम दर्ज करें"
                },
                address: {
                    label: "पता",
                    placeholder: "अपने व्यवसाय का पता दर्ज करें"
                },
                businessType: {
                    label: "व्यवसाय का प्रकार",
                    placeholder: "अपने व्यवसाय का प्रकार चुनें",
                    options: {
                        startup: "स्टार्टअप",
                        smallBusiness: "छोटा व्यवसाय",
                        mediumEnterprise: "मध्यम उद्यम",
                        largeEnterprise: "बड़ा उद्यम",
                        freelancer: "फ्रीलांसर"
                    }
                },
                category: {
                    label: "व्यवसाय श्रेणी",
                    placeholder: "अपनी व्यवसाय श्रेणी चुनें"
                }
            },
            submitButton: "मेरा व्यवसाय ऑनलाइन दिखाएं"
        },

        // ========================================
        // QUALIFYING QUESTIONS SCREEN
        // ========================================
        qualifying: {
            title: "आइए आपके लिए सेटअप करते हैं",
            subtitle: "बस आपके व्यवसाय के बारे में कुछ विवरण चाहिए",
            questions: {
                onlinePresence: {
                    title: "क्या आपकी वर्तमान में कोई ऑनलाइन उपस्थिति है?",
                    options: {
                        none: "बिल्कुल कोई ऑनलाइन उपस्थिति नहीं",
                        whatsapp: "केवल WhatsApp Business",
                        social: "सोशल मीडिया पेज (Facebook/Instagram)",
                        basicWebsite: "बुनियादी वेबसाइट",
                        fullWebsite: "ऑनलाइन ऑर्डरिंग के साथ पूरी वेबसाइट"
                    }
                },
                budget: {
                    title: "अपने व्यवसाय के लक्ष्यों को पूरा करने के लिए, आप प्रति वर्ष कितना बजट आवंटित कर सकते हैं?",
                    options: {
                        low: "₹5,000 से ₹10,000",
                        medium: "₹10,000 से ₹25,000", 
                        high: "₹25,000 से अधिक"
                    }
                },
                decisionMaker: {
                    title: "क्या आप अपने व्यवसाय के लिए निर्णय लेने वाले हैं?",
                    options: {
                        yes: "हाँ",
                        no: "नहीं"
                    }
                },
                timeline: {
                    title: "आप कितनी जल्दी शुरुआत करना चाहते हैं?",
                    options: {
                        immediately: "तुरंत",
                        withinWeek: "एक सप्ताह के भीतर",
                        thisMonth: "इस महीने",
                        justChecking: "बस जांच रहा हूं"
                    }
                }
            },
            nextButton: "मेरा व्यवसाय बनाएं 🚀"
        },

        // ========================================
        // CATEGORIES SCREEN
        // ========================================
        categories: {
            title: "अपनी व्यवसाय श्रेणियां चुनें",
            subtitle: "विशिष्ट श्रेणियां और उप-श्रेणियां चुनें जो आपके व्यवसाय का सबसे अच्छा वर्णन करती हैं",
            selectionSummary: {
                title: "📊 आपका चयन सारांश",
                categories: "श्रेणियां:",
                subcategories: "उप-श्रेणियां:"
            },
            nextButton: "उत्पाद जोड़ने के लिए जारी रखें"
        },

        // ========================================
        // PRODUCTS SCREEN
        // ========================================
        products: {
            title: "अपने उत्पाद जोड़ें",
            subtitle: "उत्पाद चुनें या अपने स्वयं के कस्टम उत्पाद जोड़ें",
            helpSection: {
                title: "🎯 मुफ्त पेशेवर सेटअप उपलब्ध!",
                text: "Topiko हर महीने 75 व्यवसायों के लिए मुफ्त सेटअप में मदद कर रहा है। {month} के लिए {count} का दावा किया। मदद के लिए यहां क्लिक करें!"
            },
            modes: {
                select: "उत्पाद चुनें",
                custom: "कस्टम उत्पाद जोड़ें"
            },
            helpers: {
                selectPopular: "✨ लोकप्रिय आइटम चुनें",
                clearAll: "🗑️ सभी साफ़ करें"
            },
            filters: {
                search: "उत्पाद खोजें...",
                allCategories: "सभी श्रेणियां",
                sortByName: "नाम के अनुसार क्रमबद्ध करें",
                sortByPriceLow: "कीमत: कम से अधिक",
                sortByPriceHigh: "कीमत: अधिक से कम",
                sortByCategory: "श्रेणी",
                priceRange: "मूल्य सीमा: ₹{min} - ₹{max}"
            },
            customForm: {
                title: "कस्टम उत्पाद/सेवा जोड़ें",
                fields: {
                    name: {
                        label: "उत्पाद/सेवा का नाम",
                        placeholder: "जैसे, कॉटन कुर्ता, मसाला डोसा, हेयरकट"
                    },
                    price: {
                        label: "कीमत (₹)",
                        placeholder: "जैसे, 899"
                    },
                    category: {
                        label: "श्रेणी",
                        placeholder: "अपनी चुनी गई श्रेणियों में से चुनें"
                    },
                    subcategory: {
                        label: "उप-श्रेणी (वैकल्पिक)",
                        placeholder: "एक उप-श्रेणी चुनें"
                    },
                    description: {
                        label: "विवरण",
                        placeholder: "अपने उत्पाद या सेवा का संक्षिप्त विवरण"
                    },
                    imageUrl: {
                        label: "उत्पाद छवि URL (वैकल्पिक)",
                        placeholder: "https://example.com/image.jpg"
                    }
                },
                addButton: "➕ कस्टम उत्पाद जोड़ें"
            },
            selectedProducts: {
                title: "🎯 चयनित उत्पाद ({count})",
                catalogTitle: "आपका उत्पाद कैटलॉग ({count})",
                emptyMessage: "अभी तक कोई उत्पाद नहीं चुना गया है। ऊपर से उत्पाद चुनें या कस्टम उत्पाद जोड़ें!"
            },
            navigation: {
                backButton: "← श्रेणियों पर वापस",
                nextButton: "थीम चुनें 🎨"
            }
        },

        // ========================================
        // THEMES SCREEN
        // ========================================
        themes: {
            title: "अपना व्यवसाय थीम चुनें",
            subtitle: "एक ऐसी थीम चुनें जो आपकी व्यवसाय शैली का प्रतिनिधित्व करती हो। देखें कि आपके उत्पाद कैसे दिखेंगे!",
            options: {
                modern: {
                    title: "आधुनिक और न्यूनतम",
                    description: "साफ, सरल डिज़ाइन जो आपके उत्पादों पर केंद्रित है"
                },
                vibrant: {
                    title: "रंगीन और जीवंत",
                    description: "ग्राहकों को आकर्षित करने के लिए बोल्ड रंग और ऊर्जावान डिज़ाइन"
                },
                professional: {
                    title: "पेशेवर और कॉर्पोरेट",
                    description: "विश्वास और विश्वसनीयता बनाने वाला परिष्कृत डिज़ाइन"
                },
                traditional: {
                    title: "पारंपरिक और क्लासिक",
                    description: "गर्म, स्वागत योग्य अनुभव के साथ कालातीत डिज़ाइन"
                },
                creative: {
                    title: "रचनात्मक और कलात्मक",
                    description: "रचनात्मकता को प्रदर्शित करने वाला अनूठा, कलात्मक डिज़ाइन"
                },
                luxury: {
                    title: "सुरुचिपूर्ण और लक्जरी",
                    description: "उच्च-गुणवत्ता उत्पादों और सेवाओं के लिए प्रीमियम डिज़ाइन"
                }
            },
            selectedTheme: "कोई थीम नहीं चुनी गई",
            note: "आप इसे बाद में कभी भी बदल सकते हैं",
            navigation: {
                backButton: "← उत्पादों पर वापस",
                nextButton: "सेटअप पूरा करें 🚀"
            }
        },

        // ========================================
        // COMPLETION SCREEN
        // ========================================
        completion: {
            title: "बधाई हो, {businessName} अंतिम स्पर्श के लिए तैयार है!",
            subtitle: "आपका व्यवसाय सेटअप पूरा हो गया है! हमारी टीम अब आपकी पेशेवर ऑनलाइन उपस्थिति बनाएगी।",
            offers: {
                title: "🎁 अपना मुफ्त बोनस ऑफर चुनें!",
                subtitle: "एक ऐसा ऑफर चुनें जिसमें आपकी सबसे अधिक रुचि हो:",
                timer: "🔥 सीमित समय: ये ऑफर {time} में समाप्त हो जाएंगे"
            },
            actions: {
                title: "🎯 आप कैसे आगे बढ़ना चाहेंगे?",
                scheduleCall: {
                    title: "📞 अपने चयनित ऑफर का दावा करने के लिए कॉल बुक करें",
                    subtitle: "हमारी टीम के साथ सुविधाजनक समय निर्धारित करें"
                },
                explore: {
                    title: "🚀 मैं स्वयं एक्सप्लोर करना चाहता हूं",
                    subtitle: "हमें बताएं कि आप क्या ढूंढ रहे हैं"
                }
            }
        },

        // ========================================
        // MODALS
        // ========================================
        modals: {
            goalsTransition: {
                title: "बहुत बढ़िया! आपके लक्ष्य सेट हो गए हैं।",
                subtitle: "अब आइए देखते हैं कि Topiko आपके व्यवसाय के लिए {goals} में कैसे मदद कर सकता है — एक समय में एक कदम",
                benefits: [
                    "✨ तकनीकी ज्ञान की आवश्यकता नहीं",
                    "✅ जारी रखने की शून्य बाध्यता",
                    "🧪 निर्णय लेने से पहले कोशिश करें"
                ],
                button: "मेरा मुफ्त सेटअप पाएं! 🚀"
            },
            setupIntro: {
                title: "उत्कृष्ट, {name}! 🎉",
                subtitle: "केवल 3 सरल चरणों में, हम आपको दिखाएंगे कि आपका {business} ऑनलाइन कैसे दिख सकता है और काम कर सकता है — Topiko तरीके से!",
                note: "🔥 आपके जैसे व्यवसाय हर घंटे लाइव हो रहे हैं — गति न चूकें!",
                button: "आइए कुछ अद्भुत बनाते हैं! 🎯"
            },
            otpVerification: {
                title: "अपना फोन नंबर सत्यापित करें",
                subtitle: "हमने आपके फोन पर एक 4-अंकीय कोड भेजा है। अपना खाता सुरक्षित करने के लिए इसे नीचे दर्ज करें।",
                resend: "कोड नहीं मिला? OTP पुनः भेजें",
                button: "सत्यापित करें और जारी रखें"
            },
            callScheduler: {
                title: "ऑफर का दावा करने के लिए अपनी कॉल शेड्यूल करें",
                subtitle: "हमारी टीम से संपर्क करने के लिए सुविधाजनक समय चुनें:",
                timeSlots: {
                    today: "आज",
                    tomorrow: "कल",
                    dayAfter: "परसों"
                },
                button: "पूरा करें और कॉल शेड्यूल करें",
                close: "बंद करें"
            },
            exploreForm: {
                title: "हमें बताएं कि आप क्या ढूंढ रहे हैं",
                subtitle: "अपनी व्यावसायिक आवश्यकताओं को बेहतर समझने में हमारी मदद करें:",
                reasons: {
                    budget: "बजट संबंधी विचार",
                    timing: "निर्णय लेने के लिए अधिक समय चाहिए",
                    lookingElse: "कुछ विशिष्ट की तलाश में",
                    justBrowsing: "अभी केवल ब्राउज़ कर रहा हूं"
                },
                commentLabel: "अतिरिक्त विवरण (वैकल्पिक):",
                commentPlaceholder: "हमें बताएं कि आप और क्या ढूंढ रहे हैं...",
                button: "सबमिशन पूरा करें",
                close: "बंद करें"
            }
        },

        // ========================================
        // NOTIFICATIONS & MESSAGES
        // ========================================
        notifications: {
            languageSelected: "भाषा: {language}",
            goalsSelected: "परफेक्ट! {count} लक्ष्य{plural} चुने गए!",
            phoneVerified: "✅ फोन सफलतापूर्वक सत्यापित!",
            accountCreated: "🎉 स्वागत {name}! खाता सफलतापूर्वक बनाया गया!",
            movingToCategories: "परफेक्ट! श्रेणियों की ओर बढ़ रहे हैं...",
            movingToProducts: "परफेक्ट! {count} श्रेणियों के साथ उत्पादों की ओर बढ़ रहे हैं...",
            productAdded: "✅ \"{name}\" सफलतापूर्वक जोड़ा गया!",
            productRemoved: "\"{name}\" हटा दिया गया",
            themeSelected: "परफेक्ट पसंद! {theme} थीम चुनी गई!",
            setupComplete: "🎉 बधाई {name}! आपका व्यवसाय अंतिम स्पर्श के लिए तैयार है!",
            
            // Error messages
            selectAtLeastOneGoal: "कृपया कम से कम एक लक्ष्य चुनें",
            fillAllFields: "कृपया सभी आवश्यक फ़ील्ड भरें",
            selectAtLeastOneCategory: "जारी रखने के लिए कृपया कम से कम एक श्रेणी चुनें",
            addAtLeastOneProduct: "यह देखने के लिए कि आपका स्टोर कैसा दिखेगा, कम से कम एक उत्पाद जोड़ें!",
            
            // Info messages
            helpRequested: "🎯 बढ़िया! हमारी टीम मुफ्त सेटअप सहायता के लिए 2 घंटे के भीतर आपसे संपर्क करेगी!",
            callScheduled: "🎉 परफेक्ट! \"{offer}\" का दावा करने के लिए कॉल शेड्यूल की गई। हमारी टीम चयनित समय पर आपसे संपर्क करेगी।",
            feedbackReceived: "🚀 आपकी प्रतिक्रिया के लिए धन्यवाद! हम इसका उपयोग अपनी सेवा में सुधार के लिए करेंगे।"
        },

        // ========================================
        // PROGRESS BAR LABELS
        // ========================================
        progress: {
            businessGoals: "व्यावसायिक लक्ष्य",
            signUp: "साइन अप",
            successFactors: "सफलता कारक",
            businessLive1: "व्यवसाय लाइव-1",
            businessLive2: "व्यवसाय लाइव-2",
            businessLive3: "व्यवसाय लाइव-3"
        },

        // ========================================
        // COMMON ELEMENTS
        // ========================================
        common: {
            loading: "लोड हो रहा है...",
            next: "अगला",
            back: "वापस",
            continue: "जारी रखें",
            submit: "सबमिट करें",
            cancel: "रद्द करें",
            close: "बंद करें",
            save: "सहेजें",
            edit: "संपादित करें",
            delete: "हटाएं",
            select: "चुनें",
            remove: "हटाएं",
            add: "जोड़ें",
            search: "खोजें",
            filter: "फ़िल्टर",
            sort: "क्रमबद्ध करें",
            price: "कीमत",
            category: "श्रेणी", 
            name: "नाम",
            description: "विवरण",
            optional: "वैकल्पिक",
            required: "आवश्यक"
        }
    },

    // ========================================
    // TELUGU TRANSLATIONS
    // ========================================
    te: {
        // ========================================
        // WELCOME SCREEN
        // ========================================
        welcome: {
            tagline: "భారతీయ SMBల కోసం పూర్తి వ్యాపార వేదిక",
            tryFreeButton: "ఉచితంగా ప్రయత్నించండి"
        },

        // ========================================
        // LANGUAGE SCREEN
        // ========================================
        language: {
            title: "మీ భాషను ఎంచుకోండి",
            subtitle: "अपनी भाषा चुनें | మీ భాషను ఎంచుకోండి | உங்கள் மொழியைத் தேர்ந்தெடுக்கவும்",
            options: {
                en: "ఇంగ్లీష్‌లో కొనసాగించండి",
                hi: "हिन्दी में जारी रखें",
                te: "తెలుగులో కొనసాగించండి",
                ta: "தமிழில் தொடरवும्"
            }
        },

        // ========================================
        // GOALS SCREEN
        // ========================================
        goals: {
            title: "మీ లక్ష్యాలను ఎంచుకోండి",
            subtitle: "Topikoతో మీరు ఏమి సాధించాలనుకుంటున్నారో ఎంచుకోండి (వర్తించే అన్నింటిని ఎంచుకోండి)",
            options: {
                ecommerce: {
                    title: "ఆన్‌లైన్ అమ్మకం (ఈ-కామర్స్)",
                    description: "పూర్తి ఈ-కామర్స్ పరిష్కారంతో మీ ఉత్పాదాలను ఆన్‌లైన్‌లో అమ్మడం ప్రారంభించండి"
                },
                customers: {
                    title: "ఎక్కువ కస్టమర్‌లను చేరుకోవడం",
                    description: "మీ కస్టమర్ బేస్‌ను విస్తరించండి మరియు మార్కెట్ చేరువను పెంచండి"
                },
                manage: {
                    title: "కస్టమర్‌లను నిర్వహించడం",
                    description: "మీ కస్టమర్‌లను ట్రాక్ చేయండి మరియు దీర్ఘకాలిక సంబంధాలను నిర్మించండి"
                },
                search: {
                    title: "శోధన ఫలితాలలో కనిపించడం",
                    description: "మీ ఆన్‌లైన్ విజిబిలిటీని మెరుగుపరచండి మరియు సంభావ్య కస్టమర్‌లచే కనుగొనబడండి"
                },
                brand: {
                    title: "నా బ్రాండ్‌ను స్థాపించడం",
                    description: "ఆన్‌లైన్‌లో బలమైన బ్రాండ్ ఉపస్థితి మరియు వృత్తిపరమైన ఇమేజ్‌ను నిర్మించండి"
                }
            },
            nextButton: "తదుపరి దశ"
        },

        // ========================================
        // REGISTRATION SCREEN
        // ========================================
        registration: {
            title: "Topikoతో ప్రారంభించండి",
            subtitle: "మీ ఉచిత ఖాతాను సృష్టించడానికి మీ వ్యాపారం గురించి చెప్పండి",
            fields: {
                fullName: {
                    label: "మీ పేరు",
                    placeholder: "మీ పూర్తి పేరును నమోదు చేయండి"
                },
                email: {
                    label: "ఇమెయిల్ చిరునామా",
                    placeholder: "మీ ఇమెయిల్ చిరునామాను నమోదు చేయండి"
                },
                phoneNumber: {
                    label: "ఫోన్ నంబర్",
                    placeholder: "మీ ఫోన్ నంబర్‌ను నమోదు చేయండి"
                },
                businessName: {
                    label: "వ్యాపార పేరు",
                    placeholder: "మీ వ్యాపార పేరును నమోదు చేయండి"
                },
                address: {
                    label: "చిరునామా",
                    placeholder: "మీ వ్యాపార చిరునామాను నమోదు చేయండి"
                },
                businessType: {
                    label: "వ్యాపార రకం",
                    placeholder: "మీ వ్యాపార రకాన్ని ఎంచుకోండి",
                    options: {
                        startup: "స్టార్టప్",
                        smallBusiness: "చిన్న వ్యాపారం",
                        mediumEnterprise: "మధ్యతరహా సంస్థ",
                        largeEnterprise: "పెద్ద సంస్థ",
                        freelancer: "ఫ్రీలాన్సర్"
                    }
                },
                category: {
                    label: "వ్యాపార వర్గం",
                    placeholder: "మీ వ్యాపార వర్గాన్ని ఎంచుకోండి"
                }
            },
            submitButton: "నా వ్యాపారాన్ని ఆన్‌లైన్‌లో చూపించండి"
        },

        // ========================================
        // QUALIFYING QUESTIONS SCREEN
        // ========================================
        qualifying: {
            title: "మీ కోసం సెటప్ చేద్దాం",
            subtitle: "మీ వ్యాపారం గురించి కొన్ని వివరాలు మాత్రమే కావాలి",
            questions: {
                onlinePresence: {
                    title: "ప్రస్తుతం మీకు ఏదైనా ఆన్‌లైన్ ఉపస్థితి ఉందా?",
                    options: {
                        none: "ఎలాంటి ఆన్‌లైన్ ఉపస్థితి లేదు",
                        whatsapp: "WhatsApp Business మాత్రమే",
                        social: "సోషల్ మీడియా పేజీలు (Facebook/Instagram)",
                        basicWebsite: "ప్రాథమిక వెబ్‌సైట్",
                        fullWebsite: "ఆన్‌లైన్ ఆర్డరింగ్‌తో పూర్తి వెబ్‌సైట్"
                    }
                },
                budget: {
                    title: "మీ వ్యాపార లక్ష్యాలను చేరుకోవడానికి, మీరు సంవత్సరానికి ఎంత బడ్జెట్ కేటాయించగలరు?",
                    options: {
                        low: "₹5,000 నుండి ₹10,000",
                        medium: "₹10,000 నుండి ₹25,000",
                        high: "₹25,000 కంటే ఎక్కువ"
                    }
                },
                decisionMaker: {
                    title: "మీరు మీ వ్యాపారానికి నిర్ణయం తీసుకునే వ్యక్తివా?",
                    options: {
                        yes: "అవును",
                        no: "లేదు"
                    }
                },
                timeline: {
                    title: "మీరు ఎంత త్వరగా ప్రారంభించాలనుకుంటున్నారు?",
                    options: {
                        immediately: "వెంటనే",
                        withinWeek: "ఒక వారంలో",
                        thisMonth: "ఈ నెలలో",
                        justChecking: "కేవలం చెకింగ్"
                    }
                }
            },
            nextButton: "నా వ్యాపారాన్ని సృష్టించండి 🚀"
        },

        // ========================================
        // CATEGORIES SCREEN
        // ========================================
        categories: {
            title: "మీ వ్యాపార వర్గాలను ఎంచుకోండి",
            subtitle: "మీ వ్యాపారాన్ని ఉత్తమంగా వివరించే నిర్దిష్ట వర్గాలు మరియు ఉప-వర్గాలను ఎంచుకోండి",
            selectionSummary: {
                title: "📊 మీ ఎంపిక సారాంశం",
                categories: "వర్గాలు:",
                subcategories: "ఉప-వర్గాలు:"
            },
            nextButton: "ఉత్పాదాలను జోడించడానికి కొనసాగండి"
        },

        // ========================================
        // PRODUCTS SCREEN
        // ========================================
        products: {
            title: "మీ ఉత్పాదాలను జోడించండి",
            subtitle: "ఉత్పాదాలను ఎంచుకోండి లేదా మీ స్వంత కస్టమ్ ఉత్పాదాలను జోడించండి",
            helpSection: {
                title: "🎯 ఉచిత వృత్తిపరమైన సెటప్ అందుబాటులో!",
                text: "Topiko ప్రతిమాసం 75 వ్యాపారాలకు ఉచిత సెటప్‌తో సహాయం చేస్తోంది. {month} కోసం {count} క్లెయిమ్ చేయబడింది. సహాయం కోసం ఇక్కడ క్లిక్ చేయండి!"
            },
            modes: {
                select: "ఉత్పాదాలను ఎంచుకోండి",
                custom: "కస్టమ్ ఉత్పాదాన్ని జోడించండి"
            },
            helpers: {
                selectPopular: "✨ ప్రాచుర్యంలో ఉన్న వస్తువులను ఎంచుకోండి",
                clearAll: "🗑️ అన్నింటినీ క్లియర్ చేయండి"
            },
            filters: {
                search: "ఉత్పాదాలను వెతకండి...",
                allCategories: "అన్ని వర్గాలు",
                sortByName: "పేరు ప్రకారం క్రమబద్ధీకరించండి",
                sortByPriceLow: "ధర: తక్కువ నుండి ఎక్కువ",
                sortByPriceHigh: "ధర: ఎక్కువ నుండి తక్కువ",
                sortByCategory: "వర్గం",
                priceRange: "ధర పరిధి: ₹{min} - ₹{max}"
            },
            customForm: {
                title: "కస్టమ్ ఉత్పాదం/సేవ జోడించండి",
                fields: {
                    name: {
                        label: "ఉత్పాదం/సేవ పేరు",
                        placeholder: "ఉదా., కాటన్ కుర్తా, మసాలా దోస, హెయిర్ కట్"
                    },
                    price: {
                        label: "ధర (₹)",
                        placeholder: "ఉదా., 899"
                    },
                    category: {
                        label: "వర్గం",
                        placeholder: "మీ ఎంచుకున్న వర్గాల నుండి ఎంచుకోండి"
                    },
                    subcategory: {
                        label: "ఉప-వర్గం (ఐచ్ఛికం)",
                        placeholder: "ఉప-వర్గాన్ని ఎంచుకోండి"
                    },
                    description: {
                        label: "వివరణ",
                        placeholder: "మీ ఉత్పాదం లేదా సేవ యొక్క సంక్షిప్త వివరణ"
                    },
                    imageUrl: {
                        label: "ఉత్పాదం చిత్రం URL (ఐచ్ఛికం)",
                        placeholder: "https://example.com/image.jpg"
                    }
                },
                addButton: "➕ కస్టమ్ ఉత్పాదాన్ని జోడించండి"
            },
            selectedProducts: {
                title: "🎯 ఎంచుకున్న ఉత్పాదాలు ({count})",
                catalogTitle: "మీ ఉత్పాద కేటలాగ్ ({count})",
                emptyMessage: "ఇంకా ఉత్పాదాలు ఎంచుకోలేదు. పైన నుండి ఉత్పాదాలను ఎంచుకోండి లేదా కస్టమ్ ఉత్పాదాలను జోడించండి!"
            },
            navigation: {
                backButton: "← వర్గాలకు తిరిగి వెళ్ళండి",
                nextButton: "థీమ్ ఎంచుకోండి 🎨"
            }
        },

        // ========================================
        // THEMES SCREEN
        // ========================================
        themes: {
            title: "మీ వ్యాపార థీమ్‌ను ఎంచుకోండి",
            subtitle: "మీ వ్యాపార శైలిని ప్రాతినిధ్యం వహించే థీమ్‌ను ఎంచుకోండి. మీ ఉత్పాదాలు ఎలా కనిపిస్తాయో చూడండి!",
            options: {
                modern: {
                    title: "ఆధునిక మరియు మినిమలిస్ట్",
                    description: "మీ ఉత్పాదాలపై దృష్టి పెట్టే స్వచ్ఛమైన, సరళమైన డిజైన్"
                },
                vibrant: {
                    title: "రంగురంగుల మరియు ప్రాణవంతమైన",
                    description: "కస్టమర్‌లను ఆకర్షించడానికి బోల్డ్ రంగులు మరియు శక్తివంతమైన డిజైన్"
                },
                professional: {
                    title: "వృత్తిపరమైన మరియు కార్పొరేట్",
                    description: "నమ్మకం మరియు విశ్వసనీయతను నిర్మించే అధునాతన డిజైన్"
                },
                traditional: {
                    title: "సాంప్రదాయిక మరియు క్లాసిక్",
                    description: "వెచ్చని, స్వాగతించే అనుభవంతో కాలాతీత డిజైన్"
                },
                creative: {
                    title: "సృజనాత్మక మరియు కళాత్మక",
                    description: "సృజనాత్మకతను ప్రదర్శించే ప్రత్యేకమైన, కళాత్మక డిజైన్"
                },
                luxury: {
                    title: "సొగసైన మరియు లగ్జరీ",
                    description: "ఉన్నతమైన ఉత్పాదాలు మరియు సేవల కోసం ప్రీమియం డిజైన్"
                }
            },
            selectedTheme: "థీమ్ ఎంచుకోలేదు",
            note: "మీరు దీనిని ఎప్పుడైనా తర్వాత మార్చవచ్చు",
            navigation: {
                backButton: "← ఉత్పాదాలకు తిరిగి వెళ్ళండి",
                nextButton: "సెటప్ పూర్తి చేయండి 🚀"
            }
        },

        // ========================================
        // COMPLETION SCREEN
        // ========================================
        completion: {
            title: "అభినందనలు, {businessName} అంతిమ స్పర్శల కోసం సిద్ధంగా ఉంది!",
            subtitle: "మీ వ్యాపార సెటప్ పూర్తయింది! మా టీమ్ ఇప్పుడు మీ వృత్తిపరమైన ఆన్‌లైన్ ఉపస్థితిని సృష్టిస్తుంది.",
            offers: {
                title: "🎁 మీ ఉచిత బోనస్ ఆఫర్‌ను ఎంచుకోండి!",
                subtitle: "మీకు అత్యంత ఆసక్తికరమైన ఒక ఆఫర్‌ను ఎంచుకోండి:",
                timer: "🔥 పరిమిత సమయం: ఈ ఆఫర్‌లు {time}లో ముగుస్తాయి"
            },
            actions: {
                title: "🎯 మీరు ఎలా ముందుకు సాగాలనుకుంటున్నారు?",
                scheduleCall: {
                    title: "📞 నా ఎంచుకున్న ఆఫర్‌ను క్లెయిమ్ చేయడానికి కాల్ బుక్ చేయండి",
                    subtitle: "మా టీమ్‌తో సౌకర్యవంతమైన సమయాన్ని షెడ్యూల్ చేయండి"
                },
                explore: {
                    title: "🚀 నేను స్వయంగా అన్వేషించాలనుకుంటున్నాను",
                    subtitle: "మీరు ఏమి వెతుకుతున్నారో మాకు చెప్పండి"
                }
            }
        },

        // ========================================
        // MODALS
        // ========================================
        modals: {
            goalsTransition: {
                title: "అద్భుతం! మీ లక్ష్యాలు సెట్ చేయబడ్డాయి.",
                subtitle: "ఇప్పుడు Topiko మీ వ్యాపారం కోసం {goals}లో ఎలా సహాయం చేయగలదో చూపిద్దాం — ఒక సమయంలో ఒక అడుగు",
                benefits: [
                    "✨ సాంకేతిక జ్ఞానం అవసరం లేదు",
                    "✅ కొనసాగించడానికి సున్నా బాధ్యత",
                    "🧪 నిర్ణయించే ముందు ప్రయత్నించండి"
                ],
                button: "నా ఉచిత సెటప్ పొందండి! 🚀"
            },
            setupIntro: {
                title: "అద్భుతం, {name}! 🎉",
                subtitle: "కేవలం 3 సరళమైన దశలలో, మీ {business} ఆన్‌లైన్‌లో ఎలా కనిపించగలదో మరియు పనిచేయగలదో మేము మీకు చూపిస్తాము — Topiko విధానంలో!",
                note: "🔥 మీలాంటి వ్యాపారాలు ప్రతి గంటకు లైవ్ అవుతున్నాయి — మొమెంటమ్‌ను కోల్పోవద్దు!",
                button: "ఏదైనా అద్భుతమైనది సృష్టిద్దాం! 🎯"
            },
            otpVerification: {
                title: "మీ ఫోన్ నంబర్‌ను ధృవీకరించండి",
                subtitle: "మేము మీ ఫోన్‌కు 4-అంకెల కోడ్ పంపాము. మీ ఖాతాను సురక్షితం చేయడానికి దానిని క్రింద నమోదు చేయండి.",
                resend: "కోడ్ రాలేదా? OTP మళ్లీ పంపండి",
                button: "ధృవీకరించండి మరియు కొనసాగండి"
            },
            callScheduler: {
                title: "ఆఫర్ క్లెయిమ్ చేయడానికి మీ కాల్‌ను షెడ్యూల్ చేయండి",
                subtitle: "మా టీమ్ మిమ్మల్ని సంప్రదించడానికి సౌకర్యవంతమైన సమయాన్ని ఎంచుకోండి:",
                timeSlots: {
                    today: "ఈరోజు",
                    tomorrow: "రేపు",
                    dayAfter: "ఎల్లుండి"
                },
                button: "పూర్తి చేయండి మరియు కాల్ షెడ్యూల్ చేయండి",
                close: "మూసివేయండి"
            },
            exploreForm: {
                title: "మీరు ఏమి వెతుకుతున్నారో మాకు చెప్పండి",
                subtitle: "మీ వ్యాపార అవసరాలను బాగా అర్థం చేసుకోవడంలో మాకు సహాయం చేయండి:",
                reasons: {
                    budget: "బడ్జెట్ పరిగణనలు",
                    timing: "నిర్ణయించుకోవడానికి ఎక్కువ సమయం కావాలి",
                    lookingElse: "ఏదైనా నిర్దిష్టమైనది వెతుకుతున్నాను",
                    justBrowsing: "ప్రస్తుతం కేవలం బ్రౌజింగ్ చేస్తున్నాను"
                },
                commentLabel: "అదనపు వివరాలు (ఐచ్ఛికం):",
                commentPlaceholder: "మీరు ఇంకా ఏమి వెతుకుతున్నారో మాకు చెప్పండి...",
                button: "సబ్మిషన్ పూర్తి చేయండి",
                close: "మూసివేయండి"
            }
        },

        // ========================================
        // NOTIFICATIONS & MESSAGES
        // ========================================
        notifications: {
            languageSelected: "భాష: {language}",
            goalsSelected: "పర్ఫెక్ట్! {count} లక్ష్యం{plural} ఎంచుకోబడింది!",
            phoneVerified: "✅ ఫోన్ విజయవంతంగా ధృవీకరించబడింది!",
            accountCreated: "🎉 స్వాగతం {name}! ఖాతా విజయవంతంగా సృష్టించబడింది!",
            movingToCategories: "పర్ఫెక్ట్! వర్గాలకు వెళ్తున్నాము...",
            movingToProducts: "పర్ఫెక్ట్! {count} వర్గాలతో ఉత్పాదాలకు వెళ్తున్నాము...",
            productAdded: "✅ \"{name}\" విజయవంతంగా జోడించబడింది!",
            productRemoved: "\"{name}\" తొలగించబడింది",
            themeSelected: "పర్ఫెక్ట్ ఎంపిక! {theme} థీమ్ ఎంచుకోబడింది!",
            setupComplete: "🎉 అభినందనలు {name}! మీ వ్యాపారం అంతిమ స్పర్శల కోసం సిద్ధంగా ఉంది!",
            
            // Error messages
            selectAtLeastOneGoal: "దయచేసి కనీసం ఒక లక్ష్యాన్ని ఎంచుకోండి",
            fillAllFields: "దయచేసి అన్ని అవసరమైన ఫీల్డ్‌లను భర్తీ చేయండి",
            selectAtLeastOneCategory: "కొనసాగించడానికి దయచేసి కనీసం ఒక వర్గాన్ని ఎంచుకోండి",
            addAtLeastOneProduct: "మీ స్టోర్ ఎలా కనిపిస్తుందో చూడటానికి కనీసం ఒక ఉత్పాదాన్ని జోడించండి!",
            
            // Info messages
            helpRequested: "🎯 గొప్పది! ఉచిత సెటప్ సహాయం కోసం మా టీమ్ 2 గంటలలో మిమ్మల్ని సంప్రదిస్తుంది!",
            callScheduled: "🎉 పర్ఫెక్ట్! \"{offer}\" క్లెయిమ్ చేయడానికి కాల్ షెడ్యూల్ చేయబడింది. ఎంచుకున్న సమయంలో మా టీమ్ మిమ్మల్ని సంప్రదిస్తుంది.",
            feedbackReceived: "🚀 మీ ఫీడ్‌బ్యాక్‌కు ధన్యవాదాలు! మా సేవను మెరుగుపరచడానికి మేము దీనిని ఉపయోగిస్తాము."
        },

        // ========================================
        // PROGRESS BAR LABELS
        // ========================================
        progress: {
            businessGoals: "వ్యాపార లక్ష్యాలు",
            signUp: "సైన్ అప్",
            successFactors: "విజయ కారకాలు",
            businessLive1: "వ్యాపారం లైవ్-1",
            businessLive2: "వ్యాపారం లైవ్-2",
            businessLive3: "వ్యాపారం లైవ్-3"
        },

        // ========================================
        // COMMON ELEMENTS
        // ========================================
        common: {
            loading: "లోడ్ అవుతోంది...",
            next: "తదుపరి",
            back: "వెనుకకు",
            continue: "కొనసాగండి",
            submit: "సబ్మిట్ చేయండి",
            cancel: "రద్దు చేయండి",
            close: "మూసివేయండి",
            save: "సేవ్ చేయండి",
            edit: "ఎడిట్ చేయండి",
            delete: "తొలగించండి",
            select: "ఎంచుకోండి",
            remove: "తొలగించండి",
            add: "జోడించండి",
            search: "వెతకండి",
            filter: "ఫిల్టర్",
            sort: "క్రమబద్ధీకరించండి",
            price: "ధర",
            category: "వర్గం",
            name: "పేరు",
            description: "వివరణ",
            optional: "ఐచ్ఛికం",
            required: "అవసరం"
        }
    },

    // ========================================
    // TAMIL TRANSLATIONS (NEW)
    // ========================================
    ta: {
        // ========================================
        // WELCOME SCREEN
        // ========================================
        welcome: {
            tagline: "இந்திய SMBகளுக்கான முழுமையான வணிக தளம்",
            tryFreeButton: "இலவசமாக முயற்சி செய்யுங்கள்"
        },

        // ========================================
        // LANGUAGE SCREEN
        // ========================================
        language: {
            title: "உங்கள் மொழியைத் தேர்ந்தெடுக்கவும்",
            subtitle: "अपनी भाषा चुनें | మీ భాషను ఎంచుకోండి | உங்கள் மொழியைத் தேர்ந்தெடுக்கவும்",
            options: {
                en: "ஆங்கிலத்தில் தொடரவும்",
                hi: "हिन्दी में जारी रखें",
                te: "తెలుగులో కొనసాగించండి",
                ta: "தமிழில் தொடரவும்"
            }
        },

        // ========================================
        // GOALS SCREEN
        // ========================================
        goals: {
            title: "உங்கள் இலக்குகளைத் தேர்ந்தெடுக்கவும்",
            subtitle: "Topiko-வுடன் நீங்கள் எதை அடைய விரும்புகிறீர்கள் என்பதைத் தேர்ந்தெடுக்கவும் (பொருந்தும் அனைத்தையும் தேர்ந்தெடுக்கவும்)",
            options: {
                ecommerce: {
                    title: "ஆன்லைன் விற்பனை (ஈ-காமர்ஸ்)",
                    description: "முழுமையான ஈ-காமர்ஸ் தீர்வுடன் உங்கள் தயாரிப்புகளை ஆன்லைனில் விற்கத் தொடங்குங்கள்"
                },
                customers: {
                    title: "அதிக வாடிக்கையாளர்களை அடைதல்",
                    description: "உங்கள் வாடிக்கையாளர் அடித்தளத்தை விரிவுபடுத்துங்கள் மற்றும் சந்தை அணுகலை அதிகரிக்கவும்"
                },
                manage: {
                    title: "வாடிக்கையாளர்களை நிர்வகித்தல்",
                    description: "உங்கள் வாடிக்கையாளர்களைக் கண்காணித்து நீண்ட கால உறவுகளை உருவாக்குங்கள்"
                },
                search: {
                    title: "தேடல் முடிவுகளில் தோன்றுதல்",
                    description: "உங்கள் ஆன்லைன் காணப்படுவதை மேம்படுத்துங்கள் மற்றும் சாத்தியமான வாடிக்கையாளர்களால் கண்டறியப்படுங்கள்"
                },
                brand: {
                    title: "என் பிராண்டை நிறுவுதல்",
                    description: "ஆன்லைனில் வலுவான பிராண்ட் இருப்பு மற்றும் தொழில்முறை பிம்பத்தை உருவாக்குங்கள்"
                }
            },
            nextButton: "அடுத்த படி"
        },

        // ========================================
        // REGISTRATION SCREEN
        // ========================================
        registration: {
            title: "Topiko-வுடன் தொடங்குங்கள்",
            subtitle: "உங்கள் இலவச கணக்கை உருவாக்க உங்கள் வணிகத்தைப் பற்றி எங்களிடம் கூறுங்கள்",
            fields: {
                fullName: {
                    label: "உங்கள் பெயர்",
                    placeholder: "உங்கள் முழு பெயரை உள்ளிடவும்"
                },
                email: {
                    label: "மின்னஞ்சல் முகவரி",
                    placeholder: "உங்கள் மின்னஞ்சல் முகவரியை உள்ளிடவும்"
                },
                phoneNumber: {
                    label: "தொலைபேசி எண்",
                    placeholder: "உங்கள் தொலைபேசி எண்ணை உள்ளிடவும்"
                },
                businessName: {
                    label: "வணிக பெயர்",
                    placeholder: "உங்கள் வணிக பெயரை உள்ளிடவும்"
                },
                address: {
                    label: "முகவரி",
                    placeholder: "உங்கள் வணிக முகவரியை உள்ளிடவும்"
                },
                businessType: {
                    label: "வணிக வகை",
                    placeholder: "உங்கள் வணிக வகையைத் தேர்ந்தெடுக்கவும்",
                    options: {
                        startup: "ஸ்டார்ட்அப்",
                        smallBusiness: "சிறு வணிகம்",
                        mediumEnterprise: "நடுத்தர நிறுவனம்",
                        largeEnterprise: "பெரிய நிறுவனம்",
                        freelancer: "ஃப்ரீலான்சர்"
                    }
                },
                category: {
                    label: "வணிக வகை",
                    placeholder: "உங்கள் வணிக வகையைத் தேர்ந்தெடுக்கவும்"
                }
            },
            submitButton: "என் வணிகத்தை ஆன்லைனில் காட்டுங்கள்"
        },

        // ========================================
        // QUALIFYING QUESTIONS SCREEN
        // ========================================
        qualifying: {
            title: "உங்களுக்காக அமைக்கலாம்",
            subtitle: "உங்கள் வணிகத்தைப் பற்றி சில விவரங்கள் மட்டுமே தேவை",
            questions: {
                onlinePresence: {
                    title: "தற்போது உங்களுக்கு ஏதேனும் ஆன்லைன் இருப்பு உள்ளதா?",
                    options: {
                        none: "ஆன்லайன் இருப்பு எதுவும் இல்லை",
                        whatsapp: "WhatsApp Business மட்டுமே",
                        social: "சமூக ஊடக பக்கங்கள் (Facebook/Instagram)",
                        basicWebsite: "அடிப்படை வலைத்தளம்",
                        fullWebsite: "ஆன்லைன் ஆர்டரிங்குடன் முழு வலைத்தளம்"
                    }
                },
                budget: {
                    title: "உங்கள் வணிக இலக்குகளை அடைய, ஆண்டுக்கு எவ்வளவு பட்ஜெட் ஒதுக்க முடியும்?",
                    options: {
                        low: "₹5,000 முதல் ₹10,000 வரை",
                        medium: "₹10,000 முதல் ₹25,000 வரை",
                        high: "₹25,000க்கும் அதிகம்"
                    }
                },
                decisionMaker: {
                    title: "உங்கள் வணிகத்திற்கான முடிவை எடுப்பவர் நீங்கள்தானா?",
                    options: {
                        yes: "ஆம்",
                        no: "இல்லை"
                    }
                },
                timeline: {
                    title: "எவ்வளவு சீக்கிரம் தொடங்க விரும்புகிறீர்கள்?",
                    options: {
                        immediately: "உடனடியாக",
                        withinWeek: "ஒரு வாரத்திற்குள்",
                        thisMonth: "இந்த மாதம்",
                        justChecking: "வெறும் சரிபார்த்துக் கொண்டிருக்கிறேன்"
                    }
                }
            },
            nextButton: "என் வணிகத்தை உருவாக்குங்கள் 🚀"
        },

        // ========================================
        // CATEGORIES SCREEN
        // ========================================
        categories: {
            title: "உங்கள் வணிக வகைகளைத் தேர்ந்தெடுக்கவும்",
            subtitle: "உங்கள் வணிகத்தை சிறப்பாக விவரிக்கும் குறிப்பிட்ட வகைகள் மற்றும் துணை வகைகளைத் தேர்ந்தெடுக்கவும்",
            selectionSummary: {
                title: "📊 உங்கள் தேர்வு சுருக்கம்",
                categories: "வகைகள்:",
                subcategories: "துணை வகைகள்:"
            },
            nextButton: "தயாரிப்புகளைச் சேர்க்க தொடரவும்"
        },

        // ========================================
        // PRODUCTS SCREEN
        // ========================================
        products: {
            title: "உங்கள் தயாரிப்புகளைச் சேர்க்கவும்",
            subtitle: "தயாரிப்புகளைத் தேர்ந்தெடுக்கவும் அல்லது உங்கள் சொந்த தனிப்பயன் தயாரிப்புகளைச் சேர்க்கவும்",
            helpSection: {
                title: "🎯 இலவச தொழில்முறை அமைப்பு கிடைக்கிறது!",
                text: "Topiko ஒவ்வொரு மாதமும் 75 வணிகங்களுக்கு இலவச அமைப்புடன் உதவுகிறது. {month}க்கு {count} கோரப்பட்டது. உதவிக்காக இங்கே கிளிக் செய்யுங்கள்!"
            },
            modes: {
                select: "தயாரிப்புகளைத் தேர்ந்தெடுக்கவும்",
                custom: "தனிப்பயன் தயாரிப்பைச் சேர்க்கவும்"
            },
            helpers: {
                selectPopular: "✨ பிரபலமான பொருட்களைத் தேர்ந்தெடுக்கவும்",
                clearAll: "🗑️ அனைத்தையும் அழிக்கவும்"
            },
            filters: {
                search: "தயாரிப்புகளைத் தேடுங்கள்...",
                allCategories: "அனைத்து வகைகள்",
                sortByName: "பெயர் வாரியாக வரிசைப்படுத்தவும்",
                sortByPriceLow: "விலை: குறைவு முதல் அதிகம் வரை",
                sortByPriceHigh: "விலை: அதிகம் முதல் குறைவு வரை",
                sortByCategory: "வகை",
                priceRange: "விலை வரம்பு: ₹{min} - ₹{max}"
            },
            customForm: {
                title: "தனிப்பயன் தயாரிப்பு/சேவையைச் சேர்க்கவும்",
                fields: {
                    name: {
                        label: "தயாரிப்பு/சேவை பெயர்",
                        placeholder: "எ.கா., காட்டன் குர்தா, மசாலா தோசை, முடி வெட்டுதல்"
                    },
                    price: {
                        label: "விலை (₹)",
                        placeholder: "எ.கா., 899"
                    },
                    category: {
                        label: "வகை",
                        placeholder: "உங்கள் தேர்ந்தெடுக்கப்பட்ட வகைகளிலிருந்து தேர்ந்தெடுக்கவும்"
                    },
                    subcategory: {
                        label: "துணை வகை (விருப்பமான)",
                        placeholder: "ஒரு துணை வகையைத் தேர்ந்தெடுக்கவும்"
                    },
                    description: {
                        label: "விவரணம்",
                        placeholder: "உங்கள் தயாரிப்பு அல்லது சேவையின் சுருக்கமான விவரணம்"
                    },
                    imageUrl: {
                        label: "தயாரிப்பு படம் URL (விருப்பமான)",
                        placeholder: "https://example.com/image.jpg"
                    }
                },
                addButton: "➕ தனிப்பயன் தயாரிப்பைச் சேர்க்கவும்"
            },
            selectedProducts: {
                title: "🎯 தேர்ந்தெடுக்கப்பட்ட தயாரிப்புகள் ({count})",
                catalogTitle: "உங்கள் தயாரிப்பு பட்டியல் ({count})",
                emptyMessage: "இன்னும் தயாரிப்புகள் தேர்ந்தெடுக்கப்படவில்லை. மேலே இருந்து தயாரிப்புகளைத் தேர்ந்தெடுக்கவும் அல்லது தனிப்பயன் தயாரிப்புகளைச் சேர்க்கவும்!"
            },
            navigation: {
                backButton: "← வகைகளுக்குத் திரும்பு",
                nextButton: "தீம் தேர்ந்தெடுக்கவும் 🎨"
            }
        },

        // ========================================
        // THEMES SCREEN
        // ========================================
        themes: {
            title: "உங்கள் வணிக தீமைத் தேர்ந்தெடுக்கவும்",
            subtitle: "உங்கள் வணிக பாணியைப் பிரதிநிதித்துவப்படுத்தும் ஒரு தீமைத் தேர்ந்தெடுக்கவும். உங்கள் தயாரிப்புகள் எப்படி இருக்கும் என்பதைப் பாருங்கள்!",
            options: {
                modern: {
                    title: "நவீன மற்றும் குறைந்தபட்ச",
                    description: "உங்கள் தயாரிப்புகளில் கவனம் செலுத்தும் தூய்மையான, எளிய வடிவமைப்பு"
                },
                vibrant: {
                    title: "வண்ணமயமான மற்றும் துடிப்பான",
                    description: "வாடிக்கையாளர்களை ஈர்க்க தைரியமான வண்ணங்கள் மற்றும் ஆற்றல்மிக்க வடிவமைப்பு"
                },
                professional: {
                    title: "தொழில்முறை மற்றும் கார்ப்பரேட்",
                    description: "நம்பிக்கை மற்றும் நம்பகத்தன்மையை உருவாக்கும் அதிநவீன வடிவமைப்பு"
                },
                traditional: {
                    title: "பாரம்பரிய மற்றும் உன்னதமான",
                    description: "சூடான, வரவேற்கும் உணர்வுடன் காலமற்ற வடிவமைப்பு"
                },
                creative: {
                    title: "படைப்பூக்கம் மற்றும் கலை",
                    description: "படைப்பாற்றலைக் காட்டும் தனித்துவமான, கலை வடிவமைப்பு"
                },
                luxury: {
                    title: "நேர்த்தியான மற்றும் ஆடம்பர",
                    description: "உயர்தர தயாரிப்புகள் மற்றும் சேவைகளுக்கான பிரமியம் வடிவமைப்பு"
                }
            },
            selectedTheme: "தீம் தேர்ந்தெடுக்கப்படவில்லை",
            note: "நீங்கள் இதை எப்போது வேண்டுமானாலும் மாற்றலாம்",
            navigation: {
                backButton: "← தயாரிப்புகளுக்குத் திரும்பு",
                nextButton: "அமைப்பை நிறைவுசெய்யுங்கள் 🚀"
            }
        },

        // ========================================
        // COMPLETION SCREEN
        // ========================================
        completion: {
            title: "வாழ்த்துக்கள், {businessName} இறுதித் தொடுதல்களுக்குத் தயாராக உள்ளது!",
            subtitle: "உங்கள் வணிக அமைப்பு முடிந்தது! எங்கள் குழு இப்போது உங்கள் தொழில்முறை ஆன்லைன் இருப்பை உருவாக்கும்.",
            offers: {
                title: "🎁 உங்கள் இலவச போனஸ் சலுகையைத் தேர்ந்தெடுக்கவும்!",
                subtitle: "உங்களுக்கு மிகவும் ஆர்வமுள்ள ஒரு சலுகையைத் தேர்ந்தெடுக்கவும்:",
                timer: "🔥 வரையறுக்கப்பட்ட நேரம்: இந்த சலுகைகள் {time}இல் காலாவதியாகும்"
            },
            actions: {
                title: "🎯 நீங்கள் எப்படி தொடர விரும்புகிறீர்கள்?",
                scheduleCall: {
                    title: "📞 என் தேர்ந்தெடுத்த சலுகையைப் பெற அழைப்பை முன்பதிவு செய்யுங்கள்",
                    subtitle: "எங்கள் குழுவுடன் வசதியான நேரத்தை திட்டமிடுங்கள்"
                },
                explore: {
                    title: "🚀 நான் சொந்தமாக ஆராய விரும்புகிறேன்",
                    subtitle: "நீங்கள் எதைத் தேடுகிறீர்கள் என்று எங்களிடம் கூறுங்கள்"
                }
            }
        },

        // ========================================
        // MODALS
        // ========================================
        modals: {
            goalsTransition: {
                title: "அருமை! உங்கள் இலக்குகள் அமைக்கப்பட்டுள்ளன.",
                subtitle: "இப்போது உங்கள் வணிகத்திற்கு {goals}இல் Topiko எப்படி உதவ முடியும் என்பதைக் காட்டுவோம் — ஒரு நேரத்தில் ஒரு படி",
                benefits: [
                    "✨ தொழில்நுட்ப அறிவு தேவையில்லை",
                    "✅ தொடருவதற்கு பூஜ்ய கடமை",
                    "🧪 முடிவெடுக்கும் முன் முயற்சிக்கவும்"
                ],
                button: "என் இலவச அமைப்பைப் பெறுங்கள்! 🚀"
            },
            setupIntro: {
                title: "சிறப்பு, {name}! 🎉",
                subtitle: "வெறும் 3 எளிய படிகளில், உங்கள் {business} ஆன்லைனில் எப்படி தோற்றமளிக்கும் மற்றும் வேலை செய்யும் என்பதை நாங்கள் உங்களுக்குக் காட்டுவோம் — Topiko வழி!",
                note: "🔥 உங்களைப் போன்ற வணிகங்கள் ஒவ்வொரு மணி நேரமும் நேரலையில் வருகின்றன — வேகத்தை தவறவிடாதீர்கள்!",
                button: "ஏதாவது அற்புதமான ஒன்றை உருவாக்குவோம்! 🎯"
            },
            otpVerification: {
                title: "உங்கள் தொலைபேசி எண்ணை சரிபார்க்கவும்",
                subtitle: "உங்கள் தொலைபேசிக்கு 4-இலக்க குறியீட்டை அனுப்பியுள்ளோம். உங்கள் கணக்கைப் பாதுகாக்க அதை கீழே உள்ளிடவும்.",
                resend: "குறியீடு வரவில்லையா? OTP மீண்டும் அனுப்பவும்",
                button: "சரிபார்த்து தொடரவும்"
            },
            callScheduler: {
                title: "சலுகையைப் பெற உங்கள் அழைப்பை திட்டமிடுங்கள்",
                subtitle: "எங்கள் குழு உங்களைத் தொடர்பு கொள்ள வசதியான நேரத்தைத் தேர்ந்தெடுக்கவும்:",
                timeSlots: {
                    today: "இன்று",
                    tomorrow: "நாளை",
                    dayAfter: "நாளை மறுநாள்"
                },
                button: "முடித்து அழைப்பை திட்டமிடுங்கள்",
                close: "மூடு"
            },
            exploreForm: {
                title: "நீங்கள் எதைத் தேடுகிறீர்கள் என்று எங்களிடம் கூறுங்கள்",
                subtitle: "உங்கள் வணிகத் தேவைகளை நன்றாகப் புரிந்துக்கொள்ள எங்களுக்கு உதவுங்கள்:",
                reasons: {
                    budget: "பட்ஜெட் பரிசீலனைகள்",
                    timing: "முடிவெடுக்க அதிக நேரம் வேண்டும்",
                    lookingElse: "ஏதாவது குறிப்பிட்டதைத் தேடுகிறேன்",
                    justBrowsing: "இப்போது வெறும் உலாவுகிறேன்"
                },
                commentLabel: "கூடுதல் விவரங்கள் (விருப்பமான):",
                commentPlaceholder: "நீங்கள் வேறு எதைத் தேடுகிறீர்கள் என்று எங்களிடம் கூறுங்கள்...",
                button: "சமர்பிப்பை முடிக்கவும்",
                close: "மூடு"
            }
        },

        // ========================================
        // NOTIFICATIONS & MESSAGES
        // ========================================
        notifications: {
            languageSelected: "மொழி: {language}",
            goalsSelected: "சரியானது! {count} இலக்கு{plural} தேர்ந்தெடுக்கப்பட்டது!",
            phoneVerified: "✅ தொலைபேசி வெற்றிகரமாக சரிபார்க்கப்பட்டது!",
            accountCreated: "🎉 வரவேற்கிறோம் {name}! கணக்கு வெற்றிகரமாக உருவாக்கப்பட்டது!",
            movingToCategories: "சரியானது! வகைகளுக்குச் செல்கிறோம்...",
            movingToProducts: "சரியானது! {count} வகைகளுடன் தயாரிப்புகளுக்குச் செல்கிறோம்...",
            productAdded: "✅ \"{name}\" வெற்றிகரமாகச் சேர்க்கப்பட்டது!",
            productRemoved: "\"{name}\" அகற்றப்பட்டது",
            themeSelected: "சிறந்த தேர்வு! {theme} தீம் தேர்ந்தெடுக்கப்பட்டது!",
            setupComplete: "🎉 வாழ்த்துக்கள் {name}! உங்கள் வணிகம் இறுதித் தொடுதல்களுக்குத் தயாராக உள்ளது!",
            
            // Error messages
            selectAtLeastOneGoal: "தயவுசெய்து குறைந்தது ஒரு இலக்கையாவது தேர்ந்தெடுக்கவும்",
            fillAllFields: "தயவுசெய்து அனைத்து தேவையான புலங்களையும் நிரப்பவும்",
            selectAtLeastOneCategory: "தொடர குறைந்தது ஒரு வகையையாவது தேர்ந்தெடுக்கவும்",
            addAtLeastOneProduct: "உங்கள் கடை எப்படி இருக்கும் என்பதைப் பார்க்க குறைந்தது ஒரு தயாரிப்பையாவது சேர்க்கவும்!",
            
            // Info messages
            helpRequested: "🎯 அருமை! இலவச அமைப்பு உதவிக்காக எங்கள் குழு 2 மணி நேரத்திற்குள் உங்களைத் தொடர்பு கொள்ளும்!",
            callScheduled: "🎉 சரியானது! \"{offer}\"ஐப் பெற அழைப்பு திட்டமிடப்பட்டது. தேர்ந்தெடுக்கப்பட்ட நேரத்தில் எங்கள் குழு உங்களைத் தொடர்பு கொள்ளும்.",
            feedbackReceived: "🚀 உங்கள் கருத்துக்களுக்கு நன்றி! எங்கள் சேவையை மேம்படுத்த இதைப் பயன்படுத்துவோம்."
        },

        // ========================================
        // PROGRESS BAR LABELS
        // ========================================
        progress: {
            businessGoals: "வணிக இலக்குகள்",
            signUp: "பதிவு செய்யுங்கள்",
            successFactors: "வெற்றி காரணிகள்",
            businessLive1: "வணிகம் நேரலை-1",
            businessLive2: "வணிகம் நேரலை-2",
            businessLive3: "வணிகம் நேரலை-3"
        },

        // ========================================
        // COMMON ELEMENTS
        // ========================================
        common: {
            loading: "ஏற்றுகிறது...",
            next: "அடுத்தது",
            back: "பின்செல்",
            continue: "தொடரவும்",
            submit: "சமர்பிக்கவும்",
            cancel: "ரத்து செய்யவும்",
            close: "மூடு",
            save: "சேமிக்கவும்",
            edit: "திருத்தவும்",
            delete: "நீக்கவும்",
            select: "தேர்ந்தெடுக்கவும்",
            remove: "அகற்றவும்",
            add: "சேர்க்கவும்",
            search: "தேடவும்",
            filter: "வடிகட்டவும்",
            sort: "வரிசைப்படுத்தவும்",
            price: "விலை",
            category: "வகை",
            name: "பெயர்",
            description: "விவரணம்",
            optional: "விருப்பமான",
            required: "தேவையான"
        }
    }
};

// ========================================
// TRANSLATION UTILITY FUNCTIONS
// ========================================

let currentLanguage = 'en';

/**
 * Get translation for a given key path
 * @param {string} keyPath - Dot notation path to translation key (e.g., 'welcome.tagline')
 * @param {object} variables - Variables to replace in translation string
 * @returns {string} - Translated text
 */
function getTranslation(keyPath, variables = {}) {
    const keys = keyPath.split('.');
    let translation = TRANSLATIONS[currentLanguage];
    
    // Navigate through the nested object
    for (const key of keys) {
        if (translation && typeof translation === 'object' && key in translation) {
            translation = translation[key];
        } else {
            // Fallback to English if translation not found
            let fallback = TRANSLATIONS.en;
            for (const fallbackKey of keys) {
                if (fallback && typeof fallback === 'object' && fallbackKey in fallback) {
                    fallback = fallback[fallbackKey];
                } else {
                    console.warn(`Translation not found: ${keyPath} in ${currentLanguage}`);
                    return keyPath; // Return the key path if translation completely missing
                }
            }
            translation = fallback;
            break;
        }
    }
    
    // If translation is still an object, return the key path
    if (typeof translation === 'object') {
        console.warn(`Translation path incomplete: ${keyPath}`);
        return keyPath;
    }
    
    // Replace variables in the translation string
    let result = translation || keyPath;
    Object.keys(variables).forEach(variable => {
        const regex = new RegExp(`\\{${variable}\\}`, 'g');
        result = result.replace(regex, variables[variable]);
    });
    
    return result;
}

/**
 * Set the current language
 * @param {string} languageCode - Language code (en, hi, te, ta)
 */
function setLanguage(languageCode) {
    if (TRANSLATIONS[languageCode]) {
        currentLanguage = languageCode;
        console.log(`Language set to: ${languageCode}`);
        
        // Update all translated elements on the page
        updatePageTranslations();
        
        // Store in session/localStorage for persistence
        localStorage.setItem('topiko_language', languageCode);
        
        return true;
    } else {
        console.warn(`Language not supported: ${languageCode}`);
        return false;
    }
}

/**
 * Get current language
 * @returns {string} - Current language code
 */
function getCurrentLanguage() {
    return currentLanguage;
}

/**
 * Update all elements with data-translate attribute
 */
function updatePageTranslations() {
    const translateElements = document.querySelectorAll('[data-translate]');
    
    translateElements.forEach(element => {
        const keyPath = element.getAttribute('data-translate');
        const variables = element.getAttribute('data-translate-vars');
        
        let vars = {};
        if (variables) {
            try {
                vars = JSON.parse(variables);
            } catch (e) {
                console.warn('Invalid data-translate-vars JSON:', variables);
            }
        }
        
        const translation = getTranslation(keyPath, vars);
        
        // Update element based on type
        if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
            if (element.type === 'button' || element.type === 'submit') {
                element.value = translation;
            } else {
                element.placeholder = translation;
            }
        } else {
            element.textContent = translation;
        }
    });
    
    console.log(`Updated ${translateElements.length} translated elements`);
}

/**
 * Initialize translation system
 * Load saved language preference and apply translations
 */
function initializeTranslations() {
    // Load saved language preference
    const savedLanguage = localStorage.getItem('topiko_language');
    if (savedLanguage && TRANSLATIONS[savedLanguage]) {
        currentLanguage = savedLanguage;
    }
    
    // Apply translations to page
    updatePageTranslations();
    
    console.log('Translation system initialized with language:', currentLanguage);
}

// ========================================
// INTEGRATION WITH EXISTING SYSTEM
// ========================================

/**
 * Enhanced language selection function for existing system
 */
function selectLanguageWithTranslation(lang, element) {
    console.log('🌏 Language selection initiated:', lang);
    
    try {
        // Set the translation language
        const success = setLanguage(lang);
        if (!success) {
            console.error('Failed to set language:', lang);
            return;
        }
        
        // Update global app state (existing functionality)
        if (!window.topikoApp) {
            window.topikoApp = {};
        }
        window.topikoApp.selectedLanguage = lang;
        
        // Update UI selection state (existing functionality)
        document.querySelectorAll('.language-option').forEach(option => {
            option.classList.remove('selected');
        });
        if (element) {
            element.classList.add('selected');
        }
        
        // Show translated notification
        const languageNames = {
            'en': 'English',
            'hi': 'हिन्दी',
            'te': 'తెలుగు', 
            'ta': 'தமிழ்'
        };
        
        if (window.TopikoUtils && window.TopikoUtils.showNotification) {
            const message = getTranslation('notifications.languageSelected', { language: languageNames[lang] });
            window.TopikoUtils.showNotification(message, 'success');
        }
        
        if (window.TopikoUtils && window.TopikoUtils.calculateLeadScore) {
            window.TopikoUtils.calculateLeadScore();
        }
        
        console.log('✅ Language successfully set to:', lang);
        
        // Continue with existing flow
        setTimeout(() => {
            if (window.TopikoUtils && window.TopikoUtils.showScreen) {
                window.TopikoUtils.showScreen('goals');
            } else {
                // Fallback manual navigation
                document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
                const goalsScreen = document.getElementById('goals');
                if (goalsScreen) {
                    goalsScreen.classList.add('active');
                }
            }
        }, 1500);
        
    } catch (error) {
        console.error('❌ Error in selectLanguageWithTranslation:', error);
    }
}

// ========================================
// EXPORT FOR GLOBAL ACCESS
// ========================================

if (typeof window !== 'undefined') {
    window.TopikoTranslations = {
        TRANSLATIONS,
        getTranslation,
        setLanguage,
        getCurrentLanguage, 
        updatePageTranslations,
        initializeTranslations,
        selectLanguageWithTranslation
    };
    
    // Make selectLanguageWithTranslation globally available
    window.selectLanguageWithTranslation = selectLanguageWithTranslation;
    
    // Auto-initialize on DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initializeTranslations);
    } else {
        initializeTranslations();
    }
}

console.log('🌍 Topiko Translation System Loaded - All Languages Complete!');
console.log('📊 Translation Stats:');
console.log('- English: ✅ Complete');
console.log('- Hindi (हिन्दी): ✅ Complete'); 
console.log('- Telugu (తెలుగు): ✅ Complete');
console.log('- Tamil (தமிழ்): ✅ Complete');
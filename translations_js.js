/* ========================================
   TOPIKO LEAD FORM - TRANSLATION SYSTEM
   Complete Hindi & Telugu Implementation - FIXED
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
                ta: "தமிழில் தொடరవும்"
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
            subtitle: "अपनी भाषा चुनें | మీ భాషను ఎంచుకోండి | உங்கள் மொழியைத் தேர்ந்தெடுக्கवும्",
            options: {
                en: "अंग्रेजी में जारी रखें",
                hi: "हिन्दी में जारी रखें", 
                te: "తెలుగులో కొనసాగించండి",
                ta: "தமிழில் தொடரवும्"
            }
        },

        // ========================================
        // GOALS SCREEN
        // ========================================
        goals: {
            title: "अपने लक्ष्य चुनें",
            subtitle: "Topiko के साथ क्या हासिल करना चाहते हैं (जो भी लागू हो सभी चुनें)",
            options: {
                ecommerce: {
                    title: "ऑनलाइन बेचना (ई-कॉमर्स)",
                    description: "पूर्ण ई-कॉमर्स समाधान का उपयोग करके अपने प्रॉडक्टों को ऑनलाइन बेचना शुरू करें।"
                },
                customers: {
                    title: "अधिक ग्राहकों तक पहुंचना",
                    description: "अपने ग्राहकों की संख्या बढ़ाएँ और बाजार में अपनी पहुंच बढ़ाएं"
                },
                manage: {
                    title: "ग्राहकों का प्रबंधन",
                    description: "अपने ग्राहकों से जुड़े रहें और उनके साथ मज़बूत रिश्ते बनाएं।"
                },
                search: {
                    title: "गूगल में दिखना",
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
            subtitle: "अपना मुफ़्त अकाउंट बनाने के लिए, हमें अपने बिज़नेस के बारे में बताएँ।",
            fields: {
                fullName: {
                    label: "आपका नाम",
                    placeholder: "अपना पूरा नाम दर्ज करें"
                },
                email: {
                    label: "ईमेल आईडी",
                    placeholder: "अपना ईमेल आईडी दर्ज करें"
                },
                phoneNumber: {
                    label: "फोन नंबर",
                    placeholder: "अपना फोन नंबर दर्ज करें"
                },
                businessName: {
                    label: "कारोबार का नाम",
                    placeholder: "अपने बिज़नेस का नाम दर्ज करें"
                },
                address: {
                    label: "पता",
                    placeholder: "अपने बिज़नेस का पता दर्ज करें"
                },
                businessType: {
                    label: "बिज़नेस टाइप",
                    placeholder: "अपने बिज़नेस टाइप चुनें",
                    options: {
                        startup: "स्टार्टअप",
                        smallBusiness: "छोटा बिज़नेस",
                        mediumEnterprise: "मीडियम बिज़नेस",
                        largeEnterprise: "बड़ा बिज़नेस",
                        freelancer: "फ्रीलांसर"
                    }
                },
                category: {
                    label: "बिज़नेस कैटेगरी",
                    placeholder: "अपनी बिज़नेस कैटेगरी चुनें"
                }
            },
            submitButton: "मेरा बिज़नेस ऑनलाइन दिखाएं"
        },

        // ========================================
        // QUALIFYING QUESTIONS SCREEN
        // ========================================
        qualifying: {
            title: "आइए आपके लिए सेटअप करते हैं",
            subtitle: "बस आपके बिज़नेस के बारे में कुछ विवरण चाहिए",
            questions: {
                onlinePresence: {
                    title: "क्या आपकी वर्तमान में कोई ऑनलाइन उपस्थिति है?",
                    options: {
                        none: "बिल्कुल कोई ऑनलाइन उपस्थिति नहीं",
                        whatsapp: "केवल WhatsApp Business",
                        social: "सोशल मीडिया पेज (Facebook/Instagram)",
                        basicWebsite: "साधारण वेबसाइट",
                        fullWebsite: "ऑनलाइन ऑर्डरिंग के साथ पूरी वेबसाइट"
                    }
                },
                budget: {
                    title: "आप अपने बिज़नेस के लिए साल भर का कितना बजट रख सकते हैं?",
                    options: {
                        low: "₹5,000 से ₹10,000",
                        medium: "₹10,000 से ₹25,000", 
                        high: "₹25,000 से अधिक"
                    }
                },
                decisionMaker: {
                    title: "क्या आप ही अपने बिज़नेस के लिए फ़ैसला लेते हैं?",
                    options: {
                        yes: "हाँ",
                        no: "नहीं"
                    }
                },
                timeline: {
                    title: "आप कब से शुरू करना चाहते हैं?",
                    options: {
                        immediately: "तुरंत",
                        withinWeek: "एक सप्ताह के भीतर",
                        thisMonth: "इस महीने",
                        justChecking: "बस जांच रहा हूं"
                    }
                }
            },
            nextButton: "मेरा बिज़नेस बनाएं 🚀"
        },

        // ========================================
        // CATEGORIES SCREEN
        // ========================================
        categories: {
            title: "अपनी बिज़नेस कैटेगरी चुनें",
            subtitle: "अपने बिज़नेस के हिसाब से सही कैटेगरी और सब-कैटेगरी चुनें।",
            selectionSummary: {
                title: "📊 आपकी चुनी हुई जानकारी",
                categories: "कैटेगरी:",
                subcategories: "सब-कैटेगरी:"
            },
            nextButton: "प्रॉडक्ट जोड़ने के लिए आगे बढ़ें।"
        },

        // ========================================
        // PRODUCTS SCREEN
        // ========================================
        products: {
            title: "अपने प्रॉडक्ट जोड़ें",
            subtitle: "प्रॉडक्ट चुनें या अपना प्रॉडक्ट जोड़ें",
            helpSection: {
                title: "🎯 मुफ़्त में प्रोफेशनल सेटअप कराएं!",
                text: "Topiko हर महीने 75 बिज़नेस को मुफ़्त सेटअप में मदद करता है। {month} के लिए {count} लोग इसका फ़ायदा उठा चुके हैं। मदद के लिए यहाँ क्लिक करें!"
            },
            modes: {
                select: "प्रॉडक्ट चुनें",
                custom: "प्रॉडक्ट जोड़ें"
            },
            helpers: {
                selectPopular: "✨ पॉपुलर आइटम चुनें",
                clearAll: "🗑️ सब मिटा दें"
            },
            filters: {
                search: "प्रॉडक्ट खोजें...",
                allCategories: "सभी कैटेगरी",
                sortByName: "नाम के अनुसार क्रमबद्ध करें",
                sortByPriceLow: "कीमत: कम से अधिक",
                sortByPriceHigh: "कीमत: अधिक से कम",
                sortByCategory: "कैटेगरी",
                priceRange: "क़ीमत की रेंज: ₹{min} - ₹{max}"
            },
            customForm: {
                title: "अपना कस्टम प्रॉडक्ट/सर्विस जोड़ें",
                fields: {
                    name: {
                        label: "प्रॉडक्ट/सर्विस का नाम",
                        placeholder: "जैसे, कॉटन कुर्ता, मसाला डोसा, हेयरकट"
                    },
                    price: {
                        label: "कीमत (₹)",
                        placeholder: "जैसे, 899"
                    },
                    category: {
                        label: "कैटेगरी",
                        placeholder: "अपनी चुनी गई कैटेगरी में से चुनें"
                    },
                    subcategory: {
                        label: "उप-कैटेगरी (ऑप्शनल)",
                        placeholder: "एक उप-कैटेगरी चुनें"
                    },
                    description: {
                        label: "विवरण",
                        placeholder: "अपने प्रॉडक्ट या सेवा का संक्षिप्त विवरण"
                    },
                    imageUrl: {
                        label: "प्रोडक्ट इमेज का URL(अगर हो तो)",
                        placeholder: "https://example.com/image.jpg"
                    }
                },
                addButton: "➕ कस्टम प्रॉडक्ट जोड़ें"
            },
            selectedProducts: {
                title: "🎯 चुने गए प्रॉडक्ट ({count})",
                catalogTitle: "आपका प्रॉडक्ट कैटलॉग ({count})",
                emptyMessage: "अभी तक कोई प्रॉडक्ट नहीं चुना गया है। ऊपर से प्रॉडक्ट चुनें या कस्टम प्रॉडक्ट जोड़ें!"
            },
            navigation: {
                backButton: "← कैटेगरी पर लौटें",
                nextButton: "बिज़नेस थीम चुनें 🎨"
            }
        },

        // ========================================
        // THEMES SCREEN
        // ========================================
        themes: {
            title: "अपना बिज़नेस थीम चुनें",
            subtitle: "एक ऐसी थीम चुनें जो आपके बिज़नेस पर जचे। देखें कि आपके प्रॉडक्ट कैसे दिखेंगे!",
            options: {
                modern: {
                    title: "आधुनिक और सिंपल",
                    description: "साफ, सरल डिज़ाइन जो आपके प्रॉडक्टों पर केंद्रित है"
                },
                vibrant: {
                    title: "रंगीन और आकर्षक",
                    description: "ग्राहकों को लुभाने के लिए बोल्ड रंग और शानदार डिज़ाइन"
                },
                professional: {
                    title: "पेशेवर और कॉर्पोरेट",
                    description: "एक ऐसा शानदार डिज़ाइन जिस पर ग्राहक भरोसा करें"
                },
                traditional: {
                    title: "पारंपरिक और क्लासिक",
                    description: "क्लासिक स्टाइल का शानदार डिज़ाइन, जिसमें अपनापन महसूस हो"
                },
                creative: {
                    title: "रचनात्मक और कलात्मक",
                    description: "रचनात्मकता से भरा, सबसे अलग और कलात्मक डिज़ाइन"
                },
                luxury: {
                    title: "खूबसूरत और लग्जरी",
                    description: "हाई-क्वालिटी प्रॉडक्ट्स और सर्विस के लिए प्रीमियम डिज़ाइन"
                }
            },
            selectedTheme: "कोई थीम नहीं चुनी गई",
            note: "आप इसे बाद में कभी भी बदल सकते हैं",
            navigation: {
                backButton: "← प्रॉडक्टों पर वापस",
                nextButton: "सेटअप पूरा करें 🚀"
            }
        },

        // ========================================
        // COMPLETION SCREEN
        // ========================================
        completion: {
            title: "बधाई हो! आपका {businessName} अब अंतिम रूप से तैयार है!",
            subtitle: "आपका बिज़नेस सेटअप पूरा हो गया है! हमारी टीम अब आपके लिए एक शानदार ऑनलाइन प्रेज़ेंस बनाएगी।",
            offers: {
                title: "🎁 अपना मुफ्त बोनस ऑफर चुनें!",
                subtitle: "एक ऐसा ऑफर चुनें जिसमें आपकी सबसे अधिक रुचि हो:",
                timer: "🔥 सीमित समय: ये ऑफर {time} में समाप्त हो जाएंगे"
            },
            actions: {
                title: "🎯 आप कैसे आगे बढ़ना चाहेंगे?",
                scheduleCall: {
                    title: "📞 अपने चुने हुए ऑफ़र को पाने के लिए कॉल बुक करें",
                    subtitle: "हमारी टीम के साथ बात करने के लिए एक समय तय करें"
                },
                explore: {
                    title: "🚀 मैं अपने आप करना चाहता हूँ",
                    subtitle: "बताइए आप क्या चाहते हैं?"
                }
            }
        },

        // ========================================
        // MODALS
        // ========================================
        modals: {
            goalsTransition: {
                title: "बहुत बढ़िया! आपके लक्ष्य सेट हो गए हैं।",
                subtitle: "आइए देखते हैं कि Topiko आपके बिज़नेस के लिए {goals} को हासिल करने में कैसे मदद कर सकता है - एक-एक करके",
                benefits: [
                    "✨ टेक्निकल नॉलेज की ज़रूरत नहीं",
                    "✅ आगे जारी रखने के लिए कोई शर्त नहीं",
                    "🧪 निर्णय लेने से पहले कोशिश करें"
                ],
                button: "अपना मुफ़्त सेटअप पाएं! 🚀"
            },
            setupIntro: {
                title: "बेहतरीन!, {name}! 🎉",
                subtitle: "सिर्फ 3 आसान स्टेप्स में, हम आपको दिखाएंगे कि आपका {business} ऑनलाइन कैसा दिख सकता है और कैसे काम कर सकता है — Topiko के तरीक़े से!",
                note: "🔥 आपके जैसे बिज़नेस हर घंटे लाइव हो रहे हैं - इस मौक़े को हाथ से जाने न दें!",
                button: "आइए कुछ अद्भुत बनाते हैं! 🎯"
            },
            otpVerification: {
                title: "अपना फ़ोन नंबर वेरिफाई करें",
                subtitle: "हमने आपके फ़ोन पर 4 अंकों का एक कोड भेजा है। अपना अकाउंट सुरक्षित करने के लिए इसे यहाँ डालें",
                resend: "कोड नहीं मिला? OTP पुनः भेजें",
                button: "वेरिफाई करें और आगे बढ़ें"
            },
            callScheduler: {
                title: "अपना ऑफ़र पाने के लिए कॉल शेड्यूल करें",
                subtitle: "हमारी टीम से बात करने के लिए, अपनी सुविधा के हिसाब से समय चुनें:",
                timeSlots: {
                    today: "आज",
                    tomorrow: "कल",
                    dayAfter: "परसों"
                },
                button: "पूरा करें और कॉल शेड्यूल करें",
                close: "बंद करें"
            },
            exploreForm: {
                title: "हमें बताएं कि आपको क्या चाहिए",
                subtitle: "हमें आपकी बिज़नेस से जुड़ी ज़रूरतें समझने में मदद करें",
                reasons: {
                    budget: "बजट संबंधी विचार",
                    timing: "निर्णय लेने के लिए अधिक समय चाहिए",
                    lookingElse: "कुछ ख़ास चाहिए",
                    justBrowsing: "अभी केवल ब्राउज़ कर रहा हूं"
                },
                commentLabel: "और जानकारी (अगर चाहें तो)",
                commentPlaceholder: "हमें बताएं कि आपको क्या चाहिए?...",
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
            phoneVerified: "✅ फ़ोन नंबर वेरिफाई हो गया!",
            accountCreated: "🎉 स्वागत है, {name}! आपका अकाउंट बन गया है!",
            movingToCategories: "बहुत बढ़िया! अब कैटेगरी चुनते हैं...",
            movingToProducts: "बहुत खूब! अब {count} कैटेगरी में प्रॉडक्ट्स देखते हैं...",
            productAdded: "✅ \"{name}\" जोड़ दिया गया है!",
            productRemoved: "\"{name}\" हटा दिया गया",
            themeSelected: "परफेक्ट पसंद! {theme} थीम चुनी गई!",
            setupComplete: "🎉 बधाई हो, {name}! अब आपके बिज़नेस को बस एक आख़िरी रूप देना बाकी है!",
            
            // Error messages
            selectAtLeastOneGoal: "कृपया कम से कम एक लक्ष्य चुनें",
            fillAllFields: "कृपया सभी आवश्यक फ़ील्ड भरें",
            selectAtLeastOneCategory: "जारी रखने के लिए कृपया कम से कम एक कैटेगरी चुनें",
            addAtLeastOneProduct: "यह देखने के लिए कि आपका स्टोर कैसा दिखेगा, कम से कम एक प्रॉडक्ट जोड़ें!",
            
            // Info messages
            helpRequested: "🎯 बहुत बढ़िया! हमारी टीम अगले 2 घंटों के अंदर आपसे संपर्क करेगी ताकि आपको मुफ़्त सेटअप में मदद मिल सके!",
            callScheduled: "🎉 शानदार! "{offer}" के लिए आपकी कॉल शेड्यूल हो गई है। हमारी टीम चुने गए समय पर आपसे संपर्क करेगी।",
            feedbackReceived: "🚀 आपकी फीडबैक के लिए धन्यवाद! हम इसका उपयोग अपनी सेवा को बेहतर बनाने के लिए करेंगे।"
        },

        // ========================================
        // PROGRESS BAR LABELS
        // ========================================
        progress: {
            businessGoals: "बिज़नेस के लक्ष्य",
            signUp: "साइन अप",
            successFactors: "सफलता कारक",
            businessLive1: "बिज़नेस लाइव-1",
            businessLive2: "बिज़नेस लाइव-2",
            businessLive3: "बिज़नेस लाइव-3"
        },

        // ========================================
        // COMMON ELEMENTS
        // ========================================
        common: {
  "loading": "लोड हो रहा है...",
  "next": "अगला",
  "back": "वापस",
  "continue": "जारी रखें",
  "submit": "सबमिट करें",
  "cancel": "रद्द करें",
  "close": "बंद करें",
  "save": "सेव करें",
  "edit": "एडिट करें",
  "delete": "डिलीट करें",
  "select": "चुनें",
  "remove": "हटाएं",
  "add": "जोड़ें",
  "search": "सर्च करें",
  "filter": "फ़िल्टर करें",
  "sort": "सॉर्ट करें",
  "price": "कीमत",
  "category": "कैटेगरी",
  "name": "नाम",
  "description": "विवरण",
  "optional": "ऑप्शनल",
  "required": "ज़रूरी"
}
    },

    // ========================================
    // TELUGU TRANSLATIONS - FIXED VERSION
    // ========================================
    te: {
        // ========================================
        // WELCOME SCREEN
        // ========================================
        welcome: {
            tagline: "భారతీయ SMB వ్యాపారాలకు సంపూర్ణ వ్యాపార ప్లాట్‌ఫాం",
            tryFreeButton: "ఉచితంగా try చేయండి"
        },

        // ========================================
        // LANGUAGE SCREEN
        // ========================================
        language: {
            title: "మీ భాషను ఎంచుకోండి",
            subtitle: "अपनी भाषा चुनें | మీ భాషను ఎంచుకోండి | உங்கள் மொழியைத் தேர்ந்தெடுক்கവும்",
            options: {
                en: "ఇంగ్లీష్‌లో కొనసాగించండి",
                hi: "हिन्दी में जारी रखें",
                te: "తెలుగులో కొనసాగించండి",
                ta: "தமிழில் தொடরවும्"
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
    }
};

// ========================================
// TRANSLATION UTILITY FUNCTIONS - ENHANCED FOR DEBUGGING
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
    
    // Debug logging
    console.log(`🔍 Getting translation: ${keyPath} in language: ${currentLanguage}`);
    
    // Navigate through the nested object
    for (const key of keys) {
        if (translation && typeof translation === 'object' && key in translation) {
            translation = translation[key];
        } else {
            // Fallback to English if translation not found
            console.warn(`⚠️ Translation not found: ${keyPath} in ${currentLanguage}, falling back to English`);
            let fallback = TRANSLATIONS.en;
            for (const fallbackKey of keys) {
                if (fallback && typeof fallback === 'object' && fallbackKey in fallback) {
                    fallback = fallback[fallbackKey];
                } else {
                    console.error(`❌ Translation completely missing: ${keyPath}`);
                    return keyPath; // Return the key path if translation completely missing
                }
            }
            translation = fallback;
            break;
        }
    }
    
    // If translation is still an object, return the key path
    if (typeof translation === 'object') {
        console.warn(`⚠️ Translation path incomplete: ${keyPath}`);
        return keyPath;
    }
    
    // Replace variables in the translation string
    let result = translation || keyPath;
    Object.keys(variables).forEach(variable => {
        const regex = new RegExp(`\\{${variable}\\}`, 'g');
        result = result.replace(regex, variables[variable]);
    });
    
    console.log(`✅ Translation result: "${result}"`);
    return result;
}

/**
 * Set the current language - ENHANCED WITH BETTER DEBUGGING
 * @param {string} languageCode - Language code (en, hi, te, ta)
 */
function setLanguage(languageCode) {
    console.log(`🌍 Attempting to set language to: ${languageCode}`);
    console.log(`📋 Available languages:`, Object.keys(TRANSLATIONS));
    
    if (TRANSLATIONS[languageCode]) {
        const previousLanguage = currentLanguage;
        currentLanguage = languageCode;
        
        console.log(`✅ Language changed from ${previousLanguage} to ${languageCode}`);
        
        // Immediate storage save
        try {
            localStorage.setItem('topiko_language', languageCode);
            console.log(`💾 Language saved to localStorage: ${languageCode}`);
            
            // Verify storage
            const stored = localStorage.getItem('topiko_language');
            console.log(`🔍 Verification - stored language: ${stored}`);
        } catch (error) {
            console.error('❌ localStorage save failed:', error);
        }
        
        // Update all translated elements on the page with small delay
        setTimeout(() => {
            updatePageTranslations();
        }, 100);
        
        return true;
    } else {
        console.error(`❌ Language not supported: ${languageCode}`);
        return false;
    }
}

/**
 * Get current language
 * @returns {string} - Current language code
 */
function getCurrentLanguage() {
    console.log(`📍 Current language: ${currentLanguage}`);
    return currentLanguage;
}

/**
 * Update all elements with data-translate attribute - ENHANCED
 */
function updatePageTranslations() {
    console.log(`🔄 Updating page translations for language: ${currentLanguage}`);
    
    const translateElements = document.querySelectorAll('[data-translate]');
    console.log(`🎯 Found ${translateElements.length} elements to translate`);
    
    let successCount = 0;
    let errorCount = 0;
    
    translateElements.forEach((element, index) => {
        try {
            const keyPath = element.getAttribute('data-translate');
            const variables = element.getAttribute('data-translate-vars');
            
            let vars = {};
            if (variables) {
                try {
                    vars = JSON.parse(variables);
                } catch (e) {
                    console.warn(`⚠️ Invalid data-translate-vars JSON: ${variables}`);
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
            
            successCount++;
            
        } catch (error) {
            console.error(`❌ Error translating element ${index}:`, error);
            errorCount++;
        }
    });
    
    console.log(`✅ Translation complete: ${successCount} success, ${errorCount} errors`);
}

/**
 * Initialize translation system - ENHANCED
 * Load saved language preference and apply translations
 */
function initializeTranslations() {
    console.log('🚀 Initializing translation system...');
    
    // Load saved language preference
    try {
        const savedLanguage = localStorage.getItem('topiko_language');
        console.log(`💾 Saved language from localStorage: ${savedLanguage}`);
        
        if (savedLanguage && TRANSLATIONS[savedLanguage]) {
            console.log(`✅ Using saved language: ${savedLanguage}`);
            currentLanguage = savedLanguage;
        } else {
            console.log(`⚠️ No valid saved language, using default: ${currentLanguage}`);
        }
    } catch (error) {
        console.error('❌ localStorage read failed:', error);
    }
    
    // Apply translations to page
    setTimeout(() => {
        updatePageTranslations();
    }, 200);
    
    console.log(`✅ Translation system initialized with language: ${currentLanguage}`);
}

// ========================================
// ENHANCED LANGUAGE SELECTION FUNCTION
// ========================================

/**
 * Enhanced language selection function for existing system - FIXED
 */
function selectLanguageWithTranslation(lang, element) {
    console.log(`🎯 Language selection started: ${lang}`);
    
    // Force set the translation language FIRST
    const success = setLanguage(lang);
    if (!success) {
        console.error(`❌ Failed to set language: ${lang}`);
        return;
    }
    
    // Update global app state (existing functionality)
    if (window.topikoApp) {
        window.topikoApp.selectedLanguage = lang;
        console.log(`📱 Updated app state language: ${lang}`);
    }
    
    // Update UI selection state (existing functionality)
    document.querySelectorAll('.language-option').forEach(option => {
        option.classList.remove('selected');
    });
    if (element) {
        element.classList.add('selected');
        console.log(`🎨 Updated UI selection state`);
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
    
    // Continue with existing flow with longer delay to ensure translations are applied
    setTimeout(() => {
        console.log(`🚀 Proceeding to goals screen with language: ${getCurrentLanguage()}`);
        if (window.TopikoUtils && window.TopikoUtils.showScreen) {
            window.TopikoUtils.showScreen('goals');
        }
    }, 2000); // Increased delay
}

// ========================================
// EXPORT FOR GLOBAL ACCESS - ENHANCED
// ========================================

if (typeof window !== 'undefined') {
    window.TopikoTranslations = {
        TRANSLATIONS,
        getTranslation,
        setLanguage,
        getCurrentLanguage, 
        updatePageTranslations,
        initializeTranslations,
        selectLanguageWithTranslation,
        // Debug functions
        debugCurrentLanguage: () => console.log(`Debug - Current language: ${currentLanguage}`),
        debugStoredLanguage: () => console.log(`Debug - Stored language: ${localStorage.getItem('topiko_language')}`),
        debugAvailableLanguages: () => console.log(`Debug - Available languages:`, Object.keys(TRANSLATIONS)),
        forceLanguage: (lang) => {
            console.log(`🔧 Force setting language to: ${lang}`);
            setLanguage(lang);
            updatePageTranslations();
        }
    };
    
    // Auto-initialize on DOM ready with enhanced timing
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            setTimeout(initializeTranslations, 300);
        });
    } else {
        setTimeout(initializeTranslations, 300);
    }
}

console.log('🌍 Topiko Translation System Loaded - FIXED Hindi & Telugu Complete!');
console.log('📊 Translation Stats:');
console.log('- English: ✅ Complete');
console.log('- Hindi (हिन्दी): ✅ Complete'); 
console.log('- Telugu (తెలుగు): ✅ Complete');
console.log('- Tamil (தமிழ்): ⏳ Pending');
console.log('🔧 DEBUG: Enhanced logging and storage management added');
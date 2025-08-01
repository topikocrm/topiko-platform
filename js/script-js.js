/* ========================================
   TOPIKO LEAD FORM - MAIN APPLICATION LOGIC - WITH NAVIGATION TRACKING (FIXED VERSION)
   ======================================== */

// ========================================
// GLOBAL VARIABLES FOR COMPLETION SCREEN
// ========================================

let selectedOffer = null;

// ========================================
// CONFIG-SAFE HELPER FUNCTIONS
// ========================================

// FIXED: Safe goal names with fallback
function getGoalNamesSafe() {
    // Fallback goal names if config isn't loaded
    const fallbackGoalNames = {
        'ecommerce': 'Sell Online (E-commerce)',
        'customers': 'Reach More Customers',
        'manage': 'Manage Customers', 
        'search': 'Appear in Search Results',
        'brand': 'Establish my Brand'
    };
    
    // Try to get from config, fallback if not available
    if (window.TopikoConfig && window.TopikoConfig.GOAL_NAMES) {
        return window.TopikoConfig.GOAL_NAMES;
    }
    
    console.warn('⚠️ TopikoConfig.GOAL_NAMES not available, using fallback');
    return fallbackGoalNames;
}

// FIXED: Safe theme names with fallback
function getThemeNamesSafe() {
    const fallbackThemeNames = {
        'modern': 'Modern & Minimalist',
        'vibrant': 'Colorful & Vibrant',
        'professional': 'Professional & Corporate',
        'traditional': 'Traditional & Classic',
        'creative': 'Creative & Artistic',
        'luxury': 'Elegant & Luxury'
    };
    
    if (window.TopikoConfig && window.TopikoConfig.THEME_CONFIG) {
        const themeConfig = window.TopikoConfig.THEME_CONFIG;
        const themeNames = {};
        Object.keys(themeConfig).forEach(key => {
            themeNames[key] = themeConfig[key].name || fallbackThemeNames[key] || key;
        });
        return themeNames;
    }
    
    console.warn('⚠️ TopikoConfig.THEME_CONFIG not available, using fallback');
    return fallbackThemeNames;
}

// FIXED: Enhanced config waiting function
function waitForConfigThenExecute(callback, maxAttempts = 10, delay = 500) {
    let attempts = 0;
    
    const checkConfig = () => {
        attempts++;
        
        if (window.TopikoConfig && window.TopikoConfig.GOAL_NAMES) {
            console.log('✅ Config loaded, executing callback');
            callback();
        } else if (attempts < maxAttempts) {
            console.log(`⏳ Waiting for config... (${attempts}/${maxAttempts})`);
            setTimeout(checkConfig, delay);
        } else {
            console.warn('⚠️ Config not loaded after max attempts, executing with fallbacks');
            callback();
        }
    };
    
    checkConfig();
}

// ENHANCED: Better config initialization check
function ensureConfigLoaded() {
    if (!window.TopikoConfig) {
        console.warn('⚠️ TopikoConfig not loaded, attempting to initialize...');
        
        // Try to load from script if available
        if (typeof initializeTopikoConfig === 'function') {
            try {
                initializeTopikoConfig();
            } catch (error) {
                console.error('❌ Failed to initialize config:', error);
            }
        }
        
        return false;
    }
    
    return true;
}

// ========================================
// APPLICATION INITIALIZATION WITH NAVIGATION TRACKING (FIXED)
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    window.TopikoUtils.addDebugLog('📱 DOM loaded - starting enhanced app with navigation tracking');
    initializeAppSafely();
    
    // Auto-save session data every 30 seconds
    setInterval(() => {
        if (window.TopikoUtils && window.TopikoUtils.saveSessionData) {
            window.TopikoUtils.saveSessionData();
        }
    }, 30000);
    
    // Enhanced error handling for uncaught errors
    window.addEventListener('error', function(event) {
        console.error('🚨 Uncaught error:', event.error);
        
        if (window.TopikoUtils && window.TopikoUtils.addDebugLog) {
            window.TopikoUtils.addDebugLog(`❌ Uncaught error: ${event.error?.message || 'Unknown error'}`, 'error');
        }
    });
    
    // Enhanced error handling for unhandled promise rejections
    window.addEventListener('unhandledrejection', function(event) {
        console.error('🚨 Unhandled promise rejection:', event.reason);
        
        if (window.TopikoUtils && window.TopikoUtils.addDebugLog) {
            window.TopikoUtils.addDebugLog(`❌ Promise rejection: ${event.reason?.message || 'Unknown rejection'}`, 'error');
        }
    });
});

// ENHANCED: Safe app initialization function
function initializeAppSafely() {
    try {
        console.log('🚀 Starting safe app initialization...');
        
        // Step 1: Initialize basic TopikoApp
        if (window.TopikoUtils && window.TopikoUtils.initializeTopikoApp) {
            window.TopikoUtils.initializeTopikoApp();
            console.log('✅ TopikoApp initialized');
        } else {
            console.warn('⚠️ TopikoUtils not available, creating minimal TopikoApp');
            window.topikoApp = {
                currentStep: 'welcome',
                currentUserId: null,
                sessionStartTime: Date.now(),
                leadScore: 0,
                pageViews: 1,
                selectedLanguage: 'en',
                userName: '',
                businessName: '',
                selectedGoals: [],
                selectedCategories: [],
                selectedSubcategories: [],
                selectedProductIds: [],
                userProducts: [],
                selectedTheme: '',
                qualifyingAnswers: {
                    online_presence: '',
                    budget: '',
                    decision_maker: '',
                    timeline: ''
                },
                sessionId: 'sess_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9),
                currentPage: 'welcome',
                pageStartTime: Date.now(),
                pageSequenceNumber: 1,
                navigationHistory: [],
                currentPageInteractions: [],
                productsLoaded: false
            };
        }
        
        // Step 2: Check config availability
        const configAvailable = window.TopikoConfig && window.TopikoConfig.GOAL_NAMES;
        if (!configAvailable) {
            console.warn('⚠️ TopikoConfig not fully loaded, functions will use fallbacks');
        } else {
            console.log('✅ TopikoConfig loaded successfully');
        }
        
        // Step 3: Initialize UI components
        if (window.TopikoUtils) {
            window.TopikoUtils.updateProgressBar(window.topikoApp.currentStep);
            window.TopikoUtils.updateBackButton();
            console.log('✅ UI components initialized');
        }
        
        // Step 4: Initialize navigation tracking with error handling
        setTimeout(() => {
            try {
                initializeNavigationTrackingSafe();
            } catch (error) {
                console.error('❌ Navigation tracking failed:', error);
            }
        }, 1000);
        
        // Step 5: Start FOMO system after delay
        setTimeout(() => {
            try {
                if (window.TopikoUtils && window.TopikoUtils.startFomoSystem) {
                    window.TopikoUtils.startFomoSystem();
                    console.log('✅ FOMO system started');
                }
            } catch (error) {
                console.error('❌ FOMO system failed:', error);
            }
        }, 3000);
        
        console.log('✅ Safe app initialization completed');
        
    } catch (error) {
        console.error('❌ App initialization failed:', error);
        
        // Fallback: at least create basic app state
        if (!window.topikoApp) {
            window.topikoApp = {
                currentStep: 'welcome',
                selectedGoals: [],
                sessionStartTime: Date.now()
            };
        }
    }
}

// ENHANCED: Safe navigation tracking initialization
function initializeNavigationTrackingSafe() {
    try {
        console.log('📊 Initializing navigation tracking...');
        
        // Ensure app state exists
        if (!window.topikoApp) {
            console.warn('⚠️ TopikoApp not available for navigation tracking');
            return;
        }
        
        // Set initial page state
        window.topikoApp.currentPage = window.topikoApp.currentPage || 'welcome';
        window.topikoApp.pageStartTime = window.topikoApp.pageStartTime || Date.now();
        window.topikoApp.sessionId = window.topikoApp.sessionId || ('sess_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9));
        
        // Track initial page load with delay to ensure everything is ready
        setTimeout(async () => {
            try {
                if (window.TopikoUtils && window.TopikoUtils.trackPageNavigationSafe) {
                    await window.TopikoUtils.trackPageNavigationSafe('welcome', 'initial_load', {
                        referrer: document.referrer,
                        userAgent: navigator.userAgent.substring(0, 100),
                        timestamp: new Date().toISOString()
                    });
                    console.log('✅ Initial page tracking completed');
                }
            } catch (error) {
                console.error('❌ Initial page tracking failed:', error);
            }
        }, 2000);
        
        // Sync any stored navigation data
        setTimeout(() => {
            try {
                if (window.TopikoUtils && window.TopikoUtils.syncLocalNavigationData) {
                    window.TopikoUtils.syncLocalNavigationData();
                }
            } catch (error) {
                console.error('❌ Navigation sync failed:', error);
            }
        }, 3000);
        
        // Set up interaction tracking with error handling
        ['click', 'focus', 'blur', 'change', 'input'].forEach(eventType => {
            document.addEventListener(eventType, function(event) {
                try {
                    if (window.TopikoUtils && window.TopikoUtils.trackPageInteraction) {
                        window.TopikoUtils.trackPageInteraction(eventType, {
                            tag: event.target.tagName,
                            id: event.target.id,
                            className: event.target.className ? event.target.className.substring(0, 50) : '',
                            type: event.target.type
                        });
                    }
                } catch (error) {
                    // Silent fail for interaction tracking to avoid spam
                }
            }, true);
        });
        
        // Set up periodic queue flushing
        setInterval(() => {
            try {
                if (window.TopikoUtils && window.TopikoUtils.navigationQueue && window.TopikoUtils.navigationQueue.length > 0) {
                    window.TopikoUtils.flushNavigationQueueSafe();
                }
            } catch (error) {
                console.error('❌ Queue flush failed:', error);
            }
        }, 30000);
        
        // Track page unload
        window.addEventListener('beforeunload', async function() {
            try {
                if (window.topikoApp && window.topikoApp.currentPage && window.TopikoUtils) {
                    const pageData = window.TopikoUtils.getPageSpecificData ? 
                        window.TopikoUtils.getPageSpecificData(window.topikoApp.currentPage) : {};
                    
                    if (window.TopikoUtils.trackPageNavigationSafe) {
                        await window.TopikoUtils.trackPageNavigationSafe(window.topikoApp.currentPage, 'page_exit', pageData);
                    }
                    
                    // Flush any pending navigation events
                    if (window.TopikoUtils.flushNavigationQueueSafe) {
                        window.TopikoUtils.flushNavigationQueueSafe();
                    }
                }
            } catch (error) {
                console.error('❌ Page unload tracking failed:', error);
            }
        });
        
        console.log('✅ Navigation tracking initialized successfully');
        
    } catch (error) {
        console.error('❌ Navigation tracking initialization failed:', error);
    }
}

// Save data on page unload
window.addEventListener('beforeunload', function(e) {
    if (window.TopikoUtils && window.TopikoUtils.saveSessionData) {
        window.TopikoUtils.saveSessionData();
    }
    if (window.TopikoUtils && window.TopikoUtils.stopMotivationalMessages) {
        window.TopikoUtils.stopMotivationalMessages();
    }
});

// ========================================
// LEAD FLOW FUNCTIONS - WITH NAVIGATION TRACKING (FIXED)
// ========================================

function startLeadFlow(navigationType = 'forward') {
    if (window.TopikoUtils) {
        window.TopikoUtils.addDebugLog('🚀 Lead flow started');
        window.TopikoUtils.showScreen('language', navigationType);
    }
}

function selectLanguage(lang, element, navigationType = 'forward') {
    window.topikoApp = window.topikoApp || {};
    window.topikoApp.selectedLanguage = lang;
    
    document.querySelectorAll('.language-option').forEach(option => {
        option.classList.remove('selected');
    });
    element.classList.add('selected');
    
    const languageNames = window.TopikoConfig?.LANGUAGE_CONFIG || { 'en': 'English', 'hi': 'हिन्दी' };
    if (window.TopikoUtils) {
        window.TopikoUtils.showNotification(`Language: ${languageNames[lang] || lang}`, 'success');
        window.TopikoUtils.calculateLeadScore();
    }
    
    setTimeout(() => {
        if (window.TopikoUtils) {
            window.TopikoUtils.showScreen('goals', navigationType);
        }
    }, 1500);
}

function selectLanguageWithTranslation(lang, element, navigationType = 'forward') {
    selectLanguage(lang, element, navigationType);
}

function updateGoalsTracking() {
    const checkedGoals = document.querySelectorAll('.goal-checkbox:checked');
    window.topikoApp = window.topikoApp || {};
    window.topikoApp.selectedGoals = Array.from(checkedGoals).map(checkbox => checkbox.value);
    
    if (window.TopikoUtils) {
        window.TopikoUtils.addDebugLog(`Goals: ${window.topikoApp.selectedGoals.length} selected`);
        window.TopikoUtils.calculateLeadScore();
    }
}

// FIXED: Enhanced showGoalsTransitionModal with config waiting
function showGoalsTransitionModal(navigationType = 'forward') {
    try {
        if (!window.topikoApp || !window.topikoApp.selectedGoals || window.topikoApp.selectedGoals.length === 0) {
            if (window.TopikoUtils) {
                window.TopikoUtils.showNotification('Please select at least one goal', 'error');
            }
            return;
        }
        
        // Update goals modal with selected goals
        updateGoalsModalSafe(window.topikoApp.selectedGoals);
        
        if (window.TopikoUtils) {
            window.TopikoUtils.showNotification(`Perfect! ${window.topikoApp.selectedGoals.length} goal${window.topikoApp.selectedGoals.length > 1 ? 's' : ''} selected!`, 'success');
            window.TopikoUtils.calculateLeadScore();
        }
        
        // Wait for config then show modal
        waitForConfigThenExecute(() => {
            setTimeout(() => {
                displayGoalsTransitionModalSafe();
            }, 1500);
        });
        
    } catch (error) {
        console.error('❌ Error in showGoalsTransitionModal:', error);
    }
}

function submitGoals(navigationType = 'forward') {
    showGoalsTransitionModal(navigationType);
}

// ========================================
// REGISTRATION FUNCTIONS - WITH NAVIGATION TRACKING (FIXED)
// ========================================

function trackFormProgress() {
    const formFields = ['fullName', 'email', 'phoneNumber', 'businessName', 'address', 'businessType', 'category'];
    let completedFields = 0;
    
    formFields.forEach(fieldId => {
        const field = document.getElementById(fieldId);
        if (field && field.value.trim() !== '') {
            completedFields++;
        }
    });
    
    window.topikoApp = window.topikoApp || {};
    window.topikoApp.formProgress = (completedFields / formFields.length) * 100;
    
    // Store names for personalization
    window.topikoApp.userName = document.getElementById('fullName')?.value || '';
    window.topikoApp.businessName = document.getElementById('businessName')?.value || '';
    
    if (window.TopikoUtils) {
        window.TopikoUtils.addDebugLog(`Form progress: ${Math.round(window.topikoApp.formProgress)}%`);
        window.TopikoUtils.calculateLeadScore();
    }
}

async function submitRegistration(navigationType = 'forward') {
    if (window.TopikoUtils) {
        window.TopikoUtils.addDebugLog('📝 Registration submission');
    }
    
    const name = document.getElementById('fullName').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phoneNumber').value.trim();
    const business = document.getElementById('businessName').value.trim();
    const address = document.getElementById('address').value.trim();
    const type = document.getElementById('businessType').value;
    const category = document.getElementById('category').value;

    if (!name || !email || !phone || !business || !type || !category) {
        if (window.TopikoUtils) {
            window.TopikoUtils.showNotification('Please fill all required fields', 'error');
        }
        return;
    }

    // Store for personalization
    window.topikoApp = window.topikoApp || {};
    window.topikoApp.userName = name;
    window.topikoApp.businessName = business;

    // Show OTP verification modal
    showOtpModal();
}

// ========================================
// OTP VERIFICATION FUNCTIONS (FIXED)
// ========================================

function showOtpModal() {
    if (window.TopikoUtils) {
        window.TopikoUtils.showModal('otpVerificationModal');
    }
    // Auto-fill with default OTP
    setTimeout(() => {
        const otpInputs = document.querySelectorAll('.otp-input');
        const defaultOtp = window.TopikoConfig?.DEFAULTS?.OTP_DEFAULT || '1234';
        otpInputs.forEach((input, index) => {
            input.value = defaultOtp[index];
            input.classList.add('filled');
        });
    }, 500);
}

function handleOtpInput(input, index) {
    if (input.value) {
        input.classList.add('filled');
        const nextInput = input.nextElementSibling;
        if (nextInput) {
            nextInput.focus();
        }
    } else {
        input.classList.remove('filled');
    }
    
    const otpInputs = document.querySelectorAll('.otp-input');
    const otp = Array.from(otpInputs).map(input => input.value).join('');
    const verifyBtn = document.getElementById('verifyOtpBtn');
    
    if (verifyBtn) {
        if (otp.length === 4) {
            verifyBtn.disabled = false;
            verifyBtn.style.opacity = '1';
        } else {
            verifyBtn.disabled = true;
            verifyBtn.style.opacity = '0.5';
        }
    }
}

async function verifyOtp() {
    const otpInputs = document.querySelectorAll('.otp-input');
    const otp = Array.from(otpInputs).map(input => input.value).join('');
    const defaultOtp = window.TopikoConfig?.DEFAULTS?.OTP_DEFAULT || '1234';
    
    if (otp === defaultOtp) {
        if (window.TopikoUtils) {
            window.TopikoUtils.closeModal('otpVerificationModal');
            window.TopikoUtils.showNotification('✅ Phone verified successfully!', 'success');
        }
        
        // Proceed with actual registration
        await completeRegistration();
    } else {
        if (window.TopikoUtils) {
            window.TopikoUtils.showNotification('Invalid OTP. Please try again.', 'error');
        }
    }
}

async function completeRegistration() {
    const name = document.getElementById('fullName').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phoneNumber').value.trim();
    const business = document.getElementById('businessName').value.trim();
    const address = document.getElementById('address').value.trim();
    const type = document.getElementById('businessType').value;
    const category = document.getElementById('category').value;

    if (window.TopikoUtils) {
        window.TopikoUtils.showNotification('Creating your free account...', 'info');
    }
    
    const userData = {
        name, email, phone,
        business_name: business,
        business_type: type,
        business_category: category,
        address: address || null,
        selected_language: window.topikoApp?.selectedLanguage || 'en',
        selected_goals: window.topikoApp?.selectedGoals || [],
        created_at: new Date().toISOString()
    };

    let userResult = { success: false };
    if (window.TopikoUtils) {
        userResult = await window.TopikoUtils.saveToSupabase(userData, 'users');
    }
    
    if (userResult.success && userResult.data && userResult.data.length > 0) {
        window.topikoApp = window.topikoApp || {};
        window.topikoApp.currentUserId = userResult.data[0].id;
        if (window.TopikoUtils) {
            window.TopikoUtils.addDebugLog(`✅ User created: ${window.topikoApp.currentUserId}`, 'success');
        }
        
        // NEW: Update navigation records with user_id
        await updateNavigationWithUserId(window.topikoApp.currentUserId);
        
        const leadData = {
            user_id: window.topikoApp.currentUserId,
            lead_score: window.topikoApp?.leadScore || 0,
            lead_quality: (window.topikoApp?.leadScore || 0) >= 70 ? 'Hot' : (window.topikoApp?.leadScore || 0) >= 40 ? 'Warm' : 'Cold',
            session_duration_minutes: Math.round((Date.now() - (window.topikoApp?.sessionStartTime || Date.now())) / 60000),
            page_views: window.topikoApp?.pageViews || 1,
            selected_goals: window.topikoApp?.selectedGoals || [],
            selected_categories: window.topikoApp?.selectedCategories || [], 
            selected_subcategories: window.topikoApp?.selectedSubcategories || [], 
            lead_status: 'New',
            timeline: window.topikoApp?.qualifyingAnswers?.timeline || '', 
            budget_range: window.topikoApp?.qualifyingAnswers?.budget || '', 
            decision_maker: window.topikoApp?.qualifyingAnswers?.decision_maker === 'yes', 
            online_presence: window.topikoApp?.qualifyingAnswers?.online_presence || '',
            created_at: new Date().toISOString()
        };
        
        if (window.TopikoUtils) {
            await window.TopikoUtils.saveToSupabase(leadData, 'lead_intelligence');
            window.TopikoUtils.showNotification(`🎉 Welcome ${name}! Account created successfully!`, 'success');
        }
        
        setTimeout(() => {
            displaySetupIntroModalSafe();
        }, 2000);
    } else {
        if (window.TopikoUtils) {
            window.TopikoUtils.showNotification('❌ Registration failed. Please try again.', 'error');
        }
    }
}

// NEW: Link anonymous navigation to registered user
async function updateNavigationWithUserId(userId) {
    try {
        if (!window.supabase) return;
        
        const { error } = await window.supabase
            .from('page_navigation')
            .update({ user_id: userId })
            .eq('session_id', window.topikoApp?.sessionId || '')
            .is('user_id', null);
            
        if (error) {
            if (window.TopikoUtils) {
                window.TopikoUtils.addDebugLog(`❌ Failed to link navigation to user: ${error.message}`, 'error');
            }
        } else {
            if (window.TopikoUtils) {
                window.TopikoUtils.addDebugLog(`✅ Navigation data linked to user: ${userId}`, 'success');
            }
        }
    } catch (error) {
        if (window.TopikoUtils) {
            window.TopikoUtils.addDebugLog(`❌ Error linking navigation: ${error.message}`, 'error');
        }
    }
}

// ========================================
// QUALIFYING QUESTIONS FUNCTIONS (FIXED)
// ========================================

function updateQualifyingData() {
    window.topikoApp = window.topikoApp || {};
    window.topikoApp.qualifyingAnswers = window.topikoApp.qualifyingAnswers || {};
    
    window.topikoApp.qualifyingAnswers.online_presence = document.querySelector('input[name="online_presence"]:checked')?.value || '';
    window.topikoApp.qualifyingAnswers.budget = document.querySelector('input[name="budget"]:checked')?.value || '';
    window.topikoApp.qualifyingAnswers.decision_maker = document.querySelector('input[name="decision_maker"]:checked')?.value || '';  
    window.topikoApp.qualifyingAnswers.timeline = document.querySelector('input[name="timeline"]:checked')?.value || '';
    
    if (window.TopikoUtils) {
        window.TopikoUtils.calculateLeadScore();
    }
    
    const allAnswered = Object.values(window.topikoApp.qualifyingAnswers).every(answer => answer !== '');
    const nextBtn = document.getElementById('qualifyingNextBtn');
    
    if (nextBtn) {
        if (allAnswered) {
            nextBtn.disabled = false;
            nextBtn.style.opacity = '1';
        } else {
            nextBtn.disabled = true;
            nextBtn.style.opacity = '0.5';
        }
    }
}

async function proceedToCategories(navigationType = 'forward') {
    if (!window.topikoApp || !window.topikoApp.qualifyingAnswers) {
        if (window.TopikoUtils) {
            window.TopikoUtils.showNotification('Please answer all questions', 'error');
        }
        return;
    }
    
    if (Object.values(window.topikoApp.qualifyingAnswers).some(answer => answer === '')) {
        if (window.TopikoUtils) {
            window.TopikoUtils.showNotification('Please answer all questions', 'error');
        }
        return;
    }
    
    if (window.topikoApp.currentUserId && window.supabase) {
        const qualifyingData = {
            timeline: window.topikoApp.qualifyingAnswers.timeline,
            budget_range: window.topikoApp.qualifyingAnswers.budget,
            decision_maker: window.topikoApp.qualifyingAnswers.decision_maker === 'yes',
            online_presence: window.topikoApp.qualifyingAnswers.online_presence,
            updated_at: new Date().toISOString()
        };
        
        try {
            const { error } = await window.supabase
                .from('users')
                .update(qualifyingData)
                .eq('id', window.topikoApp.currentUserId);
                
            if (error) {
                if (window.TopikoUtils) {
                    window.TopikoUtils.addDebugLog(`❌ Failed to update qualifying data: ${error.message}`, 'error');
                }
            } else {
                if (window.TopikoUtils) {
                    window.TopikoUtils.addDebugLog('✅ Qualifying answers saved to user record', 'success');
                }
            }
        } catch (error) {
            console.error('❌ Error updating qualifying data:', error);
        }
    }
    
    if (window.TopikoUtils) {
        window.TopikoUtils.addDebugLog(`Qualifying complete: ${JSON.stringify(window.topikoApp.qualifyingAnswers)}`);
        window.TopikoUtils.showNotification('Perfect! Moving to categories...', 'success');
        setTimeout(() => window.TopikoUtils.showScreen('categories', navigationType), 1000);
    }
}

// ========================================
// CATEGORIES FUNCTIONS (FIXED)
// ========================================

function loadCategories() {
    const businessCategory = document.getElementById('category')?.value;
    const categoriesContainer = document.getElementById('categoriesContainer');
    
    if (!categoriesContainer) return;
    
    if (!businessCategory || !window.TopikoConfig?.BUSINESS_CATEGORIES?.[businessCategory]) {
        categoriesContainer.innerHTML = '<p style="text-align: center; color: #64748b;">Loading categories...</p>';
        
        setTimeout(() => {
            const retryCategory = document.getElementById('category')?.value;
            if (retryCategory && window.TopikoConfig?.BUSINESS_CATEGORIES?.[retryCategory]) {
                loadCategoriesContent(retryCategory, categoriesContainer);
            } else {
                categoriesContainer.innerHTML = '<p style="text-align: center; color: #64748b;">Please complete registration first.</p>';
            }
        }, 100);
        return;
    }
    
    loadCategoriesContent(businessCategory, categoriesContainer);
}

function loadCategoriesContent(businessCategory, categoriesContainer) {
    const categoryData = window.TopikoConfig?.BUSINESS_CATEGORIES?.[businessCategory];
    
    if (!categoryData) {
        categoriesContainer.innerHTML = '<p style="text-align: center; color: #64748b;">Category data not available.</p>';
        return;
    }
    
    let categoriesHTML = `
        <div class="category-section">
            <h3><span style="margin-right: 0.5rem;">${categoryData.icon}</span>${categoryData.name} Categories</h3>
            <p style="color: #553c9a; margin-bottom: 1.5rem; font-size: 0.9rem;">Select categories that apply to your business (this helps us create your perfect online store):</p>
            
            <div class="category-grid">
    `;
    
    Object.keys(categoryData.categories).forEach(categoryKey => {
        const category = categoryData.categories[categoryKey];
        const isSelected = window.topikoApp?.selectedCategories?.includes(categoryKey) || false;
        
        categoriesHTML += `
            <div class="category-item">
                <input type="checkbox" id="cat-${categoryKey}" value="${categoryKey}" class="category-checkbox" 
                       ${isSelected ? 'checked' : ''} onchange="toggleCategorySelection('${categoryKey}')">
                <label for="cat-${categoryKey}" class="category-label">
                    <span class="category-icon">${category.icon}</span>
                    ${category.name}
                    <span class="category-checkmark">✓</span>
                </label>
                
                <div class="subcategory-grid">
        `;
        
        category.subcategories.forEach(subcategoryKey => {
            const subcategoryName = window.TopikoConfig?.SUBCATEGORY_NAMES?.[subcategoryKey] || subcategoryKey.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase());
            const isSubSelected = window.topikoApp?.selectedSubcategories?.includes(subcategoryKey) || false;
            
            categoriesHTML += `
                <div class="subcategory-item">
                    <input type="checkbox" id="sub-${subcategoryKey}" value="${subcategoryKey}" class="subcategory-checkbox"
                           ${isSubSelected ? 'checked' : ''} onchange="toggleSubcategorySelection('${subcategoryKey}')">
                    <label for="sub-${subcategoryKey}" class="subcategory-label">
                        ${subcategoryName}
                        <span class="subcategory-checkmark">✓</span>
                    </label>
                </div>
            `;
        });
        
        categoriesHTML += `
                </div>
            </div>
        `;
    });
    
    categoriesHTML += `
            </div>
        </div>
    `;
    
    categoriesContainer.innerHTML = categoriesHTML;
    updateProductCategoriesDropdown();
    updateSelectionSummary();
}

function toggleCategorySelection(categoryKey) {
    window.topikoApp = window.topikoApp || {};
    window.topikoApp.selectedCategories = window.topikoApp.selectedCategories || [];
    
    if (window.topikoApp.selectedCategories.includes(categoryKey)) {
        window.topikoApp.selectedCategories = window.topikoApp.selectedCategories.filter(cat => cat !== categoryKey);
    } else {
        window.topikoApp.selectedCategories.push(categoryKey);
    }
    
    updateSelectionSummary();
    updateProductCategoriesDropdown();
    if (window.TopikoUtils) {
        window.TopikoUtils.calculateLeadScore();
    }
    updateNextButton();
}

function toggleSubcategorySelection(subcategoryKey) {
    window.topikoApp = window.topikoApp || {};
    window.topikoApp.selectedSubcategories = window.topikoApp.selectedSubcategories || [];
    
    if (window.topikoApp.selectedSubcategories.includes(subcategoryKey)) {
        window.topikoApp.selectedSubcategories = window.topikoApp.selectedSubcategories.filter(sub => sub !== subcategoryKey);
    } else {
        window.topikoApp.selectedSubcategories.push(subcategoryKey);
    }
    
    updateSelectionSummary();
    if (window.TopikoUtils) {
        window.TopikoUtils.calculateLeadScore();
    }
}

function updateSelectionSummary() {
    const summaryEl = document.getElementById('selectionSummary');
    const categoriesCountEl = document.getElementById('categoriesCount');
    const subcategoriesCountEl = document.getElementById('subcategoriesCount');
    
    const categoriesCount = window.topikoApp?.selectedCategories?.length || 0;
    const subcategoriesCount = window.topikoApp?.selectedSubcategories?.length || 0;
    
    if (categoriesCount > 0 || subcategoriesCount > 0) {
        if (summaryEl) summaryEl.style.display = 'block';
        if (categoriesCountEl) categoriesCountEl.textContent = categoriesCount;
        if (subcategoriesCountEl) subcategoriesCountEl.textContent = subcategoriesCount;
    } else {
        if (summaryEl) summaryEl.style.display = 'none';
    }
}

function updateNextButton() {
    const nextBtn = document.getElementById('categoryNextBtn');
    const categoriesCount = window.topikoApp?.selectedCategories?.length || 0;
    
    if (nextBtn) {
        if (categoriesCount > 0) {
            nextBtn.disabled = false;
            nextBtn.style.opacity = '1';
        } else {
            nextBtn.disabled = true;
            nextBtn.style.opacity = '0.5';
        }
    }
}

function updateProductCategoriesDropdown() {
    const productCategorySelect = document.getElementById('productCategory');
    const productSubcategorySelect = document.getElementById('productSubcategory');
    
    if (!productCategorySelect || !productSubcategorySelect) return;
    
    productCategorySelect.innerHTML = '<option value="">Select from your chosen categories</option>';
    productSubcategorySelect.innerHTML = '<option value="">Select a subcategory</option>';
    
    const businessCategory = document.getElementById('category')?.value;
    const selectedCategories = window.topikoApp?.selectedCategories || [];
    
    if (!businessCategory || !window.TopikoConfig?.BUSINESS_CATEGORIES?.[businessCategory]) return;
    
    const categoryData = window.TopikoConfig.BUSINESS_CATEGORIES[businessCategory];
    
    selectedCategories.forEach(categoryKey => {
        const category = categoryData.categories[categoryKey];
        if (category) {
            productCategorySelect.innerHTML += `<option value="${categoryKey}">${category.name}</option>`;
        }
    });
    
    productCategorySelect.onchange = function() {
        const selectedCat = this.value;
        productSubcategorySelect.innerHTML = '<option value="">Select a subcategory</option>';
        
        if (selectedCat && categoryData.categories[selectedCat]) {
            const category = categoryData.categories[selectedCat];
            const selectedSubcategories = window.topikoApp?.selectedSubcategories || [];
            
            category.subcategories.forEach(subcategoryKey => {
                if (selectedSubcategories.includes(subcategoryKey)) {
                    const subcategoryName = window.TopikoConfig?.SUBCATEGORY_NAMES?.[subcategoryKey] || 
                        subcategoryKey.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase());
                    productSubcategorySelect.innerHTML += `<option value="${subcategoryKey}">${subcategoryName}</option>`;
                }
            });
        }
    };
}

async function updateUserCategories() {
    if (!window.topikoApp?.currentUserId || !window.supabase) return;
    
    const categoriesData = {
        selected_categories: window.topikoApp.selectedCategories || [],
        selected_subcategories: window.topikoApp.selectedSubcategories || [],
        updated_at: new Date().toISOString()
    };
    
    try {
        const { error } = await window.supabase
            .from('users')
            .update(categoriesData)
            .eq('id', window.topikoApp.currentUserId);
            
        if (error) {
            if (window.TopikoUtils) {
                window.TopikoUtils.addDebugLog(`❌ Failed to update categories: ${error.message}`, 'error');
            }
        } else {
            if (window.TopikoUtils) {
                window.TopikoUtils.addDebugLog('✅ Categories saved to user record', 'success');
            }
        }
    } catch (error) {
        console.error('❌ Error updating categories:', error);
    }
}

async function proceedToProducts(navigationType = 'forward') {
    const categoriesCount = window.topikoApp?.selectedCategories?.length || 0;
    
    if (categoriesCount === 0) {
        if (window.TopikoUtils) {
            window.TopikoUtils.showNotification('Please select at least one category to continue', 'error');
        }
        return;
    }
    
    await updateUserCategories();
    
    if (window.TopikoUtils) {
        window.TopikoUtils.showNotification(`Perfect! Moving to products with ${categoriesCount} categories selected...`, 'success');
        setTimeout(() => window.TopikoUtils.showScreen('products', navigationType), 1000);
    }
}

// ========================================
// PRODUCT SELECTION SYSTEM (FIXED)
// ========================================

function switchProductMode(mode) {
    if (!window.topikoApp) {
        console.warn('⚠️ Emergency TopikoApp initialization in switchProductMode');
        if (window.TopikoUtils && window.TopikoUtils.initializeTopikoApp) {
            window.TopikoUtils.initializeTopikoApp();
        } else {
            window.topikoApp = {
                productsLoaded: false,
                selectedProductIds: [],
                userProducts: []
            };
        }
    }
    
    if (!window.topikoApp.productsLoaded) window.topikoApp.productsLoaded = false;
    if (!window.topikoApp.selectedProductIds) window.topikoApp.selectedProductIds = [];
    if (!window.topikoApp.userProducts) window.topikoApp.userProducts = [];
    
    const selectMode = document.getElementById('selectMode');
    const customMode = document.getElementById('customMode');
    const selectorSection = document.getElementById('productSelectorSection');
    const customForm = document.getElementById('customProductForm');
    
    if (selectMode) selectMode.classList.toggle('active', mode === 'select');
    if (customMode) customMode.classList.toggle('active', mode === 'custom');
    
    if (mode === 'select') {
        if (selectorSection) selectorSection.style.display = 'block';
        if (customForm) customForm.style.display = 'none';
        
        if (!window.topikoApp.productsLoaded) {
            loadProductSelector();
        }
    } else {
        if (selectorSection) selectorSection.style.display = 'none';
        if (customForm) customForm.style.display = 'block';
    }
    
    if (window.TopikoUtils && window.TopikoUtils.addDebugLog) {
        window.TopikoUtils.addDebugLog(`📱 Product mode switched to: ${mode}`);
    }
}

function loadProductSelector() {
    if (window.TopikoUtils) {
        window.TopikoUtils.addDebugLog('🛍️ Loading products for selected categories...');
    }
    
    const selectedCategories = window.topikoApp?.selectedCategories || [];
    
    if (selectedCategories.length === 0) {
        if (window.TopikoUtils) {
            window.TopikoUtils.showNotification('Please go back and select categories first', 'warning');
        }
        return;
    }
    
    setupProductControls();
    setupQuickFilters();
    loadFilteredProductsGrid();
    
    window.topikoApp.productsLoaded = true;
    if (window.TopikoUtils) {
        window.TopikoUtils.addDebugLog(`✅ Product selector loaded for ${selectedCategories.length} categories`);
    }
}

function loadFilteredProductsGrid() {
    const businessCategory = document.getElementById('category')?.value;
    
    if (!businessCategory || !window.TopikoConfig?.BUSINESS_CATEGORIES?.[businessCategory]) {
        if (window.TopikoUtils) {
            window.TopikoUtils.showNotification('Business category not found. Please complete registration.', 'error');
        }
        return;
    }
    
    const filteredProducts = getProductsForSelectedCategories();
    
    const productsCount = document.getElementById('productsCount');
    if (productsCount) {
        productsCount.textContent = filteredProducts.length;
    }
    
    displayProductsGrid(filteredProducts);
    updateQuickFiltersForSelection();
    
    if (window.TopikoUtils) {
        window.TopikoUtils.addDebugLog(`🎯 Loaded ${filteredProducts.length} products for selected categories`);
    }
}

function getProductsForSelectedCategories() {
    const businessCategory = document.getElementById('category')?.value;
    const selectedSubcategories = window.topikoApp?.selectedSubcategories || [];
    
    if (!businessCategory || !window.TopikoConfig?.INDIAN_PRODUCTS_DB?.[businessCategory]) {
        return [];
    }
    
    let relevantProducts = [];
    const categoryData = window.TopikoConfig.INDIAN_PRODUCTS_DB[businessCategory];
    
    if (selectedSubcategories.length > 0) {
        Object.keys(categoryData).forEach(categoryKey => {
            const products = categoryData[categoryKey];
            if (Array.isArray(products)) {
                const filteredProducts = products.filter(product => 
                    selectedSubcategories.includes(product.subcategory)
                );
                relevantProducts = [...relevantProducts, ...filteredProducts];
            }
        });
    } else {
        const selectedCategories = window.topikoApp?.selectedCategories || [];
        selectedCategories.forEach(selectedCat => {
            if (categoryData[selectedCat]) {
                relevantProducts = [...relevantProducts, ...categoryData[selectedCat]];
            }
        });
    }
    
    return relevantProducts;
}

function setupProductControls() {
    const searchInput = document.getElementById('productSearch');
    const categoryFilter = document.getElementById('categoryFilter');
    const sortSelect = document.getElementById('sortBy');
    const minPriceInput = document.getElementById('minPrice');
    const maxPriceInput = document.getElementById('maxPrice');
    
    if (searchInput) {
        let searchTimeout;
        searchInput.addEventListener('input', function() {
            clearTimeout(searchTimeout);
            searchTimeout = setTimeout(() => {
                filterAndDisplayProducts();
            }, 300);
        });
    }
    
    if (categoryFilter) {
        categoryFilter.addEventListener('change', filterAndDisplayProducts);
    }
    
    if (sortSelect) {
        sortSelect.addEventListener('change', filterAndDisplayProducts);
    }
    
    if (minPriceInput && maxPriceInput) {
        minPriceInput.addEventListener('change', function() {
            updatePriceRangeDisplay();
            filterAndDisplayProducts();
        });
        
        maxPriceInput.addEventListener('change', function() {
            updatePriceRangeDisplay();
            filterAndDisplayProducts();
        });
    }
}

function setupQuickFilters() {
    const quickFilters = document.querySelectorAll('.quick-filter');
    
    quickFilters.forEach(filter => {
        filter.addEventListener('click', function() {
            quickFilters.forEach(f => f.classList.remove('active'));
            this.classList.add('active');
            
            const category = this.getAttribute('data-category');
            const categoryFilter = document.getElementById('categoryFilter');
            if (categoryFilter) {
                categoryFilter.value = category;
            }
            
            filterAndDisplayProducts();
            if (window.TopikoUtils) {
                window.TopikoUtils.addDebugLog(`🎯 Quick filter applied: ${category}`);
            }
        });
    });
}

function updatePriceRangeDisplay() {
    const minPrice = document.getElementById('minPrice')?.value || 0;
    const maxPrice = document.getElementById('maxPrice')?.value || 5000;
    const display = document.getElementById('priceRangeDisplay');
    
    if (display) {
        display.textContent = `${minPrice} - ₹${maxPrice}`;
    }
}

function updateQuickFiltersForSelection() {
    let quickFiltersContainer = document.querySelector('.quick-filters-container');
    if (!quickFiltersContainer) {
        quickFiltersContainer = document.querySelector('.quick-filters');
    }
    
    const selectedCategories = window.topikoApp?.selectedCategories || [];
    
    if (!quickFiltersContainer || !selectedCategories.length) {
        if (window.TopikoUtils) {
            window.TopikoUtils.addDebugLog('⚠️ Quick filters container not found or no categories selected');
        }
        return;
    }
    
    const businessCategory = document.getElementById('category')?.value;
    if (!businessCategory || !window.TopikoConfig?.BUSINESS_CATEGORIES?.[businessCategory]) {
        return;
    }
    
    const categoryData = window.TopikoConfig.BUSINESS_CATEGORIES[businessCategory];
    
    let filtersHTML = `
        <button class="quick-filter active" data-category="all" onclick="applyQuickFilter('all', this)">
            All Products
        </button>
    `;
    
    selectedCategories.forEach(categoryKey => {
        const category = categoryData.categories[categoryKey];
        if (category) {
            filtersHTML += `
                <button class="quick-filter" data-category="${categoryKey}" onclick="applyQuickFilter('${categoryKey}', this)">
                    ${category.icon} ${category.name}
                </button>
            `;
        }
    });
    
    quickFiltersContainer.innerHTML = filtersHTML;
    if (window.TopikoUtils) {
        window.TopikoUtils.addDebugLog(`🎛️ Quick filters updated for ${selectedCategories.length} categories`);
    }
}

function applyQuickFilter(category, element) {
    document.querySelectorAll('.quick-filter').forEach(filter => {
        filter.classList.remove('active');
    });
    element.classList.add('active');
    
    const categoryFilter = document.getElementById('categoryFilter');
    if (categoryFilter) {
        categoryFilter.value = category;
    }
    
    filterAndDisplayProducts();
    if (window.TopikoUtils) {
        window.TopikoUtils.addDebugLog(`🎯 Quick filter applied: ${category}`);
    }
}

function filterAndDisplayProducts() {
    const searchTerm = document.getElementById('productSearch')?.value || '';
    const categoryFilter = document.getElementById('categoryFilter')?.value || 'all';
    const sortBy = document.getElementById('sortBy')?.value || 'name';
    const minPrice = parseInt(document.getElementById('minPrice')?.value || 0);
    const maxPrice = parseInt(document.getElementById('maxPrice')?.value || 5000);
    
    const priceRange = { min: minPrice, max: maxPrice };
    
    let baseProducts = getProductsForSelectedCategories();
    
    let filteredProducts = baseProducts.filter(product => {
        if (searchTerm && !product.name.toLowerCase().includes(searchTerm.toLowerCase()) && 
            !product.description.toLowerCase().includes(searchTerm.toLowerCase())) {
            return false;
        }
        
        if (categoryFilter !== 'all' && product.category !== categoryFilter) {
            return false;
        }
        
        if (product.suggestedPrice < priceRange.min || product.suggestedPrice > priceRange.max) {
            return false;
        }
        
        return true;
    });
    
    filteredProducts.sort((a, b) => {
        switch (sortBy) {
            case 'price-low': return a.suggestedPrice - b.suggestedPrice;
            case 'price-high': return b.suggestedPrice - a.suggestedPrice;
            case 'category': return (a.category || '').localeCompare(b.category || '');
            default: return a.name.localeCompare(b.name);
        }
    });
    
    const productsCount = document.getElementById('productsCount');
    if (productsCount) {
        productsCount.textContent = filteredProducts.length;
    }
    
    displayProductsGrid(filteredProducts);
    if (window.TopikoUtils) {
        window.TopikoUtils.addDebugLog(`🔍 Filtered to ${filteredProducts.length} products from selected categories`);
    }
}

function displayProductsGrid(products) {
    const productsGrid = document.getElementById('productsGrid');
    
    if (!productsGrid) {
        console.error('Products grid not found!');
        return;
    }
    
    if (products.length === 0) {
        productsGrid.innerHTML = `
            <div class="no-products-message">
                <div class="no-products-icon">🔍</div>
                <h3>No products found</h3>
                <p>Try adjusting your search criteria or filters</p>
            </div>
        `;
        return;
    }
    
    const productsHTML = products.map(product => createProductCard(product)).join('');
    productsGrid.innerHTML = productsHTML;
}

function createProductCard(product) {
    const isSelected = window.topikoApp?.selectedProductIds?.includes(product.id) || false;
    const selectedClass = isSelected ? 'selected' : '';
    const checkmarkStyle = isSelected ? 'opacity: 1' : 'opacity: 0';
    
    return `
        <div class="product-card-selector ${selectedClass}" data-product-id="${product.id}">
            <div class="product-selector-image" style="background-image: url('${product.image}');">
                <div class="product-price-tag">₹${product.suggestedPrice.toLocaleString()}</div>
                <div class="product-selection-overlay">
                    <div class="selection-checkmark" style="${checkmarkStyle}">✓</div>
                </div>
                ${product.isPopular ? '<div class="popular-badge">Popular</div>' : ''}
            </div>
            <div class="product-selector-content">
                <h4 class="product-selector-title">${product.name}</h4>
                <p class="product-selector-description">${product.description}</p>
                <div class="product-variants">
                    ${product.variants?.map(variant => `<span class="variant-tag">${variant}</span>`).join('') || ''}
                </div>
                <div class="product-actions">
                    <button class="select-product-btn" onclick="toggleProductSelection('${product.id}')">
                        ${isSelected ? 'Remove' : 'Select'}
                    </button>
                    <button class="edit-product-btn" onclick="editProduct('${product.id}')" style="display: ${isSelected ? 'inline-block' : 'none'}">
                        Edit
                    </button>
                </div>
            </div>
        </div>
    `;
}

function toggleProductSelection(productId) {
    window.topikoApp = window.topikoApp || {};
    if (!window.topikoApp.selectedProductIds) {
        window.topikoApp.selectedProductIds = [];
    }
    if (!window.topikoApp.userProducts) {
        window.topikoApp.userProducts = [];
    }
    
    const index = window.topikoApp.selectedProductIds.indexOf(productId);
    let product = findProductById(productId);
    
    if (!product) {
        console.error('Product not found:', productId);
        return;
    }
    
    if (index > -1) {
        window.topikoApp.selectedProductIds.splice(index, 1);
        window.topikoApp.userProducts = window.topikoApp.userProducts.filter(p => p.id !== productId);
        if (window.TopikoUtils) {
            window.TopikoUtils.showNotification(`❌ Removed "${product.name}"`, 'warning');
        }
    } else {
        window.topikoApp.selectedProductIds.push(productId);
        
        const userProduct = {
            id: productId,
            name: product.name,
            price: product.suggestedPrice,
            description: product.description,
            categoryKey: product.category,
            subcategoryKey: product.subcategory,
            imageUrl: product.image,
            variants: product.variants,
            isFromDatabase: true,
            createdAt: new Date().toISOString()
        };
        
        window.topikoApp.userProducts.push(userProduct);
        if (window.TopikoUtils) {
            window.TopikoUtils.showNotification(`✅ Added "${product.name}"`, 'success');
        }
    }
    
    updateProductCard(productId);
    updateSelectedProductsSection();
    if (window.TopikoUtils) {
        window.TopikoUtils.displayProducts();
        window.TopikoUtils.calculateLeadScore();
        window.TopikoUtils.addDebugLog(`🛍️ Product ${index > -1 ? 'removed' : 'selected'}: ${product.name}`);
    }
}

function updateProductCard(productId) {
    const productCard = document.querySelector(`[data-product-id="${productId}"]`);
    if (!productCard) return;
    
    const isSelected = window.topikoApp?.selectedProductIds?.includes(productId) || false;
    const checkmark = productCard.querySelector('.selection-checkmark');
    const selectBtn = productCard.querySelector('.select-product-btn');
    const editBtn = productCard.querySelector('.edit-product-btn');
    
    productCard.classList.toggle('selected', isSelected);
    
    if (checkmark) {
        checkmark.style.opacity = isSelected ? '1' : '0';
    }
    
    if (selectBtn) {
        selectBtn.textContent = isSelected ? 'Remove' : 'Select';
        selectBtn.classList.toggle('remove-btn', isSelected);
    }
    
    if (editBtn) {
        editBtn.style.display = isSelected ? 'inline-block' : 'none';
    }
}

function findProductById(productId) {
    let foundProduct = null;
    
    if (!window.TopikoConfig?.INDIAN_PRODUCTS_DB) {
        console.warn('⚠️ Products database not available');
        return null;
    }
    
    Object.keys(window.TopikoConfig.INDIAN_PRODUCTS_DB).forEach(categoryKey => {
        Object.keys(window.TopikoConfig.INDIAN_PRODUCTS_DB[categoryKey]).forEach(subcategoryKey => {
            const products = window.TopikoConfig.INDIAN_PRODUCTS_DB[categoryKey][subcategoryKey];
            const product = products?.find(p => p.id === productId);
            if (product) {
                foundProduct = product;
            }
        });
    });
    
    return foundProduct;
}

function selectPopularProducts() {
    if (!window.TopikoConfig?.getPopularProducts) {
        if (window.TopikoUtils) {
            window.TopikoUtils.showNotification('Popular products not available', 'warning');
        }
        return;
    }
    
    const popularProducts = window.TopikoConfig.getPopularProducts(10);
    let addedCount = 0;
    
    popularProducts.forEach(product => {
        if (!window.topikoApp?.selectedProductIds?.includes(product.id)) {
            toggleProductSelection(product.id);
            addedCount++;
        }
    });
    
    if (window.TopikoUtils) {
        window.TopikoUtils.showNotification(`Added ${addedCount} popular products!`, 'success');
    }
    
    setTimeout(() => {
        filterAndDisplayProducts();
    }, 500);
}

function clearAllSelections() {
    if (!window.topikoApp?.selectedProductIds || window.topikoApp.selectedProductIds.length === 0) {
        if (window.TopikoUtils) {
            window.TopikoUtils.showNotification('No products selected to clear', 'info');
        }
        return;
    }
    
    const count = window.topikoApp.selectedProductIds.length;
    
    window.topikoApp.selectedProductIds = [];
    window.topikoApp.userProducts = window.topikoApp.userProducts.filter(p => !p.isFromDatabase);
    
    updateSelectedProductsSection();
    if (window.TopikoUtils) {
        window.TopikoUtils.displayProducts();
    }
    filterAndDisplayProducts();
    
    if (window.TopikoUtils) {
        window.TopikoUtils.showNotification(`Cleared ${count} selected products`, 'info');
    }
}

function updateSelectedProductsSection() {
    const selectedSection = document.getElementById('selectedProductsSection');
    const selectedList = document.getElementById('selectedProductsList');
    const selectedCount = document.getElementById('selectedCount');
    
    const selectedProducts = window.topikoApp?.userProducts?.filter(p => p.isFromDatabase) || [];
    
    if (selectedProducts.length === 0) {
        if (selectedSection) selectedSection.style.display = 'none';
        return;
    }
    
    if (selectedSection) selectedSection.style.display = 'block';
    if (selectedCount) selectedCount.textContent = selectedProducts.length;
    
    if (selectedList) {
        selectedList.innerHTML = selectedProducts.map(product => `
            <div class="selected-product-item">
                <img src="${product.imageUrl}" alt="${product.name}" class="selected-product-image">
                <div class="selected-product-info">
                    <h5>${product.name}</h5>
                    <p class="selected-product-price">₹${product.price.toLocaleString()}</p>
                </div>
                <button class="remove-selected-btn" onclick="toggleProductSelection('${product.id}')">×</button>
            </div>
        `).join('');
    }
}

function editProduct(productId) {
    const product = window.topikoApp?.userProducts?.find(p => p.id === productId);
    if (!product) return;
    
    const editHTML = `
        <div class="product-edit-modal" id="productEditModal">
            <div class="edit-modal-content">
                <h3>Edit Product: ${product.name}</h3>
                
                <div class="edit-form-group">
                    <label>Product Name</label>
                    <input type="text" id="editProductName" value="${product.name}">
                </div>
                
                <div class="edit-form-group">
                    <label>Price (₹)</label>
                    <input type="number" id="editProductPrice" value="${product.price}">
                </div>
                
                <div class="edit-form-group">
                    <label>Description</label>
                    <textarea id="editProductDescription">${product.description}</textarea>
                </div>
                
                <div class="edit-modal-actions">
                    <button onclick="saveProductEdit('${productId}')" class="save-edit-btn">Save Changes</button>
                    <button onclick="cancelProductEdit()" class="cancel-edit-btn">Cancel</button>
                </div>
            </div>
        </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', editHTML);
    if (window.TopikoUtils) {
        window.TopikoUtils.addDebugLog(`✏️ Editing product: ${product.name}`);
    }
}

function saveProductEdit(productId) {
    const product = window.topikoApp?.userProducts?.find(p => p.id === productId);
    if (!product) return;
    
    const newName = document.getElementById('editProductName')?.value?.trim();
    const newPrice = parseFloat(document.getElementById('editProductPrice')?.value);
    const newDescription = document.getElementById('editProductDescription')?.value?.trim();
    
    if (!newName || !newPrice || !newDescription) {
        if (window.TopikoUtils) {
            window.TopikoUtils.showNotification('Please fill all fields', 'error');
        }
        return;
    }
    
    product.name = newName;
    product.price = newPrice;
    product.description = newDescription;
    product.customPrice = newPrice;
    product.customDescription = newDescription;
    
    cancelProductEdit();
    
    updateSelectedProductsSection();
    if (window.TopikoUtils) {
        window.TopikoUtils.displayProducts();
    }
    filterAndDisplayProducts();
    
    if (window.TopikoUtils) {
        window.TopikoUtils.showNotification(`Updated "${newName}"`, 'success');
        window.TopikoUtils.addDebugLog(`💾 Product updated: ${newName}`);
    }
}

function cancelProductEdit() {
    const modal = document.getElementById('productEditModal');
    if (modal) {
        modal.remove();
    }
}

async function addCustomProduct() {
    const name = document.getElementById('productName')?.value?.trim();
    const price = document.getElementById('productPrice')?.value?.trim();
    const description = document.getElementById('productDescription')?.value?.trim();
    const categoryKey = document.getElementById('productCategory')?.value;
    const subcategoryKey = document.getElementById('productSubcategory')?.value;
    const imageUrl = document.getElementById('productImage')?.value?.trim();
    
    if (!name || !price || !description || !categoryKey) {
        if (window.TopikoUtils) {
            window.TopikoUtils.showNotification('Please fill all required fields', 'error');
        }
        return;
    }
    
    if (isNaN(price) || price <= 0) {
        if (window.TopikoUtils) {
            window.TopikoUtils.showNotification('Please enter a valid price', 'error');
        }
        return;
    }
    
    const product = {
        id: 'custom-' + Date.now(),
        name, 
        price: parseFloat(price), 
        description, 
        categoryKey,
        subcategoryKey: subcategoryKey || null,
        imageUrl: imageUrl || (window.TopikoUtils ? window.TopikoUtils.getDefaultProductImage() : 'https://via.placeholder.com/200x150?text=Product+Image'),
        isFromDatabase: false,
        isCustom: true,
        createdAt: new Date().toISOString()
    };
    
    window.topikoApp = window.topikoApp || {};
    window.topikoApp.userProducts = window.topikoApp.userProducts || [];
    window.topikoApp.userProducts.push(product);
    
    if (window.topikoApp.currentUserId && window.TopikoUtils) {
        const productDbData = {
            user_id: window.topikoApp.currentUserId, 
            name, 
            price: parseFloat(price), 
            description,
            category_key: categoryKey, 
            subcategory_key: subcategoryKey || null,
            image_url: imageUrl || null,
            is_custom: true,
            created_at: new Date().toISOString()
        };
        
        await window.TopikoUtils.saveToSupabase(productDbData, 'products');
    }
    
    ['productName', 'productPrice', 'productDescription', 'productCategory', 'productSubcategory', 'productImage'].forEach(id => {
        const field = document.getElementById(id);
        if (field) field.value = '';
    });
    
    if (window.TopikoUtils) {
        window.TopikoUtils.showNotification(`✅ "${name}" added successfully!`, 'success');
        window.TopikoUtils.displayProducts();
        window.TopikoUtils.calculateLeadScore();
        window.TopikoUtils.addDebugLog(`➕ Custom product added: ${name}`);
    }
}

async function requestFollowup() {
    if (!window.topikoApp?.currentUserId) {
        if (window.TopikoUtils) {
            window.TopikoUtils.showNotification('Please complete registration first', 'warning');
        }
        return;
    }

    const followupData = {
        user_id: window.topikoApp.currentUserId,
        requested_followup: true,
        followup_type: 'free_setup_help',
        requested_at: new Date().toISOString(),
        lead_status: 'Requested Followup'
    };

    let result = { success: false };
    if (window.TopikoUtils) {
        result = await window.TopikoUtils.saveToSupabase(followupData, 'followup_requests');
    }
    
    if (result.success) {
        if (window.TopikoUtils) {
            window.TopikoUtils.showNotification('🎯 Great! Our team will contact you within 2 hours for free setup assistance!', 'success');
            window.TopikoUtils.addDebugLog('✅ Followup requested successfully', 'success');
        }
        
        window.topikoApp.helpClaimedCount = (window.topikoApp.helpClaimedCount || 47) + 1;
        if (window.TopikoUtils) {
            window.TopikoUtils.updateProductsHelpSection();
        }
        
        const helpSection = document.getElementById('productsHelpSection');
        if (helpSection) {
            helpSection.innerHTML = `
                <div class="help-title">✅ Help Requested!</div>
                <div class="help-text" style="color: #059669; font-weight: 600;">
                    Our team will contact you within 2 hours for free setup assistance!
                </div>
            `;
            helpSection.onclick = null;
            helpSection.style.cursor = 'default';
        }
    } else {
        if (window.TopikoUtils) {
            window.TopikoUtils.showNotification('❌ Failed to request help. Please try again.', 'error');
        }
    }
}

function proceedToThemes(navigationType = 'forward') {
    const productsCount = window.topikoApp?.userProducts?.length || 0;
    
    if (productsCount === 0) {
        if (window.TopikoUtils) {
            window.TopikoUtils.showNotification('Add at least one product to see how your store will look!', 'warning');
        }
        return;
    }
    
    if (window.TopikoUtils) {
        window.TopikoUtils.showNotification('Excellent! Loading beautiful themes for your store...', 'success');
        setTimeout(() => {
            window.TopikoUtils.showScreen('themes', navigationType);
            window.TopikoUtils.populateThemePreviews();
        }, 1000);
    }
}

// ========================================
// THEMES FUNCTIONS (FIXED)
// ========================================

// FIXED: Theme selection with error handling  
function selectTheme(themeName, element) {
    try {
        window.topikoApp = window.topikoApp || {};
        window.topikoApp.selectedTheme = themeName;
        
        document.querySelectorAll('.theme-option').forEach(option => {
            option.classList.remove('selected');
        });
        
        element.classList.add('selected');
        
        const themeNames = getThemeNamesSafe();
        const selectedThemeNameEl = document.getElementById('selectedThemeName');
        
        if (selectedThemeNameEl) {
            selectedThemeNameEl.textContent = themeNames[themeName] || themeName;
        }
        
        const nextBtn = document.getElementById('themeNextBtn');
        if (nextBtn) {
            nextBtn.disabled = false;
            nextBtn.style.opacity = '1';
        }
        
        if (window.TopikoUtils) {
            const themeName_display = themeNames[themeName] || themeName;
            window.TopikoUtils.showNotification(`Perfect choice! ${themeName_display} theme selected!`, 'success');
            window.TopikoUtils.calculateLeadScore();
        }
        
    } catch (error) {
        console.error('❌ Error in selectTheme:', error);
        
        // Fallback: at least set the theme
        if (window.topikoApp) {
            window.topikoApp.selectedTheme = themeName;
        }
    }
}

// ========================================
// COMPLETION SCREEN FUNCTIONS (FIXED)
// ========================================

function openCallScheduler() {
    if (!selectedOffer) {
        if (window.TopikoUtils) {
            window.TopikoUtils.showNotification('Please select an offer first', 'warning');
        }
        return;
    }
    
    const schedulerOfferName = document.getElementById('schedulerOfferName');
    if (schedulerOfferName && selectedOffer) {
        schedulerOfferName.textContent = selectedOffer.title;
    }
    
    if (window.TopikoUtils) {
        window.TopikoUtils.showModal('dateTimeModal');
        window.TopikoUtils.addDebugLog('📅 Call scheduler opened', 'info');
    }
}

function openExploreForm() {
    if (window.TopikoUtils) {
        window.TopikoUtils.showModal('reasonModal');
        window.TopikoUtils.addDebugLog('💭 Explore form opened', 'info');
    }
}

function selectOffer(offerId, element) {
    document.querySelectorAll('.special-offer-item').forEach(item => {
        item.classList.remove('selected');
    });
    
    element.classList.add('selected');
    
    if (window.TopikoConfig && window.TopikoConfig.SPECIAL_OFFERS) {
        selectedOffer = window.TopikoConfig.SPECIAL_OFFERS.find(offer => offer.id === offerId);
    }
    
    const selectedDisplay = document.getElementById('selectedOfferDisplay');
    const selectedOfferName = document.getElementById('selectedOfferName');
    
    if (selectedDisplay && selectedOfferName && selectedOffer) {
        selectedOfferName.textContent = selectedOffer.title;
        selectedDisplay.style.display = 'block';
    }
    
    if (window.TopikoUtils) {
        window.TopikoUtils.addDebugLog(`🎁 Offer selected: ${selectedOffer?.title}`, 'info');
    }
}

function displayRandomOffers() {
    if (!window.TopikoConfig || !window.TopikoConfig.SPECIAL_OFFERS) {
        console.warn('Special offers configuration not found');
        return;
    }
    
    const offersContainer = document.getElementById('specialOffersContainer');
    if (!offersContainer) return;
    
    const allOffers = window.TopikoConfig.SPECIAL_OFFERS;
    const numberOfOffers = Math.min(4, allOffers.length);
    const selectedOffers = getRandomOffers(allOffers, numberOfOffers);
    
    offersContainer.innerHTML = selectedOffers.map(offer => `
        <div class="special-offer-item" onclick="selectOffer('${offer.id}', this)">
            <div class="offer-title">
                🎁 ${offer.title}
                <span class="offer-value">FREE</span>
            </div>
            <div class="offer-description">${offer.description}</div>
        </div>
    `).join('');
    
    startOfferTimer();
    if (window.TopikoUtils) {
        window.TopikoUtils.addDebugLog(`✅ Special offers displayed: ${selectedOffers.length} offers`);
    }
}

function getRandomOffers(offers, count) {
    const shuffled = offers.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

function startOfferTimer() {
    const timerElement = document.getElementById('offerTimer');
    if (!timerElement) return;
    
    let totalSeconds = (23 * 3600) + (45 * 60) + Math.floor(Math.random() * 60);
    
    const timerInterval = setInterval(() => {
        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;
        
        timerElement.textContent = 
            `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        
        totalSeconds--;
        
        if (totalSeconds < 0) {
            clearInterval(timerInterval);
            timerElement.textContent = "00:00:00";
            timerElement.style.color = "#dc2626";
        }
    }, 1000);
}

function initializeCompletionScreen() {
    console.log('🎉 Initializing completion screen...');
    
    const completionBusinessName = document.getElementById('completionBusinessName');
    if (completionBusinessName && window.topikoApp && window.topikoApp.businessName) {
        completionBusinessName.textContent = window.topikoApp.businessName;
    }
    
    displayRandomOffers();
    
    selectedOffer = null;
    window.selectedTimeSlot = null;
    window.selectedReason = null;
    
    const selectedDisplay = document.getElementById('selectedOfferDisplay');
    if (selectedDisplay) {
        selectedDisplay.style.display = 'none';
    }
    
    if (window.TopikoUtils) {
        window.TopikoUtils.addDebugLog('✅ Interactive completion screen initialized');
    }
}

function selectTimeSlot(element, slotId) {
    document.querySelectorAll('.time-slot').forEach(slot => slot.classList.remove('selected'));
    element.classList.add('selected');
    
    const confirmBtn = document.getElementById('confirmScheduleBtn');
    if (confirmBtn) {
        confirmBtn.disabled = false;
        confirmBtn.style.opacity = '1';
    }
    
    window.selectedTimeSlot = slotId;
    if (window.TopikoUtils) {
        window.TopikoUtils.addDebugLog(`⏰ Time slot selected: ${slotId}`);
    }
}

function confirmScheduleAndComplete() {
    const selectedSlot = window.selectedTimeSlot;
    const offer = selectedOffer;
    
    if (!selectedSlot) {
        if (window.TopikoUtils) {
            window.TopikoUtils.showNotification('Please select a time slot', 'error');
        }
        return;
    }
    
    if (!offer) {
        if (window.TopikoUtils) {
            window.TopikoUtils.showNotification('Please select an offer first', 'error');
        }
        return;
    }
    
    const schedulingData = {
        user_id: window.topikoApp?.currentUserId,
        business_name: window.topikoApp?.businessName,
        selected_offer: offer.title,
        offer_id: offer.id,
        scheduled_slot: selectedSlot,
        action_type: 'schedule_call',
        completion_choice: 'talk_team',
        scheduled_at: new Date().toISOString()
    };
    
    if (window.topikoApp?.currentUserId && window.TopikoUtils) {
        window.TopikoUtils.saveToSupabase(schedulingData, 'completion_actions');
    }
    
    if (window.TopikoUtils) {
        window.TopikoUtils.closeModal('dateTimeModal');
        window.TopikoUtils.showNotification(`🎉 Perfect! Call scheduled to claim "${offer.title}". Our team will contact you at the selected time.`, 'success');
        window.TopikoUtils.addDebugLog(`✅ Call scheduled successfully: ${offer.title} at ${selectedSlot}`);
    }
    
    showCompletionSuccess('call_scheduled', offer.title, selectedSlot);
}

function selectReason(reasonType, element) {
    document.querySelectorAll('.reason-option').forEach(opt => opt.classList.remove('selected'));
    element.classList.add('selected');
    window.selectedReason = reasonType;
    if (window.TopikoUtils) {
        window.TopikoUtils.addDebugLog(`💭 Reason selected: ${reasonType}`);
    }
}

function submitReasonAndComplete() {
    const reasonType = window.selectedReason;
    const comment = document.getElementById('reasonText')?.value || '';
    
    const explorationData = {
        user_id: window.topikoApp?.currentUserId,
        business_name: window.topikoApp?.businessName,
        selected_offer: selectedOffer?.title || 'none',
        reason_type: reasonType || 'no_reason',
        comments: comment,
        action_type: 'self_explore',
        completion_choice: 'explore_self',
        submitted_at: new Date().toISOString()
    };
    
    if (window.topikoApp?.currentUserId && window.TopikoUtils) {
        window.TopikoUtils.saveToSupabase(explorationData, 'completion_actions');
    }
    
    if (window.TopikoUtils) {
        window.TopikoUtils.closeModal('reasonModal');
        window.TopikoUtils.showNotification('🚀 Thank you for your feedback! We\'ll use this to improve our service.', 'success');
        window.TopikoUtils.addDebugLog(`✅ Exploration form submitted: ${reasonType}`);
    }
    
    showCompletionSuccess('self_explore', reasonType, comment);
}

function showCompletionSuccess(actionType, primaryData, secondaryData) {
    const completionContent = document.querySelector('#completion .content-card');
    if (!completionContent) return;
    
    let successMessage = '';
    let actionDetails = '';
    
    if (actionType === 'call_scheduled') {
        successMessage = '📞 Call Scheduled Successfully!';
        actionDetails = `
            <div style="background: rgba(16, 185, 129, 0.1); border: 2px solid #10b981; border-radius: 12px; padding: 1.5rem; margin: 2rem 0;">
                <h4 style="color: #047857; margin-bottom: 1rem;">✅ What happens next:</h4>
                <ul style="text-align: left; color: #065f46; line-height: 1.6;">
                    <li>Our team will call you at your selected time: <strong>${secondaryData}</strong></li>
                    <li>We'll help you claim: <strong>${primaryData}</strong></li>
                    <li>Complete setup of your online business presence</li>
                    <li>Get your business live within 24-48 hours</li>
                </ul>
            </div>
        `;
    } else {
        successMessage = '🚀 Thank You for Your Interest!';
        actionDetails = `
            <div style="background: rgba(99, 102, 241, 0.1); border: 2px solid #6366f1; border-radius: 12px; padding: 1.5rem; margin: 2rem 0;">
                <h4 style="color: #4338ca; margin-bottom: 1rem;">✅ We've noted your preferences:</h4>
                <div style="text-align: left; color: #3730a3; line-height: 1.6;">
                    <p><strong>Your feedback:</strong> ${primaryData}</p>
                    ${secondaryData ? `<p><strong>Additional details:</strong> ${secondaryData}</p>` : ''}
                    <p>We'll use this information to better serve businesses like yours.</p>
                </div>
            </div>
        `;
    }
    
    completionContent.innerHTML = `
        <div style="text-align: center;" class="completion-success-enter">
            <div style="font-size: 4rem; margin-bottom: 1rem; animation: bounce 2s infinite;">🎉</div>
            <h2 style="color: #059669; font-size: 2rem; font-weight: 700; margin-bottom: 1rem;">${successMessage}</h2>
            ${actionDetails}
            <div style="background: rgba(156, 163, 175, 0.1); border-radius: 12px; padding: 1.5rem; margin: 2rem 0;">
                <p style="color: #6b7280; font-size: 0.9rem; margin: 0;">
                    If you have any questions, feel free to reach out to us at<br>
                    <strong style="color: #374151;">support@topiko.com</strong> or call <strong style="color: #374151;">+91-XXX-XXX-XXXX</strong>
                </p>
            </div>
        </div>
    `;
}

async function completeSetup(navigationType = 'forward') {
    const finalScore = window.TopikoUtils ? window.TopikoUtils.calculateLeadScore() + 10 : 50;
    
    const leadData = {
        user_id: window.topikoApp?.currentUserId,
        name: window.topikoApp?.userName,
        email: document.getElementById('email')?.value,
        phone: document.getElementById('phoneNumber')?.value,
        business_name: window.topikoApp?.businessName,
        selected_goals: window.topikoApp?.selectedGoals || [],
        selected_categories: window.topikoApp?.selectedCategories || [],
        selected_subcategories: window.topikoApp?.selectedSubcategories || [],
        products_count: window.topikoApp?.userProducts?.length || 0,
        selected_theme: window.topikoApp?.selectedTheme,
        qualifying_answers: window.topikoApp?.qualifyingAnswers || {},
        timeline: window.topikoApp?.qualifyingAnswers?.timeline,
        budget_range: window.topikoApp?.qualifyingAnswers?.budget,
        decision_maker: window.topikoApp?.qualifyingAnswers?.decision_maker === 'yes',
        online_presence: window.topikoApp?.qualifyingAnswers?.online_presence,
        lead_score: finalScore,
        lead_quality: finalScore >= 70 ? 'Hot' : finalScore >= 40 ? 'Warm' : 'Cold',
        setup_completed: true,
        completed_at: new Date().toISOString()
    };
    
    if (window.topikoApp?.currentUserId && window.TopikoUtils) {
        const finalUserData = {
            selected_categories: window.topikoApp.selectedCategories || [],
            selected_subcategories: window.topikoApp.selectedSubcategories || [],
            timeline: window.topikoApp.qualifyingAnswers?.timeline,
            budget_range: window.topikoApp.qualifyingAnswers?.budget,
            decision_maker: window.topikoApp.qualifyingAnswers?.decision_maker === 'yes',
            online_presence: window.topikoApp.qualifyingAnswers?.online_presence,
            updated_at: new Date().toISOString()
        };
        
        await window.TopikoUtils.saveToSupabase(finalUserData, 'users', 'update', window.topikoApp.currentUserId);
    }
    
    const existingLeads = JSON.parse(localStorage.getItem('topiko_local_leads') || '[]');
    existingLeads.push(leadData);
    localStorage.setItem('topiko_local_leads', JSON.stringify(existingLeads));
    
    if (window.TopikoUtils) {
        window.TopikoUtils.showNotification(`🎉 Congratulations ${window.topikoApp?.userName || 'there'}! Your business is ready for final touches!`, 'success');
        
        setTimeout(() => {
            window.TopikoUtils.showScreen('completion', navigationType);
            setTimeout(() => {
                initializeCompletionScreen();
            }, 500);
        }, 2000);
    }
}

// ========================================
// MODAL FUNCTIONS (FIXED)
// ========================================

// FIXED: Goals transition modal with error handling
function displayGoalsTransitionModalSafe() {
    try {
        const goalNames = getGoalNamesSafe();

        const selectedGoalsText = document.getElementById('selectedGoalsText');
        if (selectedGoalsText && window.topikoApp && window.topikoApp.selectedGoals) {
            const goalsList = window.topikoApp.selectedGoals.map(goal => goalNames[goal] || goal).join(', ');
            selectedGoalsText.textContent = goalsList;
        }

        const modalGoalsList = document.getElementById('modalGoalsList');
        if (modalGoalsList && window.topikoApp && window.topikoApp.selectedGoals) {
            modalGoalsList.innerHTML = window.topikoApp.selectedGoals.map(goal => 
                `<div class="goal-pill">${goalNames[goal] || goal}</div>`
            ).join('');
        }
        
        // Safe modal display
        if (window.TopikoUtils && window.TopikoUtils.showModal) {
            window.TopikoUtils.showModal('goalsTransitionModal');
            window.TopikoUtils.addDebugLog(`Goals transition modal shown for: ${(window.topikoApp?.selectedGoals || []).join(', ')}`);
        } else {
            console.error('❌ TopikoUtils not available for modal display');
        }
        
    } catch (error) {
        console.error('❌ Error in displayGoalsTransitionModalSafe:', error);
        
        // Fallback: show basic notification
        if (window.TopikoUtils && window.TopikoUtils.showNotification) {
            window.TopikoUtils.showNotification('Moving to registration...', 'info');
            setTimeout(() => {
                if (window.TopikoUtils.showScreen) {
                    window.TopikoUtils.showScreen('registration', 'forward');
                }
            }, 1000);
        }
    }
}

function proceedFromGoalsModal() {
    if (window.TopikoUtils) {
        window.TopikoUtils.closeModal('goalsTransitionModal');
        setTimeout(() => window.TopikoUtils.showScreen('registration', 'forward'), 500);
    }
}

// FIXED: Setup intro modal with error handling
function displaySetupIntroModalSafe() {
    try {
        const goalNames = getGoalNamesSafe();

        const setupUserName = document.getElementById('setupUserName');
        const setupBusinessName = document.getElementById('setupBusinessName');
        
        if (setupUserName) {
            setupUserName.textContent = window.topikoApp?.userName || 'there';
        }
        
        if (setupBusinessName) {
            setupBusinessName.textContent = window.topikoApp?.businessName || 'business';
        }

        const modalSetupGoalsList = document.getElementById('modalSetupGoalsList');
        if (modalSetupGoalsList && window.topikoApp && window.topikoApp.selectedGoals) {
            modalSetupGoalsList.innerHTML = window.topikoApp.selectedGoals.map(goal => 
                `<div style="background: rgba(34, 197, 94, 0.15); border: 2px solid rgba(34, 197, 94, 0.3); border-radius: 8px; padding: 0.8rem; color: #059669; font-weight: 600; font-size: 0.9rem; text-align: center;">
                    ${goalNames[goal] || goal}
                </div>`
            ).join('');
        }
        
        if (window.TopikoUtils && window.TopikoUtils.showModal) {
            window.TopikoUtils.showModal('setupIntroModal');
            window.TopikoUtils.addDebugLog(`Setup intro modal shown for: ${(window.topikoApp?.selectedGoals || []).join(', ')}`);
        }
        
    } catch (error) {
        console.error('❌ Error in displaySetupIntroModalSafe:', error);
        
        // Fallback: proceed directly
        if (window.TopikoUtils && window.TopikoUtils.showScreen) {
            window.TopikoUtils.showScreen('qualifying-questions', 'forward');
        }
    }
}

function proceedFromSetupModal() {
    if (window.TopikoUtils) {
        window.TopikoUtils.closeModal('setupIntroModal');
        setTimeout(() => window.TopikoUtils.showScreen('qualifying-questions', 'forward'), 500);
    }
}

// FIXED: Update goals modal with error handling
function updateGoalsModalSafe(selectedGoals) {
    try {
        const goalsInlineText = document.getElementById('selectedGoalsInlineText');
        if (goalsInlineText && selectedGoals && selectedGoals.length > 0) {
            const goalIcons = {
                'ecommerce': '🛒 Sell Online',
                'customers': '📈 Reach More Customers', 
                'manage': '👥 Manage Customers',
                'search': '🔍 Appear in Search Results',
                'brand': '⭐ Establish Brand'
            };
            
            const goalsText = selectedGoals.map(goal => goalIcons[goal] || goal).join('<br>');
            goalsInlineText.innerHTML = goalsText;
        }
    } catch (error) {
        console.error('❌ Error in updateGoalsModalSafe:', error);
    }
}

// ========================================
// NAVIGATION FUNCTIONS - WITH TRACKING (FIXED)
// ========================================

function goBack(navigationType = 'back') {
    const steps = ['welcome', 'language', 'goals', 'registration', 'qualifying-questions', 'categories', 'products', 'themes', 'completion'];
    const currentIndex = steps.indexOf(window.topikoApp?.currentStep || 'welcome');
    
    if (currentIndex > 0) {
        const previousStep = steps[currentIndex - 1];
        if (window.TopikoUtils) {
            window.TopikoUtils.showScreen(previousStep, navigationType);
        }
    }
}

function navigateToStep(stepId, navigationType = 'direct_click') {
    if (window.TopikoUtils) {
        window.TopikoUtils.showScreen(stepId, navigationType);
    }
}

function toggleScoreDetails() {
    const widget = document.getElementById('leadWidget');
    if (widget) {
        widget.classList.toggle('expanded');
    }
}

function toggleDebugPanel() {
    const debugPanel = document.getElementById('debugPanel');
    if (debugPanel) {
        debugPanel.classList.toggle('visible');
        updateNavigationStats();
    }
}

// NEW: Update navigation stats in debug panel
function updateNavigationStats() {
    if (!window.topikoApp || !window.TopikoUtils) return;
    
    const summary = window.TopikoUtils.getNavigationSummary();
    const currentTime = Date.now();
    const pageTime = Math.round((currentTime - (window.topikoApp.pageStartTime || currentTime)) / 1000);
    
    const currentPageStat = document.getElementById('debugCurrentPage');
    const pagesVisitedStat = document.getElementById('debugPagesVisited');
    const sessionTimeStat = document.getElementById('debugSessionTime');
    const pageTimeStat = document.getElementById('debugPageTime');
    const navigationEventsStat = document.getElementById('debugNavigationEvents');
    
    if (currentPageStat) currentPageStat.textContent = window.topikoApp.currentPage || '-';
    if (pagesVisitedStat) pagesVisitedStat.textContent = summary.uniquePagesVisited || 0;
    if (sessionTimeStat) sessionTimeStat.textContent = summary.sessionDuration + 's';
    if (pageTimeStat) pageTimeStat.textContent = pageTime + 's';
    if (navigationEventsStat) navigationEventsStat.textContent = (window.topikoApp.navigationHistory || []).length;
}

// Update stats every 2 seconds
setInterval(updateNavigationStats, 2000);

// ========================================
// GLOBAL FUNCTION EXPORT (FIXED)
// ========================================

if (typeof window !== 'undefined') {
    // Navigation Functions
    window.goBack = goBack;
    window.navigateToStep = navigateToStep;
    window.toggleScoreDetails = toggleScoreDetails;
    window.toggleDebugPanel = toggleDebugPanel;
    window.updateNavigationStats = updateNavigationStats;
    
    // Lead Flow Functions
    window.startLeadFlow = startLeadFlow;
    window.selectLanguage = selectLanguage;
    window.selectLanguageWithTranslation = selectLanguageWithTranslation;
    window.updateGoalsTracking = updateGoalsTracking;
    window.showGoalsTransitionModal = showGoalsTransitionModal;
    window.submitGoals = submitGoals;
    window.trackFormProgress = trackFormProgress;
    window.submitRegistration = submitRegistration;
    window.handleOtpInput = handleOtpInput;
    window.verifyOtp = verifyOtp;
    window.updateQualifyingData = updateQualifyingData;
    window.proceedToCategories = proceedToCategories;
    window.toggleCategorySelection = toggleCategorySelection;
    window.toggleSubcategorySelection = toggleSubcategorySelection;
    window.proceedToProducts = proceedToProducts;
    window.requestFollowup = requestFollowup;
    window.proceedToThemes = proceedToThemes;
    window.selectTheme = selectTheme;
    window.completeSetup = completeSetup;
    
    // Product Functions
    window.switchProductMode = switchProductMode;
    window.selectPopularProducts = selectPopularProducts;
    window.clearAllSelections = clearAllSelections;
    window.toggleProductSelection = toggleProductSelection;
    window.editProduct = editProduct;
    window.saveProductEdit = saveProductEdit;
    window.cancelProductEdit = cancelProductEdit;
    window.addCustomProduct = addCustomProduct;
    window.applyQuickFilter = applyQuickFilter;
    
    // Modal Functions
    window.displayGoalsTransitionModalSafe = displayGoalsTransitionModalSafe;
    window.proceedFromGoalsModal = proceedFromGoalsModal;
    window.displaySetupIntroModalSafe = displaySetupIntroModalSafe;
    window.proceedFromSetupModal = proceedFromSetupModal;
    window.updateGoalsModalSafe = updateGoalsModalSafe;
    
    // Completion Functions
    window.openCallScheduler = openCallScheduler;
    window.openExploreForm = openExploreForm;
    window.selectOffer = selectOffer;
    window.displayRandomOffers = displayRandomOffers;
    window.getRandomOffers = getRandomOffers;
    window.startOfferTimer = startOfferTimer;
    window.initializeCompletionScreen = initializeCompletionScreen;
    window.selectTimeSlot = selectTimeSlot;
    window.confirmScheduleAndComplete = confirmScheduleAndComplete;
    window.selectReason = selectReason;
    window.submitReasonAndComplete = submitReasonAndComplete;
    window.showCompletionSuccess = showCompletionSuccess;
    
    // Config-safe helpers
    window.getGoalNamesSafe = getGoalNamesSafe;
    window.getThemeNamesSafe = getThemeNamesSafe;
    window.waitForConfigThenExecute = waitForConfigThenExecute;
    window.ensureConfigLoaded = ensureConfigLoaded;
}

if (window.TopikoUtils && window.TopikoUtils.addDebugLog) {
    window.TopikoUtils.addDebugLog('📱 COMPLETE Topiko Lead Form with Navigation Tracking loaded - ALL FUNCTIONS AVAILABLE (FIXED VERSION)', 'success');
}
console.log('📱 ✅ Navigation Tracking Integration Complete');
console.log('📊 ✅ Page Journey Analytics Ready');
console.log('🎯 ✅ CRM Data Collection Enhanced');
console.log('🛡️ ✅ Config-Safe Functions Loaded');
/**
 * Topiko Lead Form - Main Application Controller
 * Handles application initialization, step navigation, UI controllers, and lead flow management
 */

// ============================================
// GLOBAL APPLICATION STATE
// ============================================

// Application state
window.leadData = {};
window.currentStep = 'welcome';
window.selectedProducts = new Set();
window.fomoInterval = null;
window.fomoCounterInterval = null;

// ============================================
// APPLICATION INITIALIZATION
// ============================================

/**
 * Initialize the application when DOM is ready
 */
document.addEventListener('DOMContentLoaded', function() {
    // Force clean startup
    forceCleanStartup();
    
    // Small delay to ensure DOM is fully ready
    setTimeout(() => {
        initializeApp();
    }, 100);
});

/**
 * Force clean startup - reset everything
 */
function forceCleanStartup() {
    Utils.debugLog('🧹 Force clean startup initiated');
    
    // Clear any stored data that might cause issues
    try {
        localStorage.removeItem('topiko-lead-data');
        localStorage.removeItem('topiko-language');
    } catch (e) {
        console.warn('Could not clear localStorage:', e);
    }
    
    // Reset global variables
    window.leadData = {};
    window.currentStep = 'welcome';
    window.selectedProducts = new Set();
    
    // Force hide all modals immediately
    const modals = [
        'goalsTransitionModal',
        'setupIntroModal', 
        'otpVerificationModal'
    ];
    
    modals.forEach(modalId => {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.style.display = 'none';
            modal.style.visibility = 'hidden';
        }
    });
    
    // Force show only welcome screen
    const screens = document.querySelectorAll('.screen');
    screens.forEach(screen => {
        screen.classList.remove('active');
        screen.style.display = 'none';
    });
    
    const welcomeScreen = document.getElementById('welcome');
    if (welcomeScreen) {
        welcomeScreen.classList.add('active');
        welcomeScreen.style.display = 'block';
    }
    
    // Hide back button
    const backButton = document.getElementById('backButton');
    if (backButton) {
        backButton.classList.add('hidden');
    }
    
    // Reset body overflow
    document.body.style.overflow = 'auto';
    
    Utils.debugLog('✅ Clean startup completed');
}

/**
 * Main application initialization
 */
function initializeApp() {
    Utils.debugLog('🚀 Initializing Topiko Lead Form Application');
    
    try {
        // Detect and set initial language (but don't trigger any navigation)
        detectAndSetLanguage();
        
        // Double-check welcome screen is active
        ensureWelcomeScreenOnly();
        
        // Setup event listeners
        setupEventListeners();
        
        // Initialize FOMO system (but not immediately)
        setTimeout(() => {
            initializeFOMOSystem();
        }, 2000);
        
        // Initialize lead score widget
        initializeLeadScoreWidget();
        
        // Track page view
        Utils.trackEvent('page_view', { page: 'welcome' });
        
        Utils.debugLog('✅ Application initialized successfully');
        
    } catch (error) {
        Utils.debugLog('❌ Application initialization failed', error, 'error');
        console.error('Initialization error:', error);
    }
}

/**
 * Ensure only welcome screen is showing
 */
function ensureWelcomeScreenOnly() {
    Utils.debugLog('🏠 Ensuring welcome screen is active');
    
    // Hide ALL screens first
    const allScreens = document.querySelectorAll('.screen');
    allScreens.forEach(screen => {
        screen.classList.remove('active');
        screen.style.display = 'none';
    });
    
    // Show only welcome screen
    const welcomeScreen = document.getElementById('welcome');
    if (welcomeScreen) {
        welcomeScreen.classList.add('active');
        welcomeScreen.style.display = 'block';
    }
    
    // Ensure no modals are showing
    const modalOverlays = document.querySelectorAll('.modal-overlay');
    modalOverlays.forEach(modal => {
        modal.style.display = 'none';
        modal.style.visibility = 'hidden';
    });
    
    // Set current step
    window.currentStep = 'welcome';
    
    // Reset progress bar
    const progressSteps = document.querySelectorAll('.progress-step');
    progressSteps.forEach((step, index) => {
        step.classList.remove('active', 'completed');
        const circle = step.querySelector('.progress-circle');
        if (circle) {
            circle.textContent = index + 1;
        }
    });
    
    Utils.debugLog('✅ Welcome screen ensured');
}

/**
 * Detect browser language and set initial language (without triggering navigation)
 */
function detectAndSetLanguage() {
    try {
        const supportedLanguages = Config.localization.supportedLanguages;
        const browserLanguage = navigator.language.split('-')[0];
        
        let initialLanguage = Config.localization.defaultLanguage;
        
        // Only use browser language if it's supported, otherwise default to English
        if (supportedLanguages.includes(browserLanguage)) {
            initialLanguage = browserLanguage;
        }
        
        // Set language without triggering any UI changes
        if (typeof i18n !== 'undefined') {
            // Set the current language variable
            currentLanguage = initialLanguage;
            
            // Update HTML lang attribute
            document.documentElement.lang = initialLanguage;
            const htmlRoot = document.getElementById('htmlRoot');
            if (htmlRoot) {
                htmlRoot.lang = initialLanguage;
            }
            
            // Update language-specific styling
            const body = document.body;
            body.classList.remove('lang-en', 'lang-hi', 'lang-te', 'lang-ta');
            body.classList.add(`lang-${initialLanguage}`);
        }
        
        Utils.debugLog('Language set (no UI changes)', { initialLanguage, browserLanguage });
        
    } catch (error) {
        Utils.debugLog('Language detection failed', error, 'error');
        // Fallback to English
        currentLanguage = 'en';
    }
}

/**
 * Ensure application starts at welcome screen
 */
function ensureWelcomeScreen() {
    // Hide all screens first
    const screens = document.querySelectorAll('.screen');
    screens.forEach(screen => screen.classList.remove('active'));
    
    // Show welcome screen
    const welcomeScreen = document.getElementById('welcome');
    if (welcomeScreen) {
        welcomeScreen.classList.add('active');
    }
    
    // Hide all modals
    const modals = document.querySelectorAll('.modal-overlay');
    modals.forEach(modal => modal.style.display = 'none');
    
    // Set current step to welcome
    window.currentStep = 'welcome';
    
    // Hide back button
    const backButton = document.getElementById('backButton');
    if (backButton) {
        backButton.classList.add('hidden');
    }
    
    // Reset progress bar
    const steps = document.querySelectorAll('.progress-step');
    steps.forEach((step, index) => {
        step.classList.remove('active', 'completed');
        const circle = step.querySelector('.progress-circle');
        if (circle) {
            circle.innerHTML = index + 1;
        }
    });
    
    Utils.debugLog('Application reset to welcome screen');
}

/**
 * Restore form data without auto-navigation
 */
function restoreFormStateData() {
    if (!Config.form.progressPersistence) return;
    
    const storedData = Utils.getStoredFormData();
    if (storedData && Object.keys(storedData).length > 0) {
        // Check if session is not expired
        const lastSaved = new Date(storedData.lastSaved || 0);
        const now = new Date();
        const sessionAge = now - lastSaved;
        
        if (sessionAge < Config.form.sessionTimeout) {
            // Only restore data, don't auto-navigate
            window.leadData = { ...storedData };
            delete window.leadData.currentStep; // Remove step info to prevent auto-navigation
            
            Utils.debugLog('Form data restored from localStorage (no auto-navigation)', storedData);
            
            // Update lead score with restored data
            updateLeadScore();
        } else {
            Utils.clearStoredFormData();
            Utils.debugLog('Stored form data expired and cleared');
        }
    }
}

/**
 * Setup global event listeners
 */
function setupEventListeners() {
    // Auto-save form data periodically
    if (Config.form.autoSave) {
        setInterval(() => {
            autoSaveCurrentStep();
        }, Config.form.autoSaveInterval);
    }
    
    // Handle browser back/forward navigation
    window.addEventListener('popstate', handlePopState);
    
    // Handle page visibility change
    document.addEventListener('visibilitychange', handleVisibilityChange);
    
    // Handle errors
    window.addEventListener('error', handleGlobalError);
    
    // Setup search input debouncing
    const searchInput = document.getElementById('productSearch');
    if (searchInput) {
        searchInput.addEventListener('input', Utils.debounce(handleProductSearch, 300));
    }
    
    // Setup filter change handlers
    const categoryFilter = document.getElementById('categoryFilter');
    if (categoryFilter) {
        categoryFilter.addEventListener('change', handleFilterChange);
    }
    
    const sortBy = document.getElementById('sortBy');
    if (sortBy) {
        sortBy.addEventListener('change', handleFilterChange);
    }
    
    // Setup price range inputs
    const minPrice = document.getElementById('minPrice');
    const maxPrice = document.getElementById('maxPrice');
    if (minPrice && maxPrice) {
        minPrice.addEventListener('input', Utils.debounce(handlePriceRangeChange, 500));
        maxPrice.addEventListener('input', Utils.debounce(handlePriceRangeChange, 500));
    }
    
    Utils.debugLog('Event listeners setup completed');
}

// ============================================
// STEP NAVIGATION SYSTEM
// ============================================

/**
 * Navigate to a specific step
 * @param {string} stepName - Name of the step to navigate to
 */
function navigateToStep(stepName) {
    Utils.debugLog(`Navigating to step: ${stepName}`);
    
    // Validate step exists
    const targetScreen = document.getElementById(stepName);
    if (!targetScreen) {
        Utils.debugLog(`Step not found: ${stepName}`, null, 'error');
        Utils.showNotification('Navigation error occurred', 'error');
        return;
    }
    
    // Hide all modals first
    const modals = document.querySelectorAll('.modal-overlay');
    modals.forEach(modal => modal.style.display = 'none');
    
    // Hide all screens
    const screens = document.querySelectorAll('.screen');
    screens.forEach(screen => screen.classList.remove('active'));
    
    // Show target screen
    targetScreen.classList.add('active');
    window.currentStep = stepName;
    
    // Update progress bar
    Utils.updateProgressBar(stepName);
    
    // Update back button visibility
    updateBackButtonVisibility(stepName);
    
    // Update URL hash for deep linking
    updateUrlHash(stepName);
    
    // Track step view
    Utils.trackEvent('step_view', { step: stepName });
    
    // Load step-specific data
    loadStepData(stepName);
    
    Utils.debugLog(`Successfully navigated to: ${stepName}`);
}

/**
 * Go back to previous step
 */
function goBack() {
    const stepOrder = ['welcome', 'language', 'goals', 'registration', 'qualifying-questions', 'categories', 'products', 'themes'];
    const currentIndex = stepOrder.indexOf(window.currentStep);
    
    if (currentIndex > 0) {
        const previousStep = stepOrder[currentIndex - 1];
        navigateToStep(previousStep);
        Utils.trackEvent('step_back', { from: window.currentStep, to: previousStep });
    }
}

/**
 * Update back button visibility
 * @param {string} stepName - Current step name
 */
function updateBackButtonVisibility(stepName) {
    const backButton = document.getElementById('backButton');
    if (backButton) {
        if (stepName === 'welcome' || stepName === 'language') {
            backButton.classList.add('hidden');
        } else {
            backButton.classList.remove('hidden');
        }
    }
}

/**
 * Update URL hash for deep linking
 * @param {string} stepName - Current step name
 */
function updateUrlHash(stepName) {
    if (stepName !== 'welcome') {
        window.history.replaceState({ step: stepName }, '', `#${stepName}`);
    } else {
        window.history.replaceState({}, '', window.location.pathname);
    }
}

/**
 * Handle browser back/forward navigation
 * @param {PopStateEvent} event - PopState event
 */
function handlePopState(event) {
    const hash = window.location.hash.replace('#', '');
    if (hash && document.getElementById(hash)) {
        navigateToStep(hash);
    } else {
        navigateToStep('welcome');
    }
}

/**
 * Load step-specific data and initialize step
 * @param {string} stepName - Step name
 */
function loadStepData(stepName) {
    switch (stepName) {
        case 'categories':
            loadCategoriesData();
            break;
        case 'products':
            loadProductsData();
            break;
        case 'themes':
            loadThemesData();
            break;
    }
}

// ============================================
// LEAD FLOW MANAGEMENT
// ============================================

/**
 * Start the lead flow from welcome screen
 */
function startLeadFlow() {
    Utils.trackEvent('lead_flow_started');
    navigateToStep('language');
}

/**
 * Auto-save current step data
 */
function autoSaveCurrentStep() {
    if (window.currentStep === 'welcome') return;
    
    const stepData = Utils.collectFormData(window.currentStep);
    Object.assign(window.leadData, stepData);
    Utils.saveFormData(window.leadData, window.currentStep);
}

/**
 * Update lead score and widget
 */
function updateLeadScore() {
    const score = Utils.calculateLeadScore(window.leadData);
    Utils.updateLeadScoreWidget(score);
    window.leadData.currentScore = score;
}

// ============================================
// UI CONTROLLERS
// ============================================

/**
 * Handle language selection
 * @param {string} langCode - Language code
 * @param {HTMLElement} element - Selected element
 */
function selectLanguage(langCode, element) {
    Utils.debugLog(`Language selected: ${langCode}`);
    
    // Update UI
    document.querySelectorAll('.language-option').forEach(option => {
        option.classList.remove('selected');
    });
    element.classList.add('selected');
    
    // Set language
    if (typeof i18n !== 'undefined') {
        i18n.setLanguage(langCode);
    }
    
    // Store in lead data
    window.leadData.language = langCode;
    
    // Track event
    Utils.trackEvent('language_selected', { language: langCode });
    
    // Navigate to next step after delay
    setTimeout(() => {
        navigateToStep('goals');
    }, 800);
}

/**
 * Update goals tracking when checkboxes change
 */
function updateGoalsTracking() {
    const selectedGoals = [];
    const goalCheckboxes = document.querySelectorAll('.goal-checkbox:checked');
    
    goalCheckboxes.forEach(checkbox => {
        selectedGoals.push(checkbox.value);
    });
    
    window.leadData.goals = selectedGoals;
    updateLeadScore();
    
    Utils.debugLog('Goals updated', selectedGoals);
}

/**
 * Submit goals and proceed
 */
function submitGoals() {
    const selectedGoals = window.leadData.goals || [];
    
    if (selectedGoals.length === 0) {
        Utils.showNotification('Please select at least one goal', 'warning');
        return;
    }
    
    Utils.trackEvent('goals_submitted', { goals: selectedGoals, count: selectedGoals.length });
    
    // Show goals transition modal
    showGoalsModal(selectedGoals);
}

/**
 * Show goals transition modal
 * @param {Array} selectedGoals - Array of selected goals
 */
function showGoalsModal(selectedGoals) {
    const modal = document.getElementById('goalsTransitionModal');
    const goalsList = document.getElementById('modalGoalsList');
    
    if (goalsList) {
        goalsList.innerHTML = selectedGoals.map(goal => {
            const translation = i18n.t(`goals.${goal}.title`);
            return `<div style="margin: 0.5rem 0; color: #6b46c1; font-weight: 500;">✓ ${translation}</div>`;
        }).join('');
    }
    
    Utils.showModal('goalsTransitionModal');
}

/**
 * Proceed from goals modal
 */
function proceedFromGoalsModal() {
    Utils.hideModal('goalsTransitionModal');
    navigateToStep('registration');
}

/**
 * Track form progress for registration
 */
function trackFormProgress() {
    const formData = Utils.collectFormData('registration');
    Object.assign(window.leadData, formData);
    updateLeadScore();
    
    // Enable/disable submit button based on required fields
    const requiredFields = Config.form.requiredFields.registration || [];
    const isComplete = requiredFields.every(field => formData[field] && formData[field].trim());
    
    // Update button state if needed
    Utils.debugLog('Registration form progress tracked', { formData, isComplete });
}

/**
 * Submit registration form
 */
function submitRegistration() {
    const formData = Utils.collectFormData('registration');
    const validation = Utils.validateForm(formData, 'registration');
    
    if (!validation.isValid) {
        const firstError = Object.keys(validation.errors)[0];
        Utils.showNotification(validation.errors[firstError], 'error');
        
        // Focus on first error field
        const errorField = document.getElementById(firstError);
        if (errorField) errorField.focus();
        return;
    }
    
    Object.assign(window.leadData, formData);
    Utils.trackEvent('registration_completed', formData);
    
    // Show setup intro modal
    showSetupIntroModal();
}

/**
 * Manually trigger phone verification (optional)
 */
function verifyPhoneNumber() {
    if (!window.leadData.phoneNumber) {
        Utils.showNotification('Please enter your phone number first', 'warning');
        const phoneInput = document.getElementById('phoneNumber');
        if (phoneInput) phoneInput.focus();
        return;
    }
    
    // Validate phone number format
    const validation = Utils.validateField('phoneNumber', window.leadData.phoneNumber);
    if (!validation.isValid) {
        Utils.showNotification(validation.message, 'error');
        return;
    }
    
    showOTPVerificationModal();
}

/**
 * Show setup intro modal
 */
function showSetupIntroModal() {
    const modal = document.getElementById('setupIntroModal');
    const goalsList = document.getElementById('modalSetupGoalsList');
    
    if (goalsList && window.leadData.goals) {
        goalsList.innerHTML = window.leadData.goals.map(goal => {
            const translation = i18n.t(`goals.${goal}.title`);
            return `<div style="padding: 0.5rem; background: rgba(34, 197, 94, 0.1); border-radius: 6px; color: #059669; font-weight: 500; font-size: 0.85rem;">🎯 ${translation}</div>`;
        }).join('');
    }
    
    Utils.showModal('setupIntroModal');
}

/**
 * Proceed from setup modal
 */
function proceedFromSetupModal() {
    Utils.hideModal('setupIntroModal');
    
    // Always go to qualifying questions - OTP is optional
    navigateToStep('qualifying-questions');
    
    // Optionally show OTP verification if user wants phone verification
    // This should be triggered by user action, not automatically
}

/**
 * Show OTP verification modal (only when explicitly requested)
 */
function showOTPVerificationModal() {
    // Ensure we have a phone number first
    if (!window.leadData.phoneNumber) {
        Utils.showNotification('Phone number is required for verification', 'error');
        return;
    }
    
    Utils.showModal('otpVerificationModal');
    
    // Clear any existing OTP inputs
    const otpInputs = document.querySelectorAll('.otp-input');
    otpInputs.forEach(input => input.value = '');
    
    // Focus on first OTP input
    const firstOtpInput = document.querySelector('.otp-input');
    if (firstOtpInput) {
        setTimeout(() => firstOtpInput.focus(), 100);
    }
    
    // Reset verify button state
    const verifyBtn = document.getElementById('verifyOtpBtn');
    if (verifyBtn) {
        verifyBtn.disabled = true;
        verifyBtn.style.opacity = '0.5';
    }
    
    Utils.debugLog('OTP verification modal shown');
}

/**
 * Handle OTP input
 * @param {HTMLElement} input - Current input element
 * @param {number} index - Input index
 */
function handleOtpInput(input, index) {
    // Move to next input if current is filled
    if (input.value && index < 3) {
        const nextInput = input.nextElementSibling;
        if (nextInput) nextInput.focus();
    }
    
    // Check if all inputs are filled
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

/**
 * Verify OTP
 */
async function verifyOtp() {
    const otpInputs = document.querySelectorAll('.otp-input');
    const otp = Array.from(otpInputs).map(input => input.value).join('');
    const verifyBtn = document.getElementById('verifyOtpBtn');
    
    if (otp.length !== 4) {
        Utils.showNotification('Please enter complete OTP', 'error');
        return;
    }
    
    Utils.showLoading(verifyBtn, 'Verifying...');
    
    try {
        // Simulate OTP verification (replace with actual API call)
        await Utils.delay(2000);
        
        // For demo purposes, accept any 4-digit OTP
        Utils.hideModal('otpVerificationModal');
        Utils.showNotification('Phone number verified successfully!', 'success');
        Utils.trackEvent('otp_verified', { phone: window.leadData.phoneNumber });
        
        navigateToStep('qualifying-questions');
        
    } catch (error) {
        Utils.showNotification('OTP verification failed. Please try again.', 'error');
        Utils.debugLog('OTP verification error', error, 'error');
    } finally {
        Utils.hideLoading(verifyBtn);
    }
}

/**
 * Update qualifying question data
 */
function updateQualifyingData() {
    const qualifyingData = Utils.collectFormData('qualifying-questions');
    Object.assign(window.leadData, qualifyingData);
    updateLeadScore();
    
    // Check if all questions are answered
    const requiredQuestions = Config.form.requiredFields['qualifying-questions'] || [];
    const isComplete = requiredQuestions.every(question => qualifyingData[question]);
    
    const nextBtn = document.getElementById('qualifyingNextBtn');
    if (nextBtn) {
        if (isComplete) {
            nextBtn.disabled = false;
            nextBtn.style.opacity = '1';
        } else {
            nextBtn.disabled = true;
            nextBtn.style.opacity = '0.5';
        }
    }
    
    Utils.debugLog('Qualifying data updated', qualifyingData);
}

/**
 * Proceed to categories step
 */
function proceedToCategories() {
    const qualifyingData = Utils.collectFormData('qualifying-questions');
    const validation = Utils.validateForm(qualifyingData, 'qualifying-questions');
    
    if (!validation.isValid) {
        Utils.showNotification('Please answer all questions', 'warning');
        return;
    }
    
    Object.assign(window.leadData, qualifyingData);
    Utils.trackEvent('qualifying_completed', qualifyingData);
    
    navigateToStep('categories');
}

/**
 * Load categories data and setup UI
 */
function loadCategoriesData() {
    const container = document.getElementById('categoriesContainer');
    if (!container) return;
    
    // Generate categories UI based on config
    const categories = Config.businessCategories;
    const categoriesHTML = Object.keys(categories).map(key => {
        const category = categories[key];
        return `
            <div class="category-option" data-category="${key}">
                <div class="category-card" onclick="toggleCategory('${key}', this)">
                    <div class="category-icon">${category.icon}</div>
                    <div class="category-content">
                        <h3>${category.name}</h3>
                        <div class="subcategories">
                            ${category.subcategories.map(sub => 
                                `<span class="subcategory" onclick="toggleSubcategory('${key}', '${sub}', this, event)">${sub.replace('-', ' ')}</span>`
                            ).join('')}
                        </div>
                    </div>
                    <div class="category-checkmark">✓</div>
                </div>
            </div>
        `;
    }).join('');
    
    container.innerHTML = categoriesHTML;
    
    // Initialize motivational messages
    initializeMotivationalMessages();
}

/**
 * Toggle category selection
 * @param {string} categoryKey - Category key
 * @param {HTMLElement} element - Category element
 */
function toggleCategory(categoryKey, element) {
    element.classList.toggle('selected');
    updateCategorySelection();
}

/**
 * Toggle subcategory selection
 * @param {string} categoryKey - Category key
 * @param {string} subcategory - Subcategory name
 * @param {HTMLElement} element - Subcategory element
 * @param {Event} event - Click event
 */
function toggleSubcategory(categoryKey, subcategory, element, event) {
    event.stopPropagation();
    element.classList.toggle('selected');
    updateCategorySelection();
}

/**
 * Update category selection summary
 */
function updateCategorySelection() {
    const selectedCategories = document.querySelectorAll('.category-card.selected').length;
    const selectedSubcategories = document.querySelectorAll('.subcategory.selected').length;
    
    // Update summary
    const categoriesCount = document.getElementById('categoriesCount');
    const subcategoriesCount = document.getElementById('subcategoriesCount');
    const summary = document.getElementById('selectionSummary');
    const nextBtn = document.getElementById('categoryNextBtn');
    
    if (categoriesCount) categoriesCount.textContent = selectedCategories;
    if (subcategoriesCount) subcategoriesCount.textContent = selectedSubcategories;
    
    if (summary) {
        if (selectedCategories > 0 || selectedSubcategories > 0) {
            summary.style.display = 'block';
        } else {
            summary.style.display = 'none';
        }
    }
    
    if (nextBtn) {
        if (selectedCategories > 0) {
            nextBtn.disabled = false;
            nextBtn.style.opacity = '1';
        } else {
            nextBtn.disabled = true;
            nextBtn.style.opacity = '0.5';
        }
    }
    
    // Store selection in lead data
    window.leadData.selectedCategories = Array.from(document.querySelectorAll('.category-card.selected')).map(el => 
        el.closest('.category-option').dataset.category
    );
    window.leadData.selectedSubcategories = Array.from(document.querySelectorAll('.subcategory.selected')).map(el => 
        el.textContent.trim()
    );
    
    updateLeadScore();
}

/**
 * Initialize motivational messages
 */
function initializeMotivationalMessages() {
    const messages = [
        '🚀 Over 10,000 businesses launched online this month!',
        '💰 Online businesses earn 5x more revenue!',
        '⚡ Your business can be live in 24 hours!',
        '🎯 Free professional setup available!',
        '📈 Digital presence grows businesses by 300%!'
    ];
    
    let currentIndex = 0;
    const messageContainer = document.getElementById('motivationalMessages');
    
    if (!messageContainer) return;
    
    // Show loading message first
    setTimeout(() => {
        const loadingMsg = messageContainer.querySelector('.loading');
        if (loadingMsg) {
            loadingMsg.classList.remove('active');
        }
        
        // Start rotating messages
        const showMessage = () => {
            messageContainer.innerHTML = `
                <div class="motivational-message active">
                    ${messages[currentIndex]}
                </div>
            `;
            currentIndex = (currentIndex + 1) % messages.length;
        };
        
        showMessage();
        setInterval(showMessage, 4000);
    }, 2000);
}

/**
 * Proceed to products step
 */
function proceedToProducts() {
    if (!window.leadData.selectedCategories || window.leadData.selectedCategories.length === 0) {
        Utils.showNotification('Please select at least one category', 'warning');
        return;
    }
    
    Utils.trackEvent('categories_selected', {
        categories: window.leadData.selectedCategories,
        subcategories: window.leadData.selectedSubcategories
    });
    
    navigateToStep('products');
}

/**
 * Load products data and setup UI
 */
function loadProductsData() {
    // Initialize products based on selected categories
    const selectedCategories = window.leadData.selectedCategories || [];
    let availableProducts = [];
    
    if (selectedCategories.length > 0) {
        selectedCategories.forEach(category => {
            const categoryProducts = Config.getProductsByCategory(category);
            availableProducts = [...availableProducts, ...categoryProducts];
        });
    } else {
        availableProducts = Config.getAllProducts();
    }
    
    // Populate category dropdown for custom products
    populateProductCategoryDropdown();
    
    // Display products
    displayProducts(availableProducts);
    
    // Update products count
    updateProductsCount(availableProducts.length);
    
    Utils.debugLog('Products loaded', { availableProducts: availableProducts.length });
}

/**
 * Switch product mode between select and custom
 * @param {string} mode - 'select' or 'custom'
 */
function switchProductMode(mode) {
    const selectMode = document.getElementById('selectMode');
    const customMode = document.getElementById('customMode');
    const selectorSection = document.getElementById('productSelectorSection');
    const customForm = document.getElementById('customProductForm');
    
    if (mode === 'select') {
        selectMode.classList.add('active');
        customMode.classList.remove('active');
        selectorSection.style.display = 'block';
        customForm.style.display = 'none';
    } else {
        selectMode.classList.remove('active');
        customMode.classList.add('active');
        selectorSection.style.display = 'none';
        customForm.style.display = 'block';
    }
    
    Utils.trackEvent('product_mode_switched', { mode });
}

/**
 * Display products in grid
 * @param {Array} products - Products to display
 */
function displayProducts(products) {
    const grid = document.getElementById('productsGrid');
    if (!grid) return;
    
    if (products.length === 0) {
        grid.innerHTML = '<div class="loading">No products found</div>';
        return;
    }
    
    const productsHTML = products.map(product => `
        <div class="product-card ${window.selectedProducts.has(product.id) ? 'selected' : ''}" 
             data-product-id="${product.id}" 
             onclick="toggleProductSelection(${product.id})">
            <img src="${product.image}" alt="${product.name}" class="product-image" 
                 onerror="this.src='https://via.placeholder.com/200x120?text=Product'">
            <div class="product-category">${product.category}</div>
            <div class="product-name">${product.name}</div>
            <div class="product-price">${Utils.formatCurrency(product.price)}</div>
        </div>
    `).join('');
    
    grid.innerHTML = productsHTML;
    
    // Update selected products display
    updateSelectedProductsDisplay();
}

/**
 * Toggle product selection
 * @param {number} productId - Product ID
 */
function toggleProductSelection(productId) {
    const productCard = document.querySelector(`[data-product-id="${productId}"]`);
    
    if (window.selectedProducts.has(productId)) {
        window.selectedProducts.delete(productId);
        productCard.classList.remove('selected');
    } else {
        window.selectedProducts.add(productId);
        productCard.classList.add('selected');
    }
    
    updateSelectedProductsDisplay();
    updateLeadScore();
    
    Utils.trackEvent('product_toggled', { 
        productId, 
        action: window.selectedProducts.has(productId) ? 'added' : 'removed',
        totalSelected: window.selectedProducts.size
    });
}

/**
 * Update selected products display
 */
function updateSelectedProductsDisplay() {
    const selectedSection = document.getElementById('selectedProductsSection');
    const selectedList = document.getElementById('selectedProductsList');
    const selectedCount = document.getElementById('selectedCount');
    const productCount = document.getElementById('productCount');
    
    const selectedArray = Array.from(window.selectedProducts).map(id => Config.getProductById(id)).filter(Boolean);
    
    if (selectedCount) selectedCount.textContent = selectedArray.length;
    if (productCount) productCount.textContent = selectedArray.length;
    
    if (selectedArray.length > 0) {
        if (selectedSection) selectedSection.style.display = 'block';
        
        if (selectedList) {
            selectedList.innerHTML = selectedArray.map(product => `
                <div class="selected-product-item" style="display: flex; align-items: center; padding: 0.5rem; background: white; border-radius: 8px; margin-bottom: 0.5rem;">
                    <img src="${product.image}" alt="${product.name}" style="width: 40px; height: 40px; border-radius: 4px; object-fit: cover; margin-right: 0.75rem;">
                    <div style="flex: 1;">
                        <div style="font-weight: 500; color: #374151; font-size: 0.875rem;">${product.name}</div>
                        <div style="color: #6b46c1; font-weight: 600; font-size: 0.875rem;">${Utils.formatCurrency(product.price)}</div>
                    </div>
                    <button onclick="toggleProductSelection(${product.id})" style="background: none; border: none; color: #dc2626; cursor: pointer; font-size: 1.2rem;">×</button>
                </div>
            `).join('');
        }
    } else {
        if (selectedSection) selectedSection.style.display = 'none';
    }
}

/**
 * Handle product search
 * @param {Event} event - Input event
 */
function handleProductSearch(event) {
    const searchTerm = event.target.value;
    applyProductFilters();
    Utils.trackEvent('product_search', { query: searchTerm });
}

/**
 * Handle filter changes
 */
function handleFilterChange() {
    applyProductFilters();
}

/**
 * Handle price range changes
 */
function handlePriceRangeChange() {
    const minPrice = document.getElementById('minPrice');
    const maxPrice = document.getElementById('maxPrice');
    const priceDisplay = document.getElementById('priceRangeDisplay');
    
    if (priceDisplay && minPrice && maxPrice) {
        priceDisplay.textContent = `${minPrice.value} - ₹${maxPrice.value}`;
    }
    
    applyProductFilters();
}

/**
 * Apply all product filters
 */
function applyProductFilters() {
    const searchInput = document.getElementById('productSearch');
    const categoryFilter = document.getElementById('categoryFilter');
    const sortBy = document.getElementById('sortBy');
    const minPrice = document.getElementById('minPrice');
    const maxPrice = document.getElementById('maxPrice');
    
    const filters = {
        search: searchInput ? searchInput.value : '',
        category: categoryFilter ? categoryFilter.value : 'all',
        sortBy: sortBy ? sortBy.value : 'name',
        minPrice: minPrice ? parseInt(minPrice.value) || 0 : 0,
        maxPrice: maxPrice ? parseInt(maxPrice.value) || 5000 : 5000
    };
    
    // Get available products
    let availableProducts = [];
    const selectedCategories = window.leadData.selectedCategories || [];
    
    if (selectedCategories.length > 0) {
        selectedCategories.forEach(category => {
            const categoryProducts = Config.getProductsByCategory(category);
            availableProducts = [...availableProducts, ...categoryProducts];
        });
    } else {
        availableProducts = Config.getAllProducts();
    }
    
    // Apply filters
    const filteredProducts = Utils.filterProducts(availableProducts, filters);
    
    // Display filtered products
    displayProducts(filteredProducts);
    updateProductsCount(filteredProducts.length);
}

/**
 * Update products count display
 * @param {number} count - Products count
 */
function updateProductsCount(count) {
    const countElement = document.getElementById('productsCount');
    if (countElement) {
        countElement.textContent = count;
    }
}

/**
 * Select popular products
 */
function selectPopularProducts() {
    const popularProducts = Utils.getPopularProducts(10);
    popularProducts.forEach(product => {
        window.selectedProducts.add(product.id);
    });
    
    // Update UI
    applyProductFilters();
    updateSelectedProductsDisplay();
    
    Utils.showNotification(`${popularProducts.length} popular products selected!`, 'success');
    Utils.trackEvent('popular_products_selected', { count: popularProducts.length });
}

/**
 * Clear all product selections
 */
function clearAllSelections() {
    window.selectedProducts.clear();
    updateSelectedProductsDisplay();
    
    // Update product cards
    document.querySelectorAll('.product-card').forEach(card => {
        card.classList.remove('selected');
    });
    
    Utils.showNotification('All selections cleared', 'info');
    Utils.trackEvent('products_cleared');
}

/**
 * Add custom product
 */
function addCustomProduct() {
    const name = document.getElementById('productName').value.trim();
    const price = document.getElementById('productPrice').value;
    const category = document.getElementById('productCategory').value;
    const subcategory = document.getElementById('productSubcategory').value;
    const description = document.getElementById('productDescription').value.trim();
    const image = document.getElementById('productImage').value.trim();
    
    if (!name || !price || !category) {
        Utils.showNotification('Please fill in required fields (Name, Price, Category)', 'error');
        return;
    }
    
    const customProduct = {
        id: 'custom_' + Utils.generateId(),
        name,
        price: parseInt(price),
        category,
        subcategory: subcategory || category,
        description,
        image: image || 'https://via.placeholder.com/200x120?text=Custom+Product',
        custom: true,
        popularity: 100
    };
    
    // Add to selected products
    window.selectedProducts.add(customProduct.id);
    
    // Store custom product
    if (!window.customProducts) window.customProducts = [];
    window.customProducts.push(customProduct);
    
    // Clear form
    document.getElementById('productName').value = '';
    document.getElementById('productPrice').value = '';
    document.getElementById('productDescription').value = '';
    document.getElementById('productImage').value = '';
    
    // Update display
    updateSelectedProductsDisplay();
    
    Utils.showNotification(`Custom product "${name}" added successfully!`, 'success');
    Utils.trackEvent('custom_product_added', customProduct);
}

/**
 * Populate product category dropdown
 */
function populateProductCategoryDropdown() {
    const categorySelect = document.getElementById('productCategory');
    if (!categorySelect) return;
    
    const selectedCategories = window.leadData.selectedCategories || Object.keys(Config.businessCategories);
    
    categorySelect.innerHTML = '<option value="">Select from your chosen categories</option>' +
        selectedCategories.map(category => {
            const categoryConfig = Config.businessCategories[category];
            return `<option value="${category}">${categoryConfig.name}</option>`;
        }).join('');
    
    // Handle subcategory population
    categorySelect.addEventListener('change', function() {
        const subcategorySelect = document.getElementById('productSubcategory');
        if (!subcategorySelect) return;
        
        const selectedCategory = this.value;
        if (selectedCategory) {
            const categoryConfig = Config.businessCategories[selectedCategory];
            subcategorySelect.innerHTML = '<option value="">Select a subcategory</option>' +
                categoryConfig.subcategories.map(sub => 
                    `<option value="${sub}">${sub.replace('-', ' ')}</option>`
                ).join('');
            subcategorySelect.disabled = false;
        } else {
            subcategorySelect.innerHTML = '<option value="">Select a subcategory</option>';
            subcategorySelect.disabled = true;
        }
    });
}

/**
 * Proceed to themes step
 */
function proceedToThemes() {
    // Store selected products
    window.leadData.products = Array.from(window.selectedProducts);
    window.leadData.customProducts = window.customProducts || [];
    
    Utils.trackEvent('products_selected', {
        productCount: window.selectedProducts.size,
        customCount: (window.customProducts || []).length
    });
    
    navigateToStep('themes');
}

/**
 * Load themes data and setup previews
 */
function loadThemesData() {
    // Generate theme previews with actual products
    Object.keys(Config.themes).forEach(themeKey => {
        generateThemePreview(themeKey);
    });
}

/**
 * Generate theme preview
 * @param {string} themeKey - Theme key
 */
function generateThemePreview(themeKey) {
    const previewElement = document.getElementById(`${themeKey}-preview`);
    if (!previewElement) return;
    
    // Get selected products for preview
    const selectedProductIds = Array.from(window.selectedProducts).slice(0, 3);
    const products = selectedProductIds.map(id => Config.getProductById(id)).filter(Boolean);
    
    if (products.length === 0) {
        previewElement.innerHTML = '<div style="text-align: center; color: #888;">Select products to see preview</div>';
        return;
    }
    
    const theme = Config.themes[themeKey];
    const previewHTML = `
        <div style="display: flex; gap: 5px; align-items: center; justify-content: center; height: 100%; font-size: 10px;">
            ${products.map(product => `
                <div style="text-align: center; color: inherit;">
                    <div style="width: 30px; height: 20px; background: rgba(255,255,255,0.8); border-radius: 3px; margin-bottom: 2px;"></div>
                    <div style="font-size: 8px; font-weight: 500;">${product.name.substring(0, 8)}...</div>
                    <div style="font-size: 7px; opacity: 0.8;">₹${product.price}</div>
                </div>
            `).join('')}
        </div>
    `;
    
    previewElement.innerHTML = previewHTML;
}

/**
 * Select theme
 * @param {string} themeKey - Theme key
 * @param {HTMLElement} element - Theme element
 */
function selectTheme(themeKey, element) {
    // Update UI
    document.querySelectorAll('.theme-option').forEach(option => {
        option.classList.remove('selected');
    });
    element.classList.add('selected');
    
    // Update selected theme display
    const selectedThemeName = document.getElementById('selectedThemeName');
    if (selectedThemeName) {
        const themeName = i18n.t(`themes.${themeKey}.name`);
        selectedThemeName.textContent = themeName;
    }
    
    // Enable next button
    const nextBtn = document.getElementById('themeNextBtn');
    if (nextBtn) {
        nextBtn.disabled = false;
        nextBtn.style.opacity = '1';
    }
    
    // Store selection
    window.leadData.theme = themeKey;
    updateLeadScore();
    
    Utils.trackEvent('theme_selected', { theme: themeKey });
    Utils.debugLog(`Theme selected: ${themeKey}`);
}

/**
 * Complete setup and submit lead
 */
async function completeSetup() {
    if (!window.leadData.theme) {
        Utils.showNotification('Please select a theme', 'warning');
        return;
    }
    
    const completeBtn = document.getElementById('themeNextBtn');
    Utils.showLoading(completeBtn, 'Creating your business...');
    
    try {
        // Compile final lead data
        const finalLeadData = {
            ...window.leadData,
            finalScore: Utils.calculateLeadScore(window.leadData),
            completedAt: Utils.getCurrentTimestamp(),
            sessionId: Utils.generateId()
        };
        
        // Submit lead (mock for demo)
        await Utils.delay(3000);
        
        Utils.trackEvent('setup_completed', finalLeadData);
        Utils.showNotification('🎉 Your business setup is complete! We will contact you soon.', 'success', 5000);
        
        // Clear stored data
        Utils.clearStoredFormData();
        
        // Redirect or show success screen
        setTimeout(() => {
            navigateToStep('welcome');
        }, 3000);
        
    } catch (error) {
        Utils.showNotification('Setup failed. Please try again.', 'error');
        Utils.debugLog('Setup completion error', error, 'error');
    } finally {
        Utils.hideLoading(completeBtn);
    }
}

// ============================================
// FOMO SYSTEM
// ============================================

/**
 * Initialize FOMO notification system
 */
function initializeFOMOSystem() {
    if (!Config.fomo.enabled) return;
    
    // Start FOMO notifications
    showNextFOMONotification();
    window.fomoInterval = setInterval(showNextFOMONotification, Config.fomo.interval);
    
    // Start FOMO counter
    updateFOMOCounter();
    window.fomoCounterInterval = setInterval(updateFOMOCounter, Config.fomo.counterUpdateInterval);
    
    Utils.debugLog('FOMO system initialized');
}

/**
 * Show next FOMO notification
 */
function showNextFOMONotification() {
    const businesses = Config.fomo.businesses;
    const actions = Config.fomo.actions;
    const timeRanges = Config.fomo.timeRanges;
    
    const randomBusiness = businesses[Math.floor(Math.random() * businesses.length)];
    const randomAction = actions[Math.floor(Math.random() * actions.length)];
    const randomTime = timeRanges[Math.floor(Math.random() * timeRanges.length)];
    
    const notification = document.getElementById('fomoNotification');
    const content = document.getElementById('fomoContent');
    const time = document.getElementById('fomoTime');
    
    if (content) {
        content.innerHTML = `
            <span class="business-name">${randomBusiness.name}</span> 
            <span>${i18n.t('fomo.from')}</span> 
            <span class="business-location">${randomBusiness.location}</span> 
            <span>${randomAction}</span>
        `;
    }
    
    if (time) {
        time.innerHTML = `${randomTime} <span>${i18n.t('fomo.time.minutes_ago')}</span>`;
    }
    
    // Show notification with animation
    if (notification) {
        notification.style.display = 'block';
        notification.style.animation = 'slideInUp 0.5s ease-out';
        
        // Hide after 5 seconds
        setTimeout(() => {
            notification.style.animation = 'slideInUp 0.5s ease-out reverse';
            setTimeout(() => {
                notification.style.display = 'none';
            }, 500);
        }, 5000);
    }
}

/**
 * Update FOMO counter
 */
function updateFOMOCounter() {
    const counterNumber = document.getElementById('counterNumber');
    if (!counterNumber) return;
    
    const currentCount = parseInt(counterNumber.textContent) || Config.fomo.baseCounter;
    const increment = Config.fomo.counterIncrement[Math.floor(Math.random() * Config.fomo.counterIncrement.length)];
    const newCount = currentCount + increment;
    
    counterNumber.textContent = newCount;
}

// ============================================
// LEAD SCORE WIDGET
// ============================================

/**
 * Initialize lead score widget
 */
function initializeLeadScoreWidget() {
    updateLeadScore();
    Utils.debugLog('Lead score widget initialized');
}

/**
 * Toggle score details
 */
function toggleScoreDetails() {
    const score = Utils.calculateLeadScore(window.leadData);
    const category = Utils.getLeadScoreCategory(score);
    
    let message = `Your lead score: ${score}/100 (${category.toUpperCase()})`;
    message += '\n\nScore breakdown:';
    message += `\n• Goals: ${window.leadData.goals ? window.leadData.goals.length * 4 : 0}/20`;
    message += `\n• Registration: ${window.leadData.fullName ? 25 : 0}/25`;
    message += `\n• Qualifying: ${window.leadData.budget ? 20 : 0}/30`;
    message += `\n• Categories: ${window.leadData.selectedCategories ? 10 : 0}/10`;
    message += `\n• Products: ${window.selectedProducts.size > 0 ? 10 : 0}/10`;
    message += `\n• Theme: ${window.leadData.theme ? 5 : 0}/5`;
    
    alert(message);
}

// ============================================
// MODAL FUNCTIONS
// ============================================

/**
 * Close modal
 * @param {string} modalId - Modal ID
 */
function closeModal(modalId) {
    Utils.hideModal(modalId);
}

/**
 * Toggle debug panel
 */
function toggleDebugPanel() {
    const panel = document.getElementById('debugPanel');
    if (panel) {
        panel.style.display = panel.style.display === 'none' ? 'block' : 'none';
    }
}

// ============================================
// EVENT HANDLERS
// ============================================

/**
 * Handle page visibility change
 */
function handleVisibilityChange() {
    if (document.hidden) {
        // Page is hidden - pause FOMO notifications
        if (window.fomoInterval) {
            clearInterval(window.fomoInterval);
        }
    } else {
        // Page is visible - resume FOMO notifications
        if (Config.fomo.enabled && !window.fomoInterval) {
            window.fomoInterval = setInterval(showNextFOMONotification, Config.fomo.interval);
        }
    }
}

/**
 * Handle global errors
 * @param {ErrorEvent} event - Error event
 */
function handleGlobalError(event) {
    Utils.debugLog('Global error occurred', {
        message: event.message,
        filename: event.filename,
        lineno: event.lineno,
        colno: event.colno,
        error: event.error
    }, 'error');
    
    Utils.trackEvent('error_occurred', {
        message: event.message,
        filename: event.filename,
        line: event.lineno
    });
}

/**
 * Request followup (help section click)
 */
function requestFollowup() {
    Utils.showNotification('Help request submitted! Our team will contact you soon.', 'success');
    Utils.trackEvent('help_requested', {
        step: window.currentStep,
        score: Utils.calculateLeadScore(window.leadData)
    });
}

// ============================================
// CLEANUP
// ============================================

/**
 * Cleanup intervals on page unload
 */
window.addEventListener('beforeunload', () => {
    if (window.fomoInterval) clearInterval(window.fomoInterval);
    if (window.fomoCounterInterval) clearInterval(window.fomoCounterInterval);
    
    // Save current form data
    autoSaveCurrentStep();
    
    // Flush any pending analytics
    Utils.flushAnalytics();
});

// ============================================
// EXPORT FUNCTIONS FOR GLOBAL ACCESS
// ============================================

// Export key functions for HTML onclick handlers
window.startLeadFlow = startLeadFlow;
window.navigateToStep = navigateToStep;
window.goBack = goBack;
window.selectLanguage = selectLanguage;
window.updateGoalsTracking = updateGoalsTracking;
window.submitGoals = submitGoals;
window.proceedFromGoalsModal = proceedFromGoalsModal;
window.trackFormProgress = trackFormProgress;
window.submitRegistration = submitRegistration;
window.verifyPhoneNumber = verifyPhoneNumber;
window.proceedFromSetupModal = proceedFromSetupModal;
window.handleOtpInput = handleOtpInput;
window.verifyOtp = verifyOtp;
window.updateQualifyingData = updateQualifyingData;
window.proceedToCategories = proceedToCategories;
window.toggleCategory = toggleCategory;
window.toggleSubcategory = toggleSubcategory;
window.proceedToProducts = proceedToProducts;
window.switchProductMode = switchProductMode;
window.toggleProductSelection = toggleProductSelection;
window.selectPopularProducts = selectPopularProducts;
window.clearAllSelections = clearAllSelections;
window.addCustomProduct = addCustomProduct;
window.proceedToThemes = proceedToThemes;
window.selectTheme = selectTheme;
window.completeSetup = completeSetup;
window.closeModal = closeModal;
window.toggleDebugPanel = toggleDebugPanel;
window.toggleScoreDetails = toggleScoreDetails;
window.requestFollowup = requestFollowup;

// Debug functions
window.resetApp = function() {
    Utils.debugLog('🔄 Manual app reset triggered');
    
    // Force clean startup
    forceCleanStartup();
    
    // Reinitialize
    setTimeout(() => {
        initializeApp();
        Utils.showNotification('Application reset successfully', 'success');
    }, 200);
};

window.debugApp = function() {
    console.log('=== TOPIKO DEBUG INFO ===');
    console.log('Current Step:', window.currentStep);
    console.log('Lead Data:', window.leadData);
    console.log('Selected Products:', Array.from(window.selectedProducts));
    console.log('Lead Score:', Utils.calculateLeadScore(window.leadData));
    console.log('Active Screen:', document.querySelector('.screen.active')?.id);
    console.log('Visible Modals:', Array.from(document.querySelectorAll('.modal-overlay')).filter(m => m.style.display !== 'none').map(m => m.id));
    console.log('========================');
};

window.forceWelcome = function() {
    Utils.debugLog('🏠 Force welcome screen');
    forceCleanStartup();
    Utils.showNotification('Forced to welcome screen', 'info');
};

// Emergency reset function - call this in console if app gets stuck
window.emergencyReset = function() {
    console.log('🚨 EMERGENCY RESET');
    
    // Clear everything
    try {
        localStorage.clear();
        sessionStorage.clear();
    } catch (e) {}
    
    // Reset all global variables
    window.leadData = {};
    window.currentStep = 'welcome';
    window.selectedProducts = new Set();
    window.customProducts = [];
    
    // Clear all intervals
    if (window.fomoInterval) clearInterval(window.fomoInterval);
    if (window.fomoCounterInterval) clearInterval(window.fomoCounterInterval);
    
    // Hide everything
    document.querySelectorAll('.modal-overlay').forEach(m => m.style.display = 'none');
    document.querySelectorAll('.screen').forEach(s => {
        s.classList.remove('active');
        s.style.display = 'none';
    });
    
    // Show welcome
    const welcome = document.getElementById('welcome');
    if (welcome) {
        welcome.classList.add('active');
        welcome.style.display = 'block';
    }
    
    // Reload page as last resort
    setTimeout(() => {
        console.log('Reloading page...');
        window.location.reload();
    }, 1000);
};

Utils.debugLog('🎯 Topiko Lead Form Application Ready');

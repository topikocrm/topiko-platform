/* ========================================
   TOPIKO LEAD FORM - SYNTAX ERROR FIXED VERSION
   ======================================== */

// ========================================
// GLOBAL VARIABLES
// ========================================

let selectedOffer = null;

// ========================================
// APPLICATION INITIALIZATION
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    console.log('📱 DOM loaded - starting app');
    initializeApp();
});

function initializeApp() {
    console.log('🚀 Topiko Lead Form initializing');
    
    // Initialize app state
    if (window.TopikoUtils && window.TopikoUtils.initializeTopikoApp) {
        window.TopikoUtils.initializeTopikoApp();
    }
    
    // Initialize widgets and UI
    if (window.TopikoUtils) {
        window.TopikoUtils.updateProgressBar(window.topikoApp?.currentStep || 'welcome');
        window.TopikoUtils.updateBackButton();
    }
    
    console.log('✅ App initialized successfully');
}

// ========================================
// ESSENTIAL FUNCTIONS
// ========================================

// 🆕 CRITICAL: startLeadFlow function
function startLeadFlow() {
    console.log('🚀 Starting lead flow...');
    
    try {
        // Initialize app object if needed
        if (!window.topikoApp) {
            window.topikoApp = {};
        }
        window.topikoApp.leadStartTime = new Date().toISOString();
        
        // Show language selection screen
        if (window.TopikoUtils && window.TopikoUtils.showScreen) {
            window.TopikoUtils.showScreen('language');
        } else {
            // Fallback manual navigation
            document.querySelectorAll('.screen').forEach(screen => {
                screen.classList.remove('active');
            });
            const languageScreen = document.getElementById('language');
            if (languageScreen) {
                languageScreen.classList.add('active');
            }
        }
        
        // Update progress
        if (window.TopikoUtils && window.TopikoUtils.updateProgress) {
            window.TopikoUtils.updateProgress('language');
        }
        
        console.log('✅ Lead flow started successfully');
        
    } catch (error) {
        console.error('❌ startLeadFlow error:', error);
        alert('Starting lead flow...');
    }
}

// ========================================
// LANGUAGE AND GOALS FUNCTIONS
// ========================================

function selectLanguage(lang, element) {
    if (!window.topikoApp) window.topikoApp = {};
    window.topikoApp.selectedLanguage = lang;
    
    document.querySelectorAll('.language-option').forEach(option => {
        option.classList.remove('selected');
    });
    element.classList.add('selected');
    
    if (window.TopikoUtils) {
        window.TopikoUtils.showNotification(`Language: ${lang}`, 'success');
        window.TopikoUtils.calculateLeadScore();
    }
    
    setTimeout(() => {
        if (window.TopikoUtils) {
            window.TopikoUtils.showScreen('goals');
        }
    }, 1500);
}

function updateGoalsTracking() {
    const checkedGoals = document.querySelectorAll('.goal-checkbox:checked');
    if (!window.topikoApp) window.topikoApp = {};
    window.topikoApp.selectedGoals = Array.from(checkedGoals).map(checkbox => checkbox.value);
    
    if (window.TopikoUtils) {
        window.TopikoUtils.addDebugLog(`Goals: ${window.topikoApp.selectedGoals.length} selected`);
        window.TopikoUtils.calculateLeadScore();
    }
}

function showGoalsTransitionModal() {
    if (!window.topikoApp?.selectedGoals || window.topikoApp.selectedGoals.length === 0) {
        if (window.TopikoUtils) {
            window.TopikoUtils.showNotification('Please select at least one goal', 'error');
        }
        return;
    }
    
    if (window.TopikoUtils) {
        window.TopikoUtils.showNotification(`Perfect! ${window.topikoApp.selectedGoals.length} goal(s) selected!`, 'success');
        window.TopikoUtils.calculateLeadScore();
    }
    
    setTimeout(() => {
        displayGoalsTransitionModal();
    }, 1500);
}

function displayGoalsTransitionModal() {
    if (window.TopikoUtils) {
        window.TopikoUtils.showModal('goalsTransitionModal');
    }
}

function proceedFromGoalsModal() {
    if (window.TopikoUtils) {
        window.TopikoUtils.closeModal('goalsTransitionModal');
        setTimeout(() => window.TopikoUtils.showScreen('registration'), 500);
    }
}

// ========================================
// REGISTRATION FUNCTIONS
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
    
    if (!window.topikoApp) window.topikoApp = {};
    window.topikoApp.formProgress = (completedFields / formFields.length) * 100;
    
    // Store names for personalization
    window.topikoApp.userName = document.getElementById('fullName')?.value || '';
    window.topikoApp.businessName = document.getElementById('businessName')?.value || '';
    
    if (window.TopikoUtils) {
        window.TopikoUtils.addDebugLog(`Form progress: ${Math.round(window.topikoApp.formProgress)}%`);
        window.TopikoUtils.calculateLeadScore();
    }
}

function submitRegistration() {
    console.log('📝 Registration submission');
    
    const name = document.getElementById('fullName')?.value.trim();
    const email = document.getElementById('email')?.value.trim();
    const phone = document.getElementById('phoneNumber')?.value.trim();
    const business = document.getElementById('businessName')?.value.trim();
    const type = document.getElementById('businessType')?.value;
    const category = document.getElementById('category')?.value;

    if (!name || !email || !phone || !business || !type || !category) {
        if (window.TopikoUtils) {
            window.TopikoUtils.showNotification('Please fill all required fields', 'error');
        }
        return;
    }

    // Store for personalization
    if (!window.topikoApp) window.topikoApp = {};
    window.topikoApp.userName = name;
    window.topikoApp.businessName = business;

    // Show OTP verification modal
    showOtpModal();
}

function showOtpModal() {
    if (window.TopikoUtils) {
        window.TopikoUtils.showModal('otpVerificationModal');
    }
    
    // Auto-fill with default OTP
    setTimeout(() => {
        const otpInputs = document.querySelectorAll('.otp-input');
        const defaultOtp = '1234';
        otpInputs.forEach((input, index) => {
            if (defaultOtp[index]) {
                input.value = defaultOtp[index];
                input.classList.add('filled');
            }
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

function verifyOtp() {
    const otpInputs = document.querySelectorAll('.otp-input');
    const otp = Array.from(otpInputs).map(input => input.value).join('');
    
    if (otp === '1234') {
        if (window.TopikoUtils) {
            window.TopikoUtils.closeModal('otpVerificationModal');
            window.TopikoUtils.showNotification('✅ Phone verified successfully!', 'success');
        }
        
        completeRegistration();
    } else {
        if (window.TopikoUtils) {
            window.TopikoUtils.showNotification('Invalid OTP. Please try again.', 'error');
        }
    }
}

function completeRegistration() {
    if (window.TopikoUtils) {
        window.TopikoUtils.showNotification('Creating your free account...', 'info');
    }
    
    // Simulate registration success
    setTimeout(() => {
        if (window.TopikoUtils) {
            window.TopikoUtils.showNotification(`🎉 Welcome ${window.topikoApp.userName}! Account created successfully!`, 'success');
        }
        setTimeout(() => {
            displaySetupIntroModal();
        }, 2000);
    }, 1000);
}

function displaySetupIntroModal() {
    if (window.TopikoUtils) {
        window.TopikoUtils.showModal('setupIntroModal');
    }
}

function proceedFromSetupModal() {
    if (window.TopikoUtils) {
        window.TopikoUtils.closeModal('setupIntroModal');
        setTimeout(() => window.TopikoUtils.showScreen('qualifying-questions'), 500);
    }
}

// ========================================
// QUALIFYING QUESTIONS
// ========================================

function updateQualifyingData() {
    if (!window.topikoApp) window.topikoApp = {};
    if (!window.topikoApp.qualifyingAnswers) window.topikoApp.qualifyingAnswers = {};
    
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

function proceedToCategories() {
    if (!window.topikoApp?.qualifyingAnswers || Object.values(window.topikoApp.qualifyingAnswers).some(answer => answer === '')) {
        if (window.TopikoUtils) {
            window.TopikoUtils.showNotification('Please answer all questions', 'error');
        }
        return;
    }
    
    if (window.TopikoUtils) {
        window.TopikoUtils.addDebugLog(`Qualifying complete: ${JSON.stringify(window.topikoApp.qualifyingAnswers)}`);
        window.TopikoUtils.showNotification('Perfect! Moving to categories...', 'success');
        setTimeout(() => window.TopikoUtils.showScreen('categories'), 1000);
    }
}

// ========================================
// CATEGORIES FUNCTIONS
// ========================================

function loadCategories() {
    console.log('Loading categories...');
    // Categories will be loaded by the existing system
}

function toggleCategorySelection(categoryKey) {
    if (!window.topikoApp) window.topikoApp = {};
    if (!window.topikoApp.selectedCategories) window.topikoApp.selectedCategories = [];
    
    if (window.topikoApp.selectedCategories.includes(categoryKey)) {
        window.topikoApp.selectedCategories = window.topikoApp.selectedCategories.filter(cat => cat !== categoryKey);
    } else {
        window.topikoApp.selectedCategories.push(categoryKey);
    }
    
    updateSelectionSummary();
    if (window.TopikoUtils) {
        window.TopikoUtils.calculateLeadScore();
    }
    updateNextButton();
}

function toggleSubcategorySelection(subcategoryKey) {
    if (!window.topikoApp) window.topikoApp = {};
    if (!window.topikoApp.selectedSubcategories) window.topikoApp.selectedSubcategories = [];
    
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
    
    if (!window.topikoApp) return;
    
    const categoriesCount = window.topikoApp.selectedCategories?.length || 0;
    const subcategoriesCount = window.topikoApp.selectedSubcategories?.length || 0;
    
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
    if (nextBtn) {
        if (window.topikoApp?.selectedCategories?.length > 0) {
            nextBtn.disabled = false;
            nextBtn.style.opacity = '1';
        } else {
            nextBtn.disabled = true;
            nextBtn.style.opacity = '0.5';
        }
    }
}

function proceedToProducts() {
    if (!window.topikoApp?.selectedCategories || window.topikoApp.selectedCategories.length === 0) {
        if (window.TopikoUtils) {
            window.TopikoUtils.showNotification('Please select at least one category to continue', 'error');
        }
        return;
    }
    
    if (window.TopikoUtils) {
        window.TopikoUtils.showNotification(`Perfect! Moving to products with ${window.topikoApp.selectedCategories.length} categories selected...`, 'success');
        setTimeout(() => window.TopikoUtils.showScreen('products'), 1000);
    }
}

// ========================================
// PRODUCT FUNCTIONS
// ========================================

function switchProductMode(mode) {
    console.log(`📱 Product mode switched to: ${mode}`);
    
    // Initialize if needed
    if (!window.topikoApp) window.topikoApp = {};
    if (!window.topikoApp.selectedProductIds) window.topikoApp.selectedProductIds = [];
    if (!window.topikoApp.userProducts) window.topikoApp.userProducts = [];
    
    const selectMode = document.getElementById('selectMode');
    const customMode = document.getElementById('customMode');
    const selectorSection = document.getElementById('productSelectorSection');
    const customForm = document.getElementById('customProductForm');
    
    // Update button states
    if (selectMode) selectMode.classList.toggle('active', mode === 'select');
    if (customMode) customMode.classList.toggle('active', mode === 'custom');
    
    // Show/hide sections
    if (mode === 'select') {
        if (selectorSection) selectorSection.style.display = 'block';
        if (customForm) customForm.style.display = 'none';
    } else {
        if (selectorSection) selectorSection.style.display = 'none';
        if (customForm) customForm.style.display = 'block';
    }
}

function toggleProductSelection(productId) {
    if (!window.topikoApp) window.topikoApp = {};
    if (!window.topikoApp.selectedProductIds) window.topikoApp.selectedProductIds = [];
    if (!window.topikoApp.userProducts) window.topikoApp.userProducts = [];
    
    const index = window.topikoApp.selectedProductIds.indexOf(productId);
    
    if (index > -1) {
        // Remove product
        window.topikoApp.selectedProductIds.splice(index, 1);
        window.topikoApp.userProducts = window.topikoApp.userProducts.filter(p => p.id !== productId);
        if (window.TopikoUtils) {
            window.TopikoUtils.showNotification(`Product removed`, 'info');
        }
    } else {
        // Add product
        window.topikoApp.selectedProductIds.push(productId);
        
        const userProduct = {
            id: productId,
            name: `Product ${productId}`,
            price: 299,
            description: 'Selected product',
            isFromDatabase: true,
            createdAt: new Date().toISOString()
        };
        
        window.topikoApp.userProducts.push(userProduct);
        if (window.TopikoUtils) {
            window.TopikoUtils.showNotification(`Product added`, 'success');
        }
    }
    
    if (window.TopikoUtils) {
        window.TopikoUtils.calculateLeadScore();
    }
}

function addCustomProduct() {
    const name = document.getElementById('productName')?.value.trim();
    const price = document.getElementById('productPrice')?.value.trim();
    const description = document.getElementById('productDescription')?.value.trim();
    
    if (!name || !price || !description) {
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
        isCustom: true,
        createdAt: new Date().toISOString()
    };
    
    if (!window.topikoApp) window.topikoApp = {};
    if (!window.topikoApp.userProducts) window.topikoApp.userProducts = [];
    
    window.topikoApp.userProducts.push(product);
    
    // Clear form
    ['productName', 'productPrice', 'productDescription'].forEach(id => {
        const field = document.getElementById(id);
        if (field) field.value = '';
    });
    
    if (window.TopikoUtils) {
        window.TopikoUtils.showNotification(`✅ "${name}" added successfully!`, 'success');
        window.TopikoUtils.calculateLeadScore();
    }
}

// ========================================
// 🔄 API RESTRUCTURING - CHOOSE THEME CALLS ORIGINAL API
// ========================================

async function proceedToThemes() {
    console.log('🎨 Proceeding to themes and calling original API...');
    
    try {
        // Validate that we have products selected
        const selectedProducts = window.topikoApp?.userProducts || [];
        if (selectedProducts.length === 0) {
            if (window.TopikoUtils) {
                window.TopikoUtils.showNotification('Please select at least one product before choosing themes', 'warning');
            }
            return;
        }
        
        // 🔄 MOVED: Call original Topiko API (moved from generatePreviewData)
        const businessData = composePreviewJSON();
        await callTopikoAPI(JSON.stringify(businessData));
        console.log('✅ Original Topiko API called successfully');
        
        // Continue with theme navigation
        if (window.TopikoUtils) {
            window.TopikoUtils.addDebugLog('🎯 Navigating to themes selection...', 'info');
            window.TopikoUtils.showScreen('themes');
            window.TopikoUtils.updateProgress('themes');
        }
        
    } catch (error) {
        console.error(`❌ Failed to proceed to themes: ${error.message}`);
        if (window.TopikoUtils) {
            window.TopikoUtils.showNotification('Failed to save data. Please try again.', 'error');
        }
    }
}

// ========================================
// THEME FUNCTIONS
// ========================================

function selectTheme(themeName, element) {
    if (!window.topikoApp) window.topikoApp = {};
    window.topikoApp.selectedTheme = themeName;
    
    document.querySelectorAll('.theme-option').forEach(option => {
        option.classList.remove('selected');
    });
    
    element.classList.add('selected');
    
    const nextBtn = document.getElementById('themeNextBtn');
    if (nextBtn) {
        nextBtn.disabled = false;
        nextBtn.style.opacity = '1';
    }
    
    if (window.TopikoUtils) {
        window.TopikoUtils.showNotification(`Perfect choice! ${themeName} theme selected!`, 'success');
        window.TopikoUtils.calculateLeadScore();
    }
}

// ========================================
// 🆕 NEW: Helper function to get full theme display names
// ========================================

function getFullThemeName(themeId) {
    const themeDisplayNames = {
        'modern': 'Modern & Minimalist',
        'vibrant': 'Colorful & Vibrant', 
        'professional': 'Professional & Corporate',
        'traditional': 'Traditional & Classic',
        'creative': 'Creative & Artistic',
        'luxury': 'Elegant & Luxury'
    };
    
    return themeDisplayNames[themeId] || 'Modern & Minimalist';
}

// ========================================
// 🆕 NEW: Preview Template API function
// ========================================

async function callPreviewTemplateAPI(subdomainUrl, templateNo) {
    const apiUrl = 'https://topiko.com/demoapis/demo_previewTemplate.php';
    
    const payload = {
        subdomain_url: subdomainUrl,
        template_no: templateNo
    };
    
    console.log(`🎨 Calling Preview Template API: ${apiUrl}`);
    console.log(`📊 Payload: ${JSON.stringify(payload)}`);
    
    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(payload)
        });
        
        const responseData = await response.json();
        
        if (response.ok && responseData.status === 'success') {
            if (window.TopikoUtils) {
                window.TopikoUtils.showNotification(`✅ ${responseData.message}`, 'success');
            }
            console.log('✅ Preview template API successful');
            return true;
        } else {
            throw new Error(responseData.message || `HTTP ${response.status}`);
        }
        
    } catch (error) {
        if (window.TopikoUtils) {
            window.TopikoUtils.showNotification(`⚠️ Preview template update failed: ${error.message}`, 'warning');
        }
        console.error(`❌ Preview template API error: ${error.message}`);
        return false;
    }
}

// ========================================
// 🆕 NEW API - PREVIEW DATA CALLS NEW TEMPLATE API + OPENS WINDOW
// ========================================

async function generatePreviewData() {
    console.log('🔍 Generating preview and calling template API...');
    
    try {
        // Validate required data
        if (!validatePreviewData()) {
            return;
        }
        
        // Get selected theme and subdomain
        const selectedTheme = window.topikoApp?.selectedTheme;
        const businessName = document.getElementById('businessName')?.value.trim();
        const subdomainUrl = generateSubdomainUrl(businessName) + '.topiko.com';
        
        if (!selectedTheme) {
            if (window.TopikoUtils) {
                window.TopikoUtils.showNotification('Please select a theme first', 'error');
            }
            return;
        }
        
        // 🆕 NEW: Get full theme display name for template_no
        const templateNo = getFullThemeName(selectedTheme);
        
        // 🆕 NEW: Call Preview Template API
        const apiSuccess = await callPreviewTemplateAPI(subdomainUrl, templateNo);
        
        // 🆕 NEW: If API call was successful, open subdomain in new window
        if (apiSuccess) {
            const fullSubdomainUrl = `https://${subdomainUrl}`;
            console.log(`🌐 Opening subdomain: ${fullSubdomainUrl}`);
            
            // Open in new window/tab
            window.open(fullSubdomainUrl, '_blank');
            
            if (window.TopikoUtils) {
                window.TopikoUtils.showNotification(`🚀 Template updated! Opening ${subdomainUrl}...`, 'success');
            }
        }
        
        // Always show preview data modal (regardless of API success/failure)
        const previewData = composePreviewJSON();
        showPreviewModal(previewData);
        
        console.log('✅ Preview generation completed');
        
    } catch (error) {
        console.error(`❌ Preview generation failed: ${error.message}`);
        if (window.TopikoUtils) {
            window.TopikoUtils.showNotification('Failed to generate preview. Please try again.', 'error');
        }
    }
}

// ========================================
// PREVIEW DATA FUNCTIONS
// ========================================

function validatePreviewData() {
    const requiredFields = [
        { id: 'fullName', name: 'Full Name' },
        { id: 'email', name: 'Email' },
        { id: 'phoneNumber', name: 'Phone Number' }, 
        { id: 'businessName', name: 'Business Name' },
        { id: 'businessType', name: 'Business Type' },
        { id: 'category', name: 'Business Category' }
    ];
    
    for (const field of requiredFields) {
        const element = document.getElementById(field.id);
        if (!element || !element.value.trim()) {
            if (window.TopikoUtils) {
                window.TopikoUtils.showNotification(`Please fill ${field.name} before preview`, 'error');
            }
            return false;
        }
    }
    
    if (!window.topikoApp?.selectedCategories || window.topikoApp.selectedCategories.length === 0) {
        if (window.TopikoUtils) {
            window.TopikoUtils.showNotification('Please select at least one category before preview', 'error');
        }
        return false;
    }
    
    return true;
}

function composePreviewJSON() {
    const businessName = document.getElementById('businessName')?.value.trim() || '';
    const subdomainUrl = generateSubdomainUrl(businessName);
    
    const previewData = {
        user_name: document.getElementById('fullName')?.value.trim() || '',
        user_phone: document.getElementById('phoneNumber')?.value.trim() || '',
        user_email: document.getElementById('email')?.value.trim() || '',
        business_name: businessName,
        business_type: document.getElementById('businessType')?.value || '',
        business_address: document.getElementById('address')?.value.trim() || '',
        business_category: document.getElementById('category')?.value || '',
        subdomain_url: subdomainUrl,
        selected_category_name: window.topikoApp?.selectedCategories || [],
        selected_subcategoryname: [],
        selected_products: window.topikoApp?.userProducts || [],
        selected_goals: window.topikoApp?.selectedGoals || [],
        selected_language: window.topikoApp?.selectedLanguage || 'en',
        selected_theme: window.topikoApp?.selectedTheme || null,
        qualifying_answers: window.topikoApp?.qualifyingAnswers || {}
    };
    
    return previewData;
}

function generateSubdomainUrl(businessName) {
    if (!businessName) return "";
    
    return businessName
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .replace(/^-|-$/g, '');
}

function showPreviewModal(previewData) {
    const jsonString = JSON.stringify(previewData, null, 2);
    
    const modalHTML = `
        <div class="modal-overlay show" id="previewModal">
            <div class="modal-content" style="max-width: 800px; max-height: 90vh;">
                <button class="modal-close" onclick="closePreviewModal()">×</button>
                <h3 style="color: #6b46c1; margin-bottom: 1rem;">🔍 Preview Data - JSON Format</h3>
                
                <div style="background: #f8fafc; border: 2px solid #e2e8f0; border-radius: 8px; padding: 1rem; margin-bottom: 1rem; max-height: 400px; overflow-y: auto;">
                    <pre style="margin: 0; font-size: 0.8rem; line-height: 1.4; white-space: pre-wrap;">${escapeHtml(jsonString)}</pre>
                </div>
                
                <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
                    <button onclick="copyToClipboard('${escapeForAttribute(jsonString)}')" style="background: #10b981; color: white; padding: 0.75rem 1rem; border: none; border-radius: 8px; cursor: pointer;">
                        📋 Copy to Clipboard
                    </button>
                    <button onclick="downloadJSON('${escapeForAttribute(jsonString)}')" style="background: #6366f1; color: white; padding: 0.75rem 1rem; border: none; border-radius: 8px; cursor: pointer;">
                        💾 Download JSON
                    </button>
                </div>
            </div>
        </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', modalHTML);
}

function closePreviewModal() {
    const modal = document.getElementById('previewModal');
    if (modal) {
        modal.remove();
    }
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

function escapeForAttribute(text) {
    return text.replace(/'/g, "\\'").replace(/"/g, '\\"');
}

function copyToClipboard(jsonString) {
    navigator.clipboard.writeText(jsonString).then(() => {
        if (window.TopikoUtils) {
            window.TopikoUtils.showNotification('✅ JSON copied to clipboard!', 'success');
        }
    }).catch(() => {
        if (window.TopikoUtils) {
            window.TopikoUtils.showNotification('❌ Failed to copy to clipboard', 'error');
        }
    });
}

function downloadJSON(jsonString) {
    const businessName = document.getElementById('businessName')?.value.trim() || 'business';
    const filename = `${businessName.toLowerCase().replace(/[^a-z0-9]/g, '-')}-preview-data.json`;
    
    const blob = new Blob([jsonString], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    if (window.TopikoUtils) {
        window.TopikoUtils.showNotification(`💾 JSON downloaded as ${filename}`, 'success');
    }
}

// Original Topiko API function
async function callTopikoAPI(jsonString) {
    const apiUrl = 'https://topiko.com/demoapis/demo_insertDemoData.php';
    
    console.log(`🚀 Calling API: ${apiUrl}`);
    
    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: jsonString
        });
        
        const responseText = await response.text();
        
        if (response.ok) {
            if (window.TopikoUtils) {
                window.TopikoUtils.showNotification('✅ API call successful!', 'success');
            }
            console.log('✅ API call completed successfully');
        } else {
            throw new Error(`HTTP ${response.status}`);
        }
        
    } catch (error) {
        if (window.TopikoUtils) {
            window.TopikoUtils.showNotification(`⚠️ API call failed: ${error.message}`, 'warning');
        }
        console.error('API Call Error:', error);
    }
}

// ========================================
// 🔄 COMPLETE SETUP - NO API CALLS
// ========================================

async function completeSetup() {
    console.log('🎉 Completing setup...');
    
    if (!window.topikoApp) window.topikoApp = {};
    
    const leadData = {
        id: Date.now(),
        timestamp: new Date().toISOString(),
        userName: window.topikoApp.userName,
        businessName: window.topikoApp.businessName,
        selectedGoals: window.topikoApp.selectedGoals,
        selectedCategories: window.topikoApp.selectedCategories,
        selectedProducts: window.topikoApp.userProducts,
        selectedTheme: window.topikoApp.selectedTheme,
        qualifyingData: window.topikoApp.qualifyingAnswers,
        status: 'completed'
    };
    
    // Save locally as backup
    try {
        const existingLeads = JSON.parse(localStorage.getItem('topiko_local_leads') || '[]');
        existingLeads.push(leadData);
        localStorage.setItem('topiko_local_leads', JSON.stringify(leadData));
    } catch (error) {
        console.warn('Failed to save to localStorage:', error);
    }
    
    if (window.TopikoUtils) {
        window.TopikoUtils.showNotification(`🎉 Congratulations ${window.topikoApp.userName}! Your business is ready for final touches!`, 'success');
        
        setTimeout(() => {
            window.TopikoUtils.showScreen('completion');
            setTimeout(() => {
                initializeCompletionScreen();
            }, 500);
        }, 2000);
    }
}

// ========================================
// COMPLETION SCREEN FUNCTIONS
// ========================================

function initializeCompletionScreen() {
    console.log('🎉 Initializing completion screen...');
    
    const completionBusinessName = document.getElementById('completionBusinessName');
    if (completionBusinessName && window.topikoApp?.businessName) {
        completionBusinessName.textContent = window.topikoApp.businessName;
    }
    
    selectedOffer = null;
    console.log('✅ Completion screen initialized');
}

function openCallScheduler() {
    if (window.TopikoUtils) {
        window.TopikoUtils.showModal('dateTimeModal');
    }
    console.log('📅 Call scheduler opened');
}

function openExploreForm() {
    if (window.TopikoUtils) {
        window.TopikoUtils.showModal('reasonModal');
    }
    console.log('💭 Explore form opened');
}

function selectOffer(offerId, element) {
    document.querySelectorAll('.special-offer-item').forEach(item => {
        item.classList.remove('selected');
    });
    
    element.classList.add('selected');
    selectedOffer = { id: offerId, title: element.textContent };
    
    console.log(`🎁 Offer selected: ${selectedOffer.title}`);
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
    console.log(`⏰ Time slot selected: ${slotId}`);
}

function confirmScheduleAndComplete() {
    if (window.TopikoUtils) {
        window.TopikoUtils.closeModal('dateTimeModal');
        window.TopikoUtils.showNotification('🎉 Perfect! Call scheduled successfully.', 'success');
    }
    console.log('✅ Call scheduled successfully');
}

function selectReason(reasonType, element) {
    document.querySelectorAll('.reason-option').forEach(opt => opt.classList.remove('selected'));
    element.classList.add('selected');
    window.selectedReason = reasonType;
    console.log(`💭 Reason selected: ${reasonType}`);
}

function submitReasonAndComplete() {
    if (window.TopikoUtils) {
        window.TopikoUtils.closeModal('reasonModal');
        window.TopikoUtils.showNotification('🚀 Thank you for your feedback!', 'success');
    }
    console.log('✅ Exploration form submitted');
}

// ========================================
// UTILITY FUNCTIONS
// ========================================

function goBack() {
    if (window.TopikoUtils && window.TopikoUtils.goBack) {
        window.TopikoUtils.goBack();
    }
}

function navigateToStep(step) {
    if (window.TopikoUtils && window.TopikoUtils.showScreen) {
        window.TopikoUtils.showScreen(step);
    }
}

function toggleScoreDetails() {
    if (window.TopikoUtils && window.TopikoUtils.toggleScoreDetails) {
        window.TopikoUtils.toggleScoreDetails();
    }
}

function toggleDebugPanel() {
    if (window.TopikoUtils && window.TopikoUtils.toggleDebugPanel) {
        window.TopikoUtils.toggleDebugPanel();
    }
}

// ========================================
// 🚨 EMERGENCY GLOBAL ASSIGNMENTS - FIXES REFERENCE ERRORS
// ========================================

// Make ALL functions immediately available globally 
window.startLeadFlow = startLeadFlow;
window.selectLanguage = selectLanguage;
window.updateGoalsTracking = updateGoalsTracking;
window.showGoalsTransitionModal = showGoalsTransitionModal;
window.displayGoalsTransitionModal = displayGoalsTransitionModal;
window.proceedFromGoalsModal = proceedFromGoalsModal;
window.trackFormProgress = trackFormProgress;
window.submitRegistration = submitRegistration;
window.showOtpModal = showOtpModal;
window.handleOtpInput = handleOtpInput;
window.verifyOtp = verifyOtp;
window.completeRegistration = completeRegistration;
window.displaySetupIntroModal = displaySetupIntroModal;
window.proceedFromSetupModal = proceedFromSetupModal;
window.updateQualifyingData = updateQualifyingData;
window.proceedToCategories = proceedToCategories;
window.loadCategories = loadCategories;
window.toggleCategorySelection = toggleCategorySelection;
window.toggleSubcategorySelection = toggleSubcategorySelection;
window.updateSelectionSummary = updateSelectionSummary;
window.updateNextButton = updateNextButton;
window.proceedToProducts = proceedToProducts;
window.switchProductMode = switchProductMode;
window.toggleProductSelection = toggleProductSelection;
window.addCustomProduct = addCustomProduct;
window.proceedToThemes = proceedToThemes;
window.selectTheme = selectTheme;
window.getFullThemeName = getFullThemeName;
window.callPreviewTemplateAPI = callPreviewTemplateAPI;
window.generatePreviewData = generatePreviewData;
window.validatePreviewData = validatePreviewData;
window.composePreviewJSON = composePreviewJSON;
window.generateSubdomainUrl = generateSubdomainUrl;
window.showPreviewModal = showPreviewModal;
window.closePreviewModal = closePreviewModal;
window.escapeHtml = escapeHtml;
window.escapeForAttribute = escapeForAttribute;
window.copyToClipboard = copyToClipboard;
window.downloadJSON = downloadJSON;
window.callTopikoAPI = callTopikoAPI;
window.completeSetup = completeSetup;
window.initializeCompletionScreen = initializeCompletionScreen;
window.openCallScheduler = openCallScheduler;
window.openExploreForm = openExploreForm;
window.selectOffer = selectOffer;
window.selectTimeSlot = selectTimeSlot;
window.confirmScheduleAndComplete = confirmScheduleAndComplete;
window.selectReason = selectReason;
window.submitReasonAndComplete = submitReasonAndComplete;
window.goBack = goBack;
window.navigateToStep = navigateToStep;
window.toggleScoreDetails = toggleScoreDetails;
window.toggleDebugPanel = toggleDebugPanel;

// ========================================
// FINAL VERIFICATION
// ========================================

console.log('🔧 SYNTAX ERROR FIXED VERSION LOADED');
console.log('✅ startLeadFlow function available:', typeof window.startLeadFlow);
console.log('✅ All functions globally assigned immediately');
console.log('🚀 Ready to test - syntax errors resolved!');
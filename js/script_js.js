/* ========================================
   TOPIKO LEAD FORM - MAIN APPLICATION LOGIC
   ======================================== */

// ========================================
// APPLICATION INITIALIZATION
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    window.TopikoUtils.addDebugLog('📱 DOM loaded - starting enhanced app');
    initializeApp();
    
    // Auto-save session data every 30 seconds
    setInterval(() => {
        window.TopikoUtils.saveSessionData();
    }, 30000);
});

function initializeApp() {
    window.TopikoUtils.addDebugLog('🚀 Enhanced Topiko Lead Form initializing', 'info');
    
    // Initialize app state
    window.TopikoUtils.initializeTopikoApp();
    
    // Initialize widgets and UI
    window.TopikoUtils.updateLeadScoreWidget();
    window.TopikoUtils.updateProgressBar(window.topikoApp.currentStep);
    window.TopikoUtils.updateBackButton();
    
    // Start FOMO system after delay
    setTimeout(() => window.TopikoUtils.startFomoSystem(), 3000);
    
    window.TopikoUtils.addDebugLog('✅ Enhanced app initialized successfully', 'success');
}

// Save data on page unload
window.addEventListener('beforeunload', function(e) {
    window.TopikoUtils.saveSessionData();
    
    // Clean up intervals
    window.TopikoUtils.stopMotivationalMessages();
});

// ========================================
// LEAD FLOW FUNCTIONS
// ========================================

function startLeadFlow() {
    window.TopikoUtils.addDebugLog('🚀 Lead flow started');
    window.TopikoUtils.showScreen('language');
}

function selectLanguage(lang, element) {
    window.topikoApp.selectedLanguage = lang;
    
    document.querySelectorAll('.language-option').forEach(option => {
        option.classList.remove('selected');
    });
    element.classList.add('selected');
    
    const languageNames = window.TopikoConfig.LANGUAGE_CONFIG;
    window.TopikoUtils.showNotification(`Language: ${languageNames[lang]}`, 'success');
    window.TopikoUtils.calculateLeadScore();
    
    setTimeout(() => window.TopikoUtils.showScreen('goals'), 1500);
}

function updateGoalsTracking() {
    const checkedGoals = document.querySelectorAll('.goal-checkbox:checked');
    window.topikoApp.selectedGoals = Array.from(checkedGoals).map(checkbox => checkbox.value);
    window.TopikoUtils.addDebugLog(`Goals: ${window.topikoApp.selectedGoals.length} selected`);
    window.TopikoUtils.calculateLeadScore();
}

function submitGoals() {
    if (window.topikoApp.selectedGoals.length === 0) {
        window.TopikoUtils.showNotification('Please select at least one goal', 'error');
        return;
    }
    
    window.TopikoUtils.showNotification(`Perfect! ${window.topikoApp.selectedGoals.length} goal${window.topikoApp.selectedGoals.length > 1 ? 's' : ''} selected!`, 'success');
    window.TopikoUtils.calculateLeadScore();
    
    setTimeout(() => {
        displayGoalsTransitionModal();
    }, 1500);
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
    
    window.topikoApp.formProgress = (completedFields / formFields.length) * 100;
    
    // Store names for personalization
    window.topikoApp.userName = document.getElementById('fullName')?.value || '';
    window.topikoApp.businessName = document.getElementById('businessName')?.value || '';
    
    window.TopikoUtils.addDebugLog(`Form progress: ${Math.round(window.topikoApp.formProgress)}%`);
    window.TopikoUtils.calculateLeadScore();
}

async function submitRegistration() {
    window.TopikoUtils.addDebugLog('📝 Registration submission');
    
    const name = document.getElementById('fullName').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phoneNumber').value.trim();
    const business = document.getElementById('businessName').value.trim();
    const address = document.getElementById('address').value.trim();
    const type = document.getElementById('businessType').value;
    const category = document.getElementById('category').value;

    if (!name || !phone || !business || !type || !category) {
        window.TopikoUtils.showNotification('Please fill all required fields', 'error');
        return;
    }

    // Store for personalization
    window.topikoApp.userName = name;
    window.topikoApp.businessName = business;

    // Show OTP verification modal
    showOtpModal();
}

// ========================================
// OTP VERIFICATION FUNCTIONS
// ========================================

function showOtpModal() {
    window.TopikoUtils.showModal('otpVerificationModal');
    // Auto-fill with default OTP
    setTimeout(() => {
        const otpInputs = document.querySelectorAll('.otp-input');
        const defaultOtp = window.TopikoConfig.DEFAULTS.OTP_DEFAULT;
        otpInputs.forEach((input, index) => {
            input.value = defaultOtp[index];
            input.classList.add('filled');
        });
    }, 500);
}

function handleOtpInput(input, index) {
    if (input.value) {
        input.classList.add('filled');
        // Move to next input
        const nextInput = input.nextElementSibling;
        if (nextInput) {
            nextInput.focus();
        }
    } else {
        input.classList.remove('filled');
    }
    
    // Check if all inputs are filled
    const otpInputs = document.querySelectorAll('.otp-input');
    const otp = Array.from(otpInputs).map(input => input.value).join('');
    const verifyBtn = document.getElementById('verifyOtpBtn');
    
    if (otp.length === 4) {
        verifyBtn.disabled = false;
        verifyBtn.style.opacity = '1';
    } else {
        verifyBtn.disabled = true;
        verifyBtn.style.opacity = '0.5';
    }
}

async function verifyOtp() {
    const otpInputs = document.querySelectorAll('.otp-input');
    const otp = Array.from(otpInputs).map(input => input.value).join('');
    
    if (otp === window.TopikoConfig.DEFAULTS.OTP_DEFAULT) {
        window.TopikoUtils.closeModal('otpVerificationModal');
        window.TopikoUtils.showNotification('✅ Phone verified successfully!', 'success');
        
        // Proceed with actual registration
        await completeRegistration();
    } else {
        window.TopikoUtils.showNotification('Invalid OTP. Please try again.', 'error');
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

    window.TopikoUtils.showNotification('Creating your free account...', 'info');
    
    const userData = {
        name, 
        email: email || null, // Allow empty email
        phone,
        business_name: business,
        business_type: type,
        business_category: category,
        address: address || null,
        selected_language: window.topikoApp.selectedLanguage,
        selected_goals: window.topikoApp.selectedGoals,
        created_at: new Date().toISOString()
    };

    const userResult = await window.TopikoUtils.saveToSupabase(userData, 'users');
    
    if (userResult.success && userResult.data && userResult.data.length > 0) {
        window.topikoApp.currentUserId = userResult.data[0].id;
        window.TopikoUtils.addDebugLog(`✅ User created: ${window.topikoApp.currentUserId}`, 'success');
        
        const leadData = {
            user_id: window.topikoApp.currentUserId,
            lead_score: window.topikoApp.leadScore,
            lead_quality: window.topikoApp.leadScore >= 70 ? 'Hot' : window.topikoApp.leadScore >= 40 ? 'Warm' : 'Cold',
            session_duration_minutes: Math.round((Date.now() - window.topikoApp.sessionStartTime) / 60000),
            page_views: window.topikoApp.pageViews,
            selected_goals: window.topikoApp.selectedGoals,
            lead_status: 'New'
        };
        
        await window.TopikoUtils.saveToSupabase(leadData, 'lead_intelligence');
        
        window.TopikoUtils.showNotification(`🎉 Welcome ${name}! Account created successfully!`, 'success');
        setTimeout(() => {
            displaySetupIntroModal();
        }, 2000);
    } else {
        window.TopikoUtils.showNotification('❌ Registration failed. Please try again.', 'error');
    }
}

// ========================================
// QUALIFYING QUESTIONS FUNCTIONS
// ========================================

function updateQualifyingData() {
    window.topikoApp.qualifyingAnswers.online_presence = document.querySelector('input[name="online_presence"]:checked')?.value || '';
    window.topikoApp.qualifyingAnswers.budget = document.querySelector('input[name="budget"]:checked')?.value || '';
    window.topikoApp.qualifyingAnswers.decision_maker = document.querySelector('input[name="decision_maker"]:checked')?.value || '';  
    window.topikoApp.qualifyingAnswers.timeline = document.querySelector('input[name="timeline"]:checked')?.value || '';
    
    window.TopikoUtils.calculateLeadScore();
    
    const allAnswered = Object.values(window.topikoApp.qualifyingAnswers).every(answer => answer !== '');
    const nextBtn = document.getElementById('qualifyingNextBtn');
    
    if (allAnswered) {
        nextBtn.disabled = false;
        nextBtn.style.opacity = '1';
    } else {
        nextBtn.disabled = true;
        nextBtn.style.opacity = '0.5';
    }
}

async function proceedToCategories() {
    if (Object.values(window.topikoApp.qualifyingAnswers).some(answer => answer === '')) {
        window.TopikoUtils.showNotification('Please answer all questions', 'error');
        return;
    }
    
    window.TopikoUtils.addDebugLog(`Qualifying complete: ${JSON.stringify(window.topikoApp.qualifyingAnswers)}`);
    window.TopikoUtils.showNotification('Perfect! Moving to categories...', 'success');
    setTimeout(() => window.TopikoUtils.showScreen('categories'), 1000);
}

// ========================================
// CATEGORIES FUNCTIONS
// ========================================

function loadCategories() {
    const businessCategory = document.getElementById('category')?.value;
    const categoriesContainer = document.getElementById('categoriesContainer');
    
    if (!categoriesContainer) return;
    
    if (!businessCategory || !window.TopikoConfig.BUSINESS_CATEGORIES[businessCategory]) {
        categoriesContainer.innerHTML = '<p style="text-align: center; color: #64748b;">Loading categories...</p>';
        
        // Fix mobile issue - retry after short delay
        setTimeout(() => {
            const retryCategory = document.getElementById('category')?.value;
            if (retryCategory && window.TopikoConfig.BUSINESS_CATEGORIES[retryCategory]) {
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
    const categoryData = window.TopikoConfig.BUSINESS_CATEGORIES[businessCategory];
    
    let categoriesHTML = `
        <div class="category-section">
            <h3><span style="margin-right: 0.5rem;">${categoryData.icon}</span>${categoryData.name} Categories</h3>
            <p style="color: #553c9a; margin-bottom: 1.5rem; font-size: 0.9rem;">Select categories that apply to your business (this helps us create your perfect online store):</p>
            
            <div class="category-grid">
    `;
    
    Object.keys(categoryData.categories).forEach(categoryKey => {
        const category = categoryData.categories[categoryKey];
        const isSelected = window.topikoApp.selectedCategories.includes(categoryKey);
        
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
            const subcategoryName = window.TopikoConfig.SUBCATEGORY_NAMES[subcategoryKey] || subcategoryKey.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase());
            const isSubSelected = window.topikoApp.selectedSubcategories.includes(subcategoryKey);
            
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
    if (window.topikoApp.selectedCategories.includes(categoryKey)) {
        window.topikoApp.selectedCategories = window.topikoApp.selectedCategories.filter(cat => cat !== categoryKey);
    } else {
        window.topikoApp.selectedCategories.push(categoryKey);
    }
    
    updateSelectionSummary();
    updateProductCategoriesDropdown();
    window.TopikoUtils.calculateLeadScore();
    updateNextButton();
}

function toggleSubcategorySelection(subcategoryKey) {
    if (window.topikoApp.selectedSubcategories.includes(subcategoryKey)) {
        window.topikoApp.selectedSubcategories = window.topikoApp.selectedSubcategories.filter(sub => sub !== subcategoryKey);
    } else {
        window.topikoApp.selectedSubcategories.push(subcategoryKey);
    }
    
    updateSelectionSummary();
    window.TopikoUtils.calculateLeadScore();
}

function updateSelectionSummary() {
    const summaryEl = document.getElementById('selectionSummary');
    const categoriesCountEl = document.getElementById('categoriesCount');
    const subcategoriesCountEl = document.getElementById('subcategoriesCount');
    
    if (window.topikoApp.selectedCategories.length > 0 || window.topikoApp.selectedSubcategories.length > 0) {
        summaryEl.style.display = 'block';
        categoriesCountEl.textContent = window.topikoApp.selectedCategories.length;
        subcategoriesCountEl.textContent = window.topikoApp.selectedSubcategories.length;
    } else {
        summaryEl.style.display = 'none';
    }
}

function updateNextButton() {
    const nextBtn = document.getElementById('categoryNextBtn');
    if (window.topikoApp.selectedCategories.length > 0) {
        nextBtn.disabled = false;
        nextBtn.style.opacity = '1';
    } else {
        nextBtn.disabled = true;
        nextBtn.style.opacity = '0.5';
    }
}

function updateProductCategoriesDropdown() {
    const productCategorySelect = document.getElementById('productCategory');
    const productSubcategorySelect = document.getElementById('productSubcategory');
    
    if (!productCategorySelect || !productSubcategorySelect) return;
    
    // Clear existing options
    productCategorySelect.innerHTML = '<option value="">Select from your chosen categories</option>';
    productSubcategorySelect.innerHTML = '<option value="">Select a subcategory</option>';
    
    const businessCategory = document.getElementById('category')?.value;
    const selectedCategories = window.topikoApp.selectedCategories;
    
    if (!businessCategory || !window.TopikoConfig.BUSINESS_CATEGORIES[businessCategory]) return;
    
    const categoryData = window.TopikoConfig.BUSINESS_CATEGORIES[businessCategory];
    
    // Only show selected categories in dropdown
    selectedCategories.forEach(categoryKey => {
        const category = categoryData.categories[categoryKey];
        if (category) {
            productCategorySelect.innerHTML += `<option value="${categoryKey}">${category.name}</option>`;
        }
    });
    
    // Update subcategory dropdown based on selection
    productCategorySelect.onchange = function() {
        const selectedCat = this.value;
        productSubcategorySelect.innerHTML = '<option value="">Select a subcategory</option>';
        
        if (selectedCat && categoryData.categories[selectedCat]) {
            const category = categoryData.categories[selectedCat];
            
            // Only show subcategories that were selected in previous screen
            const selectedSubcategories = window.topikoApp.selectedSubcategories;
            
            category.subcategories.forEach(subcategoryKey => {
                // Only add if this subcategory was selected
                if (selectedSubcategories.includes(subcategoryKey)) {
                    const subcategoryName = window.TopikoConfig.SUBCATEGORY_NAMES[subcategoryKey] || 
                        subcategoryKey.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase());
                    productSubcategorySelect.innerHTML += `<option value="${subcategoryKey}">${subcategoryName}</option>`;
                }
            });
        }
    };
}

async function proceedToProducts() {
    if (window.topikoApp.selectedCategories.length === 0) {
        window.TopikoUtils.showNotification('Please select at least one category to continue', 'error');
        return;
    }
    
    window.TopikoUtils.showNotification(`Perfect! Moving to products with ${window.topikoApp.selectedCategories.length} categories selected...`, 'success');
    setTimeout(() => window.TopikoUtils.showScreen('products'), 1000);
}

// ========================================
// PRODUCT FUNCTIONS - SIMPLIFIED
// ========================================

async function addCustomProduct() {
    const name = document.getElementById('productName').value.trim();
    const price = document.getElementById('productPrice').value.trim();
    const description = document.getElementById('productDescription').value.trim();
    const categoryKey = document.getElementById('productCategory').value;
    const subcategoryKey = document.getElementById('productSubcategory').value;
    const imageUrl = document.getElementById('productImage').value.trim();
    
    if (!name || !price || !description || !categoryKey) {
        window.TopikoUtils.showNotification('Please fill all required fields', 'error');
        return;
    }
    
    if (isNaN(price) || price <= 0) {
        window.TopikoUtils.showNotification('Please enter a valid price', 'error');
        return;
    }
    
    const product = {
        id: 'custom-' + Date.now(), // Custom ID
        name, 
        price: parseFloat(price), 
        description, 
        categoryKey,
        subcategoryKey: subcategoryKey || null,
        imageUrl: imageUrl || window.TopikoUtils.getDefaultProductImage(),
        isFromDatabase: false,
        isCustom: true,
        createdAt: new Date().toISOString()
    };
    
    window.topikoApp.userProducts.push(product);
    
    // Save to database if user ID exists
    if (window.topikoApp.currentUserId) {
        const productDbData = {
            user_id: window.topikoApp.currentUserId, 
            name, 
            price: parseFloat(price), 
            description,
            category_key: categoryKey, 
            subcategory_key: subcategoryKey || null,
            image_url: imageUrl || null,
            is_custom: true
        };
        
        await window.TopikoUtils.saveToSupabase(productDbData, 'products');
    }
    
    // Clear form
    ['productName', 'productPrice', 'productDescription', 'productCategory', 'productSubcategory', 'productImage'].forEach(id => {
        const field = document.getElementById(id);
        if (field) field.value = '';
    });
    
    window.TopikoUtils.showNotification(`✅ "${name}" added successfully!`, 'success');
    window.TopikoUtils.displayProducts();
    window.TopikoUtils.calculateLeadScore();
    
    window.TopikoUtils.addDebugLog(`➕ Custom product added: ${name}`);
}

async function requestFollowup() {
    if (!window.topikoApp.currentUserId) {
        window.TopikoUtils.showNotification('Please complete registration first', 'warning');
        return;
    }

    const followupData = {
        user_id: window.topikoApp.currentUserId,
        requested_followup: true,
        followup_type: 'free_setup_help',
        requested_at: new Date().toISOString(),
        lead_status: 'Requested Followup'
    };

    const result = await window.TopikoUtils.saveToSupabase(followupData, 'followup_requests');
    
    if (result.success) {
        window.TopikoUtils.showNotification('🎯 Great! Our team will contact you within 2 hours for free setup assistance!', 'success');
        window.topikoApp.helpClaimedCount++;
        window.TopikoUtils.updateProductsHelpSection();
        window.TopikoUtils.addDebugLog('✅ Followup requested successfully', 'success');
        
        // Update help section text
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
        window.TopikoUtils.showNotification('❌ Failed to request help. Please try again.', 'error');
    }
}

function proceedToThemes() {
    if (window.topikoApp.userProducts.length === 0) {
        window.TopikoUtils.showNotification('Add at least one product to see how your store will look!', 'warning');
        return;
    }
    
    window.TopikoUtils.showNotification('Excellent! Loading beautiful themes for your store...', 'success');
    setTimeout(() => {
        window.TopikoUtils.showScreen('themes');
        window.TopikoUtils.populateThemePreviews();
    }, 1000);
}

// ========================================
// THEMES FUNCTIONS
// ========================================

function selectTheme(themeName, element) {
    window.topikoApp.selectedTheme = themeName;
    
    document.querySelectorAll('.theme-option').forEach(option => {
        option.classList.remove('selected');
    });
    
    element.classList.add('selected');
    
    const themeNames = window.TopikoConfig.THEME_CONFIG;
    
    document.getElementById('selectedThemeName').textContent = themeNames[themeName].name;
    
    const nextBtn = document.getElementById('themeNextBtn');
    nextBtn.disabled = false;
    nextBtn.style.opacity = '1';
    
    window.TopikoUtils.showNotification(`Perfect choice! ${themeNames[themeName].name} theme selected!`, 'success');
    window.TopikoUtils.calculateLeadScore();
}

// ========================================
// COMPLETION FUNCTIONS
// ========================================

async function completeSetup() {
    const finalScore = window.TopikoUtils.calculateLeadScore() + 10;
    
    const leadData = {
        user_id: window.topikoApp.currentUserId,
        name: window.topikoApp.userName,
        email: document.getElementById('email')?.value,
        phone: document.getElementById('phoneNumber')?.value,
        business_name: window.topikoApp.businessName,
        selected_goals: window.topikoApp.selectedGoals,
        selected_categories: window.topikoApp.selectedCategories,
        products_count: window.topikoApp.userProducts.length,
        selected_theme: window.topikoApp.selectedTheme,
        qualifying_answers: window.topikoApp.qualifyingAnswers,
        lead_score: finalScore,
        lead_quality: finalScore >= 70 ? 'Hot' : finalScore >= 40 ? 'Warm' : 'Cold',
        setup_completed: true,
        completed_at: new Date().toISOString()
    };
    
    // Save to database
    if (window.topikoApp.currentUserId) {
        await window.TopikoUtils.saveToSupabase(leadData, 'completed_setups');
    }
    
    // Save locally as backup
    const existingLeads = JSON.parse(localStorage.getItem('topiko_local_leads') || '[]');
    existingLeads.push(leadData);
    localStorage.setItem('topiko_local_leads', JSON.stringify(existingLeads));
    
    window.TopikoUtils.showNotification(`🎉 Congratulations ${window.topikoApp.userName}! Your business is ready to go online!`, 'success');
    
    setTimeout(() => {
        showCompletionSummary(finalScore);
    }, 2000);
}

function showCompletionSummary(finalScore) {
    const dailyOffers = window.TopikoConfig.getDailyOffers();
    
    const completionHTML = `
        <div class="content-card" style="text-align: center;">
            <div style="font-size: 3rem; margin-bottom: 1rem; animation: bounce 2s infinite;">🎉</div>
            
            <h2 style="color: #059669; font-size: 2rem; font-weight: 700; margin-bottom: 1rem;">
                <strong>Congratulations!</strong> <strong>${window.topikoApp.businessName}</strong> is all set for the final touches and ready to go live.
            </h2>

            <!-- Special Offer Section -->
            <div style="background: rgba(255, 165, 0, 0.1); border: 2px solid rgba(255, 165, 0, 0.3); border-radius: 16px; padding: 1.5rem; margin: 1.5rem 0;">
                <h3 style="color: #d97706; font-size: 1.3rem; font-weight: 700; margin-bottom: 1rem;">
                    🎁 Special offer just for today
                </h3>
                <p style="color: #92400e; margin-bottom: 1.5rem; font-size: 0.9rem;">
                    Select one complimentary service to enhance your business launch:
                </p>
                
                <div id="specialOffers" style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem; margin-bottom: 1.5rem;">
                    ${dailyOffers.map((offer, index) => `
                        <div class="offer-option" onclick="selectOffer('${offer}', this)" data-offer="${offer}">
                            <input type="radio" id="offer-${index}" name="special_offer" value="${offer}" style="display: none;">
                            <label for="offer-${index}" style="display: block; padding: 1rem; background: rgba(255, 255, 255, 0.8); border: 2px solid rgba(255, 165, 0, 0.2); border-radius: 12px; cursor: pointer; transition: all 0.3s ease; font-size: 0.85rem; font-weight: 600; color: #92400e;">
                                ${offer}
                            </label>
                        </div>
                    `).join('')}
                </div>
                
                <button class="submit-button" id="confirmOfferBtn" onclick="confirmOffer()" disabled style="opacity: 0.5; margin-top: 1rem;">
                    Claim My Free Service 🎁
                </button>
            </div>

            <!-- Connection Section (Hidden initially) -->
            <div id="connectionSection" style="display: none; background: rgba(34, 197, 94, 0.1); border: 2px solid rgba(34, 197, 94, 0.3); border-radius: 16px; padding: 1.5rem; margin: 1.5rem 0;">
                <h3 style="color: #059669; font-size: 1.2rem; font-weight: 700; margin-bottom: 1rem;">
                    Would you like to connect with the <strong>Topiko Team</strong> to make it happen?
                </h3>
                
                <div style="display: flex; gap: 1rem; justify-content: center;">
                    <button onclick="connectWithTeam()" class="submit-button" style="flex: 1; max-width: 250px;">
                        I want to connect with Topiko team
                    </button>
                    <button onclick="needMoreDetails()" class="btn-secondary" style="flex: 1; max-width: 200px;">
                        I need more details
                    </button>
                </div>
            </div>

            <!-- Thank You Section (Hidden initially) -->
            <div id="thankYouSection" style="display: none;">
                <div style="font-size: 2rem; margin: 2rem 0;">🙏</div>
                <h3 style="color: #6b46c1; font-size: 1.5rem; margin-bottom: 1rem;">
                    Thank you for choosing Topiko!
                </h3>
                <p style="color: #553c9a; font-size: 1rem; margin-bottom: 1.5rem;">
                    We're excited to help your business succeed online. Our team will be in touch soon!
                </p>
                <button onclick="startOver()" class="btn-secondary">
                    Help Another Business 🔄
                </button>
            </div>
        </div>
    `;
    
    const themesScreen = document.getElementById('themes');
    if (themesScreen) {
        themesScreen.innerHTML = completionHTML;
    }
}

// ========================================
// COMPLETION FLOW FUNCTIONS - NEW
// ========================================

let selectedOffer = null;

function selectOffer(offer, element) {
    // Remove selection from all offers
    document.querySelectorAll('.offer-option').forEach(el => {
        el.classList.remove('selected');
        el.querySelector('label').style.background = 'rgba(255, 255, 255, 0.8)';
        el.querySelector('label').style.borderColor = 'rgba(255, 165, 0, 0.2)';
    });
    
    // Select this offer
    element.classList.add('selected');
    element.querySelector('label').style.background = 'rgba(255, 165, 0, 0.2)';
    element.querySelector('label').style.borderColor = '#f59e0b';
    element.querySelector('input').checked = true;
    
    selectedOffer = offer;
    
    const confirmBtn = document.getElementById('confirmOfferBtn');
    confirmBtn.disabled = false;
    confirmBtn.style.opacity = '1';
    
    window.TopikoUtils.addDebugLog(`🎁 Offer selected: ${offer}`);
}

function confirmOffer() {
    if (!selectedOffer) {
        window.TopikoUtils.showNotification('Please select an offer first', 'error');
        return;
    }
    
    window.TopikoUtils.showNotification(`Great choice! ${selectedOffer} selected`, 'success');
    
    // Hide offers section and show connection section
    document.getElementById('specialOffers').style.display = 'none';
    document.getElementById('confirmOfferBtn').style.display = 'none';
    document.getElementById('connectionSection').style.display = 'block';
    
    window.TopikoUtils.addDebugLog(`✅ Offer confirmed: ${selectedOffer}`);
}

function connectWithTeam() {
    // Show date/time selection popup
    const popupHTML = `
        <div class="modal-overlay show" id="schedulingModal">
            <div class="modal-content">
                <button class="modal-close" onclick="closeSchedulingModal()">×</button>
                
                <div style="text-align: center;">
                    <div style="font-size: 2.5rem; margin-bottom: 1rem;">📅</div>
                    
                    <h2 style="color: #6b46c1; font-size: 1.5rem; font-weight: 700; margin-bottom: 1rem;">
                        Schedule Your Call with Topiko Team
                    </h2>
                    
                    <p style="color: #553c9a; font-size: 0.9rem; margin-bottom: 1.5rem;">
                        Select your preferred date and time for the call
                    </p>

                    <div style="margin-bottom: 1.5rem;">
                        <label style="display: block; color: #6b46c1; font-weight: 600; margin-bottom: 0.5rem;">Preferred Date</label>
                        <input type="date" id="callDate" min="${new Date().toISOString().split('T')[0]}" 
                               style="width: 100%; padding: 0.8rem; border: 2px solid rgba(139, 111, 205, 0.2); border-radius: 8px;">
                    </div>
                    
                    <div style="margin-bottom: 1.5rem;">
                        <label style="display: block; color: #6b46c1; font-weight: 600; margin-bottom: 0.5rem;">Preferred Time</label>
                        <select id="callTime" style="width: 100%; padding: 0.8rem; border: 2px solid rgba(139, 111, 205, 0.2); border-radius: 8px;">
                            <option value="">Select time</option>
                            <option value="09:00">9:00 AM</option>
                            <option value="10:00">10:00 AM</option>
                            <option value="11:00">11:00 AM</option>
                            <option value="14:00">2:00 PM</option>
                            <option value="15:00">3:00 PM</option>
                            <option value="16:00">4:00 PM</option>
                            <option value="17:00">5:00 PM</option>
                        </select>
                    </div>

                    <button class="submit-button" onclick="scheduleCall()" style="width: 100%;">
                        Schedule My Call 📞
                    </button>
                </div>
            </div>
        </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', popupHTML);
    window.TopikoUtils.addDebugLog('📅 Scheduling modal opened');
}

function closeSchedulingModal() {
    const modal = document.getElementById('schedulingModal');
    if (modal) {
        modal.remove();
    }
}

function scheduleCall() {
    const date = document.getElementById('callDate').value;
    const time = document.getElementById('callTime').value;
    
    if (!date || !time) {
        window.TopikoUtils.showNotification('Please select both date and time', 'error');
        return;
    }
    
    // Save scheduling data
    const schedulingData = {
        user_id: window.topikoApp.currentUserId,
        business_name: window.topikoApp.businessName,
        selected_offer: selectedOffer,
        preferred_date: date,
        preferred_time: time,
        scheduled_at: new Date().toISOString()
    };
    
    window.TopikoUtils.saveToSupabase(schedulingData, 'scheduled_calls');
    
    closeSchedulingModal();
    showThankYou();
    
    window.TopikoUtils.addDebugLog(`📞 Call scheduled for ${date} at ${time}`);
}

function needMoreDetails() {
    // Show reason selection popup
    const popupHTML = `
        <div class="modal-overlay show" id="detailsModal">
            <div class="modal-content">
                <div style="text-align: center;">
                    <div style="font-size: 2.5rem; margin-bottom: 1rem;">💭</div>
                    
                    <h2 style="color: #6b46c1; font-size: 1.5rem; font-weight: 700; margin-bottom: 1rem;">
                        Help us understand better
                    </h2>
                    
                    <p style="color: #553c9a; font-size: 0.9rem; margin-bottom: 1.5rem;">
                        What's holding you back? (Select one)
                    </p>

                    <div style="display: flex; flex-direction: column; gap: 1rem; margin-bottom: 1.5rem;">
                        <button class="reason-btn" onclick="selectReason('Budget Issue', this)">
                            💰 Budget Issue
                        </button>
                        <button class="reason-btn" onclick="selectReason('Looking for something else', this)">
                            🔍 Looking for something else
                        </button>
                        <button class="reason-btn" onclick="selectReason('Need time to decide', this)">
                            ⏰ Need time to decide
                        </button>
                    </div>
                    
                    <div id="commentSection" style="display: none; margin-bottom: 1.5rem;">
                        <label style="display: block; color: #6b46c1; font-weight: 600; margin-bottom: 0.5rem;">Please elaborate:</label>
                        <textarea id="reasonComment" rows="3" placeholder="Tell us more..." 
                                  style="width: 100%; padding: 0.8rem; border: 2px solid rgba(139, 111, 205, 0.2); border-radius: 8px; resize: vertical;"></textarea>
                    </div>

                    <button class="submit-button" id="submitReasonBtn" onclick="submitReason()" disabled style="opacity: 0.5; width: 100%;">
                        Submit Response
                    </button>
                </div>
            </div>
        </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', popupHTML);
    window.TopikoUtils.addDebugLog('💭 Details modal opened');
}

let selectedReason = null;

function selectReason(reason, element) {
    // Remove selection from all buttons
    document.querySelectorAll('.reason-btn').forEach(btn => {
        btn.classList.remove('selected');
        btn.style.background = 'rgba(139, 111, 205, 0.1)';
        btn.style.borderColor = 'rgba(139, 111, 205, 0.2)';
    });
    
    // Select this reason
    element.classList.add('selected');
    element.style.background = 'rgba(139, 111, 205, 0.2)';
    element.style.borderColor = '#8b6fcd';
    
    selectedReason = reason;
    
    const commentSection = document.getElementById('commentSection');
    const submitBtn = document.getElementById('submitReasonBtn');
    
    if (reason === 'Looking for something else' || reason === 'Need time to decide') {
        commentSection.style.display = 'block';
        submitBtn.disabled = true;
        submitBtn.style.opacity = '0.5';
        
        // Enable submit when comment is added
        const textarea = document.getElementById('reasonComment');
        textarea.oninput = function() {
            if (this.value.trim()) {
                submitBtn.disabled = false;
                submitBtn.style.opacity = '1';
            } else {
                submitBtn.disabled = true;
                submitBtn.style.opacity = '0.5';
            }
        };
    } else {
        commentSection.style.display = 'none';
        submitBtn.disabled = false;
        submitBtn.style.opacity = '1';
    }
    
    window.TopikoUtils.addDebugLog(`💭 Reason selected: ${reason}`);
}

function submitReason() {
    const comment = document.getElementById('reasonComment')?.value.trim() || '';
    
    if ((selectedReason === 'Looking for something else' || selectedReason === 'Need time to decide') && !comment) {
        window.TopikoUtils.showNotification('Please provide additional details', 'error');
        return;
    }
    
    // Save reason data
    const reasonData = {
        user_id: window.topikoApp.currentUserId,
        business_name: window.topikoApp.businessName,
        selected_offer: selectedOffer,
        hesitation_reason: selectedReason,
        additional_comments: comment,
        submitted_at: new Date().toISOString()
    };
    
    window.TopikoUtils.saveToSupabase(reasonData, 'hesitation_feedback');
    
    // Close modal
    const modal = document.getElementById('detailsModal');
    if (modal) {
        modal.remove();
    }
    
    showThankYou();
    window.TopikoUtils.addDebugLog(`✅ Reason submitted: ${selectedReason}`);
}

function showThankYou() {
    // Hide connection section and show thank you
    document.getElementById('connectionSection').style.display = 'none';
    document.getElementById('thankYouSection').style.display = 'block';
    
    window.TopikoUtils.showNotification('Thank you for your feedback!', 'success');
    window.TopikoUtils.addDebugLog('🙏 Thank you section shown');
}

function startOver() {
    if (confirm('Are you sure you want to start over? This will reset all progress.')) {
        location.reload();
    }
}

// ========================================
// MODAL FUNCTIONS
// ========================================

// Goals transition modal
function displayGoalsTransitionModal() {
    const goalNames = window.TopikoConfig.GOAL_NAMES;

    const modalGoalsList = document.getElementById('modalGoalsList');
    const modalSelectedGoals = document.getElementById('modalSelectedGoals');
    
    if (modalGoalsList) {
        modalGoalsList.innerHTML = window.topikoApp.selectedGoals.map(goal => 
            `<div class="goal-pill">${goalNames[goal] || goal}</div>`
        ).join('');
    }
    
    if (modalSelectedGoals) {
        const goalsList = window.topikoApp.selectedGoals.map(goal => goalNames[goal] || goal).join(', ');
        modalSelectedGoals.innerHTML = `<strong>${goalsList}</strong>`;
    }
    
    window.TopikoUtils.showModal('goalsTransitionModal');
    window.TopikoUtils.addDebugLog(`Goals transition modal shown for: ${window.topikoApp.selectedGoals.join(', ')}`);
}

function proceedFromGoalsModal() {
    window.TopikoUtils.closeModal('goalsTransitionModal');
    setTimeout(() => window.TopikoUtils.showScreen('registration'), 500);
}

// Setup intro modal
function displaySetupIntroModal() {
    const goalNames = window.TopikoConfig.GOAL_NAMES;

    // Update title and content with personalization
    const setupModalTitle = document.getElementById('setupModalTitle');
    const setupModalContent = document.getElementById('setupModalContent');
    
    if (setupModalTitle) {
        setupModalTitle.textContent = `Excellent, ${window.topikoApp.userName}! 🎉`;
    }
    
    if (setupModalContent) {
        setupModalContent.textContent = `In just 3 simple steps, we'll show you exactly how your ${window.topikoApp.businessName} can look and work online — the Topiko way!`;
    }

    const modalSetupGoalsList = document.getElementById('modalSetupGoalsList');
    if (modalSetupGoalsList) {
        modalSetupGoalsList.innerHTML = window.topikoApp.selectedGoals.map(goal => 
            `<div style="background: rgba(34, 197, 94, 0.15); border: 2px solid rgba(34, 197, 94, 0.3); border-radius: 8px; padding: 0.8rem; color: #059669; font-weight: 600; font-size: 0.9rem; text-align: center;">
                ${goalNames[goal] || goal}
            </div>`
        ).join('');
    }
    
    window.TopikoUtils.showModal('setupIntroModal');
    window.TopikoUtils.addDebugLog(`Setup intro modal shown for: ${window.topikoApp.selectedGoals.join(', ')}`);
}

function proceedFromSetupModal() {
    window.TopikoUtils.closeModal('setupIntroModal');
    setTimeout(() => window.TopikoUtils.showScreen('qualifying-questions'), 500);
}

// ========================================
// GLOBAL INITIALIZATION
// ========================================

// Auto-initialize product form when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    // Set default mode to custom (since we removed the selector toggle)
    setTimeout(() => {
        const customForm = document.getElementById('customProductForm');
        if (customForm) {
            customForm.style.display = 'block';
        }
    }, 1000);
});

// Make product functions globally available
if (typeof window !== 'undefined') {
    // Completion Flow Functions - NEW
    window.selectOffer = selectOffer;
    window.confirmOffer = confirmOffer;
    window.connectWithTeam = connectWithTeam;
    window.closeSchedulingModal = closeSchedulingModal;
    window.scheduleCall = scheduleCall;
    window.needMoreDetails = needMoreDetails;
    window.selectReason = selectReason;
    window.submitReason = submitReason;
    window.showThankYou = showThankYou;
    
    // Existing Functions (keep as they are)
    window.selectLanguage = selectLanguage;
    window.updateGoalsTracking = updateGoalsTracking;
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
    window.displayGoalsTransitionModal = displayGoalsTransitionModal;
    window.proceedFromGoalsModal = proceedFromGoalsModal;
    window.displaySetupIntroModal = displaySetupIntroModal;
    window.proceedFromSetupModal = proceedFromSetupModal;
    window.startOver = startOver;
    window.addCustomProduct = addCustomProduct;
}

// ========================================
// GLOBAL CONSOLE LOGGING
// ========================================

window.TopikoUtils.addDebugLog('📱 Enhanced Topiko Lead Form loaded with Completion Flow', 'success');
console.log('📱 Enhanced Topiko Lead Form Ready');
console.log('🎯 NEW Features: Special Offers, Team Connection, Feedback Collection');
console.log('🎁 To test: Complete the flow and try the new completion screen with offers');

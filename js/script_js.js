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

    if (!name || !email || !phone || !business || !type || !category) {
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
        name, email, phone,
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
    
    productCategorySelect.innerHTML = '<option value="">Select from your chosen categories</option>';
    productSubcategorySelect.innerHTML = '<option value="">Select a subcategory</option>';
    
    const businessCategory = document.getElementById('category')?.value;
    if (!businessCategory || !window.TopikoConfig.BUSINESS_CATEGORIES[businessCategory]) return;
    
    const categoryData = window.TopikoConfig.BUSINESS_CATEGORIES[businessCategory];
    
    window.topikoApp.selectedCategories.forEach(categoryKey => {
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
            category.subcategories.forEach(subcategoryKey => {
                const subcategoryName = window.TopikoConfig.SUBCATEGORY_NAMES[subcategoryKey] || subcategoryKey.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase());
                productSubcategorySelect.innerHTML += `<option value="${subcategoryKey}">${subcategoryName}</option>`;
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
// PRODUCTS FUNCTIONS
// ========================================

async function addProduct() {
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
        name, price: parseFloat(price), description, categoryKey,
        subcategoryKey: subcategoryKey || null,
        imageUrl: imageUrl || window.TopikoUtils.getDefaultProductImage(),
        createdAt: new Date().toISOString()
    };
    
    window.topikoApp.userProducts.push(product);
    
    if (window.topikoApp.currentUserId) {
        const productDbData = {
            user_id: window.topikoApp.currentUserId, name, price: parseFloat(price), description,
            category_key: categoryKey, subcategory_key: subcategoryKey || null,
            image_url: imageUrl || null
        };
        
        const productResult = await window.TopikoUtils.saveToSupabase(productDbData, 'products');
        if (productResult.success) {
            window.TopikoUtils.showNotification(`✅ "${name}" added successfully!`, 'success');
        } else {
            window.TopikoUtils.showNotification(`⚠️ "${name}" saved locally (will sync later)`, 'warning');
        }
    }
    
    // Clear form
    ['productName', 'productPrice', 'productDescription', 'productCategory', 'productSubcategory', 'productImage'].forEach(id => {
        const field = document.getElementById(id);
        if (field) field.value = '';
    });
    
    window.TopikoUtils.displayProducts();
    window.TopikoUtils.calculateLeadScore();
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
    const completionHTML = `
        <div class="content-card" style="text-align: center;">
            <div style="font-size: 3rem; margin-bottom: 1rem; animation: bounce 2s infinite;">🎉</div>
            
            <h2 style="color: #059669; font-size: 2rem; font-weight: 700; margin-bottom: 1rem;">
                ${window.topikoApp.businessName} is Ready to Go Online!
            </h2>
            
            <p style="color: #064e3b; font-size: 1rem; margin-bottom: 2rem;">
                Your complete business setup is finished and ready to attract customers!
            </p>

            <div style="background: rgba(34, 197, 94, 0.1); border: 2px solid rgba(34, 197, 94, 0.3); border-radius: 16px; padding: 1.5rem; margin: 1.5rem 0;">
                <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem; margin-bottom: 1.5rem;">
                    <div style="background: rgba(255, 255, 255, 0.8); padding: 1rem; border-radius: 12px;">
                        <div style="font-size: 1.5rem; margin-bottom: 0.3rem;">🎯</div>
                        <div style="font-size: 1.5rem; font-weight: bold; color: #059669;">${finalScore}</div>
                        <div style="color: #064e3b; font-size: 0.8rem;">Lead Score</div>
                    </div>
                    
                    <div style="background: rgba(255, 255, 255, 0.8); padding: 1rem; border-radius: 12px;">
                        <div style="font-size: 1.5rem; margin-bottom: 0.3rem;">📦</div>
                        <div style="font-size: 1.5rem; font-weight: bold; color: #059669;">${window.topikoApp.userProducts.length}</div>
                        <div style="color: #064e3b; font-size: 0.8rem;">Products Ready</div>
                    </div>
                </div>

                <div style="background: rgba(34, 197, 94, 0.15); border-radius: 12px; padding: 1rem; text-align: left; font-size: 0.85rem;">
                    <h4 style="color: #059669; margin-bottom: 0.8rem;">🚀 What Happens Next?</h4>
                    <p style="color: #064e3b; margin-bottom: 0.5rem;">✅ Your business profile is now live and searchable</p>
                    <p style="color: #064e3b; margin-bottom: 0.5rem;">✅ Our expert team will contact you within 24 hours</p>
                    <p style="color: #064e3b; margin-bottom: 0.5rem;">✅ Free professional setup assistance included</p>
                    <p style="color: #064e3b;">✅ Start attracting customers immediately!</p>
                </div>
            </div>

            <div class="flex-buttons">
                <button onclick="goToDashboard()" class="submit-button">
                    View Your Business 📊
                </button>
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

function goToDashboard() {
    window.TopikoUtils.showNotification('Opening your business dashboard...', 'info');
    setTimeout(() => {
        // In production, this would redirect to the actual dashboard
        window.location.href = './dashboard.html';
    }, 1500);
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
    if (modalGoalsList) {
        modalGoalsList.innerHTML = window.topikoApp.selectedGoals.map(goal => 
            `<div class="goal-pill">${goalNames[goal] || goal}</div>`
        ).join('');
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
// GLOBAL CONSOLE LOGGING
// ========================================

window.TopikoUtils.addDebugLog('📱 Enhanced Topiko Lead Form loaded', 'success');
console.log('📱 Enhanced Topiko Lead Form Ready');
console.log('🎯 Features: Dynamic messages (3.5s rotation), smart help section, expanded categories, back buttons, OTP verification');
console.log('🔄 To see dynamic messages: Navigate to Categories screen and watch the green messages rotate');

// ==========================================
// TOPIKO PRODUCT SELECTOR FUNCTIONS - ADDED
// ==========================================

// Product Selector State
let productSelectorState = {
    allProducts: [],
    filteredProducts: [],
    selectedProducts: [],
    currentFilters: {
        category: 'all',
        search: '',
        minPrice: 0,
        maxPrice: 5000
    },
    sortBy: 'name',
    currentMode: 'select'
};

// Initialize Product Selector when products screen is shown
function initializeProductSelector() {
    if (document.getElementById('productsGrid')) {
        try {
            productSelectorState.allProducts = getAllProducts();
            productSelectorState.filteredProducts = [...productSelectorState.allProducts];
            renderProductSelector();
            bindProductSelectorEvents();
        } catch (error) {
            console.error('Error initializing product selector:', error);
            showProductError('Failed to load products. Please refresh the page.');
        }
    }
}

// Show product error
function showProductError(message) {
    const container = document.getElementById('productsGrid');
    if (container) {
        container.innerHTML = `
            <div class="empty-state">
                <div class="empty-state-icon">⚠️</div>
                <h3>Error Loading Products</h3>
                <p>${message}</p>
                <button onclick="location.reload()" style="background: #6b46c1; color: white; border: none; padding: 10px 20px; border-radius: 8px; cursor: pointer; margin-top: 15px;">
                    🔄 Reload Page
                </button>
            </div>
        `;
    }
}

// Switch between product selection modes
function switchProductMode(mode) {
    productSelectorState.currentMode = mode;
    
    // Update toggle buttons
    const selectBtn = document.getElementById('selectMode');
    const customBtn = document.getElementById('customMode');
    
    if (selectBtn && customBtn) {
        selectBtn.classList.toggle('active', mode === 'select');
        customBtn.classList.toggle('active', mode === 'custom');
    }
    
    // Show/hide sections
    const selectorSection = document.getElementById('productSelectorSection');
    const customForm = document.getElementById('customProductForm');
    
    if (selectorSection) selectorSection.style.display = mode === 'select' ? 'block' : 'none';
    if (customForm) customForm.style.display = mode === 'custom' ? 'block' : 'none';
    
    // Update selected products display
    updateSelectedProductsDisplay();
}

// Render product selector interface
function renderProductSelector() {
    renderProductGrid();
    renderQuickFilters();
    updateProductsCount();
    updateSelectedProductsDisplay();
}

// Render product grid
function renderProductGrid() {
    const container = document.getElementById('productsGrid');
    if (!container) return;
    
    if (productSelectorState.filteredProducts.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <div class="empty-state-icon">🔍</div>
                <h3>No products found</h3>
                <p>Try adjusting your search terms or filters</p>
            </div>
        `;
        return;
    }

    const productsHTML = productSelectorState.filteredProducts.map(product => `
        <div class="product-card ${isProductSelected(product.id) ? 'selected' : ''}" 
             data-product-id="${product.id}"
             onclick="toggleProductSelection('${product.id}')">
            <img src="${product.image}" alt="${product.name}" class="product-image" loading="lazy" 
                 onerror="this.src='https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=300&h=300&fit=crop'">
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <div class="product-price">${product.price}</div>
                <p class="product-description">${product.description}</p>
                <span class="product-category">${product.subcategory}</span>
            </div>
        </div>
    `).join('');

    container.innerHTML = productsHTML;
}

// Check if product is selected
function isProductSelected(productId) {
    return productSelectorState.selectedProducts.some(p => p.originalId === productId);
}

// Toggle product selection
function toggleProductSelection(productId) {
    const product = productSelectorState.allProducts.find(p => p.id === productId);
    if (!product) return;

    const existingIndex = productSelectorState.selectedProducts.findIndex(p => p.originalId === productId);
    
    if (existingIndex >= 0) {
        // Remove product
        productSelectorState.selectedProducts.splice(existingIndex, 1);
    } else {
        // Add product (create a copy for editing)
        productSelectorState.selectedProducts.push({
            ...product,
            originalId: product.id,
            editedName: product.name,
            editedPrice: product.price,
            editedDescription: product.description
        });
    }

    renderProductGrid();
    updateSelectedProductsDisplay();
    updateProductCatalog();
}

// Update selected products display
function updateSelectedProductsDisplay() {
    const container = document.getElementById('selectedProductsList');
    const section = document.getElementById('selectedProductsSection');
    const countSpan = document.getElementById('selectedCount');
    
    if (!container || !section) return;

    const selectedCount = productSelectorState.selectedProducts.length;
    if (countSpan) countSpan.textContent = selectedCount;
    
    if (selectedCount === 0) {
        section.style.display = 'none';
        return;
    }

    section.style.display = 'block';
    
    const selectedHTML = productSelectorState.selectedProducts.map((product, index) => `
        <div class="selected-product-item">
            <img src="${product.image}" alt="${product.name}" class="selected-product-thumb" 
                 onerror="this.src='https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=60&h=60&fit=crop'">
            <div class="selected-product-details">
                <div class="selected-product-name">
                    <input type="text" 
                           class="editable-field" 
                           value="${product.editedName || product.name}"
                           onchange="updateSelectedProductField(${index}, 'editedName', this.value)"
                           placeholder="Product name">
                    <span class="edit-indicator">✏️ Click to edit</span>
                </div>
                <div class="selected-product-price">
                    ₹<input type="number" 
                            class="editable-field" 
                            value="${product.editedPrice || product.price}"
                            onchange="updateSelectedProductField(${index}, 'editedPrice', this.value)"
                            placeholder="Price"
                            min="1">
                </div>
                <div style="margin-top: 8px; font-size: 0.9rem; color: #718096;">
                    <input type="text" 
                           class="editable-field" 
                           value="${product.editedDescription || product.description}"
                           onchange="updateSelectedProductField(${index}, 'editedDescription', this.value)"
                           placeholder="Product description"
                           style="width: 100%; font-size: 0.9rem;">
                    <span class="edit-indicator">✏️ Edit description</span>
                </div>
            </div>
            <button class="remove-product" onclick="removeSelectedProduct(${index})">
                Remove
            </button>
        </div>
    `).join('');

    container.innerHTML = selectedHTML;
}

// Update individual product field
function updateSelectedProductField(index, field, value) {
    if (productSelectorState.selectedProducts[index]) {
        productSelectorState.selectedProducts[index][field] = value;
        updateProductCatalog();
    }
}

// Remove product from selection
function removeSelectedProduct(index) {
    productSelectorState.selectedProducts.splice(index, 1);
    renderProductGrid();
    updateSelectedProductsDisplay();
    updateProductCatalog();
}

// Update the main product catalog display
function updateProductCatalog() {
    const catalogContainer = document.getElementById('productsList');
    const countElement = document.getElementById('productCount');
    
    if (!catalogContainer || !countElement) return;

    // Get all products (selected + custom)
    const allUserProducts = [...productSelectorState.selectedProducts];
    
    // Add any custom products from existing system
    if (window.productsList && Array.isArray(window.productsList)) {
        allUserProducts.push(...window.productsList);
    }

    countElement.textContent = allUserProducts.length;

    if (allUserProducts.length === 0) {
        catalogContainer.innerHTML = `
            <div style="text-align: center; padding: 2rem; color: #64748b; background: rgba(255, 255, 255, 0.5); border-radius: 12px;">
                <div style="font-size: 3rem; margin-bottom: 1rem;">📦</div>
                <p>No products selected yet. Choose from 500+ products above or add custom products!</p>
            </div>
        `;
        return;
    }

    const catalogHTML = allUserProducts.map((product, index) => `
        <div class="product-card-display" style="background: white; border-radius: 12px; padding: 15px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); margin-bottom: 15px;">
            <div style="display: flex; align-items: center; gap: 15px;">
                <img src="${product.image || 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=60&h=60&fit=crop'}" 
                     alt="${product.editedName || product.name}" 
                     style="width: 60px; height: 60px; object-fit: cover; border-radius: 8px;"
                     onerror="this.src='https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=60&h=60&fit=crop'">
                <div style="flex: 1;">
                    <h4 style="margin: 0; color: #2d3748; font-size: 1rem;">${product.editedName || product.name}</h4>
                    <p style="margin: 4px 0; color: #e53e3e; font-weight: 700;">₹${product.editedPrice || product.price}</p>
                    <p style="margin: 0; color: #718096; font-size: 0.9rem;">${(product.editedDescription || product.description || '').substring(0, 100)}${(product.editedDescription || product.description || '').length > 100 ? '...' : ''}</p>
                </div>
                <button onclick="removeProductFromCatalog(${index})" 
                        style="background: #fed7d7; color: #e53e3e; border: none; padding: 6px 10px; border-radius: 6px; cursor: pointer; font-size: 0.8rem;">
                    Remove
                </button>
            </div>
        </div>
    `).join('');

    catalogContainer.innerHTML = catalogHTML;
}

// Remove product from catalog
function removeProductFromCatalog(index) {
    // Check if it's a selected product or custom product
    if (index < productSelectorState.selectedProducts.length) {
        // It's a selected product
        productSelectorState.selectedProducts.splice(index, 1);
        renderProductGrid();
        updateSelectedProductsDisplay();
    } else {
        // It's a custom product - use existing removeProduct function if available
        const customIndex = index - productSelectorState.selectedProducts.length;
        if (window.removeProduct && typeof window.removeProduct === 'function') {
            window.removeProduct(customIndex);
        }
    }
    updateProductCatalog();
}

// Apply filters and sorting
function applyProductFilters() {
    try {
        let filtered = [...productSelectorState.allProducts];

        // Category filter
        if (productSelectorState.currentFilters.category !== 'all') {
            filtered = filtered.filter(product => product.category === productSelectorState.currentFilters.category);
        }

        // Search filter
        if (productSelectorState.currentFilters.search) {
            const searchTerm = productSelectorState.currentFilters.search.toLowerCase();
            filtered = filtered.filter(product => 
                product.name.toLowerCase().includes(searchTerm) ||
                product.description.toLowerCase().includes(searchTerm) ||
                product.subcategory.toLowerCase().includes(searchTerm)
            );
        }

        // Price range filter
        filtered = filtered.filter(product => 
            product.price >= productSelectorState.currentFilters.minPrice && 
            product.price <= productSelectorState.currentFilters.maxPrice
        );

        // Apply sorting
        filtered.sort((a, b) => {
            switch (productSelectorState.sortBy) {
                case 'price-low':
                    return a.price - b.price;
                case 'price-high':
                    return b.price - a.price;
                case 'category':
                    return a.category.localeCompare(b.category) || a.name.localeCompare(b.name);
                case 'name':
                default:
                    return a.name.localeCompare(b.name);
            }
        });

        productSelectorState.filteredProducts = filtered;
        renderProductGrid();
        updateProductsCount();
    } catch (error) {
        console.error('Error applying filters:', error);
    }
}

// Update products count display
function updateProductsCount() {
    const countElement = document.getElementById('productsCount');
    if (countElement) {
        countElement.textContent = productSelectorState.filteredProducts.length;
    }
}

// Render quick filters
function renderQuickFilters() {
    const container = document.getElementById('quickFilters');
    if (!container) return;

    const filters = [
        { key: 'all', label: 'All Products' },
        { key: 'boutique', label: 'Fashion' },
        { key: 'homefoods', label: 'Home Foods' },
        { key: 'grocery', label: 'Grocery' },
        { key: 'electronics', label: 'Electronics' },
        { key: 'fitness', label: 'Fitness' },
        { key: 'restaurant', label: 'Restaurant' }
    ];

    const filtersHTML = filters.map(filter => `
        <button class="quick-filter ${productSelectorState.currentFilters.category === filter.key ? 'active' : ''}" 
                data-category="${filter.key}">
            ${filter.label}
        </button>
    `).join('');

    container.innerHTML = filtersHTML;
}

// Bind product selector events
function bindProductSelectorEvents() {
    // Search input
    const searchInput = document.getElementById('productSearch');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            productSelectorState.currentFilters.search = e.target.value;
            applyProductFilters();
        });
    }

    // Category filter
    const categoryFilter = document.getElementById('categoryFilter');
    if (categoryFilter) {
        categoryFilter.addEventListener('change', (e) => {
            productSelectorState.currentFilters.category = e.target.value;
            applyProductFilters();
            renderQuickFilters();
        });
    }

    // Sort dropdown
    const sortSelect = document.getElementById('sortBy');
    if (sortSelect) {
        sortSelect.addEventListener('change', (e) => {
            productSelectorState.sortBy = e.target.value;
            applyProductFilters();
        });
    }

    // Price range inputs
    const minPriceInput = document.getElementById('minPrice');
    const maxPriceInput = document.getElementById('maxPrice');
    
    if (minPriceInput && maxPriceInput) {
        const updatePriceRange = () => {
            productSelectorState.currentFilters.minPrice = parseInt(minPriceInput.value) || 0;
            productSelectorState.currentFilters.maxPrice = parseInt(maxPriceInput.value) || 5000;
            const display = document.getElementById('priceRangeDisplay');
            if (display) {
                display.textContent = `${productSelectorState.currentFilters.minPrice} - ₹${productSelectorState.currentFilters.maxPrice}`;
            }
            applyProductFilters();
        };

        minPriceInput.addEventListener('change', updatePriceRange);
        maxPriceInput.addEventListener('change', updatePriceRange);
    }

    // Quick filter buttons (using event delegation)
    document.addEventListener('click', (e) => {
        if (e.target.matches('.quick-filter')) {
            const category = e.target.dataset.category;
            productSelectorState.currentFilters.category = category;
            
            // Update dropdown
            const categorySelect = document.getElementById('categoryFilter');
            if (categorySelect) {
                categorySelect.value = category;
            }
            
            applyProductFilters();
            renderQuickFilters();
        }
    });
}

// Helper functions for quick actions
function selectPopularProducts() {
    const popularProductIds = ['b001', 'hf001', 'r001', 'e001', 'f001'];
    
    popularProductIds.forEach(productId => {
        const product = productSelectorState.allProducts.find(p => p.id === productId);
        if (product && !isProductSelected(product.id)) {
            toggleProductSelection(product.id);
        }
    });
    
    // Show notification
    showProductNotification('Added 5 popular products to your selection!', 'success');
}

function clearAllSelections() {
    productSelectorState.selectedProducts = [];
    renderProductGrid();
    updateSelectedProductsDisplay();
    updateProductCatalog();
    showProductNotification('Cleared all selected products', 'info');
}

// Show notification
function showProductNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#48bb78' : type === 'error' ? '#e53e3e' : '#6b46c1'};
        color: white;
        padding: 12px 20px;
        border-radius: 8px;
        font-weight: 500;
        z-index: 10000;
        animation: slideIn 0.3s ease;
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Modified addProduct function to work with existing system
function addCustomProduct() {
    // Use existing addProduct functionality but integrate with new system
    if (window.addProduct && typeof window.addProduct === 'function') {
        const originalAddProduct = window.addProduct;
        originalAddProduct();
        // Update our catalog after adding
        setTimeout(updateProductCatalog, 100);
    } else {
        // Fallback if addProduct doesn't exist
        showProductNotification('Custom product functionality not available', 'error');
    }
}

// SAFE VERSION - Initialize manually
function initTopikoProductSelector() {
    if (document.getElementById('productsGrid') && typeof getAllProducts === 'function') {
        try {
            productSelectorState.allProducts = getAllProducts();
            productSelectorState.filteredProducts = [...productSelectorState.allProducts];
            renderProductSelector();
            bindProductSelectorEvents();
            switchProductMode('select');
        } catch (error) {
            console.error('Error:', error);
        }
    }
}

// Make it available globally
window.initTopikoProductSelector = initTopikoProductSelector;

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize if we're already on products screen
    if (document.getElementById('productsGrid')) {
        setTimeout(initializeProductSelector, 500);
    }
});

// Make functions available globally
window.switchProductMode = switchProductMode;
window.toggleProductSelection = toggleProductSelection;
window.updateSelectedProductField = updateSelectedProductField;
window.removeSelectedProduct = removeSelectedProduct;
window.removeProductFromCatalog = removeProductFromCatalog;  
window.selectPopularProducts = selectPopularProducts;
window.clearAllSelections = clearAllSelections;
window.addCustomProduct = addCustomProduct;
window.proceedToProducts = proceedToProducts;

// ==========================================
// PRODUCT SYNC FIX - ADD THIS TO script.js
// ==========================================

// Sync selected products with existing system
function syncProductsWithExistingSystem() {
    // Convert selected products to the format your existing system expects
    const convertedProducts = productSelectorState.selectedProducts.map(product => ({
        id: product.originalId,
        name: product.editedName || product.name,
        price: product.editedPrice || product.price,
        description: product.editedDescription || product.description,
        category: product.category,
        subcategory: product.subcategory,
        image: product.image
    }));

    // Sync with common variable names that might be used
    if (typeof window.productsList !== 'undefined') {
        // If your system uses window.productsList
        window.productsList = [...convertedProducts];
    }
    
    if (typeof window.products !== 'undefined') {
        // If your system uses window.products
        window.products = [...convertedProducts];
    }
    
    if (typeof window.selectedProducts !== 'undefined') {
        // If your system uses window.selectedProducts
        window.selectedProducts = [...convertedProducts];
    }

    // Update any existing product count displays
    const productCountElements = document.querySelectorAll('[id*="product"], [class*="product-count"]');
    productCountElements.forEach(el => {
        if (el.textContent.match(/\d+/)) {
            el.textContent = el.textContent.replace(/\d+/, convertedProducts.length);
        }
    });

    // Trigger any existing validation functions
    if (typeof window.validateProducts === 'function') {
        window.validateProducts();
    }
    
    if (typeof window.checkProductRequirements === 'function') {
        window.checkProductRequirements();
    }
    
    if (typeof window.updateProductDisplay === 'function') {
        window.updateProductDisplay();
    }

    // Force update the themes screen if it exists
    if (typeof window.updateThemePreview === 'function') {
        window.updateThemePreview();
    }

    // Check for theme screen and populate it
    updateThemePreviews();
    
    // Enable the "Choose Theme" button if products exist
    enableThemeButton();

    console.log('✅ Synced', convertedProducts.length, 'products with existing system');
}

// Update theme previews with selected products
function updateThemePreviews() {
    const themePreviewIds = ['modern-preview', 'vibrant-preview', 'professional-preview', 'traditional-preview', 'creative-preview', 'luxury-preview'];
    
    if (productSelectorState.selectedProducts.length > 0) {
        const sampleProducts = productSelectorState.selectedProducts.slice(0, 3); // Show first 3 products
        
        themePreviewIds.forEach(previewId => {
            const previewElement = document.getElementById(previewId);
            if (previewElement) {
                const previewHTML = sampleProducts.map(product => `
                    <div style="display: flex; align-items: center; gap: 8px; margin: 8px 0; padding: 8px; background: rgba(255,255,255,0.1); border-radius: 6px; font-size: 0.8rem;">
                        <div style="width: 30px; height: 30px; background: rgba(255,255,255,0.2); border-radius: 4px; display: flex; align-items: center; justify-content: center;">📦</div>
                        <div>
                            <div style="font-weight: 600;">${(product.editedName || product.name).substring(0, 15)}...</div>
                            <div>₹${product.editedPrice || product.price}</div>
                        </div>
                    </div>
                `).join('');
                
                previewElement.innerHTML = previewHTML;
            }
        });
    }
}

// Enable theme button when products are selected
function enableThemeButton() {
    const themeButton = document.getElementById('themeNextBtn');
    if (themeButton && productSelectorState.selectedProducts.length > 0) {
        themeButton.disabled = false;
        themeButton.style.opacity = '1';
        themeButton.textContent = 'Complete Setup 🚀';
    }
}

// Override the updateProductCatalog function to include syncing
const originalUpdateProductCatalog = updateProductCatalog;
updateProductCatalog = function() {
    // Call the original function
    originalUpdateProductCatalog();
    
    // Add syncing
    syncProductsWithExistingSystem();
};

// Also sync when products are selected/deselected
const originalToggleProductSelection = toggleProductSelection;
toggleProductSelection = function(productId) {
    // Call the original function
    originalToggleProductSelection(productId);
    
    // Sync after selection change
    setTimeout(syncProductsWithExistingSystem, 100);
};

// Sync when page loads if products are already selected
setTimeout(() => {
    if (productSelectorState.selectedProducts.length > 0) {
        syncProductsWithExistingSystem();
    }
}, 1000);

// Debug function to check what your system is looking for
function debugProductVariables() {
    console.log('🔍 Debug: Checking product variables...');
    console.log('window.productsList:', window.productsList);
    console.log('window.products:', window.products);
    console.log('window.selectedProducts:', window.selectedProducts);
    console.log('productSelectorState.selectedProducts:', productSelectorState.selectedProducts);
    
    // Check for any variables containing "product"
    Object.keys(window).filter(key => key.toLowerCase().includes('product')).forEach(key => {
        console.log(`window.${key}:`, window[key]);
    });
}

// Make debug function available
window.debugProductVariables = debugProductVariables;

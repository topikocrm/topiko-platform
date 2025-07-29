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
    
    // Set language in i18n system
    window.i18n.setLanguage(lang);
    
    document.querySelectorAll('.language-option').forEach(option => {
        option.classList.remove('selected');
    });
    element.classList.add('selected');
    
    const languageName = window.i18n.getLanguageName(lang);
    window.TopikoUtils.showNotification(window.i18n.t('notifications.languageSelected', { language: languageName }), 'success');
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
            <h3><span style="margin-right: 0.5rem;">${categoryData.icon}</span>${window.i18n.t(`businessCategories.${businessCategory}`)}</h3>
            <p style="color: #553c9a; margin-bottom: 1.5rem; font-size: 0.9rem;">${window.i18n.t('categories.subtitle')}</p>
            
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
    
    // Update i18n for the new content
    window.i18n.updateUI();
    
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
// PRODUCT SELECTION SYSTEM - NEW FUNCTIONS
// ========================================

function switchProductMode(mode) {
    const selectMode = document.getElementById('selectMode');
    const customMode = document.getElementById('customMode');
    const selectorSection = document.getElementById('productSelectorSection');
    const customForm = document.getElementById('customProductForm');
    
    // Update button states
    selectMode.classList.toggle('active', mode === 'select');
    customMode.classList.toggle('active', mode === 'custom');
    
    // Show/hide sections
    if (mode === 'select') {
        selectorSection.style.display = 'block';
        customForm.style.display = 'none';
        
        // Load products if not already loaded
        if (!window.topikoApp.productsLoaded) {
            loadProductSelector();
        }
    } else {
        selectorSection.style.display = 'none';
        customForm.style.display = 'block';
    }
    
    window.TopikoUtils.addDebugLog(`📱 Product mode switched to: ${mode}`);
}

function loadProductSelector() {
    window.TopikoUtils.addDebugLog('🛍️ Loading products for selected categories...');
    
    // Get selected categories and subcategories from previous screen
    const selectedCategories = window.topikoApp.selectedCategories;
    const selectedSubcategories = window.topikoApp.selectedSubcategories;
    
    if (selectedCategories.length === 0) {
        showNotification('Please go back and select categories first', 'warning');
        return;
    }
    
    // Initialize product selection system with filtered products
    setupProductControls();
    setupQuickFilters();
    loadFilteredProductsGrid(); // Changed from loadProductsGrid()
    
    window.topikoApp.productsLoaded = true;
    window.TopikoUtils.addDebugLog(`✅ Product selector loaded for ${selectedCategories.length} categories`);
}

function loadFilteredProductsGrid() {
    // Get business category and selected subcategories
    const businessCategory = document.getElementById('category')?.value;
    const selectedSubcategories = window.topikoApp.selectedSubcategories;
    
    if (!businessCategory || !window.TopikoConfig.BUSINESS_CATEGORIES[businessCategory]) {
        showNotification('Business category not found. Please complete registration.', 'error');
        return;
    }
    
    // Filter products to only selected subcategories
    const filteredProducts = getProductsForSelectedCategories();
    
    // Update products count
    const productsCount = document.getElementById('productsCount');
    if (productsCount) {
        productsCount.textContent = filteredProducts.length;
    }
    
    // Display filtered products
    displayProductsGrid(filteredProducts);
    
    // Update quick filters to only show relevant categories
    updateQuickFiltersForSelection();
    
    window.TopikoUtils.addDebugLog(`🎯 Loaded ${filteredProducts.length} products for selected categories`);
}

function getProductsForSelectedCategories() {
    const businessCategory = document.getElementById('category')?.value;
    const selectedSubcategories = window.topikoApp.selectedSubcategories;
    
    if (!businessCategory || !window.TopikoConfig.INDIAN_PRODUCTS_DB[businessCategory]) {
        return [];
    }
    
    let relevantProducts = [];
    
    // Get products from the business category database
    const categoryData = window.TopikoConfig.INDIAN_PRODUCTS_DB[businessCategory];
    
    // If user selected specific subcategories, filter to those
    if (selectedSubcategories.length > 0) {
        Object.keys(categoryData).forEach(categoryKey => {
            const products = categoryData[categoryKey];
            if (Array.isArray(products)) {
                // Filter products that match selected subcategories
                const filteredProducts = products.filter(product => 
                    selectedSubcategories.includes(product.subcategory)
                );
                relevantProducts = [...relevantProducts, ...filteredProducts];
            }
        });
    } else {
        // If no subcategories selected, show all products from selected main categories
        const selectedCategories = window.topikoApp.selectedCategories;
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
    
    // Setup search with debounce
    if (searchInput) {
        let searchTimeout;
        searchInput.addEventListener('input', function() {
            clearTimeout(searchTimeout);
            searchTimeout = setTimeout(() => {
                filterAndDisplayProducts();
            }, 300);
        });
    }
    
    // Setup filter and sort changes
    if (categoryFilter) {
        categoryFilter.addEventListener('change', filterAndDisplayProducts);
    }
    
    if (sortSelect) {
        sortSelect.addEventListener('change', filterAndDisplayProducts);
    }
    
    // Setup price range
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
            // Update active state
            quickFilters.forEach(f => f.classList.remove('active'));
            this.classList.add('active');
            
            // Update category filter
            const category = this.getAttribute('data-category');
            const categoryFilter = document.getElementById('categoryFilter');
            if (categoryFilter) {
                categoryFilter.value = category;
            }
            
            filterAndDisplayProducts();
            
            window.TopikoUtils.addDebugLog(`🎯 Quick filter applied: ${category}`);
        });
    });
}

function updatePriceRangeDisplay() {
    const minPrice = document.getElementById('minPrice').value || 0;
    const maxPrice = document.getElementById('maxPrice').value || 5000;
    const display = document.getElementById('priceRangeDisplay');
    
    if (display) {
        display.textContent = `${minPrice} - ₹${maxPrice}`;
    }
}

function filterAndDisplayProducts() {
    const searchTerm = document.getElementById('productSearch')?.value || '';
    const categoryFilter = document.getElementById('categoryFilter')?.value || 'all';
    const sortBy = document.getElementById('sortBy')?.value || 'name';
    const minPrice = parseInt(document.getElementById('minPrice')?.value || 0);
    const maxPrice = parseInt(document.getElementById('maxPrice')?.value || 5000);
    
    const priceRange = { min: minPrice, max: maxPrice };
    
    // Get products only from selected categories (not all products)
    let baseProducts = getProductsForSelectedCategories();
    
    // Apply additional filters
    let filteredProducts = baseProducts.filter(product => {
        // Search filter
        if (searchTerm && !product.name.toLowerCase().includes(searchTerm.toLowerCase()) && 
            !product.description.toLowerCase().includes(searchTerm.toLowerCase())) {
            return false;
        }
        
        // Category filter
        if (categoryFilter !== 'all' && product.category !== categoryFilter) {
            return false;
        }
        
        // Price filter
        if (product.suggestedPrice < priceRange.min || product.suggestedPrice > priceRange.max) {
            return false;
        }
        
        return true;
    });
    
    // Sort products
    filteredProducts.sort((a, b) => {
        switch (sortBy) {
            case 'price-low': return a.suggestedPrice - b.suggestedPrice;
            case 'price-high': return b.suggestedPrice - a.suggestedPrice;
            case 'category': return (a.category || '').localeCompare(b.category || '');
            default: return a.name.localeCompare(b.name);
        }
    });
    
    // Update products count
    const productsCount = document.getElementById('productsCount');
    if (productsCount) {
        productsCount.textContent = filteredProducts.length;
    }
    
    // Display products
    displayProductsGrid(filteredProducts);
    
    window.TopikoUtils.addDebugLog(`🔍 Filtered to ${filteredProducts.length} products from selected categories`);
}

function loadProductsGrid() {
    // Load all products initially
    filterAndDisplayProducts();
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
    const isSelected = window.topikoApp.selectedProductIds?.includes(product.id) || false;
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
                    ${product.variants.map(variant => `<span class="variant-tag">${variant}</span>`).join('')}
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
    if (!window.topikoApp.selectedProductIds) {
        window.topikoApp.selectedProductIds = [];
    }
    
    const index = window.topikoApp.selectedProductIds.indexOf(productId);
    let product = findProductById(productId);
    
    if (index > -1) {
        // Remove product
        window.topikoApp.selectedProductIds.splice(index, 1);
        
        // Remove from userProducts array
        window.topikoApp.userProducts = window.topikoApp.userProducts.filter(p => p.id !== productId);
        
        window.TopikoUtils.showNotification(`Removed "${product.name}"`, 'info');
    } else {
        // Add product
        window.topikoApp.selectedProductIds.push(productId);
        
        // Add to userProducts array
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
        
        window.TopikoUtils.showNotification(`Added "${product.name}"`, 'success');
    }
    
    // Update UI
    updateProductCard(productId);
    updateSelectedProductsSection();
    window.TopikoUtils.displayProducts();
    window.TopikoUtils.calculateLeadScore();
    
    window.TopikoUtils.addDebugLog(`🛍️ Product ${index > -1 ? 'removed' : 'selected'}: ${product.name}`);
}

function updateProductCard(productId) {
    const productCard = document.querySelector(`[data-product-id="${productId}"]`);
    if (!productCard) return;
    
    const isSelected = window.topikoApp.selectedProductIds?.includes(productId) || false;
    const checkmark = productCard.querySelector('.selection-checkmark');
    const selectBtn = productCard.querySelector('.select-product-btn');
    const editBtn = productCard.querySelector('.edit-product-btn');
    
    // Update card appearance
    productCard.classList.toggle('selected', isSelected);
    
    // Update checkmark
    if (checkmark) {
        checkmark.style.opacity = isSelected ? '1' : '0';
    }
    
    // Update buttons
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
    
    Object.keys(window.TopikoConfig.INDIAN_PRODUCTS_DB).forEach(categoryKey => {
        Object.keys(window.TopikoConfig.INDIAN_PRODUCTS_DB[categoryKey]).forEach(subcategoryKey => {
            const products = window.TopikoConfig.INDIAN_PRODUCTS_DB[categoryKey][subcategoryKey];
            const product = products.find(p => p.id === productId);
            if (product) {
                foundProduct = product;
            }
        });
    });
    
    return foundProduct;
}

function selectPopularProducts() {
    const popularProducts = window.TopikoConfig.getPopularProducts(10);
    let addedCount = 0;
    
    popularProducts.forEach(product => {
        if (!window.topikoApp.selectedProductIds?.includes(product.id)) {
            toggleProductSelection(product.id);
            addedCount++;
        }
    });
    
    window.TopikoUtils.showNotification(`Added ${addedCount} popular products!`, 'success');
    
    // Refresh the grid to show selections
    setTimeout(() => {
        filterAndDisplayProducts();
    }, 500);
}

function clearAllSelections() {
    if (!window.topikoApp.selectedProductIds || window.topikoApp.selectedProductIds.length === 0) {
        window.TopikoUtils.showNotification('No products selected to clear', 'info');
        return;
    }
    
    const count = window.topikoApp.selectedProductIds.length;
    
    // Clear selections
    window.topikoApp.selectedProductIds = [];
    
    // Clear userProducts from database
    window.topikoApp.userProducts = window.topikoApp.userProducts.filter(p => !p.isFromDatabase);
    
    // Update UI
    updateSelectedProductsSection();
    window.TopikoUtils.displayProducts();
    filterAndDisplayProducts();
    
    window.TopikoUtils.showNotification(`Cleared ${count} selected products`, 'info');
}

function updateSelectedProductsSection() {
    const selectedSection = document.getElementById('selectedProductsSection');
    const selectedList = document.getElementById('selectedProductsList');
    const selectedCount = document.getElementById('selectedCount');
    
    const selectedProducts = window.topikoApp.userProducts.filter(p => p.isFromDatabase);
    
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
    const product = window.topikoApp.userProducts.find(p => p.id === productId);
    if (!product) return;
    
    // Create inline edit modal or form
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
    
    // Add to body
    document.body.insertAdjacentHTML('beforeend', editHTML);
    
    window.TopikoUtils.addDebugLog(`✏️ Editing product: ${product.name}`);
}

function saveProductEdit(productId) {
    const product = window.topikoApp.userProducts.find(p => p.id === productId);
    if (!product) return;
    
    // Get new values
    const newName = document.getElementById('editProductName').value.trim();
    const newPrice = parseFloat(document.getElementById('editProductPrice').value);
    const newDescription = document.getElementById('editProductDescription').value.trim();
    
    if (!newName || !newPrice || !newDescription) {
        window.TopikoUtils.showNotification('Please fill all fields', 'error');
        return;
    }
    
    // Update product
    product.name = newName;
    product.price = newPrice;
    product.description = newDescription;
    product.customPrice = newPrice;
    product.customDescription = newDescription;
    
    // Close modal
    cancelProductEdit();
    
    // Update displays
    updateSelectedProductsSection();
    window.TopikoUtils.displayProducts();
    filterAndDisplayProducts();
    
    window.TopikoUtils.showNotification(`Updated "${newName}"`, 'success');
    window.TopikoUtils.addDebugLog(`💾 Product updated: ${newName}`);
}

function cancelProductEdit() {
    const modal = document.getElementById('productEditModal');
    if (modal) {
        modal.remove();
    }
}

// ========================================
// CUSTOM PRODUCT FUNCTION (UPDATED)
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
// GLOBAL INITIALIZATION
// ========================================

// Auto-initialize product selector when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    // Set default mode to select
    setTimeout(() => {
        if (document.getElementById('selectMode')) {
            switchProductMode('select');
        }
    }, 1000);
});

// Make product functions globally available
if (typeof window !== 'undefined') {
    // Product Selection Functions
    window.switchProductMode = switchProductMode;
    window.selectPopularProducts = selectPopularProducts;
    window.clearAllSelections = clearAllSelections;
    window.toggleProductSelection = toggleProductSelection;
    window.editProduct = editProduct;
    window.saveProductEdit = saveProductEdit;
    window.cancelProductEdit = cancelProductEdit;
    window.addCustomProduct = addCustomProduct;
    
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
    window.goToDashboard = goToDashboard;
    window.startOver = startOver;
}

// ========================================
// GLOBAL CONSOLE LOGGING
// ========================================

window.TopikoUtils.addDebugLog('📱 Enhanced Topiko Lead Form loaded with Product Selection System', 'success');
console.log('📱 Enhanced Topiko Lead Form Ready');
console.log('🎯 NEW Features: 500+ Product Database, Advanced Product Selection, Inline Editing');
console.log('🛍️ To test: Navigate to Products screen and try "Select from 500+ Products"');

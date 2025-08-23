/* ========================================
   TOPIKO LEAD FORM - UTILITY FUNCTIONS - FIXED VERSION #1
   ======================================== */

// ========================================
// CRITICAL FIX: Initialize debugLogs FIRST
// ========================================

// Initialize debug logs array IMMEDIATELY
let debugLogs = [];

// ========================================
// DEBUG & LOGGING UTILITIES
// ========================================

function addDebugLog(message, type = 'info') {
    const timestamp = new Date().toLocaleTimeString();
    debugLogs.push({ timestamp, message, type });
    
    console.log(`🔍 DEBUG: ${message}`);
    
    const debugLogEl = document.getElementById('debugLog');
    if (debugLogEl) {
        debugLogEl.innerHTML = debugLogs.slice(-15).map(log => 
            `<div style="color: ${log.type === 'error' ? '#ff6b6b' : log.type === 'success' ? '#51cf66' : '#74c0fc'}; margin-bottom: 3px; font-size: 0.7rem;">
                [${log.timestamp.split(':').slice(-2).join(':')}] ${log.message}
            </div>`
        ).join('');
        debugLogEl.scrollTop = debugLogEl.scrollHeight;
    }
}

function toggleDebugPanel() {
    const panel = document.getElementById('debugPanel');
    if (panel) {
        panel.classList.toggle('show');
    }
}

/* ========================================
   SUPABASE INITIALIZATION
   ======================================== */

// Supabase Configuration
const SUPABASE_URL = 'https://xssbtsfjtwjholygdbqo.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhzc2J0c2ZqdHdqaG9seWdkYnFvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTMxOTk5MjUsImV4cCI6MjA2ODc3NTkyNX0.eOSIHTpvllcH-fK6MARoe5HPiXlujsrzUWfAhmUh94k'; // ← Replace with your real key

// Initialize Supabase Client with error handling
let supabase;
try {
    if (window.supabase && window.supabase.createClient) {
        supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
        addDebugLog('✅ Supabase client initialized successfully', 'success');
    } else {
        addDebugLog('❌ Supabase library not loaded', 'error');
    }
} catch (error) {
    addDebugLog(`❌ Supabase initialization failed: ${error.message}`, 'error');
}

// ========================================
// NOTIFICATION SYSTEM
// ========================================

function showNotification(message, type = 'info') {
    const notification = document.getElementById('notification');
    const content = document.getElementById('notificationContent');
    
    if (!notification || !content) {
        console.log(`Notification: ${message}`);
        return;
    }
    
    content.textContent = message;
    notification.className = `notification ${type} show`;
    
    setTimeout(() => {
        notification.classList.remove('show');
    }, 4000);
}

// ========================================
// MODAL UTILITIES
// ========================================

function showModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('show');
        addDebugLog(`📱 Modal shown: ${modalId}`);
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('show');
        addDebugLog(`📱 Modal closed: ${modalId}`);
    }
}

// Close modal when clicking outside
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('modal-overlay')) {
        e.target.classList.remove('show');
    }
});

// ========================================
// DATABASE UTILITIES
// ========================================

async function saveToSupabase(data, table, operation = 'insert', userId = null) {
    addDebugLog(`🔍 DEBUGGING ${table.toUpperCase()} ${operation.toUpperCase()}`, 'info');
    addDebugLog(`📤 Data: ${JSON.stringify(data, null, 2)}`, 'info');
    
    if (!supabase) {
        addDebugLog('❌ Supabase client not initialized', 'error');
        return { success: false, error: 'Supabase not initialized' };
    }
    
    try {
        let result, error;
        
        if (operation === 'update' && userId) {
            // 🔥 ADD UPDATE OPERATION
            const response = await supabase
                .from(table)
                .update(data)
                .eq('id', userId)
                .select();
            result = response.data;
            error = response.error;
        } else {
            // INSERT OPERATION
            const response = await supabase
                .from(table)
                .insert([data])
                .select();
            result = response.data;
            error = response.error;
        }
        
        if (error) {
            addDebugLog(`❌ Supabase error: ${error.message}`, 'error');
            console.error('❌ Full error:', error);
            return { success: false, error };
        }
        
        addDebugLog(`✅ Data ${operation}d in ${table}: ${result[0]?.id}`, 'success');
        return { success: true, data: result };
        
    } catch (networkError) {
        addDebugLog(`❌ Network error: ${networkError.message}`, 'error');
        return { success: false, error: networkError };
    }
}

// 🧪 DEBUG TEST FUNCTIONS
async function testDatabaseConnection() {
    addDebugLog('🧪 Testing database connection...', 'info');
    
    const minimalData = {
        name: 'Debug Test ' + Date.now(),
        email: 'debug' + Date.now() + '@test.com',
        phone: '9999999999',
        business_name: 'Debug Business'
    };
    
    const result = await saveToSupabase(minimalData, 'users');
    addDebugLog(`🧪 Test result: ${result.success ? 'SUCCESS' : 'FAILED'}`, result.success ? 'success' : 'error');
    return result;
}

// ========================================
// SCREEN NAVIGATION UTILITIES
// ========================================

function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    
    const targetScreen = document.getElementById(screenId);
    if (targetScreen) {
        targetScreen.classList.add('active');
        
        // Update global variables (safe check)
        if (typeof window.topikoApp !== 'undefined') {
            window.topikoApp.pageViews++;
            
            // Update navigation history
            if (window.topikoApp.currentStep !== screenId) {
                window.topikoApp.currentStep = screenId;
                if (window.topikoApp.navigationHistory[window.topikoApp.navigationHistory.length - 1] !== screenId) {
                    window.topikoApp.navigationHistory.push(screenId);
                }
            }
            
            updateProgressBar(window.topikoApp.currentStep);
            updateBackButton();
            
            // Stop motivational messages when leaving categories
            if (screenId !== 'categories') {
                stopMotivationalMessages();
            }
            
            if (screenId === 'categories') {
                if (typeof loadCategories === 'function') {
                    loadCategories();
                }
                // Start dynamic messages after a short delay
                setTimeout(() => {
                    updateMotivationalMessages();
                }, 200);
            }
            
            if (screenId === 'products') {
                updateProductsHelpSection();
                // Initialize product selector - reload if category changed or not loaded
                setTimeout(() => {
                    const currentBusinessCategory = document.getElementById('category')?.value;
                    const needsReload = !window.topikoApp.productsLoaded || 
                                      window.topikoApp.lastLoadedCategory !== currentBusinessCategory;
                    
                    if (needsReload && typeof window.switchProductMode === 'function') {
                        // Mark as not loaded to force refresh
                        window.topikoApp.productsLoaded = false;
                        window.topikoApp.lastLoadedCategory = currentBusinessCategory;
                        window.switchProductMode('select');
                        console.log(`🔄 Reloading products for category: ${currentBusinessCategory}`);
                    }
                }, 300);
            }
            
            if (screenId === 'themes') {
                // Always refresh theme previews to reflect current products/categories
                setTimeout(() => {
                    populateThemePreviews();
                    console.log(`🎨 Refreshed theme previews with ${window.topikoApp.userProducts?.length || 0} products`);
                }, 100);
            }

            // Add personalization
            addPersonalization(screenId);
            
            addDebugLog(`📱 Screen: ${screenId} (views: ${window.topikoApp.pageViews})`);
            calculateLeadScore();
        }
    }
}

function updateProgressBar(activeStep) {
    const progressElements = document.querySelectorAll('.progress-step');
    
    // Safe check for config
    if (!window.TopikoConfig || !window.TopikoConfig.STEP_CONFIG) {
        addDebugLog('⚠️ TopikoConfig not loaded', 'error');
        return;
    }
    
    const activeProgressIndex = window.TopikoConfig.STEP_CONFIG.PROGRESS_STEPS.indexOf(activeStep);
    
    progressElements.forEach((step, index) => {
        const stepData = step.getAttribute('data-step');
        const stepProgressIndex = window.TopikoConfig.STEP_CONFIG.PROGRESS_STEPS.indexOf(stepData);
        
        step.classList.remove('completed', 'in-progress');
        
        if (stepProgressIndex < activeProgressIndex) {
            step.classList.add('completed');
        } else if (stepProgressIndex === activeProgressIndex) {
            step.classList.add('in-progress');
        }
    });
    
    addDebugLog(`📊 Progress bar updated: ${activeStep} (${activeProgressIndex + 1}/${window.TopikoConfig.STEP_CONFIG.PROGRESS_STEPS.length})`);
}

function updateBackButton() {
    const backButton = document.getElementById('backButton');
    if (!window.topikoApp || !backButton) return;
    
    const canGoBack = window.topikoApp.navigationHistory.length > 1 && window.topikoApp.currentStep !== 'welcome';
    
    if (canGoBack) {
        backButton.classList.remove('hidden');
    } else {
        backButton.classList.add('hidden');
    }
}

function goBack() {
    if (!window.topikoApp) return;
    
    if (window.topikoApp.navigationHistory.length > 1) {
        window.topikoApp.navigationHistory.pop();
        const previousStep = window.topikoApp.navigationHistory[window.topikoApp.navigationHistory.length - 1];
        window.topikoApp.currentStep = previousStep;
        showScreen(previousStep);
        updateBackButton();
        addDebugLog(`🔙 Navigated back to: ${previousStep}`);
    }
}

function navigateToStep(stepId) {
    // Safe check for config
    if (!window.TopikoConfig || !window.TopikoConfig.STEP_CONFIG) {
        addDebugLog(`❌ Navigation blocked: TopikoConfig not loaded`, 'error');
        return;
    }
    
    if (!window.TopikoConfig.STEP_CONFIG.PROGRESS_STEPS.includes(stepId)) {
        addDebugLog(`❌ Navigation blocked: ${stepId} (not in progress steps)`, 'error');
        return;
    }
    
    if (!window.topikoApp) return;
    
    const targetProgressIndex = window.TopikoConfig.STEP_CONFIG.PROGRESS_STEPS.indexOf(stepId);
    const currentProgressIndex = window.TopikoConfig.STEP_CONFIG.PROGRESS_STEPS.indexOf(window.topikoApp.currentStep);
    
    if (targetProgressIndex <= currentProgressIndex || window.topikoApp.currentStep === 'welcome' || window.topikoApp.currentStep === 'language') {
        showScreen(stepId);
        addDebugLog(`📱 Navigated to: ${stepId} via progress bar`);
    } else {
        showNotification('Complete current step first', 'warning');
        addDebugLog(`❌ Navigation blocked: ${stepId} (step not available yet)`, 'error');
    }
}

// ========================================
// PERSONALIZATION UTILITIES
// ========================================

function addPersonalization(screenId) {
    if (!window.topikoApp) return;
    
    const name = window.topikoApp.userName || document.getElementById('fullName')?.value || '';
    const business = window.topikoApp.businessName || document.getElementById('businessName')?.value || '';
    
    if (screenId === 'qualifying-questions' && name) {
        const titleEl = document.getElementById('qualifyingTitle');
        if (titleEl) {
            titleEl.innerHTML = `Hi ${name}! Let's setup things for you`;
        }
    }
    
    if (screenId === 'categories' && business) {
        const titleEl = document.getElementById('categoriesTitle');
        if (titleEl) {
            titleEl.innerHTML = `Select Categories for ${business}`;
        }
    }
    
    if (screenId === 'products' && business) {
        const titleEl = document.getElementById('productsTitle');
        const formTitleEl = document.getElementById('productFormTitle');
        if (titleEl) {
            titleEl.innerHTML = `Add Products for ${business}`;
        }
        if (formTitleEl) {
            formTitleEl.innerHTML = `Add ${business}'s Products/Services`;
        }
    }
    
    if (screenId === 'themes' && business) {
        const titleEl = document.getElementById('themesTitle');
        if (titleEl) {
            titleEl.innerHTML = `Choose ${business}'s Theme`;
        }
    }
}

// ========================================
// LEAD SCORING UTILITIES
// ========================================

function calculateLeadScore() {
    if (!window.topikoApp) return 0;
    
    let score = 0;
    
    if (window.topikoApp.selectedLanguage) score += 5;
    score += Math.min(window.topikoApp.selectedGoals.length * 10, 50);
    score += Math.floor(window.topikoApp.formProgress * 0.25);
    
    const sessionMinutes = (Date.now() - window.topikoApp.sessionStartTime) / 60000;
    if (sessionMinutes > 1) score += 5;
    if (sessionMinutes > 3) score += 5;
    
    score += Math.min(window.topikoApp.pageViews * 2, 10);
    score += Math.min(window.topikoApp.selectedCategories.length * 5, 25);
    score += Math.min(window.topikoApp.userProducts.length * 3, 15);
    if (window.topikoApp.selectedTheme) score += 5;
    
    // Qualifying questions scoring
    let qualifyingScore = 0;
    
    switch (window.topikoApp.qualifyingAnswers.online_presence) {
        case 'none': qualifyingScore += 8; break;
        case 'whatsapp': qualifyingScore += 6; break;
        case 'social': qualifyingScore += 4; break;
        case 'basic_website': qualifyingScore += 3; break;
        case 'full_website': qualifyingScore += 2; break;
    }
    
    switch (window.topikoApp.qualifyingAnswers.budget) {
        case '25000+': qualifyingScore += 8; break;
        case '10000-25000': qualifyingScore += 6; break;
        case '5000-10000': qualifyingScore += 4; break;
    }
    
    if (window.topikoApp.qualifyingAnswers.decision_maker === 'yes') qualifyingScore += 5;
    
    switch (window.topikoApp.qualifyingAnswers.timeline) {
        case 'immediately': qualifyingScore += 4; break;
        case 'within_week': qualifyingScore += 3; break;
        case 'this_month': qualifyingScore += 2; break;
        case 'just_checking': qualifyingScore += 1; break;
    }
    
    score += Math.min(qualifyingScore, 25);
    window.topikoApp.leadScore = Math.min(score, 100);
    
    // Update widget (hidden but keep for internal tracking)
    updateLeadScoreWidget();
    addDebugLog(`📊 Lead Score: ${window.topikoApp.leadScore}/100`);
    return window.topikoApp.leadScore;
}

function updateLeadScoreWidget() {
    // Lead score widget is hidden - keeping function for compatibility
    if (!window.topikoApp) return;
    
    // Still calculate for internal tracking but don't display
    let quality, circleClass;
    if (window.topikoApp.leadScore >= 70) {
        quality = 'Hot';
        circleClass = 'hot';
    } else if (window.topikoApp.leadScore >= 40) {
        quality = 'Warm';
        circleClass = 'warm';
    } else {
        quality = 'Cold';
        circleClass = 'cold';
    }
    
    // Widget is hidden, but we keep the data for internal use
    window.topikoApp.leadQuality = quality;
}

function toggleScoreDetails() {
    if (!window.topikoApp) return;
    
    // Lead score widget is hidden, but show debug info in notification
    const sessionMinutes = Math.round((Date.now() - window.topikoApp.sessionStartTime) / 60000);
    const quality = window.topikoApp.leadScore >= 70 ? 'Hot' : window.topikoApp.leadScore >= 40 ? 'Warm' : 'Cold';
    showNotification(`Debug - Score: ${window.topikoApp.leadScore}/100 | Quality: ${quality} | Session: ${sessionMinutes}m | Views: ${window.topikoApp.pageViews}`, 'info');
}

// ========================================
// FOMO SYSTEM UTILITIES
// ========================================

function getRandomBusinessData() {
    // Safe check for config
    if (!window.TopikoConfig) {
        addDebugLog('⚠️ TopikoConfig not loaded for FOMO system', 'error');
        return {
            business: 'TrendyWear Collection',
            city: 'Mumbai', 
            template: { text: '{business} from {city} just went live with help of Topiko', status: 'New Member' },
            message: 'TrendyWear Collection from Mumbai just went live with help of Topiko'
        };
    }
    
    const business = window.TopikoConfig.INDIAN_BUSINESS_NAMES[Math.floor(Math.random() * window.TopikoConfig.INDIAN_BUSINESS_NAMES.length)];
    const city = window.TopikoConfig.INDIAN_CITIES[Math.floor(Math.random() * window.TopikoConfig.INDIAN_CITIES.length)];
    const template = window.TopikoConfig.FOMO_MESSAGE_TEMPLATES[Math.floor(Math.random() * window.TopikoConfig.FOMO_MESSAGE_TEMPLATES.length)];
    
    const message = template.text.replace('{business}', business).replace('{city}', city);
    
    return { business, city, template, message };
}

function showFomoNotification() {
    if (!window.topikoApp) return;
    
    if (Date.now() - window.topikoApp.lastFomoShow < 10000) return;
    
    const fomoEl = document.getElementById('fomoNotification');
    const contentEl = document.getElementById('fomoContent');
    const timeEl = document.getElementById('fomoTime');
    const statusEl = document.querySelector('.fomo-status');
    
    if (!fomoEl || !contentEl || !timeEl || !statusEl) return;
    
    const data = getRandomBusinessData();
    
    contentEl.innerHTML = `<span class="business-name">${data.business}</span> from <span class="business-location">${data.city}</span> ${data.message.split(`${data.business} from ${data.city} `)[1] || data.message.split(`${data.business} in ${data.city} `)[1] || 'just went live with help of Topiko'}`;
    
    timeEl.textContent = `${Math.floor(Math.random() * 15) + 1} minutes ago`;
    statusEl.textContent = data.template.status;
    
    fomoEl.classList.add('show');
    window.topikoApp.lastFomoShow = Date.now();
    
    setTimeout(() => {
        fomoEl.classList.remove('show');
        fomoEl.classList.add('hide');
        setTimeout(() => fomoEl.classList.remove('hide'), 500);
    }, 5000);
    
    window.topikoApp.businessCounter += Math.floor(Math.random() * 2) + 1;
    updateBusinessCounter();
}

function updateBusinessCounter() {
    if (!window.topikoApp) return;
    
    const counterEl = document.getElementById('counterNumber');
    if (counterEl) {
        counterEl.textContent = window.topikoApp.businessCounter.toLocaleString();
    }
}

function showBusinessCounter() {
    const counterEl = document.getElementById('fomoCounter');
    if (counterEl) {
        counterEl.classList.add('show');
        setTimeout(() => counterEl.classList.remove('show'), 4000);
    }
}

function startFomoSystem() {
    setTimeout(() => showFomoNotification(), 8000);
    setTimeout(() => showBusinessCounter(), 15000);
    
    setInterval(() => {
        const randomDelay = Math.random() * 20000 + 25000;
        setTimeout(() => showFomoNotification(), randomDelay);
    }, 45000);
    
    setInterval(() => showBusinessCounter(), 90000);
}

// ========================================
// PRODUCT UTILITIES
// ========================================

function getDefaultProductImage() {
    return 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjZjFmNWY5Ii8+Cjx0ZXh0IHg9IjEwMCIgeT0iMTEwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjNjM2NjcwIiBmb250LWZhbWlseT0iYXJpYWwiIGZvbnQtc2l6ZT0iNDAiPvCfk6Y8L3RleHQ+PC9zdmc+';
}

function displayProducts() {
    if (!window.topikoApp) return;
    
    const productsList = document.getElementById('productsList');
    const productCount = document.getElementById('productCount');
    
    if (!productsList || !productCount) return;
    
    productCount.textContent = window.topikoApp.userProducts.length;
    
    if (window.topikoApp.userProducts.length === 0) {
        productsList.innerHTML = `
            <div style="text-align: center; padding: 2rem; color: #64748b; background: rgba(255, 255, 255, 0.5); border-radius: 12px;">
                <div style="font-size: 3rem; margin-bottom: 1rem;">📦</div>
                <p>No products selected yet. Choose products above or add custom products!</p>
            </div>
        `;
        return;
    }
    
    // Safe check for business category
    const businessCategory = document.getElementById('category')?.value;
    let categoryData = null;
    
    if (window.TopikoConfig && window.TopikoConfig.BUSINESS_CATEGORIES && businessCategory) {
        categoryData = window.TopikoConfig.BUSINESS_CATEGORIES[businessCategory];
    }
    
    productsList.innerHTML = window.topikoApp.userProducts.map(product => {
        const categoryName = categoryData?.categories[product.categoryKey]?.name || product.categoryKey;
        const subcategoryName = product.subcategoryKey ? 
            (window.TopikoConfig?.SUBCATEGORY_NAMES?.[product.subcategoryKey] || product.subcategoryKey) : '';
        
        return `
            <div class="product-card">
                <div class="product-image" style="background-image: url('${product.imageUrl}');">
                    <div class="product-price">₹${product.price.toLocaleString()}</div>
                </div>
                <div class="product-content">
                    <div class="product-name">${product.name}</div>
                    <div class="product-description">${product.description}</div>
                    <div style="display: flex; justify-content: space-between; font-size: 0.7rem; color: #64748b; margin-top: 0.5rem;">
                        <span>📁 ${categoryName}</span>
                        ${subcategoryName ? `<span>🏷️ ${subcategoryName}</span>` : ''}
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

// ========================================
// THEME UTILITIES
// ========================================

function populateThemePreviews() {
    if (!window.topikoApp) return;
    
    // Don't replace theme images - they should remain as static theme previews
    // Theme images are important for users to see the visual style differences
    console.log('🎨 Theme previews populated (using static theme images)');
    
    // Just restore theme selection state without touching the images
    restoreThemeSelection();
}

// Restore theme selection visual state when navigating back to themes
function restoreThemeSelection() {
    if (!window.topikoApp?.selectedTheme) return;
    
    // Remove all selected states first
    document.querySelectorAll('.theme-option').forEach(option => {
        option.classList.remove('selected');
    });
    
    // Find and mark the previously selected theme
    const themeMap = {
        'professional': 0,
        'modern': 1,
        'creative': 2,
        'luxury': 3,
        'grocery': 4,
        'ecommerce': 5,
        'food': 6,
        'beauty': 7,
        'jewelry': 8
    };
    
    const themeOptions = document.querySelectorAll('.theme-option');
    const selectedIndex = themeMap[window.topikoApp.selectedTheme];
    
    if (selectedIndex !== undefined && themeOptions[selectedIndex]) {
        themeOptions[selectedIndex].classList.add('selected');
        
        // Update the selected theme name display
        const themeNames = {
            'modern': 'Modern & Minimalist',
            'vibrant': 'Colorful & Vibrant',
            'professional': 'Professional & Corporate',
            'traditional': 'Traditional & Classic', 
            'creative': 'Creative & Artistic',
            'luxury': 'Style District',
            'grocery': 'Cart & Carry',
            'ecommerce': 'Global Lane',
            'food': 'Gourmet Bloom',
            'beauty': 'Urban Luxe',
            'jewelry': 'Carat Curve'
        };
        
        const selectedThemeNameEl = document.getElementById('selectedThemeName');
        if (selectedThemeNameEl) {
            selectedThemeNameEl.textContent = themeNames[window.topikoApp.selectedTheme];
        }
        
        // Enable the Complete Setup button
        const nextBtn = document.getElementById('themeNextBtn');
        if (nextBtn) {
            nextBtn.disabled = false;
            nextBtn.style.opacity = '1';
        }
        
        console.log(`🎨 Restored theme selection: ${window.topikoApp.selectedTheme}`);
    }
}

// ========================================
// MOTIVATIONAL MESSAGES UTILITIES
// ========================================

let currentMessageIndex = 0;
let messageInterval = null;

function updateMotivationalMessages() {
    if (!window.topikoApp) return;
    
    if (window.topikoApp.currentStep !== 'categories') {
        return;
    }
    
    const messagesContainer = document.getElementById('motivationalMessages');
    if (!messagesContainer) {
        addDebugLog('❌ Messages container not found', 'error');
        return;
    }
    
    // Stop any existing interval
    stopMotivationalMessages();
    
    // Clear any existing messages
    messagesContainer.innerHTML = '';
    
    // Start new message rotation
    currentMessageIndex = 0;
    
    // Show first message immediately
    showNextMessage();
    
    // Set interval for automatic rotation
    messageInterval = setInterval(() => {
        showNextMessage();
    }, 3500);
    
    addDebugLog('🔄 Dynamic messages started', 'success');
}

function showNextMessage() {
    if (!window.topikoApp) return;
    
    if (window.topikoApp.currentStep !== 'categories') {
        stopMotivationalMessages();
        return;
    }
    
    const messagesContainer = document.getElementById('motivationalMessages');
    if (!messagesContainer) return;
    
    const message = generatePersonalizedMessage(currentMessageIndex);
    
    addDebugLog(`📝 Showing message ${currentMessageIndex + 1}`, 'info');
    
    showNewMessage(message, messagesContainer);
    
    // Safe check for message templates
    const templateCount = window.TopikoConfig?.MOTIVATIONAL_MESSAGE_TEMPLATES?.length || 5;
    currentMessageIndex = (currentMessageIndex + 1) % templateCount;
}

function generatePersonalizedMessage(index) {
    if (!window.topikoApp || !window.TopikoConfig?.MOTIVATIONAL_MESSAGE_TEMPLATES) {
        return 'Select your categories to see how your business will look online!';
    }
    
    const template = window.TopikoConfig.MOTIVATIONAL_MESSAGE_TEMPLATES[index];
    if (!template) return 'Keep going! Your business is taking shape!';
    
    // Safe check for step config
    const stepConfig = window.TopikoConfig.STEP_CONFIG?.PROGRESS_STEPS || ['goals', 'registration', 'qualifying-questions', 'categories', 'products', 'themes'];
    const currentProgressIndex = stepConfig.indexOf(window.topikoApp.currentStep);
    const stepsLeft = Math.max(1, stepConfig.length - currentProgressIndex - 1);
    const plural = stepsLeft !== 1 ? 's' : '';
    const businessDisplayName = window.topikoApp.businessName || 'your business';
    
    // Get category name
    const categoryDropdown = document.getElementById('category');
    let categoryName = 'your category';
    if (categoryDropdown && categoryDropdown.value && window.TopikoConfig.BUSINESS_CATEGORIES?.[categoryDropdown.value]) {
        const categoryData = window.TopikoConfig.BUSINESS_CATEGORIES[categoryDropdown.value];
        categoryName = categoryData.name;
    }
    
    const personalizedMessage = template
        .replace('{stepsLeft}', stepsLeft.toString())
        .replace('{plural}', plural)
        .replace('{businessName}', businessDisplayName)
        .replace('{category}', categoryName);
        
    return personalizedMessage;
}

function showNewMessage(messageText, container) {
    // Mark existing messages for exit
    const existingMessages = container.querySelectorAll('.motivational-message');
    
    existingMessages.forEach((msg) => {
        if (!msg.classList.contains('exit')) {
            msg.classList.remove('active');
            msg.classList.add('exit');
        }
    });
    
    // Create new message
    const messageEl = document.createElement('div');
    messageEl.className = 'motivational-message';
    messageEl.textContent = messageText;
    
    container.appendChild(messageEl);
    
    // Trigger slide-in animation
    setTimeout(() => {
        messageEl.classList.add('active');
    }, 100);
    
    // Clean up old messages
    setTimeout(() => {
        const oldMessages = container.querySelectorAll('.motivational-message.exit');
        oldMessages.forEach(msg => {
            if (msg.parentNode) {
                msg.parentNode.removeChild(msg);
            }
        });
    }, 700);
}

function stopMotivationalMessages() {
    if (messageInterval) {
        clearInterval(messageInterval);
        messageInterval = null;
        addDebugLog('🔄 Dynamic messages stopped', 'info');
    }
}

// ========================================
// PRODUCTS HELP SECTION UTILITIES
// ========================================

function updateProductsHelpSection() {
    if (!window.topikoApp) return;
    
    // Generate random number between 55 and 75
    const claimedCount = Math.floor(Math.random() * (75 - 55 + 1)) + 55;
    const remainingSlots = 75 - claimedCount;
    
    // Calculate percentage for progress bar
    const currentPercentage = (claimedCount / 75) * 100;
    const isUrgent = remainingSlots <= 15;
    
    // Update DOM elements
    const helpSection = document.getElementById('productsHelpSection');
    const titleEl = document.getElementById('productsHelpTitle');
    const progressFillEl = document.getElementById('productsHelpProgressFill');
    const textEl = document.getElementById('productsHelpText');
    const claimedCountEl = document.getElementById('productsClaimedCount');
    const monthEl = document.getElementById('productsCurrentMonth');
    
    if (helpSection && titleEl && progressFillEl && textEl && claimedCountEl && monthEl) {
        // Update urgency styling
        if (isUrgent) {
            helpSection.classList.add('urgent');
            titleEl.innerHTML = `🚨 Free Professional Setup Available! <span class="urgent-text">Only ${remainingSlots} spots left!</span>`;
        } else {
            helpSection.classList.remove('urgent');
            titleEl.textContent = '🎯 Free Professional Setup Available!';
        }
        
        // Update progress bar
        progressFillEl.style.width = `${currentPercentage}%`;
        
        // Update text content
        claimedCountEl.textContent = claimedCount;
        monthEl.textContent = new Date().toLocaleString('en-US', { month: 'long' });
        
        if (isUrgent) {
            textEl.innerHTML = `Topiko is helping with free setup for 75 businesses every month. <span class="urgent-text">${claimedCount} claimed for ${monthEl.textContent}. Only ${remainingSlots} spots left!</span> Click here for help!`;
        } else {
            textEl.innerHTML = `Topiko is helping with free setup for 75 businesses every month. ${claimedCount} claimed for ${monthEl.textContent}. Click here for help!`;
        }
        
        addDebugLog(`📊 Help section updated: ${claimedCount}/75 claimed`, 'info');
    }
}

// ========================================
// SESSION MANAGEMENT UTILITIES
// ========================================

function saveSessionData() {
    if (!window.topikoApp) return;
    
    const currentData = {
        selectedGoals: window.topikoApp.selectedGoals,
        selectedLanguage: window.topikoApp.selectedLanguage,
        selectedCategories: window.topikoApp.selectedCategories,
        selectedSubcategories: window.topikoApp.selectedSubcategories,
        userProducts: window.topikoApp.userProducts,
        selectedProductIds: window.topikoApp.selectedProductIds || [],
        selectedTheme: window.topikoApp.selectedTheme,
        qualifyingAnswers: window.topikoApp.qualifyingAnswers,
        leadScore: window.topikoApp.leadScore,
        formProgress: window.topikoApp.formProgress,
        sessionStartTime: window.topikoApp.sessionStartTime,
        currentStep: window.topikoApp.currentStep,
        navigationHistory: window.topikoApp.navigationHistory,
        userName: window.topikoApp.userName,
        businessName: window.topikoApp.businessName,
        productsLoaded: window.topikoApp.productsLoaded,
        lastSaved: Date.now()
    };
    localStorage.setItem('topiko_current_session', JSON.stringify(currentData));
}

function loadSessionData() {
    try {
        const savedData = localStorage.getItem('topiko_current_session');
        if (savedData) {
            return JSON.parse(savedData);
        }
    } catch (error) {
        addDebugLog(`❌ Error loading session data: ${error.message}`, 'error');
    }
    return null;
}

// ========================================
// INITIALIZATION UTILITIES
// ========================================

function initializeTopikoApp() {
    addDebugLog('🚀 Initializing Topiko App...', 'info');
    
    // Initialize global app state
    window.topikoApp = {
        // Core variables
        sessionStartTime: Date.now(),
        selectedGoals: [],
        selectedLanguage: 'en',
        selectedCategories: [],
        selectedSubcategories: [],
        userProducts: [],
        currentUserId: null,
        selectedTheme: null,
        subdomainCreated: false,  // Track if subdomain was created
        pageViews: 1,
        leadScore: 0,
        formProgress: 0,
        userName: '',
        businessName: '',

        // Navigation tracking
        currentStep: 'welcome',
        navigationHistory: ['welcome'],

        // Qualifying Questions Data
        qualifyingAnswers: {
            online_presence: '',
            budget: '',
            decision_maker: '',
            timeline: ''
        },

        // Product Selection System
        selectedProductIds: [],
        productsLoaded: false,

        // FOMO system - safe defaults
        fomoActive: true,
        fomoTimer: null,
        businessCounter: window.TopikoConfig?.DEFAULTS?.BUSINESS_COUNTER || 247,
        lastFomoShow: 0,
        helpClaimedCount: window.TopikoConfig?.DEFAULTS?.HELP_CLAIMED_COUNT || 47
    };

    addDebugLog('✅ Topiko App State initialized successfully', 'success');
}

// ========================================
// ERROR HANDLING
// ========================================

window.addEventListener('error', function(e) {
    addDebugLog(`❌ Global Error: ${e.error?.message || e.message}`, 'error');
});

// ========================================
// EXPORT UTILITIES
// ========================================

// Attach utilities to window for global access
if (typeof window !== 'undefined') {
    window.TopikoUtils = {
        // Debug & Logging
        addDebugLog,
        toggleDebugPanel,
        
        // Notifications & Modals
        showNotification,
        showModal,
        closeModal,
        
        // Database
        saveToSupabase,
        testDatabaseConnection,
        
        // Navigation
        showScreen,
        updateProgressBar,
        updateBackButton,
        goBack,
        navigateToStep,
        
        // Personalization
        addPersonalization,
        
        // Lead Scoring
        calculateLeadScore,
        updateLeadScoreWidget,
        toggleScoreDetails,
        
        // FOMO System
        getRandomBusinessData,
        showFomoNotification,
        updateBusinessCounter,
        showBusinessCounter,
        startFomoSystem,
        
        // Products
        getDefaultProductImage,
        displayProducts,
        
        // Themes
        populateThemePreviews,
        restoreThemeSelection,
        
        // Motivational Messages
        updateMotivationalMessages,
        showNextMessage,
        generatePersonalizedMessage,
        showNewMessage,
        stopMotivationalMessages,
        
        // Products Help
        updateProductsHelpSection,
        
        // Session Management
        saveSessionData,
        loadSessionData,
        
        // Initialization
        initializeTopikoApp
    };
    
    // Make test function globally available
    window.testDatabaseConnection = testDatabaseConnection;
}

// Initialize debug system immediately
addDebugLog('📱 FIXED Topiko Utils loaded successfully', 'success');
console.log('✅ DEBUG LOGS INITIALIZED - No more debugLogs errors!');

/* ========================================
   TOPIKO LEAD FORM - UTILITY FUNCTIONS
   ======================================== */

// ========================================
// DEBUG & LOGGING UTILITIES
// ========================================

let debugLogs = [];

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
    panel.classList.toggle('show');
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
    
    // If message is a translation key, translate it
    const translatedMessage = message.startsWith('notifications.') ? window.i18n.t(message) : message;
    
    content.textContent = translatedMessage;
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

async function saveToSupabase(data, table) {
    try {
        addDebugLog(`💾 Saving to ${table}`);
        
        const response = await fetch(`${window.TopikoConfig.SUPABASE_CONFIG.URL}/rest/v1/${table}`, {
            method: 'POST',
            headers: {
                'apikey': window.TopikoConfig.SUPABASE_CONFIG.ANON_KEY,
                'Authorization': `Bearer ${window.TopikoConfig.SUPABASE_CONFIG.ANON_KEY}`,
                'Content-Type': 'application/json',
                'Prefer': 'return=representation'
            },
            body: JSON.stringify(data)
        });

        if (response.ok) {
            const result = await response.json();
            addDebugLog(`✅ Saved to ${table}`, 'success');
            return { success: true, data: result };
        } else {
            const errorText = await response.text();
            addDebugLog(`❌ Save failed: ${response.status}`, 'error');
            return { success: false, error: `${response.status}: ${errorText}` };
        }
    } catch (error) {
        addDebugLog(`❌ Save error: ${error.message}`, 'error');
        return { success: false, error: error.message };
    }
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
        
        // Update global variables (these will be defined in script.js)
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
                loadCategories();
                // Start dynamic messages after a short delay to ensure DOM is ready
                setTimeout(() => {
                    updateMotivationalMessages();
                }, 200);
            }
            
            if (screenId === 'products') {
                updateProductsHelpSection();
                // Initialize product selector if not already done
                setTimeout(() => {
                    if (!window.topikoApp.productsLoaded && typeof window.switchProductMode === 'function') {
                        window.switchProductMode('select');
                    }
                }, 300);
            }
            
            if (screenId === 'themes') {
                populateThemePreviews();
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
    if (!window.topikoApp) return;
    
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
        // Remove current step from history
        window.topikoApp.navigationHistory.pop();
        // Get previous step
        const previousStep = window.topikoApp.navigationHistory[window.topikoApp.navigationHistory.length - 1];
        window.topikoApp.currentStep = previousStep;
        showScreen(previousStep);
        updateBackButton();
        addDebugLog(`🔙 Navigated back to: ${previousStep}`);
    }
}

function navigateToStep(stepId) {
    if (!window.TopikoConfig.STEP_CONFIG.PROGRESS_STEPS.includes(stepId)) {
        addDebugLog(`❌ Navigation blocked: ${stepId} (not in progress steps)`);
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
        addDebugLog(`❌ Navigation blocked: ${stepId} (step not available yet)`);
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
    
    updateLeadScoreWidget();
    addDebugLog(`📊 Lead Score: ${window.topikoApp.leadScore}/100`);
    return window.topikoApp.leadScore;
}

function updateLeadScoreWidget() {
    if (!window.topikoApp) return;
    
    const scoreValue = document.getElementById('leadScoreValue');
    const scoreCircle = document.getElementById('leadScoreCircle');
    const scoreLabel = document.getElementById('scoreLabel');
    
    if (scoreValue) scoreValue.textContent = window.topikoApp.leadScore;
    
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
    
    if (scoreLabel) scoreLabel.textContent = quality;
    if (scoreCircle) {
        scoreCircle.className = `score-circle ${circleClass}`;
    }
}

function toggleScoreDetails() {
    if (!window.topikoApp) return;
    
    const sessionMinutes = Math.round((Date.now() - window.topikoApp.sessionStartTime) / 60000);
    showNotification(`Score: ${window.topikoApp.leadScore}/100 | Quality: ${window.topikoApp.leadScore >= 70 ? 'Hot' : window.topikoApp.leadScore >= 40 ? 'Warm' : 'Cold'} | Session: ${sessionMinutes}m | Views: ${window.topikoApp.pageViews}`, 'info');
}

// ========================================
// FOMO SYSTEM UTILITIES
// ========================================

function getRandomBusinessData() {
    const business = window.TopikoConfig.INDIAN_BUSINESS_NAMES[Math.floor(Math.random() * window.TopikoConfig.INDIAN_BUSINESS_NAMES.length)];
    const city = window.TopikoConfig.INDIAN_CITIES[Math.floor(Math.random() * window.TopikoConfig.INDIAN_CITIES.length)];
    const template = window.TopikoConfig.FOMO_MESSAGE_TEMPLATES[Math.floor(Math.random() * window.TopikoConfig.FOMO_MESSAGE_TEMPLATES.length)];
    
    return {
        business, city, template,
        message: template.text.replace('{business}', business).replace('{city}', city)
    };
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
    
    contentEl.innerHTML = `<span class="business-name">${data.business}</span> from <span class="business-location">${data.city}</span> ${data.template.text.split('{business}')[1].split('{city}')[1]}`;
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
                <p>No products selected yet. Choose from 500+ products above or add custom products!</p>
            </div>
        `;
        return;
    }
    
    const businessCategory = document.getElementById('category')?.value;
    const categoryData = window.TopikoConfig.BUSINESS_CATEGORIES[businessCategory];
    
    productsList.innerHTML = window.topikoApp.userProducts.map(product => {
        const categoryName = categoryData?.categories[product.categoryKey]?.name || product.categoryKey;
        const subcategoryName = product.subcategoryKey ? 
            (window.TopikoConfig.SUBCATEGORY_NAMES[product.subcategoryKey] || product.subcategoryKey) : '';
        
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
    
    const themePreviewIds = ['modern-preview', 'vibrant-preview', 'professional-preview', 'traditional-preview', 'creative-preview', 'luxury-preview'];
    
    if (window.topikoApp.userProducts.length === 0) {
        themePreviewIds.forEach(previewId => {
            const previewEl = document.getElementById(previewId);
            if (previewEl) {
                previewEl.innerHTML = `
                    <div class="theme-preview-item">Sample Product</div>
                    <div class="theme-preview-item">₹999</div>
                `;
            }
        });
        return;
    }
    
    const previewProducts = window.topikoApp.userProducts.slice(0, 2);
    
    themePreviewIds.forEach(previewId => {
        const previewEl = document.getElementById(previewId);
        if (previewEl) {
            previewEl.innerHTML = previewProducts.map(product => 
                `<div class="theme-preview-item">
                    <div style="font-weight: 600; margin-bottom: 2px; font-size: 0.7rem;">${product.name.substring(0, 15)}${product.name.length > 15 ? '...' : ''}</div>
                    <div style="color: #059669; font-weight: bold; font-size: 0.7rem;">₹${product.price.toLocaleString()}</div>
                </div>`
            ).join('');
        }
    });
}

// ========================================
// MOTIVATIONAL MESSAGES UTILITIES
// ========================================

let currentMessageIndex = 0;
let messageInterval = null;

function updateMotivationalMessages() {
    if (!window.topikoApp) return;
    
    console.log('🔄 updateMotivationalMessages called, currentStep:', window.topikoApp.currentStep);
    
    if (window.topikoApp.currentStep !== 'categories') {
        console.log('❌ Not on categories screen, skipping messages');
        return;
    }
    
    const messagesContainer = document.getElementById('motivationalMessages');
    if (!messagesContainer) {
        console.error('❌ Messages container not found!');
        addDebugLog('❌ Messages container not found', 'error');
        return;
    }
    
    console.log('✅ Messages container found:', messagesContainer);
    
    // Stop any existing interval
    stopMotivationalMessages();
    
    // Clear any existing messages
    messagesContainer.innerHTML = '';
    
    // Start new message rotation
    currentMessageIndex = 0;
    
    // Show first message immediately
    console.log('🚀 Starting dynamic messages...');
    showNextMessage();
    
    // Set interval for automatic rotation (3.5 seconds = average of 3-4)
    messageInterval = setInterval(() => {
        console.log('⏰ Message interval triggered');
        showNextMessage();
    }, 3500);
    
    addDebugLog('🔄 Dynamic messages started - rotating every 3.5s', 'success');
    console.log('✅ Dynamic messaging system initialized');
}

function showNextMessage() {
    if (!window.topikoApp) return;
    
    console.log('📝 showNextMessage called, index:', currentMessageIndex);
    
    if (window.topikoApp.currentStep !== 'categories') {
        console.log('❌ Not on categories screen, stopping messages');
        stopMotivationalMessages();
        return;
    }
    
    const messagesContainer = document.getElementById('motivationalMessages');
    if (!messagesContainer) {
        console.error('❌ Messages container not found in showNextMessage!');
        return;
    }
    
    const message = generatePersonalizedMessage(currentMessageIndex);
    console.log('💬 Generated message:', message);
    
    addDebugLog(`📝 Showing message ${currentMessageIndex + 1}: "${message.substring(0, 30)}..."`, 'info');
    
    showNewMessage(message, messagesContainer);
    
    currentMessageIndex = (currentMessageIndex + 1) % window.TopikoConfig.MOTIVATIONAL_MESSAGE_TEMPLATES.length;
    console.log('➡️ Next message index will be:', currentMessageIndex);
}

function generatePersonalizedMessage(index) {
    if (!window.topikoApp) return '';
    
    console.log('🎯 generatePersonalizedMessage called with index:', index);
    
    const template = window.TopikoConfig.MOTIVATIONAL_MESSAGE_TEMPLATES[index];
    const currentProgressIndex = window.TopikoConfig.STEP_CONFIG.PROGRESS_STEPS.indexOf(window.topikoApp.currentStep);
    // Calculate remaining steps (categories is index 3, so products=1, themes=2 steps left)
    const stepsLeft = Math.max(1, window.TopikoConfig.STEP_CONFIG.PROGRESS_STEPS.length - currentProgressIndex - 1);
    const plural = stepsLeft !== 1 ? 's' : '';
    const businessDisplayName = window.topikoApp.businessName || 'your business';
    
    // Get category name without emoji
    const categoryDropdown = document.getElementById('category');
    let categoryName = 'your category';
    if (categoryDropdown && categoryDropdown.value && window.TopikoConfig.BUSINESS_CATEGORIES[categoryDropdown.value]) {
        const categoryData = window.TopikoConfig.BUSINESS_CATEGORIES[categoryDropdown.value];
        categoryName = categoryData.name; // Use clean category name from data
    }
    
    const personalizedMessage = template
        .replace('{stepsLeft}', stepsLeft.toString())
        .replace('{plural}', plural)
        .replace('{businessName}', businessDisplayName)
        .replace('{category}', categoryName);
        
    console.log(`🎯 Personalization: steps=${stepsLeft}, business="${businessDisplayName}", category="${categoryName}"`);
    addDebugLog(`🎯 Message ${index + 1}: steps=${stepsLeft}, business="${businessDisplayName}", category="${categoryName}"`, 'info');
    return personalizedMessage;
}

function showNewMessage(messageText, container) {
    console.log('🎬 showNewMessage called with:', messageText.substring(0, 50) + '...');
    
    // Mark existing messages for exit
    const existingMessages = container.querySelectorAll('.motivational-message');
    console.log('🗑️ Found', existingMessages.length, 'existing messages to remove');
    
    existingMessages.forEach((msg, i) => {
        if (!msg.classList.contains('exit')) {
            console.log(`🚪 Marking message ${i} for exit`);
            msg.classList.remove('active');
            msg.classList.add('exit');
        }
    });
    
    // Create new message
    const messageEl = document.createElement('div');
    messageEl.className = 'motivational-message';
    messageEl.textContent = messageText;
    
    console.log('➕ Created new message element');
    container.appendChild(messageEl);
    
    // Trigger slide-in animation after a short delay
    setTimeout(() => {
        console.log('🎞️ Triggering slide-in animation');
        messageEl.classList.add('active');
    }, 100);
    
    // Clean up old messages after animation completes
    setTimeout(() => {
        const oldMessages = container.querySelectorAll('.motivational-message.exit');
        console.log('🧹 Cleaning up', oldMessages.length, 'old messages');
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
        console.log('⏹️ Dynamic messages stopped');
        addDebugLog('🔄 Dynamic messages stopped', 'info');
    }
}

// ========================================
// PRODUCTS HELP SECTION UTILITIES
// ========================================

function updateProductsHelpSection() {
    if (!window.topikoApp) return;
    
    const dayOfMonth = new Date().getDate();
    const totalDaysInMonth = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0).getDate();
    
    // Calculate claimed percentage based on day (30-90%)
    const minPercentage = 30;
    const maxPercentage = 90;
    const dailyIncrease = (maxPercentage - minPercentage) / totalDaysInMonth;
    const currentPercentage = Math.min(minPercentage + (dailyIncrease * dayOfMonth), maxPercentage);
    
    const claimedCount = Math.floor((currentPercentage / 100) * 75);
    const remainingSlots = 75 - claimedCount;
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
        
        addDebugLog(`📊 Help section updated: ${claimedCount}/75 claimed (${currentPercentage.toFixed(1)}%)`, 'info');
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

        // NEW: Product Selection System
        selectedProductIds: [],
        productsLoaded: false,

        // FOMO system
        fomoActive: true,
        fomoTimer: null,
        businessCounter: window.TopikoConfig.DEFAULTS.BUSINESS_COUNTER,
        lastFomoShow: 0,
        helpClaimedCount: window.TopikoConfig.DEFAULTS.HELP_CLAIMED_COUNT
    };

    addDebugLog('🚀 Topiko App State initialized with Product Selection System', 'success');
}

// ========================================
// ERROR HANDLING
// ========================================

window.addEventListener('error', function(e) {
    addDebugLog(`❌ Error: ${e.error?.message || e.message}`, 'error');
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
}

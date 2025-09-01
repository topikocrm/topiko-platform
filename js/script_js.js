/* ========================================
   TOPIKO LEAD FORM - MAIN APPLICATION LOGIC - WITH ALL 8 ENHANCEMENTS
   ======================================== */

// ========================================
// GLOBAL VARIABLES FOR COMPLETION SCREEN
// ========================================

let selectedOffer = null;

// ========================================
// APPLICATION INITIALIZATION
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    window.TopikoUtils.addDebugLog('📱 DOM loaded - starting enhanced app');
    
    // Add mobile enhancements
    initializeMobileEnhancements();
    
    initializeApp();
    
    // Auto-save session data every 30 seconds
    setInterval(() => {
        window.TopikoUtils.saveSessionData();
    }, 30000);
});


// Toggle mobile filters
function toggleMobileFilters() {
    const controls = document.querySelector('.product-controls');
    if (controls) {
        if (controls.classList.contains('collapsed')) {
            controls.classList.remove('collapsed');
            controls.classList.add('expanded');
        } else {
            controls.classList.remove('expanded');
            controls.classList.add('collapsed');
        }
    }
}

// Toggle product card expansion on mobile
function toggleProductCard(productId) {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (!isMobile) return;
    
    const card = document.querySelector(`[data-product-id="${productId}"]`);
    if (card) {
        card.classList.toggle('expanded');
    }
}

// Mobile-specific enhancements
function initializeMobileEnhancements() {
    // Detect if mobile device
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    
    if (isMobile) {
        console.log('📱 Mobile device detected, applying mobile enhancements');
        
        // Show mobile filter toggle button
        const filterToggle = document.querySelector('.mobile-filter-toggle');
        if (filterToggle) {
            filterToggle.style.display = 'block';
        }
        
        // Hide quick filters on mobile (they're in the collapsible section)
        const quickFilters = document.querySelector('.quick-filters-container');
        if (quickFilters) {
            quickFilters.style.display = 'none';
        }
        
        // Prevent double-tap zoom
        let lastTouchEnd = 0;
        document.addEventListener('touchend', function(event) {
            const now = Date.now();
            if (now - lastTouchEnd <= 300) {
                event.preventDefault();
            }
            lastTouchEnd = now;
        }, false);
        
        // Fix viewport height on iOS
        const setViewportHeight = () => {
            const vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty('--vh', `${vh}px`);
        };
        setViewportHeight();
        window.addEventListener('resize', setViewportHeight);
        window.addEventListener('orientationchange', setViewportHeight);
        
        // Improve scroll performance
        document.querySelectorAll('.modal-overlay, .modal-content, .products-grid').forEach(el => {
            el.style.webkitOverflowScrolling = 'touch';
        });
        
        // Handle keyboard events better
        const inputs = document.querySelectorAll('input, textarea, select');
        inputs.forEach(input => {
            input.addEventListener('focus', function() {
                // Scroll into view when focused
                setTimeout(() => {
                    this.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }, 300);
            });
        });
        
        // Add touch feedback to buttons
        document.querySelectorAll('button, .btn-primary, .btn-secondary').forEach(btn => {
            btn.addEventListener('touchstart', function() {
                this.style.opacity = '0.7';
            });
            btn.addEventListener('touchend', function() {
                this.style.opacity = '1';
            });
        });
    }
}

function initializeApp() {
    window.TopikoUtils.addDebugLog('🚀 Enhanced Topiko Lead Form initializing', 'info');
    
    // Initialize app state
    window.TopikoUtils.initializeTopikoApp();
    
    // Initialize widgets and UI
    window.TopikoUtils.updateProgressBar(window.topikoApp.currentStep);
    window.TopikoUtils.updateBackButton();
    
    // Start FOMO system after delay
    setTimeout(() => window.TopikoUtils.startFomoSystem(), 3000);
    
    window.TopikoUtils.addDebugLog('✅ Enhanced app initialized successfully', 'success');
}

// Save data on page unload and track abandonment
window.addEventListener('beforeunload', function(e) {
    // Save abandonment data to Supabase if user hasn't completed
    if (window.topikoApp.currentUserId && window.topikoApp.currentStep !== 'completion') {
        const abandonmentData = {
            last_step: window.topikoApp.currentStep,
            abandoned_at: new Date().toISOString(),
            session_duration_minutes: Math.round((Date.now() - window.topikoApp.sessionStartTime) / 60000),
            form_progress: Math.round(window.topikoApp.formProgress || 0),
            products_selected_count: window.topikoApp.userProducts?.length || 0,
            goals_selected_count: window.topikoApp.selectedGoals?.length || 0,
            categories_selected_count: window.topikoApp.selectedCategories?.length || 0
        };
        
        // Use sendBeacon for reliability (won't wait for response)
        const payload = {
            user_id: window.topikoApp.currentUserId,
            ...abandonmentData
        };
        
        // Try to update user record with abandonment info
        // Note: This might not complete if the page unloads too quickly
        try {
            // Using synchronous XHR as a fallback (deprecated but works for beforeunload)
            const xhr = new XMLHttpRequest();
            xhr.open('PATCH', `${window.SUPABASE_URL}/rest/v1/users?id=eq.${window.topikoApp.currentUserId}`, false);
            xhr.setRequestHeader('apikey', window.SUPABASE_ANON_KEY);
            xhr.setRequestHeader('Authorization', `Bearer ${window.SUPABASE_ANON_KEY}`);
            xhr.setRequestHeader('Content-Type', 'application/json');
            xhr.setRequestHeader('Prefer', 'return=minimal');
            
            xhr.send(JSON.stringify({
                abandoned_at: abandonmentData.abandoned_at,
                last_step: abandonmentData.last_step
            }));
            
            console.log('📊 Abandonment data saved:', abandonmentData);
        } catch (err) {
            // If sync request fails, try navigator.sendBeacon as backup
            if (navigator.sendBeacon) {
                const formData = new FormData();
                formData.append('data', JSON.stringify(payload));
                navigator.sendBeacon('/api/track-abandonment', formData);
            }
        }
    }
    
    window.TopikoUtils.saveSessionData();
    
    // Clean up intervals
    window.TopikoUtils.stopMotivationalMessages();
});

// ========================================
// ENHANCEMENT 2: 3-GOAL SELECTION LIMIT & UI UPDATES
// ========================================

function updateGoalsTracking() {
    const checkedGoals = document.querySelectorAll('.goal-checkbox:checked');
    const selectedGoals = Array.from(checkedGoals).map(checkbox => checkbox.value);
    
    // NEW: Enforce 3-goal limit
    if (selectedGoals.length > 3) {
        // Find the last checked goal and uncheck it
        const lastChecked = checkedGoals[checkedGoals.length - 1];
        lastChecked.checked = false;
        
        // Show limitation message
        window.TopikoUtils.showNotification('Please select only 3 goals that matter most to your business', 'warning');
        
        // Update selected goals array (remove the last one)
        window.topikoApp.selectedGoals = selectedGoals.slice(0, 3);
    } else {
        window.topikoApp.selectedGoals = selectedGoals;
    }
    
    window.TopikoUtils.addDebugLog(`Goals: ${window.topikoApp.selectedGoals.length}/3 selected`);
    window.TopikoUtils.calculateLeadScore();
    
    // Update UI state
    updateGoalsUIState();
}

// NEW FUNCTION: Update goals UI state with visual feedback
function updateGoalsUIState() {
    const selectedCount = window.topikoApp.selectedGoals.length;
    const nextButton = document.querySelector('#goals .submit-button');
    
    if (nextButton) {
        if (selectedCount > 0) {
            nextButton.disabled = false;
            nextButton.style.opacity = '1';
            nextButton.textContent = `Next Step (${selectedCount}/3 goals selected)`;
        } else {
            nextButton.disabled = true;
            nextButton.style.opacity = '0.5';
            nextButton.textContent = 'Select goals to continue';
        }
    }
    
    // Visual feedback for goal limit
    const goalOptions = document.querySelectorAll('.goal-option');
    goalOptions.forEach(option => {
        const checkbox = option.querySelector('.goal-checkbox');
        if (!checkbox.checked && selectedCount >= 3) {
            option.style.opacity = '0.6';
            option.style.pointerEvents = 'none';
        } else {
            option.style.opacity = '1';
            option.style.pointerEvents = 'auto';
        }
    });
}

// ========================================
// ENHANCEMENT 7: COUPON GENERATION & TIMER UPDATES
// ========================================

// NEW FUNCTION: Generate random coupon code
function generateRandomCoupon() {
    // Generate simple 5 character alphanumeric code
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let couponCode = '';
    for (let i = 0; i < 5; i++) {
        couponCode += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return couponCode;
}

// UPDATED FUNCTION: Start offer timer with 6:45:00
function startOfferTimer() {
    console.log('🎬 startOfferTimer called');
    
    // Try to find timer element with delay if needed
    setTimeout(() => {
        const timerElement = document.getElementById('offerTimer');
        if (!timerElement) {
            console.error('❌ Timer element #offerTimer not found in DOM');
            // Try again after a delay
            setTimeout(() => {
                const retryElement = document.getElementById('offerTimer');
                if (retryElement) {
                    console.log('✅ Timer element found on retry');
                    startTimerCountdown(retryElement);
                } else {
                    console.error('❌ Timer element still not found after retry');
                }
            }, 1000);
            return;
        }
        
        console.log('✅ Timer element found:', timerElement);
        startTimerCountdown(timerElement);
    }, 100);
}

function startTimerCountdown(timerElement) {
    // Clear any existing timer
    if (window.offerTimerInterval) {
        clearInterval(window.offerTimerInterval);
        console.log('🧹 Cleared existing timer');
    }
    
    // Generate random time between 04:15:30 and 06:20:20
    const minSeconds = (4 * 3600) + (15 * 60) + 30; // 04:15:30 = 15,330 seconds
    const maxSeconds = (6 * 3600) + (20 * 60) + 20; // 06:20:20 = 22,820 seconds
    let totalSeconds = Math.floor(Math.random() * (maxSeconds - minSeconds + 1)) + minSeconds;
    
    // Set initial display immediately
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    const initialTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    timerElement.textContent = initialTime;
    
    console.log('🕒 Timer initialized with:', initialTime);
    
    window.offerTimerInterval = setInterval(() => {
        totalSeconds--;
        
        if (totalSeconds < 0) {
            clearInterval(window.offerTimerInterval);
            timerElement.textContent = "00:00:00";
            timerElement.style.color = "#dc2626";
            console.log('⏰ Timer expired');
            return;
        }
        
        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;
        
        const timeString = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        timerElement.textContent = timeString;
    }, 1000);
    
    console.log('✅ Timer countdown started successfully');
}

// UPDATED: initializeCompletionScreen function with coupon generation
function initializeCompletionScreen() {
    console.log('🎉 Initializing completion screen...');
    
    // Set business name
    const completionBusinessName = document.getElementById('completionBusinessName');
    if (completionBusinessName && window.topikoApp && window.topikoApp.businessName) {
        completionBusinessName.textContent = window.topikoApp.businessName;
    }
    
    // NEW: Generate and display random coupon
    const couponElement = document.getElementById('randomCoupon');
    if (couponElement) {
        const randomCoupon = generateRandomCoupon();
        couponElement.textContent = randomCoupon;
        
        // Store coupon for later use
        window.topikoApp.generatedCoupon = randomCoupon;
    }
    
    // Display random selectable offers
    displayRandomOffers();
    
    // Ensure timer starts
    startOfferTimer();
    
    // Reset selections
    selectedOffer = null;
    window.selectedTimeSlot = null;
    window.selectedReason = null;
    
    // Hide selected offer display initially
    const selectedDisplay = document.getElementById('selectedOfferDisplay');
    if (selectedDisplay) {
        selectedDisplay.style.display = 'none';
    }
    
    window.TopikoUtils.addDebugLog('✅ Interactive completion screen initialized with coupon');
}

// ========================================
// ENHANCEMENT 8: DYNAMIC TIME SLOT GENERATION
// ========================================

// NEW FUNCTION: Generate dynamic time slots with 2-hour offset
function generateDynamicTimeSlots() {
    const now = new Date();
    const slots = [];
    
    // Business hours: 10 AM to 6 PM
    const businessHours = [10, 12, 14, 16]; // 10am, 12pm, 2pm, 4pm
    
    // Start from 2 hours from now
    let startTime = new Date(now.getTime() + (2 * 60 * 60 * 1000));
    
    // Round to next even hour
    startTime.setMinutes(0, 0, 0);
    if (startTime.getHours() % 2 !== 0) {
        startTime.setHours(startTime.getHours() + 1);
    }
    
    let slotsAdded = 0;
    let currentDate = new Date(startTime);
    
    // Generate exactly 8 slots
    while (slotsAdded < 8) {
        // Check each business hour slot for the current date
        for (let hour of businessHours) {
            // Create potential slot time
            const slotTime = new Date(currentDate);
            slotTime.setHours(hour, 0, 0, 0);
            
            // Only add if it's at least 2 hours from now
            if (slotTime.getTime() > now.getTime() + (2 * 60 * 60 * 1000)) {
                slots.push({
                    id: `slot-${slotsAdded}`,
                    dateTime: slotTime,
                    dateLabel: getDateLabel(slotTime),
                    timeLabel: slotTime.toLocaleTimeString('en-IN', { 
                        hour: '2-digit', 
                        minute: '2-digit',
                        hour12: true 
                    })
                });
                slotsAdded++;
                
                if (slotsAdded >= 8) break;
            }
        }
        
        // Move to next day
        currentDate.setDate(currentDate.getDate() + 1);
    }
    
    return slots;
}

// NEW FUNCTION: Get date label for slot
function getDateLabel(date) {
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const slotDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    
    const diffTime = slotDate.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 0) return 'Today';
    if (diffDays === 1) return 'Tomorrow';
    if (diffDays === 2) return 'Day After';
    
    return date.toLocaleDateString('en-IN', { 
        weekday: 'short', 
        month: 'short', 
        day: 'numeric' 
    });
}

// UPDATED: openCallScheduler function with dynamic slots
function openCallScheduler() {
    if (!selectedOffer) {
        window.TopikoUtils.showNotification('Please select an offer first', 'warning');
        return;
    }
    
    // Generate dynamic time slots
    const timeSlots = generateDynamicTimeSlots();
    
    // Update time slots grid
    const timeSlotsGrid = document.getElementById('timeSlotsGrid');
    if (timeSlotsGrid) {
        // Store slots data globally for access in onclick
        window.timeSlotsData = timeSlots;
        
        // Generate 8 time slots + 1 custom input option
        const slotsHTML = timeSlots.map(slot => `
            <div class="time-slot" onclick="selectTimeSlot(this, '${slot.id}', window.timeSlotsData.find(s => s.id === '${slot.id}'))">
                <div class="slot-date">${slot.dateLabel}</div>
                <div class="slot-time">${slot.timeLabel}</div>
            </div>
        `).join('');
        
        // Add custom time input as 9th option
        const customSlotHTML = `
            <div class="time-slot custom-slot" onclick="openCustomTimeInput(this)">
                <div class="slot-date">Custom</div>
                <div class="slot-time">
                    <input type="text" id="customTimeInput" placeholder="Enter time" 
                           style="width: 100%; border: none; background: transparent; text-align: center; font-size: 0.9rem;"
                           onclick="event.stopPropagation();"
                           onblur="handleCustomTimeInput(this)"
                           onkeypress="if(event.key === 'Enter') handleCustomTimeInput(this)">
                </div>
            </div>
        `;
        
        timeSlotsGrid.innerHTML = slotsHTML + customSlotHTML;
    }
    
    // Update scheduler modal with selected offer
    const schedulerOfferName = document.getElementById('schedulerOfferName');
    if (schedulerOfferName && selectedOffer) {
        schedulerOfferName.textContent = selectedOffer.title;
    }
    
    window.TopikoUtils.showModal('dateTimeModal');
    window.TopikoUtils.addDebugLog('📅 Call scheduler opened with dynamic slots', 'info');
}

// ========================================
// ENHANCEMENT 4: MODAL PERSONALIZATION FIXES
// ========================================

// UPDATED FUNCTION: Use business name instead of user name
function displaySetupIntroModal() {
    const goalNames = window.TopikoConfig.GOAL_NAMES;

    // FIXED: Use business name instead of user name
    const setupBusinessName = document.getElementById('setupBusinessName');
    const setupBusinessNameInText = document.getElementById('setupBusinessNameInText');
    
    if (setupBusinessName) {
        setupBusinessName.textContent = window.topikoApp.businessName || 'Business';
    }
    
    if (setupBusinessNameInText) {
        setupBusinessNameInText.textContent = window.topikoApp.businessName || 'business';
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
    window.TopikoUtils.addDebugLog(`Setup intro modal shown for business: ${window.topikoApp.businessName}`);
}

// ========================================
// ENHANCEMENT 5: CATEGORIES SCREEN CHECKBOX ENHANCEMENT
// ========================================

// UPDATED FUNCTION: Load categories with visual checkboxes
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
        
        // ENHANCED: Visual checkbox structure
        categoriesHTML += `
            <div class="category-item">
                <div class="category-main-selector">
                    <input type="checkbox" id="cat-${categoryKey}" value="${categoryKey}" class="category-checkbox" 
                           ${isSelected ? 'checked' : ''} onchange="toggleCategorySelection('${categoryKey}')">
                    <label for="cat-${categoryKey}" class="category-label">
                        <div class="category-visual-checkbox">
                            <span class="checkbox-icon">✓</span>
                        </div>
                        <span class="category-icon">${category.icon}</span>
                        <span class="category-name">${category.name}</span>
                        <span class="category-checkmark">✓</span>
                    </label>
                </div>
                
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

// ========================================
// HELPER FUNCTIONS FOR ENHANCED FEATURES
// ========================================

// Helper function to get template identifier for API calls
function getFullThemeName(themeId) {
    // Map theme IDs to template identifiers that the API expects
    // The preview API expects simple lowercase identifiers
    const themeTemplateIds = {
        'modern': 'modern',
        'vibrant': 'vibrant', 
        'professional': 'professional',
        'traditional': 'traditional',
        'creative': 'creative',
        'luxury': 'Urban Luxe',
        'grocery': 'Cart & Carry',
        'ecommerce': 'Global Lane',
        'food': 'Gourmet Bloom',
        'beauty': 'Urban Luxe',
        'jewelry': 'Urban Luxe'
    };
    
    return themeTemplateIds[themeId] || 'modern';
}

// ========================================
// PREVIEW DATA FUNCTIONS - UPDATED WITH NEW API CALL
// ========================================

// Enhanced generatePreviewData function with template API call
// Restored generatePreviewData function from backup
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
        
        console.log(`🎯 Selected theme: ${selectedTheme}`);
        console.log(`🎯 Business name: ${businessName}`);
        console.log(`🎯 Subdomain URL: ${subdomainUrl}`);
        
        if (!selectedTheme) {
            window.TopikoUtils.showNotification('Please select a theme first', 'error');
            return;
        }
        
        // Get full theme display name for template_no
        const templateNo = getFullThemeName(selectedTheme);
        console.log(`🎯 Template number (full name): ${templateNo}`);
        
        // Call Preview Template API
        console.log('🚀 About to call Preview Template API...');
        const apiSuccess = await callPreviewTemplateAPI(subdomainUrl, templateNo);
        console.log(`🎯 API Success result: ${apiSuccess}`);
        
        // If API call was successful, open subdomain in new window
        if (apiSuccess === true) {
            const fullSubdomainUrl = `https://${subdomainUrl}`;
            console.log(`🌐 API was successful! Opening subdomain: ${fullSubdomainUrl}`);
            
            // Test if popup blockers are preventing window opening
            const newWindow = window.open(fullSubdomainUrl, '_blank');
            
            if (newWindow) {
                console.log('✅ New window opened successfully');
                window.TopikoUtils.showNotification(`🚀 Template updated! Opening ${subdomainUrl}...`, 'success');
            } else {
                console.log('❌ Popup blocked! Window.open returned null');
                window.TopikoUtils.showNotification(`🚫 Popup blocked! Please allow popups and try again. URL: ${fullSubdomainUrl}`, 'warning');
                
                // Fallback: Copy URL to clipboard
                navigator.clipboard.writeText(fullSubdomainUrl).then(() => {
                    window.TopikoUtils.showNotification(`📋 URL copied to clipboard: ${fullSubdomainUrl}`, 'info');
                });
            }
        } else {
            console.log(`❌ API was not successful (returned: ${apiSuccess}), not opening window`);
        }
        
        console.log('✅ Preview generation completed');
        
    } catch (error) {
        console.error(`❌ Preview generation failed: ${error.message}`);
        console.error('Full error:', error);
        window.TopikoUtils.showNotification('Failed to generate preview. Please try again.', 'error');
    }
}

// Restored callPreviewTemplateAPI function from backup
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
        
        console.log(`📡 Response status: ${response.status}`);
        console.log(`📡 Response ok: ${response.ok}`);
        
        const responseData = await response.json();
        console.log(`📡 Response data:`, responseData);
        
        if (response.ok && responseData.status === 'success') {
            window.TopikoUtils.showNotification(`✅ ${responseData.message}`, 'success');
            console.log('✅ Preview template API successful - RETURNING TRUE');
            return true;
        } else {
            console.log('❌ API not successful:', {
                responseOk: response.ok,
                responseStatus: responseData.status,
                responseData: responseData
            });
            throw new Error(responseData.message || `HTTP ${response.status}`);
        }
        
    } catch (error) {
        console.error(`❌ Preview template API error: ${error.message}`);
        console.error('Full error:', error);
        window.TopikoUtils.showNotification(`⚠️ Preview template update failed: ${error.message}`, 'warning');
        return false;
    }
}

// Restored validatePreviewData function from backup
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
            window.TopikoUtils.showNotification(`Please fill ${field.name} before preview`, 'error');
            return false;
        }
    }
    
    if (!window.topikoApp.selectedCategories || window.topikoApp.selectedCategories.length === 0) {
        window.TopikoUtils.showNotification('Please select at least one category before preview', 'error');
        return false;
    }
    
    return true;
}

// Restored from backup - needed for main API call
function composePreviewJSON() {
    // Generate subdomain URL
    const businessName = document.getElementById('businessName').value.trim();
    const subdomainUrl = generateSubdomainUrl(businessName);
    
    // Map categories to subcategories
    const selectedSubcategoryDetails = mapSubcategoriesToCategories();
    
    // Process selected products
    const processedProducts = processSelectedProducts();
    
    // Compose final JSON
    const previewData = {
        user_name: document.getElementById('fullName').value.trim(),
        user_phone: document.getElementById('phoneNumber').value.trim(),
        user_email: document.getElementById('email').value.trim(),
        business_name: businessName,
        business_type: document.getElementById('businessType').value,
        business_address: document.getElementById('address').value.trim(),
        business_category: document.getElementById('category').value,
        subdomain_url: subdomainUrl,
        selected_category_name: window.topikoApp.selectedCategories || [],
        selected_subcategoryname: selectedSubcategoryDetails,
        selected_products: processedProducts,
        selected_goals: window.topikoApp.selectedGoals || [],
        selected_language: window.topikoApp.selectedLanguage || 'en',
        selected_theme: window.topikoApp.selectedTheme || null,
        qualifying_answers: window.topikoApp.qualifyingAnswers || {}
    };
    
    return previewData;
}
// The backup version doesn't compose preview data

// Remove .topiko.com from subdomain URL
function generateSubdomainUrl(businessName) {
    if (!businessName) return "";
    
    return businessName
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .replace(/^-|-$/g, '');
}

function mapSubcategoriesToCategories() {
    const businessCategory = document.getElementById('category').value;
    const selectedSubcategories = window.topikoApp.selectedSubcategories || [];
    
    if (!businessCategory || !window.TopikoConfig.BUSINESS_CATEGORIES[businessCategory]) {
        return [];
    }
    
    const categoryData = window.TopikoConfig.BUSINESS_CATEGORIES[businessCategory];
    const mappedSubcategories = [];
    
    // Find which category each subcategory belongs to
    selectedSubcategories.forEach(subcategoryKey => {
        Object.keys(categoryData.categories).forEach(categoryKey => {
            const category = categoryData.categories[categoryKey];
            if (category.subcategories.includes(subcategoryKey)) {
                mappedSubcategories.push({
                    subcategory_name: subcategoryKey,
                    categorey_name: categoryKey  // Note: keeping original typo as per spec
                });
            }
        });
    });
    
    return mappedSubcategories;
}

// Process selected products with new variant format
function processSelectedProducts() {
    const userProducts = window.topikoApp.userProducts || [];
    
    return userProducts.map(product => ({
        product_title: product.name,
        product_price: product.selectedVariantPrice || product.price,
        product_image_url: product.imageUrl || product.image,
        product_description: product.description,
        product_variants: processProductVariants(product),
        category_name: product.categoryKey || product.category,
        subcategory_name: product.subcategoryKey || product.subcategory
    }));
}

// Process product variants into new object format
function processProductVariants(product) {
    const variants = product.variants || [];
    
    // If variants is already in new object format, return as-is
    if (variants.length > 0 && typeof variants[0] === 'object' && variants[0].variant_name) {
        return variants;
    }
    
    // Convert simple array variants to new object format
    if (variants.length > 0 && typeof variants[0] === 'string') {
        return convertSimpleVariantsToObjects(variants, product);
    }
    
    // Default: return empty array
    return [];
}

// Convert simple variants like ["S", "M", "L"] to object format
function convertSimpleVariantsToObjects(variants, product) {
    // Determine variant type based on product category/content
    const variantType = determineVariantType(variants, product);
    
    return variants.map(variant => ({
        variant_name: variantType.name,
        variant_detail: variant,
        variant_price: calculateVariantPrice(product.suggestedPrice || product.price || 0, variant, variantType)
    }));
}

// Determine what type of variant this is (size, flavor, portion, etc.)
function determineVariantType(variants, product) {
    const variantString = variants.join(' ').toLowerCase();
    const productName = (product.name || '').toLowerCase();
    const categoryKey = (product.categoryKey || product.category || '').toLowerCase();
    
    // Color variants detection
    const colorKeywords = ['black', 'brown', 'white', 'blue', 'red', 'green', 'tan', 'navy', 'gray', 'grey', 'silver', 'gold'];
    const hasColors = variants.some(variant => 
        colorKeywords.some(color => variant.toLowerCase().includes(color))
    );
    if (hasColors) {
        return { name: 'color', basePrice: true };
    }
    
    // Pattern/Style variants detection
    const patternKeywords = ['floral', 'abstract', 'solid', 'striped', 'polka', 'geometric', 'plain', 'printed'];
    const hasPatterns = variants.some(variant => 
        patternKeywords.some(pattern => variant.toLowerCase().includes(pattern))
    );
    if (hasPatterns) {
        return { name: 'pattern', basePrice: true };
    }
    
    // Size variants (clothing, etc.)
    if (variantString.includes('s') && variantString.includes('m') && variantString.includes('l')) {
        return { name: 'size', basePrice: true };
    }
    
    // Food portions
    if (categoryKey.includes('food') || categoryKey.includes('restaurant') || categoryKey.includes('north-indian') || categoryKey.includes('south-indian') ||
        productName.includes('dal') || productName.includes('curry') || productName.includes('rice') || productName.includes('biryani')) {
        return { name: 'portion', priceIncrease: true };
    }
    
    // Beverages - flavor variants
    if (categoryKey.includes('beverage') || productName.includes('juice') || 
        productName.includes('tea') || productName.includes('coffee') || productName.includes('water') || productName.includes('lassi')) {
        return { name: 'flavor', basePrice: true };
    }
    
    // Desserts/Sweets - serving size
    if (categoryKey.includes('sweet') || categoryKey.includes('dessert') || 
        productName.includes('cake') || productName.includes('ice') || productName.includes('kheer')) {
        return { name: 'serving', priceIncrease: true };
    }
    
    // Default: treat as size
    return { name: 'size', basePrice: true };
}

// Calculate variant price based on base price and variant type
function calculateVariantPrice(basePrice, variant, variantType) {
    const variantLower = variant.toLowerCase();
    
    if (variantType.basePrice) {
        // For color/pattern variants, usually same price except premium
        if (variantLower.includes('soda') || variantLower.includes('premium')) {
            return basePrice + 10;
        }
        return basePrice;
    }
    
    if (variantType.priceIncrease) {
        // For portion/serving variants, adjust price
        if (variantLower.includes('large') || variantLower.includes('double') || variantLower.includes('xl') || variantLower.includes('full')) {
            return Math.round(basePrice * 1.25); // 25% increase
        }
        if (variantLower.includes('medium') || variantLower.includes('regular') || variantLower.includes('single') || variantLower.includes('half')) {
            return basePrice;
        }
        if (variantLower.includes('small') || variantLower.includes('mini')) {
            return Math.round(basePrice * 0.8); // 20% decrease
        }
        
        // Special cases
        if (variantLower.includes('soda') || variantLower.includes('premium')) {
            return basePrice + 10;
        }
    }
    
    return basePrice;
}

// ========================================
// LEAD FLOW FUNCTIONS
// ========================================

function startLeadFlow() {
    console.log('startLeadFlow called');
    
    // Check if TopikoUtils exists
    if (!window.TopikoUtils) {
        console.error('TopikoUtils not loaded!');
        alert('Error: Application not fully loaded. Please refresh the page.');
        return;
    }
    
    window.TopikoUtils.addDebugLog('🚀 Lead flow started');
    
    // Check if goals screen exists
    const goalsScreen = document.getElementById('goals');
    if (!goalsScreen) {
        console.error('Goals screen not found!');
        alert('Error: Goals screen not found');
        return;
    }
    
    console.log('Showing goals screen...');
    // Skip language screen since it's commented out, go directly to goals
    window.TopikoUtils.showScreen('goals');
    console.log('Goals screen should be visible now');
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

function showGoalsTransitionModal() {
    if (window.topikoApp.selectedGoals.length === 0) {
        window.TopikoUtils.showNotification('Please select at least one goal', 'error');
        return;
    }
    
    // Update goals modal with selected goals (including new 6th goal)
    updateGoalsModal(window.topikoApp.selectedGoals);
    
    window.TopikoUtils.showNotification(`Perfect! ${window.topikoApp.selectedGoals.length} goal${window.topikoApp.selectedGoals.length > 1 ? 's' : ''} selected!`, 'success');
    window.TopikoUtils.calculateLeadScore();
    
    // Show the goals transition modal and update business name
    const setupBusinessName = document.getElementById('setupBusinessName');
    if (setupBusinessName) {
        const businessName = window.topikoApp.businessName || document.getElementById('businessName')?.value || 'Business';
        setupBusinessName.textContent = businessName;
        console.log('Setting business name after goals:', businessName);
    }
    
    setTimeout(() => {
        displayGoalsTransitionModal();
    }, 1500);
}

function submitGoals() {
    showGoalsTransitionModal();
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
    
    // Find and disable the submit button immediately
    const submitBtn = event.target || document.querySelector('[onclick="submitRegistration()"]');
    if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.style.opacity = '0.6';
        submitBtn.style.cursor = 'not-allowed';
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<span style="display: inline-block; animation: pulse 1s infinite;">Processing...</span>';
    }
    
    const name = document.getElementById('fullName').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phoneNumber').value.trim();
    const business = document.getElementById('businessName').value.trim();
    const address = document.getElementById('address').value.trim();
    const type = document.getElementById('businessType').value;
    const category = document.getElementById('category').value;

    if (!name || !email || !phone || !business || !type || !category) {
        window.TopikoUtils.showNotification('Please fill all required fields', 'error');
        // Re-enable button on error
        if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.style.opacity = '1';
            submitBtn.style.cursor = 'pointer';
            submitBtn.innerHTML = 'Show My Business Online';
        }
        return;
    }

    // Validate phone number format
    const validatedPhone = validatePhoneNumber(phone);
    if (!validatedPhone) {
        window.TopikoUtils.showNotification('Please enter a valid 10-digit Indian phone number', 'error');
        // Re-enable button on error
        if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.style.opacity = '1';
            submitBtn.style.cursor = 'pointer';
            submitBtn.innerHTML = 'Show My Business Online';
        }
        return;
    }

    // Store validated phone and user info
    window.topikoApp.userPhone = validatedPhone;
    window.topikoApp.userName = name;
    window.topikoApp.businessName = business;

    // Check phone uniqueness
    const isUnique = await checkPhoneUnique(validatedPhone);
    if (!isUnique) {
        window.TopikoUtils.showNotification('This phone number is already registered. Please use a different number.', 'error');
        // Re-enable button on error
        if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.style.opacity = '1';
            submitBtn.style.cursor = 'pointer';
            submitBtn.innerHTML = 'Show My Business Online';
        }
        return;
    }

    // Send OTP
    const phoneWithoutCode = validatedPhone.replace('+91', '');
    const otpSent = await sendOTP(phoneWithoutCode);
    
    if (otpSent) {
        // Show OTP verification modal
        showOtpModal();
    } else {
        window.TopikoUtils.showNotification('Failed to send OTP. Please try again.', 'error');
        // Re-enable button on error
        if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.style.opacity = '1';
            submitBtn.style.cursor = 'pointer';
            submitBtn.innerHTML = 'Show My Business Online';
        }
    }
}

// ========================================
// OTP VERIFICATION FUNCTIONS
// ========================================

// Phone number validation for Indian numbers
function validatePhoneNumber(phone) {
    // Remove all non-digit characters
    const cleaned = phone.replace(/\D/g, '');
    
    // Check if it's 10 digits (without country code) or 12 digits (with 91)
    if (cleaned.length === 10) {
        return '+91' + cleaned;
    } else if (cleaned.length === 12 && cleaned.startsWith('91')) {
        return '+' + cleaned;
    }
    return null; // Invalid
}

// Check if phone number is unique in database
async function checkPhoneUnique(phone) {
    // Special case: test number always allowed
    if (phone.includes('8272500000')) {
        return true;
    }
    
    try {
        // Check if phone exists in database
        const { data, error } = await supabase
            .from('users')
            .select('id')
            .eq('phone', phone)
            .single();
        
        return !data; // Return true if phone doesn't exist
    } catch (error) {
        console.log('Phone check error:', error);
        return true; // Allow proceed if check fails
    }
}

// Send OTP to phone number
async function sendOTP(phoneNumber) {
    const cleanPhone = validatePhoneNumber(phoneNumber);
    
    if (!cleanPhone) {
        window.TopikoUtils.showNotification('Please enter a valid 10-digit phone number', 'error');
        return false;
    }
    
    // Store clean phone for later use
    window.topikoApp.userPhone = cleanPhone;
    
    // Check if phone is unique
    const isUnique = await checkPhoneUnique(cleanPhone);
    if (!isUnique) {
        window.TopikoUtils.showNotification('This phone number is already registered', 'error');
        return false;
    }
    
    // Test number - don't send OTP
    if (cleanPhone.includes('8272500000')) {
        console.log('Test number detected - OTP: 0827');
        window.topikoApp.testMode = true;
        window.topikoApp.sentOTP = '0827'; // For test number
        return true;
    }
    
    // Generate 4-digit OTP
    const otp = Math.floor(1000 + Math.random() * 9000).toString();
    const message = `${otp} is your registration OTP for Topiko. Do not share this OTP with anyone. Contact 885 886 8889 for any help.`;
    
    // Check if running locally (file:// protocol)
    const isLocalFile = window.location.protocol === 'file:';
    
    if (isLocalFile) {
        // Local testing mode - skip actual API call
        console.log('Local testing mode - Generated OTP:', otp);
        window.topikoApp.sentOTP = otp;
        window.TopikoUtils.showNotification(`Testing mode - Use OTP: ${otp} or master OTP: 0827`, 'info');
        return true;
    }
    
    // Remove +91 prefix for API call (API expects 10-digit number)
    const phoneForAPI = cleanPhone.replace('+91', '');
    
    try {
        // Call backend API
        const response = await fetch('/api/send-otp', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                mobile: phoneForAPI,
                otp: otp,
                message: message
            })
        });
        
        const data = await response.json();
        
        if (response.ok && data.success) {
            // Store OTP temporarily for verification
            window.topikoApp.sentOTP = otp;
            console.log('OTP sent successfully to', phoneForAPI, '- OTP:', otp);
            return true;
        } else {
            console.error('Failed to send OTP:', data.error || 'Server error');
            // Fallback: allow proceeding with master OTP only
            window.topikoApp.sentOTP = null;
            window.TopikoUtils.showNotification('SMS service temporarily unavailable. You can use master OTP: 0827', 'warning');
            return true; // Still show modal so user can use master OTP
        }
    } catch (error) {
        console.error('Failed to send OTP:', error);
        // Fallback: allow proceeding with master OTP only
        window.topikoApp.sentOTP = null;
        window.TopikoUtils.showNotification('SMS service temporarily unavailable. You can use master OTP: 0827', 'warning');
        return true; // Still show modal so user can use master OTP
    }
}

// Resend OTP functionality
let resendAttempts = 0;
let resendTimer = null;

function startResendTimer() {
    let seconds = 30;
    const resendBtn = document.getElementById('resendOTPBtn');
    
    if (!resendBtn) return;
    
    resendBtn.disabled = true;
    resendTimer = setInterval(() => {
        seconds--;
        if (seconds <= 0) {
            clearInterval(resendTimer);
            resendBtn.disabled = false;
            resendBtn.textContent = 'Resend OTP';
        } else {
            resendBtn.textContent = `Resend in ${seconds}s`;
        }
    }, 1000);
}

async function resendOTP() {
    if (resendAttempts >= 3) {
        window.TopikoUtils.showNotification('Maximum resend attempts reached. Please try again later.', 'error');
        return;
    }
    
    resendAttempts++;
    const otpSent = await sendOTP(window.topikoApp.userPhone.replace('+91', ''));
    
    if (otpSent) {
        window.TopikoUtils.showNotification('OTP resent successfully', 'success');
        startResendTimer();
    } else {
        window.TopikoUtils.showNotification('Failed to resend OTP', 'error');
    }
}

function showOtpModal() {
    // Reset resend attempts
    resendAttempts = 0;
    
    // Display phone number in modal if available
    const phoneDisplay = document.getElementById('otpPhoneDisplay');
    if (phoneDisplay && window.topikoApp.userPhone) {
        phoneDisplay.textContent = `OTP sent to ${window.topikoApp.userPhone}`;
    }
    
    window.TopikoUtils.showModal('otpVerificationModal');
    
    // Start resend timer
    startResendTimer();
    
    // Clear OTP inputs
    const otpInputs = document.querySelectorAll('.otp-input');
    otpInputs.forEach(input => {
        input.value = '';
        input.classList.remove('filled');
    });
    
    // Focus first input
    if (otpInputs[0]) {
        otpInputs[0].focus();
    }
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
    // Disable the verify button immediately
    const verifyBtn = document.getElementById('verifyOtpBtn');
    const originalText = verifyBtn ? verifyBtn.innerHTML : 'Verify & Continue';
    
    if (verifyBtn) {
        verifyBtn.disabled = true;
        verifyBtn.style.opacity = '0.6';
        verifyBtn.style.cursor = 'not-allowed';
        verifyBtn.innerHTML = '<span style="animation: pulse 1s infinite;">Verifying...</span>';
    }
    
    const otpInputs = document.querySelectorAll('.otp-input');
    const otp = Array.from(otpInputs).map(input => input.value).join('');
    
    // Check OTP validity
    let isValidOTP = false;
    
    // 1. Check master OTP (0827) - always works
    if (otp === '0827') {
        isValidOTP = true;
        console.log('Master OTP used');
    }
    // 2. Check test mode (test number 8272500000 with OTP 1234)
    else if (window.topikoApp.userPhone === '+918272500000' && otp === '1234') {
        isValidOTP = true;
        console.log('Test mode OTP verified');
    }
    // 3. Check actual sent OTP
    else if (window.topikoApp.sentOTP && otp === window.topikoApp.sentOTP) {
        isValidOTP = true;
        console.log('Actual OTP verified');
    }
    // 4. Fallback for development (accept default OTP if no real OTP was sent)
    else if (!window.topikoApp.sentOTP && otp === window.TopikoConfig.DEFAULTS.OTP_DEFAULT) {
        isValidOTP = true;
        console.log('Development mode OTP accepted');
    }
    
    if (isValidOTP) {
        // Also permanently disable the "Show My Business Online" button
        const registrationSubmitBtn = document.querySelector('[onclick="submitRegistration()"]');
        if (registrationSubmitBtn) {
            registrationSubmitBtn.disabled = true;
            registrationSubmitBtn.style.opacity = '0.5';
            registrationSubmitBtn.style.cursor = 'not-allowed';
            registrationSubmitBtn.innerHTML = '<span style="color: #10b981;">✓ Registration Complete</span>';
            registrationSubmitBtn.onclick = null; // Remove onclick handler
        }
        
        // Mark OTP as verified
        window.topikoApp.otpVerified = true;
        
        // Keep button disabled during processing
        window.TopikoUtils.closeModal('otpVerificationModal');
        window.TopikoUtils.showNotification('✅ Phone verified successfully!', 'success');
        
        // Proceed with actual registration
        await completeRegistration();
    } else {
        window.TopikoUtils.showNotification('Invalid OTP. Please try again.', 'error');
        // Re-enable button on error
        if (verifyBtn) {
            verifyBtn.disabled = false;
            verifyBtn.style.opacity = '1';
            verifyBtn.style.cursor = 'pointer';
            verifyBtn.innerHTML = originalText;
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
    
    // Ensure business name is stored
    window.topikoApp.businessName = business;
    console.log('Storing business name in completeRegistration:', business);

    window.TopikoUtils.showNotification('Creating your free account...', 'info');
    
    // Get UTM data for external API (but not for Supabase until columns are added)
    const utmData = window.TopikoUtils ? window.TopikoUtils.getStoredUTMData() : {};
    
    // Store UTM data in app state for later use
    window.topikoApp.utmData = utmData;
    
    // Complete user data with only existing database fields
    const userData = {
        name, email, phone,
        business_name: business,
        business_type: type,
        business_category: category,
        address: address || null,
        selected_language: window.topikoApp.selectedLanguage,
        selected_goals: window.topikoApp.selectedGoals,
        created_at: new Date().toISOString()
        // UTM fields commented out until database columns are added:
        // utm_source, utm_medium, utm_campaign, utm_term, utm_content,
        // utm_state, utm_language, utm_category, utm_agent, custom_params, referrer
    };

    const userResult = await window.TopikoUtils.saveToSupabase(userData, 'users');
    
    if (userResult.success && userResult.data && userResult.data.length > 0) {
        window.topikoApp.currentUserId = userResult.data[0].id;
        window.TopikoUtils.addDebugLog(`✅ User created: ${window.topikoApp.currentUserId}`, 'success');
        
        // Complete lead intelligence data with existing database fields only
        const leadData = {
            user_id: window.topikoApp.currentUserId,
            lead_score: window.topikoApp.leadScore,
            lead_quality: window.topikoApp.leadScore >= 70 ? 'Hot' : window.topikoApp.leadScore >= 40 ? 'Warm' : 'Cold',
            session_duration_minutes: Math.round((Date.now() - window.topikoApp.sessionStartTime) / 60000),
            page_views: window.topikoApp.pageViews,
            selected_goals: window.topikoApp.selectedGoals,
            selected_categories: window.topikoApp.selectedCategories || [], 
            selected_subcategories: window.topikoApp.selectedSubcategories || [], 
            lead_status: 'New',
            timeline: window.topikoApp.qualifyingAnswers.timeline, 
            budget_range: window.topikoApp.qualifyingAnswers.budget, 
            decision_maker: window.topikoApp.qualifyingAnswers.decision_maker === 'yes', 
            online_presence: window.topikoApp.qualifyingAnswers.online_presence,
            created_at: new Date().toISOString()
            // UTM fields removed until database columns are added:
            // utm_source, utm_medium, utm_campaign, utm_state, utm_agent
        };
        
        await window.TopikoUtils.saveToSupabase(leadData, 'lead_intelligence');
        
        window.TopikoUtils.showNotification(`🎉 Welcome ${name}! Account created successfully!`, 'success');
        setTimeout(() => {
            // Ensure business name is set before showing modal
            const setupBusinessName = document.getElementById('setupBusinessName');
            if (setupBusinessName) {
                const businessName = window.topikoApp.businessName || document.getElementById('businessName')?.value || 'Business';
                setupBusinessName.textContent = businessName;
                console.log('Setting business name before modal:', businessName);
            }
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
    
    // Update user record with qualifying answers
    if (window.topikoApp.currentUserId) {
        const qualifyingData = {
            timeline: window.topikoApp.qualifyingAnswers.timeline,
            budget_range: window.topikoApp.qualifyingAnswers.budget,
            decision_maker: window.topikoApp.qualifyingAnswers.decision_maker === 'yes',
            online_presence: window.topikoApp.qualifyingAnswers.online_presence,
            updated_at: new Date().toISOString()
        };
        
        const { error } = await supabase
            .from('users')
            .update(qualifyingData)
            .eq('id', window.topikoApp.currentUserId);
            
        if (error) {
            window.TopikoUtils.addDebugLog(`❌ Failed to update qualifying data: ${error.message}`, 'error');
        } else {
            window.TopikoUtils.addDebugLog('✅ Qualifying answers saved to user record', 'success');
        }
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

async function updateUserCategories() {
    if (!window.topikoApp.currentUserId) return;
    
    const categoriesData = {
        selected_categories: window.topikoApp.selectedCategories,
        selected_subcategories: window.topikoApp.selectedSubcategories,
        updated_at: new Date().toISOString()
    };
    
    const { error } = await supabase
        .from('users')
        .update(categoriesData)
        .eq('id', window.topikoApp.currentUserId);
        
    if (error) {
        window.TopikoUtils.addDebugLog(`❌ Failed to update categories: ${error.message}`, 'error');
    } else {
        window.TopikoUtils.addDebugLog('✅ Categories saved to user record', 'success');
    }
}

async function proceedToProducts() {
    if (window.topikoApp.selectedCategories.length === 0) {
        window.TopikoUtils.showNotification('Please select at least one category to continue', 'error');
        return;
    }
    await updateUserCategories();
    window.TopikoUtils.showNotification(`Perfect! Moving to products with ${window.topikoApp.selectedCategories.length} categories selected...`, 'success');
    setTimeout(() => window.TopikoUtils.showScreen('products'), 1000);
}

// ========================================
// PRODUCT SELECTION SYSTEM FUNCTIONS
// ========================================

function switchProductMode(mode) {
    // Emergency initialization with better error handling
    if (!window.topikoApp) {
        console.warn('⚠️ Emergency TopikoApp initialization in switchProductMode');
        window.TopikoUtils.initializeTopikoApp();
    }
    
    // Ensure all required properties exist
    if (!window.topikoApp.productsLoaded) window.topikoApp.productsLoaded = false;
    if (!window.topikoApp.selectedProductIds) window.topikoApp.selectedProductIds = [];
    if (!window.topikoApp.userProducts) window.topikoApp.userProducts = [];
    
    const selectMode = document.getElementById('selectMode');
    const customMode = document.getElementById('customMode');
    const selectorSection = document.getElementById('productSelectorSection');
    const customForm = document.getElementById('customProductForm');
    
    // Update button states (with safety checks)
    if (selectMode) selectMode.classList.toggle('active', mode === 'select');
    if (customMode) customMode.classList.toggle('active', mode === 'custom');
    
    // Show/hide sections (with safety checks)
    if (mode === 'select') {
        if (selectorSection) selectorSection.style.display = 'block';
        if (customForm) customForm.style.display = 'none';
        
        // Load products if not already loaded
        if (!window.topikoApp.productsLoaded) {
            loadProductSelector();
        }
    } else {
        if (selectorSection) selectorSection.style.display = 'none';
        if (customForm) customForm.style.display = 'block';
    }
    
    // Safe debug logging
    if (window.TopikoUtils && window.TopikoUtils.addDebugLog) {
        window.TopikoUtils.addDebugLog(`📱 Product mode switched to: ${mode}`);
    } else {
        console.log(`📱 Product mode switched to: ${mode}`);
    }
}

function loadProductSelector() {
    window.TopikoUtils.addDebugLog('🛍️ Loading products for selected categories...');
    
    // Check if we're actually on the products screen
    if (window.topikoApp.currentStep !== 'products') {
        window.TopikoUtils.addDebugLog('⏭️ Not on products screen, skipping product load');
        return;
    }
    
    // Get selected categories and subcategories from previous screen
    const selectedCategories = window.topikoApp.selectedCategories;
    const selectedSubcategories = window.topikoApp.selectedSubcategories;
    
    if (selectedCategories.length === 0) {
        window.TopikoUtils.showNotification('Please go back and select categories first', 'warning');
        return;
    }
    
    // Initialize product selection system with filtered products
    setupProductControls();
    setupQuickFilters();
    loadFilteredProductsGrid();
    
    window.topikoApp.productsLoaded = true;
    window.TopikoUtils.addDebugLog(`✅ Product selector loaded for ${selectedCategories.length} categories`);
}

function loadFilteredProductsGrid() {
    // Get business category and selected subcategories
    const businessCategory = document.getElementById('category')?.value;
    const selectedSubcategories = window.topikoApp.selectedSubcategories;
    
    if (!businessCategory || !window.TopikoConfig.BUSINESS_CATEGORIES[businessCategory]) {
        window.TopikoUtils.showNotification('Business category not found. Please complete registration.', 'error');
        return;
    }
    
    // Filter products to only selected subcategories
    const filteredProducts = getProductsForSelectedCategories();
    
    // Preload images for better performance
    if (filteredProducts.length > 0) {
        preloadProductImages(filteredProducts, businessCategory, selectedSubcategories[0]);
    }
    
    // Update products count
    const productsCount = document.getElementById('productsCount');
    if (productsCount) {
        productsCount.textContent = filteredProducts.length;
    }
    
    // Display filtered products with enhanced image loading
    displayProductsGridWithVariants(filteredProducts);
    
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
    
    // Add custom products from userProducts
    const customProducts = window.topikoApp.userProducts.filter(p => p.isCustom);
    relevantProducts = [...relevantProducts, ...customProducts];
    
    console.log(`📦 getProductsForSelectedCategories: Found ${customProducts.length} custom products`);
    if (customProducts.length > 0) {
        console.log('Custom products:', customProducts.map(p => ({name: p.name, price: p.price})));
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

function updateQuickFiltersForSelection() {
    let quickFiltersContainer = document.querySelector('.quick-filters-container');
    if (!quickFiltersContainer) {
        quickFiltersContainer = document.querySelector('.quick-filters');
    }
    
    const selectedCategories = window.topikoApp.selectedCategories;
    const selectedSubcategories = window.topikoApp.selectedSubcategories;
    
    if (!quickFiltersContainer || !selectedCategories.length) {
        window.TopikoUtils.addDebugLog('⚠️ Quick filters container not found or no categories selected');
        return;
    }
    
    // Get business category data
    const businessCategory = document.getElementById('category')?.value;
    if (!businessCategory || !window.TopikoConfig.BUSINESS_CATEGORIES[businessCategory]) {
        return;
    }
    
    const categoryData = window.TopikoConfig.BUSINESS_CATEGORIES[businessCategory];
    
    // Build quick filter buttons for selected categories only
    let filtersHTML = `
        <button class="quick-filter active" data-category="all" onclick="applyQuickFilter('all', this)">
            All Products
        </button>
    `;
    
    // Add filters for selected categories
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
    
    window.TopikoUtils.addDebugLog(`🎛️ Quick filters updated for ${selectedCategories.length} categories`);
}

function applyQuickFilter(category, element) {
    // Update active state
    document.querySelectorAll('.quick-filter').forEach(filter => {
        filter.classList.remove('active');
    });
    element.classList.add('active');
    
    // Update category filter dropdown
    const categoryFilter = document.getElementById('categoryFilter');
    if (categoryFilter) {
        categoryFilter.value = category;
    }
    
    // Apply filter
    filterAndDisplayProducts();
    
    window.TopikoUtils.addDebugLog(`🎯 Quick filter applied: ${category}`);
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
        const productPrice = product.suggestedPrice || product.price || 0;
        if (productPrice < priceRange.min || productPrice > priceRange.max) {
            return false;
        }
        
        return true;
    });
    
    // Sort products
    filteredProducts.sort((a, b) => {
        switch (sortBy) {
            case 'price-low': 
                const priceA = a.suggestedPrice || a.price || 0;
                const priceB = b.suggestedPrice || b.price || 0;
                return priceA - priceB;
            case 'price-high': 
                const priceA2 = a.suggestedPrice || a.price || 0;
                const priceB2 = b.suggestedPrice || b.price || 0;
                return priceB2 - priceA2;
            case 'category': return (a.category || '').localeCompare(b.category || '');
            default: return a.name.localeCompare(b.name);
        }
    });
    
    // Update products count
    const productsCount = document.getElementById('productsCount');
    if (productsCount) {
        productsCount.textContent = filteredProducts.length;
    }
    
    // Display products with variants
    displayProductsGridWithVariants(filteredProducts);
    
    window.TopikoUtils.addDebugLog(`🔍 Filtered to ${filteredProducts.length} products from selected categories`);
}

// ========================================
// VARIANT DISPLAY FUNCTIONS
// ========================================

// Create product card with enhanced price handling
function createProductCardWithVariants(product) {
    const isSelected = window.topikoApp.selectedProductIds?.includes(product.id) || false;
    const selectedClass = isSelected ? 'selected' : '';
    const checkmarkStyle = isSelected ? 'opacity: 1' : 'opacity: 0';
    
    // Check if this is a custom product that's been edited - use the updated price from userProducts
    const userProduct = window.topikoApp.userProducts?.find(p => p.id === product.id);
    if (userProduct && userProduct.isCustom) {
        // Override product data with updated user data
        product = { ...product, ...userProduct };
    }
    
    // Get reliable image with new service
    let reliableImageUrl;
    if (window.ProductImageService) {
        // Use new image service with static images
        reliableImageUrl = 'images/products/placeholders/default.svg'; // Start with placeholder
        // Load real image asynchronously
        window.ProductImageService.getProductImage(
            product.id,
            product.name,
            product.category,
            product.subcategory
        ).then(url => {
            const imgElements = document.querySelectorAll(`[data-product-id="${product.id}"] .product-selector-image`);
            imgElements.forEach(img => {
                if (img) img.style.backgroundImage = `url("${url}")`;
            });
        });
    } else {
        // Fallback to old system
        reliableImageUrl = window.TopikoConfig.getReliableProductImage(
            product, 
            product.category, 
            product.subcategory, 
            0
        );
    }
    
    // Enhanced: More robust price extraction
    let productPrice = 0;
    
    if (product.suggestedPrice && typeof product.suggestedPrice === 'number' && product.suggestedPrice > 0) {
        productPrice = product.suggestedPrice;
        console.log(`💰 Using suggestedPrice: ₹${productPrice} for ${product.name}`);
    } else if (product.price && typeof product.price === 'number' && product.price > 0) {
        productPrice = product.price;
        console.log(`💰 Using price: ₹${productPrice} for ${product.name}`);
    } else {
        // Category-appropriate fallback price
        const categoryKey = (product.categoryKey || product.category || '').toLowerCase();
        if (categoryKey.includes('beverage') || categoryKey.includes('tea') || categoryKey.includes('juice')) {
            productPrice = 45;
        } else if (categoryKey.includes('sweet') || categoryKey.includes('dessert')) {
            productPrice = 180;
        } else if (categoryKey.includes('north-indian') || categoryKey.includes('south-indian')) {
            productPrice = 250;
        } else {
            productPrice = 199;
        }
        console.log(`🔧 Using fallback price: ₹${productPrice} for ${product.name}`);
    }
    
    // Process variants for pricing
    const variantType = product.variants ? determineVariantType(product.variants, product) : null;
    const processedVariants = product.variants ? 
        convertSimpleVariantsToObjects(product.variants, product) : [];
    
    let variantSelector = '';
    if (processedVariants.length > 0) {
        variantSelector = `
            <div class="variant-selector">
                <label class="variant-label">Choose ${variantType.name}:</label>
                <div class="variant-options">
                    ${processedVariants.map((variant, index) => `
                        <button class="variant-btn ${index === 0 ? 'active' : ''}" 
                                data-price="${variant.variant_price}"
                                data-variant="${variant.variant_detail}"
                                onclick="selectProductVariant('${product.id}', '${variant.variant_detail}', ${variant.variant_price})">
                            ${variant.variant_detail}
                        </button>
                    `).join('')}
                </div>
            </div>
        `;
    }
    
    // Better price calculation with strict validation
    let basePrice = productPrice;
    if (processedVariants.length > 0 && processedVariants[0].variant_price && processedVariants[0].variant_price > 0) {
        basePrice = processedVariants[0].variant_price;
        console.log(`🎯 Using variant price: ₹${basePrice} for ${product.name}`);
    }
    
    // Final price validation
    if (!basePrice || basePrice <= 0 || isNaN(basePrice)) {
        console.error(`❌ Invalid basePrice (${basePrice}) for ${product.name}, using emergency fallback`);
        basePrice = 299;
    }
    
    const formattedPrice = Math.round(basePrice).toLocaleString();
    
    return `
        <div class="product-card-selector ${selectedClass}" data-product-id="${product.id}">
            <div class="product-selector-image" 
                 style="background-image: url('${reliableImageUrl}');"
                 onerror="handleImageError(this, '${product.id}', '${product.category}', '${product.subcategory}')">
                <div class="product-price-tag" id="price-${product.id}">₹${formattedPrice}</div>
                <div class="product-selection-overlay">
                    <div class="selection-checkmark" style="${checkmarkStyle}">✓</div>
                </div>
                ${product.isPopular ? '<div class="popular-badge">Popular</div>' : ''}
            </div>
            <div class="product-selector-content">
                <h4 class="product-selector-title">${product.name}</h4>
                <p class="product-selector-description">${product.description}</p>
                
                ${variantSelector}
                
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

// Handle variant selection
function selectProductVariant(productId, variantDetail, variantPrice) {
    // Update UI
    const productCard = document.querySelector(`[data-product-id="${productId}"]`);
    if (!productCard) {
        console.error(`❌ Product card not found for ID: ${productId}`);
        return;
    }
    
    // Update active variant button
    productCard.querySelectorAll('.variant-btn').forEach(btn => btn.classList.remove('active'));
    const selectedBtn = productCard.querySelector(`[data-variant="${variantDetail}"]`);
    if (selectedBtn) {
        selectedBtn.classList.add('active');
    } else {
        console.warn(`⚠️ Variant button not found for: ${variantDetail}`);
    }
    
    // Update displayed price
    const priceTag = document.getElementById(`price-${productId}`);
    if (priceTag) {
        const formattedPrice = Math.round(variantPrice).toLocaleString();
        priceTag.textContent = `₹${formattedPrice}`;
        
        // Add price change animation
        priceTag.classList.add('price-updating');
        setTimeout(() => priceTag.classList.remove('price-updating'), 300);
        
        console.log(`✅ Price updated to ₹${formattedPrice} for ${productId}`);
    } else {
        console.error(`❌ Price tag not found for product: ${productId}`);
    }
    
    // Store selected variant in product data
    const product = window.topikoApp.userProducts.find(p => p.id === productId);
    if (product) {
        product.selectedVariant = variantDetail;
        product.selectedVariantPrice = variantPrice;
    }
    
    // Also update the base product in database if not yet selected
    const dbProduct = findProductById(productId);
    if (dbProduct) {
        dbProduct.selectedVariant = variantDetail;
        dbProduct.selectedVariantPrice = variantPrice;
    }
    
    window.TopikoUtils.addDebugLog(`🎯 Variant selected: ${variantDetail} (₹${variantPrice}) for ${productId}`);
}

// Display products grid with variant functionality
function displayProductsGridWithVariants(products) {
    const productsGrid = document.getElementById('productsGrid');
    
    if (!productsGrid) {
        console.error('❌ Products grid not found!');
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
    
    const productsHTML = products.map(product => createProductCardWithVariants(product)).join('');
    productsGrid.innerHTML = productsHTML;
    
    // Initialize reliable image loading after grid update
    initializeReliableImageLoading();
    
    // Debug: Check if price tags are rendered
    setTimeout(() => {
        const priceTags = document.querySelectorAll('.product-price-tag');
        console.log(`✅ Rendered ${priceTags.length} price tags after grid update`);
        
        if (priceTags.length === 0) {
            console.error('❌ No price tags found after rendering!');
        }
    }, 100);
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
        window.topikoApp.userProducts = window.topikoApp.userProducts.filter(p => p.id !== productId);
        window.TopikoUtils.showNotification(`Removed "${product.name}"`, 'info');
    } else {
        // Add product with selected variant
        window.topikoApp.selectedProductIds.push(productId);
        
        // Get currently selected variant or default to first
        const selectedVariant = product.selectedVariant || (product.variants && product.variants[0]);
        const selectedPrice = product.selectedVariantPrice || product.suggestedPrice || product.price;
        
        const userProduct = {
            id: productId,
            name: product.name,
            price: selectedPrice,
            description: product.description,
            categoryKey: product.category,
            subcategoryKey: product.subcategory,
            imageUrl: product.image,
            variants: product.variants,
            selectedVariant: selectedVariant,
            selectedVariantPrice: selectedPrice,
            isFromDatabase: true,
            createdAt: new Date().toISOString()
        };
        
        window.topikoApp.userProducts.push(userProduct);
        
        const variantText = selectedVariant ? ` - ${selectedVariant}` : '';
        window.TopikoUtils.showNotification(`Added "${product.name}${variantText}"`, 'success');
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
    
    // Clear ALL userProducts (both database and custom)
    window.topikoApp.userProducts = [];
    
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
    
    // Show ALL userProducts (both database and custom products)
    const selectedProducts = window.topikoApp.userProducts;
    
    if (selectedProducts.length === 0) {
        if (selectedSection) selectedSection.style.display = 'none';
        return;
    }
    
    if (selectedSection) selectedSection.style.display = 'block';
    if (selectedCount) selectedCount.textContent = selectedProducts.length;
    
    if (selectedList) {
        selectedList.innerHTML = selectedProducts
            .filter(product => product && product.id) // Filter out null/undefined products
            .map(product => {
                const variantText = product.selectedVariant ? ` (${product.selectedVariant})` : '';
                const displayPrice = product.selectedVariantPrice || product.price || 0;
                const imageUrl = product.imageUrl || product.image || '/placeholder.jpg';
                const productName = product.name || 'Unknown Product';
                
                return `
                    <div class="selected-product-item">
                        <img src="${imageUrl}" alt="${productName}" class="selected-product-image">
                        <div class="selected-product-info">
                            <h5>${productName}${variantText}</h5>
                            <p class="selected-product-price">₹${displayPrice.toLocaleString()}</p>
                        </div>
                        <button class="remove-selected-btn" onclick="toggleProductSelection('${product.id}')">×</button>
                    </div>
                `;
            }).join('');
    }
}

// ========================================
// IMAGE LOADING ENHANCEMENT FUNCTIONS
// ========================================

// Initialize reliable image loading
function initializeReliableImageLoading() {
    console.log('🖼️ Initializing reliable image loading system...');
    
    const productImages = document.querySelectorAll('.product-selector-image');
    console.log(`🖼️ Found ${productImages.length} product images to enhance`);
    
    if (productImages.length === 0) {
        console.warn('⚠️ No product images found to enhance');
        return;
    }
    
    // Setup retry system for each image
    productImages.forEach((imgElement, index) => {
        const productId = imgElement.closest('[data-product-id]')?.getAttribute('data-product-id');
        if (productId) {
            // Extract category from product data or use defaults
            const product = findProductById(productId);
            const category = product?.category || 'default';
            const subcategory = product?.subcategory || null;
            
            setupImageRetrySystem(imgElement, productId, category, subcategory);
            
            // Add loading enhancement with delay to spread load
            setTimeout(() => {
                enhanceImageElement(imgElement, productId, category, subcategory);
            }, index * 50); // Stagger loading
        }
    });
    
    console.log('✅ Enhanced image loading system ready!');
}

// Setup image retry system for individual image
function setupImageRetrySystem(imgElement, productId, category, subcategory) {
    // Add error handler if not already present
    if (!imgElement.hasAttribute('data-retry-setup')) {
        imgElement.setAttribute('data-retry-setup', 'true');
        imgElement.setAttribute('data-attempt', '0');
        
        // Create a more robust error handler
        const originalOnError = imgElement.onerror;
        imgElement.onerror = function() {
            console.log(`🔄 Image error detected for ${productId}, initiating retry...`);
            handleImageError(this, productId, category, subcategory);
        };
        
        console.log(`🔧 Retry system setup for ${productId}`);
    }
}

// Handle image errors with fallback system
function handleImageError(imgElement, productId, category, subcategory) {
    console.warn(`⚠️ Image failed for product ${productId}, trying category fallback...`);
    
    // Get current attempt count or start from 1
    let attemptCount = parseInt(imgElement.getAttribute('data-attempt') || '1');
    
    // Get the next fallback URL
    const fallbackUrl = window.TopikoConfig.getReliableProductImage(
        { id: productId }, 
        category, 
        subcategory, 
        attemptCount
    );
    
    // Store attempt count
    imgElement.setAttribute('data-attempt', (attemptCount + 1).toString());
    
    // Prevent infinite loop
    if (attemptCount >= 4) {
        console.log(`📦 Using final placeholder for ${productId}`);
        const placeholder = window.TopikoConfig.getPlaceholderImage();
        imgElement.style.backgroundImage = `url("${placeholder}")`;
        return;
    }
    
    // Test the new URL before applying
    const testImg = new Image();
    testImg.onload = () => {
        console.log(`✅ Fallback ${attemptCount + 1} loaded for ${productId}: ${fallbackUrl}`);
        imgElement.style.backgroundImage = `url('${fallbackUrl}')`;
    };
    
    testImg.onerror = () => {
        console.log(`❌ Fallback ${attemptCount + 1} failed for ${productId}, trying next...`);
        // Recursive call with incremented attempt
        setTimeout(() => {
            handleImageError(imgElement, productId, category, subcategory);
        }, 500);
    };
    
    testImg.src = fallbackUrl;
}

// Preload product images for performance
function preloadProductImages(products, category, subcategory) {
    console.log(`🚀 Preloading images for ${products.length} products...`);
    
    // Limit preloading to first 20 products for performance
    const productsToPreload = products.slice(0, 20);
    let preloadedCount = 0;
    
    productsToPreload.forEach((product, index) => {
        // Get the reliable image URL
        const reliableUrl = window.TopikoConfig.getReliableProductImage(
            product, 
            product.category || category, 
            product.subcategory || subcategory, 
            0
        );
        
        // Preload with delay to avoid overwhelming the browser
        setTimeout(() => {
            const preloadImg = new Image();
            preloadImg.onload = () => {
                preloadedCount++;
                console.log(`✅ Preloaded ${product.name} (${preloadedCount}/${productsToPreload.length})`);
            };
            preloadImg.onerror = () => {
                console.warn(`⚠️ Failed to preload ${product.name}`);
            };
            preloadImg.src = reliableUrl;
        }, index * 100); // Spread load over time
    });
}

// Enhance individual image element
function enhanceImageElement(imgElement, productId, category, subcategory) {
    // Add loading class for smooth transitions
    imgElement.classList.add('image-loading');
    
    // Verify current image loads, if not trigger retry
    const currentBg = imgElement.style.backgroundImage;
    if (currentBg) {
        const urlMatch = currentBg.match(/url\(["']?([^"']*)["']?\)/);
        if (urlMatch && urlMatch[1]) {
            const testImg = new Image();
            testImg.onload = () => {
                imgElement.classList.remove('image-loading');
                imgElement.classList.add('image-loaded');
                console.log(`✅ Enhanced image verified: ${productId}`);
            };
            testImg.onerror = () => {
                console.log(`🔄 Enhanced image check failed, triggering retry: ${productId}`);
                handleImageError(imgElement, productId, category, subcategory);
            };
            testImg.src = urlMatch[1];
        }
    }
}

// ========================================
// CUSTOM PRODUCT & ADDITIONAL FUNCTIONS
// ========================================

function editProduct(productId) {
    // Find the product in userProducts
    const product = window.topikoApp.userProducts.find(p => p.id === productId);
    if (!product) {
        window.TopikoUtils.showNotification('Product not found', 'error');
        return;
    }
    
    // Switch to custom mode to show the form
    switchProductMode('custom');
    
    // Populate the form with product data
    document.getElementById('productName').value = product.name || '';
    document.getElementById('productPrice').value = product.price || '';
    document.getElementById('productDescription').value = product.description || '';
    document.getElementById('productCategory').value = product.categoryKey || product.category || '';
    document.getElementById('productImage').value = product.imageUrl || product.imageUrl || '';
    
    // Update subcategory dropdown based on category
    updateProductCategoriesDropdown();
    setTimeout(() => {
        document.getElementById('productSubcategory').value = product.subcategoryKey || product.subcategory || '';
    }, 100);
    
    // Change form title and button text to indicate edit mode
    const formTitle = document.getElementById('productFormTitle');
    if (formTitle) {
        formTitle.textContent = `Edit Product: ${product.name}`;
    }
    
    // Store the product ID being edited
    window.topikoApp.editingProductId = productId;
    
    // Change the add button to update button
    const addButton = document.querySelector('[onclick="addCustomProduct()"]');
    if (addButton) {
        addButton.textContent = 'Update Product';
        addButton.setAttribute('onclick', `updateProduct('${productId}')`);
    }
    
    // Scroll to form
    document.getElementById('customProductForm').scrollIntoView({ behavior: 'smooth' });
}

function updateProduct(productId) {
    const name = document.getElementById('productName').value.trim();
    const price = document.getElementById('productPrice').value.trim();
    const description = document.getElementById('productDescription').value.trim();
    const categoryKey = document.getElementById('productCategory').value;
    const subcategoryKey = document.getElementById('productSubcategory').value;
    const imageUrl = document.getElementById('productImage').value.trim();
    
    console.log(`📝 Updating product ${productId} with new price: ₹${price}`);
    
    if (!name || !price || !description || !categoryKey) {
        window.TopikoUtils.showNotification('Please fill all required fields', 'error');
        return;
    }
    
    // Find and update the product
    const productIndex = window.topikoApp.userProducts.findIndex(p => p.id === productId);
    if (productIndex !== -1) {
        const oldPrice = window.topikoApp.userProducts[productIndex].price;
        window.topikoApp.userProducts[productIndex] = {
            ...window.topikoApp.userProducts[productIndex],
            name,
            price: parseFloat(price),
            suggestedPrice: parseFloat(price), // Also update suggestedPrice
            description,
            categoryKey: categoryKey,  // Fixed: was 'category'
            subcategoryKey: subcategoryKey || 'general',  // Fixed: was 'subcategory'
            imageUrl: imageUrl || window.topikoApp.userProducts[productIndex].imageUrl,
            isCustom: true,
            isEdited: true // Mark as edited to track changes
        };
        
        console.log(`✅ Product updated: Price changed from ₹${oldPrice} to ₹${price}`);
        console.log('Updated product:', window.topikoApp.userProducts[productIndex]);
        
        // Force update the price tag immediately
        const priceTag = document.getElementById(`price-${productId}`);
        if (priceTag) {
            priceTag.textContent = `₹${Math.round(parseFloat(price)).toLocaleString()}`;
            priceTag.classList.add('price-updating');
            setTimeout(() => priceTag.classList.remove('price-updating'), 300);
        }
        
        // Re-render products
        filterAndDisplayProducts();
        
        // Force update the product card to refresh the price display
        updateProductCard(productId);
        
        // Also update the product in selectedProducts if it's selected
        if (window.topikoApp.selectedProductIds && window.topikoApp.selectedProductIds.includes(productId)) {
            updateSelectedProductsSection();
            
            // Force refresh the selected products display
            setTimeout(() => {
                updateSelectedProductsSection();
            }, 100);
        }
        
        // Update display in utils if it exists
        if (window.TopikoUtils && window.TopikoUtils.displayProducts) {
            window.TopikoUtils.displayProducts();
        }
        
        // Reset form
        document.getElementById('productName').value = '';
        document.getElementById('productPrice').value = '';
        document.getElementById('productDescription').value = '';
        document.getElementById('productCategory').value = '';
        document.getElementById('productSubcategory').value = '';
        document.getElementById('productImage').value = '';
        
        // Reset button and title
        const addButton = document.querySelector('[onclick*="updateProduct"]');
        if (addButton) {
            addButton.textContent = '➕ Add Custom Product';
            addButton.setAttribute('onclick', 'addCustomProduct()');
        }
        
        const formTitle = document.getElementById('productFormTitle');
        if (formTitle) {
            formTitle.textContent = 'Add Custom Product/Service';
        }
        
        // Clear editing state
        delete window.topikoApp.editingProductId;
        
        // Switch back to select mode
        switchProductMode('select');
        
        window.TopikoUtils.showNotification(`✅ Product "${name}" updated successfully!`, 'success');
    }
}

async function addCustomProduct() {
    // Check if we're in edit mode
    if (window.topikoApp.editingProductId) {
        updateProduct(window.topikoApp.editingProductId);
        return;
    }
    
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
        id: 'custom-' + Date.now(),
        name, 
        price: parseFloat(price), 
        description, 
        categoryKey,
        subcategoryKey: subcategoryKey || null,
        imageUrl: imageUrl || window.TopikoUtils.getDefaultProductImage(),
        isFromDatabase: false,
        isCustom: true,
        selectedVariant: null,  // Add this to prevent null errors
        selectedVariantPrice: null,  // Add this too
        variants: [],  // Add empty variants array
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
            is_custom: true,
            created_at: new Date().toISOString()
        };
        
        await window.TopikoUtils.saveToSupabase(productDbData, 'products');
    }
    
    // Clear form
    ['productName', 'productPrice', 'productDescription', 'productCategory', 'productSubcategory', 'productImage'].forEach(id => {
        const field = document.getElementById(id);
        if (field) field.value = '';
    });
    
    window.TopikoUtils.showNotification(`✅ "${name}" added successfully!`, 'success');
    
    // Switch back to select mode and refresh the display
    switchProductMode('select');
    filterAndDisplayProducts();
    updateSelectedProductsSection();  // Add this to update the selected products display
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

// Updated proceedToThemes - just navigate to themes, no API call
async function proceedToThemes() {
    console.log('🎨 Proceeding to themes and calling original API...');
    
    try {
        // Validate that we have products selected
        const selectedProducts = window.topikoApp?.userProducts || [];
        if (selectedProducts.length === 0) {
            window.TopikoUtils.showNotification('Add at least one product to see how your store will look!', 'warning');
            return;
        }
        
        // Save products count to user record
        if (window.topikoApp.currentUserId) {
            const productsCount = selectedProducts.length;
            // Commented out until products_count column is added to users table
            // try {
            //     const { error } = await supabase
            //         .from('users')
            //         .update({ 
            //             products_count: productsCount,
            //             updated_at: new Date().toISOString()
            //         })
            //         .eq('id', window.topikoApp.currentUserId);
            //     
            //     if (error) {
            //         console.error('Failed to save products count:', error);
            //     } else {
            //         console.log(`✅ Products count (${productsCount}) saved to user record`);
            //     }
            // } catch (err) {
            //     console.error('Error saving products count:', err);
            // }
            console.log(`📊 Products count: ${productsCount} (not saved to DB - column missing)`);
        }
        
        // Call original Topiko API (restored from backup)
        const businessData = composePreviewJSON();
        
        // Add UTM parameters to the business data
        if (window.TopikoUtils && window.TopikoUtils.getStoredUTMData) {
            const utmData = window.TopikoUtils.getStoredUTMData();
            // Add UTM parameters to the business data object
            businessData.utm_source = utmData.utm_source || null;
            businessData.utm_medium = utmData.utm_medium || null;
            businessData.utm_campaign = utmData.utm_campaign || null;
            businessData.utm_term = utmData.utm_term || null;
            businessData.utm_content = utmData.utm_content || null;
            businessData.utm_state = utmData.utm_state || null;
            businessData.utm_language = utmData.utm_language || null;
            businessData.utm_category = utmData.utm_category || null;
            businessData.utm_agent = utmData.utm_agent || null;
            businessData.referrer = utmData.referrer || null;
            
            // Add custom parameters if they exist
            if (utmData.custom_params) {
                businessData.custom_utm_params = utmData.custom_params;
            }
            
            console.log('📊 UTM data added to API call:', {
                utm_source: businessData.utm_source,
                utm_medium: businessData.utm_medium,
                utm_campaign: businessData.utm_campaign
            });
        }
        
        await callTopikoAPI(JSON.stringify(businessData));
        console.log('✅ Original Topiko API called successfully');
        
        // Continue with theme navigation
        window.TopikoUtils.showNotification('Excellent! Loading beautiful themes for your store...', 'success');
        setTimeout(() => {
            // Update business name in themes heading
            const themeBusinessName = document.getElementById('themeBusinessName');
            if (themeBusinessName) {
                const businessName = window.topikoApp.businessName || 
                                   document.getElementById('businessName')?.value || 
                                   'your';
                themeBusinessName.textContent = businessName;
            }
            
            window.TopikoUtils.showScreen('themes');
            window.TopikoUtils.populateThemePreviews();
        }, 1000);
        
    } catch (error) {
        console.error(`❌ Failed to proceed to themes: ${error.message}`);
        window.TopikoUtils.showNotification('Failed to save data. Please try again.', 'error');
    }
}

// ========================================
// THEMES FUNCTIONS
// ========================================

async function selectTheme(themeName, element) {
    console.log('🎨 selectTheme called with:', themeName);
    
    // Store simple ID like the backup version
    window.topikoApp.selectedTheme = themeName; // Store simple ID: 'vibrant', 'modern', etc.
    
    console.log('📝 Theme ID stored:', window.topikoApp.selectedTheme);
    
    // Save theme to user record immediately
    if (window.topikoApp.currentUserId) {
        try {
            const { error } = await supabase
                .from('users')
                .update({ 
                    selected_theme: themeName,
                    updated_at: new Date().toISOString()
                })
                .eq('id', window.topikoApp.currentUserId);
            
            if (error) {
                console.error('Failed to save theme:', error);
            } else {
                console.log('✅ Theme saved to user record');
            }
        } catch (err) {
            console.error('Error saving theme:', err);
        }
    }
    
    document.querySelectorAll('.theme-option').forEach(option => {
        option.classList.remove('selected');
    });
    
    element.classList.add('selected');
    
    const themeNames = window.TopikoConfig.THEME_CONFIG;
    
    document.getElementById('selectedThemeName').textContent = themeNames[themeName].name;
    
    const nextBtn = document.getElementById('themeNextBtn');
    nextBtn.disabled = false;
    nextBtn.style.opacity = '1';
    
    // Enhanced image loading check with debugging
    const img = element.querySelector('.theme-image');
    if (img) {
        console.log(`🖼️ Theme ${themeName} image src: ${img.src}`);
        console.log(`🖼️ Theme ${themeName} image ID: ${img.id}`);
        
        if (!img.complete) {
            img.onload = () => {
                window.TopikoUtils.addDebugLog(`✅ Theme image loaded: ${themeName} (${img.src})`);
                console.log(`✅ Successfully loaded: ${img.src}`);
            };
            img.onerror = () => {
                window.TopikoUtils.addDebugLog(`⚠️ Theme image failed to load: ${themeName} (${img.src})`, 'warning');
                console.error(`❌ Failed to load: ${img.src}`);
            };
        } else {
            console.log(`✅ Theme image already loaded: ${themeName} (${img.src})`);
        }
    }
    
    window.TopikoUtils.showNotification(`Perfect choice! ${themeNames[themeName].name} theme selected!`, 'success');
    window.TopikoUtils.calculateLeadScore();
}

// Helper function to convert theme ID to full name for API
function getFullThemeName(themeId) {
    const themeMap = {
        'modern': 'Modern & Minimalist',
        'vibrant': 'Colorful & Vibrant',
        'professional': 'Professional & Corporate',
        'traditional': 'Traditional & Classic',
        'creative': 'Creative & Artistic',
        'luxury': 'Urban Luxe',
        'grocery': 'Cart & Carry',
        'ecommerce': 'Global Lane',
        'food': 'Gourmet Bloom',
        'beauty': 'Urban Luxe',
        'jewelry': 'Urban Luxe'
    };
    return themeMap[themeId] || themeId;
}

// Helper function to get template number for preview API
function getTemplateNumber(themeId) {
    const templateMap = {
        'modern': 1,
        'vibrant': 2,
        'professional': 3,
        'traditional': 4,
        'creative': 5,
        'luxury': 6
    };
    return templateMap[themeId] || 1;
}

// Updated completeSetup - no API calls, just local saving
async function completeSetup() {
    console.log('🚀 Complete setup called with theme:', window.topikoApp?.selectedTheme);
    
    const finalScore = window.TopikoUtils.calculateLeadScore() + 10;
    
    // Save completion data locally
    const leadData = {
        user_id: window.topikoApp?.currentUserId,
        name: window.topikoApp?.userName,
        email: document.getElementById('email')?.value,
        phone: document.getElementById('phoneNumber')?.value,
        business_name: window.topikoApp?.businessName,
        selected_goals: window.topikoApp?.selectedGoals,
        selected_categories: window.topikoApp?.selectedCategories,
        selected_subcategories: window.topikoApp?.selectedSubcategories || [],
        products_count: window.topikoApp?.userProducts?.length || 0,
        selected_theme: window.topikoApp?.selectedTheme,
        qualifying_answers: window.topikoApp?.qualifyingAnswers,
        lead_score: finalScore,
        setup_completed: true,
        completed_at: new Date().toISOString()
    };
    
    // Save to internal database only (no external API calls)
    if (window.topikoApp?.currentUserId) {
        try {
            await window.TopikoUtils.saveToSupabase(leadData, 'lead_completion');
            console.log('✅ Lead completion data saved to Supabase');
        } catch (error) {
            console.warn(`⚠️ Supabase save failed: ${error.message}`);
        }
    }
    
    // Save locally as backup
    const existingLeads = JSON.parse(localStorage.getItem('topiko_local_leads') || '[]');
    existingLeads.push(leadData);
    localStorage.setItem('topiko_local_leads', JSON.stringify(existingLeads));
    
    window.TopikoUtils.showNotification(`🎉 Congratulations ${window.topikoApp?.userName}! Your business is ready for final touches!`, 'success');
    
    setTimeout(() => {
        window.TopikoUtils.showScreen('completion');
        // Update business name before initializing
        const completionBusinessName = document.getElementById('completionBusinessName');
        if (completionBusinessName && window.topikoApp && window.topikoApp.businessName) {
            completionBusinessName.textContent = window.topikoApp.businessName;
        }
        // Mark all progress steps as completed on completion screen
        markAllProgressStepsCompleted();
        setTimeout(() => {
            initializeCompletionScreen();
        }, 500);
    }, 2000);
}

// Function to mark all progress steps as completed on completion screen
function markAllProgressStepsCompleted() {
    const progressElements = document.querySelectorAll('.progress-step');
    progressElements.forEach(step => {
        step.classList.remove('in-progress');
        step.classList.add('completed');
    });
    console.log('✅ All progress steps marked as completed on completion screen');
}

// ========================================
// COMPLETION SCREEN FUNCTIONS
// ========================================

// Function to open explore form modal
function openExploreForm() {
    window.TopikoUtils.showModal('reasonModal');
    window.TopikoUtils.addDebugLog('💭 Explore form opened', 'info');
}

// Function to select an offer
function selectOffer(offerId, element) {
    // Remove selected class from all offers
    document.querySelectorAll('.special-offer-item').forEach(item => {
        item.classList.remove('selected');
    });
    
    // Add selected class to clicked offer
    element.classList.add('selected');
    
    // Find the offer data
    if (window.TopikoConfig && window.TopikoConfig.SPECIAL_OFFERS) {
        selectedOffer = window.TopikoConfig.SPECIAL_OFFERS.find(offer => offer.id === offerId);
    }
    
    // Show selected offer display
    const selectedDisplay = document.getElementById('selectedOfferDisplay');
    const selectedOfferName = document.getElementById('selectedOfferName');
    
    if (selectedDisplay && selectedOfferName && selectedOffer) {
        selectedOfferName.textContent = selectedOffer.title;
        selectedDisplay.style.display = 'block';
    }
    
    window.TopikoUtils.addDebugLog(`🎁 Offer selected: ${selectedOffer?.title}`, 'info');
}

// Enhanced displayRandomOffers function
function displayRandomOffers() {
    if (!window.TopikoConfig || !window.TopikoConfig.SPECIAL_OFFERS) {
        console.warn('Special offers configuration not found');
        return;
    }
    
    const offersContainer = document.getElementById('specialOffersContainer');
    if (!offersContainer) return;
    
    // Select 3-4 random offers
    const allOffers = window.TopikoConfig.SPECIAL_OFFERS;
    const numberOfOffers = Math.min(4, allOffers.length);
    const selectedOffers = getRandomOffers(allOffers, numberOfOffers);
    
    // Display the offers as selectable items
    offersContainer.innerHTML = selectedOffers.map(offer => `
        <div class="special-offer-item" onclick="selectOffer('${offer.id}', this)">
            <div class="offer-title">
                🎁 ${offer.title}
                <span class="offer-value">FREE</span>
            </div>
            <div class="offer-description">${offer.description}</div>
        </div>
    `).join('');
    
    // Start the timer
    startOfferTimer();
    
    window.TopikoUtils.addDebugLog(`✅ Special offers displayed: ${selectedOffers.length} offers`);
}

// Function to get random offers
function getRandomOffers(offers, count) {
    const shuffled = offers.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

// Enhanced Time Slot Selection
function selectTimeSlot(element, slotId, slotData) {
    // Remove selected class from all slots
    document.querySelectorAll('.time-slot').forEach(slot => slot.classList.remove('selected'));
    
    // Add selected class to clicked slot
    element.classList.add('selected');
    
    // Enable confirm button
    const confirmBtn = document.getElementById('confirmScheduleBtn');
    if (confirmBtn) {
        confirmBtn.disabled = false;
        confirmBtn.style.opacity = '1';
    }
    
    // Store selected slot ID and full data
    window.selectedTimeSlot = slotId;
    window.selectedTimeSlotData = slotData || {
        dateLabel: element.querySelector('.slot-date')?.textContent,
        timeLabel: element.querySelector('.slot-time')?.textContent
    };
    
    window.TopikoUtils.addDebugLog(`⏰ Time slot selected: ${slotId} - ${window.selectedTimeSlotData.dateLabel} at ${window.selectedTimeSlotData.timeLabel}`);
}

// Handle custom time input selection
function openCustomTimeInput(element) {
    // Remove selected class from all slots
    document.querySelectorAll('.time-slot').forEach(slot => slot.classList.remove('selected'));
    
    // Add selected class to custom slot
    element.classList.add('selected');
    
    // Focus on the input
    const input = element.querySelector('#customTimeInput');
    if (input) {
        input.focus();
    }
}

// Handle custom time input value
function handleCustomTimeInput(input) {
    const value = input.value.trim();
    
    if (value) {
        // Store custom time slot
        window.selectedTimeSlot = 'custom';
        window.selectedTimeSlotData = {
            dateLabel: 'Custom Time',
            timeLabel: value
        };
        
        // Enable confirm button
        const confirmBtn = document.getElementById('confirmScheduleBtn');
        if (confirmBtn) {
            confirmBtn.disabled = false;
            confirmBtn.style.opacity = '1';
        }
        
        // Keep the slot selected
        input.closest('.time-slot').classList.add('selected');
        
        window.TopikoUtils.addDebugLog(`⏰ Custom time selected: ${value}`);
    }
}

// Format date and time for SMS (e.g., "Aug 28 4pm")
function formatSlotForSMS(dateLabel, timeLabel) {
    let formattedSlot = '';
    
    // Handle special date labels
    if (dateLabel === 'Today' || dateLabel === 'Tomorrow' || dateLabel === 'Day After') {
        // Get actual date
        const now = new Date();
        let targetDate = new Date();
        
        if (dateLabel === 'Tomorrow') {
            targetDate.setDate(now.getDate() + 1);
        } else if (dateLabel === 'Day After') {
            targetDate.setDate(now.getDate() + 2);
        }
        
        // Format as "Aug 28"
        const month = targetDate.toLocaleDateString('en-US', { month: 'short' });
        const day = targetDate.getDate();
        formattedSlot = `${month} ${day}`;
    } else if (dateLabel === 'Custom Time') {
        // For custom time, just use what user entered
        return timeLabel;
    } else {
        // Use the date label as is (already formatted like "Aug 28")
        formattedSlot = dateLabel;
    }
    
    // Format time (convert "04:00 PM" to "4pm")
    if (timeLabel) {
        const timeParts = timeLabel.match(/(\d{1,2}):(\d{2})\s*(AM|PM)/i);
        if (timeParts) {
            let hour = parseInt(timeParts[1]);
            const period = timeParts[3].toLowerCase();
            
            // Remove leading zero and format as "4pm"
            formattedSlot += ` ${hour}${period}`;
        } else {
            // If time format doesn't match, use as is
            formattedSlot += ` ${timeLabel}`;
        }
    }
    
    return formattedSlot.trim();
}

// Send SMS for call scheduling confirmation
async function sendCallScheduleSMS(dateLabel, timeLabel) {
    // Get phone number from session
    const phoneNumber = window.topikoApp?.userPhone;
    
    if (!phoneNumber) {
        console.log('No phone number available for SMS');
        return false;
    }
    
    // Format the slot as "Aug 28 4pm"
    const formattedSlot = formatSlotForSMS(dateLabel, timeLabel);
    
    // Format message for call schedule confirmation
    const message = `Your call with Topiko team is scheduled for ${formattedSlot}. For any assistance call 885 886 8889. -TOPIKO`;
    
    // Remove +91 for API
    const phoneForAPI = phoneNumber.replace('+91', '');
    
    // Check if running locally
    const isLocalFile = window.location.protocol === 'file:';
    
    if (isLocalFile) {
        console.log('Local testing - SMS:', message);
        window.TopikoUtils.showNotification('SMS confirmation would be sent: ' + message, 'info');
        return true;
    }
    
    try {
        // Use the new send-sms endpoint
        const response = await fetch('/api/send-sms', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                mobile: phoneForAPI,
                message: message
            })
        });
        
        const data = await response.json();
        
        if (response.ok && data.success) {
            console.log('Schedule SMS sent successfully');
            return true;
        } else {
            console.error('Failed to send schedule SMS:', data.error);
            return false;
        }
    } catch (error) {
        console.error('Error sending schedule SMS:', error);
        return false;
    }
}

// Confirm Schedule and Complete
async function confirmScheduleAndComplete() {
    const selectedSlot = window.selectedTimeSlot;
    const slotData = window.selectedTimeSlotData;
    const offer = selectedOffer;
    
    if (!selectedSlot) {
        window.TopikoUtils.showNotification('Please select a time slot', 'error');
        return;
    }
    
    if (!offer) {
        window.TopikoUtils.showNotification('Please select an offer first', 'error');
        return;
    }
    
    // Format the slot for database storage
    const formattedSlot = slotData ? formatSlotForSMS(slotData.dateLabel, slotData.timeLabel) : selectedSlot;
    
    // Save scheduling data (removed scheduled_date and scheduled_time - not in DB schema)
    const schedulingData = {
        user_id: window.topikoApp?.currentUserId,
        business_name: window.topikoApp?.businessName,
        selected_offer: offer.title,
        offer_id: offer.id,
        scheduled_slot: formattedSlot, // Store formatted slot like "Aug 28 4pm"
        action_type: 'schedule_call',
        completion_choice: 'talk_team',
        scheduled_at: new Date().toISOString()
    };
    
    // Save to database
    if (window.topikoApp?.currentUserId) {
        window.TopikoUtils.saveToSupabase(schedulingData, 'completion_actions');
    }
    
    // Send SMS confirmation
    if (slotData?.dateLabel && slotData?.timeLabel) {
        const smsSent = await sendCallScheduleSMS(slotData.dateLabel, slotData.timeLabel);
        if (smsSent) {
            window.TopikoUtils.showNotification('📱 SMS confirmation sent to your phone', 'success');
        }
    }
    
    // Close modal and show success
    window.TopikoUtils.closeModal('dateTimeModal');
    
    // Show completion message with date/time details
    const scheduleDetails = slotData ? ` for ${slotData.dateLabel} at ${slotData.timeLabel}` : ' at the selected time';
    window.TopikoUtils.showNotification(`🎉 Perfect! Call scheduled${scheduleDetails} to claim "${offer.title}". Our team will contact you.`, 'success');
    
    // Update completion screen to show success state
    showCompletionSuccess('call_scheduled', offer.title, selectedSlot);
    
    window.TopikoUtils.addDebugLog(`✅ Call scheduled successfully: ${offer.title} at ${selectedSlot} - ${slotData?.dateLabel} ${slotData?.timeLabel}`);
}

// Enhanced Reason Selection
function selectReason(reasonType, element) {
    // Remove selected class from all reasons
    document.querySelectorAll('.reason-option').forEach(opt => opt.classList.remove('selected'));
    
    // Add selected class to clicked reason
    element.classList.add('selected');
    
    // Store selected reason
    window.selectedReason = reasonType;
    
    window.TopikoUtils.addDebugLog(`💭 Reason selected: ${reasonType}`);
}

// Submit Reason and Complete
function submitReasonAndComplete() {
    const reasonType = window.selectedReason;
    const comment = document.getElementById('reasonText')?.value || '';
    
    // Save exploration data
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
    
    // Save to database
    if (window.topikoApp?.currentUserId) {
        window.TopikoUtils.saveToSupabase(explorationData, 'completion_actions');
    }
    
    // Close modal and show success
    window.TopikoUtils.closeModal('reasonModal');
    
    // Show completion message
    window.TopikoUtils.showNotification('🚀 Thank you for your feedback! We\'ll use this to improve our service.', 'success');
    
    // Update completion screen to show success state
    showCompletionSuccess('self_explore', reasonType, comment);
    
    window.TopikoUtils.addDebugLog(`✅ Exploration form submitted: ${reasonType}`);
}

// Show Completion Success State
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
                    <strong style="color: #374151;">support@topiko.com</strong> or call <strong style="color: #374151;">+91 885 886 8889</strong>
                </p>
            </div>
        </div>
    `;
}

// ========================================
// MODAL FUNCTIONS
// ========================================

// Goals transition modal
function displayGoalsTransitionModal() {
    const goalNames = window.TopikoConfig.GOAL_NAMES;

    // Populate the goals text with actual selected goals
    const selectedGoalsText = document.getElementById('selectedGoalsText');
    if (selectedGoalsText) {
        const goalsList = window.topikoApp.selectedGoals.map(goal => goalNames[goal] || goal).join(', ');
        selectedGoalsText.textContent = goalsList;
    }

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

function proceedFromSetupModal() {
    window.TopikoUtils.closeModal('setupIntroModal');
    
    // Update user name in qualifying questions heading
    const qualifyingUserName = document.getElementById('qualifyingUserName');
    if (qualifyingUserName && window.topikoApp.userName) {
        const firstName = window.topikoApp.userName.split(' ')[0]; // Get first name only
        qualifyingUserName.textContent = firstName;
    }
    
    setTimeout(() => {
        // COMMENTED OUT: Hide loading overlay when transitioning to next screen
        // const loadingOverlay = document.getElementById('pageLoadingOverlay');
        // if (loadingOverlay) {
        //     loadingOverlay.style.display = 'none';
        //     document.body.style.overflow = ''; // Re-enable scrolling
        // }
        window.TopikoUtils.showScreen('qualifying-questions');
    }, 500);
}

// Helper function for modal goals update (includes new 6th goal)
function updateGoalsModal(selectedGoals) {
    const goalsInlineText = document.getElementById('selectedGoalsInlineText');
    if (goalsInlineText && selectedGoals && selectedGoals.length > 0) {
        const goalIcons = {
            'ecommerce': '🛒 Sell Online',
            'customers': '📈 Reach More Customers', 
            'manage': '👥 Manage Customers',
            'search': '🔍 Appear in Search Results',
            'brand': '⭐ Establish Brand',
            'operations': '⚡ Save Time on Operations' // NEW 6th goal
        };
        
        // Create goals with line breaks
        const goalsText = selectedGoals.map(goal => goalIcons[goal] || goal).join('<br>');
        goalsInlineText.innerHTML = goalsText;
    }
}

// ========================================
// API FUNCTIONS
// ========================================

// Call Topiko API with JSON data (for original API)
async function callTopikoAPI(jsonString) {
    const apiUrl = 'https://topiko.com/demoapis/demo_insertDemoData.php';
    
    try {
        console.log(`🚀 Calling original API: ${apiUrl}`);
        const parsedData = JSON.parse(jsonString);
        console.log('📊 Full API payload:', parsedData);
        console.log('🎨 Theme being sent to API:', parsedData.selected_theme);
        
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: jsonString
        });
        
        // Try to get response text first to see what's returned
        const responseText = await response.text();
        
        // Extract JSON from response (API wraps JSON in script tags)
        let responseData;
        try {
            // Look for JSON object in the response - more comprehensive regex
            const jsonMatch = responseText.match(/\{"status":[^}]+\}/);
            if (jsonMatch) {
                responseData = JSON.parse(jsonMatch[0]);
                console.log('📡 Extracted JSON from response:', responseData);
            } else {
                // Try to find any JSON-like structure
                const altMatch = responseText.match(/\{.*?"status".*?\}/s);
                if (altMatch) {
                    responseData = JSON.parse(altMatch[0]);
                    console.log('📡 Extracted JSON (alt method):', responseData);
                } else {
                    // Last resort - try direct parse
                    responseData = JSON.parse(responseText);
                }
            }
        } catch (e) {
            // Check if response indicates success despite parse error
            if (responseText.includes('"status":"success"') && responseText.includes('"subdomain_created":true')) {
                console.log('✅ API returned success (detected in response despite parse error)');
                responseData = { status: 'success', subdomain_created: true };
            } else {
                console.error('Failed to parse response:', e);
                console.error('Response text:', responseText.substring(0, 500));
                throw new Error(`Invalid API response format`);
            }
        }
        
        if (response.ok) {
            window.TopikoUtils.showNotification('✅ Business data saved successfully!', 'success');
            console.log('✅ Original API call successful');
            return true;
        } else {
            throw new Error(responseData.message || `HTTP ${response.status}`);
        }
        
    } catch (error) {
        console.error(`❌ Original API error: ${error.message}`);
        window.TopikoUtils.showNotification(`⚠️ Data save failed: ${error.message}`, 'warning');
        return false;
    }
}

// ========================================
// DEBUGGING FUNCTIONS
// ========================================

// Debug theme images to see if they're all the same
function debugThemeImages() {
    console.log('🔍 DEBUGGING THEME IMAGES...');
    const themeImages = [
        'modern-preview', 'vibrant-preview', 'professional-preview', 
        'traditional-preview', 'creative-preview', 'luxury-preview'
    ];
    
    themeImages.forEach(imageId => {
        const img = document.getElementById(imageId);
        if (img) {
            console.log(`📸 ${imageId}: ${img.src}`);
            console.log(`📐 ${imageId} dimensions: ${img.naturalWidth}x${img.naturalHeight}`);
            console.log(`🎯 ${imageId} complete: ${img.complete}`);
        } else {
            console.error(`❌ Image not found: ${imageId}`);
        }
    });
}

// Comprehensive product price debugging
function debugProductPrices() {
    console.log('🔍 DEBUGGING PRODUCT PRICES...');
    
    if (!window.TopikoConfig || !window.TopikoConfig.INDIAN_PRODUCTS_DB) {
        console.error('❌ TopikoConfig.INDIAN_PRODUCTS_DB not found!');
        return;
    }
    
    const db = window.TopikoConfig.INDIAN_PRODUCTS_DB;
    let totalProducts = 0;
    let productsWithPrice = 0;
    let productsWithoutPrice = 0;
    let priceStats = { min: Infinity, max: 0, sum: 0 };
    
    Object.keys(db).forEach(businessCategory => {
        console.log(`📁 Business Category: ${businessCategory}`);
        
        Object.keys(db[businessCategory]).forEach(categoryKey => {
            const products = db[businessCategory][categoryKey];
            
            if (Array.isArray(products)) {
                console.log(`  📂 Category: ${categoryKey} (${products.length} products)`);
                
                products.forEach(product => {
                    totalProducts++;
                    
                    const hasPrice = product.suggestedPrice || product.price;
                    if (hasPrice) {
                        const price = product.suggestedPrice || product.price;
                        productsWithPrice++;
                        priceStats.sum += price;
                        priceStats.min = Math.min(priceStats.min, price);
                        priceStats.max = Math.max(priceStats.max, price);
                        console.log(`    ✅ ${product.name}: ₹${price} (${product.suggestedPrice ? 'suggestedPrice' : 'price'})`);
                    } else {
                        productsWithoutPrice++;
                        console.error(`    ❌ ${product.name}: NO PRICE!`, {
                            id: product.id,
                            keys: Object.keys(product),
                            product: product
                        });
                    }
                });
            }
        });
    });
    
    console.log('\n📊 PRICE ANALYSIS SUMMARY:');
    console.log(`Total products: ${totalProducts}`);
    console.log(`With prices: ${productsWithPrice} (${((productsWithPrice/totalProducts)*100).toFixed(1)}%)`);
    console.log(`Without prices: ${productsWithoutPrice} (${((productsWithoutPrice/totalProducts)*100).toFixed(1)}%)`);
    
    if (productsWithPrice > 0) {
        const avgPrice = priceStats.sum / productsWithPrice;
        console.log(`Price range: ₹${priceStats.min} - ₹${priceStats.max}`);
        console.log(`Average price: ₹${avgPrice.toFixed(2)}`);
    }
    
    return {
        total: totalProducts,
        withPrices: productsWithPrice,
        withoutPrices: productsWithoutPrice,
        priceStats: priceStats
    };
}

// Test current products on screen
function debugCurrentProducts() {
    console.log('🔍 DEBUGGING CURRENT PRODUCTS ON SCREEN...');
    
    const productCards = document.querySelectorAll('.product-card-selector');
    console.log(`Found ${productCards.length} product cards on screen`);
    
    if (productCards.length === 0) {
        console.warn('⚠️ No product cards found! Check if products are loaded.');
        return;
    }
    
    productCards.forEach((card, index) => {
        const priceTag = card.querySelector('.product-price-tag');
        const productId = card.getAttribute('data-product-id');
        const title = card.querySelector('.product-selector-title')?.textContent;
        const image = card.querySelector('.product-selector-image');
        
        console.log(`Product ${index + 1}:`, {
            id: productId,
            title: title,
            hasPriceTag: !!priceTag,
            priceText: priceTag ? priceTag.textContent : 'NOT FOUND',
            priceTagVisible: priceTag ? window.getComputedStyle(priceTag).display !== 'none' : false,
            priceTagOpacity: priceTag ? window.getComputedStyle(priceTag).opacity : 'N/A',
            priceTagPosition: priceTag ? window.getComputedStyle(priceTag).position : 'N/A',
            hasImage: !!image,
            imageStyle: image ? image.style.backgroundImage : 'N/A'
        });
        
        if (!priceTag) {
            console.error(`❌ No price tag found for: ${title} (ID: ${productId})`);
        } else {
            // Check if price tag is actually visible
            const styles = window.getComputedStyle(priceTag);
            if (styles.display === 'none' || styles.opacity === '0' || styles.visibility === 'hidden') {
                console.warn(`⚠️ Price tag hidden for: ${title}`, {
                    display: styles.display,
                    opacity: styles.opacity,
                    visibility: styles.visibility
                });
            }
        }
    });
    
    return productCards.length;
}

// Force refresh all prices
function forceRefreshPrices() {
    console.log('🔧 FORCE REFRESHING ALL PRICES...');
    
    const productCards = document.querySelectorAll('.product-card-selector');
    let refreshed = 0;
    
    productCards.forEach(card => {
        const productId = card.getAttribute('data-product-id');
        const priceTag = card.querySelector('.product-price-tag');
        
        if (priceTag && productId) {
            // Find product in database
            const dbProduct = findProductById(productId);
            if (dbProduct) {
                const price = dbProduct.suggestedPrice || dbProduct.price || 299;
                priceTag.textContent = `₹${Math.round(price).toLocaleString()}`;
                priceTag.style.display = 'block';
                priceTag.style.opacity = '1';
                refreshed++;
                console.log(`✅ Refreshed price for ${dbProduct.name}: ₹${price}`);
            }
        }
    });
    
    console.log(`🔧 Refreshed ${refreshed} price tags`);
    return refreshed;
}

// ========================================
// GLOBAL INITIALIZATION
// ========================================

// Auto-initialize product selector when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    // Set default mode to select only when on products page
    setTimeout(() => {
        if (document.getElementById('selectMode') && window.topikoApp && window.topikoApp.currentStep === 'products') {
            switchProductMode('select');
        }
    }, 1000);
});

// ========================================
// MAKE ALL FUNCTIONS GLOBALLY AVAILABLE
// ========================================

if (typeof window !== 'undefined') {
    // Enhanced Goal Functions - UPDATED
    window.updateGoalsTracking = updateGoalsTracking;
    window.updateGoalsUIState = updateGoalsUIState;
    
    // Coupon & Timer Functions - NEW
    window.generateRandomCoupon = generateRandomCoupon;
    window.startOfferTimer = startOfferTimer;
    window.startTimerCountdown = startTimerCountdown;
    window.initializeCompletionScreen = initializeCompletionScreen;
    
    // Dynamic Time Slot Functions - NEW
    window.generateDynamicTimeSlots = generateDynamicTimeSlots;
    window.getDateLabel = getDateLabel;
    window.openCallScheduler = openCallScheduler;
    
    // Modal Personalization Functions - UPDATED
    window.displaySetupIntroModal = displaySetupIntroModal;
    
    // Category Enhancement Functions - UPDATED
    window.loadCategoriesContent = loadCategoriesContent;
    
    // Preview Functions - Restored API calling functions from backup
    window.generatePreviewData = generatePreviewData;
    window.callPreviewTemplateAPI = callPreviewTemplateAPI;
    window.validatePreviewData = validatePreviewData;
    window.composePreviewJSON = composePreviewJSON;
    window.generateSubdomainUrl = generateSubdomainUrl;
    window.mapSubcategoriesToCategories = mapSubcategoriesToCategories;
    window.processSelectedProducts = processSelectedProducts;
    window.getFullThemeName = getFullThemeName;
    
    // Variant Processing Functions - NEW
    window.processProductVariants = processProductVariants;
    window.convertSimpleVariantsToObjects = convertSimpleVariantsToObjects;
    window.determineVariantType = determineVariantType;
    window.calculateVariantPrice = calculateVariantPrice;
    
    // Variant Display Functions - NEW
    window.createProductCardWithVariants = createProductCardWithVariants;
    window.selectProductVariant = selectProductVariant;
    
    // Enhanced Image Functions - NEW
    window.initializeReliableImageLoading = initializeReliableImageLoading;
    window.setupImageRetrySystem = setupImageRetrySystem;
    window.preloadProductImages = preloadProductImages;
    window.handleImageError = handleImageError;
    window.enhanceImageElement = enhanceImageElement;
    
    // Product Selection Functions - UPDATED
    window.switchProductMode = switchProductMode;
    window.loadProductSelector = loadProductSelector;
    window.loadFilteredProductsGrid = loadFilteredProductsGrid;
    window.getProductsForSelectedCategories = getProductsForSelectedCategories;
    window.setupProductControls = setupProductControls;
    window.setupQuickFilters = setupQuickFilters;
    window.updatePriceRangeDisplay = updatePriceRangeDisplay;
    window.updateQuickFiltersForSelection = updateQuickFiltersForSelection;
    window.applyQuickFilter = applyQuickFilter;
    window.filterAndDisplayProducts = filterAndDisplayProducts;
    window.displayProductsGridWithVariants = displayProductsGridWithVariants;
    window.toggleProductSelection = toggleProductSelection;
    window.updateProductCard = updateProductCard;
    window.findProductById = findProductById;
    window.selectPopularProducts = selectPopularProducts;
    window.clearAllSelections = clearAllSelections;
    window.updateSelectedProductsSection = updateSelectedProductsSection;
    
    // Lead Flow Functions
    window.startLeadFlow = startLeadFlow;
    window.selectLanguage = selectLanguage;
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
    window.loadCategories = loadCategories;
    window.updateSelectionSummary = updateSelectionSummary;
    window.updateNextButton = updateNextButton;
    window.updateProductCategoriesDropdown = updateProductCategoriesDropdown;
    window.updateUserCategories = updateUserCategories;
    window.proceedToProducts = proceedToProducts;
    window.addCustomProduct = addCustomProduct;
    window.editProduct = editProduct;
    window.updateProduct = updateProduct;
    window.requestFollowup = requestFollowup;
    window.proceedToThemes = proceedToThemes;
    window.selectTheme = selectTheme;
    window.completeSetup = completeSetup;
    window.debugThemeImages = debugThemeImages;
    
    // Completion Screen Functions
    window.openExploreForm = openExploreForm;
    window.selectOffer = selectOffer;
    window.displayRandomOffers = displayRandomOffers;
    window.getRandomOffers = getRandomOffers;
    window.selectTimeSlot = selectTimeSlot;
    window.openCustomTimeInput = openCustomTimeInput;
    window.handleCustomTimeInput = handleCustomTimeInput;
    window.formatSlotForSMS = formatSlotForSMS;
    window.confirmScheduleAndComplete = confirmScheduleAndComplete;
    window.sendCallScheduleSMS = sendCallScheduleSMS;
    window.selectReason = selectReason;
    window.submitReasonAndComplete = submitReasonAndComplete;
    window.showCompletionSuccess = showCompletionSuccess;
    
    // Modal Functions
    window.displayGoalsTransitionModal = displayGoalsTransitionModal;
    window.proceedFromGoalsModal = proceedFromGoalsModal;
    window.proceedFromSetupModal = proceedFromSetupModal;
    window.updateGoalsModal = updateGoalsModal;
    
    // API Functions
    window.callTopikoAPI = callTopikoAPI;
    
    // Debug Functions
    window.debugProductPrices = debugProductPrices;
    window.debugCurrentProducts = debugCurrentProducts;
    window.forceRefreshPrices = forceRefreshPrices;
    
    // Mobile Functions
    window.initializeMobileEnhancements = initializeMobileEnhancements;
    window.toggleMobileFilters = toggleMobileFilters;
    window.toggleProductCard = toggleProductCard;
    
    console.log('✅ ALL ENHANCED FUNCTIONS AVAILABLE GLOBALLY');
}

window.TopikoUtils.addDebugLog('📱 COMPLETE ENHANCED Topiko Lead Form loaded with ALL 8 ENHANCEMENTS', 'success');
console.log('📱 ENHANCED Topiko Lead Form Ready');
console.log('✅ ENHANCEMENT 1: Welcome Screen Message - UPDATED');
console.log('✅ ENHANCEMENT 2: Goals Page Overhaul (6 goals, 3-limit) - COMPLETE');
console.log('✅ ENHANCEMENT 3: Business Type Options - UPDATED');
console.log('✅ ENHANCEMENT 4: Modal Personalization - FIXED');
console.log('✅ ENHANCEMENT 5: Categories Checkbox Enhancement - COMPLETE');
console.log('✅ ENHANCEMENT 6: Themes CSS Fixes - READY FOR CSS UPDATE');
console.log('✅ ENHANCEMENT 7: Completion Coupon & Timer - COMPLETE');
console.log('✅ ENHANCEMENT 8: Call Scheduling Logic - COMPLETE');
console.log('✅ ALL FUNCTIONS UPDATED AND AVAILABLE GLOBALLY');
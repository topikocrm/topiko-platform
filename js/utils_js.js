/* ========================================
   TOPIKO UTILITIES - ENHANCED WITH NAVIGATION TRACKING
   ======================================== */

window.TopikoUtils = {
    
    // ========================================
    // APP INITIALIZATION WITH NAVIGATION TRACKING
    // ========================================
    
    initializeTopikoApp: function() {
        if (!window.topikoApp) {
            window.topikoApp = {
                // Core app state
                currentStep: 'welcome',
                currentUserId: null,
                sessionStartTime: Date.now(),
                leadScore: 0,
                pageViews: 1,
                formProgress: 0,
                
                // User data
                selectedLanguage: 'en',
                userName: '',
                businessName: '',
                selectedGoals: [],
                selectedCategories: [],
                selectedSubcategories: [],
                selectedProductIds: [],
                userProducts: [],
                selectedTheme: '',
                
                // Qualifying data
                qualifyingAnswers: {
                    online_presence: '',
                    budget: '',
                    decision_maker: '',
                    timeline: ''
                },
                
                // FOMO system
                fomoShown: false,
                helpClaimedCount: 47,
                
                // NEW: Navigation tracking properties
                sessionId: this.generateSessionId(),
                currentPage: 'welcome',
                previousPage: null,
                pageStartTime: Date.now(),
                pageSequenceNumber: 1,
                navigationHistory: [],
                currentPageInteractions: [],
                
                // Products state
                productsLoaded: false
            };
        }
        
        this.addDebugLog('✅ TopikoApp initialized with navigation tracking', 'success');
        return window.topikoApp;
    },
    
    // NEW: Generate unique session ID
    generateSessionId: function() {
        const stored = localStorage.getItem('topiko_session_id');
        if (stored) {
            return stored;
        }
        
        const sessionId = 'sess_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
        localStorage.setItem('topiko_session_id', sessionId);
        return sessionId;
    },
    
    // ========================================
    // NAVIGATION TRACKING CORE FUNCTIONS
    // ========================================
    
    // NEW: Enhanced showScreen with navigation tracking
    showScreen: async function(screenId, navigationType = 'forward') {
        // Get page-specific data before navigation
        const pageData = this.getPageSpecificData(window.topikoApp.currentPage);
        
        // Track the navigation BEFORE changing screens
        if (window.topikoApp.currentPage && window.topikoApp.currentPage !== screenId) {
            await this.trackPageNavigationSafe(screenId, navigationType, pageData);
        }
        
        // Existing screen switching logic
        document.querySelectorAll('.screen').forEach(screen => {
            screen.classList.remove('active');
        });
        
        const targetScreen = document.getElementById(screenId);
        if (targetScreen) {
            targetScreen.classList.add('active');
            
            // Update progress bar and UI
            this.updateProgressBar(screenId);
            this.updateBackButton();
            
            // Scroll to top
            window.scrollTo(0, 0);
            
            this.addDebugLog(`📱 Screen shown: ${screenId}`);
        }
        
        // If this is the initial page load, track it
        if (!window.topikoApp.currentPage || window.topikoApp.currentPage === screenId) {
            window.topikoApp.currentPage = screenId;
            window.topikoApp.pageStartTime = Date.now();
            if (navigationType !== 'initial_load') {
                await this.trackPageNavigationSafe(screenId, 'initial_load', {});
            }
        }
        
        // Clean up previous page data
        this.cleanupPageData();
    },
    
    // NEW: Safe navigation tracking with error handling
    trackPageNavigationSafe: async function(toPage, navigationType = 'forward', pageData = {}) {
        try {
            const config = window.TopikoConfig?.PAGE_NAVIGATION?.TRACKING_CONFIG || {};
            const timeSpent = Math.round((Date.now() - window.topikoApp.pageStartTime) / 1000);
            
            // Skip if time is too short (accidental clicks)
            const minThreshold = config.MIN_TIME_THRESHOLD || 1;
            if (timeSpent < minThreshold) {
                this.addNavigationDebugLog(`⏭️ Skipping navigation tracking: time too short (${timeSpent}s)`, 'debug');
                return;
            }
            
            // Validate and clean page data
            const validatedPageData = this.validatePageData(pageData);
            
            // Call the main tracking function
            await this.trackPageNavigation(toPage, navigationType, validatedPageData);
            
        } catch (error) {
            this.addNavigationDebugLog(`❌ Navigation tracking error: ${error.message}`, 'error');
            
            // Fallback: store minimal data locally
            this.storeNavigationLocally({
                session_id: window.topikoApp.sessionId,
                from_page: window.topikoApp.currentPage,
                to_page: toPage,
                navigation_type: navigationType,
                created_at: new Date().toISOString(),
                error: error.message
            });
        }
    },
    
    // NEW: Core navigation tracking function
    trackPageNavigation: async function(toPage, navigationType = 'forward', pageData = {}) {
        const fromPage = window.topikoApp.currentPage;
        const currentTime = Date.now();
        const timeSpentSeconds = Math.round((currentTime - window.topikoApp.pageStartTime) / 1000);
        
        // Prepare navigation data
        const navigationData = {
            user_id: window.topikoApp.currentUserId || null,
            session_id: window.topikoApp.sessionId,
            from_page: fromPage,
            to_page: toPage,
            navigation_type: navigationType,
            time_spent_seconds: timeSpentSeconds,
            page_sequence_number: window.topikoApp.pageSequenceNumber,
            user_agent: navigator.userAgent,
            referrer_url: document.referrer || null,
            utm_data: this.getUtmData(),
            page_data: pageData,
            created_at: new Date().toISOString()
        };
        
        // Add interaction summary to page data
        if (window.topikoApp.currentPageInteractions && window.topikoApp.currentPageInteractions.length > 0) {
            navigationData.page_data.interactions = this.getPageInteractionSummary();
        }
        
        // Save to database (with batching for performance)
        const result = await this.batchTrackNavigation(navigationData);
        
        if (result && result.success) {
            this.addNavigationDebugLog(`📊 Page navigation tracked: ${fromPage} → ${toPage} (${timeSpentSeconds}s)`, 'info');
        } else {
            this.addNavigationDebugLog(`❌ Failed to track navigation`, 'error');
            // Fallback: store locally for later sync
            this.storeNavigationLocally(navigationData);
        }
        
        // Update app state
        window.topikoApp.previousPage = fromPage;
        window.topikoApp.currentPage = toPage;
        window.topikoApp.pageStartTime = currentTime;
        window.topikoApp.pageSequenceNumber++;
        
        // Add to in-memory history
        window.topikoApp.navigationHistory.push({
            from: fromPage,
            to: toPage,
            type: navigationType,
            timeSpent: timeSpentSeconds,
            timestamp: currentTime
        });
        
        // Update page views counter
        window.topikoApp.pageViews++;
    },
    
    // NEW: Navigation queue for batching
    navigationQueue: [],
    
    // NEW: Batch navigation tracking for performance
    batchTrackNavigation: async function(navigationData) {
        const config = window.TopikoConfig?.PAGE_NAVIGATION?.TRACKING_CONFIG || {};
        const batchSize = config.BATCH_SIZE || 10;
        
        this.navigationQueue.push(navigationData);
        
        if (this.navigationQueue.length >= batchSize) {
            return await this.flushNavigationQueue();
        }
        
        // For immediate tracking of critical pages
        const criticalPages = window.TopikoConfig?.ANALYTICS?.CRITICAL_PAGES || ['registration', 'completion'];
        if (criticalPages.includes(navigationData.to_page)) {
            return await this.flushNavigationQueue();
        }
        
        return { success: true }; // Queued successfully
    },
    
    // NEW: Flush navigation queue
    flushNavigationQueue: async function() {
        if (this.navigationQueue.length === 0) return { success: true };
        
        const batch = [...this.navigationQueue];
        this.navigationQueue = [];
        
        try {
            const { data, error } = await supabase
                .from('page_navigation')
                .insert(batch);
                
            if (error) throw error;
            
            this.addNavigationDebugLog(`✅ Batch tracked ${batch.length} navigation events`, 'info');
            return { success: true, data };
            
        } catch (error) {
            this.addNavigationDebugLog(`❌ Batch tracking failed: ${error.message}`, 'error');
            
            // Re-add to queue for retry
            this.navigationQueue.unshift(...batch);
            
            // Store locally as fallback
            batch.forEach(nav => this.storeNavigationLocally(nav));
            return { success: false, error: error.message };
        }
    },
    
    // NEW: Get page-specific data for tracking
    getPageSpecificData: function(currentPage) {
        if (!currentPage) return {};
        
        const pageData = {};
        
        switch (currentPage) {
            case 'language':
                pageData.selectedLanguage = window.topikoApp.selectedLanguage;
                break;
                
            case 'goals':
                pageData.selectedGoals = window.topikoApp.selectedGoals || [];
                pageData.goalsCount = (window.topikoApp.selectedGoals || []).length;
                break;
                
            case 'registration':
                pageData.formProgress = window.topikoApp.formProgress || 0;
                pageData.userName = document.getElementById('fullName')?.value || '';
                pageData.businessName = document.getElementById('businessName')?.value || '';
                pageData.email = document.getElementById('email')?.value || '';
                pageData.phone = document.getElementById('phoneNumber')?.value || '';
                pageData.businessType = document.getElementById('businessType')?.value || '';
                pageData.category = document.getElementById('category')?.value || '';
                break;
                
            case 'qualifying-questions':
                pageData.qualifyingAnswers = window.topikoApp.qualifyingAnswers || {};
                pageData.answersComplete = Object.values(window.topikoApp.qualifyingAnswers || {}).filter(a => a !== '').length;
                break;
                
            case 'categories':
                pageData.selectedCategories = window.topikoApp.selectedCategories || [];
                pageData.selectedSubcategories = window.topikoApp.selectedSubcategories || [];
                pageData.categoriesCount = (window.topikoApp.selectedCategories || []).length;
                pageData.subcategoriesCount = (window.topikoApp.selectedSubcategories || []).length;
                break;
                
            case 'products':
                pageData.selectedProducts = window.topikoApp.selectedProductIds || [];
                pageData.customProducts = window.topikoApp.userProducts?.filter(p => p.isCustom) || [];
                pageData.productsCount = (window.topikoApp.userProducts || []).length;
                break;
                
            case 'themes':
                pageData.selectedTheme = window.topikoApp.selectedTheme;
                break;
                
            case 'completion':
                pageData.leadScore = window.topikoApp.leadScore;
                pageData.completionType = 'setup_complete';
                break;
        }
        
        // Add performance metrics
        pageData.performance = this.getPagePerformanceMetrics();
        
        return pageData;
    },
    
    // NEW: Get UTM parameters
    getUtmData: function() {
        const urlParams = new URLSearchParams(window.location.search);
        const utmData = {};
        
        ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'].forEach(param => {
            const value = urlParams.get(param);
            if (value) {
                utmData[param] = value;
            }
        });
        
        return Object.keys(utmData).length > 0 ? utmData : null;
    },
    
    // NEW: Store navigation locally as fallback
    storeNavigationLocally: function(navigationData) {
        const config = window.TopikoConfig?.PAGE_NAVIGATION?.TRACKING_CONFIG || {};
        const storageKey = config.OFFLINE_STORAGE_KEY || 'topiko_navigation_queue';
        
        const stored = JSON.parse(localStorage.getItem(storageKey) || '[]');
        stored.push(navigationData);
        
        // Limit local storage size
        if (stored.length > 100) {
            stored.splice(0, stored.length - 100);
        }
        
        localStorage.setItem(storageKey, JSON.stringify(stored));
        this.addNavigationDebugLog(`💾 Navigation stored locally: ${navigationData.from_page} → ${navigationData.to_page}`, 'info');
    },
    
    // NEW: Sync locally stored navigation data
    syncLocalNavigationData: async function() {
        const config = window.TopikoConfig?.PAGE_NAVIGATION?.TRACKING_CONFIG || {};
        const storageKey = config.OFFLINE_STORAGE_KEY || 'topiko_navigation_queue';
        
        const stored = JSON.parse(localStorage.getItem(storageKey) || '[]');
        if (stored.length === 0) return;
        
        this.addNavigationDebugLog(`🔄 Syncing ${stored.length} navigation events...`);
        
        let synced = 0;
        for (const navData of stored) {
            try {
                const { data, error } = await supabase
                    .from('page_navigation')
                    .insert([navData]);
                    
                if (error) throw error;
                synced++;
                
            } catch (error) {
                this.addNavigationDebugLog(`❌ Failed to sync navigation data: ${error.message}`, 'error');
                break;
            }
        }
        
        if (synced === stored.length) {
            // Clear synced data
            localStorage.removeItem(storageKey);
            this.addNavigationDebugLog(`✅ All ${synced} navigation events synced successfully`);
        } else if (synced > 0) {
            // Remove synced items
            const remaining = stored.slice(synced);
            localStorage.setItem(storageKey, JSON.stringify(remaining));
            this.addNavigationDebugLog(`✅ ${synced} of ${stored.length} navigation events synced`);
        }
    },
    
    // ========================================
    // PAGE INTERACTION TRACKING
    // ========================================
    
    // NEW: Track user interactions on current page
    trackPageInteraction: function(interactionType, elementInfo = {}) {
        if (!window.topikoApp.currentPageInteractions) {
            window.topikoApp.currentPageInteractions = [];
        }
        
        window.topikoApp.currentPageInteractions.push({
            type: interactionType,
            element: elementInfo,
            timestamp: Date.now(),
            pageTime: Date.now() - window.topikoApp.pageStartTime
        });
        
        this.addNavigationDebugLog(`👆 Interaction tracked: ${interactionType}`, 'debug');
    },
    
    // NEW: Get page interaction summary
    getPageInteractionSummary: function() {
        const interactions = window.topikoApp.currentPageInteractions || [];
        
        return {
            totalInteractions: interactions.length,
            interactionTypes: [...new Set(interactions.map(i => i.type))],
            firstInteractionTime: interactions.length > 0 ? interactions[0].pageTime : null,
            lastInteractionTime: interactions.length > 0 ? interactions[interactions.length - 1].pageTime : null,
            clickCount: interactions.filter(i => i.type === 'click').length,
            focusCount: interactions.filter(i => i.type === 'focus').length,
            inputCount: interactions.filter(i => i.type === 'input').length
        };
    },
    
    // NEW: Get page performance metrics
    getPagePerformanceMetrics: function() {
        if (!window.performance) return {};
        
        const navigation = performance.getEntriesByType('navigation')[0];
        const paint = performance.getEntriesByType('paint');
        
        return {
            loadTime: navigation ? Math.round(navigation.loadEventEnd - navigation.fetchStart) : 0,
            domContentLoaded: navigation ? Math.round(navigation.domContentLoadedEventEnd - navigation.fetchStart) : 0,
            firstPaint: paint.find(p => p.name === 'first-paint')?.startTime || 0,
            firstContentfulPaint: paint.find(p => p.name === 'first-contentful-paint')?.startTime || 0
        };
    },
    
    // NEW: Clean up page data on navigation
    cleanupPageData: function() {
        // Reset page-specific tracking data
        window.topikoApp.currentPageInteractions = [];
        
        // Clear any page-specific timers
        if (window.topikoApp.pageTimer) {
            clearInterval(window.topikoApp.pageTimer);
        }
        
        // Flush any pending navigation events for critical pages
        const criticalPages = window.TopikoConfig?.ANALYTICS?.CRITICAL_PAGES || [];
        if (criticalPages.includes(window.topikoApp.currentPage) && this.navigationQueue.length > 0) {
            this.flushNavigationQueue();
        }
    },
    
    // ========================================
    // NAVIGATION ANALYTICS HELPERS
    // ========================================
    
    // NEW: Get navigation summary for analytics
    getNavigationSummary: function() {
        const history = window.topikoApp.navigationHistory || [];
        const totalTime = history.reduce((sum, nav) => sum + nav.timeSpent, 0);
        const pagesVisited = new Set(history.map(nav => nav.to)).size;
        
        return {
            totalNavigations: history.length,
            totalTimeSpent: totalTime,
            uniquePagesVisited: pagesVisited,
            averageTimePerPage: pagesVisited > 0 ? Math.round(totalTime / pagesVisited) : 0,
            currentPage: window.topikoApp.currentPage,
            sessionDuration: Math.round((Date.now() - window.topikoApp.sessionStartTime) / 1000),
            navigationPath: history.map(nav => nav.to).join(' → ')
        };
    },
    
    // NEW: Validate page data before tracking
    validatePageData: function(pageData) {
        const config = window.TopikoConfig?.PAGE_NAVIGATION?.TRACKING_CONFIG || {};
        const maxSize = config.MAX_PAGE_DATA_SIZE || 5000;
        
        const dataString = JSON.stringify(pageData);
        
        if (dataString.length > maxSize) {
            this.addNavigationDebugLog(`⚠️ Page data too large: ${dataString.length} bytes`, 'warn');
            return this.truncatePageData(pageData);
        }
        
        return pageData;
    },
    
    // NEW: Truncate page data if too large
    truncatePageData: function(pageData) {
        const truncated = { ...pageData };
        
        // Remove large arrays/objects, keep essential data
        Object.keys(truncated).forEach(key => {
            const value = truncated[key];
            if (Array.isArray(value) && value.length > 50) {
                truncated[key] = value.slice(0, 50);
                truncated[`${key}_truncated`] = true;
            }
            if (typeof value === 'string' && value.length > 1000) {
                truncated[key] = value.substring(0, 1000);
                truncated[`${key}_truncated`] = true;
            }
        });
        
        return truncated;
    },
    
    // NEW: Enhanced debug logging for navigation
    addNavigationDebugLog: function(message, level = 'info', data = {}) {
        const config = window.TopikoConfig?.PAGE_NAVIGATION?.DEBUG || {};
        
        if (!config.ENABLED) return;
        
        const logLevels = ['error', 'warn', 'info', 'debug'];
        const currentLevelIndex = logLevels.indexOf(config.LOG_LEVEL || 'info');
        const messageLevelIndex = logLevels.indexOf(level);
        
        if (messageLevelIndex <= currentLevelIndex) {
            const timestamp = new Date().toISOString();
            const logEntry = {
                timestamp,
                level,
                message,
                page: window.topikoApp.currentPage,
                session: window.topikoApp.sessionId,
                ...data
            };
            
            console.log(`[NAVIGATION ${level.toUpperCase()}]`, logEntry);
            
            // Add to debug panel if exists
            this.addDebugLog(message, level);
        }
    },
    
    // ========================================
    // EXISTING UTILITY FUNCTIONS (UNCHANGED)
    // ========================================
    
    // Save to Supabase
    saveToSupabase: async function(data, tableName, operation = 'insert', id = null) {
        try {
            let result;
            
            if (operation === 'insert') {
                result = await supabase.from(tableName).insert([data]).select();
            } else if (operation === 'update' && id) {
                result = await supabase.from(tableName).update(data).eq('id', id).select();
            } else if (operation === 'upsert') {
                result = await supabase.from(tableName).upsert(data).select();
            }
            
            const { data: returnedData, error } = result;
            
            if (error) {
                this.addDebugLog(`❌ ${tableName} ${operation} failed: ${error.message}`, 'error');
                return { success: false, error: error.message };
            }
            
            this.addDebugLog(`✅ ${tableName} ${operation} successful`, 'success');
            return { success: true, data: returnedData };
            
        } catch (error) {
            this.addDebugLog(`❌ ${tableName} ${operation} error: ${error.message}`, 'error');
            return { success: false, error: error.message };
        }
    },
    
    // Debug system
    addDebugLog: function(message, type = 'info') {
        const timestamp = new Date().toLocaleTimeString();
        const debugLog = document.getElementById('debugLog');
        
        if (debugLog) {
            const logEntry = document.createElement('div');
            logEntry.className = `debug-entry debug-${type}`;
            logEntry.innerHTML = `
                <span class="debug-time">${timestamp}</span>
                <span class="debug-message">${message}</span>
            `;
            
            debugLog.appendChild(logEntry);
            debugLog.scrollTop = debugLog.scrollHeight;
            
            // Limit log entries
            while (debugLog.children.length > 100) {
                debugLog.removeChild(debugLog.firstChild);
            }
        }
        
        console.log(`[TOPIKO ${type.toUpperCase()}] ${message}`);
    },
    
    // Show notification
    showNotification: function(message, type = 'info') {
        const notification = document.getElementById('notification');
        const notificationContent = document.getElementById('notificationContent');
        
        if (notification && notificationContent) {
            notificationContent.textContent = message;
            notification.className = `notification ${type} show`;
            
            setTimeout(() => {
                notification.classList.remove('show');
            }, 3000);
        }
        
        this.addDebugLog(`📢 Notification: ${message}`, type);
    },
    
    // Lead score calculation
    calculateLeadScore: function() {
        let score = 0;
        
        // Language selection: +5
        if (window.topikoApp.selectedLanguage) score += 5;
        
        // Goals: +5 per goal
        score += (window.topikoApp.selectedGoals?.length || 0) * 5;
        
        // Form completion: up to +30
        score += Math.round((window.topikoApp.formProgress || 0) * 0.3);
        
        // Qualifying answers: +10 each
        const qualifyingCount = Object.values(window.topikoApp.qualifyingAnswers || {}).filter(a => a !== '').length;
        score += qualifyingCount * 10;
        
        // Categories: +5 per category
        score += (window.topikoApp.selectedCategories?.length || 0) * 5;
        
        // Products: +3 per product
        score += (window.topikoApp.userProducts?.length || 0) * 3;
        
        // Theme selection: +10
        if (window.topikoApp.selectedTheme) score += 10;
        
        // Navigation engagement bonus: +1 per minute spent
        const sessionMinutes = Math.round((Date.now() - window.topikoApp.sessionStartTime) / 60000);
        score += Math.min(sessionMinutes, 10);
        
        window.topikoApp.leadScore = Math.min(score, 100);
        this.updateLeadScoreWidget();
        
        return window.topikoApp.leadScore;
    },
    
    // Lead score widget
    updateLeadScoreWidget: function() {
        const scoreValue = document.getElementById('leadScoreValue');
        const scoreCircle = document.getElementById('leadScoreCircle');
        const scoreLabel = document.getElementById('scoreLabel');
        
        if (scoreValue && scoreCircle) {
            const score = window.topikoApp.leadScore || 0;
            scoreValue.textContent = score;
            
            // Update color based on score
            scoreCircle.className = 'score-circle';
            if (score >= 70) {
                scoreCircle.classList.add('hot');
                if (scoreLabel) scoreLabel.textContent = 'Hot Lead';
            } else if (score >= 40) {
                scoreCircle.classList.add('warm');
                if (scoreLabel) scoreLabel.textContent = 'Warm Lead';
            } else {
                scoreCircle.classList.add('cold');
                if (scoreLabel) scoreLabel.textContent = 'Cold Lead';
            }
        }
    },
    
    // Progress bar
    updateProgressBar: function(currentStep) {
        const steps = document.querySelectorAll('.progress-step');
        
        steps.forEach(step => {
            const stepName = step.getAttribute('data-step');
            
            if (stepName === currentStep) {
                step.classList.add('active');
            } else {
                step.classList.remove('active');
            }
        });
        
        window.topikoApp.currentStep = currentStep;
    },
    
    // Back button
    updateBackButton: function() {
        const backButton = document.getElementById('backButton');
        const currentStep = window.topikoApp.currentStep;
        
        if (backButton) {
            if (currentStep === 'welcome' || currentStep === 'language') {
                backButton.classList.add('hidden');
            } else {
                backButton.classList.remove('hidden');
            }
        }
    },
    
    // Session data
    saveSessionData: function() {
        const sessionData = {
            ...window.topikoApp,
            lastSaved: new Date().toISOString()
        };
        
        try {
            localStorage.setItem('topiko_session_data', JSON.stringify(sessionData));
            this.addDebugLog('💾 Session data saved', 'info');
        } catch (error) {
            this.addDebugLog(`❌ Failed to save session: ${error.message}`, 'error');
        }
    },
    
    loadSessionData: function() {
        try {
            const saved = localStorage.getItem('topiko_session_data');
            if (saved) {
                const sessionData = JSON.parse(saved);
                
                // Restore app state
                Object.assign(window.topikoApp, sessionData);
                
                this.addDebugLog('📂 Session data loaded', 'success');
                return true;
            }
        } catch (error) {
            this.addDebugLog(`❌ Failed to load session: ${error.message}`, 'error');
        }
        
        return false;
    },
    
    // FOMO system
    startFomoSystem: function() {
        this.showFomoNotification();
        this.updateFomoCounter();
        
        // Show FOMO notification every 30 seconds
        this.fomoInterval = setInterval(() => {
            this.showFomoNotification();
        }, 30000);
        
        // Update counter every 10 seconds
        this.counterInterval = setInterval(() => {
            this.updateFomoCounter();
        }, 10000);
    },
    
    showFomoNotification: function() {
        const fomoNotification = document.getElementById('fomoNotification');
        if (!fomoNotification || window.topikoApp.fomoShown) return;
        
        // Random business names and locations
        const businesses = [
            { name: 'TrendyWear Collection', location: 'Pune' },
            { name: 'Spice Garden Restaurant', location: 'Bangalore' },
            { name: 'Tech Solutions Hub', location: 'Mumbai' },
            { name: 'Fresh Fruits Market', location: 'Delhi' },
            { name: 'Fashion Forward Boutique', location: 'Chennai' }
        ];
        
        const randomBusiness = businesses[Math.floor(Math.random() * businesses.length)];
        const minutesAgo = Math.floor(Math.random() * 30) + 1;
        
        // Update notification content
        document.getElementById('fomoContent').innerHTML = `
            <span class="business-name">${randomBusiness.name}</span> from <span class="business-location">${randomBusiness.location}</span> joined our platform with help of Topiko
        `;
        document.getElementById('fomoTime').textContent = `${minutesAgo} minutes ago`;
        
        // Show notification
        fomoNotification.style.transform = 'translateX(0)';
        window.topikoApp.fomoShown = true;
        
        // Hide after 5 seconds
        setTimeout(() => {
            fomoNotification.style.transform = 'translateX(-400px)';
            window.topikoApp.fomoShown = false;
        }, 5000);
    },
    
    updateFomoCounter: function() {
        const counterNumber = document.getElementById('counterNumber');
        if (counterNumber) {
            // Simulate increasing counter
            const current = parseInt(counterNumber.textContent) || 247;
            const increase = Math.floor(Math.random() * 3) + 1;
            counterNumber.textContent = current + increase;
        }
    },
    
    stopMotivationalMessages: function() {
        if (this.fomoInterval) {
            clearInterval(this.fomoInterval);
        }
        if (this.counterInterval) {
            clearInterval(this.counterInterval);
        }
    },
    
    // Modal system
    showModal: function(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.classList.add('show');
            this.addDebugLog(`📱 Modal shown: ${modalId}`, 'info');
        }
    },
    
    closeModal: function(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.classList.remove('show');
            this.addDebugLog(`📱 Modal closed: ${modalId}`, 'info');
        }
    },
    
    // Products display
    displayProducts: function() {
        const productsList = document.getElementById('productsList');
        if (!productsList) return;
        
        const products = window.topikoApp.userProducts || [];
        
        if (products.length === 0) {
            productsList.innerHTML = `
                <div style="text-align: center; padding: 2rem; color: #64748b; background: rgba(255, 255, 255, 0.5); border-radius: 12px;">
                    <div style="font-size: 3rem; margin-bottom: 1rem;">📦</div>
                    <p>No products selected yet. Choose products above or add custom products!</p>
                </div>
            `;
            return;
        }
        
        productsList.innerHTML = products.map(product => `
            <div class="product-item">
                <img src="${product.imageUrl || this.getDefaultProductImage()}" 
                     alt="${product.name}" class="product-image">
                <div class="product-details">
                    <h4>${product.name}</h4>
                    <p class="product-price">₹${product.price?.toLocaleString() || 'N/A'}</p>
                    <p class="product-description">${product.description || ''}</p>
                    ${product.isCustom ? '<span class="custom-badge">Custom</span>' : ''}
                </div>
            </div>
        `).join('');
        
        // Update count
        const catalogTitle = document.querySelector('[data-translate="products.selectedProducts.catalogTitle"]');
        if (catalogTitle) {
            catalogTitle.setAttribute('data-translate-vars', JSON.stringify({ count: products.length }));
        }
    },
    
    getDefaultProductImage: function() {
        return 'https://via.placeholder.com/200x150?text=Product+Image';
    },
    
    // Theme previews
    populateThemePreviews: function() {
        const products = window.topikoApp.userProducts?.slice(0, 3) || [];
        
        if (products.length === 0) {
            this.addDebugLog('⚠️ No products available for theme preview', 'warn');
            return;
        }
        
        const themes = ['modern', 'vibrant', 'professional', 'traditional', 'creative', 'luxury'];
        
        themes.forEach(themeId => {
            const preview = document.getElementById(`${themeId}-preview`);
            if (preview) {
                preview.innerHTML = products.map(product => `
                    <div class="theme-product-preview">
                        <div class="theme-product-image" style="background-image: url('${product.imageUrl || this.getDefaultProductImage()}');"></div>
                        <div class="theme-product-name">${product.name}</div>
                        <div class="theme-product-price">₹${product.price?.toLocaleString() || 'N/A'}</div>
                    </div>
                `).join('');
            }
        });
        
        this.addDebugLog(`🎨 Theme previews populated with ${products.length} products`, 'success');
    },
    
    // Products help section
    updateProductsHelpSection: function() {
        const helpSection = document.getElementById('productsHelpSection');
        const helpText = document.getElementById('productsHelpText');
        const progressFill = document.getElementById('productsHelpProgressFill');
        
        if (helpText && progressFill) {
            const claimed = window.topikoApp.helpClaimedCount || 47;
            const total = 75;
            const remaining = total - claimed;
            const percentage = (claimed / total) * 100;
            
            helpText.innerHTML = `Topiko is helping with free setup for ${total} businesses every month. ${claimed} claimed for January. Click here for help!`;
            progressFill.style.width = `${percentage}%`;
            
            if (remaining <= 5) {
                helpSection.style.background = 'linear-gradient(135deg, #fef3c7 0%, #fed7aa 100%)';
                helpSection.style.borderColor = '#f59e0b';
            }
        }
    }
};

// Initialize utilities
window.TopikoUtils.addDebugLog('🛠️ TopikoUtils with Navigation Tracking loaded successfully', 'success');

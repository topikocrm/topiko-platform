/**
 * Topiko Lead Form - Utility Functions and Helpers
 * Contains all helper functions for form management, data processing, UI updates, and API integration
 */

const Utils = {
    
    // ============================================
    // FORM MANAGEMENT FUNCTIONS
    // ============================================
    
    /**
     * Validate form field based on configuration rules
     * @param {string} fieldName - Name of the field to validate
     * @param {string} value - Value to validate
     * @returns {Object} Validation result with isValid and message
     */
    validateField(fieldName, value) {
        const rules = Config.validation;
        let result = { isValid: true, message: '' };
        
        if (!value || value.trim() === '') {
            return { isValid: false, message: 'This field is required' };
        }
        
        switch (fieldName) {
            case 'email':
                if (!rules.email.pattern.test(value)) {
                    result = { isValid: false, message: rules.email.message };
                }
                break;
                
            case 'phoneNumber':
                const cleanPhone = value.replace(/\D/g, '');
                if (!rules.phone.pattern.test(cleanPhone)) {
                    result = { isValid: false, message: rules.phone.message };
                }
                break;
                
            case 'fullName':
            case 'businessName':
                const nameRules = fieldName === 'fullName' ? rules.name : rules.businessName;
                if (value.length < nameRules.minLength || value.length > nameRules.maxLength) {
                    result = { isValid: false, message: nameRules.message };
                }
                if (fieldName === 'fullName' && nameRules.pattern && !nameRules.pattern.test(value)) {
                    result = { isValid: false, message: nameRules.message };
                }
                break;
                
            case 'otp':
                if (!rules.otp.pattern.test(value)) {
                    result = { isValid: false, message: rules.otp.message };
                }
                break;
        }
        
        return result;
    },

    /**
     * Validate complete form data
     * @param {Object} formData - Form data to validate
     * @param {string} step - Current step name
     * @returns {Object} Validation result with errors object
     */
    validateForm(formData, step) {
        const errors = {};
        const requiredFields = Config.form.requiredFields[step] || [];
        
        requiredFields.forEach(field => {
            const value = formData[field];
            const validation = this.validateField(field, value);
            if (!validation.isValid) {
                errors[field] = validation.message;
            }
        });
        
        return {
            isValid: Object.keys(errors).length === 0,
            errors: errors
        };
    },

    /**
     * Collect form data from current step
     * @param {string} step - Current step name
     * @returns {Object} Form data object
     */
    collectFormData(step) {
        const data = {};
        
        switch (step) {
            case 'goals':
                const goalCheckboxes = document.querySelectorAll('.goal-checkbox:checked');
                data.goals = Array.from(goalCheckboxes).map(cb => cb.value);
                break;
                
            case 'registration':
                const fields = ['fullName', 'email', 'phoneNumber', 'businessName', 'address', 'businessType', 'category'];
                fields.forEach(field => {
                    const element = document.getElementById(field);
                    if (element) {
                        data[field] = element.value.trim();
                    }
                });
                break;
                
            case 'qualifying-questions':
                const questions = ['online_presence', 'budget', 'decision_maker', 'timeline'];
                questions.forEach(question => {
                    const selected = document.querySelector(`input[name="${question}"]:checked`);
                    if (selected) {
                        data[question] = selected.value;
                    }
                });
                break;
                
            case 'categories':
                data.categories = this.getSelectedCategories();
                break;
                
            case 'products':
                data.products = this.getSelectedProducts();
                break;
                
            case 'themes':
                data.theme = this.getSelectedTheme();
                break;
        }
        
        return data;
    },

    /**
     * Save form data to localStorage
     * @param {Object} data - Data to save
     * @param {string} step - Current step
     */
    saveFormData(data, step) {
        if (!Config.form.autoSave) return;
        
        try {
            const existingData = this.getStoredFormData();
            const updatedData = { ...existingData, ...data };
            updatedData.currentStep = step;
            updatedData.lastSaved = new Date().toISOString();
            
            localStorage.setItem('topiko-lead-data', JSON.stringify(updatedData));
            this.debugLog('Form data saved to localStorage', { step, data });
        } catch (error) {
            this.debugLog('Error saving form data', error, 'error');
        }
    },

    /**
     * Retrieve stored form data from localStorage
     * @returns {Object} Stored form data
     */
    getStoredFormData() {
        try {
            const stored = localStorage.getItem('topiko-lead-data');
            return stored ? JSON.parse(stored) : {};
        } catch (error) {
            this.debugLog('Error retrieving stored form data', error, 'error');
            return {};
        }
    },

    /**
     * Clear stored form data
     */
    clearStoredFormData() {
        try {
            localStorage.removeItem('topiko-lead-data');
            this.debugLog('Stored form data cleared');
        } catch (error) {
            this.debugLog('Error clearing stored form data', error, 'error');
        }
    },

    // ============================================
    // DATA PROCESSING FUNCTIONS
    // ============================================

    /**
     * Calculate lead score based on current form data
     * @param {Object} formData - Complete form data
     * @returns {number} Lead score (0-100)
     */
    calculateLeadScore(formData) {
        let score = 0;
        const weights = Config.leadScoring.weights;
        const goalPoints = Config.leadScoring.goalPoints;
        const qualifyingPoints = Config.leadScoring.qualifyingPoints;
        
        // Goals scoring (max 20 points)
        if (formData.goals && formData.goals.length > 0) {
            const goalsScore = formData.goals.reduce((sum, goal) => {
                return sum + (goalPoints[goal] || 0);
            }, 0);
            score += Math.min(goalsScore, weights.goals);
        }
        
        // Registration completion (25 points)
        const requiredRegistrationFields = Config.form.requiredFields.registration || [];
        const completedFields = requiredRegistrationFields.filter(field => 
            formData[field] && formData[field].trim() !== ''
        );
        if (completedFields.length === requiredRegistrationFields.length) {
            score += weights.registration;
        } else {
            score += (completedFields.length / requiredRegistrationFields.length) * weights.registration;
        }
        
        // Qualifying questions scoring (max 30 points)
        let qualifyingScore = 0;
        if (formData.online_presence) {
            qualifyingScore += qualifyingPoints.online_presence[formData.online_presence] || 0;
        }
        if (formData.budget) {
            qualifyingScore += qualifyingPoints.budget[formData.budget] || 0;
        }
        if (formData.decision_maker) {
            qualifyingScore += qualifyingPoints.decision_maker[formData.decision_maker] || 0;
        }
        if (formData.timeline) {
            qualifyingScore += qualifyingPoints.timeline[formData.timeline] || 0;
        }
        score += Math.min(qualifyingScore, weights.qualifying);
        
        // Categories selection (10 points)
        if (formData.categories && formData.categories.length > 0) {
            score += weights.categories;
        }
        
        // Products selection (10 points)
        if (formData.products && formData.products.length > 0) {
            score += weights.products;
        }
        
        // Theme selection (5 points)
        if (formData.theme) {
            score += weights.theme;
        }
        
        return Math.min(Math.round(score), 100);
    },

    /**
     * Get lead score category based on score
     * @param {number} score - Lead score
     * @returns {string} Score category: 'cold', 'warm', or 'hot'
     */
    getLeadScoreCategory(score) {
        const thresholds = Config.leadScoring.thresholds;
        if (score >= thresholds.hot) return 'hot';
        if (score >= thresholds.warm) return 'warm';
        return 'cold';
    },

    /**
     * Filter products based on search and filter criteria
     * @param {Array} products - Products array
     * @param {Object} filters - Filter criteria
     * @returns {Array} Filtered products
     */
    filterProducts(products, filters = {}) {
        let filtered = [...products];
        
        // Text search
        if (filters.search && filters.search.trim()) {
            const searchTerm = filters.search.toLowerCase().trim();
            filtered = filtered.filter(product => 
                product.name.toLowerCase().includes(searchTerm) ||
                product.category.toLowerCase().includes(searchTerm) ||
                (product.subcategory && product.subcategory.toLowerCase().includes(searchTerm))
            );
        }
        
        // Category filter
        if (filters.category && filters.category !== 'all') {
            filtered = filtered.filter(product => product.category === filters.category);
        }
        
        // Price range filter
        if (filters.minPrice !== undefined && filters.maxPrice !== undefined) {
            filtered = filtered.filter(product => 
                product.price >= filters.minPrice && product.price <= filters.maxPrice
            );
        }
        
        // Sort products
        if (filters.sortBy) {
            filtered = this.sortProducts(filtered, filters.sortBy);
        }
        
        return filtered;
    },

    /**
     * Sort products based on criteria
     * @param {Array} products - Products to sort
     * @param {string} sortBy - Sort criteria
     * @returns {Array} Sorted products
     */
    sortProducts(products, sortBy) {
        const sorted = [...products];
        
        switch (sortBy) {
            case 'name':
                return sorted.sort((a, b) => a.name.localeCompare(b.name));
            case 'price-low':
                return sorted.sort((a, b) => a.price - b.price);
            case 'price-high':
                return sorted.sort((a, b) => b.price - a.price);
            case 'category':
                return sorted.sort((a, b) => a.category.localeCompare(b.category));
            case 'popularity':
                return sorted.sort((a, b) => b.popularity - a.popularity);
            default:
                return sorted;
        }
    },

    /**
     * Get popular products across all categories
     * @param {number} limit - Number of products to return
     * @returns {Array} Popular products
     */
    getPopularProducts(limit = 20) {
        const allProducts = Config.getAllProducts();
        return allProducts
            .filter(product => product.popularity >= 85)
            .sort((a, b) => b.popularity - a.popularity)
            .slice(0, limit);
    },

    // ============================================
    // UI HELPER FUNCTIONS
    // ============================================

    /**
     * Show notification to user
     * @param {string} message - Notification message
     * @param {string} type - Notification type: 'success', 'error', 'info', 'warning'
     * @param {number} duration - Duration in milliseconds
     */
    showNotification(message, type = 'info', duration = 3000) {
        const notification = document.getElementById('notification');
        const content = document.getElementById('notificationContent');
        
        if (!notification || !content) return;
        
        // Set content and styling based on type
        content.textContent = message;
        notification.style.display = 'block';
        notification.className = `notification ${type}`;
        
        // Apply type-specific styling
        switch (type) {
            case 'success':
                notification.style.background = '#059669';
                notification.style.color = 'white';
                break;
            case 'error':
                notification.style.background = '#dc2626';
                notification.style.color = 'white';
                break;
            case 'warning':
                notification.style.background = '#f59e0b';
                notification.style.color = 'white';
                break;
            default:
                notification.style.background = '#0284c7';
                notification.style.color = 'white';
        }
        
        // Auto-hide notification
        setTimeout(() => {
            this.hideNotification();
        }, duration);
        
        this.debugLog(`Notification shown: ${message}`, { type, duration });
    },

    /**
     * Hide notification
     */
    hideNotification() {
        const notification = document.getElementById('notification');
        if (notification) {
            notification.style.display = 'none';
        }
    },

    /**
     * Show loading state for an element
     * @param {HTMLElement|string} element - Element or element ID
     * @param {string} message - Loading message
     */
    showLoading(element, message = 'Loading...') {
        const el = typeof element === 'string' ? document.getElementById(element) : element;
        if (!el) return;
        
        el.style.opacity = '0.6';
        el.style.pointerEvents = 'none';
        
        // Add loading class if it exists in CSS
        el.classList.add('loading');
        
        // Update text content for buttons
        if (el.tagName === 'BUTTON') {
            el.dataset.originalText = el.textContent;
            el.textContent = message;
        }
    },

    /**
     * Hide loading state for an element
     * @param {HTMLElement|string} element - Element or element ID
     */
    hideLoading(element) {
        const el = typeof element === 'string' ? document.getElementById(element) : element;
        if (!el) return;
        
        el.style.opacity = '1';
        el.style.pointerEvents = 'auto';
        el.classList.remove('loading');
        
        // Restore original text for buttons
        if (el.tagName === 'BUTTON' && el.dataset.originalText) {
            el.textContent = el.dataset.originalText;
            delete el.dataset.originalText;
        }
    },

    /**
     * Show modal
     * @param {string} modalId - Modal element ID
     */
    showModal(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.style.display = 'flex';
            document.body.style.overflow = 'hidden'; // Prevent background scrolling
            this.debugLog(`Modal shown: ${modalId}`);
        }
    },

    /**
     * Hide modal
     * @param {string} modalId - Modal element ID
     */
    hideModal(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto'; // Restore scrolling
            this.debugLog(`Modal hidden: ${modalId}`);
        }
    },

    /**
     * Update progress bar
     * @param {string} currentStep - Current step name
     */
    updateProgressBar(currentStep) {
        const steps = document.querySelectorAll('.progress-step');
        const stepNames = ['goals', 'registration', 'qualifying-questions', 'categories', 'products', 'themes'];
        const currentIndex = stepNames.indexOf(currentStep);
        
        steps.forEach((step, index) => {
            const circle = step.querySelector('.progress-circle');
            
            if (index < currentIndex) {
                step.classList.add('completed');
                step.classList.remove('active');
                circle.innerHTML = '✓';
            } else if (index === currentIndex) {
                step.classList.add('active');
                step.classList.remove('completed');
                circle.innerHTML = index + 1;
            } else {
                step.classList.remove('active', 'completed');
                circle.innerHTML = index + 1;
            }
        });
        
        this.debugLog(`Progress bar updated: ${currentStep}`);
    },

    /**
     * Update lead score widget
     * @param {number} score - Current lead score
     */
    updateLeadScoreWidget(score) {
        const scoreValue = document.getElementById('leadScoreValue');
        const scoreCircle = document.getElementById('leadScoreCircle');
        
        if (scoreValue && scoreCircle) {
            scoreValue.textContent = score;
            
            // Update styling based on score category
            const category = this.getLeadScoreCategory(score);
            scoreCircle.className = `score-circle ${category}`;
            
            this.debugLog(`Lead score updated: ${score} (${category})`);
        }
    },

    // ============================================
    // API INTEGRATION HELPERS
    // ============================================

    /**
     * Make HTTP request with retry logic
     * @param {string} url - Request URL
     * @param {Object} options - Request options
     * @returns {Promise} Response promise
     */
    async makeRequest(url, options = {}) {
        const config = Config.api;
        const fullUrl = url.startsWith('http') ? url : `${config.baseUrl}${url}`;
        
        const defaultOptions = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            timeout: config.timeout
        };
        
        const requestOptions = { ...defaultOptions, ...options };
        
        // Add request timeout
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), requestOptions.timeout);
        requestOptions.signal = controller.signal;
        
        let lastError;
        
        // Retry logic
        for (let attempt = 1; attempt <= config.retryAttempts; attempt++) {
            try {
                this.debugLog(`Making request (attempt ${attempt}): ${fullUrl}`, requestOptions);
                
                const response = await fetch(fullUrl, requestOptions);
                clearTimeout(timeoutId);
                
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                
                const data = await response.json();
                this.debugLog(`Request successful: ${fullUrl}`, data);
                return data;
                
            } catch (error) {
                lastError = error;
                this.debugLog(`Request failed (attempt ${attempt}): ${error.message}`, error, 'error');
                
                if (attempt === config.retryAttempts) {
                    break;
                }
                
                // Wait before retry (exponential backoff)
                await this.delay(Math.pow(2, attempt) * 1000);
            }
        }
        
        clearTimeout(timeoutId);
        throw lastError;
    },

    /**
     * Submit lead data to API
     * @param {Object} leadData - Complete lead data
     * @returns {Promise} Submission result
     */
    async submitLead(leadData) {
        try {
            const response = await this.makeRequest(Config.api.endpoints.leadSubmission, {
                method: 'POST',
                body: JSON.stringify({
                    ...leadData,
                    score: this.calculateLeadScore(leadData),
                    submittedAt: new Date().toISOString(),
                    language: i18n.getCurrentLanguage()
                })
            });
            
            this.debugLog('Lead submitted successfully', response);
            return response;
            
        } catch (error) {
            this.debugLog('Lead submission failed', error, 'error');
            throw error;
        }
    },

    /**
     * Verify OTP
     * @param {string} phone - Phone number
     * @param {string} otp - OTP code
     * @returns {Promise} Verification result
     */
    async verifyOTP(phone, otp) {
        try {
            const response = await this.makeRequest(Config.api.endpoints.otpVerification, {
                method: 'POST',
                body: JSON.stringify({ phone, otp })
            });
            
            this.debugLog('OTP verified successfully', response);
            return response;
            
        } catch (error) {
            this.debugLog('OTP verification failed', error, 'error');
            throw error;
        }
    },

    // ============================================
    // PERFORMANCE HELPERS
    // ============================================

    /**
     * Debounce function calls
     * @param {Function} func - Function to debounce
     * @param {number} delay - Delay in milliseconds
     * @returns {Function} Debounced function
     */
    debounce(func, delay = Config.performance.debounceDelay) {
        let timeoutId;
        return function (...args) {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => func.apply(this, args), delay);
        };
    },

    /**
     * Throttle function calls
     * @param {Function} func - Function to throttle
     * @param {number} delay - Delay in milliseconds
     * @returns {Function} Throttled function
     */
    throttle(func, delay = Config.performance.throttleDelay) {
        let lastCall = 0;
        return function (...args) {
            const now = Date.now();
            if (now - lastCall >= delay) {
                lastCall = now;
                return func.apply(this, args);
            }
        };
    },

    /**
     * Lazy load images
     * @param {HTMLElement} container - Container element
     */
    lazyLoadImages(container = document) {
        if (!Config.performance.lazyLoadImages) return;
        
        const images = container.querySelectorAll('img[data-src]');
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        images.forEach(img => imageObserver.observe(img));
    },

    /**
     * Delay execution
     * @param {number} ms - Delay in milliseconds
     * @returns {Promise} Promise that resolves after delay
     */
    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    },

    // ============================================
    // UTILITY FUNCTIONS
    // ============================================

    /**
     * Get selected categories
     * @returns {Array} Selected categories
     */
    getSelectedCategories() {
        // This will be implemented based on category selection UI
        const selected = [];
        const checkboxes = document.querySelectorAll('input[name="category"]:checked');
        checkboxes.forEach(cb => selected.push(cb.value));
        return selected;
    },

    /**
     * Get selected products
     * @returns {Array} Selected products
     */
    getSelectedProducts() {
        // This will return the selected products from the UI
        if (window.selectedProducts) {
            return Array.from(window.selectedProducts);
        }
        return [];
    },

    /**
     * Get selected theme
     * @returns {string} Selected theme
     */
    getSelectedTheme() {
        const selectedTheme = document.querySelector('.theme-option.selected');
        return selectedTheme ? selectedTheme.dataset.theme : null;
    },

    /**
     * Format currency amount
     * @param {number} amount - Amount to format
     * @returns {string} Formatted currency
     */
    formatCurrency(amount) {
        return Config.formatCurrency(amount);
    },

    /**
     * Format number
     * @param {number} number - Number to format
     * @returns {string} Formatted number
     */
    formatNumber(number) {
        return Config.formatNumber(number);
    },

    /**
     * Get current timestamp
     * @returns {string} ISO timestamp
     */
    getCurrentTimestamp() {
        return new Date().toISOString();
    },

    /**
     * Generate unique ID
     * @returns {string} Unique ID
     */
    generateId() {
        return Date.now().toString(36) + Math.random().toString(36).substr(2);
    },

    // ============================================
    // DEBUG AND LOGGING
    // ============================================

    /**
     * Debug logging
     * @param {string} message - Log message
     * @param {*} data - Additional data
     * @param {string} level - Log level
     */
    debugLog(message, data = null, level = 'info') {
        if (!Config.debug.enabled) return;
        
        const timestamp = new Date().toISOString();
        const logEntry = {
            timestamp,
            level,
            message,
            data
        };
        
        // Console logging
        const consoleMethod = level === 'error' ? 'error' : level === 'warn' ? 'warn' : 'log';
        console[consoleMethod](`[${timestamp}] ${message}`, data || '');
        
        // Debug panel logging
        this.addToDebugPanel(logEntry);
        
        // Store in debug history
        if (!window.debugHistory) window.debugHistory = [];
        window.debugHistory.push(logEntry);
        
        // Limit history size
        if (window.debugHistory.length > Config.debug.maxLogEntries) {
            window.debugHistory = window.debugHistory.slice(-Config.debug.maxLogEntries);
        }
    },

    /**
     * Add entry to debug panel
     * @param {Object} logEntry - Log entry object
     */
    addToDebugPanel(logEntry) {
        const debugLog = document.getElementById('debugLog');
        if (!debugLog) return;
        
        const logElement = document.createElement('div');
        logElement.style.marginBottom = '5px';
        logElement.style.fontSize = '11px';
        logElement.style.color = this.getLogColor(logEntry.level);
        logElement.innerHTML = `
            <strong>${logEntry.timestamp.split('T')[1].split('.')[0]}</strong>
            <span style="color: #999">[${logEntry.level.toUpperCase()}]</span>
            ${logEntry.message}
        `;
        
        if (logEntry.data) {
            const dataElement = document.createElement('pre');
            dataElement.style.fontSize = '10px';
            dataElement.style.color = '#888';
            dataElement.style.margin = '2px 0';
            dataElement.textContent = JSON.stringify(logEntry.data, null, 2);
            logElement.appendChild(dataElement);
        }
        
        debugLog.appendChild(logElement);
        debugLog.scrollTop = debugLog.scrollHeight;
    },

    /**
     * Get color for log level
     * @param {string} level - Log level
     * @returns {string} CSS color
     */
    getLogColor(level) {
        switch (level) {
            case 'error': return '#ff6b6b';
            case 'warn': return '#ffa726';
            case 'info': return '#42a5f5';
            case 'debug': return '#ab47bc';
            default: return '#ffffff';
        }
    },

    /**
     * Track analytics event
     * @param {string} event - Event name
     * @param {Object} data - Event data
     */
    trackEvent(event, data = {}) {
        if (!Config.analytics.enabled) return;
        
        const eventData = {
            event,
            timestamp: this.getCurrentTimestamp(),
            language: i18n.getCurrentLanguage(),
            ...data
        };
        
        this.debugLog(`Analytics event: ${event}`, eventData);
        
        // Store events for batch sending
        if (!window.analyticsQueue) window.analyticsQueue = [];
        window.analyticsQueue.push(eventData);
        
        // Send events in batches (implement based on analytics service)
        if (window.analyticsQueue.length >= 10) {
            this.flushAnalytics();
        }
    },

    /**
     * Flush analytics queue
     */
    async flushAnalytics() {
        if (!window.analyticsQueue || window.analyticsQueue.length === 0) return;
        
        try {
            const events = [...window.analyticsQueue];
            window.analyticsQueue = [];
            
            await this.makeRequest(Config.api.endpoints.analytics, {
                method: 'POST',
                body: JSON.stringify({ events })
            });
            
            this.debugLog('Analytics events sent', { count: events.length });
        } catch (error) {
            this.debugLog('Failed to send analytics events', error, 'error');
            // Re-add events to queue for retry
            window.analyticsQueue = [...(window.analyticsQueue || []), ...events];
        }
    }
};

// Initialize performance optimizations
document.addEventListener('DOMContentLoaded', () => {
    // Lazy load images
    Utils.lazyLoadImages();
    
    // Flush analytics periodically
    setInterval(() => {
        Utils.flushAnalytics();
    }, 30000); // Every 30 seconds
});

// Export utilities for global access
window.Utils = Utils;

// Debug initialization
if (Config.debug.enabled) {
    Utils.debugLog('🛠️ Topiko Lead Form Utilities Loaded');
}
/* ========================================
   TOPIKO LEAD FORM - MAIN APPLICATION LOGIC - COMPLETE UPDATED VERSION WITH FIXED PRICE DISPLAY
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
    //window.TopikoUtils.updateLeadScoreWidget();
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
// PREVIEW DATA FUNCTIONS - UPDATED WITH NEW JSON FORMAT
// ========================================

function generatePreviewData() {
    window.TopikoUtils.addDebugLog('🔍 Generating preview data...', 'info');
    
    try {
        // Validate required data
        if (!validatePreviewData()) {
            return;
        }
        
        // Collect all form data
        const previewData = composePreviewJSON();
        
        // Display options to user
        showPreviewModal(previewData);
        
        window.TopikoUtils.addDebugLog('✅ Preview data generated successfully', 'success');
        
    } catch (error) {
        window.TopikoUtils.addDebugLog(`❌ Preview generation failed: ${error.message}`, 'error');
        window.TopikoUtils.showNotification('Failed to generate preview data. Please try again.', 'error');
    }
}

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

// UPDATED: Remove .topiko.com from subdomain URL
function generateSubdomainUrl(businessName) {
    if (!businessName) return "";
    
    return businessName
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .replace(/^-|-$/g, '');
        // REMOVED: + '.topiko.com'
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

// UPDATED: Process selected products with new variant format
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

// NEW FUNCTION: Process product variants into new object format
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

// NEW FUNCTION: Convert simple variants like ["S", "M", "L"] to object format
function convertSimpleVariantsToObjects(variants, product) {
    // Determine variant type based on product category/content
    const variantType = determineVariantType(variants, product);
    
    return variants.map(variant => ({
        variant_name: variantType.name,
        variant_detail: variant,
        variant_price: calculateVariantPrice(product.suggestedPrice || product.price || 0, variant, variantType)
    }));
}

// NEW FUNCTION: Determine what type of variant this is (size, flavor, portion, etc.)
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
    
    // NEW: Pattern/Style variants detection
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

// NEW FUNCTION: Calculate variant price based on base price and variant type
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

function showPreviewModal(previewData) {
    const jsonString = JSON.stringify(previewData, null, 2);
    
    // Store JSON data globally to avoid onclick parameter issues
    window.currentPreviewData = jsonString;
    
    // Create modal HTML WITHOUT passing large strings in onclick
    const modalHTML = `
        <div class="modal-overlay show" id="previewModal">
            <div class="modal-content" style="max-width: 800px; max-height: 90vh;">
                <button class="modal-close" onclick="closePreviewModal()">×</button>
                <h3 style="color: #6b46c1; margin-bottom: 1rem;">🔍 Preview Data - JSON Format</h3>
                
                <div style="background: #f8fafc; border: 2px solid #e2e8f0; border-radius: 8px; padding: 1rem; margin-bottom: 1rem; max-height: 400px; overflow-y: auto;">
                    <pre style="margin: 0; font-size: 0.8rem; line-height: 1.4; white-space: pre-wrap;">${escapeHtml(jsonString)}</pre>
                </div>
                
                <!-- API Response Section (Initially Hidden) -->
                <div id="apiResponseSection" style="display: none; background: #f0f9ff; border: 2px solid #3b82f6; border-radius: 8px; padding: 1rem; margin-bottom: 1rem;">
                    <h4 style="color: #1e40af; margin-bottom: 0.5rem;">🔗 API Response:</h4>
                    <div id="apiResponseContent" style="background: white; border-radius: 6px; padding: 1rem; font-family: monospace; font-size: 0.8rem; max-height: 200px; overflow-y: auto;"></div>
                </div>
                
                <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
                    <button id="callApiBtn" onclick="callTopikoAPISafe()" style="background: #dc2626; color: white; padding: 0.75rem 1rem; border: none; border-radius: 8px; cursor: pointer; font-weight: 600;">
                        🚀 Call API
                    </button>
                    <button onclick="copyToClipboardSafe()" style="background: #10b981; color: white; padding: 0.75rem 1rem; border: none; border-radius: 8px; cursor: pointer;">
                        📋 Copy to Clipboard
                    </button>
                    <button onclick="downloadJSONSafe()" style="background: #6366f1; color: white; padding: 0.75rem 1rem; border: none; border-radius: 8px; cursor: pointer;">
                        💾 Download JSON
                    </button>
                    <button onclick="logToConsoleSafe()" style="background: #64748b; color: white; padding: 0.75rem 1rem; border: none; border-radius: 8px; cursor: pointer;">
                        🖥️ Log to Console
                    </button>
                </div>
            </div>
        </div>
    `;
    
    // Add to body
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
        window.TopikoUtils.showNotification('✅ JSON copied to clipboard!', 'success');
    }).catch(() => {
        window.TopikoUtils.showNotification('❌ Failed to copy to clipboard', 'error');
    });
}

function downloadJSON(jsonString) {
    const businessName = document.getElementById('businessName').value.trim() || 'business';
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
    
    window.TopikoUtils.showNotification(`💾 JSON downloaded as ${filename}`, 'success');
}

function logToConsole(jsonString) {
    console.log('🔍 TOPIKO PREVIEW DATA:');
    console.log(JSON.parse(jsonString));
    window.TopikoUtils.showNotification('🖥️ Data logged to browser console', 'info');
}

// NEW FUNCTION: Call Topiko API with JSON data
async function callTopikoAPI(jsonString) {
    const apiButton = document.getElementById('callApiBtn');
    const responseSection = document.getElementById('apiResponseSection');
    const responseContent = document.getElementById('apiResponseContent');
    
    // Show loading state
    apiButton.disabled = true;
    apiButton.innerHTML = '⏳ Calling API...';
    apiButton.style.opacity = '0.7';
    
    try {
        // Parse JSON data
        const jsonData = JSON.parse(jsonString);
        
        // API endpoint
      // API endpoint with CORS proxy
const apiUrl = 'https://cors-anywhere.herokuapp.com/https://topiko.com/demoapis/demo_insertDemoData.php';
        
        window.TopikoUtils.addDebugLog(`🚀 Calling API: ${apiUrl}`, 'info');
        
        // Make API call with timeout
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout
        
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: jsonString,
            signal: controller.signal
        });
        
        clearTimeout(timeoutId);
        
        // Get response text (might be JSON or plain text)
        const responseText = await response.text();
        
        // Try to parse as JSON, fallback to plain text
        let responseData;
        try {
            responseData = JSON.parse(responseText);
        } catch (e) {
            responseData = responseText;
        }
        
        // Show response section
        responseSection.style.display = 'block';
        
        if (response.ok) {
            // Success response
            responseContent.innerHTML = `
                <div style="color: #059669; font-weight: 600; margin-bottom: 0.5rem;">✅ API Call Successful (${response.status})</div>
                <div style="color: #374151;">
                    <strong>Response:</strong><br>
                    <pre style="margin: 0.5rem 0; white-space: pre-wrap;">${typeof responseData === 'object' ? JSON.stringify(responseData, null, 2) : responseData}</pre>
                </div>
            `;
            
            window.TopikoUtils.showNotification('✅ API call successful!', 'success');
            window.TopikoUtils.addDebugLog('✅ API call completed successfully', 'success');
            
        } else {
            // Error response
            responseContent.innerHTML = `
                <div style="color: #dc2626; font-weight: 600; margin-bottom: 0.5rem;">❌ API Call Failed (${response.status})</div>
                <div style="color: #374151;">
                    <strong>Error:</strong><br>
                    <pre style="margin: 0.5rem 0; white-space: pre-wrap;">${typeof responseData === 'object' ? JSON.stringify(responseData, null, 2) : responseData}</pre>
                </div>
            `;
            
            window.TopikoUtils.showNotification(`❌ API call failed: ${response.status}`, 'error');
            window.TopikoUtils.addDebugLog(`❌ API call failed: ${response.status}`, 'error');
        }
        
    } catch (error) {
        // Enhanced error handling for CORS
        responseSection.style.display = 'block';
        
        if (error.name === 'AbortError') {
            responseContent.innerHTML = `
                <div style="color: #dc2626; font-weight: 600; margin-bottom: 0.5rem;">⏰ API Call Timeout</div>
                <div style="color: #374151;">The API call took too long to respond.</div>
            `;
        } else if (error.message.includes('CORS') || error.message.includes('fetch')) {
            responseContent.innerHTML = `
                <div style="color: #f59e0b; font-weight: 600; margin-bottom: 0.5rem;">🚫 CORS Error Detected</div>
                <div style="color: #374151;">
                    <strong>Issue:</strong> Cross-Origin Resource Sharing (CORS) is blocking this request.<br><br>
                    <strong>Solutions:</strong><br>
                    • Configure the API server to allow CORS requests<br>
                    • Use a CORS proxy service<br>
                    • Test the API from the same domain<br><br>
                    <strong>Data Preview:</strong> Your JSON data is still valid and ready to use!
                </div>
            `;
        } else {
            responseContent.innerHTML = `
                <div style="color: #dc2626; font-weight: 600; margin-bottom: 0.5rem;">❌ API Call Error</div>
                <div style="color: #374151;">
                    <strong>Error Message:</strong><br>
                    <pre style="margin: 0.5rem 0; white-space: pre-wrap;">${error.message}</pre>
                </div>
            `;
        }
        
        window.TopikoUtils.showNotification(`⚠️ API call blocked by CORS. Data preview still works!`, 'warning');
        window.TopikoUtils.addDebugLog(`❌ API call error: ${error.message}`, 'error');
        
        console.error('API Call Error:', error);
    } finally {
        // Reset button state
        apiButton.disabled = false;
        apiButton.innerHTML = '🚀 Call API';
        apiButton.style.opacity = '1';
    }
}

function callTopikoAPISafe() {
    if (window.currentPreviewData) {
        callTopikoAPI(window.currentPreviewData);
    } else {
        window.TopikoUtils.showNotification('❌ No preview data available', 'error');
    }
}
// ========================================
// VARIANT DISPLAY FUNCTIONS - FIXED PRICE DISPLAY
// ========================================

// UPDATED FUNCTION: Create product card with enhanced price handling
function createProductCardWithVariants(product) {
    const isSelected = window.topikoApp.selectedProductIds?.includes(product.id) || false;
    const selectedClass = isSelected ? 'selected' : '';
    const checkmarkStyle = isSelected ? 'opacity: 1' : 'opacity: 0';
    
    // ENHANCED: More robust price extraction with comprehensive debugging
    let productPrice = 0;
    
    // Check all possible price fields in order of preference
    if (product.suggestedPrice && typeof product.suggestedPrice === 'number' && product.suggestedPrice > 0) {
        productPrice = product.suggestedPrice;
        console.log(`💰 Using suggestedPrice: ₹${productPrice} for ${product.name}`);
    } else if (product.price && typeof product.price === 'number' && product.price > 0) {
        productPrice = product.price;
        console.log(`💰 Using price: ₹${productPrice} for ${product.name}`);
    } else {
        // Comprehensive debugging for missing prices
        console.warn('⚠️ Price Debug for:', product.name, {
            suggestedPrice: product.suggestedPrice,
            price: product.price,
            suggestedPriceType: typeof product.suggestedPrice,
            priceType: typeof product.price,
            productKeys: Object.keys(product),
            fullProduct: product
        });
        
        // Use a category-appropriate fallback price
        const categoryKey = (product.categoryKey || product.category || '').toLowerCase();
        if (categoryKey.includes('beverage') || categoryKey.includes('tea') || categoryKey.includes('juice')) {
            productPrice = 45; // Beverage fallback
        } else if (categoryKey.includes('sweet') || categoryKey.includes('dessert')) {
            productPrice = 180; // Dessert fallback
        } else if (categoryKey.includes('north-indian') || categoryKey.includes('south-indian')) {
            productPrice = 250; // Food fallback
        } else {
            productPrice = 199; // General fallback
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
    
    // FIXED: Better price calculation with strict validation
    let basePrice = productPrice;
    if (processedVariants.length > 0 && processedVariants[0].variant_price && processedVariants[0].variant_price > 0) {
        basePrice = processedVariants[0].variant_price;
        console.log(`🎯 Using variant price: ₹${basePrice} for ${product.name}`);
    }
    
    // Final price validation
    if (!basePrice || basePrice <= 0 || isNaN(basePrice)) {
        console.error(`❌ Invalid basePrice (${basePrice}) for ${product.name}, using emergency fallback`);
        basePrice = 299; // Emergency fallback
    }
    
    console.log(`✅ Final display price: ₹${basePrice} for ${product.name} (ID: ${product.id})`);
    
    // Ensure the price is formatted properly
    const formattedPrice = Math.round(basePrice).toLocaleString();
    
   return `
    <div class="product-card-selector ${selectedClass}" data-product-id="${product.id}">
        <div class="product-selector-image" 
             style="background-image: url('${product.image}');"
             onerror="handleImageError(this, '${product.id}', '${product.category}', '${product.subcategory}')">
            <div class="product-price-tag" id="price-${product.id}">₹${formattedPrice}</div>             <div class="product-selection-overlay">
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

// ========================================
// CATEGORY-SPECIFIC IMAGE ERROR HANDLING
// ========================================

function handleImageError(imgElement, productId, category, subcategory) {
    console.warn(`⚠️ Image failed for product ${productId}, trying category fallback...`);
    
    // Get category-specific fallback image
    const fallbackUrl = window.TopikoConfig.getFallbackImage(category, subcategory);
    
    // Prevent infinite loop
    if (imgElement.style.backgroundImage.includes('unsplash')) {
        console.log(`📦 Using placeholder for ${productId}`);
        const placeholder = window.TopikoConfig.getPlaceholderImage();
        imgElement.style.backgroundImage = `url("${placeholder}")`;
        return;
    }
    
    // Try category-specific fallback
    imgElement.style.backgroundImage = `url('${fallbackUrl}')`;
    
    // Log successful fallback
    console.log(`✅ Category fallback loaded for ${productId} (${subcategory || category}): ${fallbackUrl}`);
}

// NEW FUNCTION: Handle variant selection
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

// ========================================
// DEBUG FUNCTIONS - NEW SECTION
// ========================================

// DEBUG FUNCTION: Comprehensive product price debugging
function debugProductPrices() {
    console.log('🔍 DEBUGGING PRODUCT PRICES...');
    
    // Check if config exists
    if (!window.TopikoConfig || !window.TopikoConfig.INDIAN_PRODUCTS_DB) {
        console.error('❌ TopikoConfig.INDIAN_PRODUCTS_DB not found!');
        return;
    }
    
    const db = window.TopikoConfig.INDIAN_PRODUCTS_DB;
    let totalProducts = 0;
    let productsWithPrice = 0;
    let productsWithoutPrice = 0;
    let priceStats = { min: Infinity, max: 0, sum: 0 };
    
    // Check each category
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
    
    // Test a specific product
    if (totalProducts > 0) {
        console.log('\n🧪 TESTING FIRST PRODUCT:');
        const firstCategory = Object.keys(db)[0];
        const firstSubCategory = Object.keys(db[firstCategory])[0];
        const firstProduct = db[firstCategory][firstSubCategory][0];
        
        console.log('First product:', firstProduct);
        console.log('Creating card for:', firstProduct.name);
        
        // Test card creation
        try {
            const cardHTML = createProductCardWithVariants(firstProduct);
            console.log('✅ Card created successfully');
            
            // Check if price tag exists in HTML
            if (cardHTML.includes('product-price-tag')) {
                console.log('✅ Price tag found in HTML');
                // Extract price from HTML
                const priceMatch = cardHTML.match(/₹([\d,]+)/);
                if (priceMatch) {
                    console.log(`✅ Extracted price from HTML: ${priceMatch[0]}`);
                }
            } else {
                console.error('❌ Price tag NOT found in HTML');
            }
        } catch (error) {
            console.error('❌ Error creating card:', error);
        }
    }
    
    return {
        total: totalProducts,
        withPrices: productsWithPrice,
        withoutPrices: productsWithoutPrice,
        priceStats: priceStats
    };
}

// DEBUG FUNCTION: Test current products on screen
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

// DEBUG FUNCTION: Force refresh all prices
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

function showGoalsTransitionModal() {
    if (window.topikoApp.selectedGoals.length === 0) {
        window.TopikoUtils.showNotification('Please select at least one goal', 'error');
        return;
    }
    
    // Update goals modal with selected goals
    updateGoalsModal(window.topikoApp.selectedGoals);
    
    window.TopikoUtils.showNotification(`Perfect! ${window.topikoApp.selectedGoals.length} goal${window.topikoApp.selectedGoals.length > 1 ? 's' : ''} selected!`, 'success');
    window.TopikoUtils.calculateLeadScore();
    
    // Show the goals transition modal
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
    
    // Complete user data with all new fields
const userData = {
    name, email, phone,
    business_name: business,
    business_type: type,
    business_category: category,
    address: address || null,
    selected_language: window.topikoApp.selectedLanguage,
    selected_goals: window.topikoApp.selectedGoals,
    created_at: new Date().toISOString()
    // ✅ No lead_status here - REMOVED
};

    const userResult = await window.TopikoUtils.saveToSupabase(userData, 'users');
    
    if (userResult.success && userResult.data && userResult.data.length > 0) {
        window.topikoApp.currentUserId = userResult.data[0].id;
        window.TopikoUtils.addDebugLog(`✅ User created: ${window.topikoApp.currentUserId}`, 'success');
        
        // Complete lead intelligence data with all new fields
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
    
    // 🔥 ADD THIS: Update user record with qualifying answers
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

// ========================================
// BACKGROUND IMAGE ERROR HANDLING - FIXED
// ========================================

function createImageWithFallback(originalUrl, productId, category, subcategory) {
    return new Promise((resolve) => {
        const testImg = new Image();
        
        testImg.onload = () => {
            console.log(`✅ Image loaded: ${productId}`);
            resolve(originalUrl);
        };
        
        testImg.onerror = () => {
            console.warn(`⚠️ Image failed for ${productId}, using fallback...`);
            
            // Get category-specific fallback
            const fallbackUrl = window.TopikoConfig.getFallbackImage(category, subcategory);
            
            // Test the fallback image too
            const fallbackImg = new Image();
            fallbackImg.onload = () => {
                console.log(`✅ Fallback loaded for ${productId}: ${fallbackUrl}`);
                resolve(fallbackUrl);
            };
            fallbackImg.onerror = () => {
                console.error(`❌ Fallback failed for ${productId}, using placeholder`);
                resolve(window.TopikoConfig.getPlaceholderImage());
            };
            fallbackImg.src = fallbackUrl;
        };
        
        testImg.src = originalUrl;
    });
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
// PRODUCT SELECTION SYSTEM - FUNCTIONS - UPDATED WITH VARIANTS
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
    
    // Update products count
    const productsCount = document.getElementById('productsCount');
    if (productsCount) {
        productsCount.textContent = filteredProducts.length;
    }
    
    // Display filtered products with variants
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

// UPDATED: Display products grid with variant functionality
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
    
    // Debug: Check if price tags are rendered
    setTimeout(() => {
        const priceTags = document.querySelectorAll('.product-price-tag');
        console.log(`✅ Rendered ${priceTags.length} price tags after grid update`);
        
        if (priceTags.length === 0) {
            console.error('❌ No price tags found after rendering!');
        }
    }, 100);
}

// Keep original function for backward compatibility
function displayProductsGrid(products) {
    displayProductsGridWithVariants(products);
}

function createProductCard(product) {
    return createProductCardWithVariants(product);
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
        selectedList.innerHTML = selectedProducts.map(product => {
            const variantText = product.selectedVariant ? ` (${product.selectedVariant})` : '';
            const displayPrice = product.selectedVariantPrice || product.price;
            
            return `
                <div class="selected-product-item">
                    <img src="${product.imageUrl}" alt="${product.name}" class="selected-product-image">
                    <div class="selected-product-info">
                        <h5>${product.name}${variantText}</h5>
                        <p class="selected-product-price">₹${displayPrice.toLocaleString()}</p>
                    </div>
                    <button class="remove-selected-btn" onclick="toggleProductSelection('${product.id}')">×</button>
                </div>
            `;
        }).join('');
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
                    <input type="number" id="editProductPrice" value="${product.selectedVariantPrice || product.price}">
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
    product.selectedVariantPrice = newPrice;
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
// COMPLETION SCREEN FUNCTIONS - COMPLETE SET
// ========================================

// Function to open call scheduler modal
function openCallScheduler() {
    if (!selectedOffer) {
        window.TopikoUtils.showNotification('Please select an offer first', 'warning');
        return;
    }
    
    // Update scheduler modal with selected offer
    const schedulerOfferName = document.getElementById('schedulerOfferName');
    if (schedulerOfferName && selectedOffer) {
        schedulerOfferName.textContent = selectedOffer.title;
    }
    
    window.TopikoUtils.showModal('dateTimeModal');
    window.TopikoUtils.addDebugLog('📅 Call scheduler opened', 'info');
}

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

// Function to start offer timer
function startOfferTimer() {
    const timerElement = document.getElementById('offerTimer');
    if (!timerElement) return;
    
    // Set initial time (23 hours, 45 minutes, random seconds)
    let totalSeconds = (23 * 3600) + (45 * 60) + Math.floor(Math.random() * 60);
    
    const timerInterval = setInterval(() => {
        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;
        
        timerElement.textContent = 
            `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        
        totalSeconds--;
        
        if (totalSeconds < 0) {
            clearInterval(timerInterval);
            timerElement.textContent = "00:00:00";
            timerElement.style.color = "#dc2626";
        }
    }, 1000);
}

// Enhanced initializeCompletionScreen function
function initializeCompletionScreen() {
    console.log('🎉 Initializing completion screen...');
    
    // Set business name
    const completionBusinessName = document.getElementById('completionBusinessName');
    if (completionBusinessName && window.topikoApp && window.topikoApp.businessName) {
        completionBusinessName.textContent = window.topikoApp.businessName;
    }
    
    // Display random selectable offers
    displayRandomOffers();
    
    // Reset selections
    selectedOffer = null;
    window.selectedTimeSlot = null;
    window.selectedReason = null;
    
    // Hide selected offer display initially
    const selectedDisplay = document.getElementById('selectedOfferDisplay');
    if (selectedDisplay) {
        selectedDisplay.style.display = 'none';
    }
    
    window.TopikoUtils.addDebugLog('✅ Interactive completion screen initialized');
}

// Enhanced Time Slot Selection
function selectTimeSlot(element, slotId) {
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
    
    // Store selected slot
    window.selectedTimeSlot = slotId;
    
    window.TopikoUtils.addDebugLog(`⏰ Time slot selected: ${slotId}`);
}

// Confirm Schedule and Complete
function confirmScheduleAndComplete() {
    const selectedSlot = window.selectedTimeSlot;
    const offer = selectedOffer;
    
    if (!selectedSlot) {
        window.TopikoUtils.showNotification('Please select a time slot', 'error');
        return;
    }
    
    if (!offer) {
        window.TopikoUtils.showNotification('Please select an offer first', 'error');
        return;
    }
    
    // Save scheduling data
    const schedulingData = {
        user_id: window.topikoApp?.currentUserId,
        business_name: window.topikoApp?.businessName,
        selected_offer: offer.title,
        offer_id: offer.id,
        scheduled_slot: selectedSlot,
        action_type: 'schedule_call',
        completion_choice: 'talk_team',
        scheduled_at: new Date().toISOString()
    };
    
    // Save to database
    if (window.topikoApp?.currentUserId) {
        window.TopikoUtils.saveToSupabase(schedulingData, 'completion_actions');
    }
    
    // Close modal and show success
    window.TopikoUtils.closeModal('dateTimeModal');
    
    // Show completion message
    window.TopikoUtils.showNotification(`🎉 Perfect! Call scheduled to claim "${offer.title}". Our team will contact you at the selected time.`, 'success');
    
    // Update completion screen to show success state
    showCompletionSuccess('call_scheduled', offer.title, selectedSlot);
    
    window.TopikoUtils.addDebugLog(`✅ Call scheduled successfully: ${offer.title} at ${selectedSlot}`);
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
                    <strong style="color: #374151;">support@topiko.com</strong> or call <strong style="color: #374151;">+91-XXX-XXX-XXXX</strong>
                </p>
            </div>
        </div>
    `;
}

// MAIN COMPLETION FUNCTION - ENHANCED
async function completeSetup() {
    const finalScore = window.TopikoUtils.calculateLeadScore() + 10;
    
    // Save completion data
    const leadData = {
        user_id: window.topikoApp.currentUserId,
        name: window.topikoApp.userName,
        email: document.getElementById('email')?.value,
        phone: document.getElementById('phoneNumber')?.value,
        business_name: window.topikoApp.businessName,
        selected_goals: window.topikoApp.selectedGoals,
        selected_categories: window.topikoApp.selectedCategories,
        selected_subcategories: window.topikoApp.selectedSubcategories || [],
        products_count: window.topikoApp.userProducts.length,
        selected_theme: window.topikoApp.selectedTheme,
        qualifying_answers: window.topikoApp.qualifyingAnswers,
        timeline: window.topikoApp.qualifyingAnswers.timeline,
        budget_range: window.topikoApp.qualifyingAnswers.budget,
        decision_maker: window.topikoApp.qualifyingAnswers.decision_maker === 'yes',
        online_presence: window.topikoApp.qualifyingAnswers.online_presence,
        lead_score: finalScore,
        lead_quality: finalScore >= 70 ? 'Hot' : finalScore >= 40 ? 'Warm' : 'Cold',
        setup_completed: true,
        completed_at: new Date().toISOString()
    };
    
    // Save to database
    if (window.topikoApp.currentUserId) {
        const finalUserData = {
            selected_categories: window.topikoApp.selectedCategories,
            selected_subcategories: window.topikoApp.selectedSubcategories,
            timeline: window.topikoApp.qualifyingAnswers.timeline,
            budget_range: window.topikoApp.qualifyingAnswers.budget,
            decision_maker: window.topikoApp.qualifyingAnswers.decision_maker === 'yes',
            online_presence: window.topikoApp.qualifyingAnswers.online_presence,
            updated_at: new Date().toISOString()
        };
        
        await window.TopikoUtils.saveToSupabase(finalUserData, 'users', 'update', window.topikoApp.currentUserId);
    }
    
    // Save locally as backup
    const existingLeads = JSON.parse(localStorage.getItem('topiko_local_leads') || '[]');
    existingLeads.push(leadData);
    localStorage.setItem('topiko_local_leads', JSON.stringify(existingLeads));
    
    window.TopikoUtils.showNotification(`🎉 Congratulations ${window.topikoApp.userName}! Your business is ready for final touches!`, 'success');
    
    setTimeout(() => {
        window.TopikoUtils.showScreen('completion');
        // Initialize completion screen with offers after a short delay
        setTimeout(() => {
            initializeCompletionScreen();
        }, 500);
    }, 2000);
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

// Setup intro modal
function displaySetupIntroModal() {
    const goalNames = window.TopikoConfig.GOAL_NAMES;

    // Populate the user name and business name
    const setupUserName = document.getElementById('setupUserName');
    const setupBusinessName = document.getElementById('setupBusinessName');
    
    if (setupUserName) {
        setupUserName.textContent = window.topikoApp.userName || 'there';
    }
    
    if (setupBusinessName) {
        setupBusinessName.textContent = window.topikoApp.businessName || 'business';
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

// Helper function for modal goals update
function updateGoalsModal(selectedGoals) {
    const goalsInlineText = document.getElementById('selectedGoalsInlineText');
    if (goalsInlineText && selectedGoals && selectedGoals.length > 0) {
        const goalIcons = {
            'ecommerce': '🛒 Sell Online',
            'customers': '📈 Reach More Customers', 
            'manage': '👥 Manage Customers',
            'search': '🔍 Appear in Search Results',
            'brand': '⭐ Establish Brand'
        };
        
        // Create goals with line breaks
        const goalsText = selectedGoals.map(goal => goalIcons[goal] || goal).join('<br>');
        goalsInlineText.innerHTML = goalsText;
    }
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

// ========================================
// MAKE ALL FUNCTIONS GLOBALLY AVAILABLE
// ========================================

if (typeof window !== 'undefined') {
    // Preview Functions - UPDATED
    window.generatePreviewData = generatePreviewData;
    window.validatePreviewData = validatePreviewData;
    window.composePreviewJSON = composePreviewJSON;
    window.generateSubdomainUrl = generateSubdomainUrl;
    window.mapSubcategoriesToCategories = mapSubcategoriesToCategories;
    window.processSelectedProducts = processSelectedProducts;
    window.showPreviewModal = showPreviewModal;
    window.closePreviewModal = closePreviewModal;
    window.escapeHtml = escapeHtml;
    window.escapeForAttribute = escapeForAttribute;
    window.copyToClipboard = copyToClipboard;
    window.downloadJSON = downloadJSON;
    window.logToConsole = logToConsole;
    
    // NEW API Function
    window.callTopikoAPI = callTopikoAPI;
    
    // NEW Variant Processing Functions
    window.processProductVariants = processProductVariants;
    window.convertSimpleVariantsToObjects = convertSimpleVariantsToObjects;
    window.determineVariantType = determineVariantType;
    window.calculateVariantPrice = calculateVariantPrice;
    
    // NEW Variant Display Functions
    window.createProductCardWithVariants = createProductCardWithVariants;
    window.selectProductVariant = selectProductVariant;
    
    // DEBUG Functions - NEW
    window.debugProductPrices = debugProductPrices;
    window.debugCurrentProducts = debugCurrentProducts;
    window.forceRefreshPrices = forceRefreshPrices;
    
    // Product Selection Functions - UPDATED
    window.switchProductMode = switchProductMode;
    window.selectPopularProducts = selectPopularProducts;
    window.clearAllSelections = clearAllSelections;
    window.toggleProductSelection = toggleProductSelection;
    window.editProduct = editProduct;
    window.saveProductEdit = saveProductEdit;
    window.cancelProductEdit = cancelProductEdit;
    window.addCustomProduct = addCustomProduct;
    window.updateQuickFiltersForSelection = updateQuickFiltersForSelection;
    window.applyQuickFilter = applyQuickFilter;
    
    // Lead Flow Functions
    window.startLeadFlow = startLeadFlow;
    window.selectLanguage = selectLanguage;
    window.updateGoalsTracking = updateGoalsTracking;
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
    window.proceedToProducts = proceedToProducts;
    window.requestFollowup = requestFollowup;
    window.proceedToThemes = proceedToThemes;
    window.selectTheme = selectTheme;
    window.completeSetup = completeSetup;
    
    // Modal Functions
    window.displayGoalsTransitionModal = displayGoalsTransitionModal;
    window.proceedFromGoalsModal = proceedFromGoalsModal;
    window.displaySetupIntroModal = displaySetupIntroModal;
    window.proceedFromSetupModal = proceedFromSetupModal;
    window.updateGoalsModal = updateGoalsModal;
    
    // Completion Screen Functions
    window.openCallScheduler = openCallScheduler;
    window.openExploreForm = openExploreForm;
    window.selectOffer = selectOffer;
    window.displayRandomOffers = displayRandomOffers;
    window.getRandomOffers = getRandomOffers;
    window.startOfferTimer = startOfferTimer;
    window.initializeCompletionScreen = initializeCompletionScreen;
    window.selectTimeSlot = selectTimeSlot;
    window.confirmScheduleAndComplete = confirmScheduleAndComplete;
    window.selectReason = selectReason;
    window.submitReasonAndComplete = submitReasonAndComplete;
    window.showCompletionSuccess = showCompletionSuccess;
    
    // Navigation Functions
    window.goBack = goBack;
    window.navigateToStep = navigateToStep;
    window.toggleScoreDetails = toggleScoreDetails;
    window.toggleDebugPanel = toggleDebugPanel;
}

window.TopikoUtils.addDebugLog('📱 COMPLETE UPDATED Topiko Lead Form loaded with FIXED PRICE DISPLAY', 'success');
console.log('📱 COMPLETE UPDATED Topiko Lead Form Ready');
console.log('✅ JSON FORMAT UPDATED - Subdomain and variants');
console.log('✅ VARIANT PRICING ADDED - Dynamic price updates');
console.log('✅ PRICE DISPLAY FIXED - Enhanced debugging');
console.log('✅ ALL FUNCTIONS UPDATED AND AVAILABLE');
console.log('✅ GLOBAL AVAILABILITY CONFIRMED');

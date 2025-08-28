# Partner Implementation Guide for TopikoPartner.com

This guide provides complete instructions for implementing partner registration and UTM tracking on TopikoPartner.com that integrates with the Topiko platform.

## Overview

The partner tracking system allows TopikoPartner.com to:
- Capture partner registrations with UTM tracking
- Send data to Topiko's central database
- Track partner-specific UTM parameters
- Monitor conversions and performance

## Architecture

```
TopikoPartner.com (Frontend) 
    ↓
POST to topiko.co/api/partner-lead
    ↓
Stored in Topiko's Supabase
    ↓
Analytics at topiko.co/partner-analytics.html
```

## Step 1: Database Setup (Already Complete in Topiko)

Run the following SQL in your Topiko Supabase SQL Editor:

```sql
-- This has already been created in add_partner_columns.sql
-- Just ensure it's been executed in your Supabase dashboard
```

## Step 2: Create Partner Registration Form on TopikoPartner.com

Create a registration form on your TopikoPartner.com website. Here's a complete example:

### HTML Form Structure

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Become a Topiko Partner</title>
    <style>
        /* Add your styling here */
        .form-container {
            max-width: 600px;
            margin: 0 auto;
            padding: 2rem;
        }
        .form-group {
            margin-bottom: 1.5rem;
        }
        .form-group label {
            display: block;
            margin-bottom: 0.5rem;
            font-weight: 600;
        }
        .form-group input,
        .form-group select,
        .form-group textarea {
            width: 100%;
            padding: 0.75rem;
            border: 1px solid #ddd;
            border-radius: 4px;
        }
        .btn-submit {
            background: #667eea;
            color: white;
            padding: 1rem 2rem;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-size: 1rem;
            font-weight: 600;
        }
        .btn-submit:hover {
            background: #764ba2;
        }
        .error-message {
            color: #ef4444;
            font-size: 0.875rem;
            margin-top: 0.25rem;
        }
        .success-message {
            background: #10b981;
            color: white;
            padding: 1rem;
            border-radius: 4px;
            margin-bottom: 1rem;
            display: none;
        }
    </style>
</head>
<body>
    <div class="form-container">
        <h1>Become a Topiko Partner</h1>
        <p>Join our partner program and grow your business with Topiko</p>

        <div id="successMessage" class="success-message">
            Thank you! Your application has been submitted successfully.
        </div>

        <form id="partnerRegistrationForm">
            <!-- Basic Information -->
            <div class="form-group">
                <label for="name">Your Name *</label>
                <input type="text" id="name" name="name" required>
                <span class="error-message" id="name-error"></span>
            </div>

            <div class="form-group">
                <label for="email">Email Address *</label>
                <input type="email" id="email" name="email" required>
                <span class="error-message" id="email-error"></span>
            </div>

            <div class="form-group">
                <label for="phone">Phone Number *</label>
                <input type="tel" id="phone" name="phone" required 
                       pattern="[6-9][0-9]{9}" 
                       placeholder="10-digit mobile number">
                <span class="error-message" id="phone-error"></span>
            </div>

            <div class="form-group">
                <label for="company_name">Company Name *</label>
                <input type="text" id="company_name" name="company_name" required>
                <span class="error-message" id="company_name-error"></span>
            </div>

            <div class="form-group">
                <label for="website">Company Website</label>
                <input type="url" id="website" name="website" placeholder="https://example.com">
            </div>

            <!-- Partner Details -->
            <div class="form-group">
                <label for="partner_type">Partnership Type *</label>
                <select id="partner_type" name="partner_type" required>
                    <option value="">Select Type</option>
                    <option value="reseller">Reseller</option>
                    <option value="affiliate">Affiliate</option>
                    <option value="referral">Referral Partner</option>
                    <option value="agency">Agency</option>
                    <option value="consultant">Consultant</option>
                    <option value="technology">Technology Partner</option>
                </select>
            </div>

            <div class="form-group">
                <label for="business_category">Business Category</label>
                <select id="business_category" name="business_category">
                    <option value="">Select Category</option>
                    <option value="retail">Retail</option>
                    <option value="ecommerce">E-commerce</option>
                    <option value="services">Services</option>
                    <option value="technology">Technology</option>
                    <option value="marketing">Marketing</option>
                    <option value="other">Other</option>
                </select>
            </div>

            <div class="form-group">
                <label for="employee_count">Number of Employees</label>
                <select id="employee_count" name="employee_count">
                    <option value="">Select Range</option>
                    <option value="1-10">1-10</option>
                    <option value="11-50">11-50</option>
                    <option value="51-200">51-200</option>
                    <option value="201-500">201-500</option>
                    <option value="500+">500+</option>
                </select>
            </div>

            <!-- Address Information -->
            <div class="form-group">
                <label for="city">City</label>
                <input type="text" id="city" name="city">
            </div>

            <div class="form-group">
                <label for="state">State</label>
                <select id="state" name="state">
                    <option value="">Select State</option>
                    <option value="Andhra Pradesh">Andhra Pradesh</option>
                    <option value="Karnataka">Karnataka</option>
                    <option value="Kerala">Kerala</option>
                    <option value="Tamil Nadu">Tamil Nadu</option>
                    <option value="Telangana">Telangana</option>
                    <option value="Maharashtra">Maharashtra</option>
                    <option value="Gujarat">Gujarat</option>
                    <option value="Delhi">Delhi</option>
                    <!-- Add more states -->
                </select>
            </div>

            <!-- Goals and Interests -->
            <div class="form-group">
                <label for="partnership_goals">What are your partnership goals?</label>
                <textarea id="partnership_goals" name="partnership_goals" rows="3"></textarea>
            </div>

            <div class="form-group">
                <label for="target_market">Your Target Market</label>
                <input type="text" id="target_market" name="target_market">
            </div>

            <button type="submit" class="btn-submit">Submit Application</button>
        </form>
    </div>

    <script>
        // UTM Parameter Capture and Form Submission Script
        (function() {
            // Capture UTM parameters from URL
            function captureUTMParameters() {
                const urlParams = new URLSearchParams(window.location.search);
                const utmData = {
                    // Standard UTM parameters
                    utm_source: urlParams.get('utm_source'),
                    utm_medium: urlParams.get('utm_medium'),
                    utm_campaign: urlParams.get('utm_campaign'),
                    utm_term: urlParams.get('utm_term'),
                    utm_content: urlParams.get('utm_content'),
                    
                    // Partner-specific UTM parameters
                    utm_partner_type: urlParams.get('utm_partner_type'),
                    utm_partner_tier: urlParams.get('utm_partner_tier'),
                    utm_partner_region: urlParams.get('utm_partner_region'),
                    utm_commission_model: urlParams.get('utm_commission_model'),
                    utm_partner_campaign: urlParams.get('utm_partner_campaign'),
                    utm_target_market: urlParams.get('utm_target_market'),
                    utm_tracking_code: urlParams.get('utm_tracking_code'),
                    
                    // Additional tracking
                    partner_id: urlParams.get('partner_id'),
                    referrer_url: document.referrer,
                    landing_page: window.location.href
                };
                
                // Store in sessionStorage for persistence
                sessionStorage.setItem('partner_utm_data', JSON.stringify(utmData));
                
                return utmData;
            }

            // Get stored UTM data
            function getStoredUTMData() {
                const stored = sessionStorage.getItem('partner_utm_data');
                if (stored) {
                    try {
                        return JSON.parse(stored);
                    } catch (e) {
                        console.error('Error parsing UTM data:', e);
                    }
                }
                return captureUTMParameters();
            }

            // Validate form fields
            function validateForm(formData) {
                let isValid = true;
                
                // Clear previous errors
                document.querySelectorAll('.error-message').forEach(el => {
                    el.textContent = '';
                });
                
                // Validate name
                if (!formData.name || formData.name.trim().length < 2) {
                    document.getElementById('name-error').textContent = 'Please enter your full name';
                    isValid = false;
                }
                
                // Validate email
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!formData.email || !emailRegex.test(formData.email)) {
                    document.getElementById('email-error').textContent = 'Please enter a valid email';
                    isValid = false;
                }
                
                // Validate phone (Indian format)
                const phoneRegex = /^[6-9]\d{9}$/;
                const cleanPhone = formData.phone.replace(/[\s\-\+\(\)]/g, '').replace(/^91/, '');
                if (!phoneRegex.test(cleanPhone)) {
                    document.getElementById('phone-error').textContent = 'Please enter a valid 10-digit mobile number';
                    isValid = false;
                }
                
                // Validate company name
                if (!formData.company_name || formData.company_name.trim().length < 2) {
                    document.getElementById('company_name-error').textContent = 'Please enter your company name';
                    isValid = false;
                }
                
                return isValid;
            }

            // Handle form submission
            document.getElementById('partnerRegistrationForm').addEventListener('submit', async function(e) {
                e.preventDefault();
                
                // Get form data
                const formData = new FormData(e.target);
                const data = Object.fromEntries(formData);
                
                // Validate form
                if (!validateForm(data)) {
                    return;
                }
                
                // Add UTM parameters
                const utmData = getStoredUTMData();
                const payload = {
                    ...data,
                    ...utmData,
                    // Add any custom parameters
                    custom_params: {
                        form_version: '1.0',
                        submission_time: new Date().toISOString()
                    }
                };
                
                // Disable submit button
                const submitBtn = e.target.querySelector('button[type="submit"]');
                submitBtn.disabled = true;
                submitBtn.textContent = 'Submitting...';
                
                try {
                    // Send to Topiko API
                    const response = await fetch('https://topiko.co/api/partner-lead', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(payload)
                    });
                    
                    const result = await response.json();
                    
                    if (response.ok && result.success) {
                        // Show success message
                        document.getElementById('successMessage').style.display = 'block';
                        
                        // Reset form
                        e.target.reset();
                        
                        // Scroll to top
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                        
                        // Track conversion (optional - if using analytics)
                        if (typeof gtag !== 'undefined') {
                            gtag('event', 'conversion', {
                                'send_to': 'YOUR_CONVERSION_ID',
                                'value': 1.0,
                                'currency': 'INR'
                            });
                        }
                        
                        // Redirect after 3 seconds (optional)
                        setTimeout(() => {
                            window.location.href = '/thank-you';
                        }, 3000);
                        
                    } else {
                        // Show error message
                        alert(result.message || 'Failed to submit application. Please try again.');
                    }
                    
                } catch (error) {
                    console.error('Submission error:', error);
                    alert('Network error. Please check your connection and try again.');
                    
                } finally {
                    // Re-enable submit button
                    submitBtn.disabled = false;
                    submitBtn.textContent = 'Submit Application';
                }
            });
            
            // Capture UTM parameters on page load
            captureUTMParameters();
        })();
    </script>
</body>
</html>
```

## Step 3: Alternative Implementation (Simpler Version)

If you prefer a simpler implementation, here's a minimal version:

```html
<!-- Minimal Partner Registration Form -->
<form id="partnerForm">
    <input type="text" name="name" placeholder="Your Name" required>
    <input type="email" name="email" placeholder="Email" required>
    <input type="tel" name="phone" placeholder="Phone" required>
    <input type="text" name="company_name" placeholder="Company Name" required>
    <select name="partner_type" required>
        <option value="">Select Type</option>
        <option value="reseller">Reseller</option>
        <option value="affiliate">Affiliate</option>
        <option value="agency">Agency</option>
    </select>
    <button type="submit">Join as Partner</button>
</form>

<script>
document.getElementById('partnerForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    
    // Add UTM parameters from URL
    const urlParams = new URLSearchParams(window.location.search);
    for (const [key, value] of urlParams) {
        if (key.startsWith('utm_')) {
            data[key] = value;
        }
    }
    
    // Send to Topiko
    const response = await fetch('https://topiko.co/api/partner-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    });
    
    if (response.ok) {
        alert('Thank you for joining!');
        e.target.reset();
    } else {
        alert('Error submitting form');
    }
});
</script>
```

## Step 4: Testing Your Implementation

### Test locally first:

1. **Update API endpoint for local testing:**
```javascript
// For local testing, use:
const API_URL = 'http://localhost:3000/api/partner-lead';

// For production, use:
const API_URL = 'https://topiko.co/api/partner-lead';
```

2. **Test with sample UTM parameters:**
```
http://localhost:3000/register?utm_source=partner_website&utm_medium=partner&utm_partner_type=reseller&utm_partner_tier=gold
```

3. **Verify data in Topiko's Supabase:**
- Go to your Supabase dashboard
- Check the `users` table
- Filter by `source = 'partner'`

## Step 5: API Response Handling

The API will return different responses based on the submission:

### Success Response (201/200):
```json
{
    "success": true,
    "message": "Partner registration successful",
    "partner_id": "uuid-here",
    "status": "created",
    "partner_status": "Pending Review",
    "next_steps": [
        "Our partnership team will review your application",
        "You will receive an email within 24-48 hours",
        "Once approved, you will get access to partner portal"
    ]
}
```

### Error Responses:

**400 - Validation Error:**
```json
{
    "error": "Missing required fields",
    "message": "Name, email, phone, and company name are required",
    "required_fields": ["name", "email", "phone", "company_name"]
}
```

**409 - Duplicate Entry:**
```json
{
    "error": "Duplicate entry",
    "message": "A partner with this email already exists"
}
```

**500 - Server Error:**
```json
{
    "error": "Server error",
    "message": "An unexpected error occurred"
}
```

## Step 6: Tracking and Analytics

### Generate Partner URLs at Topiko:
1. Go to `https://topiko.co/partner-url-builder.html`
2. Create campaign URLs for partners
3. Share URLs with partners

### View Analytics:
1. Go to `https://topiko.co/partner-analytics.html`
2. Track partner registrations
3. Monitor conversion rates
4. Export data as needed

## Step 7: Security Considerations

1. **CORS Configuration:**
   - The API already allows topikopartner.com
   - For additional domains, update the API's `allowedOrigins`

2. **Rate Limiting (Recommended):**
   - Implement rate limiting on your form
   - Prevent spam submissions

3. **Validation:**
   - Always validate on both client and server
   - Sanitize inputs to prevent XSS

4. **HTTPS:**
   - Always use HTTPS in production
   - Never send data over HTTP

## Step 8: Optional Enhancements

### Add Google reCAPTCHA:
```html
<!-- Add to your form -->
<div class="g-recaptcha" data-sitekey="YOUR_SITE_KEY"></div>

<script src="https://www.google.com/recaptcha/api.js"></script>
```

### Add Progress Indicator:
```javascript
// Show loading state
function showLoading() {
    document.getElementById('loadingSpinner').style.display = 'block';
}

function hideLoading() {
    document.getElementById('loadingSpinner').style.display = 'none';
}
```

### Add Field Validation Feedback:
```javascript
// Real-time validation
document.getElementById('email').addEventListener('blur', function() {
    const email = this.value;
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    
    if (!isValid && email) {
        this.classList.add('error');
        document.getElementById('email-error').textContent = 'Invalid email format';
    } else {
        this.classList.remove('error');
        document.getElementById('email-error').textContent = '';
    }
});
```

## Step 9: Monitoring and Maintenance

### Monitor Submissions:
1. Check Supabase dashboard regularly
2. Set up email alerts for new partners
3. Monitor error logs in Vercel/hosting dashboard

### Update Partner Status:
```sql
-- Approve a partner
UPDATE users 
SET partner_status = 'Active',
    partner_approved_date = NOW(),
    partner_approved_by = 'admin@topiko.co'
WHERE id = 'partner-uuid-here';
```

## Troubleshooting

### Common Issues:

1. **CORS Error:**
   - Ensure topikopartner.com is in allowed origins
   - Check if using correct protocol (https vs http)

2. **400 Bad Request:**
   - Check all required fields are sent
   - Verify phone number format (10 digits)
   - Ensure email is valid format

3. **Network Error:**
   - Verify API endpoint URL is correct
   - Check if Topiko API is deployed and running
   - Test with Postman/curl first

4. **No UTM Parameters Captured:**
   - Check if URL has UTM parameters
   - Verify JavaScript is capturing from URL
   - Check sessionStorage for stored values

## Support

For technical support or questions:
- Email: support@topiko.co
- Documentation: This guide
- API Status: Check https://topiko.co/api/partner-lead (should return 405 for GET)

## Summary

You now have everything needed to implement partner tracking on TopikoPartner.com:

1. ✅ Partner URL Builder: `topiko.co/partner-url-builder.html`
2. ✅ API Endpoint: `topiko.co/api/partner-lead`
3. ✅ Database Schema: Updated with partner fields
4. ✅ Analytics Dashboard: `topiko.co/partner-analytics.html`
5. ✅ Implementation Code: Complete form and JavaScript

Simply copy the HTML/JavaScript code to your TopikoPartner.com project, update the styling to match your brand, and start collecting partner registrations!
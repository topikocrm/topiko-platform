# Partner UTM Tracking System - Complete Implementation Guide

## Overview
This document provides complete documentation for implementing a Partner UTM tracking system across two projects:
1. **Topiko Platform** (this project) - Campaign creation and analytics
2. **TopikoPartner.com** (external project) - Partner registration with UTM tracking

---

## 📋 Table of Contents
- [System Architecture](#system-architecture)
- [Database Schema](#database-schema)
- [Files in This Project](#files-in-this-project)
- [Implementation for TopikoPartner.com](#implementation-for-topikopartnercom)
- [UTM Parameters Reference](#utm-parameters-reference)
- [Testing Guide](#testing-guide)
- [Troubleshooting](#troubleshooting)

---

## System Architecture

### Flow Diagram
```
1. Marketing Team → Creates Partner Campaign (partner-url-builder.html)
   ↓
2. Generates Short URL → /p/PXYZ123 with UTM parameters
   ↓
3. Partner Clicks Link → Redirects to TopikoPartner.com with UTMs
   ↓
4. Partner Fills Form → UTMs captured automatically
   ↓
5. Data Saved to Supabase → 'users' table with source='partner'
   ↓
6. Analytics Dashboard → partner-analytics.html shows performance
```

### Key Components
- **Partner URL Builder**: Create trackable partner campaign URLs
- **Partner Analytics**: View partner campaign performance
- **Customer Analytics**: Separate dashboard for customer campaigns
- **Supabase Database**: Stores campaigns and partner data

---

## Database Schema

### Tables Used

#### 1. `short_urls` Table
Stores all campaign URLs (both customer and partner)

```sql
-- Key columns for partner campaigns:
short_code VARCHAR(50) UNIQUE -- e.g., PXYZ123
long_url TEXT -- Full URL with UTMs
campaign_name VARCHAR(255) -- Prefixed with [PARTNER] for partner campaigns
created_by VARCHAR(255) -- Team member who created
utm_source VARCHAR(100) -- database, purchased_list, scraped, etc.
utm_medium VARCHAR(100) -- whatsapp, email, etc.
utm_campaign VARCHAR(255)
utm_partner_type VARCHAR(100) -- reseller, affiliate, etc.
utm_partner_region VARCHAR(100) -- north, south, east, west
custom_params JSONB -- Stores: utm_referral_code, utm_target_city, utm_target_product
clicks INTEGER DEFAULT 0
is_active BOOLEAN DEFAULT true
source VARCHAR(50) -- 'partner' for partner campaigns
created_at TIMESTAMP
```

#### 2. `users` Table
Stores all leads (both customer and partner)

```sql
-- Partner-specific columns:
source TEXT DEFAULT 'customer' -- Set to 'partner' for partner leads
utm_source TEXT
utm_medium TEXT
utm_campaign TEXT
utm_partner_type TEXT
utm_partner_region TEXT
custom_params JSONB -- Stores additional UTM parameters
partner_status TEXT DEFAULT 'Pending Review'
registration_completed BOOLEAN
```

---

## Files in This Project

### 1. **partner-url-builder.html**
- **Purpose**: Create partner campaign URLs with UTM tracking
- **Location**: `/partner-url-builder.html`
- **Key Features**:
  - Partner-specific UTM parameters
  - Referral code tracking
  - Target city and product selection
  - Custom parameter support
  - Stores extra fields in `custom_params` JSON

### 2. **partner-analytics.html**
- **Purpose**: Analytics dashboard for partner campaigns only
- **Location**: `/partner-analytics.html`
- **Key Features**:
  - Reads from `custom_params` JSON for referral codes, cities
  - Shows partner-specific metrics
  - Charts for partner types, regions, referral codes
  - Export to CSV functionality
  - Filters partner campaigns only

### 3. **campaign-analytics.html**
- **Purpose**: Analytics dashboard for customer campaigns only
- **Location**: `/campaign-analytics.html`
- **Updated**: Filters out partner campaigns
- **Shows**: Only customer acquisition campaigns

### 4. **SQL Migration Files**
- `create_short_urls_table.sql` - Base table structure
- `add_partner_columns_fixed.sql` - Partner-specific columns

---

## Implementation for TopikoPartner.com

### Step 1: Add Supabase Client
Add to your HTML head or before closing body tag:

```html
<script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>
```

### Step 2: Add UTM Tracking Script
Add this complete script to your partner registration page:

```javascript
// ============================================
// PARTNER UTM TRACKING SYSTEM
// ============================================

// Initialize Supabase
const SUPABASE_URL = 'https://xssbtsfjtwjholygdbqo.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhzc2J0c2ZqdHdqaG9seWdkYnFvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTMxOTk5MjUsImV4cCI6MjA2ODc3NTkyNX0.eOSIHTpvllcH-fK6MARoe5HPiXlujsrzUWfAhmUh94k';
const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// ============================================
// AUTO-CAPTURE UTM PARAMETERS ON PAGE LOAD
// ============================================
(function() {
    const urlParams = new URLSearchParams(window.location.search);
    
    // Capture all UTM parameters
    const utmData = {
        // Standard UTM parameters
        utm_source: urlParams.get('utm_source'),
        utm_medium: urlParams.get('utm_medium'),
        utm_campaign: urlParams.get('utm_campaign'),
        utm_content: urlParams.get('utm_content'),
        utm_term: urlParams.get('utm_term'),
        
        // Partner-specific UTM parameters (stored in DB columns)
        utm_partner_type: urlParams.get('utm_partner_type'),
        utm_partner_region: urlParams.get('utm_partner_region'),
        
        // Custom parameters (will be stored in custom_params JSON)
        utm_referral_code: urlParams.get('utm_referral_code'),
        utm_target_city: urlParams.get('utm_target_city'),
        utm_target_product: urlParams.get('utm_target_product')
    };
    
    // Remove null values
    Object.keys(utmData).forEach(key => {
        if (utmData[key] === null) delete utmData[key];
    });
    
    // Store in sessionStorage
    if (Object.keys(utmData).length > 0) {
        sessionStorage.setItem('partnerUTMData', JSON.stringify(utmData));
        console.log('UTM Parameters captured:', utmData);
    }
    
    // Add as hidden fields to any forms on the page
    window.addEventListener('DOMContentLoaded', function() {
        const forms = document.querySelectorAll('form');
        forms.forEach(form => {
            Object.entries(utmData).forEach(([key, value]) => {
                if (value && !form.querySelector(`input[name="${key}"]`)) {
                    const input = document.createElement('input');
                    input.type = 'hidden';
                    input.name = key;
                    input.value = value;
                    form.appendChild(input);
                }
            });
        });
    });
})();

// ============================================
// PARTNER REGISTRATION SUBMISSION FUNCTION
// ============================================
async function submitPartnerRegistration(formData) {
    // Get stored UTM data
    const storedUTM = JSON.parse(sessionStorage.getItem('partnerUTMData') || '{}');
    
    // Separate custom parameters from standard ones
    const customParams = {
        utm_referral_code: storedUTM.utm_referral_code,
        utm_target_city: storedUTM.utm_target_city,
        utm_target_product: storedUTM.utm_target_product,
        // Add any other form-specific custom fields
        ...formData.customFields
    };
    
    // Remove undefined values from customParams
    Object.keys(customParams).forEach(key => {
        if (customParams[key] === undefined) delete customParams[key];
    });
    
    // Build complete submission data
    const submissionData = {
        // === FORM FIELDS ===
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        business_name: formData.business_name,
        website: formData.website,
        address: formData.address,
        city: formData.city,
        state: formData.state,
        country: formData.country || 'India',
        pincode: formData.pincode,
        
        // === PARTNER FIELDS ===
        partner_type: formData.partner_type, // From form
        employee_count: formData.employee_count,
        annual_revenue: formData.annual_revenue,
        partnership_goals: formData.partnership_goals,
        target_market: formData.target_market,
        current_challenges: formData.current_challenges,
        interested_services: formData.interested_services,
        
        // === UTM TRACKING (Standard) ===
        utm_source: storedUTM.utm_source || 'direct',
        utm_medium: storedUTM.utm_medium || 'organic',
        utm_campaign: storedUTM.utm_campaign,
        utm_content: storedUTM.utm_content,
        utm_term: storedUTM.utm_term,
        
        // === PARTNER UTM TRACKING ===
        utm_partner_type: storedUTM.utm_partner_type,
        utm_partner_region: storedUTM.utm_partner_region,
        
        // === CUSTOM PARAMETERS (JSON) ===
        custom_params: customParams,
        
        // === METADATA ===
        source: 'partner', // CRITICAL: Must be 'partner' for partner leads
        lead_type: 'partner',
        partner_status: 'Pending Review',
        landing_url: window.location.href,
        landing_page: window.location.pathname,
        referrer: document.referrer,
        ip_address: '', // Get from server-side if needed
        user_agent: navigator.userAgent,
        landing_timestamp: new Date().toISOString(),
        registration_completed: true,
        registration_attempts: 1,
        created_at: new Date().toISOString()
    };
    
    // Submit to Supabase
    try {
        const { data, error } = await supabase
            .from('users')
            .insert(submissionData)
            .select()
            .single();
        
        if (error) {
            console.error('Partner registration error:', error);
            throw error;
        }
        
        console.log('Partner registration successful:', data);
        
        // Clear stored UTM data
        sessionStorage.removeItem('partnerUTMData');
        
        // Track conversion event (optional)
        await trackConversion(data.id);
        
        return { success: true, data };
        
    } catch (error) {
        console.error('Submission failed:', error);
        return { success: false, error: error.message };
    }
}

// ============================================
// TRACK CONVERSION (OPTIONAL)
// ============================================
async function trackConversion(userId) {
    try {
        await supabase.from('page_navigation').insert({
            user_id: userId,
            to_page: '/registration-complete',
            navigation_type: 'conversion',
            utm_data: JSON.parse(sessionStorage.getItem('partnerUTMData') || '{}'),
            created_at: new Date().toISOString()
        });
    } catch (error) {
        console.error('Conversion tracking error:', error);
    }
}

// ============================================
// FORM INTEGRATION EXAMPLE
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('partnerRegistrationForm');
    
    if (form) {
        form.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            // Show loading state
            const submitBtn = form.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Submitting...';
            submitBtn.disabled = true;
            
            // Collect form data
            const formData = {
                // Basic Information
                name: form.querySelector('[name="name"]')?.value,
                email: form.querySelector('[name="email"]')?.value,
                phone: form.querySelector('[name="phone"]')?.value,
                business_name: form.querySelector('[name="business_name"]')?.value,
                
                // Address
                address: form.querySelector('[name="address"]')?.value,
                city: form.querySelector('[name="city"]')?.value,
                state: form.querySelector('[name="state"]')?.value,
                pincode: form.querySelector('[name="pincode"]')?.value,
                
                // Partner Information
                partner_type: form.querySelector('[name="partner_type"]')?.value,
                website: form.querySelector('[name="website"]')?.value,
                employee_count: form.querySelector('[name="employee_count"]')?.value,
                annual_revenue: form.querySelector('[name="annual_revenue"]')?.value,
                
                // Goals and Interests
                partnership_goals: form.querySelector('[name="partnership_goals"]')?.value,
                target_market: form.querySelector('[name="target_market"]')?.value,
                current_challenges: form.querySelector('[name="current_challenges"]')?.value,
                interested_services: form.querySelector('[name="interested_services"]')?.value,
                
                // Any custom fields
                customFields: {
                    // Add any additional custom fields here
                }
            };
            
            // Submit registration
            const result = await submitPartnerRegistration(formData);
            
            if (result.success) {
                // Success!
                alert('Registration successful! Our team will contact you soon.');
                form.reset();
                
                // Optional: Redirect to thank you page
                // window.location.href = '/thank-you?id=' + result.data.id;
            } else {
                // Error
                alert('Registration failed: ' + (result.error || 'Please try again'));
            }
            
            // Reset button
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        });
    }
});
```

---

## UTM Parameters Reference

### Standard UTM Parameters
| Parameter | Purpose | Example Values |
|-----------|---------|----------------|
| utm_source | Traffic source | database, purchased_list, scraped, manual, referral |
| utm_medium | Marketing medium | whatsapp, email, sms, ppc, organic |
| utm_campaign | Campaign name | q1_2025_partner_drive |
| utm_content | Ad/link variant | button_a, link_top |
| utm_term | Paid search terms | partner_software |

### Partner-Specific UTM Parameters (DB Columns)
| Parameter | Purpose | Example Values |
|-----------|---------|----------------|
| utm_partner_type | Type of partner | reseller, affiliate, referral, agency, consultant |
| utm_partner_region | Target region | north, south, east, west, central |

### Custom UTM Parameters (Stored in JSON)
| Parameter | Purpose | Example Values |
|-----------|---------|----------------|
| utm_referral_code | Partner referral code | REF123, GOLD50, PARTNER2025 |
| utm_target_city | Target city | Mumbai, Delhi, Bangalore |
| utm_target_product | Target products | display, topiko, hebt, flex |

---

## Testing Guide

### 1. Create Test Campaign
1. Open `partner-url-builder.html`
2. Fill in:
   - Campaign Name: "Test Partner Campaign"
   - Created By: "your_email@company.com"
   - Partner Type: "Reseller"
   - Data Source: "database"
   - Region: "North India"
   - Target City: "Mumbai"
   - Referral Code: "TEST123"
   - Medium: "WhatsApp"
3. Click "Generate Partner URL"
4. Copy the short URL (e.g., `/p/PXYZ123`)

### 2. Test URL Redirect
Your redirect handler should expand the short URL:
```javascript
// Example redirect handler (implement on your server)
app.get('/p/:code', async (req, res) => {
    const { code } = req.params;
    
    // Get long URL from database
    const { data } = await supabase
        .from('short_urls')
        .select('long_url, clicks')
        .eq('short_code', code)
        .single();
    
    if (data) {
        // Increment click count
        await supabase
            .from('short_urls')
            .update({ clicks: data.clicks + 1 })
            .eq('short_code', code);
        
        // Redirect to partner site with UTMs
        res.redirect(data.long_url);
    } else {
        res.status(404).send('Not found');
    }
});
```

### 3. Verify UTM Capture
1. Visit the registration page with UTMs
2. Open browser console
3. Check: `sessionStorage.getItem('partnerUTMData')`
4. Should see all UTM parameters captured

### 4. Test Form Submission
1. Fill the registration form
2. Submit
3. Check Supabase `users` table for new entry with:
   - `source = 'partner'`
   - UTM parameters populated
   - `custom_params` JSON contains referral code, city, etc.

### 5. Verify Analytics
1. Open `partner-analytics.html`
2. Should see:
   - Campaign in the table
   - Referral code in "Top Referral Codes" chart
   - Target city in "Top Target Cities" chart
   - Correct partner type and region

---

## Troubleshooting

### Issue: UTM parameters not captured
**Solution**: 
- Check browser console for errors
- Verify Supabase credentials are correct
- Ensure script runs before form submission
- Check sessionStorage in browser DevTools

### Issue: Data not showing in analytics
**Solution**:
- Verify `source = 'partner'` is set in database
- Check campaign has `[PARTNER]` prefix or `source = 'partner'`
- Refresh analytics page
- Check browser console for Supabase errors

### Issue: Custom parameters not saved
**Solution**:
- Ensure `custom_params` is JSONB type in database
- Check that values are properly stringified
- Verify no undefined values in JSON

### Issue: Short URL not redirecting
**Solution**:
- Implement redirect handler on your server
- Check short_code exists in database
- Verify long_url is properly formatted

---

## Database Queries for Debugging

### Check partner campaigns:
```sql
SELECT * FROM short_urls 
WHERE source = 'partner' 
OR campaign_name LIKE '%[PARTNER]%'
ORDER BY created_at DESC;
```

### Check partner leads:
```sql
SELECT * FROM users 
WHERE source = 'partner'
ORDER BY created_at DESC;
```

### Check custom parameters:
```sql
SELECT 
    campaign_name,
    custom_params->>'utm_referral_code' as referral_code,
    custom_params->>'utm_target_city' as target_city,
    custom_params->>'utm_target_product' as target_product
FROM short_urls
WHERE source = 'partner';
```

---

## Security Considerations

1. **Never expose write access** to short_urls table from client
2. **Validate all inputs** before database insertion
3. **Rate limit** registration submissions
4. **Sanitize** custom parameters before storage
5. **Use RLS policies** in Supabase for data access control

---

## Support & Maintenance

### Regular Tasks:
- Monitor conversion rates in partner-analytics.html
- Export data monthly for reporting
- Clean up inactive campaigns quarterly
- Update referral codes as needed

### For Issues:
1. Check browser console for JavaScript errors
2. Verify Supabase connection and credentials
3. Review this documentation
4. Check database logs in Supabase dashboard

---

## Summary

This system provides complete partner UTM tracking with:
- ✅ Automated UTM capture on landing pages
- ✅ Custom parameter support via JSON
- ✅ Separate analytics for partner vs customer campaigns
- ✅ Referral code tracking
- ✅ Regional and city-level analytics
- ✅ Export capabilities for reporting

The implementation requires minimal changes to your existing partner registration form - just include the tracking script and ensure form submission uses the provided function.

---

*Last Updated: December 2024*
*Version: 1.0*
# UTM Tracking System - Test Guide

## Quick Test URLs

### 1. Test Lead Form with UTM Parameters
Open lead-form.html with these test URLs:

```
# Basic UTM test
http://localhost:8000/lead-form.html?utm_source=facebook&utm_medium=social&utm_campaign=diwali_sale

# Full UTM test with custom parameters
http://localhost:8000/lead-form.html?utm_source=google&utm_medium=cpc&utm_campaign=festival_2024&utm_state=karnataka&utm_language=kannada&utm_agent=agent123&utm_category=electronics

# WhatsApp campaign test
http://localhost:8000/lead-form.html?utm_source=whatsapp&utm_medium=message&utm_campaign=flash_sale&utm_state=tamil_nadu&utm_language=tamil
```

### 2. Test URL Builder
Open: http://localhost:8000/url-builder.html

Try creating campaigns:
- Source: Facebook
- Medium: Social
- Campaign: Diwali Sale
- State: Karnataka
- Language: Kannada
- Agent: AGT001

### 3. Test Short URL System
1. Open url-builder.html
2. Create a campaign URL
3. Click "Create Short Link"
4. Test the short URL: http://localhost:8000/c.html?c=ABC123

### 4. Verify in CRM Dashboard
Open: http://localhost:8000/crm.html

Check that leads show:
- Campaign Source
- Campaign Name
- State (if provided)
- Language (if provided)
- Agent (if provided)

## Step-by-Step Testing

### Test 1: Basic UTM Capture
1. Start local server: `python3 -m http.server 8000`
2. Open browser console (F12)
3. Visit: http://localhost:8000/lead-form.html?utm_source=google&utm_campaign=test
4. Check console for: "UTM parameters captured"
5. Check sessionStorage: `sessionStorage.getItem('utm_data')`
6. Fill and submit lead form
7. Check CRM dashboard for UTM data

### Test 2: URL Builder
1. Go to http://localhost:8000/url-builder.html
2. Fill in campaign details
3. Click "Generate URL"
4. Copy the generated URL
5. Test it in a new tab
6. Verify UTM parameters are captured

### Test 3: Short URL Creation
1. In URL builder, generate a campaign URL
2. Click "Create Short Link"
3. You'll get a short code like "ABC123"
4. Visit: http://localhost:8000/c.html?c=ABC123
5. Should redirect to full URL with all UTM parameters

### Test 4: End-to-End Campaign Test
1. Create campaign URL in url-builder.html
2. Create short link
3. Open short link in incognito window
4. Fill lead form
5. Submit
6. Check CRM dashboard - should show all UTM data

## What to Verify

✅ UTM parameters appear in browser console
✅ UTM data saved in sessionStorage
✅ Hidden form fields populated with UTM values
✅ CRM dashboard displays campaign information
✅ Short URLs redirect properly
✅ All custom parameters (state, language, agent) are captured

## Common Issues

1. **If UTM not captured**: Check browser console for errors
2. **If short URL doesn't work**: Verify the campaign data in localStorage
3. **If CRM doesn't show data**: Check that saveToSupabase includes UTM fields

## Sample Campaign URLs for Testing

### Facebook Campaign - Karnataka
```
http://localhost:8000/lead-form.html?utm_source=facebook&utm_medium=paid_social&utm_campaign=karnataka_launch&utm_state=karnataka&utm_language=kannada&utm_category=fashion
```

### Google Ads - Tamil Nadu
```
http://localhost:8000/lead-form.html?utm_source=google&utm_medium=cpc&utm_campaign=chennai_sale&utm_state=tamil_nadu&utm_language=tamil&utm_term=online+shopping
```

### WhatsApp - Multi-state
```
http://localhost:8000/lead-form.html?utm_source=whatsapp&utm_medium=broadcast&utm_campaign=republic_day&utm_state=maharashtra&utm_language=marathi&utm_agent=MUM001
```

### Instagram - Hindi Belt
```
http://localhost:8000/lead-form.html?utm_source=instagram&utm_medium=stories&utm_campaign=holi_offers&utm_state=uttar_pradesh&utm_language=hindi&utm_content=reel_ad
```
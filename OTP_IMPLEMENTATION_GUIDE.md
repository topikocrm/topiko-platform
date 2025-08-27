# OTP Implementation Guide

## Overview
This document describes the OTP (One-Time Password) verification system implemented for the Topiko platform. The system uses MagicText SMS API for sending OTPs to Indian mobile numbers.

## Key Components

### 1. SMS API Provider
- **Provider**: MagicText (msg.magictext.in)
- **API Key**: `3NwCuamS0SnyYDUw`
- **Sender ID**: `TOPIKO`
- **Endpoint**: `http://msg.magictext.in/V2/http-api-post.php`

### 2. Backend API Endpoint

#### Node.js/Vercel Version (`/api/send-otp.js`)
```javascript
// Expects POST request with:
{
  "mobile": "9876543210",  // 10-digit number without country code
  "otp": "1234",           // 4-digit OTP
  "message": "Your OTP message text"
}

// Returns:
{
  "success": true,
  "message": "OTP sent successfully",
  "otp": "1234"  // Returns OTP for verification
}
```

### 3. Frontend Implementation

#### Key Features:
- **Phone Validation**: Accepts 10-digit Indian numbers, automatically adds +91
- **Test Mode**: Phone `8272500000` bypasses API, uses OTP `0827`
- **Master OTP**: `0827` always works (override for testing/emergencies)
- **Local Testing**: Detects `file://` protocol, shows generated OTP in notification
- **Resend Logic**: 30-second timer, maximum 3 attempts
- **Graceful Fallback**: If SMS fails, allows master OTP usage

#### JavaScript Functions:

```javascript
// Main OTP sending function
async function sendOTP(phoneNumber) {
    // Validates and formats phone number
    // Generates 4-digit random OTP
    // Calls API endpoint
    // Handles test numbers and local testing
}

// OTP verification
function verifyOtp() {
    // Checks master OTP (0827)
    // Checks test mode (8272500000 + 1234)
    // Checks actual sent OTP
}

// Resend functionality
async function resendOTP() {
    // Enforces attempt limits
    // Manages countdown timer
}
```

## Implementation Flow

1. **User enters phone number** → Validates format (10 digits)
2. **Check uniqueness** → Verify phone not already registered (Supabase)
3. **Generate OTP** → Random 4-digit number
4. **Send SMS** → Call MagicText API with phone, OTP, message
5. **Show modal** → Display OTP input with phone number
6. **Verify OTP** → Check entered OTP against sent/master/test
7. **Complete registration** → Proceed if OTP valid

## Environment Detection

The system automatically detects the environment:
- **Local (`file://`)**: Shows OTP in notification, no API call
- **Development/Staging**: Full API integration with fallbacks
- **Production**: Full API integration with error handling

## Security Features

1. **Rate Limiting**: Max 3 resend attempts
2. **Session Storage**: OTP stored temporarily in `window.topikoApp`
3. **Phone Uniqueness**: Prevents duplicate registrations
4. **Timeout**: 30-second delay between resends
5. **HTTPS Only**: API calls require secure protocol (except local)

## Error Handling

- **API Failure**: Shows warning, allows master OTP
- **Network Error**: Graceful fallback to manual verification
- **Invalid Number**: Clear error messages to user
- **Duplicate Phone**: Prevents registration, shows error

## Testing Scenarios

### Local Testing
- Open HTML file directly
- OTP shown in notification
- Use displayed OTP or 0827

### Test Number
- Phone: `8272500000`
- OTP: `0827` or `1234`
- Bypasses actual SMS

### Production Testing
- Any valid 10-digit number
- Real SMS sent via MagicText
- Fallback to master OTP if needed

## Deployment Notes

### For Vercel
- Use `/api/send-otp.js` (Node.js serverless function)
- No PHP support
- Automatic CORS handling

### For PHP Server
- Create `/api/send-otp.php` with the sendOtp function
- Include proper CORS headers
- Handle JSON input/output

## Quick Integration Steps

1. **Copy the API endpoint** (`/api/send-otp.js`)
2. **Update API credentials** (MagicText key, sender ID)
3. **Implement phone validation** (validatePhoneNumber function)
4. **Add OTP modal** to your HTML
5. **Copy OTP functions** (sendOTP, verifyOtp, resendOTP)
6. **Test locally** first, then deploy

## Common Issues & Solutions

| Issue | Solution |
|-------|----------|
| "Invalid mobile number" | Ensure sending 10-digit number without +91 |
| CORS errors | Check API endpoint headers |
| OTP not received | Verify MagicText account active |
| Local testing fails | Check for file:// protocol detection |
| Duplicate files in Vercel | Remove .php version, keep .js only |

## Master OTP for Emergency Access

In case of SMS service failure:
- **Master OTP**: `0827`
- Works for any phone number
- Should be removed/changed in production

## Contact & Support

- **SMS Issues**: Contact MagicText support
- **Support Phone**: 885 886 8889 (mentioned in OTP message)
- **Test Number**: 8272500000 (always available for testing)
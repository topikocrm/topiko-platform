# Setting Up Real Product Images

## Option 1: Pexels API (Free - Recommended)

### Step 1: Get Your Free API Key
1. Go to https://www.pexels.com/api/
2. Click "Get Started" 
3. Create a free account
4. You'll get an API key immediately (no credit card needed)
5. Free tier: 200 requests per hour, 20,000 per month

### Step 2: Add Your API Key
Open `js/productImageService.js` and update line 10-11:

```javascript
// Change this:
PEXELS_API_KEY: 'YOUR_PEXELS_API_KEY',
USE_DEMO_MODE: true,

// To this:
PEXELS_API_KEY: 'your-actual-api-key-here',
USE_DEMO_MODE: false,
```

### Step 3: Test It
1. Clear your browser cache
2. Reload the test page
3. Images will now search for real photos!

---

## Option 2: Pixabay API (Also Free)

### Step 1: Get Your Free API Key
1. Go to https://pixabay.com/api/docs/
2. Sign up for free account
3. Get your API key from account settings
4. Free tier: 5,000 requests per hour!

### Step 2: Add Your API Key
In `js/productImageService.js` update line 11:

```javascript
PIXABAY_API_KEY: 'your-pixabay-key-here',
```

---

## Option 3: Upload Your Own Images

### Best for Production
Create folders and add your actual product images:

```
/images/products/
  ├── clothing/
  │   ├── kurta-001.jpg
  │   ├── saree-001.jpg
  │   └── ...
  ├── food/
  │   ├── biryani-001.jpg
  │   ├── dosa-001.jpg
  │   └── ...
  └── electronics/
      ├── laptop-001.jpg
      └── ...
```

Then update the image paths in your product data.

---

## Option 4: Use CDN Service

Upload images to:
- **Cloudinary** (free tier available)
- **ImageKit** (free tier available)
- **AWS S3** 
- **Google Cloud Storage**

---

## Which Option Should You Choose?

- **For Testing/Demo**: Use Pexels API (Option 1)
- **For Production**: Upload your own images (Option 3)
- **For Scale**: Use CDN service (Option 4)
#!/usr/bin/env python3
"""
Generate JavaScript mappings for all product images (existing and missing)
"""

import os
import json
from pathlib import Path

BASE_PATH = "/Users/murali/Projects/GitCode/topiko-platform/images/products"

def scan_images():
    """Scan for all existing images and create mappings"""
    image_mappings = {}
    missing_mappings = {}
    
    # Walk through all directories
    for root, dirs, files in os.walk(BASE_PATH):
        for file in files:
            if file.lower().endswith(('.jpg', '.jpeg', '.png')):
                # Get relative path from base
                full_path = os.path.join(root, file)
                rel_path = os.path.relpath(full_path, BASE_PATH)
                
                # Extract product ID from filename (remove extension)
                product_id = os.path.splitext(file)[0]
                
                # Create web-accessible path
                web_path = f"/images/products/{rel_path}"
                
                # Store mapping
                image_mappings[product_id] = {
                    'path': web_path,
                    'category': rel_path.split('/')[0] if '/' in rel_path else 'general',
                    'exists': True
                }
    
    return image_mappings

def parse_master_list_for_products():
    """Parse master list to get all expected products"""
    expected_products = {}
    
    with open("TEAM_IMAGE_DOWNLOAD_MASTER_LIST.md", "r") as f:
        lines = f.readlines()
    
    current_category = ""
    current_subcategory = ""
    
    for line in lines:
        # Track category sections
        if "### 🛍️ FASHION CATEGORY" in line:
            current_category = "fashion"
        elif "### 📱 ELECTRONICS CATEGORY" in line:
            current_category = "electronics"
        elif "### 🍔 FOOD & BEVERAGES CATEGORY" in line:
            current_category = "food"
        elif "### 🛒 GROCERY & STAPLES CATEGORY" in line:
            current_category = "grocery"
        elif "### 💄 BEAUTY & PERSONAL CARE CATEGORY" in line:
            current_category = "beauty"
        elif "### 🏠 HOME & FURNITURE CATEGORY" in line:
            current_category = "home"
        elif "### ⚽ SPORTS & FITNESS CATEGORY" in line:
            current_category = "sports"
        elif "### 💊 HEALTH & MEDICAL CATEGORY" in line:
            current_category = "health"
        elif "### 💎 JEWELRY CATEGORY" in line:
            current_category = "jewelry"
        elif "### 👟 FOOTWEAR CATEGORY" in line:
            current_category = "footwear"
        elif "### 📚 BOOKS & STATIONERY CATEGORY" in line:
            current_category = "books"
        
        # Extract product from table rows
        if line.strip().startswith('| ☐ |'):
            parts = line.split('|')
            if len(parts) >= 5:
                folder = parts[2].strip().strip('`').rstrip('/')
                image_file = parts[3].strip().strip('`')
                
                if image_file.endswith(('.jpg', '.jpeg', '.png')):
                    product_id = os.path.splitext(image_file)[0]
                    expected_products[product_id] = {
                        'category': current_category,
                        'expected': True
                    }
    
    return expected_products

def generate_js_file(mappings, expected):
    """Generate the JavaScript file with all mappings"""
    
    js_content = """/* ========================================
   LOCAL PRODUCT IMAGE MAPPINGS
   Auto-generated from actual image files
   Total: {total_images} images mapped, {missing_count} using fallbacks
   ======================================== */

(function() {{
    'use strict';
    
    // Category to placeholder mapping
    const CATEGORY_PLACEHOLDERS = {{
        'fashion': '/images/products/placeholders/clothing.svg',
        'electronics': '/images/products/placeholders/electronics.svg',
        'food': '/images/products/placeholders/food.svg',
        'grocery': '/images/products/placeholders/grocery.svg',
        'beauty': '/images/products/placeholders/beauty.svg',
        'home': '/images/products/placeholders/furniture.svg',
        'sports': '/images/products/placeholders/default.svg',
        'health': '/images/products/placeholders/default.svg',
        'jewelry': '/images/products/placeholders/accessories.svg',
        'footwear': '/images/products/placeholders/footwear.svg',
        'books': '/images/products/placeholders/default.svg',
        'general': '/images/products/placeholders/default.svg'
    }};
    
    // Complete product image mappings
    const LOCAL_PRODUCT_IMAGES = {{
""".format(total_images=len(mappings), missing_count=len(expected) - len(mappings))
    
    # Group by category for better organization
    categories = {}
    for product_id, data in mappings.items():
        category = data['category']
        if category not in categories:
            categories[category] = {}
        categories[category][product_id] = data['path']
    
    # Add mappings by category
    for category in sorted(categories.keys()):
        js_content += f"        // {category.upper()} ({len(categories[category])} products)\n"
        for product_id in sorted(categories[category].keys()):
            path = categories[category][product_id]
            js_content += f"        '{product_id}': '{path}',\n"
        js_content += "\n"
    
    # Add missing products as null (will use placeholders)
    missing_products = []
    for product_id in expected:
        if product_id not in mappings:
            missing_products.append(product_id)
    
    if missing_products:
        js_content += "        // PRODUCTS USING FALLBACK PLACEHOLDERS\n"
        for product_id in sorted(missing_products)[:50]:  # Show first 50 as example
            js_content += f"        '{product_id}': null,\n"
        if len(missing_products) > 50:
            js_content += f"        // ... and {len(missing_products) - 50} more missing products\n"
    
    js_content += """    };
    
    // Function to get local product image
    function getLocalProductImage(productId, category) {
        // First check if we have a direct mapping
        if (LOCAL_PRODUCT_IMAGES[productId]) {
            return LOCAL_PRODUCT_IMAGES[productId];
        }
        
        // Try variations of the product ID
        const variations = [
            productId,
            productId.replace(/-/g, '_'),
            productId.replace(/_/g, '-'),
            productId.toLowerCase(),
            productId.replace(/-\d+$/, ''), // Remove trailing numbers
        ];
        
        for (let variant of variations) {
            if (LOCAL_PRODUCT_IMAGES[variant]) {
                return LOCAL_PRODUCT_IMAGES[variant];
            }
        }
        
        // Return category-specific placeholder
        return CATEGORY_PLACEHOLDERS[category] || CATEGORY_PLACEHOLDERS['general'];
    }
    
    // Function to check if image exists locally
    function hasLocalImage(productId) {
        return LOCAL_PRODUCT_IMAGES[productId] !== null && LOCAL_PRODUCT_IMAGES[productId] !== undefined;
    }
    
    // Function to get all available product IDs
    function getAllProductIds() {
        return Object.keys(LOCAL_PRODUCT_IMAGES).filter(id => LOCAL_PRODUCT_IMAGES[id] !== null);
    }
    
    // Export for global use
    if (typeof window !== 'undefined') {
        window.LocalProductImages = {
            LOCAL_PRODUCT_IMAGES,
            CATEGORY_PLACEHOLDERS,
            getLocalProductImage,
            hasLocalImage,
            getAllProductIds,
            totalImages: """ + str(len(mappings)) + """,
            missingImages: """ + str(len(missing_products)) + """
        };
        
        console.log(`✅ Local Product Images loaded - ${window.LocalProductImages.totalImages} images mapped, ${window.LocalProductImages.missingImages} using fallbacks`);
    }
})();
"""
    
    return js_content

def main():
    print("Scanning for product images...")
    
    # Scan existing images
    image_mappings = scan_images()
    print(f"Found {len(image_mappings)} product images")
    
    # Get expected products from master list
    expected_products = parse_master_list_for_products()
    print(f"Expected {len(expected_products)} products from master list")
    
    # Generate JavaScript file
    js_content = generate_js_file(image_mappings, expected_products)
    
    # Save to file
    output_file = "js/local-product-images.js"
    with open(output_file, "w") as f:
        f.write(js_content)
    
    print(f"✅ Generated {output_file}")
    print(f"   - {len(image_mappings)} images mapped")
    print(f"   - {len(expected_products) - len(image_mappings)} products will use fallbacks")
    
    # Also create a summary
    categories_summary = {}
    for product_id, data in image_mappings.items():
        cat = data['category']
        if cat not in categories_summary:
            categories_summary[cat] = 0
        categories_summary[cat] += 1
    
    print("\nImages by category:")
    for cat in sorted(categories_summary.keys()):
        print(f"  - {cat}: {categories_summary[cat]} images")

if __name__ == "__main__":
    main()
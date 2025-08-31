#!/usr/bin/env python3
"""
Analyze product ID mismatches between config and local images
"""

import re
import json
from collections import defaultdict

def extract_config_products(filename):
    """Extract product IDs and names from config_js.js"""
    products = {}
    with open(filename, 'r') as f:
        content = f.read()
    
    # Find all product objects
    pattern = r"{id:\s*'([^']+)',\s*name:\s*'([^']+)'"
    matches = re.findall(pattern, content)
    
    for product_id, name in matches:
        products[product_id] = name
    
    return products

def extract_local_images(filename):
    """Extract product IDs from local-product-images.js"""
    images = set()
    with open(filename, 'r') as f:
        content = f.read()
    
    # Find all image mappings
    pattern = r"'([^']+)':\s*'/images/products/"
    matches = re.findall(pattern, content)
    
    for image_id in matches:
        images.add(image_id)
    
    return images

def analyze_patterns(config_products, local_images):
    """Analyze mismatch patterns"""
    
    mismatches = []
    patterns = defaultdict(list)
    
    for product_id, name in config_products.items():
        if product_id not in local_images:
            # Try various transformations
            base_id = product_id.replace('-001', '').replace('-002', '').replace('-003', '')
            
            # Check if base ID exists
            if base_id in local_images:
                patterns['number_suffix'].append((product_id, base_id))
                continue
            
            # Check with underscores
            underscore_id = base_id.replace('-', '_')
            if underscore_id in local_images:
                patterns['hyphen_to_underscore'].append((product_id, underscore_id))
                continue
            
            # Check word reversal (2 words)
            parts = base_id.split('-')
            if len(parts) == 2:
                reversed_id = f"{parts[1]}-{parts[0]}"
                if reversed_id in local_images:
                    patterns['word_reversal_2'].append((product_id, reversed_id))
                    continue
            
            # Check word reversal (3 words)
            if len(parts) == 3:
                variations = [
                    f"{parts[1]}-{parts[0]}-{parts[2]}",
                    f"{parts[2]}-{parts[1]}-{parts[0]}",
                    f"{parts[0]}-{parts[2]}-{parts[1]}"
                ]
                for var in variations:
                    if var in local_images:
                        patterns['word_reversal_3'].append((product_id, var))
                        break
                else:
                    # Check partial matches
                    for img in local_images:
                        if any(p in img for p in parts if len(p) > 3):
                            patterns['partial_match'].append((product_id, img))
                            break
                    else:
                        mismatches.append((product_id, name))
            else:
                # Check for similar names
                name_based = name.lower().replace(' ', '-').replace('\'', '')
                if name_based in local_images:
                    patterns['name_based'].append((product_id, name_based))
                else:
                    mismatches.append((product_id, name))
    
    return patterns, mismatches

def main():
    # Extract data
    config_products = extract_config_products('js/config_js.js')
    local_images = extract_local_images('js/local-product-images.js')
    
    print(f"Total config products: {len(config_products)}")
    print(f"Total local images: {len(local_images)}")
    
    # Analyze patterns
    patterns, mismatches = analyze_patterns(config_products, local_images)
    
    print("\n=== PATTERN ANALYSIS ===")
    for pattern_type, examples in patterns.items():
        print(f"\n{pattern_type.upper()}: {len(examples)} cases")
        for orig, matched in examples[:5]:  # Show first 5 examples
            print(f"  {orig} → {matched}")
    
    print(f"\n=== UNMATCHED PRODUCTS: {len(mismatches)} ===")
    for product_id, name in mismatches[:20]:  # Show first 20
        print(f"  {product_id}: {name}")
    
    # Generate transformation rules
    print("\n=== RECOMMENDED TRANSFORMATION RULES ===")
    print("1. Remove number suffixes (-001, -002, etc.)")
    print(f"   Would fix: {len(patterns['number_suffix'])} products")
    print("2. Try word reversals for 2-word products")
    print(f"   Would fix: {len(patterns['word_reversal_2'])} products")
    print("3. Try hyphen to underscore conversion")
    print(f"   Would fix: {len(patterns['hyphen_to_underscore'])} products")
    print("4. Try name-based matching (convert display name to ID)")
    print(f"   Would fix: {len(patterns['name_based'])} products")

if __name__ == "__main__":
    main()
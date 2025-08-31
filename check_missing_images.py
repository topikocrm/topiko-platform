#!/usr/bin/env python3
"""
Check for missing product images based on TEAM_IMAGE_DOWNLOAD_MASTER_LIST.md
"""

import os
import re
from pathlib import Path

# Base path for images
BASE_PATH = "/Users/murali/Projects/GitCode/topiko-platform/images/products"

# Parse the master list to extract expected images
def parse_master_list():
    expected_images = []
    current_path = ""
    
    with open("TEAM_IMAGE_DOWNLOAD_MASTER_LIST.md", "r") as f:
        lines = f.readlines()
    
    for line in lines:
        # Check for Full Path lines
        if "**Full Path**:" in line:
            # Extract path from the line
            match = re.search(r'`([^`]+)`', line)
            if match:
                current_path = match.group(1)
                # Remove the /images/products/ prefix if present
                current_path = current_path.replace('/images/products/', '')
        
        # Check for table rows with image files
        if line.strip().startswith('| ☐ |'):
            parts = line.split('|')
            if len(parts) >= 5:
                folder = parts[2].strip().strip('`').rstrip('/')
                image_file = parts[3].strip().strip('`')
                
                if folder and image_file and image_file.endswith(('.jpg', '.jpeg', '.png')):
                    # Construct the full expected path
                    if current_path:
                        # Handle cases where path might have multiple options with &
                        if '&' in current_path:
                            # Take the first option for simplicity
                            path_parts = current_path.split('&')
                            current_path_clean = path_parts[0].strip().strip('`/')
                        else:
                            current_path_clean = current_path.strip('`/')
                        
                        full_path = os.path.join(current_path_clean, folder, image_file)
                    else:
                        full_path = os.path.join(folder, image_file)
                    
                    expected_images.append(full_path)
    
    return expected_images

# Check which images exist
def check_existing_images(expected_images):
    missing_images = []
    found_images = []
    
    for image_path in expected_images:
        full_path = os.path.join(BASE_PATH, image_path)
        
        # Check with different extensions
        found = False
        for ext in ['.jpg', '.jpeg', '.png', '.JPG', '.JPEG', '.PNG']:
            test_path = full_path.rsplit('.', 1)[0] + ext
            if os.path.exists(test_path):
                found = True
                found_images.append(image_path)
                break
        
        if not found:
            missing_images.append(image_path)
    
    return found_images, missing_images

# Main execution
if __name__ == "__main__":
    print("Checking for missing product images...")
    print("=" * 60)
    
    # Parse expected images
    expected_images = parse_master_list()
    print(f"Total expected images: {len(expected_images)}")
    
    # Check which exist
    found_images, missing_images = check_existing_images(expected_images)
    
    print(f"Found images: {len(found_images)}")
    print(f"Missing images: {len(missing_images)}")
    print("=" * 60)
    
    if missing_images:
        print("\n📋 MISSING IMAGES LIST:")
        print("-" * 60)
        
        # Group by category for better organization
        categories = {}
        for img in missing_images:
            parts = img.split('/')
            if parts:
                category = parts[0] if parts else "unknown"
                if category not in categories:
                    categories[category] = []
                categories[category].append(img)
        
        # Print by category
        for category in sorted(categories.keys()):
            print(f"\n### {category.upper()} ({len(categories[category])} missing)")
            for img in sorted(categories[category]):
                print(f"  ❌ {img}")
    else:
        print("\n✅ All expected images are present!")
    
    # Save to file
    with open("MISSING_IMAGES_REPORT.md", "w") as f:
        f.write("# Missing Product Images Report\n\n")
        f.write(f"**Total Expected:** {len(expected_images)}\n")
        f.write(f"**Found:** {len(found_images)}\n")
        f.write(f"**Missing:** {len(missing_images)}\n\n")
        
        if missing_images:
            f.write("## Missing Images by Category\n\n")
            
            categories = {}
            for img in missing_images:
                parts = img.split('/')
                if parts:
                    category = parts[0] if parts else "unknown"
                    if category not in categories:
                        categories[category] = []
                    categories[category].append(img)
            
            for category in sorted(categories.keys()):
                f.write(f"### {category.upper()} ({len(categories[category])} missing)\n\n")
                for img in sorted(categories[category]):
                    f.write(f"- [ ] `{img}`\n")
                f.write("\n")
        else:
            f.write("## ✅ All expected images are present!\n")
    
    print(f"\n📄 Report saved to: MISSING_IMAGES_REPORT.md")
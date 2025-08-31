#!/usr/bin/env python3
import re

# Read the file
with open('TEAM_IMAGE_DOWNLOAD_MASTER_LIST.md', 'r') as f:
    lines = f.readlines()

# Process each line
updated_lines = []
for line in lines:
    # Pattern to match table rows with nested folder paths
    if '| ☐ |' in line and '.jpg` |' in line:
        # Extract the folder path
        folder_match = re.search(r'`([^`]+)/`', line)
        if folder_match:
            folder_path = folder_match.group(1)
            # Get the last part of the path (the actual product name)
            product_name = folder_path.split('/')[-1]
            # Replace the image name
            line = re.sub(r'`[^`]+\.jpg`', f'`{product_name}.jpg`', line)
    
    updated_lines.append(line)

# Write back to file
with open('TEAM_IMAGE_DOWNLOAD_MASTER_LIST.md', 'w') as f:
    f.writelines(updated_lines)

print("Fixed all nested folder image names!")

# Count total products
product_count = sum(1 for line in updated_lines if '| ☐ |' in line and '.jpg` |' in line)
print(f"Total product images: {product_count}")
#!/usr/bin/env python3
import re

# Read the file
with open('TEAM_IMAGE_DOWNLOAD_MASTER_LIST.md', 'r') as f:
    content = f.read()

# Pattern to match table rows with folder names and main.jpg
pattern = r'\| ☐ \| `([^/]+)/` \| `[^`]+` \|'

def replace_image_name(match):
    folder_name = match.group(1)
    return f'| ☐ | `{folder_name}/` | `{folder_name}.jpg` |'

# Replace all occurrences
updated_content = re.sub(pattern, replace_image_name, content)

# Write back to file
with open('TEAM_IMAGE_DOWNLOAD_MASTER_LIST.md', 'w') as f:
    f.write(updated_content)

print("Updated all image names to match folder names!")

# Count how many were updated
matches = re.findall(pattern, content)
print(f"Total images updated: {len(matches)}")
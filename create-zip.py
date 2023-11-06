import os
import zipfile
import json

# Read the version from package.json
with open('package.json', 'r') as package_json:
    data = json.load(package_json)
    version = data.get('version', '1.0.0')

major_minor = '.'.join(version.split('.')[:2])
changelist = version.split('.')[-1]

# Create a zip file name with the version number
zip_file_name = f'art-social-app-{major_minor}-{changelist}.zip'

# Directory to zip
source_directory = 'art-social-app'

# Create a zip file and add files to it
with zipfile.ZipFile(zip_file_name, 'w', zipfile.ZIP_DEFLATED) as zipf:
    for root, _, files in os.walk(source_directory):
        for file in files:
            file_path = os.path.join(root, file)
            # Skip files in 'node_modules' and '.expo'
            if 'node_modules' not in file_path and '.expo' not in file_path:
                arcname = os.path.relpath(file_path, source_directory)
                zipf.write(file_path, arcname)
                print(f'Added: {arcname}')  # Print progress message

print(f'Zip file created: {zip_file_name}')

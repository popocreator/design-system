# Add public folder
mkdir public

# Add public/index.html file
touch public/index.html
chmod 755 lic/index.html
echo '<!DOCTYPE html>' >> public/index.html
echo '<html lang="en">' >> public/index.html
echo '  <head>' >> public/index.html
echo '    <meta charset="utf-8" />' >> public/index.html
echo '    <meta' >> public/index.html
echo '      name="viewport"' >> public/index.html
echo '      content="width=device-width, initial-scale=1, shrink-to-fit=no"' >> public/index.html
echo '    />' >> public/index.html
echo '    <meta name="theme-color" content="#000000" />' >> public/index.html
echo '    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />' >> public/index.html
echo '    <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico" />' >> public/index.html
echo '    <title>React App</title>' >> public/index.html
echo '  </head>' >> public/index.html
echo '  <body>' >> public/index.html
echo '    <noscript> You need to enable JavaScript to run this app. </noscript>' >> public/index.html
echo '    <div id="root"></div>' >> public/index.html
echo '  </body>' >> public/index.html
echo '</html>' >> public/index.html

# Add public/manifest.json file
touch public/manifest.json
chmod 755 public/manifest.json
echo '{' >> public/manifest.json
echo '  "short_name": "React App",' >> public/manifest.json
echo '  "name": "Create React App Sample",' >> public/manifest.json
echo '  "icons": [' >> public/manifest.json
echo '    {' >> public/manifest.json
echo '      "src": "favicon.ico",' >> public/manifest.json
echo '      "sizes": "64x64 32x32 24x24 16x16",' >> public/manifest.json
echo '      "type": "image/x-icon"' >> public/manifest.json
echo '    }' >> public/manifest.json
echo '  ],' >> public/manifest.json
echo '  "start_url": "./index.html",' >> public/manifest.json
echo '  "display": "standalone",' >> public/manifest.json
echo '  "theme_color": "#000000",' >> public/manifest.json
echo '  "background_color": "#ffffff"' >> public/manifest.json
echo '}' >> public/manifest.json

touch .lintstagedrc.json
echo '{' >> .lintstagedrc.json
echo '  "src/**/*.{js,ts,tsx}": ["eslint --fix"],' >> .lintstagedrc.json
echo '  "*.{js,ts,tsx,html,scss,json}": ["prettier --write ."]' >> .lintstagedrc.json
echo '}' >> .lintstagedrc.json

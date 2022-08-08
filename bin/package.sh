sed '7,1000d' package.json >> packagesample.json
echo '    "start": "craco start",' >> packagesample.json
echo '    "build": "craco build",' >> packagesample.json
echo '    "test": "craco test",' >> packagesample.json
echo '    "lint": "eslint \"**/*.{js,ts,tsx}\" --fix",' >> packagesample.json
echo '    "predeploy": "yarn build",' >> packagesample.json
echo '    "deploy": "gh-pages -d build",' >> packagesample.json
echo '    "pre-commit": "lint-staged && echo '[Husky] pre-commit'",' >> packagesample.json
echo '    "prepare": "husky install .husky"' >> packagesample.json
sed '1,7d' package.json >> packagesample.json
mv packagesample.json package.json

# 린트 환경설정 파일 생성
touch .eslintrc.js
echo 'module.exports = {' >> .eslintrc.js
echo '  parser: "@typescript-eslint/parser",' >> .eslintrc.js
echo '  parserOptions: {' >> .eslintrc.js
echo '    sourceType: "module",' >> .eslintrc.js
echo '    ecmaFeatures: {' >> .eslintrc.js
echo '      jsx: true,' >> .eslintrc.js
echo '    },' >> .eslintrc.js
echo '  },' >> .eslintrc.js
echo '  settings: {' >> .eslintrc.js
echo '    react: {' >> .eslintrc.js
echo '      version: "detect",' >> .eslintrc.js
echo '    },' >> .eslintrc.js
echo '  },' >> .eslintrc.js
echo '  extends: [' >> .eslintrc.js
echo '    "plugin:react/recommended",' >> .eslintrc.js
echo '    "plugin:@typescript-eslint/recommended",' >> .eslintrc.js
# echo '    "prettier/@typescript-eslint",' >> .eslintrc.js (eslint-config-prettier < 8.0)
echo '    "plugin:prettier/recommended",' >> .eslintrc.js
echo '  ],' >> .eslintrc.js
echo '  rules: {'>> .eslintrc.js
echo '    "prettier/prettier": 0,'>> .eslintrc.js
echo '    "comma-dangle": ["error", "never"]'>> .eslintrc.js
echo '  }'>> .eslintrc.js
echo '};' >> .eslintrc.js

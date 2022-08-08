touch tsconfig.paths.json
echo '{' >> tsconfig.paths.json
echo '  "compilerOptions": {' >> tsconfig.paths.json
echo '    "baseUrl": ".",' >> tsconfig.paths.json
echo '    "paths": {' >> tsconfig.paths.json
echo '      "@src/*": ["src/*"],' >> tsconfig.paths.json
echo '      "@apis/*": ["src/apis/*"],' >> tsconfig.paths.json
echo '      "@components/*": ["src/components/*"],' >> tsconfig.paths.json
echo '      "@controllers/*": ["src/controllers/*"],' >> tsconfig.paths.json
echo '      "@hooks/*": ["src/hooks/*"],' >> tsconfig.paths.json
echo '      "@layouts/*": ["src/layouts/*"],' >> tsconfig.paths.json
echo '      "@pages/*": ["src/pages/*"],' >> tsconfig.paths.json
echo '      "@store/*": ["src/store/*"]' >> tsconfig.paths.json
echo '    }' >> tsconfig.paths.json
echo '  }' >> tsconfig.paths.json
echo '}' >> tsconfig.paths.json
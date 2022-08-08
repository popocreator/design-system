touch tsconfig.json
echo '{' >> tsconfig.json
echo '  "extends": "./tsconfig.paths.json",' >> tsconfig.json
echo '  "compilerOptions": {' >> tsconfig.json
echo '    "target": "es5",' >> tsconfig.json
echo '    "module": "esnext",' >> tsconfig.json
echo '    "jsx": "react-jsx",' >> tsconfig.json
echo '    "outDir": "dist",' >> tsconfig.json
echo '    "strict": true,' >> tsconfig.json
echo '    "esModuleInterop": true,' >> tsconfig.json
echo '    "skipLibCheck": true,' >> tsconfig.json
echo '    "forceConsistentCasingInFileNames": true,' >> tsconfig.json
echo '    "declaration": true,' >> tsconfig.json
echo '    "lib": ["dom", "dom.iterable", "esnext"],' >> tsconfig.json
echo '    "allowJs": true,' >> tsconfig.json
echo '    "allowSyntheticDefaultImports": true,' >> tsconfig.json
echo '    "noFallthroughCasesInSwitch": true,' >> tsconfig.json
echo '    "moduleResolution": "node",' >> tsconfig.json
echo '    "resolveJsonModule": true,' >> tsconfig.json
echo '    "isolatedModules": true,' >> tsconfig.json
echo '    "noEmit": true' >> tsconfig.json
echo '  },' >> tsconfig.json
echo '  "include": ["src", "craco.config.js"],' >> tsconfig.json
echo '  "exclude": ["node_modules", "dist"]' >> tsconfig.json
echo '}' >> tsconfig.json

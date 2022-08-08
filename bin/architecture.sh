# Add project folders
mkdir src
mkdir src/apis
mkdir src/components
mkdir src/controllers
mkdir src/hooks
mkdir src/layouts
mkdir src/pages
mkdir src/store

# Add react-app-env.d.ts file
touch src/react-app-env.d.ts
chmod 755 src/react-app-env.d.ts
echo '/// <reference types="react-scripts" />' >> src/react-app-env.d.ts

# Add src/index.tsx file
touch src/index.tsx
chmod 755 src/index.tsx
echo 'import React, { StrictMode } from "react";' >> src/index.tsx
echo 'import { createRoot } from "react-dom/client";' >> src/index.tsx
echo 'import App from "./App";' >> src/index.tsx
echo '' >> src/index.tsx
echo 'const rootElement = document.getElementById("root");' >> src/index.tsx
echo 'let root;' >> src/index.tsx
echo '' >> src/index.tsx
echo 'if (rootElement) {' >> src/index.tsx
echo '  root = createRoot(rootElement);' >> src/index.tsx
echo '  root.render(' >> src/index.tsx
echo '    <StrictMode>' >> src/index.tsx
echo '      <App />' >> src/index.tsx
echo '    </StrictMode>' >> src/index.tsx
echo '  );' >> src/index.tsx
echo '}' >> src/index.tsx

# Add src/App.tsx file
touch src/App.tsx
chmod 755 src/App.tsx
echo 'import React, { ReactElement } from "react";' >> src/App.tsx
echo 'import { Route, BrowserRouter, Routes } from "react-router-dom";' >> src/App.tsx
echo '' >> src/App.tsx
echo 'const repository = "/";' >> src/App.tsx
echo '' >> src/App.tsx
echo 'const Home = () => <></>;' >> src/App.tsx
echo 'const Login = () => <></>;' >> src/App.tsx
echo 'export default function App(): ReactElement {' >> src/App.tsx
echo '  return (' >> src/App.tsx
echo '    <BrowserRouter basename={repository}>' >> src/App.tsx
echo '      <Routes>' >> src/App.tsx
echo '        <Route path="/" element={<Home />} />' >> src/App.tsx
echo '        <Route path="/login" element={<Login />} />' >> src/App.tsx
echo '      </Routes>' >> src/App.tsx
echo '    </BrowserRouter>' >> src/App.tsx
echo '  );' >> src/App.tsx
echo '}' >> src/App.tsx

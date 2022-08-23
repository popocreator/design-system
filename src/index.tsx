import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RecoilRoot } from 'recoil';
import App from './App';
import GlobalStyle from './GlobalStyle';
import Head from './layouts/Head';

const rootElement = document.getElementById('root');
let root;

if (rootElement) {
  root = createRoot(rootElement);
  root.render(
    <StrictMode>
      <Head />
      <GlobalStyle />
      <RecoilRoot>
        <App />
      </RecoilRoot>
    </StrictMode>
  );
}

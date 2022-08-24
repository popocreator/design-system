import React, { ReactElement } from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Landing from './pages/Landing';
import DesignSystem from './pages/DesignSystem';

const repository = '/design-system';
export default function App(): ReactElement {
  return (
    <BrowserRouter basename={repository}>
      <Routes>
        <Route path='/ds/*' element={<DesignSystem />} />
        <Route path='/' element={<Landing />} />
      </Routes>
    </BrowserRouter>
  );
}

import React from 'react';
import styled from 'styled-components';
import { Route, Routes } from 'react-router-dom';

import Header from '@src/layouts/Header';
import Sidebar from '@src/layouts/Sidebar';

import Components from '@src/components';

import Brand from '@src/navigations/Brand';
import Foundations from '@src/navigations/Foundations';
import Content from '@src/navigations/Content';
import Patterns from '@src/navigations/Patterns';
import Resources from '@src/navigations/Resources';
import ButtonDocument from '@src/components/Button/Button.Document';

const Page = styled.section`
  display: flex;
`;

export default function Main() {
  return (
    <Page>
      <Header />
      <Sidebar />
      <Routes>
        {/* Brand */}
        <Route path='/brand' element={<Brand />} />
        {/* Foundations */}
        <Route path='/foundations' element={<Foundations />} />
        {/* Content */}
        <Route path='/content' element={<Content />} />
        {/* Components */}
        <Route path='/components' element={<Components />} />
        <Route path='/components/button/*' element={<ButtonDocument />} />
        {/* Patterns */}
        <Route path='/patterns' element={<Patterns />} />
        {/* Resources */}
        <Route path='/resources' element={<Resources />} />
      </Routes>
    </Page>
  );
}

import React from 'react';
import styled from 'styled-components';
import { Route, Routes } from 'react-router-dom';

import Header from '@src/layouts/Header';
import Sidebar from '@src/layouts/Sidebar';

import Brand from '@src/navigations/Brand';
import Foundations from '@src/navigations/Foundations';
import Content from '@src/navigations/Content';
import Components from '@src/navigations/Components';
import Patterns from '@src/navigations/Patterns';
import Resources from '@src/navigations/Resources';
import ButtonDocument from '@src/components/Button/Button.Document';

const Page = styled.section`
  display: flex;
`;

export default function DesignSystem() {
  return (
    <Page>
      <Header />
      <Sidebar />
      <Routes>
        {/* Brand */}
        <Route path='/brand' element={<Brand />} />
        {/* <Route path='/brand/-/*' element={<ButtonDocument />} /> */}

        {/* Foundations */}
        <Route path='/foundations' element={<Foundations />} />
        {/* <Route path='/foundations/-/*' element={<ButtonDocument />} /> */}

        {/* Content */}
        <Route path='/content' element={<Content />} />
        {/* <Route path='/components/-/*' element={<ButtonDocument />} /> */}

        {/* Components */}
        <Route path='/components' element={<Components />} />
        <Route path='/components/button/*' element={<ButtonDocument />} />

        {/* Patterns */}
        <Route path='/patterns' element={<Patterns />} />
        {/* <Route path='/patterns/-/*' element={<ButtonDocument />} /> */}

        {/* Resources */}
        <Route path='/resources' element={<Resources />} />
        {/* <Route path='/resources/-/*' element={<ButtonDocument />} /> */}
      </Routes>
    </Page>
  );
}

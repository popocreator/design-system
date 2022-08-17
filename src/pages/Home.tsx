import React from 'react';
import styled from 'styled-components';

import Header from '@src/layouts/Header';
import Sidebar from '@src/layouts/Sidebar';
import Post from '@src/layouts/Post';
import { useRecoilState } from 'recoil';
import { Route, Routes } from 'react-router-dom';
import ButtonDocument from '@src/components/ButtonDocument';
import Components from '@src/components';

const Page = styled.section`
  display: flex;
`;

export default function Home() {
  const headerMenu = [
    { id: 'h-1', name: 'Brand', to: '/brand' },
    { id: 'h-2', name: 'Foundations', to: '/foundations' },
    { id: 'h-3', name: 'Content', to: '/content' },
    { id: 'h-4', name: 'Components', to: '/components' },
    { id: 'h-5', name: 'Patterns', to: '/patterns' },
    { id: 'h-6', name: 'Resources', to: '/resources' }
  ];

  const sidebarMenu = [
    {
      id: 'h-1',
      name: 'Brand',
      to: '/brand',
      children: [
        { id: 'hb-1', name: 'Foundations', to: '/foundations' },
        { id: 'hb-2', name: 'Foundations', to: '/foundations' },
        { id: 'hb-3', name: 'Foundations', to: '/foundations' }
      ]
    },
    { id: 'h-2', name: 'Foundations', to: '/foundations' },
    { id: 'h-3', name: 'Content', to: '/content' },
    { id: 'h-4', name: 'Components', to: '/components' },
    { id: 'h-5', name: 'Patterns', to: '/patterns' },
    { id: 'h-6', name: 'Resources', to: '/resources' }
  ];

  return (
    <Page>
      <Header menus={headerMenu} />
      <Sidebar menus={sidebarMenu} />
      <Routes>
        {/* Components */}
        <Route path='/components' element={<Components />} />
        <Route path='/components/button/*' element={<ButtonDocument />} />
      </Routes>
    </Page>
  );
}

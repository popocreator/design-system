import React from 'react';
import styled from 'styled-components';

import Header from '@src/layouts/Header';
import Sidebar from '@src/layouts/Sidebar';
import Post from '@src/layouts/Post';
import { useRecoilState } from 'recoil';
import { Route, Routes } from 'react-router-dom';
import ButtonDocument from '@src/components/Button/Button.Document';
import Components from '@src/components';

const Page = styled.section`
  display: flex;
`;

export default function Home() {
  const headerMenu = [{ id: 'h-4', name: 'Components', to: '/components' }];

  const sidebarMenu = [
    {
      id: 'h-4-1',
      name: 'Avatar',
      to: '/components/avatar'
    },
    {
      id: 'h-4-2',
      name: 'Avatar group',
      to: '/components/avatar-group'
    },
    {
      id: 'h-4-2',
      name: 'Badge',
      to: '/components/badge'
    }
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

import { linkState } from '@src/store';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';

const Wrapper = styled.aside`
  z-index: 20;
  position: absolute;
  min-height: 100vh;
  height: 100%;
  width: var(--sidebar-width);
  padding-top: 60px;
`;

const Container = styled.div`
  flex-direction: column;
  padding-top: 30px;
  width: 100%;
`;

const Title = styled.h2`
  text-transform: uppercase;
  font-weight: 800;
  opacity: 0.2;
  font-size: 12px;
  letter-spacing: 1.2px;
  padding-left: 30px;
`;

const MenuList = styled.ul<{ inner?: boolean }>`
  margin-top: ${({ inner }) => (inner ? '0px' : '10px')};
`;

const Menu = styled.li<{ inner?: boolean; selected?: boolean }>`
  & > a {
    display: flex;
    text-decoration: none;
    padding: 10px 30px;
    font-weight: 400;
    font-size: 14px;
    cursor: pointer;
    color: #2c3333;
    padding-left: ${({ inner }) => (inner ? '45px' : '30px')};
    background-color: ${({ selected }) => (selected ? '#2c333311' : '#ffffff')};
  }
  & > a:hover {
    background-color: #2c333311;
  }
`;

type IMenu = {
  id?: string;
  name: string;
  to: string;
  children?: IMenu[];
};

export default function Sidebar() {
  const path = useLocation().pathname;
  const links = useRecoilValue(linkState);
  const relatedPath = (path: string, to: string) => {
    return path.indexOf(to + '/') !== -1 || path === to;
  };
  const sideMenus = () => {
    const key = path.split('/')[2];
    if (key === 'brand') return links[key];
    else if (key === 'foundations') return links[key];
    else if (key === 'content') return links[key];
    else if (key === 'components') return links[key];
    else if (key === 'patterns') return links[key];
    else if (key === 'resources') return links[key];
    else return [];
  };

  return (
    <Wrapper>
      <Container>
        <Title>{path.split('/')[2]}</Title>
        <MenuList>
          {sideMenus().map((menu: IMenu, key) => (
            <Menu key={key} selected={relatedPath(path, menu.to)}>
              <Link to={menu.to}>{menu.name}</Link>
              {menu.children && (
                <MenuList inner>
                  {menu.children.map((childMenu: IMenu, childKey) => (
                    <Menu
                      inner
                      key={childKey}
                      selected={relatedPath(path, childMenu.to)}
                    >
                      <Link to={childMenu.to}>{childMenu.name}</Link>
                    </Menu>
                  ))}
                </MenuList>
              )}
            </Menu>
          ))}
        </MenuList>
      </Container>
    </Wrapper>
  );
}

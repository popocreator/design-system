import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled, { css } from 'styled-components';

const Wrapper = styled.header`
  font-family: 'Roboto', sans-serif;
  z-index: 30;
  position: fixed;
  width: 100%;
  height: 56px;
  align-items: center;
  padding-left: 30px;
  padding-right: 30px;
  background-color: #fff;
  &::after {
    height: 4px;
    position: absolute;
    top: 100%;
    right: 0;
    left: 0;
    background: linear-gradient(
      180deg,
      rgba(9, 30, 66, 0.13) 0,
      rgba(9, 30, 66, 0.13) 1px,
      rgba(9, 30, 66, 0.08) 1px,
      rgba(9, 30, 66, 0) 4px
    );
    content: '';
  }
`;

const Logo = styled.h1`
  cursor: pointer;
  & a {
    text-decoration: none;
  }
  & span {
    font-family: 'Blinker', sans-serif;
    font-size: 24px;
    line-height: 24px;
  }
  & span:first-child {
    color: #395b64;
    font-weight: 700;
    letter-spacing: 1.2px;
    margin-right: 2px;
  }
  & span:last-child {
    color: #2c3333;
    font-weight: 300;
  }
`;

const MenuList = styled.ul`
  display: flex;
  flex-direction: row;
  margin-left: 30px;
  height: 100%;
`;

const Menu = styled.li<{ selected?: boolean }>`
  position: relative;
  display: flex;
  align-items: center;
  margin-right: 10px;
  height: 100%;
  & a {
    text-decoration: none;
    padding: 5px 8px;
    border-radius: 4px;
    font-size: 14px;
    cursor: pointer;
    color: ${({ selected }) => (selected ? '#395b64' : '#2c3333')};
  }
  & a:hover {
    background-color: #ebecf0;
    color: #395b64;
  }
  & a:after {
    content: '';
    height: 3px;
    position: absolute;
    left: 8px;
    right: 8px;
    bottom: 0;
    border-radius: 3px;
    ${({ selected }) =>
      css`
        background-color: ${selected ? '#395b64' : '#ffffff'};
      `}
  }
`;

// .h-link.selected::after {
// 	background-color: #395b64;
// }

type IMenu = {
  id?: string;
  name: string;
  to: string;
};

type Props = {
  menus: IMenu[];
};

export default function Header({ menus }: Props) {
  const path = useLocation().pathname;
  return (
    <Wrapper>
      <Logo>
        <Link to='/'>
          <span>POPO</span>
          <span>Design System</span>
        </Link>
      </Logo>
      <MenuList>
        {menus.map((menu, key) => (
          <Menu key={key} selected={menu.to === path}>
            <Link title={menu.name} to={menu.to}>
              {menu.name}
            </Link>
          </Menu>
        ))}
      </MenuList>
    </Wrapper>
  );
}

import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

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
  margin-top: ${({ inner }) => (inner ? "0px" : "10px")};
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
    padding-left: ${({ inner }) => (inner ? "45px" : "30px")};
    background-color: ${({ selected }) => (selected ? "#2c333311" : "#ffffff")};
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

type Props = {
  menus: IMenu[];
};

export default function Sidebar({ menus }: Props) {
  return (
    <Wrapper>
      <Container>
        <Title>Components</Title>
        <MenuList>
          {menus.map((menu, key) => (
            <Menu key={key} selected={key === 2}>
              <Link to={menu.to}>{menu.name}</Link>
              {menu.children && (
                <MenuList inner>
                  {menu.children.map((childMenu, childKey) => (
                    <Menu inner key={childKey}>
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

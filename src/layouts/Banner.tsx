import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.section`
  width: 100%;
  background-color: rgba(57, 91, 100, 0.05);
  height: 224px;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  flex-direction: column;
  margin: 0 90px;
`;

const Title = styled.h2`
  margin-top: 60px;
  font-size: 36px;
  max-width: var(--content-width);
`;

const Description = styled.p`
  margin-top: 15px;
  font-size: 16px;
  opacity: 0.6;
  font-weight: 400;
  max-width: var(--content-width);
`;

const TabList = styled.ul`
  display: flex;
  margin-top: auto;
  flex-direction: row;
  position: relative;
  max-width: calc(100% - var(--index-width));
  &:before {
    content: '';
    border-radius: 2px;
    bottom: 0px;
    margin: 0px;
    position: absolute;
    width: calc(100%);
    left: 4px;
    right: 4px;
    background-color: #ebecf0;
    height: 2px;
  }
`;

const Tab = styled.ul<{ selected?: boolean }>`
  position: relative;
  & > a {
    position: relative;
    display: flex;
    text-decoration: none;
    text-transform: capitalize;
    padding: 8px 12px;
    color: ${({ selected }) => (selected ? '#395b64' : '#8099a1')};
  }
  & > a:before {
    content: '';
    border-radius: 2px;
    bottom: 0px;
    margin: 0px;
    position: absolute;
    width: inherit;
    left: 4px;
    right: 4px;
    height: 2px;
    background-color: ${({ selected }) => (selected ? '#395b64' : '#ebecf0')};
  }
`;

type Props = {
  title?: string;
  description?: string;
  basePath: string;
  routes: any;
};

export default function Banner({
  title,
  description,
  basePath,
  routes
}: Props) {
  const path = useLocation().pathname;

  const selected = (_routes: string[]) => {
    return _routes.includes(path);
  };

  return (
    <Wrapper>
      <Container>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <TabList>
          {Object.keys(routes).map((name, i) => (
            <Tab
              key={i}
              selected={selected([routes[name], i === 0 ? basePath : ''])}
            >
              <Link to={routes[name]}>{name}</Link>
            </Tab>
          ))}
        </TabList>
      </Container>
    </Wrapper>
  );
}

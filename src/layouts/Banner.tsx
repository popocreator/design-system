import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled, { css } from 'styled-components';

const Wrapper = styled.section`
  width: 100%;
  background-color: rgba(95, 153, 169, 0.05);
  min-height: 224px;
`;

const Container = styled.div<{ introduction?: boolean }>`
  /* background-color: rgba(22, 136, 167, 1); */
  width: 100%;
  height: 100%;
  flex-direction: row;
  margin: 0 90px;
  ${({ introduction }) => {
    if (!introduction) {
      return css`
        margin-right: 0;
      `;
    }
  }}
`;

const BannerInfo = styled.div`
  flex-direction: column;
  width: 100%;
`;

const BannerImage = styled.img`
  border: 0;
  height: '100%';
  max-width: 384px;
  margin-left: auto;
`;

const Title = styled.h2<{ introduction?: boolean }>`
  /* margin-top: 60px; */
  margin-top: ${({ introduction }) => (introduction ? '96px' : '60px')};
  font-size: 36px;
  max-width: var(--content-width);
`;

const Description = styled.p`
  margin-top: 15px;
  font-size: 16px;
  opacity: 0.6;
  font-weight: 400;
  max-width: var(--content-width);
  line-height: 1.4;
`;

const TabList = styled.ul`
  display: flex;
  margin-top: auto;
  flex-direction: row;
  position: relative;
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

const Tab = styled.li<{ selected?: boolean }>`
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
  basePath?: string;
  routes?: any;
  imageUrl?: string;
};

export default function Banner({
  title,
  description,
  basePath = '/',
  routes,
  imageUrl = ''
}: Props) {
  const path = useLocation().pathname;

  const selected = (_routes: string[]) => {
    return _routes.includes(path);
  };

  return (
    <Wrapper>
      <Container introduction={!!imageUrl}>
        <BannerInfo>
          <Title introduction={!!imageUrl}>{title}</Title>
          <Description>{description}</Description>
          {!!routes && (
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
          )}
        </BannerInfo>
        {!!imageUrl && <BannerImage src={imageUrl} />}
      </Container>
    </Wrapper>
  );
}

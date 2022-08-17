import React, { ReactNode } from 'react';
import styled from 'styled-components';
import Contents from './Contents';

const Wrapper = styled.section`
  width: 100%;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 90px;
  flex-direction: row;
  flex-wrap: wrap;
  & > h2 {
    font-size: 24px;
    margin-top: 40px;
    margin-bottom: 15px;
  }
  & > h3 {
    font-size: 20px;
    padding-top: 15px;
    margin-top: 15px;
    margin-bottom: 15px;
  }
  & > p {
    font-size: 15px;
    font-weight: 300;
    line-height: 1.4;
    margin-bottom: 10px;
  }
  & > p code {
    border-radius: 3px;
    padding: 2px 0.5ch;
    margin: 0px 1px;
    background-color: #f4f5f7;
  }
`;

type Props = {
  children?: ReactNode;
};

export default function Introduction({ children }: Props) {
  return (
    <Wrapper>
      <Container>{children}</Container>
    </Wrapper>
  );
}

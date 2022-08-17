import React, { ReactNode } from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  z-index: 10;
  position: absolute;
  min-height: 100vh;
  width: 100%;
  padding-left: var(--sidebar-width);
  padding-top: 56px;
`;

const Container = styled.div`
  width: 100%;
  flex-direction: column;
  align-items: center;
  border-left: 1px solid #ebecf0;
`;

type Props = {
  children?: ReactNode;
};

export default function Post({ children }: Props) {
  return (
    <Wrapper>
      <Container>{children}</Container>
    </Wrapper>
  );
}

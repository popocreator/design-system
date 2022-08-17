import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.a`
  width: calc(33.3333% - 10px);
  margin-right: 15px;
  margin-bottom: 15px;
  cursor: pointer;
  color: inherit;
  padding: 24px;
  border-radius: 4px;
  background: var(--ds-surface-raised, #ffffff);
  box-shadow: var(
    --ds-shadow-raised,
    0 1px 1px rgba(9, 30, 66, 0.25),
    0 0 1px 0 rgba(9, 30, 66, 0.31)
  );
  overflow: hidden;
  &:nth-child(3n) {
    margin-right: 0;
  }
`;

interface Props {
  title: '';
  description: '';
}

export default function Card({}: Props) {
  return <Wrapper>Card</Wrapper>;
}

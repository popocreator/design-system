import { faLink } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled(Link)`
  text-decoration: none;
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

const Icon = styled.span`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  border-radius: 4px;
  background-color: #395b64;
  color: #fff;
`;

const Thumbnail = styled.img``;

const Title = styled.h2`
  margin-top: 16px;
  font-size: 24px;
`;

const Description = styled.h2`
  margin-top: 8px;
  overflow-wrap: break-word;
  font-size: 14px;
  line-height: 1.4;
  font-weight: 400;
`;

interface Props {
  title: string;
  description: string;
  to: string;
}

export default function Card({ title, description, to }: Props) {
  return (
    <Wrapper to={to}>
      <Icon>
        <FontAwesomeIcon icon={faLink} />
      </Icon>
      <Thumbnail />
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Wrapper>
  );
}

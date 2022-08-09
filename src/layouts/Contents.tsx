import React from "react";
import styled from "styled-components";

const Wrapper = styled.aside`
  display: block;
  width: var(--index-width);
  margin-left: auto;
  padding-top: 30px;
`;

const Container = styled.div`
  position: sticky;
  top: 90px;
  flex-direction: column;
  &:after {
    content: "";
    width: 1px;
    height: 100%;
    background-color: #395b64;
    position: absolute;
    left: -15px;
    top: 0;
    opacity: 0.2;
  }
  &:before {
    content: "";
    width: 100%;
    height: 30%;
    /* background-color: #8099a155; */
    position: absolute;
    left: -15px;
    top: 0;
    opacity: 0.2;
    z-index: -1;
  }
`;

const Title = styled.h2`
  text-transform: uppercase;
  font-weight: 400;
  font-size: 11px;
  opacity: 0.7;
  letter-spacing: 1.2px;
  padding: 5px 0;
  margin-bottom: 5px;
`;

const IndexList = styled.ul``;

const Index = styled.li`
  & > a {
    display: block;
    text-decoration: none;
    padding: 6px 0;
    font-weight: 400;
    font-size: 11px;
    color: #2c333399;
    cursor: pointer;
  }
`;

export default function Contents() {
  return (
    <Wrapper>
      <Container>
        <Title>contents</Title>
        <IndexList>
          <Index data-top="320">
            <a>Hello1</a>
          </Index>
        </IndexList>
      </Container>
    </Wrapper>
  );
}

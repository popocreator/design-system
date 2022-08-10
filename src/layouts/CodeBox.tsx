import React, { ReactNode } from "react";
import styled from "styled-components";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink, faRocket } from "@fortawesome/free-solid-svg-icons";

const Wrapper = styled.div`
  z-index: 1;
  border-radius: 4px;
  box-shadow: 0 0 0 1.2px var(--ds-border, #ebecf0);
  width: 100%;
  flex-direction: column;
  margin-top: 8px;
  margin-bottom: 15px;
`;

const RenderView = styled.div`
  padding: 24px;
  background-color: var(--ds-surface, #ffffff);
  background-image: linear-gradient(
      45deg,
      var(--ds-surface-sunken, #f9f9fa) 25%,
      transparent 25%
    ),
    linear-gradient(
      135deg,
      var(--ds-surface-sunken, #f9f9fa) 25%,
      transparent 25%
    ),
    linear-gradient(
      45deg,
      transparent 75%,
      var(--ds-surface-sunken, #f9f9fa) 75%
    ),
    linear-gradient(
      135deg,
      transparent 75%,
      var(--ds-surface-sunken, #f9f9fa) 75%
    );
  background-size: 20px 20px;
  background-position: 0px 0px, 10px 0px, 10px -10px, 0px 10px;
  border-radius: 3px 3px 0px 0px;
  border-bottom: 1px solid var(--ds-border, #ebecf0);
`;

const CodeView = styled.div`
  flex: 1;
  display: block;
  width: 100%;
  /* padding: 0 24px !important; */
  background-color: #8099a111;
  position: relative;
  font-size: 12px;
  pre {
    background-color: #8099a111;
    margin: 0 !important;
    padding: 0 !important;
    padding-left: 10px !important;
    padding-top: 4px !important;
    padding-bottom: 20px !important;
  }
`;

const CodeToolList = styled.div`
  position: absolute;
  top: 4px;
  right: 4px;
`;

const CodeTool = styled.button`
  width: 32px;
  height: 32px;
  border: none;
  font-size: 18px;
  border-radius: 4px;
  cursor: pointer;
  background: none;
  margin-left: 4px;
  position: relative;
  & > span {
    display: flex;
    background-color: #2c3333;
    color: #ebecf0;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, -140%);
    font-size: 12px;
    white-space: nowrap;
    padding: 3px 7px;
    border-radius: 3px;
    opacity: 0;
  }
  &:hover {
    background-color: #8099a133;
    span {
      opacity: 1;
    }
  }
  svg {
    opacity: 0.5;
    font-size: 16px;
  }
`;

type Props = {
  component: ReactNode;
  code: string;
};

export default function CodeBox({ component, code }: Props) {
  return (
    <Wrapper>
      <RenderView>{component}</RenderView>
      <CodeView>
        <CodeToolList>
          <CodeTool>
            <span>Open codepen</span>
            <FontAwesomeIcon icon={faRocket} />
          </CodeTool>
          <CodeTool>
            <span>Copy code</span>
            <FontAwesomeIcon icon={faLink} />
          </CodeTool>
        </CodeToolList>
        <SyntaxHighlighter language="jsx" style={oneLight}>
          {code}
        </SyntaxHighlighter>
      </CodeView>
    </Wrapper>
  );
}

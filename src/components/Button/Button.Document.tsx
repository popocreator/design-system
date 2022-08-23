import React from 'react';
import { useLocation } from 'react-router-dom';

import Article from '@src/layouts/Article';
import Banner from '@src/layouts/Banner';
import Post from '@src/layouts/Post';
import CodeBox from '@src/layouts/CodeBox';

import useDocumentContents from '@src/components/useDocumentContents';
import Button from '@src/components/Button';
import ButtonCode from '@src/components/Button/Button.Code';

export default function ButtonDocument() {
  const path = useLocation().pathname;
  const basePath = '/components/button';
  const routes = {
    examples: `${basePath}/examples`,
    code: `${basePath}/code`,
    usage: `${basePath}/usage`
  };

  const selected = (_routes: string[]) => {
    return _routes.includes(path);
  };

  return (
    <Post>
      <Banner
        title='Button'
        description='An avatar is a visual representation of a user or entity.'
        basePath={basePath}
        routes={routes}
      />
      {selected([basePath, routes.examples]) && <Examples />}
      {selected([routes.code]) && <Code />}
      {selected([routes.usage]) && <Usage />}
    </Post>
  );
}

function Examples() {
  const tabId = 'examples';
  useDocumentContents(tabId);
  return (
    <Article id={tabId}>
      <h2>Button Example</h2>
      <h3>부제목</h3>
      <p>
        This is <code>Button</code> component example.
      </p>
      <p>
        안녕하세요~ 이 버튼 예제입니다. <code>Hello</code>
      </p>
      <CodeBox component={<Button />} code={ButtonCode} />
    </Article>
  );
}

function Code() {
  const tabId = 'code';
  useDocumentContents(tabId);
  return (
    <Article id={tabId}>
      <h2>Button Code</h2>
      <p>
        This is <code>Button</code> component example.
      </p>
      <CodeBox component={<Button />} code={ButtonCode} />
    </Article>
  );
}

function Usage() {
  const tabId = 'usage';
  useDocumentContents(tabId);
  return (
    <Article id={tabId}>
      <h2>Button Usage</h2>
      <p>
        This is <code>Button</code> component example.
      </p>
      <CodeBox component={<Button />} code={ButtonCode} />
    </Article>
  );
}

import React from 'react';

import Banner from '@src/layouts/Banner';
import Post from '@src/layouts/Post';
import Introduction from '@src/layouts/Introduction';
import Card from '@src/layouts/Card';

export default function Components() {
  const basePath = '/components';
  return (
    <Post>
      <Banner
        title='Components'
        description='Components are the reusable building blocks of our design system. Each component meets a specific interaction or UI need, and has been specifically created to work together to create patterns and intuitive user experiences.'
        imageUrl='https://atlassian.design/static/8d95c802a65943023de5eea0f2a4f0f7/foundations@2x.png'
      />
      <Introduction>
        <Card title='' description='' />
        <Card title='' description='' />
        <Card title='' description='' />
        <Card title='' description='' />
        <Card title='' description='' />
        <Card title='' description='' />
        <Card title='' description='' />
        <Card title='' description='' />
        <Card title='' description='' />
        <Card title='' description='' />
        <Card title='' description='' />
        <Card title='' description='' />
        <Card title='' description='' />
        <Card title='' description='' />
      </Introduction>
    </Post>
  );
}

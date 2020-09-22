import React from 'react';
import { storiesOf } from '@storybook/react';
import Card from './index';
import Card__Menu from './menus';
import { Content } from '../Layout/Content';

storiesOf('UI | Card', module)
  .add('default', () => {
    return (
      <Content>
        <Card />
      </Content>
    )
  })
  .add('menu', () => {
    return (
      <Content>
        <Card>
          <Card__Menu />
        </Card>
      </Content>
    )
  })
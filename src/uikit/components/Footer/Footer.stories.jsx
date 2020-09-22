import React from 'react';
import { storiesOf } from '@storybook/react';
import Footer from './index';
import { Content } from '../Layout/Content';

storiesOf('UI | Footer', module)
  .add('default', () => 
    <Content>
      <Footer />
    </Content>
  )
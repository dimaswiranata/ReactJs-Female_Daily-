import React from 'react';
import { storiesOf } from '@storybook/react';
import Header from './index';
import {Content} from '../Layout/Content'

storiesOf('UI | Header', module)
  .add('example', () => <Content><Header /></Content>)
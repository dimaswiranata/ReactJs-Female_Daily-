import React from 'react';
import { storiesOf } from '@storybook/react';
import { H1, H2, Body } from './Text';

storiesOf('Component | Text', module)
  .add('all', () => {
    return (
        <div className="p-5">
          <H1>Heading 1</H1>
          <H2>Heading 2</H2>
          <Body>This is body</Body>
        </div>
    )
  });
import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import Message from './Message';

storiesOf('Message', module)
  .add('default', () => (
    <Message />
  ));

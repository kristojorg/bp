import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import Message from './Message';
import Phone from './Phone';
import styled from 'styled-components';
import {host} from 'storybook-host';

storiesOf('Message', module)
  .addDecorator(host({
      title: 'An iMessage imitation',
      align: 'center bottom',
      height: '100%',
      width: 400,
      backdrop: 'papayawhip',
      background: 'white'
    }))
  .add('default', () => (
    <Wrapper>
      <Message>
        Hi.
      </Message>
    </Wrapper>
  ))
  .add('typing', () => (
    <Wrapper>
      <Message typing>
        Hi.
      </Message>
    </Wrapper>
  ))
  .add('phone', () => (
    <Wrapper>
      <Phone />
    </Wrapper>
  ))
  .add('all', () => (
    <Wrapper>
      <Message>
        Beautiful rainbow colors.
        Looks Like lots of real estate out in Texas
        Dose your lodging have air conditioning?  Looks warm. Where next?
        Would I like it?
        Howdy.
      </Message>
      <Message>
        Are you home? Your trip look like so much fun. Where did the trip end.
        14 ft. of snow at Tahoe. 😊rather fantastic. Come west.
        Howdy
      </Message>
      <Message >
        Where did you find them?
        I am so happy you like them.  I love state fairs. You article made me think of the end of summer and warm warm days of Aug. Sacramento, Ca had a great state fair either the very end of Aug. or just before sept. Love the food section and to see who got the blue ribbons
      </Message>
      <Message typing />
    </Wrapper>
  ));
const Wrapper = styled.div`
  width: 400px;
  flex-direction: column;
`

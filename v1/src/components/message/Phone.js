import React from 'react';
import styled from 'styled-components';
import { Keyframes, Frame } from 'react-keyframes'

import Message from './Message';

export default () => (
  <Wrapper loop={false} component="div" >
    <Frame duration={1500}>
      <Message typing />
    </Frame>
    <Frame duration={500}>
      <Message>
        Beautiful rainbow colors.
        Looks Like lots of real estate out in Texas
        Dose your lodging have air conditioning?  Looks warm. Where next?
        Would I like it?
        Howdy.
      </Message>
    </Frame>
    <Frame duration={2000}>
      <Message>
        Beautiful rainbow colors.
        Looks Like lots of real estate out in Texas
        Dose your lodging have air conditioning?  Looks warm. Where next?
        Would I like it?
        Howdy.
      </Message>
      <Message typing />
    </Frame>
    <Frame duration={1500}>
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
    </Frame>
    <Frame duration={3000}>
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
      <Message typing />
    </Frame>
    <Frame duration={10000}>
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
    </Frame>
  </Wrapper>
);
// typing for a hot sec
// First message for even shorter
// first message and typing

const Wrapper = styled(Keyframes)`
  flex: 1;
  display: flex;
  transition: all 0.5s ease-out;
  flex-direction: column;
  padding: 5px;
  overflow-y: scroll;
`

import React from 'react'
import styled from 'styled-components';
import Markdown from 'react-remarkable'
import Bow1 from '../assets/Bow1.png';


export default () => (
  <OuterWrapper>
    <Wrapper>
      <Message>
        <Markdown source={md}
          options={{
            breaks:true,
            html:true,
          }}
        />
      </Message>
      <Bow
        src={Bow1}
        height="20%"
        rotate={10}
        right="10%"
        top="15%"
        opacity="0.1"
      />
    </Wrapper>
  </OuterWrapper>
)
const Wrapper = styled.div`
  display: flex;
  align-items: stretch;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-around;
  flex: 1;
  max-width: 600px;
`
const OuterWrapper = styled.div`
  margin-top: 90px;
  max-width: 935px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-start;
  flex: 1;
`
const Message = styled.div`
  font-family: Helvetica;
  font-size: 20px;
  padding: 0px 10px;

  p {
    margin: 1.5em 0;
  }
  .howdy {
    color: ${props => props.theme.red};
    ${''/* font-weight: bold; */}
  }
`
const Bow = styled.img`
  position: absolute;
  left: ${props => props.left};
  height: ${props => props.height};
  transform: rotate(${props=> props.rotate}deg);
  top: ${props => props.top};
  right: ${props => props.right};
  opacity: ${props => props.opacity};
`
const md = `
Beautiful rainbow colors.
Looks Like lots of real estate out in Texas
Dose your lodging have air conditioning?  Looks warm. Where next?
Would I like it?
<span class="howdy">Howdy</span>


<span class="howdy">Are you home? Your trip look like so much fun. Where did the trip end.
14 ft. of snow at Tahoe. 😊rather fantastic. Come west.</span>
<span class="howdy">Howdy</span>


Where did you find them?
I am so happy you like them.  I love state fairs. You article made me think of the end of summer and warm warm days of Aug. Sacramento, Ca had a great state fair either the very end of Aug. or just before sept. Love the food section and to see who got the blue ribbons
<span class="howdy">Howdy</span>
`

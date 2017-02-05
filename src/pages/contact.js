import React from 'react'
import styled from 'styled-components';
import Markdown from 'react-remarkable'
import Bow1 from '../assets/Bow1.png';
import Phone from '../components/message/Phone';
import Rose from '../assets/Rose.svg';


export default () => (
  <OuterWrapper>
    <Wrapper>
      <Phone />
      <Bow
        src={Bow1}
        height="20%"
        rotate={10}
        right="10%"
        top="90px"
        opacity="0.1"
      />
      <Bow
        src={Rose}
        height="40%"
        rotate={10}
        left="25%"
        top="40%"
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
  justify-content: flex-start;
  flex: 1;
  max-width: 600px;
  max-height: 100%;
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
const Bow = styled.img`
  position: absolute;
  left: ${props => props.left};
  height: ${props => props.height};
  transform: rotate(${props=> props.rotate}deg);
  top: ${props => props.top};
  right: ${props => props.right};
  opacity: ${props => props.opacity};
  z-index: 100;
`

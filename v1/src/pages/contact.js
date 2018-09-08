import React from 'react'
import styled from 'styled-components';
import Bow1 from '../assets/Bow1.png';
import Phone from '../components/message/Phone';
import Footer from '../components/Footer';
import Rose from '../assets/Rose.svg';

export default () => (
  <OuterWrapper>
    <Wrapper >
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
    <Footer />
  </OuterWrapper>
);
const Wrapper = styled.div`
  display: flex;
  flex: 1;
  max-width: 600px;
  ${''/* height: 100%; */}
  flex-direction: column;
  max-width: 935px;
  min-width: 700px;
  margin: auto;
`
const OuterWrapper = styled.div`
  margin-top: 90px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
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

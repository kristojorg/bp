import React from 'react';
import styled from 'styled-components';
import HomeImage from './unnamed.jpg';
import Bow1 from '../assets/Bow1.png';
import Bow2 from '../assets/Bow2.svg';
import Sparkle from '../components/Sparkle';


export default () => (
  <Wrapper>
    <HomePage>
      <HomeImg alt="home image" src={HomeImage} />
      <Bow
        src={Bow1}
        height="15%"
        rotate={-10}
        left="10%"
      />
      <Bow
        src={Bow2}
        height="14%"
        rotate={14}
        left="60%"
        top="30%"
      />
    </HomePage>
    <Sparkle />
  </Wrapper>
)

const Wrapper = styled.div`
  flex: 1;
  display: flex;
`
const HomeImg = styled.img`
  width: 90vw;
  height: 90vh;
  z-index: -1;
  object-fit: cover;
`
const HomePage = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`
/* PROPS
  - rotate
  - x
  - y
  - height
*/
const Bow = styled.img`
  position: absolute;
  left: ${props => props.left};
  height: ${props => props.height};
  transform: rotate(${props=> props.rotate}deg);
  top: ${props => props.top ? props.top : '50%'};
`

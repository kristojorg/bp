import React from 'react';
import styled, {keyframes, css} from 'styled-components';
import bubbleEnd from './BubbleEnd.svg';
import { Keyframes, Frame } from 'react-keyframes'

const redBackground = '#ffe9e6';
const darkRed = '#c5392a';

export default ({children, typing = false}) => (
  <Wrapper typing={typing}>
    <Message>
      {typing ?
        <Typing />
        : children}
    </Message>
    <BubbleEnd src={bubbleEnd} />
  </Wrapper>
)
const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.08);
  }
`;
const Wrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  position: relative;
  ${props => props.typing && anim};
  ${props => props.typing && 'flex: 1'};
  ${props => !props.typing && 'transition: flex 0.5s ease-out'};
  margin-top: 2px;
  margin-bottom: 2px;

`
const anim = css`
  transform-origin: left bottom;
  animation:  1s ${pulse} infinite;
  animation-timing-function: ease-out;
  animation-direction: alternate;
`;
const systemFont = `font-family: -apple-system, BlinkMacSystemFont,
    "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell",
    "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
`;
const Message = styled.div`
  border-radius: 17px;
  background-color: ${redBackground};
  color: ${darkRed};
  padding: 7px 15px 7px 12px;
  ${systemFont}
  z-index: 5;
  margin-left: 6px;
  max-width: 255px;
  margin-bottom: 2px;
  min-height: 18px;
  min-width: 32px;
  ${props => !props.typing && `display: flex; justify-content: center; align-items: center`};
`
const BubbleEnd = styled.img`
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 0;
`
const dur = 350;
const Typing = () => (
  <Keyframes loop={true} component="div">
    <DotWrapper duration={dur} >
      <Dot opacity={0.3} />
      <Dot opacity={0.7} />
      <Dot />
    </DotWrapper>
    <DotWrapper duration={dur} >
      <Dot />
      <Dot opacity={0.3} />
      <Dot opacity={0.7} />
    </DotWrapper>
    <DotWrapper duration={dur} >
      <Dot opacity={0.7}/>
      <Dot />
      <Dot opacity={0.3} />
    </DotWrapper>
  </Keyframes>
)
const DotWrapper = styled(Frame)`
  display: flex;
  justify-content: center;
  align-items: center;
`
const Dot = styled.div`
  background: rgb(197, 57, 42);
  opacity: ${props => props.opacity};
  border-radius: 100%;
  width: 9px;
  height: 9px;
  margin: 6px 2px;
  transition: all 0.35s ease-out;
`

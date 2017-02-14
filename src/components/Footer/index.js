import React from 'react'
import styled from 'styled-components'
import {At, Insta} from './icons.js'
import {media} from '../styled'

export default () => (
  <Wrapper>
    <Item href="mailto:beatricehelman@gmail.com" target='_blank'>
      <At /> EMAIL
    </Item>
    <Item href="https://www.instagram.com/beahelman/" target='_blank'>
      <Insta /> INSTA
    </Item>
  </Wrapper>
);

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  margin: 10px 0;

`
const Item = styled.a`
  border-bottom: 3px solid #ffe9e6;
  color: ${props => props.theme.red};
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  ${media.tabletUp`
    font-size: 30px;
    border-bottom: 6px solid #ffe9e6;
  `}
`

import React from 'react'
import styled from 'styled-components'
import {At, Insta} from './icons.js'

export default () => (
  <Wrapper>
    <Item href="mailto:beatricehelman@gmail.com">
      <At /> EMAIL
    </Item>
    <Item href="https://www.instagram.com/beahelman/">
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
  margin: 5px 0;
`
const Item = styled.a`
  border-bottom: 3px solid #ffe9e6;
  color: ${props => props.theme.red};
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;

`

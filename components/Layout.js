import React from 'react';
import styled from 'styled-components';
import Link from 'next/link'

import Head from './Head';
import { media } from '../components/styled';

export default ({ children, title}) => (
  <AppWrapper>
    <Head title={title} />
    <Header>
      <Link>
        <Icon src="../static/Bea.svg" />
        {/* <Title href="/">Bea Helman</Title> */}
      </Link>
    </Header>
    <Body>
      <SideNav>
        <Link><NavLink href="/photos">Photos</NavLink></Link>
        <Link><NavLink href="/writing">Writing</NavLink></Link>
        <Link><NavLink href="/published">Published</NavLink></Link>
        <Link><NavLink href="/contact">Contact</NavLink></Link>
      </SideNav>
      <Content>
        {children}
      </Content>
    </Body>
    <Footer>
      <Email href="mailto:beatricehelman@gmail.com">
        beatricehelman@gmail.com
      </Email>
    </Footer>
  </AppWrapper>
)

const AppWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`
const Header = styled.header`
  display: flex;
  justify-content: flex-end;
  height: 0px;
`
const Icon = styled.img`
  height: 80px;
  padding-top: 45px;
  padding-right: 65px;
`
const Title = styled.a`
  font-size: 2em;
`
const Body = styled.div`
  display: flex;
  flex: 1;
`
const SideNav = styled.div`
  width: 0;
  display: flex;
  flex-direction: column;
  z-index: 2;
`
const NavLink = styled.a`
  margin: 1em;
  font-size: 2em;
  font-family: 'Shrikhand';
  color: #c5392a;
  line-height: 1;
  text-decoration: none;
  transform: rotate(-10deg);

  &:hover {
    box-shadow: inset 0 -4px 0 #673831;
  }
`
const Content = styled.div`
  flex: 1;
  display: flex;
`
const Email = styled.a`

`
const Footer = styled.footer`
  display:flex;
  align-items: center;
  justify-content: center;
`

import React from 'react';
import styled, {css} from 'styled-components';
import Link from 'next/link'

import Head from './Head';
import { media } from '../components/styled';

// const query = {
//   'mobile': {
//     minWidth: 200,
//     maxWidth: 599
//   },
//   'desktop': {
//     minWidth: 600,
//   }
// };

export default class extends React.Component {

  constructor() {
    super();
    this.state = {navOpen: true};
  }

  closeMenu = () => {
    this.setState({navOpen:false})
  }

  render() {
    const {children, title} = this.props;
    console.log('NAVOPEN', this.state.navOpen);
    return (
      <AppWrapper>
        <Head title={title} />
        <Header>
          <Link href="/">
            <Icon src="../static/Bea.svg" />
            {/* <Title href="/">Bea Helman</Title> */}
          </Link>
        </Header>
        <Body>
          <SideNav navOpen={this.state.navOpen} >
            {this.state.navOpen ?
              <Close onClick={this.closeMenu}/>
              : null
            }
            <Link><NavLink href="/photos">Photos</NavLink></Link>
            <Link><NavLink href="/writing">Writing</NavLink></Link>
            <Link><NavLink href="/published">Published</NavLink></Link>
            <Link><NavLink href="/contact">Contact</NavLink></Link>
          </SideNav>
          <Content navOpen={this.state.navOpen} >
            {children}
          </Content>
        </Body>
      </AppWrapper>
    )
  }
}

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
  padding-top: 15px;
  padding-right: 15px;
`
const Title = styled.a`
  font-size: 2em;
`
const Body = styled.div`
  display: flex;
  flex: 1;
`
const SideNav = styled.div`
  flex: 1;
  padding-top: 5vh;
  flex-direction: column;
  z-index: 2;

  ${''/* default on mobile and nav is closed */}
  display: flex;
  ${''/* if  either nav is open or not on mobile: */}
  ${''/* ${({navOpen}) => navOpen ? css`display:flex` : ''} */}
  ${''/* ${media.tabletUp`display:flex`} */}
`
const NavLink = styled.a`
  margin: .7em;
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
const SvgX = styled.svg`
  color: #c5392a;
  font-size: 2em;
  transform: none;
`
const Content = styled.div`
  flex: 1;
  display: flex;

  ${({navOpen}) => navOpen ? css`
    display: none;
  ` : ''}
`
const Close = ({className, onClick}) => (
  <SvgX fill="#000000" height="48" viewBox="0 0 24 24" width="48" xmlns="http://www.w3.org/2000/svg" onClick={onClick}>
      <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
      <path d="M0 0h24v24H0z" fill="none"/>
  </SvgX>
)

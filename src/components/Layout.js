import React from 'react';
import styled, {css} from 'styled-components';
import {Link} from 'react-router'
import Bea from './Bea.svg'

// import Head from './Head';
import { media } from '../components/styled';

class Layout extends React.Component {

  constructor() {
    super();
    this.state = {navOpen: false};
  }

  closeMenu = () => {
    this.setState({navOpen:false})
  }

  render() {
    const {children, title} = this.props;
    return (
      <AppWrapper>
        {/* <Head title={title} /> */}
        <Header>
          <Link to="/">
            <Icon src={Bea} />
          </Link>
        </Header>
        <Body>
          <SideNav navOpen={this.state.navOpen} >
            {this.state.navOpen ?
              <Close onClick={this.closeMenu}/>
              : null
            }
            <Link><NavLink to="/photos">Photos</NavLink></Link>
            <Link><NavLink to="/writing">Writing</NavLink></Link>
            <Link><NavLink to="/published">Published</NavLink></Link>
            <Link><NavLink to="/contact">Contact</NavLink></Link>
          </SideNav>
          <Content navOpen={this.state.navOpen} >
            {children}
          </Content>
        </Body>
      </AppWrapper>
    )
  }
}
export default Layout;

const AppWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`
const Header = styled.div`
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

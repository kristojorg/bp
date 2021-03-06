import React from 'react';
import styled, {css} from 'styled-components';
import {Link} from 'react-router'
import Bea from '../assets/face.svg'

// import Head from './Head';
import { media } from '../components/styled';

class Layout extends React.Component {

  constructor() {
    super();
    this.state = {navOpen: false};
  }

  closeMenu = () => {
    this.setState({navOpen:false});
  }

  openMenu = () => {
    this.setState({navOpen: true});
  }

  render() {
    const {children} = this.props;
    const home = this.props.location.pathname==="/";
    return (
      <AppWrapper>
        {/* <Head title={title} /> */}
        <Header>
          {!this.state.navOpen ?
            <Menu onClick={this.openMenu} home={home} ><a>Menu</a></Menu>
            : <div />
          }
          <HomeLink to="/" onClick={this.closeMenu}>
            <Icon src={Bea} />
          </HomeLink>
        </Header>
        <Body>
          {home || this.state.navOpen ?
            <SideNav navOpen={this.state.navOpen} >
              {this.state.navOpen ?
                <Close onClick={this.closeMenu}/>
                : null
              }
              <NavLink to="/albums" onClick={this.closeMenu} rotate={-15} >Photos</NavLink>
              <NavLink to="/blog" onClick={this.closeMenu} rotate={-15} >Blog</NavLink>
              <NavLink to="/published" onClick={this.closeMenu} rotate={-15} >Published</NavLink>
              <NavLink to="/etc" onClick={this.closeMenu} rotate={-15} >etc</NavLink>
            </SideNav>
            : null
          }
          <Content navOpen={this.state.navOpen} >
            {children}
          </Content>
        </Body>
      </AppWrapper>
    )
  }
}
export default Layout;

const buttonStyle = `
  &:hover, &:active {
    background: rgba(103, 56, 49, 0.27);
    border-radius: 5px;
    cursor: pointer;
  }
`

const linkStyles = `
  font-size: 4em;
  font-family: 'CandicePro-Regular';
  color: #c5392a;
  text-decoration: none;
  padding: 0.3em;
  cursor: pointer;


  ${buttonStyle}
`
const AppWrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
`
const HomeLink = styled(Link)`
  z-index: 5;
`
const Menu = styled.div`
  ${linkStyles}
  ${({home}) => home ? media.tabletUp`
    visibility: hidden;
  ` : ''}
  transform: rotate(-10deg);
`
const Icon = styled.img`
  height: 80px;
  margin-top: 15px;
  margin-right: 15px;
  ${''/* padding: 0.3em; */}
  ${''/* ${buttonStyle} */}
`
// const Title = styled.a`
//   font-size: 2em;
// `
const Body = styled.div`
  display: flex;
  flex: 1;
`
const SideNav = styled.div`
  flex: 1;
  padding-top: 5vh;
  flex-direction: column;
  z-index: 2;
  align-items: flex-start;

  ${''/* default on mobile and nav is closed */}
  display: none;

  ${''/* if  either nav is open or not on mobile: */}
  ${({navOpen}) => navOpen ? css`display:flex;` : ''}
  ${media.tabletUp`
    display: flex;
    width: 0px;
    flex: 0;
    margin-top: -50px;
  `}
`
const NavLink = styled(Link)`
  ${linkStyles}
  transform: rotate(${({rotate}) => rotate}deg);
`
const SvgX = styled.svg`
  ${linkStyles}
  fill: #c5392a;
  font-size: 2em;
  margin-top: 0px;
`
const Content = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  flex-direction: column;
  overflow: hidden;
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

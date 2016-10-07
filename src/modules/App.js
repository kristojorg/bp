// @flow
import React, { Component, PropTypes } from 'react';
import {Link, IndexLink} from 'react-router';

import './App.css';
import {Text} from '../components/text';

export default class App extends Component {

  static propTypes = {

  }

  render() {
    return (
      <div className="app" >
        <MenuBar />
        <div className="mainContent" >
          {this.props.children}
        </div>
        <Footer />
      </div>
    );
  }
}

const MenuBar = (props) => {
  return (
    <div className="menuBar" >
      <Name />
      <NavLink to="/photos" label="photos" />
      <NavLink to="/writing" label="writing" />
      <NavLink to="/blog" label="blog" />

    </div>
  )
}
MenuBar.propTypes = {
};

const Name = () => {
  return (
    <IndexLink to="/" className="name" activeClassName="activeNavLink">
      Bea<br />Helman
    </IndexLink>
  )
}
Name.propTypes = {
};

const NavLink = ({label, ...props}) => {
  return (
      <Link {...props} className="navLink" activeClassName="activeNavLink">
        <Text>{label}</Text>
      </Link>
  )
}
NavLink.propTypes = {
};



const Footer = (props) => {
  return (
    <div>
      Footer
    </div>
  )
}
Footer.propTypes = {
};

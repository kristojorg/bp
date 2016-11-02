// @flow
import React, { Component } from 'react';
import {Link, IndexLink} from 'react-router';
import { applyContainerQuery } from 'react-container-query';
import classnames from 'classnames';

import {PHONE_QUERY} from '../constants';
import './App.css';

class App extends Component {

  static propTypes = {

  }

  render() {
    return (
      <div className="app" >
        <MenuBar containerQuery={this.props.containerQuery}/>
        <div className="mainContent" >
          {this.props.children}
        </div>
        <Footer />
      </div>
    );
  }
}

const MenuBar = ({containerQuery}) => {
  return (
    <div className="menuBar" >
      <Name phone={containerQuery.phone} />
      <NavLink to="/albums" label="photos" />
      <NavLink to="/writing" label="writing" />
      <NavLink to="/blog" label="blog" />

    </div>
  )
}
MenuBar.propTypes = {
};

const Name = ({phone}) => {
  return (
    <IndexLink to="/" className={classnames('name',{phone})} activeClassName="activeNavLink">
      Bea<br />Helman
    </IndexLink>
  )
}
Name.propTypes = {
};

const NavLink = ({label, ...props}) => {
  return (
      <Link {...props} className="navLink" activeClassName="activeNavLink">
        {label}
      </Link>
  )
}
NavLink.propTypes = {
};

const Footer = (props) => {
  return (
    <div className="footer" >
      <a className="footerItem" href="mailto:beahelman@yahoo.com">beahelman@yahoo.com</a>
    </div>
  )
}
Footer.propTypes = {
};

const FooterItem = (props) => {
  return (
    <div>MyComponent</div>
  )
}
FooterItem.propTypes = {
};

const WrappedApp = applyContainerQuery(App, PHONE_QUERY);
export default WrappedApp;

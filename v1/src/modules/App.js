// @flow
import React, { Component } from 'react';
import {Link, IndexLink} from 'react-router';
import ContainerQuery from 'react-container-query';
import classnames from 'classnames';

import {PHONE_QUERY} from '../constants';
import './App.css';

class App extends Component {

  static propTypes = {

  }

  render() {
    return (
      <ContainerQuery query={PHONE_QUERY} className='app'>
        {(params) => (
          <div className="insideQuery" >
            <MenuBar containerQuery={params}/>
            <div className="mainContent" >
              {this.props.children}
            </div>
            <Footer />
          </div>
        )}
      </ContainerQuery>
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
    <IndexLink to="/" className={classnames('name',{phoneNav:phone})} activeClassName="activeNavLink">
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
      <a className="footerItem" href="mailto:beatricehelman@gmail.com">beatricehelman@gmail.com</a>
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

// const WrappedApp = applyContainerQuery(App, PHONE_QUERY);
export default App;

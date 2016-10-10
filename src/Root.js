import React, { Component } from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import WebFont from 'webfontloader';

import logo from './logo.svg';
import './Root.css';
import Home from './modules/Home.js';
import App from './modules/App.js';
import Photos from './modules/Photos.js';
import Writing from './modules/Writing';
import Blog from './modules/Blog';

class Root extends Component {
  componentWillMount () {
    WebFont.load({
      google: {
        families: ['Concert One', 'Permanent Marker', 'Josefin Sans']
      }
    })
  }
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={Home}/>
          <Route path="/photos" component={Photos}/>
          <Route path="/writing" component={Writing}/>
          <Route path="/blog" component={Blog}/>
        </Route>
      </Router>
    );
  }
}

export default Root;

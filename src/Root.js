import React, { Component } from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import WebFont from 'webfontloader';

import './Root.css';
import Home from './modules/Home.js';
import App from './modules/App.js';
import Albums from './modules/Albums.js';
import Writing from './modules/Writing';
import Blog from './modules/Blog';
import Gallery from './modules/Gallery';

class Root extends Component {
  componentWillMount () {
    WebFont.load({
      google: {
        families: ['Concert One', 'Permanent Marker', 'Josefin Sans', 'Crimson Text', 'Open Sans']
      }
    })
  }
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={Home}/>
          <Route path="/albums" component={null} >
            <IndexRoute component={Albums} />
              <Route path="/albums/:album" component={Gallery}>
                {/* <Route path="/:photo" component={Photo}/> */}
              </Route>
          </Route>
          <Route path="/writing" component={Writing}/>
          <Route path="/blog" component={Blog}/>
        </Route>
      </Router>
    );
  }
}

export default Root;

import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import Contact from './pages/contact'
import Home from './pages/index'
import Photos from './pages/photos'
import Published from './pages/published'
import Writing from './pages/writing'
import Layout from './components/Layout'

const Root = () => {

  return(
    <Router key="appRouteRouter" history={browserHistory}>
      <Route path="/" component={Layout}>
        <IndexRoute component={Home}/>
        <Route path="/photos" component={Photos} />
        <Route path="/writing" component={Writing} />
        <Route path="/published" component={Published} />
        <Route path="/contact" component={Contact} />
      </Route>
    </Router>
  );
}

export default Root;

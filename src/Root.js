import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import Contact from './pages/contact'
import Home from './pages/index'
import Albums from './pages/albums'
import Published from './pages/published'
import Writing from './pages/writing'
import Layout from './components/Layout'
import Gallery from './pages/gallery'
import AlbumFetcher from './pages/AlbumFetcher'

const Root = () => {

  return(
    <Router key="appRouteRouter" history={browserHistory}>
      <Route path="/" component={Layout}>
        <IndexRoute component={Home}/>
        <Route path="/albums" component={AlbumFetcher} >
          <IndexRoute component={Albums} />
          <Route path="/albums/:album" component={Gallery} />
        </Route>
        <Route path="/writing" component={Writing} />
        <Route path="/published" component={Published} />
        <Route path="/contact" component={Contact} />
      </Route>
    </Router>
  );
}

export default Root;

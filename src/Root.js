import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import {ThemeProvider} from 'styled-components';

import Contact from './pages/contact'
import Home from './pages/index'
import Albums from './pages/albums'
import PublishedFetcher from './pages/PublishedFetcher'
import StoryFetcher from './pages/StoryFetcher'
import Stories from './pages/Stories'
import Story from './pages/Story'
import Layout from './components/Layout'
import Gallery from './pages/gallery'
import AlbumFetcher from './pages/AlbumFetcher'
import Publications from './pages/Publications'
import Publication from './pages/Publication'
import theme from './components/theme'

const Root = () => {

  return(
    <ThemeProvider theme={theme}>
      <Router key="appRouteRouter" history={browserHistory}>
        <Route path="/" component={Layout}>
          <IndexRoute component={Home}/>
          <Route path="/albums" component={AlbumFetcher} >
            <IndexRoute component={Albums} />
            <Route path="/albums/:album" component={Gallery} />
          </Route>
          <Route path="/published" component={PublishedFetcher} >
            <IndexRoute component={Publications} />
            <Route path="/published/:publication" component={Publication} />
          </Route>
          <Route path="/writing" component={StoryFetcher} >
            <IndexRoute component={Stories} />
            <Route path="/writing/:story" component={Story} />
          </Route>
          <Route path="/contact" component={Contact} />
        </Route>
      </Router>
    </ThemeProvider>
  );
}

export default Root;

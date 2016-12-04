import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import './Root.css';
import Home from './modules/Home.js';
import App from './modules/App.js';
import Albums from './modules/Albums.js';
import Writing from './modules/Writing';
import Blog from './modules/Blog';
import Gallery from './modules/Gallery';
import FadeIn from './components/FadeIn';
import SampleView from './modules/SampleView';

const Root = () => {

  return(
    <FadeIn>
      <Router key="appRouteRouter" history={browserHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={Home}/>
          <Route path="/albums" component={null} >
            <IndexRoute component={Albums} />
              <Route path="/albums/:album" component={Gallery}>
                {/* <Route path="/:photo" component={Photo}/> */}
              </Route>
          </Route>
          <Route path="/writing" >
            <IndexRoute component={Writing} />
              <Route path="/writing/:sample" component={SampleView} />
          </Route>
          <Route path="/blog" component={Blog}/>
        </Route>
      </Router>
    </FadeIn>
  );
}

export default Root;

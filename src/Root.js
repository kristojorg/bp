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
import FadeIn from './components/FadeIn';

class Root extends Component {

  constructor(props) {
    super(props);
    this.state = {
      fontsReady: false
    };
  }
  componentWillMount = () => {
    WebFont.load({
      google: {
        families: ['Concert One', 'Permanent Marker', 'Open Sans', 'Cabin', 'Signika']
      },
      active: () => this.setState({fontsReady:true})
    })
  }

  render() {
    console.log('STATE OF ROOT', this.state);

    let root = <div className="app" />;
    if (this.state.fontsReady) {
      root = (
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
              <Route path="/writing" component={Writing}>
                {/* <IndexRoute component={Writing} />
                  <Route path="/writing/:sample" component={PDFView} /> */}
              </Route>
              <Route path="/blog" component={Blog}/>
            </Route>
          </Router>
        </FadeIn>
      );
    }

    return (
      <FadeIn>
        {root}
      </FadeIn>
    )
  }
}

export default Root;

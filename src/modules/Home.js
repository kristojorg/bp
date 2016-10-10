// @flow
import React, { Component, PropTypes } from 'react';

import './Home.css';
import cover from '../assets/cover.jpg'

export default class Home extends Component {

  static propTypes = {

  }

  render() {
    return (
      <div className="wrapper" >
        <img src={cover} className="cover" />
        {/* <div className="coverDiv" /> */}
      </div>
    );
  }
}

// @flow
import React, { Component } from 'react';
import Prismic from 'prismic.io';
import {Image} from '@kristojorg/kc';

import { API_ROOT } from '../constants';
import './Home.css';

export default class Home extends Component {

  static propTypes = {
  }

  constructor(props){
    super(props);
    this.state = {
      banner: null,
      dimensions: {
        height: null,
        width: null,
      },
    };
  }

  componentDidMount() {
    Prismic.api(API_ROOT).then(api => {
      return api.getSingle('homepage');
    }).then(response => {
      console.log("Documents: ", response);
      this.setState({
        banner: response.data['homepage.mainPhoto'].value.main.url,
        dimensions: response.data['homepage.mainPhoto'].value.main.dimensions,
      })
    }, err => {
      console.error("Something went wrong: ", err);
    });
  }

  render() {
    return (
      <div className="cover">
        <Image
          alt="Banner"
          src={this.state.banner}
          // className="cover"
          height={this.state.dimensions.height}
          width={this.state.dimensions.width}
        />
      </div>
    );
  }
}

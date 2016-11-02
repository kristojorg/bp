// @flow
import React, { Component } from 'react';
import Prismic from 'prismic.io';

import { API_ROOT } from '../constants';
import './Home.css';

export default class Home extends Component {

  static propTypes = {
  }

  constructor(props){
    super(props);
    this.state = {
      banner: null,
    };
  }

  componentDidMount() {
    Prismic.api(API_ROOT).then(api => {
      return api.getSingle('homepage');
    }).then(response => {
      console.log("Documents: ", response);
      this.setState({
        banner: response.data['homepage.mainPhoto'].value.main.url,
      })
    }, err => {
      console.error("Something went wrong: ", err);
    });
  }

  render() {
    return (
      <div className="wrapper" >
        <img alt="Banner" src={this.state.banner} className="cover" />
      </div>
    );
  }
}

// @flow
import React, { Component } from 'react';
import Prismic from 'prismic.io';

import PDF from '../components/PDF';
import {Album} from './Albums';
import { API_ROOT } from '../constants.js';
import './Writing.css';

export default class Writing extends Component {

  static propTypes = {

  }

  constructor(props){
    super(props);
    this.state = {
      samples: null,
    };
  }

  componentDidMount() {
    Prismic.api(API_ROOT).then(api => {
      return api.query(Prismic.Predicates.at('document.type', 'writing-sample'));
    }).then(response => {
      console.log('RESPONSE', response);
      this.setState({
        samples: response.results,
      });
    }, err => {
      console.error("Something went wrong: ", err);
    });
  }

  render() {
    return (
      <div>
        Hello from writing.
      </div>
    );
  }
}

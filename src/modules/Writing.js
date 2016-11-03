// @flow
import React, { Component } from 'react';
import Prismic from 'prismic.io';

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

    let samples = null;
    if (this.state.samples) {
      samples = this.state.samples.map(sample =>
        <SampleCover
          key={sample.id}
          cover={sample.data['writing-sample.cover'].value.main.url}
          title={sample.data['writing-sample.title'].value[0].text}
          uid={sample.uid}
          category="writing"
          // url={sample.data}
          link={`http://docs.google.com/gview?url=${sample.fragments['writing-sample.pdf'].value.file.url}`}
        />
      )
    }

    return (
      <div>
        {samples}
      </div>
    );
  }
}

const SampleCover = ({cover, title, uid, link}) => {
  return (
    <a className="album" href={link}>
      <div className="album-image" >
        <img src={cover} className="albumCover" alt="album" />
      </div>
      <span className="title">{title}</span>
    </a>
  )
}

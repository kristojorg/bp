import React from 'react'

import api from '../api'

const PUBLISHED_ID = 'publication';

export default class AlbumFetcher extends React.Component {
  constructor() {
    super();
    this.state = {
      publications: null,
    }
  }

  componentDidMount(){
    api.getEntries({
      'content_type':PUBLISHED_ID
    }).then(entries => {
      this.setState({
        publications: entries.items
      })
    })
  }
  render() {
    console.log('publications', this.state.publications);
    const children = React.cloneElement(this.props.children, {publications: this.state.publications})
    return children;
  }
}

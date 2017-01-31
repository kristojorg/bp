import React from 'react'

import api from '../api'

const galleryId = '7leLzv8hW06amGmke86y8G';

export default class AlbumFetcher extends React.Component {
  constructor() {
    super();
    this.state = {
      albums: null,
    }
  }

  componentDidMount(){
    api.getEntries({
      'content_type':galleryId
    }).then(entries => {
      this.setState({
        albums: entries.items
      })
    })
  }

  render() {
    const children = React.cloneElement(this.props.children, {albums: this.state.albums})
    return children;
  }
}

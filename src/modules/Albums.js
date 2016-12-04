// @flow
import React, { Component } from 'react';
import Prismic from 'prismic.io';
import { Link } from 'react-router';

import './Albums.css';
import { API_ROOT } from '../constants.js';
import Image from '../components/Image';

class Albums extends Component {

  static propTypes = {

  }

  constructor(props){
    super(props);
    this.state = {
      albums: null,
    };
  }

  componentDidMount() {
    Prismic.api(API_ROOT).then(api => {
      return api.query(Prismic.Predicates.at('document.type', 'album'));
    }).then(response => {
      // console.log('RESPONSE', response);
      this.setState({
        albums: response.results,
      });
    }, err => {
      console.error("Something went wrong: ", err);
    });
  }

  render() {
    let albums = null;
    if (this.state.albums) {
      console.log('ALBUMS', this.state.albums);
      albums = this.state.albums.map(album =>
        <Album
          key={album.id}
          cover={album.data['album.album-cover'].value.main.url}
          title={album.data['album.title'].value[0].text}
          uid={album.uid}
          height={album.data['album.album-cover'].value.main.dimensions.height}
          width={album.data['album.album-cover'].value.main.dimensions.width}
        />
      )
    }
    return (
      <div className="albums">
        {albums}
      </div>
    );
  }
}

export const Album = ({cover, title, uid, category = 'albums', height, width}) => {
  console.log('HEIGHT', height, width);
  return (
    <Link className="album" to={`${category}/${uid}`}>
      <div className="album-image" >
        <div >
          <Image
            src={cover}
            className="albumCover"
            alt="album"
            height={height}
            width={width}
          />
        </div>
      </div>
      <span className="title">{title}</span>
    </Link>
  )
}

export default Albums;

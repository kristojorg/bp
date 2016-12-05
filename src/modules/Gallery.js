// @flow
import React, { Component } from 'react';
import Prismic from 'prismic.io';
import Lightbox from 'react-images';
import {Image} from '@kristojorg/kc';

import { API_ROOT } from '../constants.js';
import './Gallery.css';

export default class Albums extends Component {

  static propTypes = {

  }

  constructor(props){
    super(props);
    this.state = {
      images: null,
      lightboxOpen: false,
      currentIndex: 4,
    };
  }

  componentDidMount() {
    Prismic.api(API_ROOT).then(api => {
      return api.getByUID('album',this.props.params.album);
    }).then(response => {
      console.log("Documents: ", response);
      this.setState({
        images: response.data['album.image-gallery'].value,
      })
    }, err => {
      console.error("Something went wrong: ", err);
    });
  }

  closeLightbox = () => {
    this.setState({
      lightboxOpen: false,
    });
  }

  openLightbox = (index = 4) => {
    this.setState({
      lightboxOpen: true,
      currentIndex: index,
    });
  }

  onClickNext = () => {
    if (this.state.currentIndex === this.state.images.length) {
      this.setState({
        currentIndex: 0,
      })
    } else {
      this.setState({
        currentIndex: this.state.currentIndex + 1
      })
    }
  }

  onClickPrev = () => {
    this.setState({
      currentIndex: this.state.currentIndex - 1,
    })
  }

  render() {

    let images = null;
    let light = [];
    if (this.state.images) {
      light = this.state.images.map((image,i) => {
        const thing = {src: image.image.value.main.url}
        return thing;
      });
      images = this.state.images.map((image,i) =>
        <ImageCust
          key={i}
          index={i}
          url={image.image.value.main.url}
          openLightbox={this.openLightbox}
          height={image.image.value.main.dimensions.height}
          width={image.image.value.main.dimensions.width}
        />
      );
    }
    console.log('THIS', light, this.state);
    return (
      <div className="galleryWrap" >
        <div className="gallery" >
          {images}
        </div>
        <Lightbox
          images={light}
          onClose={this.closeLightbox}
          isOpen={this.state.lightboxOpen}
          currentImage={this.state.currentIndex}
          onClickNext={this.onClickNext}
          onClickPrev={this.onClickPrev}
          showImageCount={false}
          theme={theme}
        />
      </div>
    );
  }
}

const ImageCust = ({url, index, openLightbox, height, width}) => {

  return (
    <a className="imageWrapper" onClick={() => openLightbox(index)}>
      <div className="contentWrapper" >
        <div>
          <Image
            src={url}
            className="image"
            alt="Item"
            height={height}
            width={width}
          />
        </div>
      </div>
    </a>
  )
}

const theme = {
	// container
	container: { background: '#D8B6B5' },

	// arrows
	arrow: {
		backgroundColor: 'rgba(255, 255, 255, 0.8)',
		fill: '#222',
		opacity: 0.6,
		transition: 'opacity 200ms',

		':hover': {
			opacity: 1,
		},
	},
	arrow__size__medium: {
		borderRadius: 40,
		height: 40,
		marginTop: -20,

		'@media (min-width: 768px)': {
			height: 70,
			padding: 15,
		},
	},
	arrow__direction__left: { marginLeft: 10 },
	arrow__direction__right: { marginRight: 10 },

	// header
	close: {
		fill: '#324D43',
    fontSize: '25',
		opacity: 0.6,
		transition: 'all 200ms',

		':hover': {
			opacity: 1,
		},
	},

	// footer
	footer: {
		color: 'black',
	},
	footerCount: {
		color: 'rgba(0, 0, 0, 0.6)',
	},

	// thumbnails
	thumbnail: {
	},
	thumbnail__active: {
		boxShadow: '0 0 0 2px #00D8FF',
	},
};

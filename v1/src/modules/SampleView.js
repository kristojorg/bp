// @flow
import React, { Component } from 'react';
import Prismic from 'prismic.io';
import Lightbox from 'react-images';

import { API_ROOT } from '../constants.js';
import './Gallery.css'
import './SampleView.css';

export default class SampleView extends Component {

  static propTypes = {

  }

  constructor(props){
    super(props);
    this.state = {
      images: null,
      lightboxOpen: false,
      currentIndex: 4,
      title: null,
    };
  }

  componentDidMount() {
    Prismic.api(API_ROOT).then(api => {
      return api.getByUID('writing-sample',this.props.params.sample);
    }).then(response => {
      console.log("Documents: ", response, response.getStructuredText('writing-sample.title'));
      this.setState({
        images: response.data['writing-sample.image-gallery'].value,
        title: response.getStructuredText('writing-sample.title').asText(),
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
        <Image
          key={i}
          index={i}
          url={image.image.value.main.url}
          openLightbox={this.openLightbox}
        />
      );
    }
    return (
      <div className="galleryWrap sampleGallery" >
        {this.state.title ? <h2>{`${this.state.title}`}</h2> : null}
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

const Image = ({url, index, openLightbox}) => {

  return (
    <a className="imageWrapper" onClick={() => openLightbox(index)}>
      <div className="contentWrapper" >
        <img src={url} className="image" alt="Item" />
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
/*
Goals of this Component

props {
  display: 'cover' | 'fit'
  src
  fade: bool
  background color
  image size??
  alt
  classname
}

Render a square that either has the full image cropped or contained.

When the image is loading, display the background color. If the mode is set to
cover and there is a placeholder color, display that in the middle with the right
aspect ratio according to the size.

It will also handle image load errors too!



*/

import React from 'react';
import classnames from 'classnames';

import './Image.css';

const testURL='https://prismic-io.s3.amazonaws.com/bea-helman/72688bef7bc7e0b909b0db765e1e0a757fd63dca_r2-01544-016a.jpg';

export default class Image extends React.PureComponent {

  static defaultProps = {
    fade: true,
    backgroundColor: 'rgba(0,0,0,0.1)',
    alt: 'image',
    display: 'fit'
  }

  constructor(props){
    super(props)
    this.state = {
      loaded: false,
    }
  }

  onImageLoad = () => {
    this.setState({
      loaded: true,
    })
  }

  imageStyler = () => {
    // if it is wider, make width 100%
    if (this.props.width >= this.props.height) {
      return {
        width: '100%',
        height: 0,
        paddingTop: `${(this.props.height/this.props.width)*100}%`,
        backgroundColor: this.props.backgroundColor,
        position: 'relative',
      }
    } else {
      // it is taller than it is wide
      return {
        width: `${(this.props.width/this.props.height)*100}%`,
        height: '100%',
        backgroundColor: this.props.backgroundColor,
        position: 'relative',
      }
    }
  }

  render() {
    const {display, src, fade, width, height, alt, className} = this.props;


    // TODO: when rendering a div, figure out the sizing...
    if (display === 'fit' && height && width) {
      return (
        <div className={classnames(className, 'image-wrapper')}>
          <div
            className="pseudo"
            style={this.imageStyler()}
          >
            <img
              alt={alt}
              className={classnames({imageLoaded: this.state.loaded, fadeImageIn: this.props.fade},'image-element')}
              src={src}
              onLoad={this.onImageLoad}
            />
          </div>
        </div>
      )
    }
    return (
      <div
        className={classnames(className, 'image-wrapper')}
        // only show background if you have a width and height.
        style={{backgroundColor: width && height && this.props.backgroundColor}}
      >
        <img
          alt={alt}
          className={
            classnames({
              imageLoaded: this.state.loaded,
              fadeImageIn: this.props.fade,
              'image-fit':display === 'fit',
              'image-cover': display === 'cover'},
              'image-element'
            )}
          src={src}
          onLoad={this.onImageLoad}
        />
      </div>
    )
  }
}

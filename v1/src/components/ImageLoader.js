import React from 'react'

/*
  This will:
    ([]: urls, maxWidth, maxHeight) => (images :[{src, srcset, loaded}], onLoad)

  Only change src and srcset when the maxWidth or maxHeight goes up

  Load the images sequentially

  The Image component using this should set its width and height manually and fade the image in when it changes.

*/

export default class ImageLoader extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      images: this.props.images.map(image => {
        return {
          loaded: false,
          origSrc: image.src,
          meta: image.meta,
        }
      }),
      nextToLoad: 0,
    }
    this.maxHeight = 0;
    this.maxWidth = 0;
    this._updateSize(this.props.maxHeight, this.props.maxWidth);
  }

  componentDidMount() {
    this.loadAnotherOne();
  }

  loadAnotherOne = () => {
    if (this.state.nextToLoad >= this.state.images.length) return;

    // set the src and srcset for nextToLoad
    this.setState((prevState,props) => {
      const image = prevState.images[prevState.nextToLoad];
      const newImage = generateSrc(image, this.maxHeight, this.maxWidth);

      const newImages = prevState.images;
      newImages[prevState.nextToLoad] = newImage;
      return {
        images: newImages,
        nextToLoad: prevState.nextToLoad + 1,
      }
    })
  }

  componentWillReceiveProps(nextProps) {
    if (this._updateSize(nextProps.maxHeight, nextProps.maxWidth)) {
      this._updateSources(nextProps.maxHeight, nextProps.maxWidth);
    }
  }

  _updateSize = (maxHeight, maxWidth) => {
    const newHeight = maxHeight;
    const newWidth = maxWidth;

    const heightLarger = isLarger(this.maxHeight, newHeight);
    const widthLarger = isLarger(this.maxWidth, newWidth);
    if (heightLarger) this._updateHeight(newHeight);
    if (widthLarger) this._updateWidth(newWidth);

    // if either one was larger, lets update the srcses
    if (
      heightLarger ||
      widthLarger
    ) {
      return true;
    }
    return false;
  }

  _updateHeight = (newHeight) => {
    this.maxHeight = newHeight;
  }

  _updateWidth = (newWidth) => {
    this.maxWidth = newWidth;
  }

  _updateSources = (maxHeight, maxWidth) => {
    // loop through images in state. for each one which has a src value, update it.
    this.setState((prevState, props) => {
      const nextImages = prevState.images.map(image => {
        if (image.src) {
          return generateSrc(image, maxHeight, maxWidth);
        }
        return image;
      })
      return {
        images: nextImages,
      }
    })
  }

  render() {
    return this.props.children(this.state.images, this.loadAnotherOne);
  }

}

const isLarger = (initial, next) => {
  //if at first it was infinite, then no
  if (!initial && initial !== 0) return false;

  //if next is infinite, then yes
  if (!next && next !== 0) return true;

  if (next > initial) return true;

  return false;
}

const generateSrc = (image, maxHeight, maxWidth) => {
  const {origSrc, src, srcset, ...rest} = image;
  if (maxHeight == 0 || maxWidth == 0 ) return {...image,origSrc}
  //create sources
  const larger = `https:${origSrc}?fm=jpg&fl=progressive&h=${maxHeight * 2}${maxWidth ? `&w=${maxWidth * 2}` : ''}&q=80`;
  const largest = `https:${origSrc}?fm=jpg&fl=progressive&h=${maxHeight * 3}${maxWidth ? `&w=${maxWidth * 3}` : ''}&q=80`;
  return {
    src: `https:${origSrc}?fm=jpg&fl=progressive&h=${maxHeight}${maxWidth ? `&w=${maxWidth}` : ''}&q=80`,
    srcset: `${larger} 2x, ${largest} 3x`,
    origSrc,
    ...rest
  }
}

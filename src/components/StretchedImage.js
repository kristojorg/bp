import React from 'react'
import styled from 'styled-components'

const ImageStyle = styled.img`
  object-fit: contain;
  height: ${props => props.height}px;
  width: ${props => props.width}px;
  padding: ${props => props.padding}px;
  max-width: calc(100% - ${props => 2*props.padding}px);
  background: blue;
`;

// change the 3000 to window.innerWidth
// make it continually update as it gets new props
// make it so it only changes srces when it gets bigger

export default class StretchedImage extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      windowWidth: window.innerWidth
    }
    this._updateSources(props.windowDimensions.height, this.state.windowWidth);
    this._updateSize(props.windowDimensions.height);
    window.addEventListener('resize', this._windowWidthChange);
  }

  _windowWidthChange = () => {
    window.requestAnimationFrame(() => this.setState({
      windowWidth: window.innerWidth
    }));
  }

  _maybeUpdateSrc = (nextHeight, nextWidth) => {
    //only update if the image gets larger than you've ever recorded it.
    if (
      nextHeight > this.srcHeight ||
      nextWidth > this.srcWidth
    ) {
      this._updateSources(nextHeight, nextWidth);
    }
  }

  componentWillUpdate(nextProps, nextState) {
    this._updateSize(nextProps.windowDimensions.height, nextState.windowWidth);
  }

  _updateSize = (newHeight, newWidth = this.state.windowWidth) => {
    this.maxHeight = Math.floor(newHeight);
    this.maxWidth = Math.floor(newWidth);
    this._maybeUpdateSrc(this.maxHeight, this.maxWidth);
  }

  _updateSources = (maxHeight, maxWidth) => {
    //create sources
    this.srcHeight = maxHeight;
    this.srcWidth = maxWidth;
    this.newSrc = `https:${this.props.src}?fm=jpg&fl=progressive&h=${maxHeight}&w=${maxWidth}&q=80`;
    this.larger = `https:${this.props.src}?fm=jpg&fl=progressive&h=${maxHeight * 2}&w=${maxWidth * 2}&q=80`;
    this.largest = `https:${this.props.src}?fm=jpg&fl=progressive&h=${maxHeight * 3}&w=${maxWidth * 3}&q=80`;
  }

  render () {
    const {details, src, ...props} = this.props;
    const {maxHeight, maxWidth } = this;
    const padding = 0.01;//0.05;

    // first set it up to be the height of the container
    let setWidth, setHeight;
    const ratio = details.width / details.height;
    setHeight = Math.floor(maxHeight - (maxHeight * 2 * padding));
    setWidth = Math.floor(setHeight * ratio);

    //then, if it is wider than container, resize it to be the width of the container and shrink the height.

    if (maxHeight === 0 || maxWidth === 0) return null;
    return (
        <ImageStyle
          width={setWidth}
          height={setHeight}
          padding={maxHeight * padding }
          src={this.newSrc}
          srcSet={`${this.larger} 2x, ${this.largest} 3x`}
          {...props}
        />
    )
  }

  componentWillUnmount() {
    window.removeEventListener('resize');
  }
}

import React from 'react'
import styled from 'styled-components'

const ImageStyle = styled.img`
  object-fit: contain;
  height: ${props => props.height}px;
  width: ${props => props.width}px;
  padding: ${props => props.padding}px;
  max-width: calc(100% - ${props => 2*props.padding}px);
  background: rgba(0,0,0,0);
`;

// change the 3000 to window.innerWidth
// make it continually update as it gets new props
// make it so it only changes srces when it gets bigger

export default class StretchedImage extends React.Component {
  constructor (props) {
    super(props);
    this._updateSources(props.windowDimensions.height);
    this._updateSize(props.windowDimensions.height);
  }

  _maybeUpdateSrc = (nextHeight) => {
    //only update if the image gets larger than you've ever recorded it.
    if (
      nextHeight > this.srcHeight
    ) {
      this._updateSources(nextHeight);
    }
  }

  componentWillUpdate(nextProps) {
    this._updateSize(nextProps.windowDimensions.height);
  }

  _updateSize = (newHeight) => {
    this.maxHeight = Math.floor(newHeight);
    this._maybeUpdateSrc(this.maxHeight);
  }

  _updateSources = (maxHeight) => {
    //create sources
    this.srcHeight = maxHeight;
    this.newSrc = `https:${this.props.src}?fm=jpg&fl=progressive&h=${maxHeight}&q=80`;
    this.larger = `https:${this.props.src}?fm=jpg&fl=progressive&h=${maxHeight * 2}&q=80`;
    this.largest = `https:${this.props.src}?fm=jpg&fl=progressive&h=${maxHeight * 3}&q=80`;
  }

  render () {
    const {details, src, ...props} = this.props;
    const {maxHeight} = this;
    const padding = 0.01;//0.05;

    // first set it up to be the height of the container
    let setWidth, setHeight;
    const ratio = details.width / details.height;
    setHeight = Math.floor(maxHeight - (maxHeight * 2 * padding));
    setWidth = Math.floor(setHeight * ratio);

    //then, if it is wider than container, resize it to be the width of the container and shrink the height.

    if (maxHeight === 0) return null;
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
}

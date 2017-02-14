import React from 'react'
import styled from 'styled-components'

const ImageStyle = styled.img`
  object-fit: contain;
  height: ${props => props.height}px;
  width: ${props => props.width}px;
  padding: ${props => props.padding}px;
  max-width: calc(100% - ${props => 2*props.padding}px);
`;

// change the 3000 to window.innerWidth
// make it continually update as it gets new props
// make it so it only changes srces when it gets bigger

export default class StretchedImage extends React.Component {
  constructor (props) {
    super();
    this._updateSize(props.windowDimensions.height, 3000);
  }

  shouldComponentUpdate(nextProps) {
    //only update if the image gets larger than you've ever recorded it.
    if (
      nextProps.windowDimensions.height > this.maxHeight
      // nextProps.windowDimensions.width > this.maxWidth
    ) {
      return true;
    }
    return true;
  }
  componentWillUpdate(nextProps) {
    this._updateSize(nextProps.windowDimensions.height, 3000);
  }

  _updateSize(newHeight, newWidth) {
    this.maxHeight = Math.floor(newHeight);
    this.maxWidth = Math.floor(newWidth);
  }

  render () {
    const {src, details, ...props} = this.props;
    const {maxHeight, maxWidth } = this;
    const padding = 0.05;

    // first set it up to be the height of the container
    let setWidth, setHeight;
    const ratio = details.width / details.height;
    setHeight = Math.floor(maxHeight - (maxHeight * 2 * padding));
    setWidth = Math.floor(setHeight * ratio);

    //then, if it is wider than container, resize it to be the width of the container and shrink the height.

    //create sources
    const newSrc = `https:${src}?fm=jpg&fl=progressive&h=${maxHeight}&w=${maxWidth}&q=80`;
    const larger = `https:${src}?fm=jpg&fl=progressive&h=${maxHeight * 2}&w=${maxWidth}&q=80`;
    const largest = `https:${src}?fm=jpg&fl=progressive&h=${maxHeight * 3}&w=${maxWidth}&q=80`;

    if (maxHeight === 0 || maxWidth === 0) return null;
    return (
        <ImageStyle
          width={setWidth}
          height={setHeight}
          padding={maxHeight * padding }
          src={newSrc}
          srcSet={`${larger} 2x, ${largest} 3x`}
          {...props}
        />
    )
  }
}

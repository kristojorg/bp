import React from 'react';
import styled from 'styled-components'

export const THUMB_SIZE = 293;

const ImageStyle = styled.img`
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  object-fit: contain;
  margin: 10px;
`;

const Image = ({src, details, width=THUMB_SIZE, height=THUMB_SIZE, ...props}) => {
  // figure out sizes.
  let setWidth, setHeight;
  const ratio = details.width / details.height;
  // if wider than tall, width set to width and height set to whatever ratio
  if (details.width >= details.height) {
    setWidth = width;
    setHeight = width / ratio;
  } else {
    setHeight = height;
    setWidth = height * ratio;
  }
  const newSrc = `https:${src}?fm=jpg&fl=progressive&w=${width}&h=${height}`
  const large = `https:${src}?fm=jpg&fl=progressive&w=${width*2}&h=${height*2}`
  return (
    <ImageStyle
      src={newSrc}
      srcSet={large + " 2x"}
      width={setWidth}
      height={setHeight}
      {...props}
    />
  )
}
export default Image;

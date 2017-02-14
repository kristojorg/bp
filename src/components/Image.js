import React from 'react';
import styled from 'styled-components'

export const THUMB_SIZE = 300;

const ImageStyle = styled.img`
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  object-fit: contain;
  margin: 10px;
`;

const Image = ({src, details, width=THUMB_SIZE, height=THUMB_SIZE, ...props}) => {
  // figure out sizes.
  // let setWidth, setHeight;
  // const ratio = details.width / details.height;
  // // if wider than tall, width set to width and height set to whatever ratio
  // if (details.width >= details.height) {
  //   setWidth = width;
  //   setHeight = width / ratio;
  // } else {
  //   setHeight = height;
  //   setWidth = height * ratio;
  // }
  const newSrc = `https:${src}?fm=jpg&fl=progressive&w=${width}&h=${height}&q=70`
  const large = `https:${src}?fm=jpg&fl=progressive&w=${width*2}&h=${height*2}&q=70`
  return (
    <ImageStyle
      src={newSrc}
      srcSet={large + " 2x"}
      width={width}
      height={height}
      {...props}
    />
  )
}
export default Image;

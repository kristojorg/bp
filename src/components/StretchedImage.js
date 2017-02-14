import React from 'react';
import styled from 'styled-components'

const ImageStyle = styled.img`
  object-fit: contain;
  padding: 1em;
  min-height: 80%;
`;

const StretchedImage = ({src, details, ...props}) => {
  //use window.height and then provide a bunch of extras
  const maxHeight = window.innerHeight;
  const newSrc = `https:${src}?fm=jpg&fl=progressive&h=${maxHeight}&q=80`;
  const larger = `https:${src}?fm=jpg&fl=progressive&h=${maxHeight * 2}&q=80`;
  const largest = `https:${src}?fm=jpg&fl=progressive&h=${maxHeight * 3}&q=80`;
  return (
    <ImageStyle
      src={newSrc}
      srcSet={`${larger} 2x, ${largest} 3x`}
      {...props}
    />
  )
}
export default StretchedImage;

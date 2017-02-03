import React from 'react'
import styled from 'styled-components'

const Gallery = ({albums, params}) => {
  if (!albums) return null;
  const slug = params.album;
  const album = albums.find(album => album.fields.slug === slug);
  const {images} = album.fields;
  return (
    <Wrapper>
      {images.map(image => (
        <StretchedImage
          key={image.sys.id}
          src={image.fields.file.url}
          details={image.fields.file.details.image}
        />
      ))}
    </Wrapper>
  )
}
export default Gallery;

const Wrapper = styled.div`
  margin-top: 90px;
  max-width: 100vw;
  display: flex;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
  flex: 1;
  flex-direction: row;
  overflow-x: scroll;
  height: calc(100vh - 90px);
  -webkit-overflow-scrolling: touch;
`;

const ImageStyle = styled.img`
  object-fit: contain;
  padding: 5%;
  ${''/* height: calc(100% - 2em); */}
  min-height: 80%;
  height: 90%;
`;

const StretchedImage = ({src, details, ...props}) => {
  //use window.height and then provide a bunch of extras
  const maxHeight = window.innerHeight;
  const newSrc = `https:${src}?fm=jpg&fl=progressive&h=${maxHeight}`;
  const larger = `https:${src}?fm=jpg&fl=progressive&h=${maxHeight * 2}`;
  const largest = `https:${src}?fm=jpg&fl=progressive&h=${maxHeight * 3}`;
  return (
    <ImageStyle
      src={newSrc}
      srcSet={`${larger} 2x, ${largest} 3x`}
      {...props}
    />
  )
}

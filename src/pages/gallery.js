import React from 'react'
import styled from 'styled-components'
import Measure from 'react-measure';

// import StretchedImage from '../components/StretchedImage'


const Gallery = ({albums, params}) => {
  if (!albums) return null;
  const slug = params.album;
  const album = albums.find(album => album.fields.slug === slug);
  const {images} = album.fields;
  return (
    <Measure includeMargin={false}>
      {dimensions => (
        <Wrapper>
          {images.map(image => (
            <StretchedImage
              key={image.sys.id}
              src={image.fields.file.url}
              details={image.fields.file.details.image}
              windowDimensions={dimensions}
            />
          ))}
        </Wrapper>
      )}
    </Measure>
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
  max-width: 100vw;
`;

const StretchedImage = ({src, details, windowDimensions, ...props}) => {
  //use window.height and then provide a bunch of extras
  console.log('DIMENSIONS', {...windowDimensions});
  const maxHeight = windowDimensions.height;
  const maxWidth = windowDimensions.width;


  const newSrc = `https:${src}?fm=jpg&fl=progressive&h=${maxHeight}&w=${maxWidth}&q=80`;
  const larger = `https:${src}?fm=jpg&fl=progressive&h=${maxHeight * 2}&w=${maxWidth}&q=80`;
  const largest = `https:${src}?fm=jpg&fl=progressive&h=${maxHeight * 3}&w=${maxWidth}&q=80`;
  return (
      <ImageStyle
        src={newSrc}
        srcSet={`${larger} 2x, ${largest} 3x`}
        {...props}
      />
  )
}

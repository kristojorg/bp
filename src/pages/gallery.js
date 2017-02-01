import React from 'react'
import styled from 'styled-components'
import StretchedImage from '../components/StretchedImage'

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
          src={image.fields.photo.fields.file.url}
          details={image.fields.photo.fields.file.details.image}
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
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  flex: 1;
  flex-direction: row;
  overflow-x: scroll;
`;

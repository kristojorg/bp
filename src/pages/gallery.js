import React from 'react'
import styled from 'styled-components'
import Image from '../components/Image'

const Gallery = ({albums, params}) => {
  if (!albums) return null;
  const slug = params.album;
  const album = albums.find(album => album.fields.slug === slug);
  const {images} = album.fields;
  return (
    <Wrapper>
      {images.map(image => (
        <Image
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
  max-width: 935px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  flex: 1;
`

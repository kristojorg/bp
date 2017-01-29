import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router'

import Image from '../components/Image';

const Albums = ({albums}) => (
  albums &&
  <OuterWrapper>
    <Wrapper>
      {albums.map(album => (
        <Album
          key={album.fields.slug}
          slug={album.fields.slug}
          src={album.fields.coverImage.fields.file.url}
          details={album.fields.coverImage.fields.file.details.image}
          title={album.fields.title}
        />
      ))}
    </Wrapper>
  </OuterWrapper>
);
export default Albums;

const Wrapper = styled.div`
  display: flex;
  align-items: start;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  flex: 1;
`
const OuterWrapper = styled.div`
  margin-top: 90px;
  max-width: 935px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-start;
  flex: 1;
`
const AlbumLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
const Album = ({slug, title, width, ...props}) => {
  console.log(width);
  return (
    <AlbumLink to={`albums/${slug}`}>
      <Image {...props} width={width} />
    </AlbumLink>
  )
}

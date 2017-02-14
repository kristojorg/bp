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

export const Wrapper = styled.div`
  display: flex;
  align-items: start;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  flex: 1;
`
export const OuterWrapper = styled.div`
  margin-top: 110px;
  max-width: 1080px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-start;
  flex: 1;
`
const buttonStyle = `
  &:hover, &:active {
    background: rgba(103, 56, 49, 0.27);
    border-radius: 5px;
    cursor: pointer;
  }
`
const AlbumLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-decoration: none;
  ${buttonStyle}
`
const Title = styled.h1`
  font-family: Futura;
  font-weight: 200;
  margin-top: 0;
  color: ${props => props.theme.red};
  text-transform: capitalize;
  font-size: 1em;
`
const Album = ({slug, title, width, ...props}) => {
  console.log(width);
  return (
    <AlbumLink to={`/albums/${slug}`}>
      <Image {...props} width={width} />
      <Title>{title}</Title>
    </AlbumLink>
  )
}

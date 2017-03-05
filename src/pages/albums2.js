import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router'
import Sparkle from '../components/Sparkle'

import {query} from '../components/styled'
import WindowSize from '../components/WindowSize'
import ImageLoader from '../components/ImageLoader'


export default ({albums}) => {
  if (!albums) return null;
  const imagesIn = albums.map(album => {
    return {
      src:album.fields.coverImage.fields.file.url,
      meta: {
        title: album.fields.title,
        slug: album.fields.slug,
        id: album.sys.id,
      }
    }
  })
  return(
    <WindowSize>
      {(height, width) => (
        <DesktopWrapper>
          <ImageLoader
            images={imagesIn}
            maxHeight={width > layoutBreakpoint ? desktopHeightPixels : height}
            maxWidth={width > layoutBreakpoint ? null : width}
          >
            {(albumsOut,loadAnotherOne) => (
              <AlbumsWrapper>
                {albumsOut.map(album => (
                  <Album key={album.meta.id}>
                      <Image
                        src={album.src}
                        srcSet={album.srcset}
                        onLoad={loadAnotherOne}
                        loaded={album.loaded}
                      />
                    <SubHeader>
                      <Title>{album.meta.title}</Title>
                    </SubHeader>
                  </Album>
                ))}
              </AlbumsWrapper>
            )}
          </ImageLoader>
        </DesktopWrapper>
      )}
    </WindowSize>
  );
}

const layoutBreakpoint = 680;
const desktopHeightPixels = 400;
const desktopHeight = `${desktopHeightPixels}px`;

const AlbumsWrapper = styled.div`
  padding-top: 0;
  padding-bottom: 0;

  ${query(layoutBreakpoint)`
    height: ${desktopHeight};
    max-height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: stretch;
  `}
`
const Album = styled.div`
  margin-bottom: 40px;
  margin-top: 35px;

  ${query(layoutBreakpoint)`
    margin: 0px 70px;
    height: ${desktopHeight};
    max-height: 100%;
  `}
`
const SubHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px 8px;

`
const Title = styled.h1`
  font-family: Futura;
  font-weight: 200;
  margin-top: 0;
  color: ${props => props.theme.red};
  text-transform: capitalize;
  font-size: 1em;
`
const Image = styled.img`
  width: 100%;
  object-fit: contain;
  transition: opacity 0.2s ease-in;

  ${props => props.loaded ? 'opacity: 0' : 'opacity: 1'};

  ${query(layoutBreakpoint)`
    width: initial;
    height: calc(100% - 55px);
    object-fit: contain;
  `}
`
const DesktopWrapper = styled.div`
  margin-top: 110px;
  flex:1;
  overflow: scroll;
  padding: 0px 25px;

  ${query(layoutBreakpoint)`
    height: 100%;
    display: flex;
    align-items: center;
  `}
`

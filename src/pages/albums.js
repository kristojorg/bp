// import React from 'react'
// import styled from 'styled-components'
// import Sparkle from '../components/Sparkle'
//
// import Image from '../components/Image';
// import {query} from '../components/styled';
//
// const Albums = ({albums}) => (
//   albums &&
//   <OuterWrap>
//     <Wrapper>
//       {albums.map(album => (
//         <Album
//           key={album.fields.slug}
//           slug={album.fields.slug}
//           src={album.fields.coverImage.fields.file.url}
//           details={album.fields.coverImage.fields.file.details.image}
//           title={album.fields.title}
//         />
//       ))}
//     </Wrapper>
//     <Sparkle />
//   </OuterWrap>
// );
// export default Albums;
//
// const layoutBreakpoint = 680;
// const desktopHeightPixels = 400;
// const desktopHeight = `${desktopHeightPixels}px`;
//
// export const OuterWrapper = styled.div`
//   margin-top: 110px;
//   max-width: 1080px;
//   display: flex;
//   flex-wrap: wrap;
//   flex-direction: row;
//   justify-content: space-around;
//   align-items: flex-start;
//   flex: 1;
// `
// const OuterWrap = styled.div`
//   margin-top: 110px;
//   flex:1;
//   overflow: scroll;
//
//   ${query(layoutBreakpoint)`
//     height: 100%;
//     display: flex;
//     align-items: center;
//   `}
// `
// const Wrapper = styled.div`
//   padding-top: 0;
//   padding-bottom: 0;
//
//   ${query(layoutBreakpoint)`
//     height: ${desktopHeight};
//     max-height: 100%;
//     display: flex;
//     flex-direction: row;
//     justify-content: flex-start;
//     align-items: stretch;
//   `}
// `
// // export const Wrapper = styled.div`
// //   display: flex;
// //   align-items: start;
// //   flex-direction: row;
// //   flex-wrap: wrap;
// //   justify-content: space-around;
// //   flex: 1;
// // `
// const AlbumLink = styled(Link)`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   flex-direction: column;
//   text-decoration: none;
//
//   margin-bottom: 40px;
//   margin-top: 35px;
//
//   ${query(layoutBreakpoint)`
//     margin: 0px 70px;
//     height: ${desktopHeight};
//     max-height: 100%;
//   `}
// `
// const Title = styled.h1`
//   font-family: Futura;
//   font-weight: 200;
//   margin-top: 0;
//   color: ${props => props.theme.red};
//   text-transform: capitalize;
//   font-size: 1em;
// `
// const Image = styled(Image)`
//   width: 100%;
//   object-fit: contain;
//   transition: opacity 0.2s ease-in;
//
// `
// const Album = ({slug, title, width, ...props}) => {
//   return (
//     <AlbumLink to={`/albums/${slug}`}>
//       <Image {...props} width={width} />
//       <Title>{title}</Title>
//     </AlbumLink>
//   )
// }

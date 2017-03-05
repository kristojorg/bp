import {css} from 'styled-components';

// these sizes are arbitrary and you can set them to whatever you wish
const sizes = {
  phoneOnly: 600,
  tabletUp: 900,
  desktopUp: 1200,
}

export const query = (size) => (...args) => (
  css`
    @media (min-width: ${size/16}em) {
      ${css(...args)}
    }
  `
)

export const media = {
  phoneOnly: (...args) => css`
    @media (max-width: ${sizes.phoneOnly/16}em) {
      ${css(...args)}
    }
  `,
  tabletUp: (...args) => css`
    @media (min-width: ${(sizes.phoneOnly + 1) / 16}em) {
      ${css(...args)}
    }
  `,
  desktopUp: (...args) => css`
    @media (min-width: ${(sizes.tabletUp + 1) / 16})em)} {
      ${css(...args)}
    }
  `,
  query
}

// // iterate through the sizes and create a media template
// export const media = Object.keys(sizes).reduce((accumulator, label) => {
//   // use em in breakpoints to work properly cross-browser and support users
//   // changing their browsers font-size: https://zellwk.com/blog/media-query-units/
//   const emSize = sizes[label] / 16
//   accumulator[label] = (...args) => css`
//     @media (max-width: ${emSize}em) {
//       ${css(...args)}
//     }
//   `
//   return accumulator
// }, {})

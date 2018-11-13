import { css } from 'styled-components'

export const mediaQuery = size => (...args) => css`
  @media (min-width: ${size / 16}em) {
    ${css(...args)};
  }
`

import styled, {css} from 'styled-components';

// these sizes are arbitrary and you can set them to whatever you wish
const sizes = {
  phoneOnly: 600,
  tabletUp: 900,
  desktopUp: 1200,
}

// iterate through the sizes and create a media template
export const media = Object.keys(sizes).reduce((accumulator, label) => {
  // use em in breakpoints to work properly cross-browser and support users
  // changing their browsers font-size: https://zellwk.com/blog/media-query-units/
  const emSize = sizes[label] / 16
  accumulator[label] = (...args) => css`
    @media (max-width: ${emSize}em) {
      ${css(...args)}
    }
  `
  return accumulator
}, {})

export function flex(column = false) {
  return `
  display: flex;
  ${column && 'flex-direction: column'}
  `
}

export const Flex = styled.div`
  ${props => flex(props.column)}
`

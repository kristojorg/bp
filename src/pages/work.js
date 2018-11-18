import React from 'react'
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'

import Layout from '../components/layout'
import { mediaQuery } from '../utils'
import HorizontalScroll from 'react-scroll-horizontal'

/**
 * 1. get the images on the page
 * 2. give them captions
 * 3. make them horizontal scrolling
 */

const SecondPage = ({ data }) => {
  console.log(data)
  const images = data.allContentfulWork.edges

  return (
    <Layout>
      {/* <HorizontalContainer> */}
      {/* <HorizontalSlider> */}
      <HorizontalScroll>
        {images.map(im => (
          <Img
            key={im.node.photo.fluid.src}
            im={im.node.photo.fluid}
            // caption={im.node.caption}
          />
        ))}
      </HorizontalScroll>
      {/* </HorizontalSlider> */}
      {/* </HorizontalContainer> */}
    </Layout>
  )
}

export default SecondPage

const HorizontalContainer = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  overflow: hidden;
  align-items: center;
`

const HorizontalSlider = styled.div`
  width: 80%;
  margin: auto;
  ${mediaQuery(10000)`
    height: 100vh;
    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;
  `};
`

// const Image = ({ im, caption }) => {
//   return (
//     <Wrapper>
//       <StyledImg fluid={im.node.photo.fluid} />
//       <Cap>{caption || 'Peach for Peachypeach'}</Cap>
//     </Wrapper>
//   )
// }

const StyledImg = styled(Img)``

const Wrapper = styled.div`
  width: 90vw;
  max-width: 90%;
  margin: 5%;
`
/**
 * ${mediaQuery(700)`
    flex: 1 0 auto;
    display: flex;
    flex-direction: column;
    width: 90%;
  `};
 */

/**
 * each wrapper should be 90% of the viewport width
 * with a max width for extremely large views
 * then it is 90% the height
 * then the images need to fit within that
 */

const Cap = styled.div``

export const query = graphql`
  query workPage {
    allContentfulWork(sort: { fields: name, order: ASC }) {
      edges {
        node {
          caption
          photo {
            fluid(maxWidth: 3000) {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`

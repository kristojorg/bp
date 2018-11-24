import React from 'react'
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'

import Layout from '../components/layout'
import { mediaQuery } from '../utils'
import HorizontalScroll from '../components/ScrollHorizontal'

const MOBILE = 675

const SecondPage = ({ data }) => {
  const images = data.allContentfulWork.edges
  const house = data.house.childImageSharp

  return (
    <Layout>
      <HouseWrap to="/">
        <HouseImage fixed={house.fixed} />
      </HouseWrap>
      <FullPage>
        <StyledHorizontalScroll
          springConfig={{ stiffness: 150, damping: 15 }}
          reverseScroll
          minWidth={MOBILE}
        >
          {images.map(im => (
            <Image
              key={im.node.photo.fluid.src}
              fluid={im.node.photo.fluid}
              caption={im.node.caption}
              aspectRatio={im.node.photo.fluid.aspectRatio}
            />
          ))}
        </StyledHorizontalScroll>
      </FullPage>
    </Layout>
  )
}

export default SecondPage

const StyledHorizontalScroll = styled(HorizontalScroll)`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;

  ${mediaQuery(MOBILE)`
    display: inline-flex;
    flex-direction: row;
    overflow-y: hidden;
  `}
`

const HouseWrap = styled(Link)`
  position: absolute;
  top: 15px;
  right: 25px;
  z-index: 100;
`

const HouseImage = styled(Img)``

const FullPage = styled.div`
  height: 98vh;
  width: 100vw;
  margin-top: 2vh;
`

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

const Image = ({ fluid, caption, aspectRatio }) => {
  return (
    <Wrapper aspectRatio={aspectRatio}>
      <StyledImg fluid={fluid} />
      {/* <Cap>{caption || 'Peach for Peachypeach'}</Cap> */}
    </Wrapper>
  )
}
// .73
// .7319

const StyledImg = styled(Img)`
  /* flex: 1 0 100%; */
`

const Wrapper = styled.div`
  flex: 1 0 auto;
  width: 88vw;
  margin: 6vw;
  ${mediaQuery(MOBILE)`
    width: 80vw;
    height: 100vh;
    padding: 5vw;
    display: flex;
    flex-direction: column;
    justify-content: center;

    /* set the max width based on aspect of image */
    max-width: calc((100vh - 5vw) * ${props => props.aspectRatio});
  
  `}
`

const Cap = styled.div`
  flex: 0;
`

export const query = graphql`
  query workPage {
    allContentfulWork(sort: { fields: name, order: ASC }) {
      edges {
        node {
          caption
          photo {
            fluid(maxWidth: 3000) {
              ...GatsbyContentfulFluid
              aspectRatio
            }
          }
        }
      }
    }
    house: file(relativePath: { eq: "bea-house.png" }) {
      childImageSharp {
        fixed(width: 150) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

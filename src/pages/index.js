import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/layout'
import styled from 'styled-components'
import './hearts.css'

// import Sparkle from '../components/Sparkle'
import Sparkle from '../components/NewSparkle'

const IndexPage = ({ data: { h1, h2, h3 } }) => {
  return (
    <Layout>
      <FullPage>
        <Hearts>
          <TopButton to="/work">
            <Img fluid={h3.childImageSharp.fluid} />
            <TopLabel>Work</TopLabel>
          </TopButton>

          <Img
            outerWrapperClassName="left-heart"
            fluid={h3.childImageSharp.fluid}
          />
          <Img
            outerWrapperClassName="bottom-heart"
            fluid={h2.childImageSharp.fluid}
          />

          <RightButton to="/about">
            <Img fluid={h1.childImageSharp.fluid} />
            <RightLabel>About</RightLabel>
          </RightButton>
        </Hearts>
      </FullPage>
      <Sparkle />
    </Layout>
  )
}

/**
 * 1. put the hearts on the page as images
 * 2. get them aligned and full page
 * 3. put sparkles on the page
 * 4. put buttons on the hearts
 * 5. make responsive
 */

export default IndexPage

const Label = styled.div`
  font-family: brush-script-std;
  color: black;
  text-decoration: none;
`

const TopLabel = styled(Label)`
  position: absolute;
  top: 40%;
  left: 26%;
  font-size: 48px;
`

const FullPage = styled.div`
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  position: relative;
`

const Hearts = styled.div`
  position: absolute;
  width: 442px;
  height: 500px;
  bottom: 15%;
  left: 15%;
`

const TopButton = styled(Link)`
  position: absolute !important;
  width: 50%;
  transform: rotate(-10deg);
`

const RightButton = styled(Link)`
  position: absolute !important;
  width: 45%;
  transform: rotate(78deg);
  top: 120px;
  right: 97px;
  text-decoration: none;
`

const RightLabel = styled(Label)`
  font-size: 40px;
  transform: rotate(-78deg);
  position: absolute;
  left: 24%;
  top: 39%;
`
// const Top = styled(Img)`
//   position: absolute;
//   width: 50%;
//   transform: rotate(-10deg);
// `

// const Left = styled(Img)`
//   position: absolute;
//   width: 24%;
//   transform: rotate(-88deg);
// `

// const Bottom = styled(Img)`
//   position: absolute;
//   width: 30%;
//   transform: rotate(-172deg);
// `

// const Right = styled(Img)`
//   position: absolute;
//   width: 45%;
//   transform: rotate(88deg);
// `

export const query = graphql`
  query {
    h1: file(relativePath: { eq: "h1.png" }) {
      childImageSharp {
        fluid(maxWidth: 700) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    h2: file(relativePath: { eq: "h2.png" }) {
      childImageSharp {
        fluid(maxWidth: 700) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    h3: file(relativePath: { eq: "h3.png" }) {
      childImageSharp {
        fluid(maxWidth: 700) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

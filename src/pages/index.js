import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/layout'
import styled from 'styled-components'

const IndexPage = ({ data: { h1, h2, h3 } }) => {
  console.log(h1.childImageSharp.fluid)
  return (
    <Layout>
      <Img fluid={h1.childImageSharp.fluid} />
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

const NavButton = styled(Link)`
  font-family: brush-script-std;
  color: black;
  text-decoration: none;
`

export const query = graphql`
  query {
    h1: file(relativePath: { eq: "h1.png" }) {
      childImageSharp {
        fluid(maxWidth: 700) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    h2: file(relativePath: { eq: "h2.png" }) {
      childImageSharp {
        fluid(maxWidth: 700) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    h3: file(relativePath: { eq: "h3.png" }) {
      childImageSharp {
        fluid(maxWidth: 700) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

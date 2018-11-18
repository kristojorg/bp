import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'

import ComingSoon from '../components/ComingSoon'
import styled from 'styled-components'

// import Sparkle from '../components/Sparkle'
import Sparkle from '../components/NewSparkle'

const IndexPage = () => {
  return (
    <Wrapper>
      <ComingSoon />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100vw;
  margin: auto;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

/**
 * 1. put the hearts on the page as images
 * 2. get them aligned and full page
 * 3. put sparkles on the page
 * 4. put buttons on the hearts
 * 5. make responsive
 */

export default IndexPage

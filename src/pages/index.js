import React from 'react'
import ComingSoon from '../components/ComingSoon'
import styled from 'styled-components'

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

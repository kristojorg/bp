import React from 'react'
import styled from 'styled-components'
import ReactMarkdown from 'react-markdown'

import {media} from '../components/styled'

export default ({stories, params}) => {
  if (!stories) return null;
  const slug = params.story;
  const story = stories.find(
    story => story.fields.urlSlug === slug
  );
  return (
    <OuterWrapper>
      <Wrapper>
        <Title>{story.fields.title}</Title>
        <Body>
          <ReactMarkdown source={story.fields.post} />
        </Body>
      </Wrapper>
    </OuterWrapper>
  )
}
const Wrapper = styled.div`
  display: flex;
  align-items: stretch;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-around;
  flex: 1;
  max-width: 600px;
  padding: 1rem;
`
const OuterWrapper = styled.div`
  margin-top: 90px;
  max-width: 935px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-start;
  flex: 1;
`
const Title = styled.h1`
  font-family: ${props => props.theme.font};
  font-size: 1.2rem;
  ${media.tabletUp`font-size: 2rem;`}
`
const Body = styled.div`
`

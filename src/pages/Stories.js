import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router'

import {media} from '../components/styled'

export default ({stories}) => (
  <OuterWrapper>
    <Wrapper>
      {stories && stories.map(story => (
        <Story key={story.sys.id} to={`published/${story.fields.title}`}>
          <Title to={`/writing/${story.fields.urlSlug}`}>{story.fields.title}</Title>
          <Preview>this is a preview</Preview>
          <ReadMore to={`/writing/${story.fields.urlSlug}`}>Read more →</ReadMore>
        </Story>
      ))}
    </Wrapper>
  </OuterWrapper>
)
const Wrapper = styled.div`
  display: flex;
  align-items: stretch;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-around;
  flex: 1;
  max-width: 600px;
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
const Story = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 1rem;
`
const Title = styled(Link)`
  font-family: ${props => props.theme.font};
  font-size: 1.2rem;
  text-decoration: none;
  color: black;
  margin: 0.67rem 0;
  ${media.tabletUp`font-size: 2rem;`}
`
const Preview = styled.div`
  font-family: sans-serif;
  ${media.tabletUp`font-size: 1.1rem;`}
`
const ReadMore = styled(Link)`
  font-family: ${props => props.theme.font};
  color: ${props => props.theme.red};
  padding: 0.37rem .2rem;
  margin: 0.3rem .1rem;
  ${media.tabletUp`font-size: 1.2rem;`}

  &:hover {
    background: rgba(103, 56, 49, 0.27);
    border-radius: 5px;
  }
`

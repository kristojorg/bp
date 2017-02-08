import React from 'react'
import styled from 'styled-components'
import Markdown from 'react-remarkable'
import moment from 'moment';

import {media} from '../components/styled'

export default ({stories, params}) => {
  if (!stories) return null;
  const slug = params.story;
  const story = stories.find(
    story => story.fields.urlSlug === slug
  );
  console.log(story);
  return (
    <OuterWrapper>
      <StoryView
        title={story.fields.title}
        body={story.fields.post}
        date={story.fields.date}
      />
    </OuterWrapper>
  )
}
export const StoryView = ({title,body, date}) => (
  <Wrapper>
    <Header>
      <Title>{title}</Title>
      <Date>{moment(date).format('MMM Do YYYY')}</Date>
    </Header>
    <Body>
      <Markdown source={body} />
    </Body>
  </Wrapper>
)
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
  margin-bottom: 5px;
  margin-right: 5px;
`
const Body = styled.div`
`
const Header = styled.div`
  flex-direction: row;
  display: flex;
  align-items: baseline;
  border-bottom: 1px solid #757575;
  justify-content: space-between;
  flex-wrap: wrap;
`
const Date = styled.div`
  color: #757575;
  font-size: 1em;
`

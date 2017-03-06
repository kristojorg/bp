import React from 'react'
import styled from 'styled-components'
import Markdown from 'react-remarkable'

import {media} from '../components/styled'

function formatDate (date) {
  try{
    return new Intl.DateTimeFormat("en-US").format(new Date(date));
  } catch (e) {
    return '';
  }
}

export default ({stories, params}) => {
  if (!stories) return null;
  const slug = params.story;
  const story = stories.find(
    story => story.fields.urlSlug === slug
  );
  return (
    <OuterWrapper>
      <StoryView
        title={story.fields.title}
        body={story.fields.post}
        date={story.sys.createdAt}
      />
    </OuterWrapper>
  )
}
export const StoryView = ({title,body, date}) => (
  <Wrapper className="blog-post">
    <Header>
      <Title>{title}</Title>
      <DateDiv>{formatDate(date)}</DateDiv>
    </Header>
    <Body>
      <Markdown source={body} options={{html:true}}/>
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
  margin-bottom: 50px;

  img {
        max-width: 600;
        object-fit: contain;
        width: 100%;
        margin: 10px 0px;
  }
  video {
    width: 100%;
    max-height: 80vh;
  }
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
  border-bottom: ${props=> props.border && `1px solid #757575`};
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 10px;
`
const DateDiv = styled.div`
  color: #abaaaa;
  font-size: 1em;
  padding-right: 3px;
`

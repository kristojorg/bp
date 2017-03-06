import React from 'react'
import styled from 'styled-components'

import {StoryView} from './Story';

export default ({stories}) => (
  <OuterWrapper>
    <Wrapper>
      {stories && stories.map(story => (
        <StoryView
          key={story.sys.id}
          title={story.fields.title}
          body={story.fields.post}
          date={story.sys.createdAt}
        />
      ))}
    </Wrapper>
  </OuterWrapper>
)
/*
<Story key={story.sys.id} to={`/blog/${story.fields.title}`}>
  <Title to={`/blog/${story.fields.urlSlug}`}>{story.fields.title}</Title>
  <Preview>this is a preview</Preview>
  <ReadMore to={`/blog/${story.fields.urlSlug}`}>Read more →</ReadMore>
</Story>
*/
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

import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router'

import {OuterWrapper, Wrapper} from './albums'

export default ({publications}) => {
  return (
    <OuterWrapper>
      <Wrapper>
        {publications && publications.map(publication => (
          <Publication key={publication.sys.id} to={`published/${publication.fields.title}`}>
            <Text>{publication.fields.title}</Text>
          </Publication>
        ))}
      </Wrapper>
    </OuterWrapper>
  )
}

const Publication = styled(Link)`
  width: 293px;
  height: 293px;
  color: ${props => props.theme.red};
  border: 2px solid ${props => props.theme.red};
  font-family: ${props => props.theme.font};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 80px;
  margin: 1em;
  text-decoration: none;
`
const Text = styled.span`
  transform: rotate(-45deg);
`

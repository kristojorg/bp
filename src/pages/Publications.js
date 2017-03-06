import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router'
import Sparkle from '../components/Sparkle'


// import {Wrapper} from './albums'

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
      <Sparkle />
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
  font-size: 55px;
  margin: 2%;
  text-decoration: none;
`
const Text = styled.span`
  transform: rotate(-45deg);
  text-align: center;
`
const OuterWrapper = styled.div`
  margin-top: 110px;
  max-width: 1080px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-start;
  flex: 1;
`
const Wrapper = styled.div`
  display: flex;
  align-items: start;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  flex: 1;
`

import React from 'react';
import styled from 'styled-components';
import HomeImage from './unnamed.jpg';

export default () => (
  <Wrapper>
    <HomePage>
      <HomeImg alt="home image" src={HomeImage} />
    </HomePage>
  </Wrapper>
)

const Wrapper = styled.div`
  flex: 1;
  display: flex;
`

const HomeImg = styled.img`
  width: 90vw;
  height: 90vh;
  z-index: -1;
  object-fit: cover;
`

const HomePage = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`

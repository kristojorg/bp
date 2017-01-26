import React from 'react';
import styled from 'styled-components';

import Layout from '../components/Layout';


export default () => (
  <Layout>
    <HomePage>
      <HomeImg alt="home image" src="../static/unnamed.jpg" />
    </HomePage>
  </Layout>
)

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

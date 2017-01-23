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
  width: 60vw;
  height: 80vh;
  object-fit: contain;
`

const HomePage = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`

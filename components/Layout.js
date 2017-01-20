import React from 'react';
import Head from './Head';
import styled from 'styled-components';

import { media, Flex, flex } from '../components/styled';

export default ({ children, title}) => (
  <Root>
    <Head title={title} />
    <Header />

    <Body>hi {children}</Body>
    <Footer>
      <Email href="mailto:beatricehelman@gmail.com">
        beatricehelman@gmail.com
      </Email>
    </Footer>
  </Root>
)

const Body = styled.div`
  ${flex()};
  flex: 1;
`

const Root = styled.div`
  width: 100vw;
  height: 100vh;
  ${flex(true)}
`

const Email = styled.a`

`

const Footer = styled.footer`
  ${flex()}
  align-items: center;
  justify-content: center;
`

// const Title = styled.h1`
//   ${media.tabletUp`color: red`}
//   ${media.desktopUp`color: magenta`}
//   ${media.phoneOnly`color:blue`};
//
// `

const Header = () => (
  <Flex >

  </Flex>
);

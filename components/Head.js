import React from 'react';
import Head from 'next/head';

export default ({ title = "Beatrice Helman" }) => (
  <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="shortcut icon" href="static/favicon.ico" />
    <link
      rel="stylesheet"
      type="text/css"
      href="https://fonts.googleapis.com/css?family=Permanent+Marker|Signika|Concert+One|Cabin"
    />
    {/* <title>{title}</title> */}
  </Head>
)

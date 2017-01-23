import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document'
import {styleSheet} from 'styled-components'


export default class MyDocument extends Document {
  static async getInitialProps ({ renderPage }) {
    const page = renderPage();
    let style = '';
    try {
      style = styleSheet.getCSS();
    }
    catch (e) {
      
    }
    return { ...page, style }
  }

  render () {
    console.log('HERE');
    return (
      <html>
        <Head>
          <style dangerouslySetInnerHTML={{ __html: this.props.style }} />
        </Head>
        <body style={{margin:0, fontSize:16}}>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}

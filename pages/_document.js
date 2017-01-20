import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document'
import styleSheet from 'styled-components/lib/models/StyleSheet'

export default class MyDocument extends Document {
  static async getInitialProps ({ renderPage }) {
    const page = renderPage()
    const style = styleSheet.rules().map(rule => rule.cssText).join('\n');
    return { ...page, style }
  }

  render () {

    return (
      <html>
        <Head>
          <title>Bea Helman</title>
          <style dangerouslySetInnerHTML={{ __html: this.props.style }} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}

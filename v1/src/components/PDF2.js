import React from 'react';

import PDFJS from 'pdfjs-dist';

const PDF_URL = 'https://mozilla.github.io/pdf.js/web/compressed.tracemonkey-pldi-09.pdf'


export const PDF = ComposedComponent => class extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      pdf: null,
      // scale: 1.2
    }
  }
  getChildContext () {
    return {
      pdf: this.state.pdf,
      // scale: this.state.scale
    }
  }
  componentDidMount () {
    PDFJS.getDocument(this.props.src).then((pdf) => {
      console.log('THE DOCUMENT IS HERE', pdf, PDFJS)
      this.setState({ pdf })
    })
  }
  render () {
    console.log('PDF', this.props, this.state);
    // return (<ComposedComponent pdf={this.state.pdf} scale={this.state.scale}/>)
    return null;
  }
}

// PDF.propTypes = {
//   src: React.PropTypes.string.isRequired
// }
//
// PDF.childContextTypes = {
//   pdf: React.PropTypes.object,
//   scale: React.PropTypes.number
// }

class Page extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      status: 'N/A',
      page: null,
      width: 0,
      height: 0
    }
  }
  shouldComponentUpdate (nextProps, nextState, nextContext) {
    return this.context.pdf != nextContext.pdf || this.state.status !== nextState.status
  }
  componentDidUpdate (nextProps, nextState, nextContext) {
    this._update(nextContext.pdf)
  }
  componentDidMount () {
    this._update(this.context.pdf)
  }
  _update (pdf) {
    if (pdf) {
      this._loadPage(pdf)
    } else {
      this.setState({ status: 'loading' })
    }
  }
  _loadPage (pdf) {
    if (this.state.status === 'rendering' || this.state.page != null) return;
    pdf.getPage(this.props.index).then(this._renderPage.bind(this))
    this.setState({ status: 'rendering' })
  }
  _renderPage (page) {
    console.log(page)
    let { scale } = this.props;
    let viewport = page.getViewport(scale)
    let { width, height } = viewport
    let canvas = this.refs.canvas
    let context = canvas.getContext('2d')
    console.log(viewport.height, viewport.width)
    canvas.width = width
    canvas.height = height

    page.render({
      canvasContext: context,
      viewport
    })

    this.setState({ status: 'rendered', page, width, height })
  }
  render () {
    let { width, height, status } = this.state
    return (
      <div className={`pdf-page ${status}`} style={{width, height}}>
        <canvas ref='canvas' />
      </div>
    )
  }
}

Page.propTypes = {
  index: React.PropTypes.number.isRequired
}
Page.contextTypes = PDF.childContextTypes

export class Viewer extends React.Component {
  render () {
    let { pdf } = this.props
    let numPages = pdf ? pdf.pdfInfo.numPages : 0
    let fingerprint = pdf ? pdf.pdfInfo.fingerprint : 'none'
    let pages = Array.apply(null, { length: numPages })
      .map((v, i) => (<Page index={i + 1} key={`${fingerprint}-${i}`} {...this.props}/>))

    return (
      <div className='pdf-viewer'>
        {pages}
      </div>
    )
  }
}
Viewer.contextTypes = PDF.childContextTypes

const PDFView = PDF(Viewer);
export default PDF;

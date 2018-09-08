import React from 'react'
import throttle from 'lodash.throttle'

export default class WindowSize extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      height: window.innerHeight,
      width: window.innerWidth,
    }
    this.resize = throttle(this._onWindowResize, 250);
    window.addEventListener('resize',this.resize);
  }

  _onWindowResize = () => {
    this.setState({
      height: window.innerHeight,
      width: window.innerWidth,
    });
  }

  render() {
    return this.props.children(this.state.height, this.state.width);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resize);
  }
}

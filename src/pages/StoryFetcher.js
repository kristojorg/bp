import React from 'react'

import api from '../api'

const WRITING_ID = 'post';

export default class StoryFetcher extends React.Component {
  constructor() {
    super();
    this.state = {
      stories: null,
    }
  }

  componentDidMount(){
    api.getEntries({
      'content_type':WRITING_ID,
      'order': 'sys.createdAt'
    }).then(entries => {
      this.setState({
        stories: entries.items.reverse()
      })
    })
  }

  render() {
    const children = React.cloneElement(this.props.children, {stories: this.state.stories})
    return children;
  }
}

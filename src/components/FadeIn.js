// @flow
import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group' // ES6

const FadeIn = ({children}) => {
  return (
    <ReactCSSTransitionGroup
      transitionName="fadeIn"
      transitionEnterTimeout={1000}
      transitionLeaveTimeout={500}
      transitionAppearTimeout={1000}
      transitionAppear={true}
    >
      {children}
    </ReactCSSTransitionGroup>
  )
}

export default FadeIn;

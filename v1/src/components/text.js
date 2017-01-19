// @flow
import React from 'react';
import classnames from 'classnames';

import './text.css';

export const Text = ({children, className}) => {
  return (
    <span className={classnames(className,'text')} >{children}</span>
  )
}

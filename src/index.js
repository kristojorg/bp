import React, {PropTypes} from 'react';
import ReactDOM from 'react-dom';
import Root from './Root';
import './index.css';
import withContext from 'recompose/withContext';
import Measure from 'react-measure'

const ContextRoot = withContext(
  {bodyDimensions: PropTypes.object},
  ({dimensions}) => ({bodyDimensions: dimensions})
)(Root);

const blackList = ['top', 'right', 'bottom', 'left'];

ReactDOM.render(
  <Measure blackList={blackList}>
    {dimensions => <ContextRoot dimensions={dimensions} />}
  </Measure>,
  document.getElementById('root')
);

import 'babel-core/polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import ConnectedCRUDTable from './src/components/crud-redux';

ReactDOM.render(
  <ConnectedCRUDTable />,
  document.getElementById('root')
);

import 'babel-core/polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import CRUDTable from './src/components/crud-redux';
import configureStore from './store/configureStore';

ReactDOM.render(
  <CRUDTable />
  document.getElementById('root')
);

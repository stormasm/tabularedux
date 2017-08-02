import { createStore } from 'redux';

import { generateRows } from './../helpers';
import rowReducer from './../reducers';

const schema = {
  type: 'object',
  properties: {
    id: {
      type: 'string'
    },
    threadid: {
      type: 'integer'
    },
    by: {
      type: 'string'
    },
    score: {
      type: 'integer'
    },
    title: {
      type: 'string'
    },
    active: {
      type: 'boolean'
    }
  },
  required: ['id', 'threadid', 'name', 'position', 'active']
};

const configureStore = () => createStore(
    rowReducer,
    generateRows(3,schema),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default configureStore

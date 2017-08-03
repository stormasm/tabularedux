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

const my2genrows = () =>
    [
    {
        "active":false,
        "by":"Homer Johnson",
        "id":"dcf6cd91-8b29-4430-ae79-369f5b610567",
        "score": 6212,
        "threadid": 3987,
        "title": "Boss"
    },
    {
        "active":true,
        "by":"Ralph Smith",
        "id":"dcf6cd91-8c29-4430-ae79-369f5b610567",
        "score": 7212,
        "threadid": 4987,
        "title": "Contractor"
    },
    {
        "active":false,
        "by":"Pete Domen",
        "id":"dcf6cd91-8a29-4430-ae79-369f5b610567",
        "score": 8212,
        "threadid": 5987,
        "title": "Student"
    }
    ]

const mygenrows = () => {
    const myrows = generateRows(3,schema);
    console.log(myrows);
    return myrows;
}

const configureStore = () => createStore(
    rowReducer,
    //generateRows(3,schema),
    my2genrows(),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default configureStore

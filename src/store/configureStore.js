import { createStore } from 'redux';
import { cloneDeep, findIndex } from 'lodash';
import { generateRows } from './../helpers';

const schema = {
  type: 'object',
  properties: {
    id: {
      type: 'string'
    },
    name: {
      type: 'string'
    },
    position: {
      type: 'string'
    },
    salary: {
      type: 'integer'
    },
    active: {
      type: 'boolean'
    }
  },
  required: ['id', 'name', 'position', 'salary', 'active']
};

function editProperty(rows, index, values) {
  // Skip mutation, there's likely a neater way to achieve this
  const ret = cloneDeep(rows);

  Object.keys(values).forEach(v => {
    ret[index][v] = values[v];
  });

  return ret;
}

const reducer = (state, action) => {
  const row = action.row;
  const index = row && findIndex(state, { id: row.id });

  switch (action.type) {
    case 'CREATE_ROW':
      return [row].concat(state);

    case 'DELETE_ROW':
      if (index >= 0) {
        return state.slice(0, index).concat(state.slice(index + 1));
      }

    case 'EDIT_ROW':
      if (index >= 0) {
        return editProperty(state, index, {
          editing: row.columnIndex
        });
      }

    case 'CONFIRM_EDIT':
      if (index >= 0) {
        return editProperty(state, index, {
          [row.property]: row.value,
          editing: false
        });
      }

    default:
      return state;
  }

  return state;
};

export default function configureStore() {
  const store = createStore(reducer, generateRows(20, schema));
  return store;
}

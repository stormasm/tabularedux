import { cloneDeep, findIndex } from 'lodash';
import { combineReducers } from './../redux372'

const editProperty = (rows, index, values) => {
  // Skip mutation, there's likely a neater way to achieve this
  const ret = cloneDeep(rows);

  Object.keys(values).forEach(v => {
    ret[index][v] = values[v];
  });

  return ret;
}

const initialState = {
  myrows: []
}

const rowReducer = (state = initialState.myrows, action) => {
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

    case 'SAVE_ROW':
    if (index >= 0) {
        console.log(index,state[index])
    }

    default:
      return state;
  }
};

export default rowReducer

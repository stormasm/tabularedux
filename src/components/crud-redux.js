/*
The following example shows how to implement basic editing functionality with Redux.
*/

import React from 'react';
import { connect } from 'react-redux';

import * as Table from 'reactabular-table';
import * as edit from 'react-edit';
import uuid from 'uuid';

const actions = {
  createRow: () => ({
    type: 'CREATE_ROW',
    row: { name: 'John Doe', id: uuid.v4() }
  }),
  deleteRow: id => ({
    type: 'DELETE_ROW',
    row: { id }
  }),
  editRow: (columnIndex, id) => ({
    type: 'EDIT_ROW',
    row: { columnIndex, id }
  }),
  confirmEdit: (property, value, id) => ({
    type: 'CONFIRM_EDIT',
    row: { property, value, id }
  }),
  saveRow: id => ({
    type: 'SAVE_ROW',
    row: { id }
  }),
};

class CRUDTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      columns: this.getColumns() // initial columns
    };
  }
  getColumns() {
    const editable = edit.edit({
      isEditing: ({ columnIndex, rowData }) => columnIndex === rowData.editing,
      onActivate: ({ columnIndex, rowData }) => {
        this.props.editRow(columnIndex, rowData.id);
      },
      onValue: ({ value, rowData, property }) => {
        this.props.confirmEdit(property, value, rowData.id);
      }
    });

    return [
    {
      property: 'threadid',
      header: {
        label: 'ThreadId'
      },
      cell: {
        transforms: [editable(edit.input({ props: { type: 'number' } }))]
      }
    },
      {
        property: 'name',
        header: {
          label: 'Name'
        },
        cell: {
          transforms: [editable(edit.input())]
        }
      },
      {
        property: 'position',
        header: {
          label: 'Position'
        },
        cell: {
          transforms: [editable(edit.input())]
        }
      },
      {
        property: 'active',
        header: {
          label: 'Active'
        },
        cell: {
          transforms: [editable(edit.boolean())],
          formatters: [active => active && <span>&#10003;</span>]
        }
      },
      {
        props: {
          style: {
            width: 50
          }
        },
        cell: {
          formatters: [
            (value, { rowData }) => (
              <span
                className="remove"
                onClick={() => this.props.deleteRow(rowData.id)} style={{ cursor: 'pointer' }}
              >
                &#10007;
              </span>
            )
          ]
        }
      },
      {
        props: {
          style: {
            width: 50
          }
        },
        cell: {
          formatters: [
            (value, { rowData }) => (
              <span
                className="save"
                onClick={() => this.props.saveRow(rowData.id)} style={{ cursor: 'pointer' }}
              >
              Save
              </span>
            )
          ]
        }
      }





    ];
  }
  render() {
    const { rows } = this.props;
    const { columns } = this.state;

    return (
      <div>
        <Table.Provider
          className="pure-table pure-table-striped"
          columns={columns}
        >
          <Table.Header />

          <tbody>
            <tr>
              <td><button type="button" onClick={e => {
                e.preventDefault();

                this.props.createRow();
              }}>Add new</button></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>

          <Table.Body rows={rows} rowKey="id" />
        </Table.Provider>
      </div>
    );
  }
}

const ConnectedCRUDTable = connect(
  rows => ({ rows }),
  actions
)(CRUDTable);

export default ConnectedCRUDTable

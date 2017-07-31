import React from "react";
import "./App.css";
import * as Table from "reactabular-table";

const rows = [
  {
    id: 100,
    name: "Stewart",
    tools: {
      hammer: true
    },
    city: "indy"
  },
  {
    id: 101,
    name: "Sam",
    tools: {
      hammer: false
    },
    city: "atl"
  }
];
const cities = {
  indy: "Indianapolis",
  atl: "Atlanta"
};

const columns = [
  {
    property: "name",
    header: {
      label: "Name",
      transforms: [
        label => ({
          onClick: () => alert(`clicked ${label}`)
        })
      ]
    }
  },
  {
    property: "tools",
    header: {
      label: "Active",
      transforms: [
        label => ({
          onClick: () => alert(`clicked ${label}`)
        })
      ]
    },
    cell: {
      formatters: [tools => (tools.hammer ? "Hammertime" : "nope")]
    }
  },
  {
    property: "city",
    header: {
      label: "City",
      transforms: [
        label => ({
          onClick: () => alert(`clicked ${label}`)
        })
      ]
    },
    cell: {
      formatters: [city => cities[city]]
    }
  }
];

class TableFriends extends React.Component {
  render() {
    return (
      <Table.Provider
        className="pure-table pure-table-striped"
        columns={columns}
      >
        <Table.Header />

        <Table.Body rows={rows} rowKey="id" />
      </Table.Provider>
    );
  }
}

export default TableFriends;

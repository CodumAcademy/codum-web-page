import React from "react";
import PropTypes from "prop-types";
import ReactTable from "react-table";

import columns from "./columns";

const UserList = props => (
  <div>
    {props.users.lenght > 0 ? (
      <ReactTable
        data={props.users}
        columns={columns}
        defaultPageSize={10}
        className="-striped -highlight"
        previousText="Anterior"
        nextText="Siguiente"
        ofText="de"
        rowsText="registros"
        pageText="Página"
        noDataText="No se encontró información"
        style={{
          height: "500px" // This will force the table body to overflow and scroll, since there is not enough room
        }}
      />
    ) : (
      <h3>No Existen usuarios</h3>
    )}
  </div>
);

UserList.propTypes = {
  users: PropTypes.array.isRequired
};

export default UserList;

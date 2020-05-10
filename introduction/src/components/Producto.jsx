import React from "react";

const Producto = ({ producto }) => {
  const { id, precio, nombre } = producto;
  return (
    <div className="container">
      <table className="table">
        <tbody>
          <tr>
            <th>{id}</th>
            <td>{nombre}</td>
            <td>{precio}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Producto;

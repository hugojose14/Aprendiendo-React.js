import React from "react";

const Producto = ({ producto }) => {
  const { id, precio, nombre } = producto;

  //Agregar producto al carrito

  const selectProduct = (id) => {
    console.log("Comprando producto", id);
  };

  //Se coloca la funcion de adentro que se quiere llamar cada vez que demos click
  return (
    <div>
      <h3>{nombre}</h3>
      <h3>{precio}</h3>

      <button className="btn bg-warning" onClick={() => selectProduct(id)}>
        Comprar
      </button>
    </div>
  );
};

export default Producto;

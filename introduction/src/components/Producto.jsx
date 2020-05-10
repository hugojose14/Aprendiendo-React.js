import React from "react";

const Producto = ({ producto, carrito, agregarProducto, products }) => {
  const { id, precio, nombre } = producto;
  //Agregar producto al carrito

  const selectProduct = (id) => {
    const producto = products.filter((pro) => pro.id === id);
    console.log(producto[0]);
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

import React, { Fragment, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Producto from "./components/Producto";

function App() {
  //Lista de productos
  //El primero va a ser el state y el segundo una función que me ayuda rescribirlo
  //Dentro del useState los valores iniciales
  const [products, agregarProducto] = useState([
    { id: 1, nombre: "Camisa JS", precio: 150 },
    { id: 2, nombre: "Camisa Ruby", precio: 0 },
    { id: 3, nombre: "Camisa Go", precio: 80 },
    { id: 4, nombre: "Camisa Java", precio: 100 },
  ]);

  //State para un carrito de compras
  const [carrito, agregarCarrito] = [];

  //Obtener la fecha
  const fecha = new Date().getFullYear();

  return (
    <Fragment>
      <Header titulo="Tienda virtual" />

      <h1>Lista de productos</h1>

      {products.map((producto) => (
        <Producto
          producto={producto}
          key={producto.id}
          carrito={carrito}
          agregarProducto={agregarProducto}
          products={products}
        />
      ))}

      <Footer fecha={fecha} />
    </Fragment>
  );
}

export default App;

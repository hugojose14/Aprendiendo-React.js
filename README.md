# Curso de React.js 
Aprendiendo React desde lo más básico hasta experto.

## Comenzando a crear una aplicación en React.js 🚀

npx create-react-app myapp

## Creando un componente 

###### 1. Crear una carpeta dentro de src y dentro agregar mis componentes

Dentro de la carpeta src agregar todos los componentes

```javascript

import React from "react";

const Footer = ({ fecha }) => {
  return (
    <footer>
      <p>Todos los derechos reservados &copy; {fecha}</p>
    </footer>
  );
};

export default Footer;

```

## Props
Me permiten enviar datos desde el componente padre a los componentes hijos .

```javascript

//Componente padre App.js

import React, { Fragment } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  //Obtener la fecha
  const fecha = new Date().getFullYear();

  return (
    <Fragment>
      <Header titulo="Tienda virtual" />
      <Footer fecha={fecha} />
    </Fragment>
  );
}

export default App;

```

```javascript

import React from "react";

const Footer = ({ fecha }) => {
  return (
    <footer>
      <p>Todos los derechos reservados &copy; {fecha}</p>
    </footer>
  );
};

export default Footer;

```

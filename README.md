## Curso de React.js 
Aprendiendo React desde lo más básico hasta experto.

## ¿Qué es React.js?
Una biblioteca de JavaScript para construir interfaces de usuario

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
###### 2. Llamar esos componentes dentro de App.js que es el encargado de llamar los componentes hijos 

```javascript
//Componente padre App.js

import React, { Fragment } from "react";
import Footer from "./components/Footer";

function App() {
  //Obtener la fecha
  const fecha = new Date().getFullYear();

  return (
    <Fragment>
      <Footer fecha={fecha} />
    </Fragment>
  );
}

export default App;

```

Nota: React Fragment lo que nos permite es evitar el uso de html de manera innecesaria, ya que cuando retornas un componente generalmente debe hacerse dentro de una etiqueta que los envuelva, al retornarlo dentro del fragment sinula esa etiqueta, pero cuando lo inspeccionas en el navegador, descubres que no renderize ninguna etiqueta extra.

Nota: El código jsx se inyectará dentro de la funcion return. 


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

##React Hooks 

Los Hooks son una nueva API de la librería de React que nos permite tener estado, y otras características de React, en los componentes creados con una function. 
Me permiten actualizar el State sin necesidad de crear un Class Componente, en resumidas cuentas me permite manejar el estado de los componentes. 

###### 1. USESTATE

Hooks vienen con una función llamada useState.

```javascript
import React, {useState} from 'react';
```
Esta función al extraer sus valores consta de 2 partes: 
```javascript
const [estudiantes, guardarEstudiante] = useState([]);
```
estudiante = Tiene el state actual 
guardarEstudiante = Es la función que modifica el state 

##### 2. Beneficios de los HOOKS

- A: `Menor cantidad de código`
- B: `Mayor facilidad para implementar reducers, administrar el state y  context`

Nota: 

Reducers: Las acciones describen que algo pasó, pero no especifican cómo cambió el estado de la aplicación en respuesta. Esto es trabajo de los reducers.

state: el cambio del estado de la aplicación. 

context:  Un comonente de React que se suscribe a cambios de contexto. Esto le permite suscribirse a un contexto dentro de un componente de función.






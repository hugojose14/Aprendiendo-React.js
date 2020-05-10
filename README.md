## Curso de React.js 
Aprendiendo React desde lo más básico hasta experto.

## ¿Qué es React.js?
Una biblioteca de JavaScript para construir interfaces de usuario

## Comenzando a crear una aplicación en React.js 🚀

npx create-react-app myapp

## Repaso de JavaScript intermedio

##### 1. Ejemplo destructurando un objeto

```javascript
//Creando un objeto de tipo persona
const persona = {
  nombre: 'Hugo',
  apellido: 'Pérez',
  edad:21,
  sexo:'M'
}

//Desempaco las propiedades de ese objeto, importante colocar {} y dentro las propieades
const {nombre,apellido,edad,sexo} = persona;

//Imprimiendo con templates literals y 
console.log(`${nombre} ${apellido} ${edad} ${sexo} `;
```
#### 2. Destructurando un objeto anidado

```javascript
const persona = {
  
  nombre:'Hugo',
  apellido:'Pérez',
  padre:{    
    hijo:"20
  }
}
const {padre:{hijo}} = persona;
console.log(`${hijo}`);
```
#### 3. Destructurando un arreglo en JavaScript

```javascript 
//Una arreglo de 5 elementos
const arreglo = [1,2,3,4,5];

//Aquí desenpaquetamos el arreglo y le asignamos los dos primeros elementos a x,y
//Aquí nos saltamos el 3 y le asignamos z el valor de 4 
let[x,y,,z] = arreglo;

//1,2,4
console.log(x,y,z);

```
#### 4. Funciones de flecha 

```javascript
let nombreFuncion = (argumento1,argumento2,argumentoN)=>{
  //Lógica 
}

//Llamado de la función
nombreFunction(argumento1,argumento2,argumentoN);
```
#### 5. Operador de propagación (spread operator)

```javascript

let array1 = [0, 1, 2];
let array2 = [3, 4, 5];
arr1.push(...arr2);

[a, b, ...iterableObj] = [1, 2, 3, 4, 5];

```

#### 6. Template String

```javascript

//`cadena de texto`

//`línea 1 de la cadena de texto
// línea 2 de la cadena de texto`

//`cadena de texto ${expresión} texto`

//tag `cadena de texto ${expresión} texto`

```
#### 7. export

```javascript
/*

export { name1, name2, …, nameN };
export { variable1 as name1, variable2 as name2, …, nameN };
export let name1, name2, …, nameN; // también var
export let name1 = …, name2 = …, …, nameN; // también var, const
export function FunctionName(){...}
export class ClassName {...}

export default expression;
export default function (…) { … } // también class, function*
export default function name1(…) { … } // también class, function*
export { name1 as default, … };

export * from …;
export { name1, name2, …, nameN } from …;
export { import1 as name1, import2 as name2, …, nameN } from …;
export { default } from …;

*/
```

#### 8. Async/await


```javascript
/*

async function name([param[, param[, ... param]]]) {
   statements
}

name
El nombre de la función.

param
El nombre de un argumento que se debe pasar a la función.

statements
Las declaraciones que conforman el cuerpo de la función.

*/

async function getProcessedData(url) {
  let v;
  try {
    v = await downloadData(url); 
  } catch(e) {
    v = await downloadFallbackData(url);
  }
  return processDataInWorker(v);
}

```

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

## React Hooks 

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

##### reducers: Las acciones describen que algo pasó, pero no especifican cómo cambió el estado de la aplicación en respuesta. Esto es trabajo de los reducers.

##### state: el cambio del estado de la aplicación. 

##### context:  Un comonente de React que se suscribe a cambios de contexto. Esto le permite suscribirse a un contexto dentro de un componente de función.

#### 3. Los hooks se dividen en dos grupos 

- `Básico`
    - `UseState`
    - `useEffect`
- `Avanzados`
    - `useContext`
    - `useRef`
    - `useReducer`
    - `useCallback`
    - `useMemo`

## State (useState) 

State: En resumidas cuentas vamos a colocar todo lo que reacciona a ciertas acciones de los usuarios. 
 - `Ejemplo:`
    - `Datos de un Formulario que lea los datos`
    - `Un carrito de compras`
    - `Cuando registramos el número de personas que acceden a la pagina`
    
#### 3. Implementando los HOOKS (useState)

```javascript
import React, { Fragment, useState } from "react";

  //Lista de productos
  //El primero va a ser el state y el segundo una función que me ayuda rescribirlo
  //Dentro del useState los valores iniciales
  const [products, guardarProducts] = useState([
    { id: 1, nombre: "Camisa JS", precio: 150 },
    { id: 2, nombre: "Camisa Python", precio: 0 },
    { id: 3, nombre: "Camisa Go", precio: 80 },
    { id: 4, nombre: "Camisa Java", precio: 100 },
  ]);

```

#### 4. Enviando el objeto de productos desde el padre al hijo (En este caso el componente de productos) 

```javascript
 {products.map((producto) => (
       <Producto producto={producto} key={producto.id} />
 ))}
```

#### 5. Estructura del componente de Productos

```javascript
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
```

## Eventos

```javascript
<button onClick={activateLasers}>
  Activate Lasers
</button>
```

```javascript
function ActionLink() {
  function handleClick(e) {
    e.preventDefault();
    console.log('The link was clicked.');
  }

  return (
    <a href="#" onClick={handleClick}>
      Click me
    </a>
  );
}
```

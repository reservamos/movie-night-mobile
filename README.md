# Movie Night Mobile - React Native + Expo

Ejemplo Practico de la charla [React Native + Expo](https://docs.google.com/presentation/d/1rpoHbuYPA5O8grKDU4vtAbkCkQKOwGbdeunA3enxNG4/edit?usp=sharing), Haciendo web scraping y mostrando la informacion en una app react native

## Requisitos

* [Git](https://git-scm.com/downloads)
* [Node.JS](https://nodejs.org/en/download/) ~ 8.0
* [Expo CLI](https://docs.expo.io/versions/latest/workflow/expo-cli/)
* [Yarn](https://yarnpkg.com/es-ES/docs/install#mac-stable)
* [Expo Client](https://expo.io/tools#client)

## Instalar

1. Clonar o bajar el repositorio
2. Dentro del folder del repositorio correr: `yarn`

## Correr la aplicacion

`yarn start`

## Antes de empezar a codear

Algunas cosas que hay servirán para entender la aplicación:

```javascript
// 1. Javascript is a dynamic language. So no types
const name = "Adrian Cuadros"
let age = 32

// 2. Short function declaration
const saySomething = (something) => {
  console.log(`You said: ${something}`);
}

saySomething("Hi!")

// 3. Javascript Objects
const fruit = {
  name: 'Apple',
  color: 'red'
};
console.log(`${fruit.name} (${fruit.color})`);

// 4. Arrays and array functions
const fruits = [
  { name: 'Apple', color: 'red' },
  { name: 'Orange', color: 'orange' },
  { name: 'Lemon', color: 'green' }
];

fruits.forEach((fruit) => {
  console.log(fruit.name);
});

let firstGreenFruit = fruits.find((fruit) => {
  return fruit.color === 'green';
});
console.log(firstGreenFruit.name);

// 5. Promises
let promise = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000);
});

promise.then(() => {
  saySomething("Ready!");
}, () => {
  saySomething("Oh no!");
});
```


Ententiendo React Native

```javascript
// Importando React 
import React, { Component } from 'react';
import { View, Text } from 'react-native';

// componente a partir de una clase
class MyComponent extends Component {
  constructor(props) {
    super (props)
  }

  render() {
    return (
      <View>
        <Text>Hola</Text>
      </View>
    );
  }
}

// componente a partir de una funcion
const MyComponent = ({ label }) => (
  <View>
    <Text>{ label }</Text>
  </View>
);

// usando nuestro componente

render () {
  return (<MyComponent label="Hola" />);
}

```

## Bonus

* [Curso de Reservamos en ES6](https://github.com/reservamos/training)
* [Más acerca de promesas](https://codeburst.io/javascript-promises-explained-with-simple-real-life-analogies-dd6908092138)

## Prácticas en Reservamos

Escríbenos a hola@reservamos.mx con cualquier información que tengas para compartirnos.
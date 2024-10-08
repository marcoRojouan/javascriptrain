// Types de données simples
const firstName = "toto";
const myNumber = 4;
const isTrue = true;

let mySecondValue;
const myValue = null;

// Type de données complexes
const fruits = ["apple", "banana", "pineapple"];

const person = {
  firstName: "toto",
  age: 14,
  city: "Manchester",
};

// Opérateurs

// Arithmétiques : + - / * %
// Comparaison : == === != !== < > <= >= : Boolean

// Structure de contrôle
// Conditions

if (1 < 2) {
  // Traitement si vrai
}
// alternative
1 < 2 && console.log("c'est vrai");

if (1 < 2) {
  //traitement si vrai
} else {
  // traitement si c'est faux
}
// alternative
1 < 2 ? console.log("traitement vrai") : console.log("traitement faux");

const currentNumber = 0;

switch (currentNumber) {
  case 1:
    console.log("c'est UN");
    break;
  case 2: //
  case 899: //
  default:
    console.log("Autre");
}

// Les boucles

for (let i = 0; i < 10; i++) {
  // console.log
}

let i = 0;

while (i < 10) {
  i++;
}

// Fonctions
function sayHello(firstName) {
  return `Bonjour ${firstName}`;
}

const sayHello2 = (firstName) => `Bonjour ${firstName}`;

const result = sayHello("Maurice");

// Callback

const sayHello3 = () => {
  console.log("Coucou from 3");
};

const sayHello4 = (callback) => {
  console.log("Coucou from 4");
  callback();
};

sayHello4(sayHello3);
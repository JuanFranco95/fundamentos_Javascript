/*
var se utiliza para declarar variables globales o locales, y se puede reasignar su valor posteriormente.

let se utiliza para declarar variables que pueden ser reasignadas, pero no pueden ser redeclaradas dentro del mismo ámbito.

const se utiliza para declarar constantes, es decir, variables cuyo valor no puede ser reasignado después de su inicialización.
*/ 

var nombre; // declarar una variable con var
nombre = "Juan"; // asignar un valor a la variable

var apellido = "Pérez"; // declarar y asignar una variable en una sola linea
var apellido = "García"; // redeclarar la variable apellido con var (esto es permitido con var)

console.log(nombre); // Imprime "Juan"
console.log(apellido); // Imprime "Pérez"

let edad = 30; // declarar y asignar una variable con let
console.log(edad); // Imprime 30

edad = 31; // reasignar el valor de la variable edad
console.log(edad); // Imprime 31

const PI = 3.14159; // declarar una constante 
console.log(PI); // Imprime 3.14159

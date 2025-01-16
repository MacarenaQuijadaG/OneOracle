// 1.- Mostrar un mensaje de bienvenida en la consola:
console.log("Bienvenido al programa");

// 2.- Mostrar un mensaje personalizado con tu nombre:
let nombre = "Macarena";

console.log("¡Hola, " + nombre + "!");
// 3.- Mostrar un mensaje con tu nombre utilizando alert:
let nom = "Macarena";
alert("¡Hola, " + nom + "!");

// 4.- Utilizar prompt para preguntar el lenguaje de programación favorito:
let lenguaje = prompt("¿Cuál es el lenguaje de programación que más te gusta?");
console.log("Tu lenguaje favorito es: " + lenguaje);

// 5.- Suma de dos valores:
let v1 = 5;
let v2 = 3;
let res = valor1 + valor2;
console.log("La suma de " + v1 + " y " + v2 + " es igual a " + res);

// 6.- Resta de dos valores:
let valor1 = 5;
let valor2 = 3;
let resultado = valor1 - valor2;
console.log("La diferencia entre " + valor1 + " y " + valor2 + " es igual a " + resultado);

// 7.- Verificar si una persona es mayor o menor de edad:
let edad = prompt("¿Cuántos años tienes?");
if (edad >= 18) {
    console.log("Eres mayor de edad.");
} else {
    console.log("Eres menor de edad.");
}

//8.- Verificar si un número es positivo, negativo o cero:
let numero = prompt("Introduce un número");
if (numero > 0) {
    console.log("El número es positivo");
} else if (numero < 0) {
    console.log("El número es negativo");
} else {
    console.log("El número es cero");
}

// 9.- Mostrar los números del 1 al 10 con un bucle while:

let i = 1;
while (i <= 10) {
    console.log(i);
    i++;
}
// 10.- Determinar si la nota es aprobada o reprobada:

let nota = 8;
if (nota >= 7) {
    console.log("Aprobado");
} else {
    console.log("Reprobado");
}
// 11.- Generar y mostrar un número aleatorio con Math.random:

let numAleatorio = Math.random();
console.log("Número aleatorio: " + numAleatorio);

// 12.- Generar un número entero entre 1 y 10 con Math.random:

let numeroAleatorio = Math.floor(Math.random() * 10) + 1;
console.log("Número aleatorio entre 1 y 10: " + numeroAleatorio);

// 13.- Generar un número entero entre 1 y 1000 con Math.random:

let numeroAle = Math.floor(Math.random() * 1000) + 1;
console.log("Número aleatorio entre 1 y 1000: " + numeroAle);

// LECTURA

// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Math/random
// 1. Contador que comienza en 1 y va hasta 10:

let contador = 1;
while (contador <= 10) {
  console.log(contador);
  contador++;
}
// 2. Contador que comienza en 10 y va hasta 0:

let co = 10;
while (co >= 0) {
  console.log(co);
  co--;
}
// 3. Programa de cuenta regresiva:

let numero = parseInt(prompt("Introduce un número para la cuenta regresiva:"));
let conta = numero;
while (conta >= 0) {
  console.log(conta);
  conta--;
}
// 4. Programa de cuenta progresiva:

let n = parseInt(prompt("Introduce un número para la cuenta progresiva:"));
let cont = 0;
while (cont <= n) {
  console.log(cont);
  cont++;
}


// LECTURA 
// https://www.aluracursos.com/blog/como-utilizar-operadores-de-comparacion-en-javascript

// OPERADORES LOGICOS

let edad = 25;
let tieneLicencia = true;

// si la edad es mayor de 18 y tiene una licencia...
if (edad > 18 && tieneLicencia) {
  console.log("Puede conducir!");
} else {
  console.log("No puede conducir!");
}


// si tiene manzana o tiene banama…
if (tieneManzana|| tieneBanana) {
    console.log("Tienes frutas!");
  } else {
    console.log("No tienes frutas.");
  }
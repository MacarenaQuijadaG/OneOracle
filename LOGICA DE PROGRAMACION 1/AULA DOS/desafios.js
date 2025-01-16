//1. Preguntar qué día de la semana es

let dia = prompt("¿Qué día de la semana es?");

if (dia === "Sábado" || dia === "Domingo") {
  alert("¡Buen fin de semana!");
} else {
  alert("¡Buena semana!");
}
//2. Verificar si un número es positivo o negativo

let numero = prompt("Ingresa un número:");

if (numero > 0) {
  alert("El número es positivo.");
} else if (numero < 0) {
  alert("El número es negativo.");
} else {
  alert("El número es cero.");
}
//3. Crear un sistema de puntuación para un juego

let puntuacion = prompt("Ingresa tu puntuación:");

if (puntuacion >= 100) {
  alert("¡Felicidades, has ganado!");
} else {
  alert("Inténtalo nuevamente para ganar.");
}
//4. Crear un mensaje sobre el saldo de la cuenta

let saldo = prompt("Ingresa el saldo de tu cuenta:");

alert(`Tu saldo actual es: $${saldo}`);
//5. Mostrar una alerta de bienvenida con el nombre

let nombre = prompt("Ingresa tu nombre:");

alert(`¡Bienvenido, ${nombre}!`);

//LECTURA DE ;
// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Lexical_grammar
// 1. Crear una función que muestre "¡Hola, mundo!" en la consola.

function saludarMundo() {
  console.log("¡Hola, mundo!");
}
saludarMundo()

//2. Crear una función que reciba un nombre como parámetro y muestre "¡Hola, [nombre]!" en la consola.

function saludarNombre(nombre) {
  console.log(`¡Hola, ${nombre}!`);
}
saludarNombre("Macarena");

//3. Crear una función que reciba un número como parámetro y devuelva el doble de ese número.

function doble(numero) {
  return numero * 2;
}
console.log(doble(5)); // Muestra 10

//4. Crear una función que reciba tres números como parámetros y devuelva su promedio.

function promedio(num1, num2, num3) {
  return (num1 + num2 + num3) / 3;
}
console.log(promedio(3, 6, 9)); // Muestra 6

//5. Crear una función que reciba dos números como parámetros y devuelva el mayor de ellos.

function mayor(num1, num2) {
  return num1 > num2 ? num1 : num2;
}
console.log(mayor(7, 4)); // Muestra 7

//6. Crear una función que reciba un número como parámetro y devuelva el resultado de multiplicar ese número por sí mismo.

function cuadrado(numero) {
  return numero * numero;
}
console.log(cuadrado(4)); // Muestra 16
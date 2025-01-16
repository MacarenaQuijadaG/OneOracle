//1. Función para calcular el índice de masa corporal (IMC):

function calcularIMC(peso, altura) {
  const imc = peso / (altura * altura);
  return `El IMC es: ${imc.toFixed(2)}`;
}

console.log(calcularIMC(70, 1.75)); // Ejemplo: peso = 70 kg, altura = 1.75 m
//2. Función para calcular el factorial de un número:

function calcularFactorial(numero) {
  if (numero === 0 || numero === 1) return 1;
  let factorial = 1;
  for (let i = 2; i <= numero; i++) {
    factorial *= i;
  }
  return `El factorial de ${numero} es: ${factorial}`;
}

console.log(calcularFactorial(5));
//3. Función para convertir dólares a reales (o la moneda de tu país):

function convertirDolares(dolares, cotizacion = 800) {
    const clp = dolares * cotizacion;
    return `El valor equivalente en pesos chilenos es: CLP${clp.toFixed(2)}`;
  }
  
  console.log(convertirDolares(10)); 
   
//4. Función para calcular área y perímetro de una sala rectangular:

function calcularSalaRectangular(altura, anchura) {
  const area = altura * anchura;
  const perimetro = 2 * (altura + anchura);
  return `Área: ${area} m², Perímetro: ${perimetro} m`;
}

console.log(calcularSalaRectangular(5, 3)); 
//5. Función para calcular área y perímetro de una sala circular:

function calcularSalaCircular(radio) {
  const pi = 3.14;
  const area = pi * radio * radio;
  const perimetro = 2 * pi * radio;
  return `Área: ${area.toFixed(2)} m², Perímetro: ${perimetro.toFixed(2)} m`;
}

console.log(calcularSalaCircular(4)); 
//6. Función para mostrar la tabla de multiplicar:

function mostrarTablaMultiplicar(numero) {
  let tabla = `Tabla de multiplicar del ${numero}:\n`;
  for (let i = 1; i <= 10; i++) {
    tabla += `${numero} x ${i} = ${numero * i}\n`;
  }
  return tabla;
}

console.log(mostrarTablaMultiplicar(7)); 
// 1. Crear una lista vacía llamada "listaGenerica"
let listaGenerica = [];

// 2. Crear una lista de lenguajes de programación llamada "lenguagesDeProgramacion"
let lenguagesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];

// 3. Agregar a la lista "lenguagesDeProgramacion" los elementos 'Java', 'Ruby' y 'GoLang'
lenguagesDeProgramacion.push('Java', 'Ruby', 'GoLang');

// 4. Crear una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion"
function mostrarLenguajes() {
    console.log(lenguagesDeProgramacion);
}
mostrarLenguajes();

// 5. Crear una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion" en orden inverso
function mostrarLenguajesInverso() {
    console.log(lenguagesDeProgramacion.reverse());
}
mostrarLenguajesInverso();

// 6. Crear una función que calcule el promedio de los elementos en una lista de números
function calcularPromedio(numeros) {
    let suma = numeros.reduce((acc, num) => acc + num, 0);
    return suma / numeros.length;
}
console.log(calcularPromedio([10, 20, 30, 40, 50]));

// 7. Crear una función que muestre en la consola el número más grande y el número más pequeño en una lista
function mostrarMinMax(numeros) {
    let max = Math.max(...numeros);
    let min = Math.min(...numeros);
    console.log(`El número más grande es ${max} y el más pequeño es ${min}`);
}
mostrarMinMax([10, 20, 30, 40, 50]);

// 8. Crear una función que devuelva la suma de todos los elementos en una lista
function sumarLista(numeros) {
    return numeros.reduce((acc, num) => acc + num, 0);
}
console.log(sumarLista([10, 20, 30, 40, 50]));

// 9. Crear una función que devuelva la posición en la lista donde se encuentra un elemento pasado como parámetro, o -1 si no existe en la lista
function buscarElemento(lista, elemento) {
    return lista.indexOf(elemento);
}
console.log(buscarElemento(['a', 'b', 'c', 'd'], 'c')); 
console.log(buscarElemento(['a', 'b', 'c', 'd'], 'z')); 

// 10. Crear una función que reciba dos listas de números del mismo tamaño y devuelva una nueva lista con la suma de los elementos uno a uno
function sumarListas(lista1, lista2) {
    return lista1.map((num, index) => num + lista2[index]);
}
console.log(sumarListas([1, 2, 3], [4, 5, 6])); 

// 11. Crear una función que reciba una lista de números y devuelva una nueva lista con el cuadrado de cada número
function cuadradosDeLista(lista) {
    return lista.map(num => num * num);
}
console.log(cuadradosDeLista([1, 2, 3, 4, 5])); 

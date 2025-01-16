
        // Cambia el contenido de la etiqueta h1
        document.querySelector("header h1").textContent = "Hora del Desafío";

        // Muestra un mensaje en la consola cuando se presiona el botón "Console"
        function showConsoleMessage() {
            console.log("El botón fue clicado");
        }

        // Muestra una alerta cuando se presiona el botón "Alerta"
        function showAlert() {
            alert("Yo amo JS");
        }

        // Pide una ciudad y muestra un mensaje concatenado en una alerta
        function askCity() {
            const city = prompt("¿Cuál es el nombre de una ciudad de Brasil?");
            if (city) {
                alert(`Estuve en ${city} y me acordé de ti`);
            }
        }

        // Pide dos números y muestra el resultado de la suma en una alerta
        function calculateSum() {
            const num1 = parseFloat(prompt("Ingrese el primer número:"));
            const num2 = parseFloat(prompt("Ingrese el segundo número:"));
            if (!isNaN(num1) && !isNaN(num2)) {
                alert(`La suma de ${num1} y ${num2} es igual a ${num1 + num2}`);
            } else {
                alert("Por favor ingrese números válidos.");
            }
        }


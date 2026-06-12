const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Función general para solicitar un número al usuario
function askForNumber(mensaje = 'Por favor, ingresa un número: ') {
  rl.question(mensaje, (input) => {
    const number = parseFloat(input);
    if (isNaN(number)) {
      console.log('Eso no es un número válido. Inténtalo de nuevo.');
      askForNumber(); // Volver a solicitar el número
    } else {
      console.log(`Has ingresado el número: ${number}`);
      rl.close(); // Cerrar la interfaz de lectura
    }
  });
}

let number = askForNumber("Dame un numero para procesar: ");
let numero = askForNumber("Dame un numero para procesar: ");

sumar(number, numero);


askForNumber("Dame un numero para procesar: ");
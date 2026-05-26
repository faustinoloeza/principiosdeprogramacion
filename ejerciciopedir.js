const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Ingrese el numero de productos en stock: ", (answer) => {
  const numeroProductos = parseInt(answer);
  const mensaje = "Hay mas de 20 productos en stock? ";
  const resultado = numeroProductos >= 20 ? "Si" : "No";
  console.log(mensaje + resultado);
  rl.close();
});
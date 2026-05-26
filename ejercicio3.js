// Imprimir en consola si existen mas de 20 productos en stock
// solicita el stock al usuario 

let numeroProductos = prompt("Ingrese el numero de productos en stock: ");
numeroProductos = parseInt(numeroProductos);
const mensaje = "Hay mas de 20 productos en stock?"
const resultado = numeroProductos >= 20 ? "Si" : "No";
console.log(mensaje + " " + resultado);
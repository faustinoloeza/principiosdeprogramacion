// Imprimir en consola 
// Si el numero de productos es 0, mensaje: "Alerta, te quedaste sin productos"
// Si el numero de prodcutos es menor a 5, mensaje: "Cuidado te quedan pocos productos"
// Si el numero de productos es mayor o igual a 5, mensaje: "Tienes suficientes productos"

let numeroProductos = 5;
let mensaje = "";

if (numeroProductos === 0) {
    mensaje = "Alerta, te quedaste sin productos";
} else if (numeroProductos < 5) {
    mensaje = "Cuidado, te quedan pocos productos";
} else {
    mensaje = "Tienes suficientes productos en stock";
}

console.log(mensaje);
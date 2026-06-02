// Imprimir en consola, el mensaje para 3 productos distintos:
// - El mensaje: == SISTEMA BÁSICO DE INVENTARIO ==
// - Producto 1 registrado: [nombre del producto]
// - Precio unitario del producto 1: $[precio unitario]
// - Unidades disponibles del producto 1: [cantidad en stock]
// - Producto 1 registrado: [nombre del producto]
// - Precio unitario del producto 1: $[precio unitario]
// - Unidades disponibles del producto 1: [cantidad en stock]
// - Producto 2 registrado: [nombre del producto]
// - Precio unitario del producto 2: $[precio unitario]
// - Unidades disponibles del producto 2: [cantidad en stock]
// - Producto 3 registrado: [nombre del producto]
// - Precio unitario del producto 3: $[precio unitario]
// - Unidades disponibles del producto 3: [cantidad en stock]
// - Valor total del inventario: $[precio unitario * cantidad en stock]


const products = [
  { name: "Cafe", price: 25.5, stock: 7 },
  { name: "Té", price: 15.75, stock: 10 },
  { name: "Chocolate", price: 30.0, stock: 5 }
];

let totalInventory = 0;
let message = ` == SISTEMA BÁSICO DE INVENTARIO == \n`;
products.forEach((product, index) => {
  totalInventory += parseFloat(product.price) * parseFloat(product.stock);
  message += `Producto ${index + 1} registrado: ${product.name} \n Precio unitario del producto ${index + 1}: $${product.price} \n Unidades disponibles del producto ${index + 1}: ${product.stock} \n`;
});
totalInventory = totalInventory.toFixed(2); // Redondear a 2 decimales

console.log(message + `Valor total del inventario: $${totalInventory}`);
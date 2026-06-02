// Como entrada de datos tendremos el nombre del producto, el precio unitario y la cantidad en stock.

// Imprimir en consola
// El mensaje: == SISTEMA BÁSICO DE INVENTARIO ==
// Producto registrado: [nombre del producto]
// Precio unitario: $[precio unitario]
// Unidades disponibles: [cantidad en stock]
// Valor total en inventario: $[precio unitario * cantidad en stock]


const ProductName = "Cafe";
const ProductPrice = 25.5;
const ProductStock = 7;

let totalInventori = parseFloat(ProductPrice) *  parseFloat(ProductStock);
totalInventori = totalInventori.toFixed(2); // Redondear a 2 decimales

const message = ` == SISTEMA BÁSICO DE INVENTARIO == \n Producto registrado: ${ProductName} \n Precio unitario: $${ProductPrice} \n Unidades disponibles: ${ProductStock} \n Valor total en inventario: $${totalInventori}`;

console.log(message);
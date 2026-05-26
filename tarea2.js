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


const readline = require('readline/promises');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let mensaje = "== SISTEMA BÁSICO DE INVENTARIO ==";
let productos = [];

async function registrarProducto() {
    console.log("\n--- REGISTRAR NUEVO PRODUCTO ---");
    const nombre = await rl.question("Ingrese el nombre del producto: ");
    const precioRaw = await rl.question("Ingrese el precio unitario del producto: ");
    const precio = parseFloat(precioRaw);
    if (isNaN(precio) || precio <= 0) {
        console.log("Precio no válido. Por favor, ingrese un número positivo. \n");
        return;
    }
    const cantidadRaw = await rl.question("Ingrese la cantidad en stock del producto: ");

    const cantidad = parseInt(cantidadRaw);
    if (isNaN(cantidad) || cantidad <= 0) {
        console.log("Cantidad no válida. Por favor, ingrese un número positivo. \n");
        return;
    }

    const nuevoProducto = {
        nombre: nombre,
        precio: precio,
        cantidad: cantidad
    };

    productos.push(nuevoProducto);
    console.log(`¡${nombre} registrado con éxito!\n`);
}

async function mostrarInventario() {
    let valorTotal = 0;
    console.log("\n--- INVENTARIO ACTUAL ---");
    if (productos.length === 0) {
        console.log("No hay productos registrados en el inventario.\n");
        return;
    }

    productos.forEach((prod) => {
        valorTotal += prod.precio * prod.cantidad;
        console.log(`Producto: ${prod.nombre} | Precio: $${prod.precio} | Stock: ${prod.cantidad} | Total: $${prod.precio * prod.cantidad}`);
    });
    console.log(`Valor total en inventario: $${valorTotal} \n`);
}

async function main() {
    console.log(mensaje);
    for (let i = 0; i < 3; i++) {
        await registrarProducto();
    }
    await mostrarInventario();
    rl.close();
}

main();
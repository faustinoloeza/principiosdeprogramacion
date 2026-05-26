// Como entrada de datos tendremos el nombre del producto, el precio unitario y la cantidad en stock.

// Imprimir en consola
// El mensaje: == SISTEMA BÁSICO DE INVENTARIO ==
// Producto registrado: [nombre del producto]
// Precio unitario: $[precio unitario]
// Unidades disponibles: [cantidad en stock]
// Valor total en inventario: $[precio unitario * cantidad en stock]

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
    let continuar = true;
    console.log(mensaje);
    while (continuar) {
        console.log("== MENU DE OPCIONES ==");
        console.log("1. Registrar producto");
        console.log("2. Mostrar inventario");
        console.log("3. Salir");

        const opcion = await rl.question("Seleccione una opción: ");

        switch (opcion) {
            case "1":
                await registrarProducto();
                break;
            case "2":
                await mostrarInventario();
                break;
            case "3":
                console.log("Saliendo del sistema...");
                continuar = false; // Rompemos el ciclo while
            default:
                console.log("Opción no válida. Por favor, seleccione una opción del menú.");
        }
    }
    rl.close();
}

main();


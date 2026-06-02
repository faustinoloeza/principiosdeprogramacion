


// Imprimir números pares del 1 al 20
let mensaje = "Números pares del 1 al 20:";
let numerosPares = "";
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        numerosPares += i + ",";
    }
}
console.log(`${mensaje} ${numerosPares.slice(0, -1)}`);
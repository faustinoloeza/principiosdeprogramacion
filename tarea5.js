// Imprimision de numeros impares del 1 al 20
let mensaje = "Números impares del 1 al 20:";
let numerosImpares = "";
for (let i = 1; i <= 20; i++) {
    if (i % 2 !== 0) {
        numerosImpares += i + ",";
    }
}
console.log(`${mensaje} ${numerosImpares.slice(0, -1)}`);
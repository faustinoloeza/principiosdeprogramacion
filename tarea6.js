//Imprimision de numeros primos del 1 al 20
/*
Los números primos son números enteros mayores 
a 1 que solo tienen dos divisores exactos: 
el número 1 y el propio número.
*/


let mensaje = "Números primos del 1 al 20:";
let numerosPrimos = "";
for (let i = 2; i <= 20; i++) {
    let esPrimo = true;
    for (let j = 2; j < i; j++) {
        if (i % j === 0) {
            esPrimo = false;
            break;
        }
    }
    if (esPrimo) {
        numerosPrimos += i + ",";
    }
}
console.log(`${mensaje} ${numerosPrimos.slice(0, -1)}`);
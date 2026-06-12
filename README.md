# Principios de programación

## Archivos HTML

- [Calculadora básica](index.html)
- [Métodos de número](metodos.html)

## Tarea 3 

sumatoria de numeros del 1 al 10

![Img tarea 3](/diagramas/tarea_3_sumatoria_numeros.jpg)

```js
let sumaTotal = 0;

for (let i = 1; i <= 10; i++) {
    sumaTotal += i;
}
console.log(`La suma de los números del 1 al 10 es: ${sumaTotal}`);
```

## Tarea 4
 
 Imprimision de numeros pares del 1 al 20

```js
let mensaje = "Números pares del 1 al 20:";
let numerosPares = "";
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        numerosPares += i + ",";
    }
}
console.log(`${mensaje} ${numerosPares.slice(0, -1)}`);
```

![Img tarea 4](/diagramas/tarea_4.jpg)

## Tarea 5

Imprimision de numeros impares del 1 al 20
```js
let mensaje = "Números impares del 1 al 20:";
let numerosImpares = "";
for (let i = 1; i <= 20; i++) {
    if (i % 2 !== 0) {
        numerosImpares += i + ",";
    }
}

console.log(`${mensaje} ${numerosImpares.slice(0, -1)}`);
```

![Img tarea 4](/diagramas/tarea_5.jpg)


## Tarea 6

Imprimision de numeros primos del 1 al 20

```js
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
```

![Img tarea 6](/diagramas/tarea_6.jpg)
// funciones o metodos son bloques de codigo reutilizables que realizan una tarea especifica.

const numero_1 = 8;
const numero_2 = 4;

function sumar(a, b) {
    return a + b;
}

function restar(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

function dividir(a, b) {
    if (b === 0) {
        return "No se puede dividir por cero";
    }
    return a / b;
}

console.log(`La suma de ${numero_1} y ${numero_2} es: ${sumar(numero_1, numero_2)}`);
console.log(`La resta de ${numero_1} y ${numero_2} es: ${restar(numero_1, numero_2)}`);
console.log(`La multiplicación de ${numero_1} y ${numero_2} es: ${multiplicar(numero_1, numero_2)}`);
console.log(`La división de ${numero_1} y ${numero_2} es: ${dividir(numero_1, numero_2)}`);
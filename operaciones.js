function sumar(num1, num2) {
    return num1 + num2;
}

function restar(num1, num2) {
    return num1 - num2;
}

function multiplicar(num1, num2) {
    return num1 * num2;
}

function dividir(num1, num2) {
    if (num2 === 0) {
        return "No se puede dividir por cero";
    }
    return num1 / num2;
}

function esPar(valor) {
    return valor % 2 === 0;
}

function esImpar(valor) {
    return valor % 2 !== 0;
}

function esPrimo(valor) {
    if (valor < 2) return false;
        for (let i = 2; i < valor; i++) {
            if (valor % i === 0) {
                return false;
            }
        }
    return true;
}

const nume = document.querySelector('#numero_1');
const nume2 = document.querySelector('#numero_2');

const botonSumar = document.querySelector('#sumar');
const botonRestar = document.querySelector('#restar');
const botonMultiplicar = document.querySelector('#multiplicar');
const botonDividir = document.querySelector('#dividir');

const resultado = document.querySelector('#resultado');

botonSumar.addEventListener('click', (event) => {
    //event.preventDefault();
    const num1 = parseFloat(nume.value);
    const num2 = parseFloat(nume2.value);
    const res =  sumar(num1, num2);
    resultado.textContent = `Resultado: ${res}`;
    limpiar();
});

botonRestar.addEventListener('click', (event) => {
    //event.preventDefault();
    const num1 = parseFloat(nume.value);
    const num2 = parseFloat(nume2.value);
    const res =  restar(num1, num2);
    resultado.textContent = `Resultado: ${res}`;
    limpiar();
});

botonMultiplicar.addEventListener('click', (event) => {
    //event.preventDefault();
    const num1 = parseFloat(nume.value);
    const num2 = parseFloat(nume2.value);
    const res =  multiplicar(num1, num2);
    resultado.textContent = `Resultado: ${res}`;
    limpiar();
});

botonDividir.addEventListener('click', (event) => {
    //event.preventDefault();
    const num1 = parseFloat(nume.value);
    const num2 = parseFloat(nume2.value);
    const res =  dividir(num1, num2);
    resultado.textContent = `Resultado: ${res}`;
    limpiar();
});


function limpiar() {
    nume.value = '';
    nume2.value = '';
}
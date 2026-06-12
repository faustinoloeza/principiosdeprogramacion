        const inputNumero = document.getElementById('numero');
        const resultado = document.getElementById('resultado');
        const btnTodo = document.getElementById('btn-todo');



        function leerNumero() {
            const valor = Number(inputNumero.value);
            if (!Number.isInteger(valor) || inputNumero.value === '') {
                resultado.textContent = 'Ingresa un número entero válido.';
                return null;
            }
            return valor;
        }

        btnTodo.addEventListener('click', () => {
            const valor = leerNumero();
            if (valor === null) return;
            const paridad = esPar(valor) ? 'par' : 'impar';
            const primo = esPrimo(valor) ? 'es primo' : 'no es primo';
            resultado.textContent = `El número ${valor} es ${paridad}, ${primo}.`;
        });
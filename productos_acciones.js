async function loadProducts() {
    const productsTable = document.getElementById('products');
    const url = 'https://gist.githubusercontent.com/8devmx/2af4326d6419c783ac170ac6929c5820/raw/326a57d86426fecb13f837066a15a71b6d24de14/productos.json';

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP ${response.status} - ${response.statusText}`);
        }

        const data = await response.json();
        data.forEach(product => {
            const precio = Number(product.precio ?? 0);
            const nombre = product.nombre ?? 'Sin nombre';
            const categoria = product.categoria ?? 'Sin categoría';
            const stock = product.stock ?? 'N/A';

            const row = document.createElement('tr');
            row.innerHTML = `
                        <td>${product.id ?? ''}</td>
                        <td>${nombre}</td>
                        <td>$${precio.toFixed(2)}</td>
                        <td>${categoria}</td>
                        <td>${stock}</td>
                    `;
            productsTable.appendChild(row);
        });
    } catch (error) {
        console.error('Error cargando productos:', error);
        const row = document.createElement('tr');
        row.innerHTML = '<td colspan="5">Error cargando productos</td>';
        productsTable.appendChild(row);
    }
}

let formatPesos = new Intl.NumberFormat('es-MX', {
    style: 'currency',
    currency: 'MXN',
    minimumFractionDigits: 2,
});

function loadProductsInLocal() {
    const productsTable = document.getElementById('products');
    let productRow = ``;
    for (let index = 0; index < productsData.length; index++) {
        const produtcId = productsData[index].id ?? '';
        const product = productsData[index];
        const precio =  formatPesos.format(Number(product.precio ?? 0));
        const nombre = product.nombre ?? 'Sin nombre';
        const categoria = product.categoria ?? 'Sin categoría';
        const stock = product.stock ?? 'N/A';
        const totalStock = formatPesos.format(Number(product.stock ?? 0) * Number(product.precio ?? 0));

        productRow += `<tr>
                        <td>${produtcId}</td>
                        <td>${nombre}</td>
                        <td>${precio}</td>
                        <td>${categoria}</td>
                        <td>${stock}</td>
                        <td>${totalStock}</td>
                    </tr>
                `;

    }
    productsTable.innerHTML = productRow;
}

function loadCategories() {
    const categoryFilter = document.getElementById('categoryFilter');
    let categories = [];
    let options = `<option value="">Todas las Categorías</option>`;
    productsData.forEach(product => {
        if (product.categoria && !categories.includes(product.categoria)) {
            categories.push(product.categoria);
            options += `<option value="${product.categoria}">${product.categoria}</option>`;
        }
    });

    console.table(categories);
    categoryFilter.innerHTML = options;
}

function filterByCategory(){
        const categoryFilter = document.getElementById('categoryFilter');
        categoryFilter.addEventListener('change', (event) => {
            const selectedCategory = event.target.value;
            const filteredProducts = selectedCategory ? productsData.filter(product => product.categoria === selectedCategory) : productsData;
            let productRow = ``;
            filteredProducts.forEach(product => {
                const precio =  formatPesos.format(Number(product.precio ?? 0));
                const nombre = product.nombre ?? 'Sin nombre';
                const categoria = product.categoria ?? 'Sin categoría';
                const stock = product.stock ?? 'N/A';
                const totalStock = formatPesos.format(Number(product.stock ?? 0) * Number(product.precio ?? 0));

                productRow += `<tr>
                                <td>${product.id ?? ''}</td>
                                <td>${nombre}</td>
                                <td>${precio}</td>
                                <td>${categoria}</td>
                                <td>${stock}</td>
                                <td>${totalStock}</td>
                            </tr>
                        `;
            });
            document.getElementById('products').innerHTML = productRow;
        });
}
   

document.addEventListener('DOMContentLoaded', () => {
    loadProductsInLocal();
    loadCategories();
    filterByCategory();
});



// Tarea: Agregar una columna llamada total de stock
// Totoal de stock = stock * precio
// Tarea2: Filtrar por categorias
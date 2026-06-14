let formatPesos = new Intl.NumberFormat('es-MX', {
    style: 'currency',
    currency: 'MXN',
    minimumFractionDigits: 2,
});

function loadProductsInLocal(
    selectedCategory = ''
) {
    const filteredProducts = selectedCategory ? productsData.filter(product => product.categoria === selectedCategory) : productsData;
    let productRow = ``;
    filteredProducts.forEach(product => {
        const precio = formatPesos.format(Number(product.precio ?? 0));
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
    categoryFilter.innerHTML = options;
}

function filterByCategory() {
    const categoryFilter = document.getElementById('categoryFilter');
    categoryFilter.addEventListener('change', (event) => {
        const selectedCategory = event.target.value;
        loadProductsInLocal(selectedCategory);
    });
}


document.addEventListener('DOMContentLoaded', () => {
    // Cargar categorías y productos al cargar la página
    loadCategories();
    // Cargar productos sin filtro al cargar la página
    loadProductsInLocal();
    // Configurar el filtro de categorías
    filterByCategory();
});



// Tarea: Agregar una columna llamada total de stock
// Totoal de stock = stock * precio
// Tarea2: Filtrar por categorias
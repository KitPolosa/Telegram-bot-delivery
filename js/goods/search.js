document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('userSearch');
    const searchButton = document.getElementById('searchButton');
    const sections = document.querySelectorAll('.products');
    const allProducts = [];

    sections.forEach(section => {
        const products = section.querySelectorAll('.products-item');
        products.forEach(product => {
            allProducts.push({
                element: product,
                title: product.querySelector('.products-item-title').textContent.toLowerCase(),
                section: section
            });
        });
    });

    searchButton.addEventListener('click', () => {
        const searchText = searchInput.value.toLowerCase().trim();

        if (searchText === '') {
            sections.forEach(section => section.style.display = 'block');
            allProducts.forEach(product => product.element.style.display = 'block');
        } else {
            sections.forEach(section => section.style.display = 'none');
            allProducts.forEach(product => {
                if (product.title.includes(searchText)) {
                    product.element.style.display = 'block';
                    product.section.style.display = 'block';
                } else {
                    product.element.style.display = 'none';
                }
            });
        }
    });
});

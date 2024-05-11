
const productsContainer = document.querySelector('.sofas');

getSofas();

async function getSofas() {
    const response = await fetch('./js/goods/sofas.json');
    const productsArray = await response.json();
	renderProducts(productsArray);
}

function renderProducts(productsArray) {
    productsArray.forEach(function (item) {
        const productHTML = `
					<div class="products-item" data-id="${item.id}">
						<div class="products-item-img"> 
							<img src="./img/items/sofa/${item.imgSrc}" alt="Упс..." class="productImg">
						</div>

						<div class="products-item-title">${item.title}</div>
						<div class="price__weight">арт: ${item.art}</div>
						<div class="products-item-text">${item.text}</div>

						<div class="details-wrapper">
							<div class="items counter-wrapper">
								<div class="items__control" data-action="minus">-</div>
								<input type="number" min="1" max="200" value="1" id="amountInput" class="items__current"  data-counter>
								<div class="items__control" data-action="plus">+</div>
							</div>

							<div class="price">
								<div class="price__currency">${item.price} ₽</div>
							</div>
						</div>

						<div class="products-action">
                            <button data-cart class="button glow-on-hover product-button">
                                В корзину
                            </button>
                        </div>
						<div class="price__weight">Добавлено: ${dataUpdate}</div>
					</div>
					`;
        productsContainer.insertAdjacentHTML('beforeend', productHTML);
    });
}
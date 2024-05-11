
// открыть/закрыть корзину

const cartButton = document.querySelector('.cartIcon')
const cartFrame = document.querySelector('.showCart')
const closeCart = document.querySelector('.cancel')
const amount = document.querySelector('.cart__num')


//кнопки для открытия и закрытия корзины

cartButton.addEventListener('click', function (){
    cartFrame.classList.toggle('visible')
})

closeCart.addEventListener('click', function () {
    cartFrame.classList.remove('visible')
})



//добавление товаров в корзину

window.addEventListener('click', function (event) {

    let counter;

    if (event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus') {
		const counterWrapper = event.target.closest('.counter-wrapper');
        counter = counterWrapper.querySelector('#amountInput');
	}

	if (event.target.dataset.action === 'plus') {
		counter.value = ++counter.value;
	}

	if (event.target.dataset.action === 'minus') {

		if (parseInt(counter.value) > 1) {
			counter.value = --counter.value;
		} else if (event.target.closest('.cart-wrapper') && parseInt(counter.value) === 1) {
			event.target.closest('.cart-item').remove();

			toggleCartStatus();

			calcCartPriceAndDelivery();
		}

	}

	if (event.target.hasAttribute('data-action') && event.target.closest('.cart-wrapper')) {
		calcCartPriceAndDelivery();
	}
});


//генерация товара в карточки корзины

const cartWrapper =  document.querySelector('.cart-wrapper');

window.addEventListener('click', function (event) {
	if (event.target.hasAttribute('data-cart')) {

		const card = event.target.closest('.products-item');

		const productInfo = {
			id: card.dataset.id,
			imgSrc: card.querySelector('.productImg').getAttribute('src'),
			title: card.querySelector('.products-item-title').innerText,
			art: card.querySelector('.price__weight').innerText,
			price: card.querySelector('.price__currency').innerText,
			counter: card.querySelector('[data-counter]').value,
		};


		const itemInCart = cartWrapper.querySelector(`[data-id="${productInfo.id}"]`);

		if (itemInCart) {
			const counterElement = itemInCart.querySelector('[data-counter]');
			counterElement.innerText = parseInt(counterElement.innerText) + parseInt(productInfo.counter);
		} else {

			const cartItemHTML = `<div class="cart-item" data-id="${productInfo.id}">
								<div class="cart-item__top">
									<div class="cart-item__img">
										<img src="${productInfo.imgSrc}" alt="${productInfo.title}">
									</div>
									<div class="cart-item__desc">
										<div class="cart-item__title">${productInfo.title}</div>
										<div class="cart-item__weight">${productInfo.art} </div>

										<div class="cart-item__details">
											<div class="items items--small counter-wrapper">
												<div class="items__control" data-action="minus">-</div>
												<input type="number" min="1" max="200" value=${productInfo.counter} id="amountInput" class="items__current"  data-counter>
												<div class="items__control" data-action="plus">+</div>
											</div>
											<div class="price">
												<div class="price__currency">${productInfo.price}</div>
											</div>
										</div>
									</div>
								</div>
							</div>`;

			cartWrapper.insertAdjacentHTML('beforeend', cartItemHTML);
		}

		card.querySelector('#amountInput').value = '1';

		toggleCartStatus();

		calcCartPriceAndDelivery();

	}
});



//валидация кнопки в корзине

const paymentType = document.querySelectorAll('input[name="payment"]')
const confirm = document.querySelector('.confirm')

for (const pay of paymentType){
	pay.addEventListener('click', function () {
		confirm.classList.remove('disabled')
	}
)}
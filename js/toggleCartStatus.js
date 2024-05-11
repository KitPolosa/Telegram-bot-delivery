function toggleCartStatus() {

    const cartWrapper = document.querySelector('.cart-wrapper');
    const cartEmptyBadge = document.querySelector('[data-cart-empty]');
    const orderForm = document.querySelector('#order-form');
	const total = document.querySelector('.emptyBucket')

    if (cartWrapper.children.length > 0) {
        cartEmptyBadge.classList.add('none');
        orderForm.classList.remove('none');
		total.classList.remove('none')
    } else {
        cartEmptyBadge.classList.remove('none');
        orderForm.classList.add('none');
		total.classList.add('none')
    }

	amount.innerText = cartWrapper.children.length 

}

function calcCartPriceAndDelivery() {
	const cartWrapper = document.querySelector('.cart-wrapper');
	const priceElements = cartWrapper.querySelectorAll('.price__currency');
	const totalPriceEl = document.querySelector('.total-price');
	const deliveryCost = document.querySelector('.delivery-cost');
	const cartDelivery = document.querySelector('[data-cart-delivery]');
    const deliveryText = document.querySelector('.deliveryText')

	let priceTotal = 0;

	priceElements.forEach(function (item) {
		const amountEl = item.closest('.cart-item').querySelector('#amountInput');
		priceTotal += parseInt(item.innerText) * parseInt(amountEl.value);
	});

	

	if (priceTotal > 0) {
		cartDelivery.classList.remove('none');
	} else {
		cartDelivery.classList.add('none');
	}

	if (priceTotal >= 50000) {
		deliveryCost.classList.add('free');
		deliveryCost.innerText = 'бесплатно';
        deliveryText.innerText = ''
		totalPriceEl.innerText = priceTotal;
	} else {
		deliveryCost.classList.remove('free');
		deliveryCost.innerText = '2500 ₽';
        deliveryText.innerText = 'Бесплатно при заказе от 50000 ₽'
		totalPriceEl.innerText = priceTotal + 2500;
	}
}
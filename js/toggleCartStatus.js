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
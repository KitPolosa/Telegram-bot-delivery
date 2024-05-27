const coffees = [
	{
		"id": "002",
		"title": "Кофе Monarch Original натуральный растворимый сублимированный",
		"art": 2754628,
		"price": 649,
		"imgSrc": "кофе.png",
		"modal": "open-modal-btn81"
	},
	{
		"id": "005",
		"title": "Чай Greenfield Золотой Цейлон чёрный в пакетиках",
		"art": 2856788,
		"price": 99,
		"imgSrc": "чай.png",
		"modal": "open-modal-btn82"
	}
]


let coffeeItem = ''

let cofItem = document.getElementById('coffeeCard')
coffees.forEach ((coff) => {
    coffeeItem +=
    `
	<div class="products-item" data-id="${coff.id}">
		<div class="products-item-img"> 
			<img src="./image/coffee/${coff.imgSrc}" alt="Упс..." class="productImg" id=${coff.modal} onclick="openModal(this)">
		</div>

		<div class="products-item-title ">${coff.title}</div>
		<div class="price__weight">арт: ${coff.art}</div>

		<div class="details-wrapper">
			<div class="items counter-wrapper">
				<div class="items__control" data-action="minus">-</div>
				<input type="number" min="1" max="200" value="1" id="amountInput" class="items__current"  data-counter>
				<div class="items__control" data-action="plus">+</div>
			</div>
		</div>
		
		<div class="price">
			<div class="price__currency">${coff.price} ₽</div>
		</div>

		<div class="products-action">
			<button data-cart class="button glow-on-hover product-button" type="button"> В корзину</button>
		</div>
		<div class="price__weight">Добавлено: ${dataUpdate}</div>
		
		<div class="modal" id="my-modal81">
                    <div class="modal_box">
                        <button class="modal_close-btn" id="close-my-modal-btn81" onclick="closeModal()">
                            <svg width="23" height="25" viewBox="0 0 23 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.09082 0.03125L22.9999 22.0294L20.909 24.2292L-8.73579e-05 2.23106L2.09082 0.03125Z" fill="#333333"/>
                                <path d="M0 22.0295L20.9091 0.0314368L23 2.23125L2.09091 24.2294L0 22.0295Z" fill="#333333"/>
                            </svg>
                        </button>
                        <img src="./image/coffee/кофе.png" alt="" class="img">
                        <h2>Кофе Monarch Original натуральный растворимый сублимированный</h2>

                        <p class="left"><span class="grey">Состав</span><br>
                            Кофе натуральный растворимый сублимированный<br>
                            <span class="grey">Количество</span><br>
                            270 г<br>
                            <span class="grey">Цена</span><br>
                            239 ₽<br>
                            <span class="grey">Пищевая ценность на 100 г</span><br>
                            Белки: 14.5 г, Жиры: 0,2 г, Углеводы: 6,1 г, Калории: 135.0 ккал<br>
                            <span class="grey">Срок годности</span><br>
                            730 дней при температуре от 15 до 25°C
                        </p>
                    </div>
                </div>
                
                <div class="modal" id="my-modal82">
                    <div class="modal_box">
                        <button class="modal_close-btn" id="close-my-modal-btn82" onclick="closeModal()">
                            <svg width="23" height="25" viewBox="0 0 23 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.09082 0.03125L22.9999 22.0294L20.909 24.2292L-8.73579e-05 2.23106L2.09082 0.03125Z" fill="#333333"/>
                                <path d="M0 22.0295L20.9091 0.0314368L23 2.23125L2.09091 24.2294L0 22.0295Z" fill="#333333"/>
                            </svg>
                        </button>
                        <img src="./image/coffee/чай.png" alt="" class="img">
                        <h2>Чай Greenfield Золотой Цейлон чёрный в пакетиках</h2>

                        <p class="left"><span class="grey">Состав</span><br>
                            Чай черный байховый цейлонский<br>
                            <span class="grey">Количество</span><br>
                            25x2 г<br>
                            <span class="grey">Цена</span><br>
                            99 ₽<br>
                            <span class="grey">Пищевая ценность на 100 г</span><br>
                            Белки: 0.0 г, Жиры: 0,0 г, Углеводы: 0,0 г, Калории: 0.0 ккал<br>
                            <span class="grey">Срок годности</span><br>
                            1095 дней при температуре 0°C
                        </p>
                    </div>
                </div>
	</div>

    `
})
cofItem.insertAdjacentHTML('beforeend', coffeeItem);

function openModal(element) {
            var productName = element.parentNode.querySelector('p').textContent;
            document.getElementById('product-name').textContent = productName;
            document.getElementById('my-modal').style.display = 'block';
        }
        function closeModal() {
    document.getElementById('my-modal').style.display = 'none';
}

document.getElementById("open-modal-btn81").addEventListener("click", function() {
    document.getElementById("my-modal81").classList.add("open")
})

document.getElementById("close-my-modal-btn81").addEventListener("click", function() {
    document.getElementById("my-modal81").classList.remove("open")
})

document.getElementById("open-modal-btn82").addEventListener("click", function() {
    document.getElementById("my-modal82").classList.add("open")
})

document.getElementById("close-my-modal-btn82").addEventListener("click", function() {
    document.getElementById("my-modal82").classList.remove("open")
})
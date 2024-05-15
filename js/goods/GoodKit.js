
const kitchens = [
	{
		"id": "2",
		"title": "Томаты Рост Фламенко красные сливовидные",
		"art": 28528,
		"price": 299,
		"imgSrc": "помидоры.png",
		"modal": "open-modal-btn51"
	},
	{
		"id": "5",
		"title": "Огурцы защищённого грунта",
		"art": 288288,
		"price": 179,
		"imgSrc": "огурцы.png",
		"modal": "open-modal-btn52"
	},
	{
		"id": "1",
		"title": "Картофель молодой Азербайджан",
		"art": 8588952,
		"price": 129,
		"imgSrc": "картофель.png",
		"modal": "open-modal-btn53"
	},
	{
		"id": "4",
		"title": "Капуста белокочанная ранняя",
		"art": 928854,
		"price": 89,
		"imgSrc": "капуста.png",
		"modal": "open-modal-btn54"
	},
	{
		"id": "3",
		"title": "Яблоки Гольден Маркет Перекрёсток",
		"art": 24876,
		"price": 139,
		"imgSrc": "яблоки.png",
		"modal": "open-modal-btn55"
	},
	{
		"id": "8",
		"title": "Апельсины Маркет Перекресток",
		"art": 958328,
		"price": 99,
		"imgSrc": "апельсины.png",
		"modal": "open-modal-btn56"
	}
]

let kitchenItem = ''

let kitchenCard = document.getElementById('kitchCard')
kitchens.forEach ((kitch) => {
    kitchenItem +=
    `
	<div class="products-item" data-id="${kitch.id}">
		<div class="products-item-img"> 
			<img src="./image/veget/${kitch.imgSrc}" alt="Упс..." class="productImg" id=${kitch.modal} onclick="openModal(this)">
		</div>

		<div class="products-item-title ">${kitch.title}</div>
		<div class="price__weight">арт: ${kitch.art}</div>

		<div class="details-wrapper">
			<div class="items counter-wrapper">
				<div class="items__control" data-action="minus">-</div>
				<input type="number" min="1" max="200" value="1" id="amountInput" class="items__current"  data-counter>
				<div class="items__control" data-action="plus">+</div>
			</div>
		</div>
		
		<div class="price">
			<div class="price__currency">${kitch.price} ₽</div>
		</div>

		<div class="products-action">
			<button data-cart class="button glow-on-hover product-button"> В корзину</button>
		</div>
		<div class="price__weight">Добавлено: ${dataUpdate}</div>
	
	<div class="modal" id="my-modal51">
                    <div class="modal_box">
                        <button class="modal_close-btn" id="close-my-modal-btn51" onclick="closeModal()">
                            <svg width="23" height="25" viewBox="0 0 23 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.09082 0.03125L22.9999 22.0294L20.909 24.2292L-8.73579e-05 2.23106L2.09082 0.03125Z" fill="#333333"/>
                                <path d="M0 22.0295L20.9091 0.0314368L23 2.23125L2.09091 24.2294L0 22.0295Z" fill="#333333"/>
                            </svg>
                        </button>
                        <img src="./image/veget/помидоры.png" alt="" class="img">
                        <h2>Томаты Рост Фламенко красные сливовидные</h2>

                        <p class="left"><span class="grey">Состав</span><br>
                            Томаты сливовидные красные<br>
                            <span class="grey">Количество</span><br>
                            1 кг<br>
                            <span class="grey">Цена</span><br>
                            299 ₽<br>
                            <span class="grey">Пищевая ценность на 100 г</span><br>
                            Белки: 0.0 г, Жиры: 0,0 г, Углеводы: 0,0 г,  Калории: 0.0 ккал<br>
                            <span class="grey">Срок годности</span><br>
                            21 день при минимальной температуре 8°C и при максимальной температуре 15°C
                        </p>
                    </div>
                </div>
                
                <div class="modal" id="my-modal52">
                    <div class="modal_box">
                        <button class="modal_close-btn" id="close-my-modal-btn52" onclick="closeModal()">
                            <svg width="23" height="25" viewBox="0 0 23 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.09082 0.03125L22.9999 22.0294L20.909 24.2292L-8.73579e-05 2.23106L2.09082 0.03125Z" fill="#333333"/>
                                <path d="M0 22.0295L20.9091 0.0314368L23 2.23125L2.09091 24.2294L0 22.0295Z" fill="#333333"/>
                            </svg>
                        </button>
                        <img src="./image/veget/огурцы.png" alt="" class="img">
                        <h2>Огурцы защищённого грунта</h2>

                        <p class="left"><span class="grey">Состав</span><br>
                            Огурец<br>
                            <span class="grey">Количество</span><br>
                            450 г<br>
                            <span class="grey">Цена</span><br>
                            179 ₽<br>
                            <span class="grey">Пищевая ценность на 100 г</span><br>
                            Белки: 0.0 г, Жиры: 0,0 г, Углеводы: 0,0 г, Калории: 0.0 ккал<br>
                            <span class="grey">Срок годности</span><br>
                            14 дней при температуре 0°C
                        </p>
                    </div>
                </div>

                <div class="modal" id="my-modal53">
                    <div class="modal_box">
                        <button class="modal_close-btn" id="close-my-modal-btn53" onclick="closeModal()">
                            <svg width="23" height="25" viewBox="0 0 23 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.09082 0.03125L22.9999 22.0294L20.909 24.2292L-8.73579e-05 2.23106L2.09082 0.03125Z" fill="#333333"/>
                                <path d="M0 22.0295L20.9091 0.0314368L23 2.23125L2.09091 24.2294L0 22.0295Z" fill="#333333"/>
                            </svg>
                        </button>
                        <img src="./image/veget/картофель.png" alt="" class="img">
                        <h2>Картофель молодой Азербайджан</h2>

                        <p class="left"><span class="grey">Состав</span><br>
                            Картофель<br>
                            <span class="grey">Количество</span><br>
                            1 кг<br>
                            <span class="grey">Цена</span><br>
                            129 ₽<br>
                            <span class="grey">Пищевая ценность на 100 г</span><br>
                            Белки: 0.0 г, Жиры: 0,0 г, Углеводы: 0,0 г, Калории: 0.0 ккал<br>
                            <span class="grey">Срок годности</span><br>
                            30 дней при температуре 0°C
                        </p>
                    </div>
                </div>

                <div class="modal" id="my-modal54">
                    <div class="modal_box">
                        <button class="modal_close-btn" id="close-my-modal-btn54" onclick="closeModal()">
                            <svg width="23" height="25" viewBox="0 0 23 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.09082 0.03125L22.9999 22.0294L20.909 24.2292L-8.73579e-05 2.23106L2.09082 0.03125Z" fill="#333333"/>
                                <path d="M0 22.0295L20.9091 0.0314368L23 2.23125L2.09091 24.2294L0 22.0295Z" fill="#333333"/>
                            </svg>
                        </button>
                        <img src="./image/veget/капуста.png" alt="" class="img">
                        <h2>Капуста белокочанная ранняя</h2>

                        <p class="left"><span class="grey">Состав</span><br>
                            Капуста<br>
                            <span class="grey">Количество</span><br>
                            1 кг<br>
                            <span class="grey">Цена</span><br>
                            89 ₽<br>
                            <span class="grey">Пищевая ценность на 100 г</span><br>
                            Белки: 1.8 г, Жиры: 0,2 г, Углеводы: 6,8 г, Калории: 27.0 ккал<br>
                            <span class="grey">Срок годности</span><br>
                            9 дней при температуре 0°C
                        </p>
                    </div>
                </div>

                <div class="modal" id="my-modal55">
                    <div class="modal_box">
                        <button class="modal_close-btn" id="close-my-modal-btn55" onclick="closeModal()">
                            <svg width="23" height="25" viewBox="0 0 23 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.09082 0.03125L22.9999 22.0294L20.909 24.2292L-8.73579e-05 2.23106L2.09082 0.03125Z" fill="#333333"/>
                                <path d="M0 22.0295L20.9091 0.0314368L23 2.23125L2.09091 24.2294L0 22.0295Z" fill="#333333"/>
                            </svg>
                        </button>
                        <img src="./image/veget/яблоки.png" alt="" class="img">
                        <h2>Яблоки Гольден Маркет Перекрёсток</h2>

                        <p class="left"><span class="grey">Состав</span><br>
                            Яблоки<br>
                            <span class="grey">Количество</span><br>
                            1 кг<br>
                            <span class="grey">Цена</span><br>
                            139 ₽<br>
                            <span class="grey">Пищевая ценность на 100 г</span><br>
                            Белки: 0.5 г, Жиры: 0,2 г, Углеводы: 10,7 г, Калории: 53.0 ккал<br>
                            <span class="grey">Срок годности</span><br>
                            9 дней
                        </p>
                    </div>
                </div>

                <div class="modal" id="my-modal56">
                    <div class="modal_box">
                        <button class="modal_close-btn" id="close-my-modal-btn56" onclick="closeModal()">
                            <svg width="23" height="25" viewBox="0 0 23 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.09082 0.03125L22.9999 22.0294L20.909 24.2292L-8.73579e-05 2.23106L2.09082 0.03125Z" fill="#333333"/>
                                <path d="M0 22.0295L20.9091 0.0314368L23 2.23125L2.09091 24.2294L0 22.0295Z" fill="#333333"/>
                            </svg>
                        </button>
                        <img src="./image/veget/апельсины.png" alt="" class="img">
                        <h2>Апельсины</h2>

                        <p class="left"><span class="grey">Состав</span><br>
                            Апельсины Маркет Перекресток<br>
                            <span class="grey">Количество</span><br>
                            1 кг<br>
                            <span class="grey">Цена</span><br>
                            99 ₽<br>
                            <span class="grey">Пищевая ценность на 100 г</span><br>
                            Белки: 0.9 г, Жиры: 0,2 г, Углеводы: 8,1 г, Калории: 43.0 ккал<br>
                            <span class="grey">Срок годности</span><br>
                            9 дней при минимальной температуре 1°C и при максимальной температуре 3°C
                        </p>
                    </div>
                </div>
                </div>

    `
})
kitchenCard.insertAdjacentHTML('beforeend', kitchenItem);

function openModal(element) {
            var productName = element.parentNode.querySelector('p').textContent;
            document.getElementById('product-name').textContent = productName;
            document.getElementById('my-modal').style.display = 'block';
        }
        function closeModal() {
    document.getElementById('my-modal').style.display = 'none';
}

document.getElementById("open-modal-btn51").addEventListener("click", function() {
    document.getElementById("my-modal51").classList.add("open")
})

document.getElementById("close-my-modal-btn51").addEventListener("click", function() {
    document.getElementById("my-modal51").classList.remove("open")
})

document.getElementById("open-modal-btn52").addEventListener("click", function() {
    document.getElementById("my-modal52").classList.add("open")
})

document.getElementById("close-my-modal-btn52").addEventListener("click", function() {
    document.getElementById("my-modal52").classList.remove("open")
})

document.getElementById("open-modal-btn53").addEventListener("click", function() {
    document.getElementById("my-modal53").classList.add("open")
})

document.getElementById("close-my-modal-btn53").addEventListener("click", function() {
    document.getElementById("my-modal53").classList.remove("open")
})

document.getElementById("open-modal-btn54").addEventListener("click", function() {
    document.getElementById("my-modal54").classList.add("open")
})

document.getElementById("close-my-modal-btn54").addEventListener("click", function() {
    document.getElementById("my-modal54").classList.remove("open")
})

document.getElementById("open-modal-btn55").addEventListener("click", function() {
    document.getElementById("my-modal55").classList.add("open")
})

document.getElementById("close-my-modal-btn55").addEventListener("click", function() {
    document.getElementById("my-modal55").classList.remove("open")
})

document.getElementById("open-modal-btn56").addEventListener("click", function() {
    document.getElementById("my-modal56").classList.add("open")
})

document.getElementById("close-my-modal-btn56").addEventListener("click", function() {
    document.getElementById("my-modal56").classList.remove("open")
})
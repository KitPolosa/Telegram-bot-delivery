const kuliches = [
	{
		"id": "002",
		"title": "Кулич с изюмом, глазурью и кондитерской посыпкой",
		"art": 2754628,
		"price": 189,
		"imgSrc": "кулич1.png",
		"modal": "open-modal-btn91"
	},
	{
		"id": "005",
		"title": "Кулич со сливочной начинкой",
		"art": 2856788,
		"price": 259,
		"imgSrc": "кулич2.png",
		"modal": "open-modal-btn92"
	}
]


let kulichItem = ''

let kulItem = document.getElementById('kulichCard')
kuliches.forEach ((kulic) => {
    kulichItem +=
    `
	<div class="products-item" data-id="${kulic.id}">
		<div class="products-item-img"> 
			<img src="./image/kulich/${kulic.imgSrc}" alt="Упс..." class="productImg" id=${kulic.modal} onclick="openModal(this)">
		</div>

		<div class="products-item-title ">${kulic.title}</div>
		<div class="price__weight">арт: ${kulic.art}</div>

		<div class="details-wrapper">
			<div class="items counter-wrapper">
				<div class="items__control" data-action="minus">-</div>
				<input type="number" min="1" max="200" value="1" id="amountInput" class="items__current"  data-counter>
				<div class="items__control" data-action="plus">+</div>
			</div>
		</div>
		
		<div class="price">
			<div class="price__currency">${kulic.price} ₽</div>
		</div>

		<div class="products-action">
			<button data-cart class="button glow-on-hover product-button" type="button"> В корзину</button>
		</div>
		<div class="price__weight">Добавлено: ${dataUpdate}</div>
		
		<div class="modal" id="my-modal91">
                    <div class="modal_box">
                        <button class="modal_close-btn" id="close-my-modal-btn91" onclick="closeModal()">
                            <svg width="23" height="25" viewBox="0 0 23 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.09082 0.03125L22.9999 22.0294L20.909 24.2292L-8.73579e-05 2.23106L2.09082 0.03125Z" fill="#333333"/>
                                <path d="M0 22.0295L20.9091 0.0314368L23 2.23125L2.09091 24.2294L0 22.0295Z" fill="#333333"/>
                            </svg>
                        </button>
                        <img src="./image/kulich/кулич1.png" alt="" class="img">
                        <h2>Кулич с изюмом, глазурью и кондитерской посыпкой</h2>

                        <p class="left"><span class="grey">Состав</span><br>
                            Мука пшеничная хлебопекарная высшего сорта, изюм, вода питьевая, цукаты, маргарин, рафинированные дезодорированные растительные масла, вода, эмульгаторы, соль<br>
                            <span class="grey">Количество</span><br>
                            300 г<br>
                            <span class="grey">Цена</span><br>
                            189 ₽<br>
                            <span class="grey">Пищевая ценность на 100 г</span><br>
                            Белки: 5.0 г, Жиры: 12,0 г, Углеводы: 51,0 г, Калории: 333.0 ккал<br>
                            <span class="grey">Срок годности</span><br>
                            14 дней при температуре от 15°C до 21°C
                        </p>
                    </div>
                </div>
                
                <div class="modal" id="my-modal92">
                    <div class="modal_box">
                        <button class="modal_close-btn" id="close-my-modal-btn92" onclick="closeModal()">
                            <svg width="23" height="25" viewBox="0 0 23 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.09082 0.03125L22.9999 22.0294L20.909 24.2292L-8.73579e-05 2.23106L2.09082 0.03125Z" fill="#333333"/>
                                <path d="M0 22.0295L20.9091 0.0314368L23 2.23125L2.09091 24.2294L0 22.0295Z" fill="#333333"/>
                            </svg>
                        </button>
                        <img src="./image/kulich/кулич2.png" alt="" class="img">
                        <h2>Кулич со сливочной начинкой</h2>

                        <p class="left"><span class="grey">Состав</span><br>
                            Мука пшеничная хлебопекарная высшего сорта, изюм, вода питьевая, цукаты, маргарин, рафинированные дезодорированные растительные масла, вода, эмульгаторы, соль<br>
                            <span class="grey">Количество</span><br>
                            450 г<br>
                            <span class="grey">Цена</span><br>
                            259 ₽<br>
                            <span class="grey">Пищевая ценность на 100 г</span><br>
                            Белки: 5.0 г, Жиры: 12,0 г, Углеводы: 51,0 г, Калории: 333.0 ккал<br>
                            <span class="grey">Срок годности</span><br>
                            14 дней при температуре от 15°C до 21°C
                        </p>
                    </div>
                </div>
	</div>

    `
})
kulItem.insertAdjacentHTML('beforeend', kulichItem);

function openModal(element) {
            var productName = element.parentNode.querySelector('p').textContent;
            document.getElementById('product-name').textContent = productName;
            document.getElementById('my-modal').style.display = 'block';
        }
        function closeModal() {
    document.getElementById('my-modal').style.display = 'none';
}

document.getElementById("open-modal-btn91").addEventListener("click", function() {
    document.getElementById("my-modal91").classList.add("open")
})

document.getElementById("close-my-modal-btn91").addEventListener("click", function() {
    document.getElementById("my-modal91").classList.remove("open")
})

document.getElementById("open-modal-btn92").addEventListener("click", function() {
    document.getElementById("my-modal92").classList.add("open")
})

document.getElementById("close-my-modal-btn92").addEventListener("click", function() {
    document.getElementById("my-modal92").classList.remove("open")
})
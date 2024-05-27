const cheese = [
	{
		"id": "002",
		"title": "Сыр Российский Рогачевъ 45% 500г",
		"art": 2754628,
		"price": 370,
		"imgSrc": "российский.png",
		"modal": "open-modal-btn61"
	},
	{
		"id": "005",
		"title": "Сыр Голландский Экомилк Сыроварня 45%",
		"art": 2856788,
		"price": 159,
		"imgSrc": "голландский.png",
		"modal": "open-modal-btn62"
	}
]


let cheeseItem = ''

let chItem = document.getElementById('cheeseCard')
cheese.forEach ((ches) => {
    cheeseItem +=
    `
	<div class="products-item" data-id="${ches.id}">
		<div class="products-item-img"> 
			<img src="./image/cheese/${ches.imgSrc}" alt="Упс..." class="productImg" id=${ches.modal} onclick="openModal(this)">
		</div>

		<div class="products-item-title ">${ches.title}</div>
		<div class="price__weight">арт: ${ches.art}</div>

		<div class="details-wrapper">
			<div class="items counter-wrapper">
				<div class="items__control" data-action="minus">-</div>
				<input type="number" min="1" max="200" value="1" id="amountInput" class="items__current"  data-counter>
				<div class="items__control" data-action="plus">+</div>
			</div>
		</div>
		
		<div class="price">
			<div class="price__currency">${ches.price} ₽</div>
		</div>

		<div class="products-action">
			<button data-cart class="button glow-on-hover product-button" type="button"> В корзину</button>
		</div>
		<div class="price__weight">Добавлено: ${dataUpdate}</div>
		
		<div class="modal" id="my-modal61">
                    <div class="modal_box">
                        <button class="modal_close-btn" id="close-my-modal-btn61" onclick="closeModal()">
                            <svg width="23" height="25" viewBox="0 0 23 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.09082 0.03125L22.9999 22.0294L20.909 24.2292L-8.73579e-05 2.23106L2.09082 0.03125Z" fill="#333333"/>
                                <path d="M0 22.0295L20.9091 0.0314368L23 2.23125L2.09091 24.2294L0 22.0295Z" fill="#333333"/>
                            </svg>
                        </button>
                        <img src="./image/cheese/российский.png" alt="" class="img">
                        <h2>Сыр Российский Рогачевъ 45%</h2>

                        <p class="left"><span class="grey">Состав</span><br>
                            Молоко коровье нормализованное пастеризованное, закваска на основе молочнокислых мезофильных и термофильных бактерий, соль, концентрат нитрат натрия, краситель аннато, уплотнитель хлорид кальция, ферментный препарат животного происхождения: пепсин, химозин.<br>
                            <span class="grey">Количество</span><br>
                            500 г<br>
                            <span class="grey">Цена</span><br>
                            370 ₽<br>
                            <span class="grey">Пищевая ценность на 100 г</span><br>
                            Белки: 23.2 г, Жиры: 29,5 г, Углеводы: 0,0 г, Калории: 364.0 ккал<br>
                            <span class="grey">Срок годности</span><br>
                            90 суток при температуре от 2 до 6°C
                        </p>
                    </div>
                </div>
                
                <div class="modal" id="my-modal62">
                    <div class="modal_box">
                        <button class="modal_close-btn" id="close-my-modal-btn62" onclick="closeModal()">
                            <svg width="23" height="25" viewBox="0 0 23 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.09082 0.03125L22.9999 22.0294L20.909 24.2292L-8.73579e-05 2.23106L2.09082 0.03125Z" fill="#333333"/>
                                <path d="M0 22.0295L20.9091 0.0314368L23 2.23125L2.09091 24.2294L0 22.0295Z" fill="#333333"/>
                            </svg>
                        </button>
                        <img src="./image/cheese/голландский.png" alt="" class="img">
                        <h2>Сыр Голландский Экомилк Сыроварня 45%</h2>

                        <p class="left"><span class="grey">Состав</span><br>
                            Нормализованное молоко, соль, закваска мезо-термофильных молочнокислых микроорганизмов, молокосвертывающий ферментный препарат животного происхождения, пищевые добавки, уплотнитель хлорид кальция, комплексная пищевая добавка краситель.<br>
                            <span class="grey">Количество</span><br>
                            300 г<br>
                            <span class="grey">Цена</span><br>
                            219 ₽<br>
                            <span class="grey">Пищевая ценность на 100 г</span><br>
                            Белки: 23.0 г, Жиры: 21,0 г, Углеводы: 0,0 г, Калории: 283.0 ккал<br>
                            <span class="grey">Срок годности</span><br>
                            100 суток при температуре (4±2)°C
                        </p>
                    </div>
                </div>
	</div>

    `
})
chItem.insertAdjacentHTML('beforeend', cheeseItem);

function openModal(element) {
            var productName = element.parentNode.querySelector('p').textContent;
            document.getElementById('product-name').textContent = productName;
            document.getElementById('my-modal').style.display = 'block';
        }
        function closeModal() {
    document.getElementById('my-modal').style.display = 'none';
}

document.getElementById("open-modal-btn61").addEventListener("click", function() {
    document.getElementById("my-modal61").classList.add("open")
})

document.getElementById("close-my-modal-btn61").addEventListener("click", function() {
    document.getElementById("my-modal61").classList.remove("open")
})

document.getElementById("open-modal-btn62").addEventListener("click", function() {
    document.getElementById("my-modal62").classList.add("open")
})

document.getElementById("close-my-modal-btn62").addEventListener("click", function() {
    document.getElementById("my-modal62").classList.remove("open")
})
const snacks = [
	{
		"id": "002",
		"title": "Печенье Юбилейное Традиционное витаминизированное",
		"art": 2754628,
		"price": 37,
		"imgSrc": "печенье.png",
		"modal": "open-modal-btn71"
	},
	{
		"id": "005",
		"title": "Вафли Коровка Топлёное молоко",
		"art": 2856788,
		"price": 99,
		"imgSrc": "вафли.png",
		"modal": "open-modal-btn72"
	},
	{
		"id": "001",
		"title": "Пирожное Киндер Молочный ломтик",
		"art": 85654952,
		"price": 59,
		"imgSrc": "ломтик.png",
		"modal": "open-modal-btn73"
	},
	{
		"id": "004",
		"title": "Пряник Ясная Поляна Тульский с начинкой варёная сгущёнка",
		"art": 952684,
		"price": 49,
		"imgSrc": "пряник.png",
		"modal": "open-modal-btn74"
	}
]


let snacksItem = ''

let snkItem = document.getElementById('snacksCard')
snacks.forEach ((snack) => {
    snacksItem +=
    `
	<div class="products-item" data-id="${snack.id}">
		<div class="products-item-img"> 
			<img src="./image/snacks/${snack.imgSrc}" alt="Упс..." class="productImg" id=${snack.modal} onclick="openModal(this)">
		</div>

		<div class="products-item-title ">${snack.title}</div>
		<div class="price__weight">арт: ${snack.art}</div>

		<div class="details-wrapper">
			<div class="items counter-wrapper">
				<div class="items__control" data-action="minus">-</div>
				<input type="number" min="1" max="200" value="1" id="amountInput" class="items__current"  data-counter>
				<div class="items__control" data-action="plus">+</div>
			</div>
		</div>
		
		<div class="price">
			<div class="price__currency">${snack.price} ₽</div>
		</div>

		<div class="products-action">
			<button data-cart class="button glow-on-hover product-button" type="button"> В корзину</button>
		</div>
		<div class="price__weight">Добавлено: ${dataUpdate}</div>
		
		<div class="modal" id="my-modal71">
                    <div class="modal_box">
                        <button class="modal_close-btn" id="close-my-modal-btn71" onclick="closeModal()">
                            <svg width="23" height="25" viewBox="0 0 23 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.09082 0.03125L22.9999 22.0294L20.909 24.2292L-8.73579e-05 2.23106L2.09082 0.03125Z" fill="#333333"/>
                                <path d="M0 22.0295L20.9091 0.0314368L23 2.23125L2.09091 24.2294L0 22.0295Z" fill="#333333"/>
                            </svg>
                        </button>
                        <img src="./image/snacks/печенье.png" alt="" class="img">
                        <h2>Печенье Юбилейное Традиционное витаминизированное</h2>

                        <p class="left"><span class="grey">Состав</span><br>
                            Мука пшеничная, сахар, масла растительные, вода. крахмал кукурузный, сироп глюкозно-фруктозный или сироп инвертный, разрыхлитель. соль, продукт яичный, ароматизатор, эмульгатор, витаминно-минеральный комплекс (витамин В1, витамин В2, витамин В6.<br>
                            <span class="grey">Количество</span><br>
                            112 г<br>
                            <span class="grey">Цена</span><br>
                            37 ₽<br>
                            <span class="grey">Пищевая ценность на 100 г</span><br>
                            Белки: 7.5 г, Жиры: 18,0 г, Углеводы: 67,0 г, Калории: 463.0 ккал<br>
                            <span class="grey">Срок годности</span><br>
                            270 дней при температуре от 13 до 23°C
                        </p>
                    </div>
                </div>
                
                <div class="modal" id="my-modal72">
                    <div class="modal_box">
                        <button class="modal_close-btn" id="close-my-modal-btn72" onclick="closeModal()">
                            <svg width="23" height="25" viewBox="0 0 23 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.09082 0.03125L22.9999 22.0294L20.909 24.2292L-8.73579e-05 2.23106L2.09082 0.03125Z" fill="#333333"/>
                                <path d="M0 22.0295L20.9091 0.0314368L23 2.23125L2.09091 24.2294L0 22.0295Z" fill="#333333"/>
                            </svg>
                        </button>
                        <img src="./image/snacks/вафли.png" alt="" class="img">
                        <h2>Вафли Коровка Топлёное молоко</h2>

                        <p class="left"><span class="grey">Состав</span><br>
                            Вода питьевая, мука пшеничная хлебопекарная, сахар, молоко кокосовое, сухое цельное молоко, заменитель масла какао, масло подсолнечное рафинированное дезодорированное, меланж сухой яичный, какао-порошок, эмульгатор лецитин соевый, соль, ароматизатор «Молоко», разрыхлитель – гидрокарбонат натрия, регулятор кислотности - лимонная кислота.<br>
                            <span class="grey">Количество</span><br>
                            150 г<br>
                            <span class="grey">Цена</span><br>
                            99 ₽<br>
                            <span class="grey">Пищевая ценность на 100 г</span><br>
                            Белки: 7.5 г, Жиры: 30,0 г, Углеводы: 58,0 г, Калории: 530.0 ккал<br>
                            <span class="grey">Срок годности</span><br>
                            270 дней при температуре от 15 до 21°C
                        </p>
                    </div>
                </div>

                <div class="modal" id="my-modal73">
                    <div class="modal_box">
                        <button class="modal_close-btn" id="close-my-modal-btn73" onclick="closeModal()">
                            <svg width="23" height="25" viewBox="0 0 23 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.09082 0.03125L22.9999 22.0294L20.909 24.2292L-8.73579e-05 2.23106L2.09082 0.03125Z" fill="#333333"/>
                                <path d="M0 22.0295L20.9091 0.0314368L23 2.23125L2.09091 24.2294L0 22.0295Z" fill="#333333"/>
                            </svg>
                        </button>
                        <img src="./image/snacks/ломтик.png" alt="" class="img">
                        <h2>Пирожное Киндер Молочный ломтик</h2>

                        <p class="left"><span class="grey">Состав</span><br>
                            Пастеризованное молоко, растительный жир, сахар, пшеничная мука, сухое обезжиренное молоко, мёд, молочный жир, яичный порошок,обезжиренный какао-порошок, пшеничные отруби, разрыхлители: дигидропирофосфат натрия, гидрокарбонат натрия и карбонат аммония;эмульгатор: моно- и диглицериды жирных кислот, ароматизаторы, соль. Содержит молоко, яйца, злаки, содержащие глютен, и продукты ихпереработки. Может содержать незначительное количество сои и продуктов ее переработки.<br>
                            <span class="grey">Количество</span><br>
                            28 г<br>
                            <span class="grey">Цена</span><br>
                            59 ₽<br>
                            <span class="grey">Пищевая ценность на 100 г</span><br>
                            Белки: 2.8 г, Жиры: 18,0 г, Углеводы: 3,2 г, Калории: 187.7 ккал<br>
                            <span class="grey">Срок годности</span><br>
                            45 суток при температуре от 2 до 6°C
                        </p>
                    </div>
                </div>

                <div class="modal" id="my-modal74">
                    <div class="modal_box">
                        <button class="modal_close-btn" id="close-my-modal-btn74" onclick="closeModal()">
                            <svg width="23" height="25" viewBox="0 0 23 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.09082 0.03125L22.9999 22.0294L20.909 24.2292L-8.73579e-05 2.23106L2.09082 0.03125Z" fill="#333333"/>
                                <path d="M0 22.0295L20.9091 0.0314368L23 2.23125L2.09091 24.2294L0 22.0295Z" fill="#333333"/>
                            </svg>
                        </button>
                        <img src="./image/snacks/пряник.png" alt="" class="img">
                        <h2>Пряник Ясная Поляна Тульский с начинкой варёная сгущёнка</h2>

                        <p class="left"><span class="grey">Состав</span><br>
                            Мука пшеничная хлебопекарная высшего сорта – 48.1% сахар, начинка «Варёная сгущенка» - 12.4, консервант – сорбат калия E202, регулятор кислотности – лимонная кислота E330, краситель – бета-каротин E160a, ароматизатор «Масло», витамины A и D3, или маргарин(Z)*рафинированные растительные масла, вода<br>
                            <span class="grey">Количество</span><br>
                            140 г<br>
                            <span class="grey">Цена</span><br>
                            49 ₽<br>
                            <span class="grey">Пищевая ценность на 100 г</span><br>
                            Белки: 7.0 г, Жиры: 8,0 г, Углеводы: 69,0 г, Калории: 380.0 ккал<br>
                            <span class="grey">Срок годности</span><br>
                            180 дней при температуре от 15 до 23°C
                        </p>
                    </div>
                </div>
	</div>

    `
})
snkItem.insertAdjacentHTML('beforeend', snacksItem);

function openModal(element) {
            var productName = element.parentNode.querySelector('p').textContent;
            document.getElementById('product-name').textContent = productName;
            document.getElementById('my-modal').style.display = 'block';
        }
        function closeModal() {
    document.getElementById('my-modal').style.display = 'none';
}

document.getElementById("open-modal-btn71").addEventListener("click", function() {
    document.getElementById("my-modal71").classList.add("open")
})

document.getElementById("close-my-modal-btn71").addEventListener("click", function() {
    document.getElementById("my-modal71").classList.remove("open")
})

document.getElementById("open-modal-bt72").addEventListener("click", function() {
    document.getElementById("my-modal72").classList.add("open")
})

document.getElementById("close-my-modal-btn72").addEventListener("click", function() {
    document.getElementById("my-modal72").classList.remove("open")
})

document.getElementById("open-modal-btn73").addEventListener("click", function() {
    document.getElementById("my-modal73").classList.add("open")
})

document.getElementById("close-my-modal-btn73").addEventListener("click", function() {
    document.getElementById("my-modal73").classList.remove("open")
})

document.getElementById("open-modal-btn74").addEventListener("click", function() {
    document.getElementById("my-modal74").classList.add("open")
})

document.getElementById("close-my-modal-btn74").addEventListener("click", function() {
    document.getElementById("my-modal74").classList.remove("open")
})
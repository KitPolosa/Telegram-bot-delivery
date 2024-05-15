const armchairs = [
	{
		"id": "002",
		"title": "Тушка цыплёнка бройлера Благояр 1 сорт охлаждённая",
		"art": 2754628,
		"price": 239,
		"imgSrc": "бройлер.png",
		"modal": "open-modal-btn21"
	},
	{
		"id": "005",
		"title": "Колбаски из говядины Мираторг Чевапчичи",
		"art": 2856788,
		"price": 159,
		"imgSrc": "чевапчичи.png",
		"modal": "open-modal-btn22"
	},
	{
		"id": "001",
		"title": "Фарш Мираторг говяжий категории Б охлажденный",
		"art": 85654952,
		"price": 299,
		"imgSrc": "фарш.png",
		"modal": "open-modal-btn23"
	},
	{
		"id": "004",
		"title": "Стейк индейки Индилайт по-мексикански охлаждённый",
		"art": 952684,
		"price": 359,
		"imgSrc": "стейкиндейки.png",
		"modal": "open-modal-btn24"
	},
	{
		"id": "003",
		"title": "Котлеты свино-говяжие Черкизово домашние охлаждённые",
		"art": 24585876,
		"price": 149,
		"imgSrc": "котлеты.png",
		"modal": "open-modal-btn25"
	},
	{
		"id": "008",
		"title": "Бекон Велком Двойное копчение сырокопчёный нарезка",
		"art": 663348,
		"price": 179,
		"imgSrc": "бекон.png",
		"modal": "open-modal-btn26"
	}
]


let armchairItem = ''

let armItem = document.getElementById('armchairCard')
armchairs.forEach ((armchair) => {
    armchairItem +=
    `
	<div class="products-item" data-id="${armchair.id}">
		<div class="products-item-img"> 
			<img src="./image/meat/${armchair.imgSrc}" alt="Упс..." class="productImg" id=${armchair.modal} onclick="openModal(this)">
		</div>

		<div class="products-item-title ">${armchair.title}</div>
		<div class="price__weight">арт: ${armchair.art}</div>

		<div class="details-wrapper">
			<div class="items counter-wrapper">
				<div class="items__control" data-action="minus">-</div>
				<input type="number" min="1" max="200" value="1" id="amountInput" class="items__current"  data-counter>
				<div class="items__control" data-action="plus">+</div>
			</div>
		</div>
		
		<div class="price">
			<div class="price__currency">${armchair.price} ₽</div>
		</div>

		<div class="products-action">
			<button data-cart class="button glow-on-hover product-button" type="button"> В корзину</button>
		</div>
		<div class="price__weight">Добавлено: ${dataUpdate}</div>
		
		<div class="modal" id="my-modal21">
                    <div class="modal_box">
                        <button class="modal_close-btn" id="close-my-modal-btn21" onclick="closeModal()">
                            <svg width="23" height="25" viewBox="0 0 23 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.09082 0.03125L22.9999 22.0294L20.909 24.2292L-8.73579e-05 2.23106L2.09082 0.03125Z" fill="#333333"/>
                                <path d="M0 22.0295L20.9091 0.0314368L23 2.23125L2.09091 24.2294L0 22.0295Z" fill="#333333"/>
                            </svg>
                        </button>
                        <img src="./image/meat/бройлер.png" alt="" class="img">
                        <h2>Тушка цыплёнка бройлера Благояр 1 сорт охлаждённая</h2>

                        <p class="left"><span class="grey">Состав</span><br>
                            Тушка ЦБ<br>
                            <span class="grey">Количество</span><br>
                            2 кг<br>
                            <span class="grey">Цена</span><br>
                            239 ₽<br>
                            <span class="grey">Пищевая ценность на 100 г</span><br>
                            Белки: 16.0 г, Жиры: 14,0 г, Углеводы: 0,0 г, Калории: 190.0 ккал<br>
                            <span class="grey">Срок годности</span><br>
                            8 суток при температуре от -2 до 2°C
                        </p>
                    </div>
                </div>
                
                <div class="modal" id="my-modal22">
                    <div class="modal_box">
                        <button class="modal_close-btn" id="close-my-modal-btn22" onclick="closeModal()">
                            <svg width="23" height="25" viewBox="0 0 23 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.09082 0.03125L22.9999 22.0294L20.909 24.2292L-8.73579e-05 2.23106L2.09082 0.03125Z" fill="#333333"/>
                                <path d="M0 22.0295L20.9091 0.0314368L23 2.23125L2.09091 24.2294L0 22.0295Z" fill="#333333"/>
                            </svg>
                        </button>
                        <img src="./image/meat/чевапчичи.png" alt="" class="img">
                        <h2>Колбаски из говядины Мираторг Чевапчичи</h2>

                        <p class="left"><span class="grey">Состав</span><br>
                            Говядина, вода, поваренная соль, декстроза, специи, лук, чеснок, паприка, сухари панировочные из хлебных сухарей высшего сорта (крошка сухарная), стабилизатор Е331, Е450, Е452, регулятор кислотности Е451, Е500, загуститель Е415<br>
                            <span class="grey">Количество</span><br>
                            300 г<br>
                            <span class="grey">Цена</span><br>
                            159 ₽<br>
                            <span class="grey">Пищевая ценность на 100 г</span><br>
                            Белки: 12.0 г, Жиры: 35,0 г, Углеводы: 0,8 г, Калории: 360.0 ккал<br>
                            <span class="grey">Срок годности</span><br>
                            12 суток при температуре (4±2)°C
                        </p>
                    </div>
                </div>

                <div class="modal" id="my-modal23">
                    <div class="modal_box">
                        <button class="modal_close-btn" id="close-my-modal-btn23" onclick="closeModal()">
                            <svg width="23" height="25" viewBox="0 0 23 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.09082 0.03125L22.9999 22.0294L20.909 24.2292L-8.73579e-05 2.23106L2.09082 0.03125Z" fill="#333333"/>
                                <path d="M0 22.0295L20.9091 0.0314368L23 2.23125L2.09091 24.2294L0 22.0295Z" fill="#333333"/>
                            </svg>
                        </button>
                        <img src="./image/meat/фарш.png" alt="" class="img">
                        <h2>Фарш Мираторг говяжий категории Б охлажденный</h2>

                        <p class="left"><span class="grey">Состав</span><br>
                            Говядина<br>
                            <span class="grey">Количество</span><br>
                            400 г<br>
                            <span class="grey">Цена</span><br>
                            299 ₽<br>
                            <span class="grey">Пищевая ценность на 100 г</span><br>
                            Белки: 12.0 г, Жиры: 35,0 г, Углеводы: 0,0 г, Калории: 360.0 ккал<br>
                            <span class="grey">Срок годности</span><br>
                            15 суток при температуре (4±2)°C
                        </p>
                    </div>
                </div>

                <div class="modal" id="my-modal24">
                    <div class="modal_box">
                        <button class="modal_close-btn" id="close-my-modal-btn24" onclick="closeModal()">
                            <svg width="23" height="25" viewBox="0 0 23 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.09082 0.03125L22.9999 22.0294L20.909 24.2292L-8.73579e-05 2.23106L2.09082 0.03125Z" fill="#333333"/>
                                <path d="M0 22.0295L20.9091 0.0314368L23 2.23125L2.09091 24.2294L0 22.0295Z" fill="#333333"/>
                            </svg>
                        </button>
                        <img src="./image/meat/стейкиндейки.png" alt="" class="img">
                        <h2>Стейк индейки Индилайт по-мексикански охлаждённый</h2>

                        <p class="left"><span class="grey">Состав</span><br>
                            Филе грудки индейки, вода, соль, глюкоза, пряности (паприка, перец черный, горчица, кориандр) овощи сушеные (лук, перец), масло подсолнечное. Может содержать сою, лактозу, глютен, сельдерей, яйца, кунжут и/или продукты их переработки<br>
                            <span class="grey">Количество</span><br>
                            600 г<br>
                            <span class="grey">Цена</span><br>
                            359 ₽<br>
                            <span class="grey">Пищевая ценность на 100 г</span><br>
                            Белки: 16.0 г, Жиры: 2,5 г, Углеводы: 0,0 г, Калории: 90.0 ккал<br>
                            <span class="grey">Срок годности</span><br>
                            14 суток при температуре 0°С
                        </p>
                    </div>
                </div>

                <div class="modal" id="my-modal25">
                    <div class="modal_box">
                        <button class="modal_close-btn" id="close-my-modal-btn25" onclick="closeModal()">
                            <svg width="23" height="25" viewBox="0 0 23 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.09082 0.03125L22.9999 22.0294L20.909 24.2292L-8.73579e-05 2.23106L2.09082 0.03125Z" fill="#333333"/>
                                <path d="M0 22.0295L20.9091 0.0314368L23 2.23125L2.09091 24.2294L0 22.0295Z" fill="#333333"/>
                            </svg>
                        </button>
                        <img src="./image/meat/котлеты.png" alt="" class="img">
                        <h2>Котлеты свино-говяжие Черкизово домашние охлаждённые</h2>

                        <p class="left"><span class="grey">Состав</span><br>
                            Свинина, вода, говядина, лук, говяжий белок, соль, чёрный перец, пищевые волокна, регуляторы кислотности (трифосфаты, ацетаты натрия, цитраты натрия), стабилизатор (пирофосфаты), загустители (ксантановая камедь, гуаровая камедь), ароматизатор, антиокислители (лимонная кислота, аскорбат натрия, изоаскорбат натрия, аскорбит натрия, изоаскорбат натрия, аскорбиновая кислота), лимонный сок (сок лимона, консервант (пиросульфит натрия)), экстракт свеклы, виноградный сахар, красители (красный свекольный, сахарный колер III)<br>
                            <span class="grey">Количество</span><br>
                            400 г<br>
                            <span class="grey">Цена</span><br>
                            149 ₽<br>
                            <span class="grey">Пищевая ценность на 100 г</span><br>
                            Белки: 14.0 г, Жиры: 35,0 г, Углеводы: 0,0 г, Калории: 363.0 ккал<br>
                            <span class="grey">Срок годности</span><br>
                            14 суток при температуре (4±2)°C
                        </p>
                    </div>
                </div>

                <div class="modal" id="my-modal26">
                    <div class="modal_box">
                        <button class="modal_close-btn" id="close-my-modal-btn26" onclick="closeModal()">
                            <svg width="23" height="25" viewBox="0 0 23 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.09082 0.03125L22.9999 22.0294L20.909 24.2292L-8.73579e-05 2.23106L2.09082 0.03125Z" fill="#333333"/>
                                <path d="M0 22.0295L20.9091 0.0314368L23 2.23125L2.09091 24.2294L0 22.0295Z" fill="#333333"/>
                            </svg>
                        </button>
                        <img src="./image/meat/бекон.png" alt="" class="img">
                        <h2>Бекон Велком Двойное копчение сырокопчёный нарезка</h2>

                        <p class="left"><span class="grey">Состав</span><br>
                            Свинина, вода, сахар, экстракты любистока, лука, сельдерея, антиокислитель аскорбиновая кислота, стабилизатор Е 452, соль нитритная (соль, фиксатор окраски нитрит натрия)<br>
                            <span class="grey">Количество</span><br>
                            200 г<br>
                            <span class="grey">Цена</span><br>
                            179 ₽<br>
                            <span class="grey">Пищевая ценность на 100 г</span><br>
                            Белки: 16.0 г, Жиры: 40,0 г, Углеводы: 0,0 г, Калории: 420.0 ккал<br>
                            <span class="grey">Срок годности</span><br>
                            60 суток при температуре (6±2)°C
                        </p>
                    </div>
                </div>
	</div>

    `
})
armItem.insertAdjacentHTML('beforeend', armchairItem);

function openModal(element) {
            var productName = element.parentNode.querySelector('p').textContent;
            document.getElementById('product-name').textContent = productName;
            document.getElementById('my-modal').style.display = 'block';
        }
        function closeModal() {
    document.getElementById('my-modal').style.display = 'none';
}

document.getElementById("open-modal-btn21").addEventListener("click", function() {
    document.getElementById("my-modal21").classList.add("open")
})

document.getElementById("close-my-modal-btn21").addEventListener("click", function() {
    document.getElementById("my-modal21").classList.remove("open")
})

document.getElementById("open-modal-btn22").addEventListener("click", function() {
    document.getElementById("my-modal22").classList.add("open")
})

document.getElementById("close-my-modal-btn22").addEventListener("click", function() {
    document.getElementById("my-modal22").classList.remove("open")
})

document.getElementById("open-modal-btn23").addEventListener("click", function() {
    document.getElementById("my-modal23").classList.add("open")
})

document.getElementById("close-my-modal-btn23").addEventListener("click", function() {
    document.getElementById("my-modal23").classList.remove("open")
})

document.getElementById("open-modal-btn24").addEventListener("click", function() {
    document.getElementById("my-modal24").classList.add("open")
})

document.getElementById("close-my-modal-btn24").addEventListener("click", function() {
    document.getElementById("my-modal24").classList.remove("open")
})

document.getElementById("open-modal-btn25").addEventListener("click", function() {
    document.getElementById("my-modal25").classList.add("open")
})

document.getElementById("close-my-modal-btn25").addEventListener("click", function() {
    document.getElementById("my-modal25").classList.remove("open")
})

document.getElementById("open-modal-btn26").addEventListener("click", function() {
    document.getElementById("my-modal26").classList.add("open")
})

document.getElementById("close-my-modal-btn26").addEventListener("click", function() {
    document.getElementById("my-modal26").classList.remove("open")
})
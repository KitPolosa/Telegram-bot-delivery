
const wardrobes = [
	{
		"id": "2",
		"title": "Вода Святой источник ключевая питьевая негазированная",
		"art": 9958,
		"price": 49,
		"imgSrc": "воданегаз.png",
		"modal": "open-modal-btn31"
	},
	{
		"id": "5",
		"title": "Вода Святой источник природная питьевая газированная",
		"art": 2854,
		"price": 59,
		"imgSrc": "водагаз.png",
		"modal": "open-modal-btn32"
	},
	{
		"id": "1",
		"title": "Напиток газированный Evervess Кола",
		"art": 818952,
		"price": 144,
		"imgSrc": "кола.png",
		"modal": "open-modal-btn33"
	},
	{
		"id": "4",
		"title": "Напиток сильногаз Добрый Апельсин",
		"art": 82784,
		"price": 151,
		"imgSrc": "добрыйапельсин.png",
		"modal": "open-modal-btn34"
	},
	{
		"id": "3",
		"title": "Напиток газированный Черноголовка Байкал безалкогольный",
		"art": 8828846,
		"price": 89,
		"imgSrc": "байкал.png",
		"modal": "open-modal-btn35"
	},
	{
		"id": "8",
		"title": "Сок Сады Придонья яблочный прямого отжима без сахара",
		"art": 8248,
		"price": 99,
		"imgSrc": "сокябл.png",
		"modal": "open-modal-btn36"
	}
]


let wardItem = ''

let wardrobeItem = document.getElementById('wardCard')
wardrobes.forEach ((ward) => {
    wardItem +=
    `
	<div class="products-item" data-id="${ward.id}">
		<div class="products-item-img"> 
			<img src="./image/water/${ward.imgSrc}" alt="Упс..." class="productImg" id=${ward.modal} onclick="openModal(this)">
		</div>

		<div class="products-item-title ">${ward.title}</div>
		<div class="price__weight">арт: ${ward.art}</div>

		<div class="details-wrapper">
			<div class="items counter-wrapper">
				<div class="items__control" data-action="minus">-</div>
				<input type="number" min="1" max="200" value="1" id="amountInput" class="items__current"  data-counter>
				<div class="items__control" data-action="plus">+</div>
			</div>
		</div>
		
		<div class="price">
			<div class="price__currency">${ward.price} ₽</div>
		</div>

		<div class="products-action">
			<button data-cart class="button glow-on-hover product-button"> В корзину</button>
		</div>
		<div class="price__weight">Добавлено: ${dataUpdate}</div>
	</div>
	<div class="modal" id="my-modal31">
                    <div class="modal_box">
                        <button class="modal_close-btn" id="close-my-modal-btn31" onclick="closeModal()">
                            <svg width="23" height="25" viewBox="0 0 23 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.09082 0.03125L22.9999 22.0294L20.909 24.2292L-8.73579e-05 2.23106L2.09082 0.03125Z" fill="#333333"/>
                                <path d="M0 22.0295L20.9091 0.0314368L23 2.23125L2.09091 24.2294L0 22.0295Z" fill="#333333"/>
                            </svg>
                        </button>
                        <img src="./image/water/воданегаз.png" alt="" class="img">
                        <h2>Вода Святой источник ключевая питьевая негазированная</h2>

                        <p class="left"><span class="grey">Состав</span><br>
                            Минерализация: 0,05 – 1,0 г/л. основной мг/л: кальций 0,5 – 130, магний 0,5 – 50, натрий 0,2 – 100, калий 0,1 – 20, гидрокарбонаты 5 – 350, хлориды 0,5 – 200, сульфаты 0,5 – 200. общая жесткость <7 мг-экв/л<br>
                            <span class="grey">Количество</span><br>
                            1.5 л<br>
                            <span class="grey">Цена</span><br>
                            49 ₽<br>
                            <span class="grey">Пищевая ценность на 100 г</span><br>
                            Белки: 0.0 г, Жиры: 0,0 г, Углеводы: 0,0 г, Калории: 0.0 ккал<br>
                            <span class="grey">Срок годности</span><br>
                            450 суток при температуре от 4 до 25°C
                        </p>
                    </div>
                </div>
                
                <div class="modal" id="my-modal32">
                    <div class="modal_box">
                        <button class="modal_close-btn" id="close-my-modal-btn32" onclick="closeModal()">
                            <svg width="23" height="25" viewBox="0 0 23 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.09082 0.03125L22.9999 22.0294L20.909 24.2292L-8.73579e-05 2.23106L2.09082 0.03125Z" fill="#333333"/>
                                <path d="M0 22.0295L20.9091 0.0314368L23 2.23125L2.09091 24.2294L0 22.0295Z" fill="#333333"/>
                            </svg>
                        </button>
                        <img src="./image/water/водагаз.png" alt="" class="img">
                        <h2>Вода Святой источник природная питьевая газированная</h2>

                        <p class="left"><span class="grey">Состав</span><br>
                            Минерализация: 0,05 – 1,0 г/л. основной мг/л: кальций 0,5 – 130, магний 0,5 – 50, натрий 0,2 – 100, калий 0,1 – 20, гидрокарбонаты 5 – 350, хлориды 0,5 – 200, сульфаты 0,5 – 200. общая жесткость <7 мг-экв/л<br>
                            <span class="grey">Количество</span><br>
                            1.5 л<br>
                            <span class="grey">Цена</span><br>
                            59 ₽<br>
                            <span class="grey">Пищевая ценность на 100 г</span><br>
                            Белки: 0.0 г, Жиры: 0,0 г, Углеводы: 0,0 г, Калории: 0.0 ккал<br>
                            <span class="grey">Срок годности</span><br>
                            450 суток при температуре от 4 до 25°C
                        </p>
                    </div>
                </div>

                <div class="modal" id="my-modal33">
                    <div class="modal_box">
                        <button class="modal_close-btn" id="close-my-modal-btn33" onclick="closeModal()">
                            <svg width="23" height="25" viewBox="0 0 23 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.09082 0.03125L22.9999 22.0294L20.909 24.2292L-8.73579e-05 2.23106L2.09082 0.03125Z" fill="#333333"/>
                                <path d="M0 22.0295L20.9091 0.0314368L23 2.23125L2.09091 24.2294L0 22.0295Z" fill="#333333"/>
                            </svg>
                        </button>
                        <img src="./image/water/кола.png" alt="" class="img">
                        <h2>Напиток газированный Evervess Кола</h2>

                        <p class="left"><span class="grey">Состав</span><br>
                            Вода, сахар, краситель e150d, регулятор кислотности ез38, ароматизаторы, кофеин (не более 150 мг(л)), стабилизатор е414<br>
                            <span class="grey">Количество</span><br>
                            1.5 л<br>
                            <span class="grey">Цена</span><br>
                            144 ₽<br>
                            <span class="grey">Пищевая ценность на 100 г</span><br>
                            Белки: 0.0 г, Жиры: 0,0 г, Углеводы: 11,1 г, Калории: 44.0 ккал<br>
                            <span class="grey">Срок годности</span><br>
                            180 суток при максимальной температуре 35°C
                        </p>
                    </div>
                </div>

                <div class="modal" id="my-modal34">
                    <div class="modal_box">
                        <button class="modal_close-btn" id="close-my-modal-btn34" onclick="closeModal()">
                            <svg width="23" height="25" viewBox="0 0 23 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.09082 0.03125L22.9999 22.0294L20.909 24.2292L-8.73579e-05 2.23106L2.09082 0.03125Z" fill="#333333"/>
                                <path d="M0 22.0295L20.9091 0.0314368L23 2.23125L2.09091 24.2294L0 22.0295Z" fill="#333333"/>
                            </svg>
                        </button>
                        <img src="./image/water/добрыйапельсин.png" alt="" class="img">
                        <h2>Напиток сильногазированный Добрый Апельсин</h2>

                        <p class="left"><span class="grey">Состав</span><br>
                            Очищенная вода, сахар, апельсиновый сок 3%, регулятор кислотности лимонная кислота, витамин с (аскорбиновая кислота), натуральные ароматизаторы, стабилизаторы (гуммиарабик, эфиры глицерина и смоляных кислот), подсластитель сахаринат натрия, краситель каротины, консервант сорбат калия<br>
                            <span class="grey">Количество</span><br>
                            1.5 л<br>
                            <span class="grey">Цена</span><br>
                            151 ₽<br>
                            <span class="grey">Пищевая ценность на 100 г</span><br>
                            Белки: 0.0 г, Жиры: 0,0 г, Углеводы: 8,0 г, Калории: 32.0 ккал<br>
                            <span class="grey">Срок годности</span><br>
                            183 суток при максимальной температуре 35°C
                        </p>
                    </div>
                </div>

                <div class="modal" id="my-modal35">
                    <div class="modal_box">
                        <button class="modal_close-btn" id="close-my-modal-btn35" onclick="closeModal()">
                            <svg width="23" height="25" viewBox="0 0 23 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.09082 0.03125L22.9999 22.0294L20.909 24.2292L-8.73579e-05 2.23106L2.09082 0.03125Z" fill="#333333"/>
                                <path d="M0 22.0295L20.9091 0.0314368L23 2.23125L2.09091 24.2294L0 22.0295Z" fill="#333333"/>
                            </svg>
                        </button>
                        <img src="./image/water/байкал.png" alt="" class="img">
                        <h2>Напиток газированный Черноголовка Байкал безалкогольный</h2>

                        <p class="left"><span class="grey">Состав</span><br>
                            Вода, сахар, экстракты: чая, элеутерококка; краситель сахарный колер (е150а, e150d), регулятор кислотности кислота лимонная, стабилизатор гуммиарабик, ароматизаторы (содержат масла: кардамона, эвкалипта, пихты), подсластители: цикламат натрия, сукралоза, сахаринат натрия ; консервант бензоат натрия<br>
                            <span class="grey">Количество</span><br>
                            1 л<br>
                            <span class="grey">Цена</span><br>
                            89 ₽<br>
                            <span class="grey">Пищевая ценность на 100 г</span><br>
                            Белки: 0.0 г, Жиры: 0,0 г, Углеводы: 10,0 г, Калории: 40.0 ккал<br>
                            <span class="grey">Срок годности</span><br>
                            365 суток при максимальной температуре 35°C
                        </p>
                    </div>
                </div>

                <div class="modal" id="my-modal36">
                    <div class="modal_box">
                        <button class="modal_close-btn" id="close-my-modal-btn36" onclick="closeModal()">
                            <svg width="23" height="25" viewBox="0 0 23 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.09082 0.03125L22.9999 22.0294L20.909 24.2292L-8.73579e-05 2.23106L2.09082 0.03125Z" fill="#333333"/>
                                <path d="M0 22.0295L20.9091 0.0314368L23 2.23125L2.09091 24.2294L0 22.0295Z" fill="#333333"/>
                            </svg>
                        </button>
                        <img src="./image/water/сокябл.png" alt="" class="img">
                        <h2>Сок Сады Придонья яблочный прямого отжима без сахара</h2>

                        <p class="left"><span class="grey">Состав</span><br>
                            Яблочный сок прямого отжима - уникален! он производится методом прямого отжима из свежих яблок, выращенных на плодородной донской земле. асептическая (без доступа воздуха) технология розлива сохраняет качество и вкус живого сока на длительный срок<br>
                            <span class="grey">Количество</span><br>
                            1 л<br>
                            <span class="grey">Цена</span><br>
                            99 ₽<br>
                            <span class="grey">Пищевая ценность на 100 г</span><br>
                            Белки: 0.0 г, Жиры: 0,0 г, Углеводы: 11,0 г, Калории: 44.0 ккал<br>
                            <span class="grey">Срок годности</span><br>
                            365 суток при минимальной температруе 0°C при максимальной температуре 35°C
                        </p>
                    </div>
                </div>
                </div>

    `
})
wardrobeItem.insertAdjacentHTML('beforeend', wardItem);

function openModal(element) {
            var productName = element.parentNode.querySelector('p').textContent;
            document.getElementById('product-name').textContent = productName;
            document.getElementById('my-modal').style.display = 'block';
        }
        function closeModal() {
    document.getElementById('my-modal').style.display = 'none';
}

document.getElementById("open-modal-btn31").addEventListener("click", function() {
    document.getElementById("my-modal31").classList.add("open")
})

document.getElementById("close-my-modal-btn31").addEventListener("click", function() {
    document.getElementById("my-modal31").classList.remove("open")
})

document.getElementById("open-modal-btn32").addEventListener("click", function() {
    document.getElementById("my-modal32").classList.add("open")
})

document.getElementById("close-my-modal-btn32").addEventListener("click", function() {
    document.getElementById("my-modal32").classList.remove("open")
})

document.getElementById("open-modal-btn33").addEventListener("click", function() {
    document.getElementById("my-modal33").classList.add("open")
})

document.getElementById("close-my-modal-btn33").addEventListener("click", function() {
    document.getElementById("my-modal33").classList.remove("open")
})

document.getElementById("open-modal-btn34").addEventListener("click", function() {
    document.getElementById("my-modal34").classList.add("open")
})

document.getElementById("close-my-modal-btn34").addEventListener("click", function() {
    document.getElementById("my-modal34").classList.remove("open")
})

document.getElementById("open-modal-btn35").addEventListener("click", function() {
    document.getElementById("my-modal35").classList.add("open")
})

document.getElementById("close-my-modal-btn35").addEventListener("click", function() {
    document.getElementById("my-modal35").classList.remove("open")
})

document.getElementById("open-modal-btn36").addEventListener("click", function() {
    document.getElementById("my-modal36").classList.add("open")
})

document.getElementById("close-my-modal-btn36").addEventListener("click", function() {
    document.getElementById("my-modal36").classList.remove("open")
})

const chairs = [
	{
		"id": "02",
		"title": "Молоко коровка из кореновки 2,5%",
		"art": 288528,
		"price": 79,
		"imgSrc": "11.png",
		"modal": "open-modal-btn1"
	},
	{
		"id": "05",
		"title": "Масло сливочное кубанский молочник 82,5%",
		"art": 282388,
		"price": 119,
		"imgSrc": "22.png",
		"modal": "open-modal-btn2"
	},
	{
		"id": "01",
		"title": "Творог коровка из кореновки 9% 180г",
		"art": 8952,
		"price": 69,
		"imgSrc": "88.png",
		"modal": "open-modal-btn3"
	},
	{
		"id": "04",
		"title": "Пломбир коровка из кореновки",
		"art": 952044,
		"price": 47,
		"imgSrc": "44.png",
		"modal": "open-modal-btn4"
	},
	{
		"id": "03",
		"title": "Кефир коровка из кореновки 2,5%",
		"art": 245678,
		"price": 99,
		"imgSrc": "33.png",
		"modal": "open-modal-btn5"
	},
	{
		"id": "08",
		"title": "Ряженка коровка из кореновки 2,5%",
		"art": 95348,
		"price": 149,
		"imgSrc": "66.png",
		"modal": "open-modal-btn6"
	},
	{
		"id": "10",
		"title": "Йогурт коровка из кореновки персиковый",
		"art": 24856388,
		"price": 109,
		"imgSrc": "77.png",
		"modal": "open-modal-btn7"
	},
	{
		"id": "07",
		"title": "Сгущенка коровка из кореновки 8,5%",
		"art": 2828528,
		"price": 69,
		"imgSrc": "55.png",
		"modal": "open-modal-btn8"
	}
]


let cardItem = ''
//title__inline input-short
// <div class="items__current" data-counter>1</div>
let chairCard = document.getElementById('chairCard')
chairs.forEach ((chair) => {
    cardItem +=
    `

    <div class="products-item" data-id="${chair.id}">
                    <div class="products-item-img"> 
                        <img src="./image/milkproduct/${chair.imgSrc}" alt="Упс..." class="productImg" id=${chair.modal} onclick="openModal(this)">
                    </div>

                    <div class="products-item-title ">${chair.title}</div>
                    <div class="price__weight">арт: ${chair.art}</div>

                    <div class="details-wrapper">
                        <div class="items counter-wrapper">
                            <div class="items__control" data-action="minus">-</div>
                            <input type="number" min="1" max="200" value="1" id="amountInput" class="items__current"  data-counter>
                            <div class="items__control" data-action="plus">+</div>
                        </div>
                    </div>
                    
                    <div class="price">
                            <div class="price__currency">${chair.price} ₽</div>
                    </div>

                    <div class="products-action">
                        <button data-cart class="button glow-on-hover product-button"> В корзину</button>
                    </div>
					<div class="price__weight">Добавлено: ${dataUpdate}</div>
            
					<div class="modal" id="my-modal1">
                    <div class="modal_box">
                        <button class="modal_close-btn" id="close-my-modal-btn1" onclick="closeModal()">
                            <svg width="23" height="25" viewBox="0 0 23 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.09082 0.03125L22.9999 22.0294L20.909 24.2292L-8.73579e-05 2.23106L2.09082 0.03125Z" fill="#333333"/>
                                <path d="M0 22.0295L20.9091 0.0314368L23 2.23125L2.09091 24.2294L0 22.0295Z" fill="#333333"/>
                            </svg>
                        </button>
                        <img src="./image/milkproduct/11.png" alt="" class="img">
                        <h2>Молоко коровка из кореновки 2,5%</h2>

                        <p class="left"><span class="grey">Состав</span><br>
                            Цельное молоко, обезжиренное молоко<br>
                            <span class="grey">Количество</span><br>
                            900 мл<br>
                            <span class="grey">Цена</span><br>
                            79 ₽<br>
                            <span class="grey">Пищевая ценность на 100 г</span><br>
                            Белки: 3.0 г, Жиры: 2,5 г, Углеводы: 4,7 г, Калории: 55.0 ккал<br>
                            <span class="grey">Срок годности</span><br>
                            9 суток при температуре (4±2)°C
                        </p>
                    </div>
                </div>
                
                <div class="modal" id="my-modal2">
                    <div class="modal_box">
                        <button class="modal_close-btn" id="close-my-modal-btn2" onclick="closeModal()">
                            <svg width="23" height="25" viewBox="0 0 23 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.09082 0.03125L22.9999 22.0294L20.909 24.2292L-8.73579e-05 2.23106L2.09082 0.03125Z" fill="#333333"/>
                                <path d="M0 22.0295L20.9091 0.0314368L23 2.23125L2.09091 24.2294L0 22.0295Z" fill="#333333"/>
                            </svg>
                        </button>
                        <img src="./image/milkproduct/22.png" alt="" class="img">
                        <h2>Масло сливочное кубанский молочник 82,5%</h2>

                        <p class="left"><span class="grey">Состав</span><br>
                            Пастеризованные сливки<br>
                            <span class="grey">Количество</span><br>
                            170 г<br>
                            <span class="grey">Цена</span><br>
                            119 ₽<br>
                            <span class="grey">Пищевая ценность на 100 г</span><br>
                            Белки: 0.6 г, Жиры: 82,5 г, Углеводы: 0,8 г, Калории: 748.0 ккал<br>
                            <span class="grey">Срок годности</span><br>
                            7 суток при температуре (4±2)°C
                        </p>
                    </div>
                </div>

                <div class="modal" id="my-modal3">
                    <div class="modal_box">
                        <button class="modal_close-btn" id="close-my-modal-btn3" onclick="closeModal()">
                            <svg width="23" height="25" viewBox="0 0 23 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.09082 0.03125L22.9999 22.0294L20.909 24.2292L-8.73579e-05 2.23106L2.09082 0.03125Z" fill="#333333"/>
                                <path d="M0 22.0295L20.9091 0.0314368L23 2.23125L2.09091 24.2294L0 22.0295Z" fill="#333333"/>
                            </svg>
                        </button>
                        <img src="./image/milkproduct/88.png" alt="" class="img">
                        <h2>Творог коровка из кореновки 9%</h2>

                        <p class="left"><span class="grey">Состав</span><br>
                            Обезжиренное молоко, цельное молоко с использованием закваски на основе молочнокислых микроорганизмов<br>
                            <span class="grey">Количество</span><br>
                            180 г<br>
                            <span class="grey">Цена</span><br>
                            69 ₽<br>
                            <span class="grey">Пищевая ценность на 100 г</span><br>
                            Белки: 16.0 г, Жиры: 9,0 г, Углеводы: 3,0 г, Калории: 157.0 ккал<br>
                            <span class="grey">Срок годности</span><br>
                            14 суток при температуре (4±2)°C
                        </p>
                    </div>
                </div>

                <div class="modal" id="my-modal4">
                    <div class="modal_box">
                        <button class="modal_close-btn" id="close-my-modal-btn4" onclick="closeModal()">
                            <svg width="23" height="25" viewBox="0 0 23 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.09082 0.03125L22.9999 22.0294L20.909 24.2292L-8.73579e-05 2.23106L2.09082 0.03125Z" fill="#333333"/>
                                <path d="M0 22.0295L20.9091 0.0314368L23 2.23125L2.09091 24.2294L0 22.0295Z" fill="#333333"/>
                            </svg>
                        </button>
                        <img src="./image/milkproduct/44.png" alt="" class="img">
                        <h2>Пломбир коровка из кореновки</h2>

                        <p class="left"><span class="grey">Состав</span><br>
                            Сливки, молоко цельное сгущенное с сахаром, молоко концентрированное обезжиренное, сахар, смесь пищевых эмульгаторов и стабилизаторов ( эмульгатор: моно- и диглицериды жирных кислот, стабилизаторы: камедь рожкового дерева, гуаровая камедь, каррагинан), ароматизатор ванилин<br>
                            <span class="grey">Количество</span><br>
                            100 г<br>
                            <span class="grey">Цена</span><br>
                            47 ₽<br>
                            <span class="grey">Пищевая ценность на 100 г</span><br>
                            Белки: 3.4 г, Жиры: 15,0 г, Углеводы: 19,0 г, Калории: 225.0 ккал<br>
                            <span class="grey">Срок годности</span><br>
                            18 месяцев при температуре не выше -18°С
                        </p>
                    </div>
                </div>

                <div class="modal" id="my-modal5">
                    <div class="modal_box">
                        <button class="modal_close-btn" id="close-my-modal-btn5" onclick="closeModal()">
                            <svg width="23" height="25" viewBox="0 0 23 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.09082 0.03125L22.9999 22.0294L20.909 24.2292L-8.73579e-05 2.23106L2.09082 0.03125Z" fill="#333333"/>
                                <path d="M0 22.0295L20.9091 0.0314368L23 2.23125L2.09091 24.2294L0 22.0295Z" fill="#333333"/>
                            </svg>
                        </button>
                        <img src="./image/milkproduct/33.png" alt="" class="img">
                        <h2>Кефир коровка из кореновки 2,5%</h2>

                        <p class="left"><span class="grey">Состав</span><br>
                            Обезжиренное молоко, цельное молоко, закваска<br>
                            <span class="grey">Количество</span><br>
                            450 мл<br>
                            <span class="grey">Цена</span><br>
                            99 ₽<br>
                            <span class="grey">Пищевая ценность на 100 г</span><br>
                            Белки: 3.0 г, Жиры: 2,5 г, Углеводы: 4,0 г, Калории: 51.0 ккал<br>
                            <span class="grey">Срок годности</span><br>
                            10 суток при температуре (6±2)°C
                        </p>
                    </div>
                </div>

                <div class="modal" id="my-modal6">
                    <div class="modal_box">
                        <button class="modal_close-btn" id="close-my-modal-btn6" onclick="closeModal()">
                            <svg width="23" height="25" viewBox="0 0 23 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.09082 0.03125L22.9999 22.0294L20.909 24.2292L-8.73579e-05 2.23106L2.09082 0.03125Z" fill="#333333"/>
                                <path d="M0 22.0295L20.9091 0.0314368L23 2.23125L2.09091 24.2294L0 22.0295Z" fill="#333333"/>
                            </svg>
                        </button>
                        <img src="./image/milkproduct/66.png" alt="" class="img">
                        <h2>Ряженка коровка из кореновки 2,5%</h2>

                        <p class="left"><span class="grey">Состав</span><br>
                            Цельное молоко, обезжиренное молоко с использованием закваски на основе молочнокислых микроорганизмов<br>
                            <span class="grey">Количество</span><br>
                            450 мл<br>
                            <span class="grey">Цена</span><br>
                            149 ₽<br>
                            <span class="grey">Пищевая ценность на 100 г</span><br>
                            Белки: 2.8 г, Жиры: 2,1 г, Углеводы: 13,0 г, Калории: 83.0 ккал<br>
                            <span class="grey">Срок годности</span><br>
                            7 суток при температуре (6±2)°C
                        </p>
                    </div>
                </div>

                <div class="modal" id="my-modal7">
                    <div class="modal_box">
                        <button class="modal_close-btn" id="close-my-modal-btn7" onclick="closeModal()">
                            <svg width="23" height="25" viewBox="0 0 23 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.09082 0.03125L22.9999 22.0294L20.909 24.2292L-8.73579e-05 2.23106L2.09082 0.03125Z" fill="#333333"/>
                                <path d="M0 22.0295L20.9091 0.0314368L23 2.23125L2.09091 24.2294L0 22.0295Z" fill="#333333"/>
                            </svg>
                        </button>
                        <img src="./image/milkproduct/77.png" alt="" class="img">
                        <h2>Йогурт коровка из кореновки</h2>

                        <p class="left"><span class="grey">Состав</span><br>
                            цельное молоко, обезжиренное молоко, сахар, пищевой наполнитель «Злаки» (сахар, злаки (овес, ячмень, пшеница, рожь), глюкозно-фруктозный сироп, ароматизатор «злаки», регулятор кислотности лимонная кислота), сухое обезжиренное молоко, с использованием закваски на основе молочнокислых микроорганизмов<br>
                            <span class="grey">Количество</span><br>
                            450 мл<br>
                            <span class="grey">Цена</span><br>
                            109 ₽<br>
                            <span class="grey">Пищевая ценность на 100 г</span><br>
                            Белки: 2.1 г, Жиры: 2,8 г, Углеводы: 14,0 г, Калории: 87.0 ккал<br>
                            <span class="grey">Срок годности</span><br>
                            21 суток при температуре (4±2)°C
                        </p>
                    </div>
                </div>

                <div class="modal" id="my-modal8">
                    <div class="modal_box">
                        <button class="modal_close-btn" id="close-my-modal-btn8" onclick="closeModal()">
                            <svg width="23" height="25" viewBox="0 0 23 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.09082 0.03125L22.9999 22.0294L20.909 24.2292L-8.73579e-05 2.23106L2.09082 0.03125Z" fill="#333333"/>
                                <path d="M0 22.0295L20.9091 0.0314368L23 2.23125L2.09091 24.2294L0 22.0295Z" fill="#333333"/>
                            </svg>
                        </button>
                        <img src="./image/milkproduct/55.png" alt="" class="img">
                        <h2>Сгущенка коровка из кореновки 8,5%</h2>

                        <p class="left"><span class="grey">Состав</span><br>
                            цельное молоко, обезжиренное молоко, сахар, пищевой наполнитель «Злаки» (сахар, злаки (овес, ячмень, пшеница, рожь), глюкозно-фруктозный сироп, ароматизатор «злаки», регулятор кислотности лимонная кислота), сухое обезжиренное молоко, с использованием закваски на основе молочнокислых микроорганизмов<br>
                            <span class="grey">Количество</span><br>
                            380 г<br>
                            <span class="grey">Цена</span><br>
                            69 ₽<br>
                            <span class="grey">Пищевая ценность на 100 г</span><br>
                            Белки: 8.5 г, Жиры: 7,2 г, Углеводы: 56,0 г, Калории: 339.0 ккал<br>
                            <span class="grey">Срок годности</span><br>
                            24 месяцев при температуре 0°С до +10°С |(23±2)°С
                        </p>
                    </div>
                </div>
                </div>
    `
})
chairCard.insertAdjacentHTML('beforeend', cardItem);

function openModal(element) {
            var productName = element.parentNode.querySelector('p').textContent;
            document.getElementById('product-name').textContent = productName;
            document.getElementById('my-modal').style.display = 'block';
        }
        function closeModal() {
    document.getElementById('my-modal').style.display = 'none';
}

document.getElementById("open-modal-btn1").addEventListener("click", function() {
    document.getElementById("my-modal1").classList.add("open")
})

document.getElementById("close-my-modal-btn1").addEventListener("click", function() {
    document.getElementById("my-modal1").classList.remove("open")
})

document.getElementById("open-modal-btn2").addEventListener("click", function() {
    document.getElementById("my-modal2").classList.add("open")
})

document.getElementById("close-my-modal-btn2").addEventListener("click", function() {
    document.getElementById("my-modal2").classList.remove("open")
})

document.getElementById("open-modal-btn3").addEventListener("click", function() {
    document.getElementById("my-modal3").classList.add("open")
})

document.getElementById("close-my-modal-btn3").addEventListener("click", function() {
    document.getElementById("my-modal3").classList.remove("open")
})

document.getElementById("open-modal-btn4").addEventListener("click", function() {
    document.getElementById("my-modal4").classList.add("open")
})

document.getElementById("close-my-modal-btn4").addEventListener("click", function() {
    document.getElementById("my-modal4").classList.remove("open")
})

document.getElementById("open-modal-btn5").addEventListener("click", function() {
    document.getElementById("my-modal5").classList.add("open")
})

document.getElementById("close-my-modal-btn5").addEventListener("click", function() {
    document.getElementById("my-modal5").classList.remove("open")
})

document.getElementById("open-modal-btn6").addEventListener("click", function() {
    document.getElementById("my-modal6").classList.add("open")
})

document.getElementById("close-my-modal-btn6").addEventListener("click", function() {
    document.getElementById("my-modal6").classList.remove("open")
})

document.getElementById("open-modal-btn7").addEventListener("click", function() {
    document.getElementById("my-modal7").classList.add("open")
})

document.getElementById("close-my-modal-btn7").addEventListener("click", function() {
    document.getElementById("my-modal7").classList.remove("open")
})

document.getElementById("open-modal-btn8").addEventListener("click", function() {
    document.getElementById("my-modal8").classList.add("open")
})

document.getElementById("close-my-modal-btn8").addEventListener("click", function() {
    document.getElementById("my-modal8").classList.remove("open")
})
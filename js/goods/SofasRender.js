
const productsContainer = document.querySelector('.sofas');

getSofas();

async function getSofas() {
    const response = await fetch('./js/goods/sofas.json');
    const productsArray = await response.json();
	renderProducts(productsArray);
}

function renderProducts(productsArray) {
    productsArray.forEach(function (item) {
        const productHTML = `
					<div class="products-item" data-id="${item.id}">
						<div class="products-item-img"> 
							<img src="./image/bread/${item.imgSrc}" alt="Упс..." class="productImg" id=${item.modal} onclick="openModal(this)">
						</div>

						<div class="products-item-title">${item.title}</div>
						<div class="price__weight">арт: ${item.art}</div>

						<div class="details-wrapper">
							<div class="items counter-wrapper">
								<div class="items__control" data-action="minus">-</div>
								<input type="number" min="1" max="200" value="1" id="amountInput" class="items__current"  data-counter>
								<div class="items__control" data-action="plus">+</div>
							</div>
						</div>
						
						<div class="price">
							<div class="price__currency">${item.price} ₽</div>
						</div>

						<div class="products-action">
                            <button data-cart class="button glow-on-hover product-button">
                                В корзину
                            </button>
                        </div>
						<div class="price__weight">Добавлено: ${dataUpdate}</div>
						
					<div class="modal" id="my-modal41">
                    <div class="modal_box">
                        <button class="modal_close-btn" id="close-my-modal-btn41" onclick="closeModal()">
                            <svg width="23" height="25" viewBox="0 0 23 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.09082 0.03125L22.9999 22.0294L20.909 24.2292L-8.73579e-05 2.23106L2.09082 0.03125Z" fill="#333333"/>
                                <path d="M0 22.0295L20.9091 0.0314368L23 2.23125L2.09091 24.2294L0 22.0295Z" fill="#333333"/>
                            </svg>
                        </button>
                        <img src="./image/bread/батон.png" alt="" class="img">
                        <h2>Батон Аютинский Хлеб Нарезной пшеничный нарезка высший сорт</h2>

                        <p class="left"><span class="grey">Состав</span><br>
                            Мука пшеничная хлебопекарная высший сорт, вода питьевая, сахар-песок, маргарин ( состав: подсолнечное масло рафинированное и дезодорированное, вода, эмульгаторы (моно- и диглицериды жирных кислот, эфиры полиглицерина и жирных кислот), соль поваренная пищевая, ароматизатор, краситель -каротин, регулятор кислотности - лимонная кислота), соль поваренная пищевая, дрожжи хлебопекарные прессованные, улучшитель хлебопекарный ( состав: соевая мука, стабилизатор - карбонат кальция, антиокислитель - аскорбиновая кислота, ферменты)<br>
                            <span class="grey">Количество</span><br>
                            380 г<br>
                            <span class="grey">Цена</span><br>
                            39 ₽<br>
                            <span class="grey">Пищевая ценность на 100 г</span><br>
                            Белки: 7.5 г, Жиры: 3,1 г, Углеводы: 51,8 г,  Калории: 265.0 ккал<br>
                            <span class="grey">Срок годности</span><br>
                            3 дня
                        </p>
                    </div>
                </div>
                
                <div class="modal" id="my-modal42">
                    <div class="modal_box">
                        <button class="modal_close-btn" id="close-my-modal-btn42" onclick="closeModal()">
                            <svg width="23" height="25" viewBox="0 0 23 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.09082 0.03125L22.9999 22.0294L20.909 24.2292L-8.73579e-05 2.23106L2.09082 0.03125Z" fill="#333333"/>
                                <path d="M0 22.0295L20.9091 0.0314368L23 2.23125L2.09091 24.2294L0 22.0295Z" fill="#333333"/>
                            </svg>
                        </button>
                        <img src="./image/bread/бородинский.png" alt="" class="img">
                        <h2>Хлеб Аютинский Хлеб Бородинский ржано-пшеничный нарезка</h2>

                        <p class="left"><span class="grey">Состав</span><br>
                            Мука хлебопекарная ржаная обдирная, мука пшеничная хлебопекарная первого сорта, вода питьевая очищенная, солод ржаной ферментированный, сахар-песок, соль поваренная пищевая, дрожжи хлебопекарные прессованные, кориандр<br>
                            <span class="grey">Количество</span><br>
                            680 г<br>
                            <span class="grey">Цена</span><br>
                            31 ₽<br>
                            <span class="grey">Пищевая ценность на 100 г</span><br>
                            Белки: 5.4 г, Жиры: 0,8 г, Углеводы: 39,7 г, Калории: 187.0 ккал<br>
                            <span class="grey">Срок годности</span><br>
                            3 дня
                        </p>
                    </div>
                </div>

                <div class="modal" id="my-modal43">
                    <div class="modal_box">
                        <button class="modal_close-btn" id="close-my-modal-btn43" onclick="closeModal()">
                            <svg width="23" height="25" viewBox="0 0 23 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.09082 0.03125L22.9999 22.0294L20.909 24.2292L-8.73579e-05 2.23106L2.09082 0.03125Z" fill="#333333"/>
                                <path d="M0 22.0295L20.9091 0.0314368L23 2.23125L2.09091 24.2294L0 22.0295Z" fill="#333333"/>
                            </svg>
                        </button>
                        <img src="./image/bread/сандвичный.png" alt="" class="img">
                        <h2>Хлеб Harry's American Sandwich сандвичный пшеничный</h2>

                        <p class="left"><span class="grey">Состав</span><br>
                            Мука пшеничная хлебопекарная в/с, вода, сахар, масло рапсовое рафинированное дезодорированное (R*), масло подсолнечное рафинированное дезодорированное (S)*, улучшитель хлебопекарный, соль, спирт пищевой, дрожжи хлебопекарные, клейковина пшеничная сухая<br>
                            <span class="grey">Количество</span><br>
                            470 г<br>
                            <span class="grey">Цена</span><br>
                            109 ₽<br>
                            <span class="grey">Пищевая ценность на 100 г</span><br>
                            Белки: 7.0 г, Жиры: 4,5 г, Углеводы: 46,6 г, Калории: 260.0 ккал<br>
                            <span class="grey">Срок годности</span><br>
                            90 дней при минимальной температуре 3°C и при максимальной температуре 24°C
                        </p>
                    </div>
                </div>

                <div class="modal" id="my-modal44">
                    <div class="modal_box">
                        <button class="modal_close-btn" id="close-my-modal-btn44" onclick="closeModal()">
                            <svg width="23" height="25" viewBox="0 0 23 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.09082 0.03125L22.9999 22.0294L20.909 24.2292L-8.73579e-05 2.23106L2.09082 0.03125Z" fill="#333333"/>
                                <path d="M0 22.0295L20.9091 0.0314368L23 2.23125L2.09091 24.2294L0 22.0295Z" fill="#333333"/>
                            </svg>
                        </button>
                        <img src="./image/bread/лаваш.png" alt="" class="img">
                        <h2>Лаваш Mission Деревенский</h2>

                        <p class="left"><span class="grey">Состав</span><br>
                            Мука пшеничная хлебопекарная высший сорт, вода, масло растительное, агент влагоудерживающий глицерин, глютен пшеничный, солод ржаной ферментированный, соль поваренная пищевая, мальтодекстрин, эмульгатор Е471, консерванты(сорбат калия, пропионат кальция), регулятор кислотности яблочная кислота, разрыхлители(Е450i, гидрокарбонат натрия), стабилизатор гуаровая камедь, агент антислеживающий Е536, вещество для обработки муки Е920. Может содержать следовые количества молочных продуктов<br>
                            <span class="grey">Количество</span><br>
                            270 г<br>
                            <span class="grey">Цена</span><br>
                            104 ₽<br>
                            <span class="grey">Пищевая ценность на 100 г</span><br>
                            Белки: 8.0 г, Жиры: 7,0 г, Углеводы: 47,0 г, Калории: 390.0 ккал<br>
                            <span class="grey">Срок годности</span><br>
                            180 дней
                        </p>
                    </div>
                </div>

                <div class="modal" id="my-modal45">
                    <div class="modal_box">
                        <button class="modal_close-btn" id="close-my-modal-btn45" onclick="closeModal()">
                            <svg width="23" height="25" viewBox="0 0 23 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.09082 0.03125L22.9999 22.0294L20.909 24.2292L-8.73579e-05 2.23106L2.09082 0.03125Z" fill="#333333"/>
                                <path d="M0 22.0295L20.9091 0.0314368L23 2.23125L2.09091 24.2294L0 22.0295Z" fill="#333333"/>
                            </svg>
                        </button>
                        <img src="./image/bread/булочка.png" alt="" class="img">
                        <h2>Булочка Золотой Колос с крем-брюле</h2>

                        <p class="left"><span class="grey">Состав</span><br>
                            Мука пшеничная хлебопекарная высшего сорта, сахар, маргарин для слоеного теста (рафинированные дезодорированные растительные масла,вода, соль, сахар, пищевые добавки: эмульгатор – лецитин, ароматизатор масла, регулятор кислотности – лимонная кислота, консервант –сорбиновая кислота, краситель – каротин), вода питьевая, маргарин столовый (рафинированные дезодорированные растительные масла,вода, соль, пищевая добавка: эмульгатор – лецитин), яйцо куриное пищевое, дрожжи хлебопекарные, масло растительное подсолнечное,патока, соль, пищевая добавка: ароматизатор пищевой – ванилин<br>
                            <span class="grey">Количество</span><br>
                            65 г<br>
                            <span class="grey">Цена</span><br>
                            31 ₽<br>
                            <span class="grey">Пищевая ценность на 100 г</span><br>
                            Белки: 5.5 г, Жиры: 17,0 г, Углеводы: 51,0 г, Калории: 380.0 ккал<br>
                            <span class="grey">Срок годности</span><br>
                            7 дней
                        </p>
                    </div>
                </div>

                <div class="modal" id="my-modal46">
                    <div class="modal_box">
                        <button class="modal_close-btn" id="close-my-modal-btn46" onclick="closeModal()">
                            <svg width="23" height="25" viewBox="0 0 23 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.09082 0.03125L22.9999 22.0294L20.909 24.2292L-8.73579e-05 2.23106L2.09082 0.03125Z" fill="#333333"/>
                                <path d="M0 22.0295L20.9091 0.0314368L23 2.23125L2.09091 24.2294L0 22.0295Z" fill="#333333"/>
                            </svg>
                        </button>
                        <img src="./image/water/сокябл.png" alt="" class="img">
                        <h2>Слойка Аютинский Хлеб с вишней</h2>

                        <p class="left"><span class="grey">Состав</span><br>
                            Мука пшеничная хлебопекарная высший сорт, вода питьевая, маргарины, вода, эмульгаторы, соль поваренная пищевая, консерванты, краситель-каротин, ароматизатор, регулятор кислотности- лимонная кислота, меланж яичный, сахар, дрожжи хлебопекарные, молоко сухое цельное, соль поваренная пищевая, улучшитель хлебопекарный, ароматизатор Ванилин. Состав начинки: вишня замороженная, сахар, загуститель- дикрахмаладипат ацетилированный, консервант- сорбат калия. *Продукт может содержать вишневые косточки<br>
                            <span class="grey">Количество</span><br>
                            80 г<br>
                            <span class="grey">Цена</span><br>
                            24 ₽<br>
                            <span class="grey">Пищевая ценность на 100 г</span><br>
                            Белки: 5.4 г, Жиры: 5,5 г, Углеводы: 48,4 г, Калории: 264.0 ккал<br>
                            <span class="grey">Срок годности</span><br>
                            5 дней
                        </p>
                    </div>
                </div>
                </div>
`;
        productsContainer.insertAdjacentHTML('beforeend', productHTML);
    });
}

function openModal(element) {
            var productName = element.parentNode.querySelector('p').textContent;
            document.getElementById('product-name').textContent = productName;
            document.getElementById('my-modal').style.display = 'block';
        }
        function closeModal() {
    document.getElementById('my-modal').style.display = 'none';
}

document.getElementById("open-modal-btn41").addEventListener("click", function() {
    document.getElementById("my-modal41").classList.add("open")
})

document.getElementById("close-my-modal-btn41").addEventListener("click", function() {
    document.getElementById("my-modal41").classList.remove("open")
})

document.getElementById("open-modal-btn42").addEventListener("click", function() {
    document.getElementById("my-modal42").classList.add("open")
})

document.getElementById("close-my-modal-btn42").addEventListener("click", function() {
    document.getElementById("my-modal42").classList.remove("open")
})

document.getElementById("open-modal-btn43").addEventListener("click", function() {
    document.getElementById("my-modal43").classList.add("open")
})

document.getElementById("close-my-modal-btn43").addEventListener("click", function() {
    document.getElementById("my-modal43").classList.remove("open")
})

document.getElementById("open-modal-btn44").addEventListener("click", function() {
    document.getElementById("my-modal44").classList.add("open")
})

document.getElementById("close-my-modal-btn44").addEventListener("click", function() {
    document.getElementById("my-modal44").classList.remove("open")
})

document.getElementById("open-modal-btn45").addEventListener("click", function() {
    document.getElementById("my-modal45").classList.add("open")
})

document.getElementById("close-my-modal-btn45").addEventListener("click", function() {
    document.getElementById("my-modal45").classList.remove("open")
})

document.getElementById("open-modal-btn46").addEventListener("click", function() {
    document.getElementById("my-modal46").classList.add("open")
})

document.getElementById("close-my-modal-btn46").addEventListener("click", function() {
    document.getElementById("my-modal46").classList.remove("open")
})
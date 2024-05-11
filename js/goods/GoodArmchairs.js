const armchairs = [
	{
		"id": "002",
		"title": "Кресло 'Softy' (мята)",
		"art": 2754628,
		"price": 2350,
		"text": "Мягкое кресло на ножках в нескольких оттенках",
		"imgSrc": "armchair(10).png"
	},
	{
		"id": "005",
		"title": "Кресло 'Softy' (голубой)",
		"art": 2856788,
		"price": 2350,
		"text": "Мягкое кресло на ножках в нескольких оттенках",
		"imgSrc": "armchair(8).png"
	},
	{
		"id": "001",
		"title": "Кресло 'Softy' (белый)",
		"art": 85654952,
		"price": 2350,
		"text": "Мягкое кресло на ножках в нескольких оттенках",
		"imgSrc": "armchair(6).png"
	},
	{
		"id": "004",
		"title": "Кресло 'Softy' (розовый)",
		"art": 952684,
		"price": 2350,
		"text": "Мягкое кресло на ножках в нескольких оттенках",
		"imgSrc": "armchair(7).png"
	},
	{
		"id": "003",
		"title": "Кресло без подлокотников",
		"art": 24585876,
		"price": 3500,
		"text": "Яркое современное кресло без подлокотников",
		"imgSrc": "armchair(3).png"
	},
	{
		"id": "008",
		"title": "Кресло 'Dreams'",
		"art": 663348,
		"price": 4800,
		"text": "Мягкое удобное кресло со сьёмными чехлами",
		"imgSrc": "armchair(9).png"
	},
	{
		"id": "010",
		"title": "Кресло-трансформер",
		"art": 2489568,
		"price": 4300,
		"text": "Стул-кресло на ножках с высокой спинкой",
		"imgSrc": "armchair(5).png"
	},
	{
		"id": "007",
		"title": "Кресло-кровать",
		"art": 2643528,
		"price": 6300,
		"text": "Кресло с раскладным механизмом и сьёмными чехлами",
		"imgSrc": "armchair(4).png"
	},
	{
		"id": "006",
		"title": "Садовое кресло",
		"art": 222248,
		"price": 1900,
		"text": "Плетёное пластиковое кресло для сада",
		"imgSrc": "armchair(2).png"
	},
	{
		"id": "009",
		"title": "Плетёное кресло",
		"art": 292548,
		"price": 2300,
		"text": "Плетёное кресло со сьёмными чехлами",
		"imgSrc": "armchair(1).png"
	}
]


let armchairItem = ''

let armItem = document.getElementById('armchairCard')
armchairs.forEach ((armchair) => {
    armchairItem +=
    `
	<div class="products-item" data-id="${armchair.id}">
		<div class="products-item-img"> 
			<img src="./img/items/armchairs/${armchair.imgSrc}" alt="Упс..." class="productImg">
		</div>

		<div class="products-item-title ">${armchair.title}</div>
		<div class="price__weight">арт: ${armchair.art}</div>
		<div class="products-item-text">${armchair.text}</div>

		<div class="details-wrapper">
			<div class="items counter-wrapper">
				<div class="items__control" data-action="minus">-</div>
				<input type="number" min="1" max="200" value="1" id="amountInput" class="items__current"  data-counter>
				<div class="items__control" data-action="plus">+</div>
			</div>

			<div class="price">
				<div class="price__currency">${armchair.price} ₽</div>
			</div>
		</div>

		<div class="products-action">
			<button data-cart class="button glow-on-hover product-button" type="button"> В корзину</button>
		</div>
		<div class="price__weight">Добавлено: ${dataUpdate}</div>
	</div>

    `
})
armItem.insertAdjacentHTML('beforeend', armchairItem);

const wardrobes = [
	{
		"id": "2",
		"title": "Шкаф-купе 'Classic'",
		"art": 9958,
		"price": 45600,
		"text": "Классическая система хранения с доп.полками",
		"imgSrc": "ward(1).png"
	},
	{
		"id": "5",
		"title": "Шкаф-купе 'Uni'",
		"art": 2854,
		"price": 36500,
		"text": "Шкаф купе с опциональными зеркальными дверцами",
		"imgSrc": "ward(5).png"
	},
	{
		"id": "1",
		"title": "Система хранения 'All'",
		"art": 818952,
		"price": 73000,
		"text": "Система хранения во всю стену (только под заказ)",
		"imgSrc": "ward(4).png"
	},
	{
		"id": "4",
		"title": "Гардероб 'Softy'",
		"art": 82784,
		"price": 23500,
		"text": "Три широких отсека для хранения со штангами",
		"imgSrc": "ward(6).png"
	},
	{
		"id": "3",
		"title": "Гардероб 'Extra'",
		"art": 8828846,
		"price": 61000,
		"text": "Вместительный гардероб с дополнительными полками",
		"imgSrc": "ward(9).png"
	},
	{
		"id": "8",
		"title": "Шкаф для обуви",
		"art": 8248,
		"price": 29000,
		"text": "Распашной шкаф для обуви а аксесуаров",
		"imgSrc": "ward(3).png"
	},
	{
		"id": "0",
		"title": "Платьяной шкаф",
		"art": 7889568,
		"price": 33000,
		"text": "Платьяной шкаф с полочками. Расположение полочек и штанги может быть зеркальным",
		"imgSrc": "ward(8).png"
	},
	{
		"id": "7",
		"title": "Шкаф для хранения",
		"art": 2693988,
		"price": 22000,
		"text": "Деревянный шкаф с дверками. Верхняя часть также может быть закрыта дверцами",
		"imgSrc": "ward(10).png"
	},
	{
		"id": "6",
		"title": "Трюмо 'Прованс'",
		"art": 952632,
		"price": 39000,
		"text": "Платьяной шкаф на ножках. Укомплектован штангой для одежды и полками",
		"imgSrc": "ward(7).png"
	},
	{
		"id": "9",
		"title": "Шкаф Магнум с зеркалом",
		"art": 2763348,
		"price": 54000,
		"text": "Плетёное кресло со сьёмными чехлами",
		"imgSrc": "ward(2).png"
	}
]


let wardItem = ''

let wardrobeItem = document.getElementById('wardCard')
wardrobes.forEach ((ward) => {
    wardItem +=
    `
	<div class="products-item" data-id="${ward.id}">
		<div class="products-item-img"> 
			<img src="./img/items/wardrobe/${ward.imgSrc}" alt="Упс..." class="productImg">
		</div>

		<div class="products-item-title ">${ward.title}</div>
		<div class="price__weight">арт: ${ward.art}</div>
		<div class="products-item-text">${ward.text}</div>

		<div class="details-wrapper">
			<div class="items counter-wrapper">
				<div class="items__control" data-action="minus">-</div>
				<input type="number" min="1" max="200" value="1" id="amountInput" class="items__current"  data-counter>
				<div class="items__control" data-action="plus">+</div>
			</div>

			<div class="price">
				<div class="price__currency">${ward.price} ₽</div>
			</div>
		</div>

		<div class="products-action">
			<button data-cart class="button glow-on-hover product-button"> В корзину</button>
		</div>
		<div class="price__weight">Добавлено: ${dataUpdate}</div>
	</div>

    `
})
wardrobeItem.insertAdjacentHTML('beforeend', wardItem);


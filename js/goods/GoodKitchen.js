
const kitchens = [
	{
		"id": "2",
		"title": "Кухня  Ветторе",
		"art": 28528,
		"price": 74350,
		"text": "Готовое решение для небольшой кухни, в котором предусмотрено всё необходимое",
		"imgSrc": "kitchen(18).png"
	},
	{
		"id": "5",
		"title": "Кухня Джоконда",
		"art": 288288,
		"price": 32300,
		"text": "Готовое решение для небольшой кухни, в котором предусмотрено всё необходимое",
		"imgSrc": "kitchen(16).png"
	},
	{
		"id": "1",
		"title": "Кухня Маелла",
		"art": 8588952,
		"price": 39000,
		"text": "Готовое решение для небольшой кухни, в котором предусмотрено всё необходимое",
		"imgSrc": "kitchen(15).png"
	},
	{
		"id": "4",
		"title": "Кухня Ортлер",
		"art": 928854,
		"price": 43000,
		"text": "Многофункциональный гарнитур по вашим размерам",
		"imgSrc": "kitchen(13).png"
	},
	{
		"id": "3",
		"title": "Кухня Ортлер",
		"art": 24876,
		"price": 51000,
		"text": "Угловой вариант кухонного гарнитура Ортлер",
		"imgSrc": "kitchen(14).png"
	},
	{
		"id": "8",
		"title": "Кухня Гавия",
		"art": 958328,
		"price": 44500,
		"text": "Кухонный гарнитур с автоматическими доводчиками",
		"imgSrc": "kitchen(19).png"
	},
	{
		"id": "0",
		"title": "Кухня Фебо",
		"art": 246388,
		"price": 51200,
		"text": "Современный кухонный гарнитур по вашим размерам",
		"imgSrc": "kitchen(21).png"
	},
	{
		"id": "7",
		"title": "Кухня Мармолада",
		"art": 2828528,
		"price": 46800,
		"text": "Классический вариант кухни с современными функциями",
		"imgSrc": "kitchen(23).png"
	},
	{
		"id": "6",
		"title": "Кухня Гэлакси",
		"art": 288382248,
		"price": 67300,
		"text": "Глянцевая кухня с островом для готовки",
		"imgSrc": "kitchen(20).png"
	},
	{
		"id": "9",
		"title": "Кухня Стельвио",
		"art": 2722858,
		"price": 81300,
		"text": "Гарнитур с мраморной поверхностью и островом для готовки",
		"imgSrc": "kitchen(12).png"
	},
    {
		"id": "94",
		"title": "Кухня Спэйс",
		"art": 2722858,
		"price": 78300,
		"text": "Гарнитур с мраморной поверхностью и островом для готовки",
		"imgSrc": "kitchen(22).png"
	}
]


let kitchenItem = ''

let kitchenCard = document.getElementById('kitchenCard')
kitchens.forEach ((kitchen) => {
    kitchenItem +=
    `
	<div class="products-item" data-id="${kitchen.id}">
		<div class="products-item-img"> 
			<img src="./img/items/kitchen/${kitchen.imgSrc}" alt="Упс..." class="productImg">
		</div>

		<div class="products-item-title ">${kitchen.title}</div>
		<div class="price__weight">арт: ${kitchen.art}</div>
		<div class="products-item-text">${kitchen.text}</div>

		<div class="details-wrapper">
			<div class="items counter-wrapper">
				<div class="items__control" data-action="minus">-</div>
				<input type="number" min="1" max="200" value="1" id="amountInput" class="items__current"  data-counter>
				<div class="items__control" data-action="plus">+</div>
			</div>

			<div class="price">
				<div class="price__currency">${kitchen.price} ₽</div>
			</div>
		</div>

		<div class="products-action">
			<button data-cart class="button glow-on-hover product-button"> В корзину</button>
		</div>
		<div class="price__weight">Добавлено: ${dataUpdate}</div>
	</div>

    `
})
kitchenCard.insertAdjacentHTML('beforeend', kitchenItem);

const chairs = [
	{
		"id": "02",
		"title": "Кухонный стул",
		"art": 288528,
		"price": 1450,
		"text": "Мягкий стул для кухни на деревянных ножках",
		"imgSrc": "chair(2).png"
	},
	{
		"id": "05",
		"title": "Кухонный стул (пластик)",
		"art": 282388,
		"price": 1200,
		"text": "Пластиковый стул с металическими подпорками",
		"imgSrc": "chair(5).png"
	},
	{
		"id": "01",
		"title": "Мягкий стул для кухни",
		"art": 8952,
		"price": 1900,
		"text": "Мягкий стул со сьёмными чехлами и подушкой",
		"imgSrc": "chair(1).png"
	},
	{
		"id": "04",
		"title": "Стул полусфера",
		"art": 952044,
		"price": 2300,
		"text": "Идеально подходил для отдыха в офисе и дома",
		"imgSrc": "chair(4).png"
	},
	{
		"id": "03",
		"title": "Офисный стул",
		"art": 245678,
		"price": 1900,
		"text": "Крутящийся офисный стул с подьёмным механизмом",
		"imgSrc": "chair(3).png"
	},
	{
		"id": "08",
		"title": "Кресло-стул",
		"art": 95348,
		"price": 2200,
		"text": "Мягкое удобное кресло со сьёмными чехлами",
		"imgSrc": "chair(8).png"
	},
	{
		"id": "10",
		"title": "Стул 'Comfi'",
		"art": 24856388,
		"price": 3300,
		"text": "Стул-кресло на ножках с высокой спинкой",
		"imgSrc": "chair(10).png"
	},
	{
		"id": "07",
		"title": "Стул 'Comfi' (серый)",
		"art": 2828528,
		"price": 3000,
		"text": "Мягкий стул с подлокотниками в сером варианте",
		"imgSrc": "chair(7).png"
	},
	{
		"id": "06",
		"title": "Стул 'Arto'",
		"art": 2885248,
		"price": 3900,
		"text": "Высокий стул на ножках с резными боковинками",
		"imgSrc": "chair(6).png"
	},
	{
		"id": "09",
		"title": "Стул 'Leak' (резной)",
		"art": 289858,
		"price": 5300,
		"text": "Резной стул ручной работы в серебристом цвете",
		"imgSrc": "chair(9).png"
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
                        <img src="./img/items/chairs/${chair.imgSrc}" alt="Упс..." class="productImg">
                    </div>

                    <div class="products-item-title ">${chair.title}</div>
                    <div class="price__weight">арт: ${chair.art}</div>
                    <div class="products-item-text">${chair.text}</div>

                    <div class="details-wrapper">
                        <div class="items counter-wrapper">
                            <div class="items__control" data-action="minus">-</div>
                            <input type="number" min="1" max="200" value="1" id="amountInput" class="items__current"  data-counter>
                            <div class="items__control" data-action="plus">+</div>
                        </div>

                        <div class="price">
                            <div class="price__currency">${chair.price} ₽</div>
                        </div>
                    </div>

                    <div class="products-action">
                        <button data-cart class="button glow-on-hover product-button"> В корзину</button>
                    </div>
					<div class="price__weight">Добавлено: ${dataUpdate}</div>
                </div>

    `
})
chairCard.insertAdjacentHTML('beforeend', cardItem);



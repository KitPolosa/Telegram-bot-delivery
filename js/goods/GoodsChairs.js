
const chairs = [
	{
		"id": "02",
		"title": "Молоко коровка из кореновки 2,5%",
		"art": 288528,
		"price": 80,
		"imgSrc": "11.png"
	},
	{
		"id": "05",
		"title": "Масло сливочное кубанский молочник 82,5%",
		"art": 282388,
		"price": 120,
		"imgSrc": "22.png"
	},
	{
		"id": "01",
		"title": "Творог коровка из кореновки 9%",
		"art": 8952,
		"price": 70,
		"imgSrc": "88.png"
	},
	{
		"id": "04",
		"title": "Пломбир коровка из кореновки",
		"art": 952044,
		"price": 47,
		"imgSrc": "44.png"
	},
	{
		"id": "03",
		"title": "Кефир коровка из кореновки 2,5%",
		"art": 245678,
		"price": 100,
		"imgSrc": "33.png"
	},
	{
		"id": "08",
		"title": "Ряженка коровка из кореновки 2,5%",
		"art": 95348,
		"price": 150,
		"imgSrc": "66.png"
	},
	{
		"id": "10",
		"title": "Йогурт коровка из кореновки персиковый",
		"art": 24856388,
		"price": 110,
		"imgSrc": "77.png"
	},
	{
		"id": "07",
		"title": "Сгущенка коровка из кореновки 8,5%",
		"art": 2828528,
		"price": 70,
		"imgSrc": "55.png"
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
                        <img src="./image/${chair.imgSrc}" alt="Упс..." class="productImg">
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
                </div>

    `
})
chairCard.insertAdjacentHTML('beforeend', cardItem);



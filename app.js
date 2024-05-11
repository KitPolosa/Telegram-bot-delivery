let tg = window.Telegram.WebApp;
tg.expand();
tg.MainButton.textColor = '#FFFFFF';
tg.MainButton.color = '#2cab37';
let items = {
    item1: { id: "item1", price: 80, quantity: 0, name: "Молоко коровка из кореновки 2,5%" },
    item2: { id: "item2", price: 120, quantity: 0, name: "Масло сливочное кубанский молочник 82,5%" },
    item3: { id: "item3", price: 70, quantity: 0, name: "Творог коровка из кореновки 9%" },
    item4: { id: "item4", price: 47, quantity: 0, name: "Пломбир коровка из кореновки" },
    item5: { id: "item5", price: 100, quantity: 0, name: "Кефир коровка из кореновки 2,5%" },
    item6: { id: "item6", price: 150, quantity: 0, name: "Ряженка коровка из кореновки 2,5%" },
    item7: { id: "item7", price: 110, quantity: 0, name: "Йогурт коровка из кореновки" },
    item8: { id: "item8", price: 70, quantity: 0, name: "Сгущенка коровка из кореновки 8,5%" }
};
let cartItems = {};
let totalPrice = 0;

function openCart() {
    window.location.href = "cart.html"; // Переходим на страницу корзины
}

function openCategory(category) {
        window.location.href = category + ".html"; // Переходим на страницу категории
}

function goBack(category) {
        window.location.href = category + ".html"; // Переходим на страницу категории
}

function updateQuantity(itemId, change) {
    let item = items[itemId];
    item.quantity += change;
    if (item.quantity < 0) item.quantity = 0;
    if (item.quantity > 10) item.quantity = 10;

    // Добавляем товар в корзину или обновляем его количество
    if (item.quantity > 0) {
        cartItems[itemId] = { name: item.name, price: item.price, quantity: item.quantity };
    } else {
        delete cartItems[itemId];
    }

    document.getElementById("qty" + itemId.slice(-1)).innerText = item.quantity;
    toggleItem(itemId);
    updateCartUI();
}

function updateCartUI() {
    let cartContainer = document.getElementById("cart-container");
    cartContainer.innerHTML = ""; // Очищаем содержимое корзины

    // Добавляем каждый товар в корзину
    for (let itemId in cartItems) {
        let item = cartItems[itemId];
        let itemElement = document.createElement("div");
        itemElement.innerHTML = `${item.name} - ${item.quantity} x ${item.price} ₽`;
        cartContainer.appendChild(itemElement);
    }

    // Показываем или скрываем кнопку оформления заказа
    let orderButton = document.getElementById("order-button");
    orderButton.style.display = Object.keys(cartItems).length > 0 ? "block" : "none";

    // Обновляем общую цену
    totalPrice = calculateTotalPrice();
}

// Вызываем функцию при загрузке страницы
window.addEventListener("DOMContentLoaded", () => {
    updateCartUI();
});

function checkout() {
    // Перенаправляем пользователя на страницу оплаты
    window.location.href = `https://yoomoney.ru/quickpay/confirm.xml?account=ваш_номер_кошелька&quickpay=shop&payment-type-choice=on&shop-host=ваш_домен&targets=Заказ продуктов&sum=${totalPrice}&comment=Корзина`;
}

Telegram.WebApp.onEvent("mainButtonClicked", function() {
    let data = {
        items: Object.values(items).filter(item => item.quantity > 0),
        totalPrice: calculateTotalPrice()
    };
    sendDataToBot(data);
});

function sendDataToBot(data) {
    fetch('http://127.0.0.1:8080/add_to_cart', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.text())
    .then(message => console.log(message))
    .catch(error => console.error('Error:', error));
}


function openModal(element) {
            var productName = element.parentNode.querySelector('p').textContent;
            document.getElementById('product-name').textContent = productName;
            document.getElementById('my-modal').style.display = 'block';
        }
        function closeModal() {
    document.getElementById('my-modal').style.display = 'none';
}

document.getElementById("open-modal-btn").addEventListener("click", function() {
    document.getElementById("my-modal").classList.add("open")
})

document.getElementById("close-my-modal-btn").addEventListener("click", function() {
    document.getElementById("my-modal").classList.remove("open")
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

Telegram.WebApp.onEvent("mainButtonClicked", function() {
    let data = {
        items: Object.values(items).filter(item => item.quantity > 0),
        totalPrice: calculateTotalPrice()
    };
    tg.sendData(JSON.stringify(data));
});

function calculateTotalPrice() {
    return Object.values(items).reduce((total, item) => total + (item.price * item.quantity), 0);
}

// Обновление кнопок при загрузке страницы
window.addEventListener("DOMContentLoaded", () => {
    updateCartUI();
});

document.getElementById("add1").addEventListener("click", function() {
    updateQuantity("item1", 1);
});

document.getElementById("subtract1").addEventListener("click", function() {
    updateQuantity("item1", -1);
});

document.getElementById("add2").addEventListener("click", function() {
    updateQuantity("item2", 1);
    toggleItem("item2");
});

document.getElementById("subtract2").addEventListener("click", function() {
    updateQuantity("item2", -1);
    toggleItem("item2");
});

document.getElementById("add3").addEventListener("click", function() {
    updateQuantity("item3", 1);
    toggleItem("item3");
});

document.getElementById("subtract3").addEventListener("click", function() {
    updateQuantity("item3", -1);
    toggleItem("item3");
});

document.getElementById("add4").addEventListener("click", function() {
    updateQuantity("item4", 1);
    toggleItem("item4");
});

document.getElementById("subtract4").addEventListener("click", function() {
    updateQuantity("item4", -1);
    toggleItem("item4");
});

document.getElementById("add5").addEventListener("click", function() {
    updateQuantity("item5", 1);
    toggleItem("item5");
});

document.getElementById("subtract5").addEventListener("click", function() {
    updateQuantity("item5", -1);
    toggleItem("item5");
});

document.getElementById("add6").addEventListener("click", function() {
    updateQuantity("item6", 1);
    toggleItem("item6");
});

document.getElementById("subtract6").addEventListener("click", function() {
    updateQuantity("item6", -1);
    toggleItem("item6");
});

document.getElementById("add7").addEventListener("click", function() {
    updateQuantity("item7", 1);
    toggleItem("item7");
});

document.getElementById("subtract7").addEventListener("click", function() {
    updateQuantity("item7", -1);
    toggleItem("item7");
});

document.getElementById("add8").addEventListener("click", function() {
    updateQuantity("item8", 1);
    toggleItem("item8");
});

document.getElementById("subtract8").addEventListener("click", function() {
    updateQuantity("item8", -1);
    toggleItem("item8");
});
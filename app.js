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
    document.getElementById("qty" + itemId.slice(-1)).innerText = item.quantity;
    toggleItem(itemId);
}

let cart = {};

// Функция для добавления товара в корзину
function addToCart(itemId) {
    if (!cart[itemId]) {
        cart[itemId] = { quantity: 0 };
    }
    cart[itemId].quantity++;
    updateCartUI();
}

// Функция для удаления товара из корзины
function removeFromCart(itemId) {
    if (cart[itemId] && cart[itemId].quantity > 0) {
        cart[itemId].quantity--;
    }
    updateCartUI();
}

// Функция для обновления UI корзины
function updateCartUI() {
    let cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';

    let totalPrice = 0;

    for (let itemId in cart) {
        let item = items[itemId];
        if (cart[itemId].quantity > 0) {
            let itemTotalPrice = item.price * cart[itemId].quantity;
            totalPrice += itemTotalPrice;

            let itemHTML = `
                <div class="cart-item">
                    <span>${item.name}</span>
                    <span>Количество: ${cart[itemId].quantity}</span>
                    <span>Цена: ${itemTotalPrice} ₽</span>
                    <button onclick="removeFromCart('${itemId}')">Удалить</button>
                </div>
            `;
            cartItems.innerHTML += itemHTML;
        }
    }

    if (totalPrice > 0) {
        let checkoutBtn = document.querySelector('.checkout-btn');
        checkoutBtn.style.display = 'block';
    }
}

// Функция для оформления заказа
function checkout() {
    let totalAmount = calculateTotalPrice();
    // Здесь должен быть код для оплаты через ЮMoney
}

function toggleItem(itemId) {
    let item = items[itemId];
    let btn = document.getElementById("add" + itemId.slice(-1));
    let subtractBtn = document.getElementById("subtract" + itemId.slice(-1));

    btn.classList.remove('added-to-cart');
    btn.style.display = 'inline-block';
    subtractBtn.style.display = 'inline-block';

    let totalPrice = calculateTotalPrice();
    if (totalPrice > 0) {
        tg.MainButton.setText(`Общая цена товаров: ${totalPrice}`);
        if (!tg.MainButton.isVisible) {
            tg.MainButton.show();
        }
    } else {
        tg.MainButton.hide();
    }
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
    addToCart("item1");
});

document.getElementById("subtract1").addEventListener("click", function() {
    removeFromCart("item1");
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
let tg = window.Telegram.WebApp;
tg.expand();
tg.MainButton.textColor = '#FFFFFF';
tg.MainButton.color = '#2cab37';
let items = {
    item1: { id: "item1", price: 80, quantity: 0 },
    item2: { id: "item2", price: 120, quantity: 0 },
    item3: { id: "item3", price: 70, quantity: 0 },
    item4: { id: "item4", price: 470, quantity: 0 },
    item5: { id: "item5", price: 100, quantity: 0 },
    item6: { id: "item6", price: 150, quantity: 0 },
    item7: { id: "item7", price: 110, quantity: 0 },
    item8: { id: "item8", price: 70, quantity: 0 }
};

function updateQuantity(itemId, change) {
    let item = items[itemId];
    item.quantity += change;
    if (item.quantity < 0) item.quantity = 0;
    if (item.quantity > 10) item.quantity = 10;
    document.getElementById("qty" + itemId.slice(-1)).innerText = item.quantity;
    toggleItem(itemId);
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
    tg.sendData(JSON.stringify(data));
});

function calculateTotalPrice() {
    return Object.values(items).reduce((total, item) => total + (item.price * item.quantity), 0);
}

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
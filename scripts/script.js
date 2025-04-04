//variablen
let basket = [];

function init(){
    let basketToggleBtn = document.getElementById('basket-toggle-btn');
    if (basketToggleBtn) {
        basketToggleBtn.addEventListener('click', toggleBasket);
    }
    renderMainDishes();
    renderSideDishes();
    renderPizzas();
    renderDesserts();
}

function renderMainDishes() {
    let mainDishesRef = document.getElementById('div-for-main-dishes');
    mainDishesRef.innerHTML = '';
    restaurant[0].maindishes.forEach((dish, indexDish) => {
        mainDishesRef.innerHTML += getDishTemplate(dish, indexDish);
    });
}

function renderSideDishes() {
    let sideDishesRef = document.getElementById("div-for-side-dishes");
    sideDishesRef.innerHTML = "";

    restaurant[0].sidedishes.forEach((dish, indexDish) => {
        sideDishesRef.innerHTML += getDishTemplate(dish, indexDish);
    });
}

function renderPizzas() {
    let pizzaRef = document.getElementById("div-for-pizzas");
    pizzaRef.innerHTML = "";

    restaurant[0].pizzas.forEach((dish, indexDish) => {
        pizzaRef.innerHTML += getDishTemplate(dish, indexDish);
    });
}

function renderDesserts() {
    let dessertRef = document.getElementById("div-for-desserts");
    dessertRef.innerHTML = "";
    restaurant[0].desserts.forEach((dish, indexDish) => {
        dessertRef.innerHTML += getDishTemplate(dish, indexDish);
    });
}

function renderBasket() {
    let basketRef = document.getElementById("current-basket");
    basketRef.innerHTML = "";
    basket.forEach((dish) => {
        basketRef.innerHTML += getBasketDishTemplate(dish);
    })
    renderSubtotal();
    renderTotal();
}

function addToBasket(id) {
    let dish = basket.find(d => d.id === id);
    if (dish) {
        dish.amount++;
        renderBasketDish(id);
    } else {
        let newDish = restaurant[0].maindishes.find(d => d.id === id) ||
                      restaurant[0].sidedishes.find(d => d.id === id) ||
                      restaurant[0].pizzas.find(d => d.id === id) ||
                      restaurant[0].desserts.find(d => d.id === id);
        if (newDish) {
            basket.push({ ...newDish, amount: 1 });
            renderBasket();
        }
    }
    renderSubtotal();
    renderTotal();
}

function saveToLocalStorage() {
    
}

function loadFromLocalStorage(){

}

function renderBasketDish(id) {
    let basketDishRef = document.getElementById(`basketDish-${id}`);
    let dish = basket.find(d => d.id === id);
    if (!dish) return;
    if (dish.amount === 0) {
        basketDishRef.remove();
        return;
    }
    let pricePerDishElement = basketDishRef.querySelector(`#price-per-dish-${id}`);
    if (pricePerDishElement) {
        pricePerDishElement.innerText = `${dish.price.toFixed(2)}€`;
    }
    let totalPricePerDishElement = basketDishRef.querySelector(`#total-price-per-dishes-${id}`);
    if (totalPricePerDishElement) {
        totalPricePerDishElement.innerText = `${(dish.amount * dish.price).toFixed(2)}€`;
    }
    let currentAmountElement = basketDishRef.querySelector('.current-amount');
    if (currentAmountElement) {
        currentAmountElement.innerText = dish.amount;
    }
    renderSubtotal();
    renderTotal();
}

function renderSubtotal() {
    let subtotalRef = document.getElementById("subtotal-sum");
    let subtotal = basket.reduce((sum, dish) => sum + dish.amount * dish.price, 0);
    subtotalRef.innerText = `${subtotal.toFixed(2)}€`;
}

function renderTotal() {
    let totalRef = document.getElementById("total-price");
    let deliveryCost = 3;
    let subtotal = basket.reduce((sum, dish) => sum + dish.amount * dish.price, 0);
    let total = subtotal + deliveryCost;
    totalRef.innerText = `${total.toFixed(2)}€`;
    updateBasketBtn()
}

function removeFromBasket(id) {
    let index = basket.findIndex(d => d.id === id);
    if (index !== -1) {
        if (basket[index].amount > 1) {
            basket[index].amount--;
        } else {
            basket.splice(index, 1);
        }
    }
    renderBasketDish(id);
    renderSubtotal();
    renderTotal();
}

function oneMoreDish(id) {
    let dish = basket.find(d => d.id === id);
    if (dish) {
        dish.amount++;
        renderBasketDish(id);
        renderSubtotal();
        renderTotal();
    }
}

function oneLessDish(id) {
    let dishIndex = basket.findIndex(d => d.id === id);
    if (dishIndex !== -1) {
        if (basket[dishIndex].amount > 1) {
            basket[dishIndex].amount--;
            renderBasketDish(id);
        } else {
            basket.splice(dishIndex, 1);
            renderBasket();
        }
        renderSubtotal();
        renderTotal();
    }
}

function deleteBasketDish(){

}

function toggleBasket() {
    let basketWrapperRef = document.querySelector('.basket-wrapper');
    let toggleBtn = document.getElementById('toggle-basket-btn');
    basketWrapperRef.classList.toggle('open');
    if (basketWrapperRef.classList.contains('open')) {
        toggleBtn.innerText = "Schließen";
    } else {
        updateBasketBtn();
    }
}

function updateBasketBtn() {
    let total = basket.reduce((sum, dish) => sum + dish.amount * dish.price, 0) + 3;
    document.getElementById("toggle-basket-btn").innerText = `Warenkorb (${total.toFixed(2)}€)`;
}

function openBasket() {
    let basketWrapper = document.querySelector('.basket-wrapper');
    basketWrapper.classList.add('open');
}

function closeBasket() {
    let basketWrapper = document.querySelector('.basket-wrapper');
    basketWrapper.classList.remove('open');
}
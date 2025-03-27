//variablen
let basket = [];

function init(){
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
    basketDishRef.querySelector('.current-amount').innerText = dish.amount;
    basketDishRef.querySelector('.dish-price').innerText = `${dish.price.toFixed(2)}€`;
    basketDishRef.querySelector('.total-price').innerText = `${(dish.amount * dish.price).toFixed(2)}€`;
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
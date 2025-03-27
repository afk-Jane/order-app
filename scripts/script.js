//variablen
let basket = [];

function init(){
    renderMainDishes();
    renderSideDishes();
    renderPizzas();
    renderDesserts();
}

//render: basket, basket-price
//localStorage load, save
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
}

function addToBasket(indexDish) {
    basket.push(indexDish);
    saveToLocalStorage();
    renderBasket();
}

function saveToLocalStorage() {
    
}
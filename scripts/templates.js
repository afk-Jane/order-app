function getDishTemplate(dish) {
    let formattedPrice = parseFloat(dish.price).toFixed(2);
    return `
        <div class="a-dish-template" id="dish-${dish.id}">
            <div class='dish-first-row'>
                <h3 id="dish-name-${dish.id}">${dish.name}</h3>
                <div class='btn-div-designe'>
                    <button class="add-btn" id="add-btn-${dish.id}" onclick="addToBasket(${dish.id})">+</button>
                </div>
            </div>    
            <p class="dish-description" id="dish-description-${dish.id}">${dish.description}</p>
            <p class="dish-price" id="dish-price-${dish.id}">${formattedPrice}€</p>
        </div>
    `;
}

function getBasketDishTemplate(dish) {
    let formattedPrice = parseFloat(dish.price).toFixed(2);
    let totalDishPrice = (dish.price * dish.amount).toFixed(2);
    return /*html*/`
        <div class="basket-dish-template" id="basketDish-${dish.id}">
            <div class='dishname-N-delete'>
                <h3 id="dish-name-${dish.id}">${dish.name}</h3>
                <button class='delete-btn' id='basket-delete-btn' onclick='deleteBasketDish()'>X</button>
            </div>
            <div class='amount-btns'>
                <button class="minus-btn" id="minus-btn-${dish.id}" onclick="oneLessDish(${dish.id})">-</button>
                <p class='current-amount' id="current-amount-${dish.id}">${dish.amount}</p>
                <button class="plus-btn" id="plus-btn-${dish.id}" onclick="oneMoreDish(${dish.id})">+</button>
            </div>    
            <p class="price-per-dish" id="price-per-dish-${dish.id}">${formattedPrice}€</p>
            <p class='total-price-per-dishes' id="total-price-per-dishes-${dish.id}">${totalDishPrice}€</p>
        </div>
    `;
}
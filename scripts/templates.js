function getDishTemplate(dish, indexDish) {
    let formattedPrice = parseFloat(dish.price).toFixed(2);
    return `
        <div class="a-dish-template" id="dish-${indexDish}">
            <div class='dish-first-row'>
                <h3 id="dish-name-${indexDish}">${dish.name}</h3>
                <div class='btn-div-designe'>
                    <button class="add-btn" id="add-btn-${indexDish}" onclick="addToBasket(${indexDish})">+</button>
                </div>
            </div>    
            <p class="dish-description" id="dish-description-${indexDish}">${dish.description}</p>
            <p class="dish-price" id="dish-price-${indexDish}">${formattedPrice}€</p>
        </div>
    `;
}
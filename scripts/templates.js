function getDishTemplate(dish, indexDish) {
    let formattedPrice = parseFloat(dish.price).toFixed(2);
    
    return `
        <div class="a-dish-template" id="dish-${indexDish}">
            <h3 id="dish-name-${indexDish}">${dish.name}</h3>
            <button class="add-btn" id="add-btn-${indexDish}" onclick="addToCart(${indexDish})">+</button>
            <p class="dish-description" id="dish-description-${indexDish}">${dish.description}</p>
            <p class="dish-price" id="dish-price-${indexDish}">${dish.price}€</p>
        </div>
    `;
}
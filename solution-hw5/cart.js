// const cartItemSet = new Set ()
const cartItemArray = []

const allGlazingInfo = {
    "Original": 0.00,
    "Sugar Milk": 0.00,
    "Vanilla Milk": 0.50,
    "Double Chocolate": 1.50

}

const allPackInfo = {
    "1": 1,
    "3": 3,
    "6": 5,
    "12": 10
}


class Roll {
    constructor(rollType, rollGlazing, packSize, basePrice) {
        this.type = rollType;
        this.glazing = rollGlazing;
        this.size = packSize;
        this.basePrice = basePrice;
        let rawPrice = (basePrice + parseFloat(allGlazingInfo[rollGlazing])) * parseFloat(allPackInfo[packSize]);
        this.calculatedPrice = rawPrice.toFixed(2);
        this.element = null;
    }
}

console.log(cartItemArray)
const Original = new Roll("Original", "Sugar Milk", 1, parseFloat(rolls["Original"].basePrice));
const Walnut = new Roll("Walnut", "Vanilla Milk", 12, parseFloat(rolls["Walnut"].basePrice));
const Raisin = new Roll("Raisin", "Sugar Milk", 3, parseFloat(rolls["Raisin"].basePrice ));
const Apple = new Roll("Apple", "Original", 3, parseFloat(rolls["Apple"].basePrice));

const rollsArray = [Original, Walnut, Raisin, Apple]



function appendToCart(rollsArray) {
    for (let i=0; i < rollsArray.length; i++) {
        cartItemArray.unshift(rollsArray[i]);
    }
}


appendToCart(rollsArray)


for (const roll of cartItemArray) {
    createElement (roll);
} 

function createElement(roll) {
    const template = document.querySelector("#item-template");
    const clone = template.content.cloneNode(true);

    roll.element = clone.querySelector(".item");

  
    const btnRemove = roll.element.querySelector("button.remove");
    btnRemove.addEventListener('click', () => {
      removeItem(roll);
    });
    
    const rollListElement = document.querySelector(".item-list");
    rollListElement.prepend(roll.element);
    // what is this 
    
    updateElement(roll);
  }
  
function updateElement(roll) {
    const rollImageElement = roll.element.querySelector(".imageURL img");
    const rollTitleElement = roll.element.querySelector(".item-title");
    const rollGlazingElement = roll.element.querySelector(".item-glazing");
    const rollPackElement = roll.element.querySelector(".item-pack");
    const rollPriceElement = roll.element.querySelector(".right");

    
    rollImageElement.src = "images/products/" + rolls[roll.type].imageFile;
    rollTitleElement.innerText = roll.type + " Cinnamon Roll";
    rollGlazingElement.innerText = roll.glazing;
    rollPackElement.innerText = "Pack size: " + roll.size;
    rollPriceElement.innerText = "$ " + roll.calculatedPrice;
  }
  
updateTotalPrice()


function removeItem(roll) {
    roll.element.remove();
    const index = cartItemArray.indexOf(roll);
    if (index !== -1) {
        cartItemArray.splice(index, 1);
    }
    updateTotalPrice()
  }
  
 

  function updateTotalPrice() {
    const totalPriceElement = document.querySelector(".total-right p");
    let totalPrice = 0;
    for (const roll of cartItemArray) {
        const eachPrice = parseFloat(roll.calculatedPrice);
        totalPrice += eachPrice;
    } 
    totalPriceElement.innerText = "$ " + totalPrice.toFixed(2);
}

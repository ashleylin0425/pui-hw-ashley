const cartItemArray = []

const allGlazingInfo = {
    "Keep original": 0.00,
    "Sugar milk": 0.00,
    "Vanilla milk": 0.50,
    "Double chocolate": 1.50

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
      console.log("Calculated Price:", this.calculatedPrice);

      this.element = null;
  }
}



function appendToCart(rollsArray) {
    for (let i=0; i < rollsArray.length; i++) {
        cartItemArray.push(rollsArray[i]);
    }
    
}





function createElement(roll) {
    const template = document.querySelector("#item-template");
    const clone = template.content.cloneNode(true);

    roll.element = clone.querySelector(".item");

  
    const btnRemove = roll.element.querySelector("button.remove");
    btnRemove.addEventListener('click', () => {
      removeItem(roll);
      updateCartCount();
    });
    
    const rollListElement = document.querySelector(".item-list");
    rollListElement.appendChild(roll.element);

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
  


function removeItem(roll) {
    roll.element.remove();
    const index = cartItemArray.indexOf(roll);
    if (index !== -1) {
        cartItemArray.splice(index, 1);
    }
    updateTotalPrice();

    const cartArrayString = JSON.stringify(cartItemArray);
    localStorage.setItem('storedItems', cartArrayString);
    
    console.log("Cart in local storage after removing item:", cartArrayString);

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



function retrieveFromLocalStorage() {
    const cartArrayString = localStorage.getItem('storedItems');
    const cartArray = JSON.parse(cartArrayString);
    if (!cartArray) { 
      cartArray = []; 
     }

    //  key functionality! remember to call on class Roll here, loop thru array to create element on DOM
    for (const item of cartArray) {
      const roll = new Roll(item.type, item.glazing, item.size, item.basePrice);
      cartItemArray.push(roll);
  }
    for (const roll of cartItemArray) {
        createElement(roll);
}
}
    

if (localStorage.getItem('storedItems') != null) {
    retrieveFromLocalStorage();
  }
  


updateTotalPrice()


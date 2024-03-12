

const queryString = window.location.search;
const params = new URLSearchParams(queryString)
const chosenRoll = params.get("roll")


let cart = []
import { appendToCart } from './cart.js';


function updateRoll(roll) {
    const rollDetail = rolls[roll];
    const rollName = roll;
    console.log(roll);
    const rollPrice = rollDetail.basePrice;
    const rollImagePath = rollDetail.imageFile;

    document.querySelector(".chosen-image").src = "images/products/" + rollImagePath; 
    document.querySelector(".title").textContent = rollName + " Cinnamon Roll";
    document.querySelector(".price").textContent = "$" + rollPrice


}

updateRoll(chosenRoll)


class Roll {
    constructor(rollType, rollGlazing, packSize, basePrice) {
        this.type = rollType;
        this.glazing =  rollGlazing;
        this.size = packSize;
        this.basePrice = basePrice;
    }
}





function getUserGlazing(sel) {
    return sel.options[sel.selectedIndex].text;
}


function getUserPack(sel) {
    return sel.options[sel.selectedIndex].text;
}


function storeRollInCart() {
    const selectedRoll = chosenRoll;
    const selectedPrice = rolls[chosenRoll].basePrice;
    const selGlazing = document.querySelector("#glazingOptions");
    const selPack = document.querySelector("#packOptions");
    const userGlazing = getUserGlazing(selGlazing);
    const userPack = getUserPack(selPack);

    let theRoll  = new Roll(selectedRoll, userGlazing, userPack, selectedPrice);
    cart.push(theRoll);
    saveToLocalStorage();

}

// above is hw4


// function saveToLocalStorage() {
//   console.log("Hi");
//   const cartArrayString = JSON.stringify(cart);
//   console.log(cartArrayString);

//   localStorage.setItem('storedItems', cartArrayString);
// }

// function retrieveFromLocalStorage() {
//   const cartArrayString = localStorage.getItem('storedItems');
//   const cartArray = JSON.parse(cartArrayString);
//   appendToCart(cartArray); 
//   // used the function from cart js, can I do that??
//   // for (const roll of cartItemArray) {
//   //   createElement (roll);
// }     
  
// console.log(localStorage)


// if (localStorage.getItem('storedItems') != null) {
//   retrieveFromLocalStorage();
// }


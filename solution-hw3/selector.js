// create an array for all the options and prices
// need a variable to store the value of original price?
// display the price change 





const allGlazing = {
    "Keep original": 0.00,
    "Sugar milk": 0.00,
    "Vanilla milk": 0.50,
    "Double chocolate": 1.50

}

const allPack = {
    "1": 1,
    "3": 3,
    "6": 5,
    "12": 10
}


let selectGlazing = document.querySelector("#glazingOptions")

for (const [text, value] of Object.entries(allGlazing)) {
    let glazingItem = document.createElement("option")
    glazingItem.text = text
    glazingItem.value = value
    selectGlazing.appendChild(glazingItem)}

let selectPack = document.querySelector("#packOptions")

for (const [text,value] of Object.entries(allPack)) {
    let packItem = document.createElement("option")
    packItem.text = text
    packItem.value = value
    selectPack.appendChild(packItem)}


function glazingChange(element) {
    updatePrice()
    }    

function packChange(element) {
    updatePrice()
}    

function updatePrice() {
    const basePrice = 2.49
    const glazingPrice = parseFloat(selectGlazing.value);
    const packPrice = parseInt(selectPack.value);
    const totalPrice = (basePrice + glazingPrice) * packPrice; 
    const finalPrice = totalPrice.toFixed (2);
    // rounded to two decimal places only
    document.querySelector(".add-cart .price").innerText = "$" + finalPrice
}


     
    

//   use two functions to track the change and one to change the price




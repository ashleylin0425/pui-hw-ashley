

const queryString = window.location.search;
const params = new URLSearchParams(queryString)
const chosenRoll = params.get("roll")


let cart = []


function updateRoll(roll) {
    const rollDetail = rolls[roll];
    const rollName = roll;
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
    console.log (selectedRoll);
    console.log (selectedPrice);
    console.log(userGlazing);
    console.log(userPack);

    let theRoll  = new Roll(selectedRoll, userGlazing, userPack, selectedPrice);
    cart.push(theRoll);
    console.log(cart);
}





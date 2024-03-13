

const queryString = window.location.search;
const params = new URLSearchParams(queryString)
const chosenRoll = params.get("roll")


console.log(chosenRoll)

let cartItems = []

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
    cartItems.push(theRoll);
    saveToLocalStorage();

}

// above is hw4


function saveToLocalStorage() {
  const cartArrayString = JSON.stringify(cartItems);
  console.log(cartArrayString);
  localStorage.setItem('storedItems', cartArrayString);

}
function retrieveFromLocalStorage() {
    const cartArrayString = localStorage.getItem("storedItems");
    const cartArray = JSON.parse(cartArrayString);
    cartItems = cartArray; 
    console.log("Hi")
}

if (localStorage.getItem("storedItems") != null) {
    retrieveFromLocalStorage();
  }









function checkLocalStorage() {
  const storedItemsString = localStorage.getItem('storedItems');
  if (storedItemsString) {
    const storedItems = JSON.parse(storedItemsString);
    console.log('localStorage contains:', storedItems);
  } else {
    console.log('localStorage is empty.');
  }
}



checkLocalStorage()



// don't know if the localstorage is working, because if exit to the gallery
// localstorage is lost 

// why calculated price undefined

// also once removed, go back to product page, still need to 
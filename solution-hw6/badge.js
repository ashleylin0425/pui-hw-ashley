const superscript = document.querySelector(".superscript");

function updateCartCount() {

let count;
if (localStorage.getItem('storedItems') !== null) {
    const cartArray = JSON.parse(localStorage.getItem('storedItems'));
    count = cartArray.length;
} else {
    count = 0;
}
superscript.textContent = count;

}

updateCartCount();



  


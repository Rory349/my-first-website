//Quantity Button
const quantityDisplay = document.getElementById("quantity");
const plusBtn = document.getElementById("plusbtn");
const minusBtn = document.getElementById("minusbtn");
const pdreamPrice = document.getElementById("pdreamprice");
const mbPrice = document.getElementById("mbprice")

let quantity = 1;

plusBtn.addEventListener("click", () => {
    quantity++;

    quantityDisplay.textContent = quantity;

    if (pdreamPrice) {
        pdreamPrice.textContent = "$" + (quantity * 70) + ".00 AUD";
    }

    if (mbPrice) {
        mbPrice.textContent = "$" + (quantity * 95) + ".00 AUD";
    }
});

minusBtn.addEventListener("click", () => {

    if (quantity > 1) {
        quantity--;

        quantityDisplay.textContent = quantity;

        if (pdreamPrice) {
            pdreamPrice.textContent = "$" + (quantity * 70) + ".00 AUD";
        }

        if (mbPrice) {
            mbPrice.textContent = "$" + (quantity * 95) + ".00 AUD";
        }
    }
});
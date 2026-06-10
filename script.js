//Quantity Button
const quantityDisplay = document.getElementById("quantity");
const plusBtn = document.getElementById("plusbtn");
const minusBtn = document.getElementById("minusbtn");
const pdreamPrice = document.getElementById("pdreamprice");
const mbPrice = document.getElementById("mbprice")
const plusBtnMb = document.getElementById("plusbtnmb");
const minusBtnMb = document.getElementById("minusbtnmb");
const quantityMb = document.getElementById("quantitymb");
const mbPriceCart = document.getElementById("mbpricecart");
const totalPrice = document.getElementById("totalprice");

let quantity = 1;
let quantitymb = 1;

plusBtn.addEventListener("click", () => {
    quantity++;

    quantityDisplay.textContent = quantity;

    if (pdreamPrice) {
        pdreamPrice.textContent = "$" + (quantity * 70) + ".00 AUD";
    }

    if (mbPrice) {
        mbPrice.textContent = "$" + (quantity * 95) + ".00 AUD";
    }
    totalPrice.textContent = "TOTAL: AU$" + ((quantitymb * 95) + (quantity * 70));
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
        totalPrice.textContent = "TOTAL: AU$" + ((quantitymb * 95) + (quantity * 70));
    }
});

//Cart Quanitity For Mont Blanc
plusBtnMb.addEventListener("click", () => {
    quantitymb++;

    quantityMb.textContent = quantitymb;

    mbPriceCart.textContent = "$" + (quantitymb * 95) + ".00 AUD";
    totalPrice.textContent = "TOTAL: AU$" + ((quantitymb * 95) + (quantity * 70));
});

minusBtnMb.addEventListener("click", () => {

    if (quantitymb > 1) {
        quantitymb--;

        quantityMb.textContent = quantitymb;

        mbPriceCart.textContent = "$" + (quantitymb * 95) + ".00 AUD";
        totalPrice.textContent = "TOTAL: AU$" + ((quantitymb * 95) + (quantity * 70));
    }
});



//Payment Overlay
document.addEventListener('DOMContentLoaded', function () {
    const popupOverlay = document.getElementById('popupOverlay');
    const popup = document.getElementById('popup');
    const openPopup = document.getElementById('openPopup');
    const closePopup = document.getElementById('closePopup');
    const emailInput = document.getElementById('emailInput');
    const nameInput = document.getElementById('nameInput');
    const cardInput = document.getElementById('cardInput');
    const expiryInput = document.getElementById('expiryInput');
    const cvcInput = document.getElementById('cvcInput');
    const addressInput = document.getElementById('addressInput');
    const postcodeInput = document.getElementById('postcodeInput');
    const stateInput = document.getElementById('stateInput');
    const placeOrderBtn = document.getElementById('placeOrderBtn');
    const confirmOverlay = document.getElementById('confirmOverlay');

    //Open Popup Function
    function openPopupFunc() {
        popupOverlay.style.display = 'block';

    }

    //Open Confirmation Function
    function openConfirmFunc() {
        confirmOverlay.style.display = 'block';

    }

    //Close popup func
    function closePopupFunc() {
        popupOverlay.style.display = 'none';
    }
    

    //Submit payment form function
    function submitForm() {
        const email = emailInput.value;
        const name = nameInput.value;
        const card = cardInput.value;
        const expiry = expiryInput.value;
        const cvc = cvcInput.value;
        const address = addressInput.value;
        const postcode = postcodeInput.value;
        const state = stateInput.value;
        console.log(`Payment Submitted, payment details: ${email} ${name} ${card} ${expiry} ${cvc} ${address} ${postcode} ${state}`);
        closePopupFunc();
        openConfirmFunc();
    }

    //Open and close popup
    openPopup.addEventListener('click', openPopupFunc);

    closePopup.addEventListener('click', closePopupFunc);
    placeOrderBtn.addEventListener('click', submitForm);

});


//Confirmation Overlay
document.addEventListener('DOMContentLoaded', function () {
    const confirm = document.getElementById('confirm');
    const openConfirm = document.getElementById('openConfirm');
    const returnBtn = document.getElementById('returnBtn');

    //Close confirmation func
    function closeConfirmFunc() {
        confirmOverlay.style.display = 'none';
    }

    returnBtn.addEventListener('click', closeConfirmFunc);

});

// Update total cost
function updateTotalCost() {
    let bestPrice = document.getElementById('best-price');
    let memoryCost = document.getElementById('memory-cost');
    let storageCost = document.getElementById('storage-cost');
    let deliveryCost = document.getElementById('delivery-cost');
    let totalCost = document.getElementById('total-cost');
    let totalPrice = document.getElementById('total-price');
    const grandTotal = parseInt(bestPrice.innerText) + parseInt(memoryCost.innerText) + parseInt(storageCost.innerText) + parseInt(deliveryCost.innerText);     // Total sum
    totalCost.innerText = grandTotal;
    totalPrice.innerText = grandTotal;
}
// Calculate the memory cost function
function calculateMemoryCost(value) {
    const memoryCostText = document.getElementById('memory-cost');
    memoryCostText.innerText = value;      // Update the memory cost
    updateTotalCost();      // Update the total price after changing the value
}
// Calculate the storage cost function
function calculateStorageCost(value) {
    const storageCostText = document.getElementById('storage-cost');
    storageCostText.innerText = value;      // Update the storage cost
    updateTotalCost();      // Update the total price after changing the value
}
// Calculate the delivery cost function
function calculateDeliveryCost(value) {
    const deliveryCostText = document.getElementById('delivery-cost');
    deliveryCostText.innerText = value;     // Update the memory cost
    updateTotalCost();      // Update the total price after changing the value
}
// Calculate promo code
function applyPromoCode() {
    const validPromoCode = 'stevekaku';     // Predefined promo code
    const promoCodeInput = document.getElementById('promo-code-input');
    const promoCode = promoCodeInput.value;
    if (promoCode == validPromoCode) {
        const totalPriceText = document.getElementById('total-price');
        const discountPrice = ((20 / 100) * totalPriceText.innerText).toFixed(2);   // get the 20% discount price of Total Price also get two digits after the dot.
        totalPriceText.innerText = totalPriceText.innerText - discountPrice;
        promoCodeInput.value = '';      // Set the value empty after applying the promo code
    }
    else {
        console.log('Sorry! Invalid promo code applied.');      // Throw a invalid message if the promo code is invalid
    }
}

// DOM firing
document.getElementById('8gb-memory').addEventListener('click', function () {
    calculateMemoryCost(0);
});
document.getElementById('16gb-memory').addEventListener('click', function () {
    calculateMemoryCost(180);
});
document.getElementById('256gb-storage').addEventListener('click', function () {
    calculateStorageCost(0);
});
document.getElementById('512gb-storage').addEventListener('click', function () {
    calculateStorageCost(100);
});
document.getElementById('1tb-storage').addEventListener('click', function () {
    calculateStorageCost(180);
});
document.getElementById('free-delivery-btn').addEventListener('click', function () {
    calculateDeliveryCost(0);
});
document.getElementById('paid-delivery-btn').addEventListener('click', function () {
    calculateDeliveryCost(20);
});
document.getElementById('promo-code-btn').addEventListener('click', function () {
    applyPromoCode();
});
const checkout_bill = document.querySelector('.payment_button');
const paymentCheckout = document.querySelector('.payment_checkout');

checkout_bill.addEventListener('click', () => {
    paymentCheckout.style.display = 'flex';
});

const shopping_checkout = document.querySelector('.checkout_button');

shopping_checkout.addEventListener('click', () => {
    window.location.href = './homepage.html';
});
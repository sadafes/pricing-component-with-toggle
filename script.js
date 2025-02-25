const toggleBtn = document.getElementById('toggleBtn');
const priceElement1 = document.getElementById('price1');
const priceElement2 = document.getElementById('price2');
const priceElement3 = document.getElementById('price3');
toggleBtn.addEventListener('click', function() {
    toggleBtn.classList.toggle('active');
    if (toggleBtn.classList.contains('active')) {

        priceElement1.textContent = '199.99';
        priceElement2.textContent = '299.99';
        priceElement3.textContent = '399.99';

    } else {

        priceElement1.textContent = '19.99';
        priceElement2.textContent = '29.99';
        priceElement3.textContent = '39.99';
    }
});

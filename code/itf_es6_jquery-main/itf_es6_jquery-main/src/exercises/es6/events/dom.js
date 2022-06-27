// Basic DOM manipulation
const green = document.getElementById('green');
const orange = document.getElementById('orange');

const li1 = document.querySelector('main li:first-child');
const li2 = document.querySelector('main li:nth-child(2)');
const li3 = document.querySelector('main li:last-child');
const h1 = document.getElementById("Header1");

li1.addEventListener('click', function (e) {
    h1.textContent = li1;
});



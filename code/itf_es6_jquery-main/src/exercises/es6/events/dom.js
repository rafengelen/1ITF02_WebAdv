// Basic DOM manipulation
const li1 = document.querySelector('main ol li:first-child');
const li2 = document.querySelector('li:nth-child(2)');
const li3 = document.querySelector('li:nth-child(3)');
const button = document.querySelector('li:nth-child(4) button');
const h1 = document.querySelector('main h1');

li1.addEventListener('click', function (e) {
    h1.innerHTML = li1.innerHTML;
});

li2.addEventListener('mouseenter', function (e) {
    li2.classList.add('orange');
});

li2.addEventListener('mouseleave', function (e) {
    li2.classList.remove('orange');
});

li3.addEventListener('dblclick', function (e) {
    h1.classList.toggle('green');
});

button.addEventListener('click', function (e) {
    h1.style.transform = 'rotateX(180deg)';
});

button.addEventListener('dblclick', function (e) {
    h1.style.transform = 'rotateX(0deg)';
});

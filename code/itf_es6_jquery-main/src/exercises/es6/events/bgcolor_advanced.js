// Change background color (advanced)
const colorButtons = document.querySelectorAll('button.primary');
const div = document.querySelector('div.border-gray');
const reset = document.querySelector('button.secondary');

const bgColor = div.style.backgroundColor;

colorButtons.forEach(function (button, index1) {
    button.addEventListener('click', function (e) {
        div.style.backgroundColor = button.innerHTML;
    });
});
reset.addEventListener('click', function (e) {
    div.style.backgroundColor = bgColor;
});

// Change background color (advanced)
const buttons = document.querySelectorAll('main div button.primary');
const gray = document.querySelector('div.border-gray');
const reset = document.querySelector('button.secondary');
const secondary = reset.classList;
console.log(secondary);
buttons.forEach((button, index) => {
    button.addEventListener('click', (e) => {
        gray.style.backgroundColor = button.innerHTML;
    });
    reset.addEventListener('click', (e) => {
        gray.style = secondary[0];
    });
});

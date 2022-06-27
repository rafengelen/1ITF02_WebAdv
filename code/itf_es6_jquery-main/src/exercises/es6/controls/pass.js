// Did I pass?
const result = 9;
const check = document.querySelector('.border-green p i:first-child');
const circle = document.querySelector('.border-green p i:last-child');

console.log('check: ', check);
console.log('circle: ', circle);

if (result >= 10) {
    check.style.display = 'inline';
    circle.style.display = 'none';
} else {
    check.style.display = 'none';
    circle.style.display = 'inline';
}

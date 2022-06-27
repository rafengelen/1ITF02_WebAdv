// Image filter (basic)
const imgs = document.querySelectorAll('main div div img');
console.log('imgs', imgs);

imgs.forEach(function (img, index) {
    img.addEventListener('mouseenter', (e) => {
        img.classList.add('grayscale');
    });
    img.addEventListener('mouseleave', (e) => {
        img.classList.remove('grayscale');
    });
});

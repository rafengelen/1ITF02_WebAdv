// Image filter (basic)
const imgs = document.querySelectorAll('img');
imgs.forEach(function (img, index) {
    img.addEventListener('mouseenter', function (e) {
        img.classList.add('grayscale');
    });
    img.addEventListener('mouseleave', function (e) {
        img.classList.remove('grayscale');
    });
});

// Image filter (advanced)
const imgs = document.querySelectorAll('img');
imgs.forEach(function (img, index1) {
    img.classList.add('sepia');

    img.addEventListener('click', function (e) {
        imgs.forEach(function (img1, index2) {
            if (index1 === index2) {
                img1.classList.remove('sepia');
            } else {
                img1.classList.add('sepia');
            }
        });
    });
});

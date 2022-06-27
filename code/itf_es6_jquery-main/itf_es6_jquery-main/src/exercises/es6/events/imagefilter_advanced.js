// Image filter (advanced)
//
const imgs = document.querySelectorAll('main div div img');
console.log('imgs', imgs);
imgs.forEach(function (img1, index1) {
    img1.classList.add('sepia');

    img1.addEventListener('click', (e) => {
        imgs.forEach(function (img2, index2) {
            img2.classList.add('sepia');
        });
        console.log('event', e);

        console.log('e.target', e.target);

        img1.classList.remove('sepia');
    });
});

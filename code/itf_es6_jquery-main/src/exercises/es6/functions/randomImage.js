// Random image
const h3 = document.querySelector('figure figcaption h3');
const img = document.querySelector('figure img');

function randomMinMax10() {
    const width = Math.floor(Math.random() * (80 - 10 + 1) + 10) * 10;
    const height = Math.floor(Math.random() * (40 - 10 + 1) + 10) * 10;

    console.log('width: ', width);
    console.log('height: ', height);

    const path = 'https://picsum.photos/' + width + '/' + height;
    img.setAttribute('src', path);
    h3.innerHTML = path;

    console.log('path: ', path);
}

window.setInterval(randomMinMax10, 3000);

// Moon and earth movement
let i = 0;
const img = document.getElementById('image');
let value = document.getElementById('delay').value;
console.log('delay: ', value);
let startUp = 0;

function showNextImage() {
    if (i === 23) {
        i = 0;
    } else {
        i++;
    }
    let path;
    if (i < 10) {
        path = '../../../assets/moonEarth/IMG0' + i + '.gif';
    } else {
        path = '../../../assets/moonEarth/IMG' + i + '.gif';
    }
    img.setAttribute('src', path);
}

function watchSlider() {
    if (startUp === 0) {
        gif = window.setInterval(showNextImage, 100);
        startUp++;
    }
    const delay = value;
    value = document.getElementById('delay').value;
    if (delay !== value) {
        clearInterval(gif);
        gif = window.setInterval(showNextImage, value);
    }
}

window.setInterval(watchSlider, 3);

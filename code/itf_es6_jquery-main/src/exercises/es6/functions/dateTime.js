// Date - time
const h0 = document.getElementById('h0');
const h1 = document.getElementById('h1');
const m0 = document.getElementById('m0');
const m1 = document.getElementById('m1');
const s0 = document.getElementById('s0');
const s1 = document.getElementById('h1');

const text = document.querySelector('h2');

const numbersPath = '../../../assets/display/number';

const img = document.querySelector('#result div img');
const imgPath = '../../../assets/dateTime/';

function timing() {
    const date = new Date();
    const value = parseInt(document.querySelector('input').value, 10);

    let hours = date.getHours();

    if (hours + value >= 24) {
        hours += value - 24;
    } else {
        hours += value;
    }

    console.log(`real time: ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
    console.log(`time: ${hours}:${date.getMinutes()}:${date.getSeconds()}`);
    console.log(hours);

    /* switch (hours) {
        case hours < 6:
            text.innerHTML = 'Good night';
            img.setAttribute('src', `${imgPath}night.png`);
            break;
        case hours < 10:
            text.innerHTML = 'Good morning';
            img.setAttribute('src', `${imgPath}morning.png`);
            break;
        case hours < 21:
            text.innerHTML = 'Good day';
            img.setAttribute('src', `${imgPath}day.png`);
            break;
        default:
            text.innerHTML = 'Good night';
            img.setAttribute('src', `${imgPath}night.png`);
    }*/
    if (hours < 6 || hours > 21) {
        text.innerHTML = 'Good night';
        img.setAttribute('src', `${imgPath}night.png`);
    } else if (hours < 10) {
        text.innerHTML = 'Good morning';
        img.setAttribute('src', `${imgPath}morning.png`);
    } else {
        text.innerHTML = 'Good day';
        img.setAttribute('src', `${imgPath}day.png`);
    }

    if (date.getSeconds() < 10) {
        s0.setAttribute('src', `${numbersPath}0.svg`);
        s1.setAttribute('src', `${numbersPath}${String(date.getSeconds())[0]}.svg`);
    } else {
        s0.setAttribute('src', `${numbersPath}${String(date.getSeconds())[0]}.svg`);
        s1.setAttribute('src', `${numbersPath}${String(date.getSeconds())[1]}.svg`);
    }
    if (date.getMinutes() < 10) {
        m0.setAttribute('src', `${numbersPath}0.svg`);
        m1.setAttribute('src', `${numbersPath}${String(date.getMinutes())[0]}.svg`);
    } else {
        m0.setAttribute('src', `${numbersPath}${String(date.getMinutes())[0]}.svg`);
        m1.setAttribute('src', `${numbersPath}${String(date.getMinutes())[1]}.svg`);
    }
    if (hours < 10) {
        h0.setAttribute('src', `${numbersPath}0.svg`);
        h1.setAttribute('src', `${numbersPath}${String(hours)[0]}.svg`);
    } else {
        h0.setAttribute('src', `${numbersPath}${String(hours)[0]}.svg`);
        h1.setAttribute('src', `${numbersPath}${String(hours)[1]}.svg`);
    }
}

window.setInterval(timing, 1000);

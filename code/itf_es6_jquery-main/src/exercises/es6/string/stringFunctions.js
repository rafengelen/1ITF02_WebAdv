// String functions
const word = 'ihznduq hmpibnughpimhg yfawozhbduqzg dlwbubkbauk';
const square1 = document.querySelector('.block:nth-child(1)');
const square2 = document.querySelector('.block:nth-child(2)');
const square3 = document.querySelector('.block:nth-child(3)');
const square4 = document.querySelector('.block:nth-child(4)');
const square5 = document.querySelector('.block:nth-child(5)');

console.log('square 1: ', square1);
console.log('square 2: ', square2);
console.log('square 3: ', square3);
console.log('square 4: ', square4);
console.log('square 5: ', square5);

const w1PositionW = word.indexOf('w');
square1.innerHTML = word.charAt(w1PositionW + 1);

const w2PositionW = word.lastIndexOf('w');
square2.innerHTML = w2PositionW;

square3.innerHTML = word.includes('x');

square4.innerHTML = word.length;

square5.innerHTML = word.replace(/\s+/g, '').length;

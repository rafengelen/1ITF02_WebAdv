// Centimeters to Feet
let centimeters = 60;
let factor = 0.0328084;
let feet = Math.round(centimeters * factor * 100) / 100;

const span = document.getElementById('feet');
span.innerHTML = feet;

//  Sales
const billSpan = document.getElementById('bill');
const trousers = 85;
const sweater = 62;
const coat = 120;
const shirt = 25;
const shoes = 105;
const discount = 70;

const bill = Math.round(((trousers + sweater + coat + shirt + shoes) * 70) / 100);
billSpan.innerHTML = bill;

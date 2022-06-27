// Reaction Game
const divs = document.querySelectorAll('.blocks div');
let previousNumber;
let score = 0;

divs.forEach(function (block, index) {
    block.addEventListener('click', function (e) {
        if (block.classList.contains('red')) {
            block.classList.remove('red');
            block.classList.add('green');
            score++;
            block.innerHTML = score;
        }
    });
});

function reaction() {
    let number = Math.floor(Math.random() * 3 + 1);
    //console.log('number: ', number);
    do {
        number = Math.floor(Math.random() * 3 + 1);
    } while (number === previousNumber);
    console.log('previous number: ', previousNumber);
    console.log('number: ', number);
    previousNumber = number;

    divs.forEach(function (block, index) {
        if (index + 1 === number) {
            block.classList.add('red');
        } else {
            block.classList.remove('red');
            block.classList.remove('green');
            block.innerHTML = '';
        }
    });
    if (score === 5) {
        window.clearInterval(game);
        divs.forEach(function (block, index) {
            block.classList.remove('red');
            block.classList.add('green');
            block.innerHTML = 'win';
        });
    }
}
const game = window.setInterval(reaction, 750);

// Hangman
const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const words = ['EEEEE'];

const buttonDiv = document.getElementById('buttonDiv');
const playDiv = document.getElementById('playDiv');

for (let i = 0; i < 26; i++) {
    const button = document.createElement('button');
    button.innerHTML = alphabet.charAt(i);
    button.classList.add('tertiary');

    button.addEventListener('click', function (e) {
        button.disabled = true;
    });

    buttonDiv.append(button);
}
const index = Math.floor(Math.random() * words.length);
console.log(`ìndex: ${index}`);
let word = words[index];

const span = document.createElement('span');
for (let i = 0; i < word.length; i++) {
    span.innerHTML += '_ ';
    span.style.borderBottomColor = 'black';
    span.style.borderBottomWidth = '3px';
    span.style.width = '400px';
    playDiv.append(span);
}
console.log(word);
console.log(span.innerHTML);

function checkletter(letter) {
    let temp;

    do {
        const position = word.indexOf(letter);
        temp.concat(word.substring(0, position), '_', word.substring(position));
        span.innerHTML = span.innerHTML.substring(0, position * 2) + letter + span.innerHTML.substring(position * 2 + 1);
        console.log(span.innerHTML);
    } while (word.includes(letter));
}

checkletter('E');

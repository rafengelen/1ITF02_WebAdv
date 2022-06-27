// Fibonacci
let first = 0;
let second = 1;
let firstLi = document.createElement('li');
let secondLi = document.createElement('li');
firstLi.innerHTML = first;
secondLi.innerHTML = second;
const ul = document.querySelector('.border-green ul');
ul.append(firstLi);
ul.append(secondLi);

for (i = 1; i < 49; i++) {
    const next = first + second;
    const nextLi = document.createElement('li');
    nextLi.innerHTML = next;
    ul.append(nextLi);
    first = second;
    second = next;
}

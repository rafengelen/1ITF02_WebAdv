// Even or odd?
const even = document.querySelector('#numbers .border-green ul');
const odd = document.querySelector('#numbers .border-red ul');
const prime = document.querySelector('#numbers .border-blue ul');
let primeNumbers = [2];

for (let i = 1; i <= 100; i++) {
    let number = document.createElement('li');
    number.innerHTML = i;
    console.log('number: ', i);
    console.log('array: ', primeNumbers);
    if (i % 2 === 0) {
        even.append(number);
    } else {
        odd.append(number);
    }

    if (i !== 1) {
        let amountDelers = 0;
        primeNumbers.forEach(function (primeNumber, index1) {
            if (i % primeNumber === 0) {
                amountDelers++;
            }
        });
        if (amountDelers === 0) {
            primeNumbers.push(i);
            prime.append(number);
        }

        if (i === 2) {
            prime.append(number);
        }
    }
}

//  Calculator
const buttons = document.querySelectorAll('#buttons button');
const resultP = document.getElementById('result');

buttons.forEach(function (button, index1) {
    button.addEventListener('click', function (e) {
        let result = +document.getElementById('number1').value;
        const number2 = +document.getElementById('number2').value;

        console.log('number 1: ', result);
        console.log('number 2: ', number2);

        if (button.innerHTML === 'Add') {
            result += number2;
        }
        if (button.innerHTML === 'Subtract') {
            result -= number2;
        }
        if (button.innerHTML === 'Multiply') {
            result *= number2;
        }
        if (button.innerHTML === 'Divide') {
            result /= number2;
        }
        resultP.innerHTML = result;
    });
});

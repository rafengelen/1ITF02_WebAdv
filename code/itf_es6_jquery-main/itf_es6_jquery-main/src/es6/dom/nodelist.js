//let buttongroup = document.getElementById("buttongroup");
//buttongroup.remove();
//let buttongroup2 = document.querySelector("#buttongroup");
//bovenstaande let buttongroups doen hetzelfde maar getelemntbyid is sneller

// select all buttons inside #buttongroup
const buttons = document.querySelectorAll('#buttongroup button');
console.log('buttons', buttons);

// loop over the buttons inside the NodeList
buttons.forEach(function (button, index) {
    // log information about every button
    //console.log('button', index, button);
    button.innerHTML = button.innerHTML + 'test';
});



let arr =['Jeff', 'Piet', 'Anna'];

for (let j = 0; j < arr.length; j++) {
    console.log(arr[j]);
}

// Change background color (basic)
const buttons = document.querySelectorAll('main div button');
buttons.forEach(function(button, index) {
    button.addEventListener('click', function(e){
        document.body.style.backgroundColor = button.innerHTML;
    });
});

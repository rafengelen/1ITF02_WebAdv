// Change background color (basic)
const colorButtons = document.querySelectorAll('button.primary');
const div = colorButtons.forEach(function (button, index1) {
    button.addEventListener('click', function (e) {
        document.body.style.backgroundColor = button.innerHTML;
    });
});

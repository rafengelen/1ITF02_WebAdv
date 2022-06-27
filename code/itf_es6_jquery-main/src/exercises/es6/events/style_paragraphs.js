// Style the paragraphs
const fonts = document.querySelectorAll('#font option');
const radioButtons = document.querySelectorAll('fieldset.item input');
const fontsizes = document.querySelectorAll('fieldset.item label');
const checkboxBold = document.querySelector('div.item p:nth-child(1) input');
const checkboxItalic = document.querySelector('div.item p:nth-child(2) input');
const darkModeButton = document.querySelector('div.item button');
const arial = document.querySelector('#font option:first-child');
const paragraphs = document.querySelectorAll('#paragraphs');

paragraphs.forEach(function (p, index1) {
    console.log(p);
    fonts.forEach(function (font, index2) {
        console.log(font);
        font.addEventListener('click', function (e) {
            p.style.fontFamily = font.getAttribute('value');
        });
    });
    radioButtons.forEach(function (radioButton, index3) {
        fontsizes.forEach(function (label, index4) {
            radioButton.addEventListener('click', function (e) {
                console.log('fontsize', label.innerHTML.substr(-5, 4));
                if (index3 === index4) {
                    p.style.fontSize = label.innerHTML.substr(-5, 4);
                }
            });
        });
    });
    checkboxBold.addEventListener('click', function (e) {
        console.log('fontweight: ', p.style.fontWeight);
        if (p.style.fontWeight === 'bold') {
            p.style.fontWeight = 'normal';
        } else {
            p.style.fontWeight = 'bold';
        }
    });
    checkboxItalic.addEventListener('click', function (e) {
        console.log('fontStyle: ', p.style.fontStyle);
        if (p.style.fontStyle === 'italic') {
            p.style.fontStyle = 'normal';
        } else {
            p.style.fontStyle = 'italic';
        }
    });
    darkModeButton.addEventListener('click', function (e) {
        if (darkModeButton.innerHTML === 'Dark theme') {
            darkModeButton.innerHTML = 'Light theme';
            p.style.backgroundColor = '#111';
            p.style.color = '#f8f8f8';
        } else {
            darkModeButton.innerHTML = 'Dark theme';
            p.style.backgroundColor = '#f8f8f8';
            p.style.color = '#111';
        }
    });
});
arial.dispatchEvent(new Event('click'));

// Slideshow
const slides = document.querySelectorAll('#album');
//let imagePositions = [];
//slides.forEach(function (slide, index1) {
//    imagePositions.push({ position: index1, image: slide });
//});
//console.table(imagePositions);
let i = 0;
function slideshow() {
    //console.log(slides);
    console.log(slides[i]);
    //const first = slides[0];
    const first = document.createElement('li');
    first.innerHTML = slides[i].innerHTML;
    //slides.remove();
    slides.append(first);
    i++;
}
window.setInterval(slideshow, 3000);

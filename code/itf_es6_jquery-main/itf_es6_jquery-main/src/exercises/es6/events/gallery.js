// Image gallery
const div = document.getElementById('thumbnails');
const thumbnails = div.querySelectorAll('img');
const bigPicture = document.getElementById('fullImage');
thumbnails.forEach((img, index) => {
    img.addEventListener('click', (e) => {
        img.classList.add('border');
        const data = img.getAttribute('data-id');
        console.log(data);
        data.toString();
        //const link = 'https://picsum.photos/id/' + data + ' ';
        link.concat(data, '/50/50');
        bigPicture.setAttribute('data-id', data);
        bigPicture.setAttribute('src', link);
    });
});

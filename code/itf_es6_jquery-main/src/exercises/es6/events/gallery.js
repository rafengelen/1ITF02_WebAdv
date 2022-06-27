// Image gallery
const thumbnails = document.querySelectorAll('#thumbnails img');
const img = document.getElementById('fullImage');

thumbnails.forEach(function (thumbnail, index1) {
    thumbnail.addEventListener('click', function (e) {
        dataId = thumbnail.getAttribute('data-id');
        console.log(dataId);
        thumbnails.forEach(function (otherThumbnail, index2) {
            if (index1 === index2) {
                thumbnail.classList.add('border');
            } else {
                otherThumbnail.classList.remove('border');
            }
        });
        let url = 'https://picsum.photos/id/';
        url += dataId;
        url += '/600/400';
        console.log('url before: ', img.getAttribute('src'));
        img.setAttribute('src', url);
        console.log('url after: ', img.getAttribute('src'));
    });
});

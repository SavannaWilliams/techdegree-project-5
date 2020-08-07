// Custom search code

let images = document.getElementsByTagName('a');
let gallerySize = images.length;
const input = document.getElementById('search');

function search() {
    let searchText = input.value.toLowerCase();

    for(i = 0; i < gallerySize; i++){
        console.log(images[i].getAttribute('data-caption'));
    }

}


// .querySelectorAll('[data-caption]')

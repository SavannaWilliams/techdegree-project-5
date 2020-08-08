// Custom search code

let images = document.getElementsByTagName('a');
let gallerySize = images.length;
const input = document.getElementById('search');

function search() {
    let searchText = input.value.toLowerCase();

    for(let i = 0; i < gallerySize; i++){
        let currentCaption = images[i].getAttribute('data-caption').toLowerCase();

        if (currentCaption.indexOf(searchText) > -1) {
            images[i].style.display = '' ;
        } else {
            images[i].style.display = 'none';
        }
    }
}


// Custom search code

// Get all images in a links
let images = document.getElementsByTagName('a');
let gallerySize = images.length;

// Get the search input field
const input = document.getElementById('search');

function search() {
    // Take user's input search and convert to lowercase
    let searchText = input.value.toLowerCase();

    // Loop through all the images
    for(let i = 0; i < gallerySize; i++){
        // Pull caption text of currently selected image and convert to lowercase
        let currentCaption = images[i].getAttribute('data-caption').toLowerCase();

        // If current image's caption includes search text, leave display style alone
        if (currentCaption.indexOf(searchText) > -1) {
            images[i].style.display = '' ;
        } else {
            // If current image's caption does not include the search text, hide it
            images[i].style.display = 'none';
        }
    }
}


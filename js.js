$(document).ready(function () {
const apiKey = 'AIzaSyBwrvz8kiruEtxmSvkbTTUyZsEVxIP1CZU';

function searchPlaces(query) {
    window.open(`https://www.google.com/maps/search/${query}`, '_blank');
}
document.getElementById('NEW YORK').addEventListener('click', () => {
    searchPlaces('NEW YORK');
});

document.getElementById('EGYPT').addEventListener('click', () => {
    searchPlaces('EGYPT');
});

function searchPlace() {
    const placeName = document.getElementById('place-input').value;
    if (placeName.trim() === '') {
        alert('Please enter a place name');
        return;
    }
    window.open(`https://www.google.com/maps/search/${placeName}`, '_blank');
}

document.getElementById('search-button').addEventListener('click', searchPlace);


});

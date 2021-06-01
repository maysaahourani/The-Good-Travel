'use strict';
let formPlaces = document.getElementById("addNewPlaceForm");
let tablePlaces = document.getElementById("addNewPlaceTable");

Place.allPlace = [];

function Place(placeName, tripPlace, typeOfTransport) {
    this.placeName = placeName;
    this.tripPlace = tripPlace;
    this.typeOfTransport = typeOfTransport;
    this.image = `./Places/${this.tripPlace}.png`;
    this.image = `./Places/${this.tripPlace}.jpg`;

    Place.allPlace.push(this);
}
Place.prototype.render = function () {
    const tr1 = document.createElement('tr');

    const tdPic = document.createElement('td');
    tdPic.setAttribute('src', this.image);

    const tdinfo = document.createElement('td');
    tdinfo.textContent = ` Place Name : ${this.placeName}  \n Trip Place : ${this.tripPlace} \n Type Of Transport : ${this.typeOfTransport}`;

    tablePlaces.appendChild(tr1);

    tr1.appendChild(tdPic);
    tr1.appendChild(tdinfo);
};

formPlaces.addEventListener('submit', function (event) {

    event.preventDefault();
    let placeName = event.target.placeName.value;
    let tripPlace = event.target.tripPlace.value;
    let typeOfTransport = event.target.typeOfTransport.value;

    alert('submitted');
    console.log(`${placeName} ${tripPlace} ${typeOfTransport}`);

    let place = new Place(placeName, tripPlace, typeOfTransport);
    formPlaces.requestFullscreen();
    console.log(Place.allPlace);
    place.render();
    localStorage.setItem('placeKey', JSON.stringify(Place.allPlace));

});

function checkLs() {
    if (localStorage.getItem('placeKey')) {

        Place.allPlace = JSON.parse(localStorage.getItem('placeKey'));
        renderarr();
    }
}

function renderarr() {

    for (let i = 0; i < Place.allPlace.length; i++) {
        const tr1 = document.createElement('tr');

    const tdPic = document.createElement('td');
    tdPic.setAttribute('src', Place.allPlace.image);

    const tdinfo = document.createElement('td');
    tdinfo.textContent = ` Place Name : ${Place.allPlace.placeName}  \n Trip Place : ${Place.allPlace.tripPlace} \n Type Of Transport : ${Place.allPlace.typeOfTransport}`;

    tablePlaces.appendChild(tr1);

    tr1.appendChild(tdPic);
    tr1.appendChild(tdinfo);

    }

}


checkLs();

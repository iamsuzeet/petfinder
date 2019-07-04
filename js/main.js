import fetchJsonp from 'fetch-jsonp';

const petForm = document.querySelector('#pet-form');

petForm.addEventListener('submit', fetAnimals);


// Fetch Animals From API
function fetAnimals(e) {
  e.preventDefault();

  //get User Input
  const animal = document.querySelector('#animal').value;
  const zip = document.querySelector('#zip').value;

  //fetch Pets
  fetchJsonp(`https://cors-anywhere.herokuapp.com/http://api.petfinder.com/pet.find?format=json&key=THbSXUX6KusmUCJDktKTGizRFacv4mDPxbUOCrrGkUO2Bu1SXa&animal=${animal}&location=${zip}&callback=callback`, {
    jsonpCallbackFunction: 'callback'
  })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err));
}

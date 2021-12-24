//selectors
const petName = document.getElementById('petName');
const breedList = document.getElementById('breedList');
const petForm = document.getElementById('petForm');
const petGreet = document.getElementById('petGreet');
const petImage = document.getElementById('petImage');

fetch('https://dog.ceo/api/breeds/list/all')
    .then(res => res.json())
    .then(data => {
        for(let x in data.message) {
            breedList.innerHTML += "<option value =" + x + ">" + x + "</option>";
        }
    });

    
const getImage = (e) => {
    e.preventDefault();
        
    fetch('https://dog.ceo/api/breed/'+ breedList.value +'/images/random')
        .then(res => res.json())
        .then(data => {
            petGreet.innerHTML = `Hi, I am ${petName.value}`;
            petImage.src = data.message;
        })
}

petForm.addEventListener('submit' , getImage)
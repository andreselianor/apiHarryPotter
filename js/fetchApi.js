let urlCharacters = "https://hp-api.onrender.com/api/characters";
let urlStudents = "https://hp-api.onrender.com/api/characters/students";
let urlStaff = "https://hp-api.onrender.com/api/characters/staff";
const harrySection = document.getElementById('cards-container');

function createHarryCard({ image, name, alternate_names, gender, yearOfBirth, wand, house }) {
    let validateKeys;
    {
        if (alternate_names == "")
            alternate_names = ["sin alias"];
        if (yearOfBirth == "")
            yearOfBirth = "sin datos";
        if (wand.wood == "")
            wand.wood = "sin datos";
        if (gender == "male")
            gender = "hombre";
        if (gender == "female")
            gender = "mujer";
        if (house == "Gryffindor")
            house = "🦁";
        if (house == "Slytherin")
            house = "🐍";
        if (house == "Hufflepuff")
            house = "🦡";
        if (house == "Ravenclaw")
            house = "🦅";
    }
    return `
        <div id="card">
            <div class="houseCard">${house}</div>
            <img src="${image}" title="${name}" alt="portrait picture" class="imagesCard">
            <p class="nameCard">${name}</p>
            <p class="aliasCard"><i>alias:</i> ${alternate_names[0]}</p>
            <p class="genderCard"><i>género:</i> ${gender}</p>
            <p class="yearCard"><i>nacimiento:</i> ${yearOfBirth}</p>
            <p class="wandCard"><i>wand:</i> ${wand.wood}</p>
        </div>
        `;
}

displayHarry(urlCharacters);

async function displayHarry(URL) {
    const harryData = await fetchHarryJson(URL);
    const harryCharacters = dismissNullImages(harryData);
    if (harryData) {
        const harryCards = harryCharacters.map(createHarryCard).join('');
        harrySection.innerHTML = harryCards;
    } else {
        harrySection.innerHTML = '<p>No se pudieron cargar los datos de la website Harry Potter API.</p>';
    }
}

async function fetchHarryJson(URL) {
    try {
        const response = await fetch(URL);
        if (!response.ok) {
            throw new Error(`Error de la solicitud: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error('Error al obtener el archivo JSON:', error);
        return null;
    }
}

function dismissNullImages(json) {
    let arrayAvailableImages = [];
    let counter = 0;
    for (let element of json) {
        if (element.image != "") {
            arrayAvailableImages.push(counter);
        }
        counter++;
    }
    return arrayAvailableImages.map(i => json[i]).filter(Boolean);
}

window.onload = buttonsEvent;

function buttonsEvent() {
    document.getElementById("buttonAll").addEventListener('click', function () {
        displayHarry(urlCharacters);
    });
    document.getElementById("buttonStudents").addEventListener('click', function () {
        displayHarry(urlStudents);
    });
    document.getElementById("buttonStaff").addEventListener('click', function () {
        displayHarry(urlStaff);
    });
}

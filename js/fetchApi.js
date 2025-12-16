let requestURL = "https://hp-api.onrender.com/api/characters"
const harrySection = document.getElementById('harrySection');
let cardsNumber = 30;

// Crea las tarjetas
function createHarryCard({ image }) {
    return `
        <div class="card">
            <img src="${image}" class="imagesCard">
        </div>
        `;
}

// Llama a la API
async function fetchHarryJson() {
    try {
        const response = await fetch(requestURL);
        if (!response.ok) {
            throw new Error(`Error de la solucitud: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error('Error al obtener el archivo JSON:', error);
        return null;
    }
}

// Muestra las tarjetas
async function displayHarry(count) {
    const harryData = await fetchHarryJson();
    const harryCharacters = harryData.slice(0, count);
    if (harryData) {
        const harryCards = harryCharacters.map(createHarryCard).join('');;
        harrySection.innerHTML = harryCards;
    } else {
        harrySection.innerHTML = '<p>No se pudieron cargar los datos de la website Harry Potter API.</p>';
    }
}

// Llama a la funcion que muestra las tarjetas
displayHarry(cardsNumber);
//Mettre le code JavaScript lié à la page photographer.html

async function getPhotographerById(id) {
    const data = await getPhotographers();
    const photographersDetails = data.photographers;
    console.log(photographersDetails);
    return photographersDetails.find((photographer) => photographer.id === id);
}

async function displayPhotographerDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const photographerId = urlParams.get("id");
    const toNumberId = Number(photographerId);

    if (photographerId) {
        const photographer = await getPhotographerById(toNumberId);
        console.log(photographer);
        if (photographer) {
            const photographHeader = document.querySelector(".photograph-header");

            photographHeader.innerHTML = `
            <div class="photograph-header-informations">
                <h1 class="photograph-name">${photographer.name}</h1>
                <address class="photograph-location">
                    <p class="photograph-city">${photographer.city},</p>
                    <p class="photograph-country">${photographer.country}</p>
                </address>
                <p class="photograph-description">${photographer.tagline}</p>
            </div>
            <button class="contact_button" onclick="displayModal()">Contactez-moi</button>
            <img class="photograph-img" src="./assets/photographers/${photographer.portrait}" alt=${photographer.name}></img>
        `;
        }
    }
}

displayPhotographerDetails();

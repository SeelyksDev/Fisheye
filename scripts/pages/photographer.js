//Mettre le code JavaScript lié à la page photographer.html

async function getPhotographerById(id) {
    const data = await getPhotographers();
    const dataDetails = data.photographers;
    const dataMedias = data.media;

    const photographerDetails = dataDetails.find((photographer) => photographer.id === id);
    const photographerMedia = dataMedias.filter((media) => media.photographerId === id);
    
    return {photographerDetails, photographerMedia}
}


async function displayPhotographerDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const photographerId = urlParams.get("id");
    const toNumberId = Number(photographerId);

    if (photographerId) {
        const { photographerDetails, photographerMedia } = await getPhotographerById(toNumberId);
        console.log(photographerDetails);
        console.log(photographerMedia);
        
        if (photographerDetails) {
            const photographHeader = document.querySelector(".photograph-header");

            photographHeader.innerHTML = `
            <div class="photograph-header-informations">
                <h1 class="photograph-name">${photographerDetails.name}</h1>
                <address class="photograph-location">
                    <p class="photograph-city">${photographerDetails.city},</p>
                    <p class="photograph-country">${photographerDetails.country}</p>
                </address>
                <p class="photograph-description">${photographerDetails.tagline}</p>
            </div>
            <button class="contact_button" onclick="displayModal()">Contactez-moi</button>
            <img class="photograph-img" src="./assets/photographers/${photographerDetails.portrait}" alt=${photographerDetails.name}></img>
        `;

        const pricePerDay = document.querySelector('.price-per-day');
        pricePerDay.innerHTML = `<p class="price">${photographerDetails.price}€ / jour</p>`

        }
    }
}

displayPhotographerDetails();

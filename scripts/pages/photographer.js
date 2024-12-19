//Mettre le code JavaScript lié à la page photographer.html

async function getPhotographerById(id) {
    const data = await getPhotographers();
    const dataDetails = data.photographers;
    const dataMedias = data.media;
    console.log(dataDetails);

    const photographerDetails = dataDetails.find(
        (photographer) => photographer.id === id
    );
    const photographerMedia = dataMedias.filter(
        (media) => media.photographerId === id
    );

    return { photographerDetails, photographerMedia };
}

async function displayPhotographerDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const photographerId = urlParams.get("id");
    const toNumberId = Number(photographerId);

    if (photographerId) {
        const { photographerDetails } = await getPhotographerById(toNumberId);

        if (photographerDetails) {
            const photographHeader =
                document.querySelector(".photograph-header");

            photographHeader.innerHTML = `
            <div class="photograph-header-informations">
                <h1 class="photograph-name">${photographerDetails.name}</h1>
                <address class="photograph-location">
                    <p class="photograph-city">${photographerDetails.city},</p>
                    <p class="photograph-country">${
                        photographerDetails.country
                    }</p>
                </address>
                <p class="photograph-description">${
                    photographerDetails.tagline
                }</p>
            </div>
            <button class="contact_button" onclick="displayModal()">Contactez-moi</button>
            <img class="photograph-img" src="./assets/photographers/${
                photographerDetails.portrait
                    ? photographerDetails.portrait
                    : account.png
            }" alt=${photographerDetails.name}></img>
        `;

            const pricePerDay = document.querySelector(".price-per-day");
            pricePerDay.innerHTML = `<p class="price">${photographerDetails.price}€ / jour</p>`;
        }
    }
}

async function displayGalleryWorks() {
    const urlParams = new URLSearchParams(window.location.search);
    const photographerId = urlParams.get("id");
    const toNumberId = Number(photographerId);

    if (photographerId) {
        const { photographerMedia, photographerDetails } =
            await getPhotographerById(toNumberId);
        console.log(photographerMedia);
        console.log(photographerDetails);

        if (photographerMedia) {
            const workGallery = document.querySelector(".work-gallery");
            photographerMedia.map(
                (media) =>
                    (workGallery.innerHTML += `
                <article class="work-card">
                 ${
                     media.image
                         ? `<img src="./assets/images/${photographerDetails.name}/${media.image}" alt="${media.title}" class="card-media">`
                         : ""
                 }
                 ${media.video ? `<video controls class="card-media">>
                    <source src="./assets/images/${photographerDetails.name}/${media.video}" type="video/mp4"/>
                    </video>` : ""}
                    <div class="card-description">
                        <p class="card-title">${media.title}</p>
                        <div class="card-likes-stats">
                            <p class="number-likes">${media.likes}</p>
                            <img src="./assets/icons/red-heart.svg" alt="image d'un coeur rouge" class="card-heart">
                        </div>
                    </div>
                </article>
                `)
            );
        }
    }
}

displayPhotographerDetails();
displayGalleryWorks();

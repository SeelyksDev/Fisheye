//Mettre le code JavaScript lié à la page photographer.html

async function getPhotographerById(id) {
    const data = await getPhotographers();
    const dataDetails = data.photographers;
    const dataMedias = data.media;

    const photographerDetails = dataDetails.find(
        (photographer) => photographer.id === id
    );
    const photographerMedia = dataMedias.filter(
        (media) => media.photographerId === id
    );

    return { photographerDetails, photographerMedia };
}

async function displayPhotographerDetails(id) {
    if (id) {
        const { photographerDetails } = await getPhotographerById(id);

        if (photographerDetails) {
            const photographer = photographerTemplate(photographerDetails);
            return photographer.getDetailsDOM();
        }
    }
}

async function displayGalleryWorks(id) {
    if (id) {
        const { photographerMedia, photographerDetails } =
            await getPhotographerById(id);

        if (photographerMedia && photographerDetails) {
            const sortedMedia = photographerMedia.sort((a, b) => b.likes - a.likes);
            
            sortedMedia.forEach((photographMedia) => {
                const galleryModel = galleryTemplate(photographMedia, photographerDetails);
                galleryModel.getGalleryDOM();
            });
        }
    }
}

function initPhotographerDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const photographerId = urlParams.get("id");
    const toNumberId = Number(photographerId);

    if (toNumberId) {
        displayPhotographerDetails(toNumberId);
        displayGalleryWorks(toNumberId);
    }
}

initPhotographerDetails();

let numberOfLikes = 0;

function galleryTemplate(media, details) {

    function getGalleryDOM() {
        numberOfLikes += Number(media.likes);
        const likesCounter = document.querySelector('.likes-stats');
        const workGallery = document.querySelector(".work-gallery");
        workGallery.innerHTML += `
                <article class="work-card">
                 ${
                     media.image
                         ? `<img src="./assets/images/${details.name}/${media.image}" alt="${media.title}" class="card-media">`
                         : ""
                 }
                 ${
                     media.video
                         ? `<video class="card-media">>
                    <source src="./assets/images/${details.name}/${media.video}" type="video/mp4"/>
                    </video>`
                         : ""
                 }
                    <div class="card-description">
                        <p class="card-title">${media.title}</p>
                        <div class="card-likes-stats">
                            <p class="number-likes">${media.likes}</p>
                            <img src="./assets/icons/red-heart.svg" alt="image d'un coeur rouge" class="card-heart">
                        </div>
                    </div>
                </article>
                `;
                likesCounter.textContent = numberOfLikes;
    }
    return { getGalleryDOM };
}
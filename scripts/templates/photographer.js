function photographerTemplate(data) {
    const { name, city, country, tagline, price, portrait } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement('article');
        article.innerHTML = `
            <a href='#' target="_blank">
                <img src=${picture}></img>
                <h2>${name}</h2>
                <p class="overview-location">${city}, ${country}</p>
                <p class="overview-description">${tagline}</p>
                <p class="overview-price">${price}€/jour</p>
            </a>
        `;
        return article;
    }
    return { name, picture, getUserCardDOM };
}

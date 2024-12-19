function photographerTemplate(data) {
    const { name, id, city, country, tagline, price, portrait } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement("article");
        article.innerHTML = `
            <a href="../../photographer.html?id=${id}" target="_blank">
                <img src=${picture ? picture : "account.png"} alt="Portrait de ${name}"></img>
                <h2>${name}</h2>
                <p class="overview-location">${city}, ${country}</p>
                <p class="overview-description">${tagline}</p>
                <p class="overview-price">${price}€/jour</p>
            </a>
        `;
        return article;
    }
    return { getUserCardDOM };
}

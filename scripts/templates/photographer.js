function photographerTemplate(data) {
    const { name, city, country, tagline, price, portrait } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
        const div = document.createElement('div');
        div.innerHTML = `<p>${city}, ${country}</p>`
        const description = document.createElement('p');
        description.textContent = tagline;
        const priceDay = document.createElement('p');
        priceDay.textContent = `${price}€/jour`;
        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(div);
        article.appendChild(description);
        article.appendChild(priceDay);
        return (article);
    }
    return { name, picture, getUserCardDOM }
}
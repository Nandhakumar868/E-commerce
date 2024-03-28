const dealsData = [
    {
        imageUrl : './images/deals/instax_mini.png',
        name : 'Instax Mini',
        price : 99,
        description : '5 colors available',
        reviews : 121,
    }
]

const todayDealsElement = document.querySelector('.today_deals');

function createDealElement(dealData){
    const dealsElement = document.createElement('div');
    dealsElement.classList.add('deals');

    const dealsImage = document.createElement('div');
    dealsImage.classList.add('deals_image');
    const image = document.createElement('img');
    image.src = dealData.imageUrl;
    image.alt = dealData.name;
    dealsImage.appendChild(image);

    const namePrice = document.createElement('div');
    namePrice.classList.add('name_price');
    const name = document.createElement('h3');
    name.textContent = dealData.name;
    const price = document.createElement('p');
    price.innerHTML = `<sup>$</sup>${dealData.price}<sup>.00</sup>`;
    namePrice.appendChild(name);
    namePrice.appendChild(price);

    const description = document.createElement('p');
    description.textContent = dealData.description;

    const favorites = document.createElement('span');
    favorites.classList.add('material-symbols-outlined');
    favorites.textContent = 'favorite';

    // const ratings = document.createElement('div');
    // ratings.classList.add('ratings');
    // for (let i=0; i<5; i++){
    //     const star = document.createElement('span');
    //     star.classList.add('material-symbols-outlined');
    //     star.textContent = 'star';
    //     ratings.appendChild(star);
    // }

    // const reviews = document.createElement('p');
    // reviews.textContent = `(${dealData.reviews})`;
    // ratings.appendChild(reviews);

    const addToCartButton = document.createElement('button');
    addToCartButton.textContent = 'Add to cart';

    dealsElement.appendChild(dealsImage);
    dealsElement.appendChild(namePrice);
    dealsElement.appendChild(description);
    dealsElement.appendChild(favorites);
    dealsElement.appendChild();
    dealsElement.appendChild(reviews);
    dealsElement.appendChild(addToCartButton);

    return dealsElement;
}

const newDealsElement = dealsData.map(createDealElement);

todayDealsElement.append(...newDealsElement);
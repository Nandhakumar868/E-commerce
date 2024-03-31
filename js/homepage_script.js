const dealsData = [
    {
        imageUrl: './images/HomePage/Today_deals/homepod_mini.png',
        title: 'Homepod mini',
        price: 99,
        detail: '5 colors available',
        reviews: 121,
    },
    {
        imageUrl: './images/HomePage/Today_deals/instax_mini.png',
        title: 'Instax mini 9',
        price: 99,
        detail: 'Selfie mode and selfie mirror, Macro mode',
        reviews: 121,
    },
    {
        imageUrl: './images/HomePage/Today_deals/base_camp_duffel.png',
        title: 'Base Camp Duffel M',
        price: 159,
        detail: 'Color - Summit Fold Swirl - TNF Black',
        reviews: 121,
    },
    {
        imageUrl: './images/HomePage/Today_deals/tot_medium.png',
        title: 'Tote e Medium',
        price: 1259,
        detail: 'Canvas, full grain leather',
        reviews: 121,
    },
    {
        imageUrl: './images/HomePage/Today_deals/laptop_sleeve.png',
        title: 'Laptop sleeve MacBook',
        price: 59,
        detail: 'Organic Cotton, fairtrade certified',
        reviews: 121,
    },
    {
        imageUrl: './images/HomePage/Today_deals/Pendelton_water_bottle.png',
        title: 'Pendelton Water Bottle',
        price: 59,
        detail: 'Stainless steel,Food safe,Hand wash',
        reviews: 121,
    },
    {
        imageUrl: './images/HomePage/Today_deals/hand_watch.png',
        title: 'Hand Watch',
        price: 299,
        detail: 'Citizen 650M, W-65g',
        reviews: 121,
    },
    {
        imageUrl: './images/HomePage/Today_deals/headphones.png',
        title: 'Headphones',
        price: 559,
        detail: 'A perfext balance of high-fiedelity audio',
        reviews: 121,
    },
]

const bestDealsData = [
    {
        imageUrl: './images/HomePage/Best_deals/head_phones.png',
        title: 'Gaming Headphones',
        price: 239,
        detail: 'A perfext balance of high-fiedelity audio',
        reviews: 121,
    },
    {
        imageUrl: './images/HomePage/Today_deals/base_camp_duffel.png',
        title: 'Base Camp Duffel M',
        price: 159,
        detail: 'Color - Summit Fold Swirl - TNF Black',
        reviews: 121,
    },
    {
        imageUrl: './images/HomePage/Best_deals/hand_watch.png',
        title: 'Tomford Watch',
        price: 590,
        detail: 'Sleek wrist watch',
        reviews: 121,
    },
    {
        imageUrl: './images/HomePage/Best_deals/cabin.png',
        title: 'Cabin',
        price: 59,
        detail: 'Polycarbonate, kk metal',
        reviews: 121,
    },
]

const todayDealsElement = document.querySelector('.today_deals_list');

const bestDealsElement = document.querySelector('.deals_for_you_list');

function createDealElement(dealData){

    const dealsElement = document.createElement('div');
    dealsElement.classList.add('single_deal');

    const dealsThumbnail = document.createElement('div');
    dealsThumbnail.classList.add('deal_thumbnail_wrap');

    const image = document.createElement('img');
    image.src = dealData.imageUrl;
    image.alt = dealData.title;
    image.setAttribute('loading','lazy');
    dealsThumbnail.appendChild(image);

    const favorite = document.createElement('span');
    favorite.classList.add('material-symbols-outlined');
    favorite.setAttribute('id', 'product_wishlist');
    favorite.textContent = 'favorite';
    dealsThumbnail.appendChild(favorite);

    const productContent = document.createElement('div');
    productContent.classList.add('product_content');

    const productTitleWrap = document.createElement('div');
    productTitleWrap.classList.add('product_title_wrap');

    const productTitle = document.createElement('h3');
    productTitle.classList.add('product_title');
    productTitle.textContent = dealData.title;
    productTitleWrap.appendChild(productTitle);

    const productPrice = document.createElement('p');
    productPrice.classList.add('product_price');
    productPrice.innerHTML = `<sup>$</sup>${dealData.price}<sup>.00</sup>`;
    productTitleWrap.appendChild(productPrice);
    productContent.appendChild(productTitleWrap);

    const productDetail = document.createElement('p');
    productDetail.classList.add('product_detail');
    productDetail.textContent = dealData.detail;
    productContent.appendChild(productDetail);

    const productStarWrap = document.createElement('div');
    productStarWrap.classList.add('product_star_wrap');

    for(let i=0;i<5;i++){
        const star = document.createElement('span');
        star.classList.add('material-symbols-outlined');
        star.textContent = 'star';
        productStarWrap.appendChild(star);
    }

    const reviews = document.createElement('p');
    reviews.classList.add('reviews');
    reviews.textContent = `(${dealData.reviews})`;
    productStarWrap.appendChild(reviews);
    productContent.appendChild(productStarWrap);

    const productButton = document.createElement('button');
    productButton.classList.add('product_button');
    productButton.textContent = 'Add to Cart';
    productContent.appendChild(productButton);

    dealsElement.appendChild(dealsThumbnail);
    dealsElement.appendChild(productContent);

    return dealsElement;
}
const newDealsElement = dealsData.map(createDealElement);

todayDealsElement.append(...newDealsElement);

const newDealsForYouElement = bestDealsData.map(createDealElement);

bestDealsElement.append(...newDealsForYouElement);




// const todayDealsElement = document.querySelector('.today_deals');

// function createDealElement(dealData){
//     const dealsElement = document.createElement('div');
//     dealsElement.classList.add('deals');

//     const dealsImage = document.createElement('div');
//     dealsImage.classList.add('deals_image');
//     const image = document.createElement('img');
//     image.src = dealData.imageUrl;
//     image.alt = dealData.name;
//     dealsImage.appendChild(image);

//     const namePrice = document.createElement('div');
//     namePrice.classList.add('name_price');
//     const name = document.createElement('h3');
//     name.textContent = dealData.name;
//     const price = document.createElement('p');
//     price.innerHTML = `<sup>$</sup>${dealData.price}<sup>.00</sup>`;
//     namePrice.appendChild(name);
//     namePrice.appendChild(price);

//     const description = document.createElement('p');
//     description.textContent = dealData.description;

//     const favorites = document.createElement('span');
//     favorites.classList.add('material-symbols-outlined');
//     favorites.setAttribute('id','favorites');
//     favorites.textContent = 'favorite';

//     const ratings = document.createElement('div');
//     ratings.classList.add('ratings');
    
//     for (let i=0; i<5; i++){
//         const star = document.createElement('span');
//         star.classList.add('material-symbols-outlined');
//         star.textContent = 'star';
//         ratings.appendChild(star);
//     }

//     const reviews = document.createElement('p');
//     reviews.textContent = `(${dealData.reviews})`;
//     ratings.appendChild(reviews);    

//     const addToCartButton = document.createElement('button');
//     addToCartButton.textContent = 'Add to cart';

//     dealsElement.appendChild(dealsImage);
//     dealsElement.appendChild(namePrice);
//     dealsElement.appendChild(description);
//     dealsElement.appendChild(favorites);
//     dealsElement.appendChild(ratings);
//     dealsElement.appendChild(addToCartButton);

//     return dealsElement;
// }

// const newDealsElement = dealsData.map(createDealElement);

// todayDealsElement.append(...newDealsElement);

// console.log(todayDealsElement);
// Headphone Product List

//  HeadphoneTypeChoices display
const headphoneTypeButton = document.getElementById('headphone_type_button');
const headphoneTypeChoices = document.querySelector('.headphone_type_choices');
const headphoneTypeSubmitButton = document.getElementById('headphone_type_submit');

// HeadphoneTypeColor display
const headphoneColorButton = document.getElementById('headphone_color_button');
const headphoneColorChoices = document.querySelector('.headphone_color_choices');
const headphoneColorSubmitButton = document.getElementById('headphone_color_submit');

// function OutsideCLick
document.addEventListener('click', handleClickOutside);

function handleClickOutside(event){
    const clickedElement = event.target;

    if(!headphoneTypeButton.contains(clickedElement)){
        headphoneTypeChoices.style.display = 'none';
    }
    if(!headphoneColorButton.contains(clickedElement)){
        headphoneColorChoices.style.display = 'none';
    }
}


// headphoneTypeChoices
headphoneTypeButton.addEventListener('click', () => {
    headphoneTypeChoices.style.display = 'flex';
});

headphoneTypeChoices.addEventListener('click', (event) => {
    event.stopPropagation();
});


// HeaphoneColorChoices
headphoneColorButton.addEventListener('click', () => {
    headphoneColorChoices.style.display = 'flex';
});

headphoneColorChoices.addEventListener('click', (event) => {
    event.stopPropagation();
});

// // heaphonePage Product List

const headphoneProductData = [
    {
        imageUrl: './images/HeadphonePage/ProductList/headphone1.png',
        title: 'BASS BLING ',
        price: 99,
        detail: 'For All Smartphones Bluetooth with mic',
        reviews: 121,
        headphone_type: 'wired',
        color: 'black'
    },
    {
        imageUrl: './images/HomePage/Today_deals/headphones.png',
        title: 'Headphones',
        price: 559,
        detail: 'A perfect balance of high-fiedelity audio',
        reviews: 121,
        id: 'headphone_product_2',
        headphone_type: 'wireless',
        color: 'pink'
    },
    {
        imageUrl: './images/HeadphonePage/ProductList/headphone2.png',
        title: 'Aroma NB137 Nexon',
        price: 99,
        detail: '16 Hours* Playtime Deep Bass Earbuds',
        reviews: 121,
        headphone_type: 'wireless',
        color: 'mixed'
    },
    {
        imageUrl: './images/HeadphonePage/ProductList/headphone3.png',
        title: 'OnePlus Buds 3 TWS',
        price: 159,
        detail: 'In Ear Earbuds with Sliding Volume Control',
        reviews: 121,
        headphone_type: 'wireless',
        color: 'white'
    },
    {
        imageUrl: './images/HeadphonePage/ProductList/headphone4.png',
        title: 'Ziddjeet A222 M19',
        price: 1259,
        detail: 'Superior Sound Quality Ture Wireless Clear',
        reviews: 121,
        headphone_type: 'wireless',
        color: 'white'
    },
    {
        imageUrl: './images/HeadphonePage/ProductList/headphone5.png',
        title: 'realme Buds T110',
        price: 59,
        detail: 'Fast Charging Bluetooth Headset',
        reviews: 121,
        headphone_type: 'wireless',
        color: 'black'
    },
    {
        imageUrl: './images/HeadphonePage/ProductList/headphone8.png',
        title: 'Bose',
        price: 1259,
        detail: 'Spatial Audio Bluetooth Gaming Headset',
        reviews: 121,
        headphone_type: 'wireless',
        color: 'white'
    },
    {
        imageUrl: './images/HeadphonePage/ProductList/headphone9.png',
        title: 'Sennheiser PC 8.2 ',
        price: 59,
        detail: ' e-learning and music Wired Headset',
        reviews: 121,
        headphone_type: 'wired',
        color: 'pink'
    },
    {
        imageUrl: './images/HeadphonePage/ProductList/headphone6.png',
        title: 'SONY WH-CH520',
        price: 59,
        detail: 'DSEE Upscale, Dual Pairing Bluetooth Headset ',
        reviews: 121,
        headphone_type: 'wireless',
        color: 'black'
    },
    {
        imageUrl: './images/HeadphonePage/ProductList/headphone7.png',
        title: 'SpinBot Ranger HX300',
        price: 299,
        detail: 'Low Latency & RGB Lights Bluetooth Gaming Headset',
        reviews: 121,
        headphone_type: 'wired',
        color: 'black'
    },
    {
        imageUrl: './images/HeadphonePage/ProductList/headphone10.png',
        title: 'Bydye A224 M19',
        price: 59,
        detail: 'Bluetooth Headset Bluetooth without Mic Headset',
        reviews: 121,
        headphone_type: 'wireless',
        color: 'green'
    },
    {
        imageUrl: './images/HeadphonePage/ProductList/headphone11.png',
        title: 'Boult K20',
        price: 59,
        detail: 'Quad Mic ENC, 32H Battery Life, Low Latency Gaming',
        reviews: 121,
        headphone_type: 'wireless',
        color: 'mixed'
    }
]


function filterHeadphoneProducts(headphoneData, selectedType){
    if(!selectedType){
        return headphoneData;
    }
    return headphoneProductData.filter(product => selectedType.includes(product.headphone_type) || selectedType.includes(product.color));
}

function displayProducts(products){
    headphoneProductElement.innerHTML = "";

    products.forEach(productData => {
        const headphoneProduct = createHeadphoneProductElement(productData);
        headphoneProductElement.appendChild(headphoneProduct);
    });
}

// HeadphoneType Filter Function

headphoneTypeSubmitButton.addEventListener('click', () => {
    const selectedHeadphoneType = [...document.querySelectorAll('.headphone_type_input:checked')]
    .map(checkbox => checkbox.nextElementSibling.textContent)
    .join(' | ');

    const headphoneTypeFilteredProducts = filterHeadphoneProducts(headphoneProductData, selectedHeadphoneType);
    displayProducts(headphoneTypeFilteredProducts);
    headphoneTypeChoices.style.display = 'none';
});

// HeadphoneColor Filter Function

headphoneColorSubmitButton.addEventListener('click', () => {
    const selectedHeadphoneColor = [...document.querySelectorAll('.headphone_color_input:checked')]
    .map(checkbox => checkbox.nextElementSibling.textContent)
    .join(' | ');

    const headphoneColorFilteredProducts = filterHeadphoneProducts(headphoneProductData, selectedHeadphoneColor);
    displayProducts(headphoneColorFilteredProducts);
    console.log(headphoneColorFilteredProducts);
    headphoneColorChoices.style.display = 'none';
});

// // Creating Product List
const headphoneProductElement = document.querySelector('.headphone_product_list');

function createHeadphoneProductElement(productData){

    const singleHeadphoneProduct = document.createElement('div');
    singleHeadphoneProduct.setAttribute('id',`${productData.id}`);
    singleHeadphoneProduct.classList.add('single_headphone_product');

    const headphoneThumbnail = document.createElement('div');
    headphoneThumbnail.classList.add('headphone_thumbnail_wrap');

    const singelHeadphoneImage = document.createElement('div');
    singelHeadphoneImage.classList.add('single_headphone_image');

    const headphoneImage = document.createElement('img');
    headphoneImage.src = productData.imageUrl;
    headphoneImage.alt = productData.title;
    headphoneImage.setAttribute('loading', 'lazy');
    headphoneImage.classList.add('headphone_image');
    headphoneImage.setAttribute('id',`${productData.imageid}`);
    singelHeadphoneImage.appendChild(headphoneImage);
    headphoneThumbnail.appendChild(singelHeadphoneImage);

    const favorite = document.createElement('span');
    favorite.classList.add('material-symbols-outlined');
    favorite.setAttribute('id', 'headphone_product_wishlist');
    favorite.textContent = 'favorite';
    headphoneThumbnail.appendChild(favorite);

    const headphoneProductContent = document.createElement('div');
    headphoneProductContent.classList.add('headphone_product_content');

    const headphoneProductTitleWrap = document.createElement('div');
    headphoneProductTitleWrap.classList.add('headphone_product_title_wrap');

    const headphoneProductTitle = document.createElement('h3');
    headphoneProductTitle.classList.add('headphone_product_title');
    headphoneProductTitle.textContent = productData.title;
    headphoneProductTitleWrap.appendChild(headphoneProductTitle);

    const headphoneProductPrice = document.createElement('p');
    headphoneProductPrice.classList.add('headphone_product_price');
    headphoneProductPrice.innerHTML = `<sup>$</sup>${productData.price}<sup>.00</sup>`;
    headphoneProductTitleWrap.appendChild(headphoneProductPrice);
    headphoneProductContent.appendChild(headphoneProductTitleWrap);

    const headphoneProductDetail = document.createElement('p');
    headphoneProductDetail.classList.add('headphone_product_detail');
    headphoneProductDetail.textContent = productData.detail;
    headphoneProductContent.appendChild(headphoneProductDetail);

    const headphoneProductStarWrap = document.createElement('div');
    headphoneProductStarWrap.classList.add('headphone_product_star_wrap');

    for(let i=0;i<5;i++){
        const star = document.createElement('span');
        star.classList.add('material-symbols-outlined');
        star.textContent = 'star';
        headphoneProductStarWrap.appendChild(star);
    }

    const headphoneReview = document.createElement('p');
    headphoneReview.classList.add('headphone_review');
    headphoneReview.textContent = `(${productData.reviews})`;
    headphoneProductStarWrap.appendChild(headphoneReview);
    headphoneProductContent.appendChild(headphoneProductStarWrap);

    const headphoneProductButton = document.createElement('div');
    headphoneProductButton.classList.add('headphone_product_button');
    headphoneProductButton.textContent = 'Add to Cart';
    headphoneProductContent.appendChild(headphoneProductButton);

    singleHeadphoneProduct.appendChild(headphoneThumbnail);
    singleHeadphoneProduct.appendChild(headphoneProductContent);
    return singleHeadphoneProduct;
}

const newHeadphoneProductElement = headphoneProductData.map(createHeadphoneProductElement);
// headphoneProductElement.append(...newHeadphoneProductElement);
newHeadphoneProductElement.forEach(element => headphoneProductElement.appendChild(element));

const singleProductPage = document.getElementById('headphone_product_2');

singleProductPage.addEventListener('click', () => {
    window.location.href = './single_product_detail.html';
});


// // Weekly Popular Products

const weeklyProductsData = [
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
        detail: 'A perfect balance of high-fiedelity audio',
        reviews: 121,
    }
]

const weeklyPopularProductList = document.querySelector('.weekly_popular_products_list');

function createTodayDealElement(dealData){

    const singleDealElement = document.createElement('div');
    singleDealElement.classList.add('single_deal');

    const dealsThumbnail = document.createElement('div');
    dealsThumbnail.classList.add('deal_thumbnail_wrap');

    const singleDealImage = document.createElement('div');
    singleDealImage.classList.add('single_deal_image');

    const dealImage = document.createElement('img');
    dealImage.src = dealData.imageUrl;
    dealImage.alt = dealData.title;
    dealImage.setAttribute('loading', 'lazy');
    dealImage.classList.add('deal_image');
    singleDealImage.appendChild(dealImage);
    dealsThumbnail.appendChild(singleDealImage);

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

    const productButton = document.createElement('div');
    productButton.classList.add('product_button');
    productButton.textContent = 'Add to Cart';
    productContent.appendChild(productButton);

    singleDealElement.appendChild(dealsThumbnail);
    singleDealElement.appendChild(productContent);
    return singleDealElement;
}

const newWeeklyPopularProductList = weeklyProductsData.map(createTodayDealElement);
weeklyPopularProductList.append(...newWeeklyPopularProductList);




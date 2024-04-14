// Shop category area
const shopCategoryData = [
    {
        imageUrl: 'images/HomePage/Shop_category/furniture.png',
        title: 'Furniture',
    },
    {
        imageUrl: 'images/HomePage/Shop_category/Handbag.png',
        title: 'Hand Bag',
    },
    {
        imageUrl: 'images/HomePage/Shop_category/books.png',
        title: 'Books',
    },
    {
        imageUrl: 'images/HomePage/Shop_category/tech.png',
        title: 'Tech',
    },
    {
        imageUrl: 'images/HomePage/Shop_category/sneakers.png',
        title: 'Sneakers',
    },
    {
        imageUrl: 'images/HomePage/Shop_category/travel.png',
        title: 'Travel',
    },
    {
        imageUrl: 'images/HomePage/Shop_category/art.jpg',
        title: 'Art',
    },
    {
        imageUrl: 'images/HomePage/Shop_category/education.jpg',
        title: 'Education',
    },
    {
        imageUrl: 'images/HomePage/Shop_category/fashion.jpg',
        title: 'Fashion',
    },
    {
        imageUrl: 'images/HomePage/Shop_category/clothes.jpg',
        title: 'Clothes',
    },
    {
        imageUrl: 'images/HomePage/Shop_category/beauty.jpg',
        title: 'Beauty',
    },
    {
        imageUrl: 'images/HomePage/Shop_category/hats.jpg',
        title: 'Hats',
    }
]


const shopCategoryElement = document.querySelector('.category_list');

function createShopCategoryElement(shopData){

    const singleCategoryElement = document.createElement('div');
    singleCategoryElement.classList.add('single_category');

    const shopCategoryImage = document.createElement('div');
    shopCategoryImage.classList.add('shop_category_image');

    const categoryImage = document.createElement('img');
    categoryImage.src = shopData.imageUrl;
    categoryImage.alt = shopData.title;
    categoryImage.setAttribute('loading', 'lazy');
    categoryImage.classList.add('category_image');
    shopCategoryImage.appendChild(categoryImage);

    const categoryTitle = document.createElement('h1');
    categoryTitle.classList.add('category_title');
    categoryTitle.textContent = shopData.title;

    singleCategoryElement.appendChild(shopCategoryImage);
    singleCategoryElement.appendChild(categoryTitle);

    return singleCategoryElement;
}

const newShopCategoryElement = shopCategoryData.map(createShopCategoryElement);
shopCategoryElement.append(...newShopCategoryElement);



// Today Deals for you
const todayDealsData = [
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


const todayDealsElement = document.querySelector('.today_deals_list');

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

const newTodayDealsElement = todayDealsData.map(createTodayDealElement);
todayDealsElement.append(...newTodayDealsElement);



// Choose your brand
const brandsData = [
    {
        imageUrl: 'images/HomePage/Choose_brand/staples.png',
        title: 'Staples'
    },
    {
        imageUrl: 'images/HomePage/Choose_brand/sprouts.png',
        title: 'Sprouts'
    },
    {
        imageUrl: 'images/HomePage/Choose_brand/grocery_outlet.png',
        title: 'Grocery outlet'
    },
    {
        imageUrl: 'images/HomePage/Choose_brand/mollie_stones.png',
        title: 'Mollie stones'
    },
    {
        imageUrl: 'images/HomePage/Choose_brand/sports_basement.png',
        title: 'Sports Basement'
    },
    {
        imageUrl: 'images/HomePage/Choose_brand/container_store.png',
        title: 'Container Store'
    },
    {
        imageUrl: 'images/HomePage/Choose_brand/target.png',
        title: 'Target'
    },
    {
        imageUrl: 'images/HomePage/Choose_brand/bevmo.png',
        title: 'Bevmo!'
    }
]

const chooseBrandElement = document.querySelector('.brand_list');

function createChooseBrandElement(brandData){

    const singleBrandElement = document.createElement('div');
    singleBrandElement.classList.add('single_brand');

    const brandImage = document.createElement('img');
    brandImage.src = brandData.imageUrl;
    brandImage.alt = brandData.title;
    brandImage.setAttribute('loading', 'lazy');
    brandImage.classList.add('brand_image');

    const brandContent = document.createElement('div');
    brandContent.classList.add('brand_content');

    const brandTitle = document.createElement('h4');
    brandTitle.textContent = brandData.title;
    brandContent.appendChild(brandTitle);

    const brandDetail = document.createElement('p');
    brandDetail.classList.add('brand_delivery_time');
    brandDetail.textContent = 'Delivery with in 24 hours';
    brandContent.appendChild(brandDetail);

    singleBrandElement.appendChild(brandImage);
    singleBrandElement.appendChild(brandContent);

    return singleBrandElement;
}

const newChooseBrandElement = brandsData.map(createChooseBrandElement);
chooseBrandElement.append(...newChooseBrandElement);


// Get Discount Area
const getDiscountData = [
    {
        price: 100,
        description: 'Explore Out Furniture & Home furnishing Range',
        imageUrl: './images/HomePage/Get_discount/furniture.png', 
        alternate: 'Furniture',
        discountId: 'get_discount_single_item_1'
    },
    {
        price: 29,
        description: 'Enjoy Discount all types of Books & Gadgets item',
        imageUrl: './images/HomePage/Get_discount/books.png', 
        alterante: 'Furniture',
        discountId: 'get_discount_single_item_2'
    },
    {
        price: 67,
        description: 'Explore Our all types Dresses for Men',
        imageUrl: './images/HomePage/Get_discount/clothes.png', 
        alterante: 'Furniture',
        discountId: 'get_discount_single_item_3'
    },
    {
        price: 59,
        description: 'Enjoy Discount all types of Educational accessories',
        imageUrl: './images/HomePage/Get_discount/education.png', 
        alterante: 'Furniture',
        discountId: 'get_discount_single_item_4'
    },
]

const discountList = document.querySelector('.discount_list');

function createDiscountElement(discountdata){

    const getDiscountSingleItem = document.createElement('div');
    getDiscountSingleItem.classList.add('get_discount_single_item');
    getDiscountSingleItem.setAttribute('id', `${discountdata.discountId}`);

    const getDiscountContent = document.createElement('div');
    getDiscountContent.classList.add('get_discount_content');

    const discountTitle = document.createElement('h1');
    discountTitle.classList.add('discount_title');
    discountTitle.textContent = 'Save';
    getDiscountContent.appendChild(discountTitle);

    const discountPrice = document.createElement('span');
    discountPrice.classList.add('discount_price');
    discountPrice.innerHTML = `<sup>$</sup>${discountdata.price}`;
    getDiscountContent.appendChild(discountPrice);

    const discountDescription = document.createElement('p');
    discountDescription.classList.add('discount_description');
    discountDescription.textContent = discountdata.description;
    getDiscountContent.appendChild(discountDescription);

    const discountImageContainer = document.createElement('div');
    discountImageContainer.classList.add('discount_image_container');

    const discountImage = document.createElement('img');
    discountImage.src = discountdata.imageUrl;
    discountImage.alt = discountdata.alterante;
    discountImage.classList.add('discount_image');
    discountImageContainer.appendChild(discountImage);

    getDiscountSingleItem.appendChild(getDiscountContent);
    getDiscountSingleItem.appendChild(discountImageContainer);

    return getDiscountSingleItem;
}

const newDiscountList = getDiscountData.map(createDiscountElement);
discountList.append(...newDiscountList);



const weeklyProductData = [
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
    }
]

const weeklyProductList = document.querySelector('.weekly_popular_product_list');

const newWeeklyProductList = weeklyProductData.map(createTodayDealElement);
weeklyProductList.append(...newWeeklyProductList);


// Today Best Deals For You

function createSingleProductList(productData){

    const singleProductElement = document.createElement('div');
    singleProductElement.classList.add('single_product_list');

    const productThumbnail = document.createElement('div');
    productThumbnail.classList.add('product_thumbnail_wrap');

    const singleProductImage = document.createElement('div');
    singleProductImage.classList.add('single_product_image');

    const productImage = document.createElement('img');
    productImage.src = productData.imageUrl;
    productImage.alt = productData.title;
    productImage.setAttribute('loading', 'lazy');
    productImage.classList.add('product_image');
    singleProductImage.appendChild(productImage);
    productThumbnail.appendChild(singleProductImage);

    const favorite = document.createElement('span');
    favorite.classList.add('material-symbols-outlined');
    favorite.setAttribute('id', 'single_product_wishlist');
    favorite.textContent = 'favorite';
    productThumbnail.appendChild(favorite);

    const singleProductContent = document.createElement('div');
    singleProductContent.classList.add('single_product_content');

    const singleProductTitleWrap = document.createElement('div');
    singleProductTitleWrap.classList.add('single_product_title_wrap');

    const singleProductTitle = document.createElement('h3');
    singleProductTitle.classList.add('single_product_title');
    singleProductTitle.textContent = productData.title;
    singleProductTitleWrap.appendChild(singleProductTitle);

    const singleProductPrice = document.createElement('p');
    singleProductPrice.classList.add('single_product_price');
    singleProductPrice.innerHTML = `<sup>$</sup>${productData.price}<sup>.00</sup>`;
    singleProductTitleWrap.appendChild(singleProductPrice);
    singleProductContent.appendChild(singleProductTitleWrap);

    const singleProductDetail = document.createElement('p');
    singleProductDetail.classList.add('single_product_detail');
    singleProductDetail.textContent = productData.detail;
    singleProductContent.appendChild(singleProductDetail);

    const singleProductStarWrap = document.createElement('div');
    singleProductStarWrap.classList.add('single_product_star_wrap');

    for(let i=0;i<5;i++){
        const star = document.createElement('span');
        star.classList.add('material-symbols-outlined');
        star.textContent = 'star';
        singleProductStarWrap.appendChild(star);
    }

    const singleProductReview = document.createElement('p');
    singleProductReview.classList.add('single_product_review');
    singleProductReview.textContent = `(${productData.reviews})`;
    singleProductStarWrap.appendChild(singleProductReview);
    singleProductContent.appendChild(singleProductStarWrap);

    const singleProductListButton = document.createElement('div');
    singleProductListButton.classList.add('single_product_list_button');
    singleProductListButton.textContent = 'Add to Cart';
    singleProductContent.appendChild(singleProductListButton);

    singleProductElement.appendChild(productThumbnail);
    singleProductElement.appendChild(singleProductContent);
    return singleProductElement;   
}

// Product Buttons

const gadgetsButton = document.getElementById('gadgets_button');
const fashionButton = document.getElementById('fashion_button');
const toysButton = document.getElementById('toys_button');
const educationButton = document.getElementById('education_button');
const beautyButton = document.getElementById('beauty_button');
const fitnessButton = document.getElementById('fitness_button');
const furnitureButton = document.getElementById('furniture_button');
const sneakersButton = document.getElementById('sneakers_button');

// Product List

const gadgetProductList = document.getElementById('gadgets_product_list');
const fashionProductList = document.getElementById('fashion_product_list');
const toysProductList = document.getElementById('toys_product_list');
const educationProductList = document.getElementById('education_product_list');
const beautyProductList = document.getElementById('beauty_product_list');
const fitnessProductList = document.getElementById('fitness_product_list');
const furnitureProductList = document.getElementById('furniture_product_list');
const sneakersProductList = document.getElementById('sneakers_product_list');

// let initialLoad = true;

// function resetProducts() {
//     const buttons = document.querySelectorAll('.single_product_button');
//     buttons.forEach(button => {
//         button.style.backgroundColor = 'transparent';
//         button.style.color = 'black';
//     });

//     if(initialLoad){
//         gadgetsButton.style.backgroundColor = '#003d29';
//         gadgetsButton.style.color = 'white'
//         gadgetProductList.style.display = 'grid';
//         initialLoad = false;
//     }
// }

// window.addEventListener('load',resetProducts);


//Gadget Product List

gadgetsButton.addEventListener('click', () => {
    gadgetsButton.style.backgroundColor = '#003d29';
    fashionButton.style.backgroundColor = 'transparent';
    toysButton.style.backgroundColor = 'transparent';
    educationButton.style.backgroundColor = 'transparent';
    beautyButton.style.backgroundColor = 'transparent';
    fitnessButton.style.backgroundColor = 'transparent';
    furnitureButton.style.backgroundColor = 'transparent';
    sneakersButton.style.backgroundColor = 'transparent';

    gadgetsButton.style.color = 'white';
    fashionButton.style.color = 'black';
    toysButton.style.color = 'black';
    educationButton.style.color = 'black';
    beautyButton.style.color = 'black';
    fitnessButton.style.color = 'black';
    furnitureButton.style.color = 'black';
    sneakersButton.style.color = 'black';

    gadgetProductList.style.display = 'grid';
    fashionProductList.style.display = 'none';
    toysProductList.style.display = 'none';
    educationProductList.style.display = 'none';
    beautyProductList.style.display = 'none';
    fitnessButton.style.display = 'none';
    furnitureProductList.style.display = 'none';
    sneakersProductList.style.display = 'none';
});

const newGadgetProductList = todayDealsData.map(createSingleProductList);
gadgetProductList.append(...newGadgetProductList);


// Fashion Product List

fashionButton.addEventListener('click', () => {
    gadgetsButton.style.backgroundColor = 'transparent';
    fashionButton.style.backgroundColor = '#003d29';
    toysButton.style.backgroundColor = 'transparent';
    educationButton.style.backgroundColor = 'transparent';
    beautyButton.style.backgroundColor = 'transparent';
    fitnessButton.style.backgroundColor = 'transparent';
    furnitureButton.style.backgroundColor = 'transparent';
    sneakersButton.style.backgroundColor = 'transparent';

    gadgetsButton.style.color = 'black';
    fashionButton.style.color = 'white';
    toysButton.style.color = 'black';
    educationButton.style.color = 'black';
    beautyButton.style.color = 'black';
    fitnessButton.style.color = 'black';
    furnitureButton.style.color = 'black';
    sneakersButton.style.color = 'black';

    gadgetProductList.style.display = 'none';
    fashionProductList.style.display = 'grid';
    toysProductList.style.display = 'none';
    educationProductList.style.display = 'none';
    beautyProductList.style.display = 'none';
    fitnessButton.style.display = 'none';
    furnitureProductList.style.display = 'none';
    sneakersProductList.style.display = 'none';
});

const newFashionProductList = weeklyProductData.map(createSingleProductList);
fashionProductList.append(...newFashionProductList);


// Toys Product List

toysButton.addEventListener('click', () => {
    gadgetsButton.style.backgroundColor = 'transparent';
    fashionButton.style.backgroundColor = 'transparent';
    toysButton.style.backgroundColor = '#003d29'; 
    educationButton.style.backgroundColor = 'transparent';
    beautyButton.style.backgroundColor = 'transparent';
    fitnessButton.style.backgroundColor = 'transparent';
    furnitureButton.style.backgroundColor = 'transparent';
    sneakersButton.style.backgroundColor = 'transparent';

    gadgetsButton.style.color = 'black';
    fashionButton.style.color = 'black';
    toysButton.style.color = 'white';
    educationButton.style.color = 'black';
    beautyButton.style.color = 'black';
    fitnessButton.style.color = 'black';
    furnitureButton.style.color = 'black';
    sneakersButton.style.color = 'black';

    gadgetProductList.style.display = 'none';
    fashionProductList.style.display = 'none';
    toysProductList.style.display = 'grid';
    educationProductList.style.display = 'none';
    beautyProductList.style.display = 'none';
    fitnessButton.style.display = 'none';
    furnitureProductList.style.display = 'none';
    sneakersProductList.style.display = 'none';
});

const newToysProductList = todayDealsData.map(createSingleProductList);
toysProductList.append(...newToysProductList);


// Education Product List

educationButton.addEventListener('click', () => {
    gadgetsButton.style.backgroundColor = 'transparent';
    fashionButton.style.backgroundColor = 'transparent';
    toysButton.style.backgroundColor = 'transparent';
    educationButton.style.backgroundColor = '#003d29';
    beautyButton.style.backgroundColor = 'transparent';
    fitnessButton.style.backgroundColor = 'transparent';
    furnitureButton.style.backgroundColor = 'transparent';
    sneakersButton.style.backgroundColor = 'transparent';

    gadgetsButton.style.color = 'black';
    fashionButton.style.color = 'black';
    toysButton.style.color = 'black';
    educationButton.style.color = 'white';
    beautyButton.style.color = 'black';
    fitnessButton.style.color = 'black';
    furnitureButton.style.color = 'black';
    sneakersButton.style.color = 'black';

    gadgetProductList.style.display = 'none';
    fashionProductList.style.display = 'none';
    toysProductList.style.display = 'none';
    educationProductList.style.display = 'grid';
    beautyProductList.style.display = 'none';
    fitnessButton.style.display = 'none';
    furnitureProductList.style.display = 'none';
    sneakersProductList.style.display = 'none';
});

const newEducationProductList = todayDealsData.map(createSingleProductList);
educationProductList.append(...newEducationProductList);


// Beauty Product List

beautyButton.addEventListener('click', () => {
    gadgetsButton.style.backgroundColor = 'transparent';
    fashionButton.style.backgroundColor = 'transparent';
    toysButton.style.backgroundColor = 'transparent';
    educationButton.style.backgroundColor = 'transparent';
    beautyButton.style.backgroundColor = '#003d29';
    fitnessButton.style.backgroundColor = 'transparent';
    furnitureButton.style.backgroundColor = 'transparent';
    sneakersButton.style.backgroundColor = 'transparent';

    gadgetsButton.style.color = 'black';
    fashionButton.style.color = 'black';
    toysButton.style.color = 'black';
    educationButton.style.color = 'black';
    beautyButton.style.color = 'white';
    fitnessButton.style.color = 'black';
    furnitureButton.style.color = 'black';
    sneakersButton.style.color = 'black';

    gadgetProductList.style.display = 'none';
    fashionProductList.style.display = 'none';
    toysProductList.style.display = 'none';
    educationProductList.style.display = 'none';
    beautyProductList.style.display = 'grid';
    fitnessButton.style.display = 'none';
    furnitureProductList.style.display = 'none';
    sneakersProductList.style.display = 'none';
});

const newBeautyProductList = todayDealsData.map(createSingleProductList);
beautyProductList.append(...newBeautyProductList);

//Fitness Product List

fitnessButton.addEventListener('click', () => {
    gadgetsButton.style.backgroundColor = 'transparent';
    fashionButton.style.backgroundColor = 'transparent';
    toysButton.style.backgroundColor = 'transparent';
    educationButton.style.backgroundColor = 'transparent';
    beautyButton.style.backgroundColor = 'transparent';
    fitnessButton.style.backgroundColor = '#003d29';
    furnitureButton.style.backgroundColor = 'transparent';
    sneakersButton.style.backgroundColor = 'transparent';

    gadgetsButton.style.color = 'black';
    fashionButton.style.color = 'black';
    toysButton.style.color = 'black';
    educationButton.style.color = 'black';
    beautyButton.style.color = 'black';
    fitnessButton.style.color = 'white';
    furnitureButton.style.color = 'black';
    sneakersButton.style.color = 'black';

    gadgetProductList.style.display = 'none';
    fashionProductList.style.display = 'none';
    toysProductList.style.display = 'none';
    educationProductList.style.display = 'none';
    beautyProductList.style.display = 'none';
    fitnessButton.style.display = 'grid';
    furnitureProductList.style.display = 'none';
    sneakersProductList.style.display = 'none';
});

const newFitnessProductList = todayDealsData.map(createSingleProductList);
fitnessProductList.append(...newFitnessProductList);


// Furniture Product List

furnitureButton.addEventListener('click', () => {
    gadgetsButton.style.backgroundColor = 'transparent';
    fashionButton.style.backgroundColor = 'transparent';
    toysButton.style.backgroundColor = 'transparent';
    educationButton.style.backgroundColor = 'transparent';
    beautyButton.style.backgroundColor = 'transparent';
    fitnessButton.style.backgroundColor = 'transparent';
    furnitureButton.style.backgroundColor = '#003d29';
    sneakersButton.style.backgroundColor = 'transparent';

    gadgetsButton.style.color = 'black';
    fashionButton.style.color = 'black';
    toysButton.style.color = 'black';
    educationButton.style.color = 'black';
    beautyButton.style.color = 'black';
    fitnessButton.style.color = 'black';
    furnitureButton.style.color = 'white';
    sneakersButton.style.color = 'black';

    gadgetProductList.style.display = 'none';
    fashionProductList.style.display = 'none';
    toysProductList.style.display = 'none';
    educationProductList.style.display = 'none';
    beautyProductList.style.display = 'none';
    fitnessButton.style.display = 'none';
    furnitureProductList.style.display = 'grid';
    sneakersProductList.style.display = 'none';
});

const newFurnitureProductList = todayDealsData.map(createSingleProductList);
furnitureProductList.append(...newFurnitureProductList);


//Sneakers Product List

sneakersButton.addEventListener('click', () => {
    gadgetsButton.style.backgroundColor = 'transparent';
    fashionButton.style.backgroundColor = 'transparent';
    toysButton.style.backgroundColor = 'transparent';
    educationButton.style.backgroundColor = 'transparent';
    beautyButton.style.backgroundColor = 'transparent';
    fitnessButton.style.backgroundColor = 'transparent';
    furnitureButton.style.backgroundColor = 'transparent';
    sneakersButton.style.backgroundColor = '#003d29';

    gadgetsButton.style.color = 'black';
    fashionButton.style.color = 'black';
    toysButton.style.color = 'black';
    educationButton.style.color = 'black';
    beautyButton.style.color = 'black';
    fitnessButton.style.color = 'black';
    furnitureButton.style.color = 'black';
    sneakersButton.style.color = 'white';

    gadgetProductList.style.display = 'none';
    fashionProductList.style.display = 'none';
    toysProductList.style.display = 'none';
    educationProductList.style.display = 'none';
    beautyProductList.style.display = 'none';
    fitnessButton.style.display = 'none';
    furnitureProductList.style.display = 'none';
    sneakersProductList.style.display = 'grid';
});

const newSneakersProductList = todayDealsData.map(createSingleProductList);
sneakersProductList.append(...newSneakersProductList);


// Most Selling Products

const mostSellingProductList = document.querySelector('.most_selling_product_list');

const newMostSellingProductList = todayDealsData.map(createTodayDealElement);
mostSellingProductList.append(... newMostSellingProductList);
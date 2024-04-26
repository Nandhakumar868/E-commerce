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
        alterante: 'Gadgets',
        discountId: 'get_discount_single_item_2'
    },
    {
        price: 67,
        description: 'Explore Our all types Dresses for Men in fashion',
        imageUrl: './images/HomePage/Get_discount/clothes.png', 
        alterante: 'Clothing',
        discountId: 'get_discount_single_item_3'
    },
    {
        price: 59,
        description: 'Enjoy Discount all types of Educational accessories',
        imageUrl: './images/HomePage/Get_discount/education.png', 
        alterante: 'Education',
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

const gadgetProductList = document.getElementById('gadgets_button_product_list');
const fashionProductList = document.getElementById('fashion_button_product_list');
const toysProductList = document.getElementById('toys_button_product_list');
const educationProductList = document.getElementById('education_button_product_list');
const beautyProductList = document.getElementById('beauty_button_product_list');
const fitnessProductList = document.getElementById('fitness_button_product_list');
const furnitureProductList = document.getElementById('furniture_button_product_list');
const sneakersProductList = document.getElementById('sneakers_button_product_list');


function handleButtonClick(clickedButton){
    const allButtons = [gadgetsButton, toysButton, fitnessButton, furnitureButton, sneakersButton];
    allButtons.forEach(button => {
        button.style.backgroundColor = 'transparent';
        button.style.color = 'black';
    });

    clickedButton.style.backgroundColor = '#003d29';
    clickedButton.style.color = 'white';

    const allProductLists = [gadgetProductList, toysProductList, fitnessProductList, furnitureProductList, sneakersProductList];
    allProductLists.forEach(list => {
        list.style.display = 'none';
    });

    const clickedProductId = clickedButton.id + '_product_list';
    const clickedProductList = document.getElementById(clickedProductId);
    clickedProductList.style.display = 'grid';
}


//Gadget Product List

const gadgetProductData = [
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
        imageUrl: './images/HomePage/Today_best_deals/gadgets/smart_watch.png',
        title: 'boAt Xtend Smart Watch',
        price: 159,
        detail: 'Alexa built-in Voice Assistant ',
        reviews: 121,
    },
    {
        imageUrl: './images/HomePage/Today_best_deals/gadgets/camera.png',
        title: 'Qubo Security Camera',
        price: 1259,
        detail: 'Person Detection, Built-In Alarm System',
        reviews: 121,
    },
    {
        imageUrl: './images/HomePage/Today_best_deals/gadgets/door_lock.png',
        title: 'Smart Door Lock',
        price: 59,
        detail: 'Fingerprint, RFID, PIN & Manual Key Access',
        reviews: 121,
    },
    {
        imageUrl: './images/HomePage/Today_best_deals/gadgets/power_plate.png',
        title: 'Portronics Power Plate ',
        price: 59,
        detail: 'Smart Electric Universal Extension Board',
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

// gadgetsButton.addEventListener('click', () => {
//     gadgetsButton.style.backgroundColor = '#003d29';
//     fashionButton.style.backgroundColor = 'transparent';
//     toysButton.style.backgroundColor = 'transparent'; 
//     educationButton.style.backgroundColor = 'transparent';
//     beautyButton.style.backgroundColor = 'transparent';
//     fitnessButton.style.backgroundColor = 'transparent';
//     furnitureButton.style.backgroundColor = 'transparent';
//     sneakersButton.style.backgroundColor = 'transparent';

//     gadgetsButton.style.color = 'white';
//     fashionButton.style.color = 'black';
//     toysButton.style.color = 'black';
//     educationButton.style.color = 'black';
//     beautyButton.style.color = 'black';
//     fitnessButton.style.color = 'black';
//     furnitureButton.style.color = 'black';
//     sneakersButton.style.color = 'black';

//     gadgetProductList.style.display = 'grid';
//     fashionProductList.style.display = 'none';
//     toysProductList.style.display = 'none';
//     educationProductList.style.display = 'none';
//     beautyProductList.style.display = 'none';
//     fitnessButton.style.display = 'none';
//     furnitureProductList.style.display = 'none';
//     sneakersProductList.style.display = 'none';
// });

const newGadgetProductList = gadgetProductData.map(createSingleProductList);
gadgetProductList.append(...newGadgetProductList);

gadgetsButton.addEventListener('click', () => handleButtonClick(gadgetsButton));


// Toys Product List

const toysProductData = [
    {
        imageUrl: './images/HomePage/Today_best_deals/toys/robot.png',
        title: 'Hi-Tech® Pioneer Bot',
        price: 99,
        detail: 'All Direction Movement Dancing Robot',
        reviews: 121,
    },
    {
        imageUrl: './images/HomePage/Today_best_deals/toys/game_console.png',
        title: 'Video Game Console',
        price: 99,
        detail: 'Just switch on and play, connect with TV.',
        reviews: 121,
    },
    {
        imageUrl: './images/HomePage/Today_best_deals/toys/elephant.png',
        title: 'Babique Elephant',
        price: 159,
        detail: 'Super Soft',
        reviews: 121,
    },
    {
        imageUrl: './images/HomePage/Today_best_deals/toys/octopus.png',
        title: 'Storio Toy Octopus',
        price: 1259,
        detail: 'Plush Soft Fabric',
        reviews: 121,
    },
    {
        imageUrl: './images/HomePage/Today_best_deals/toys/piano.png',
        title: 'VEBETO Kids Piano',
        price: 59,
        detail: 'built-in 8 rhythms, 4 animal sounds',
        reviews: 121,
    },
    {
        imageUrl: './images/HomePage/Today_best_deals/toys/binoculars.png',
        title: 'Binoculars',
        price: 59,
        detail: 'Birdwatching Outdoor Observing Sports',
        reviews: 121,
    },
    {
        imageUrl: './images/HomePage/Today_best_deals/toys/cubes.png',
        title: 'GRAPHENE Cubes',
        price: 299,
        detail: 'high-quality, non-toxic materials',
        reviews: 121,
    },
    {
        imageUrl: './images/HomePage/Today_best_deals/toys/shape_sorting.png',
        title: 'Shape Sorting Cube',
        price: 559,
        detail: 'Toddler Learning and Educational Sorting',
        reviews: 121,
    }
]

const newToysProductList = toysProductData.map(createSingleProductList);
toysProductList.append(...newToysProductList);

toysButton.addEventListener('click', () => handleButtonClick(toysButton));


//Fitness Product List

const fitnessProductData = [
    {
        imageUrl: './images/HomePage/Today_best_deals/fitness/mini_cycle.png',
        title: 'Mini Cycle Pedal',
        price: 99,
        detail: 'Light Exercise of Legs & Arms',
        reviews: 121,
    },
    {
        imageUrl: './images/HomePage/Today_best_deals/fitness/stepper_bench.png',
        title: 'Fitness Stepper',
        price: 99,
        detail: 'Aerobics Stepper with 3 Height Adjustments',
        reviews: 121,
    },
    {
        imageUrl: './images/HomePage/Today_best_deals/fitness/hand_gripper.png',
        title: 'Hand Gripper',
        price: 159,
        detail: 'Finger Exerciser',
        reviews: 121,
    },
    {
        imageUrl: './images/HomePage/Today_best_deals/fitness/tummy_trimmer.png',
        title: 'Tummy Trimmer',
        price: 1259,
        detail: 'Ultimate Ab Exerciser',
        reviews: 121,
    },
    {
        imageUrl: './images/HomePage/Today_best_deals/fitness/kettlebells.png',
        title: 'Kettlebells',
        price: 59,
        detail: 'Heavy Lifting',
        reviews: 121,
    },
    {
        imageUrl: './images/HomePage/Today_best_deals/fitness/roller.png',
        title: 'Ab Roller',
        price: 59,
        detail: 'Abs Workout Abdominal Exercise',
        reviews: 121,
    },
    {
        imageUrl: './images/HomePage/Today_best_deals/fitness/weight_bench.png',
        title: 'Weight Bench',
        price: 299,
        detail: 'removable seated preacher curl attachment',
        reviews: 121,
    },
    {
        imageUrl: './images/HomePage/Today_best_deals/fitness/treadmill.png',
        title: 'Treadmill',
        price: 559,
        detail: '15 Kilometers per Hour',
        reviews: 121,
    }
]

const newFitnessProductList = fitnessProductData.map(createSingleProductList);
fitnessProductList.append(...newFitnessProductList);
fitnessButton.addEventListener('click', () => handleButtonClick(fitnessButton));


// Furniture Product List

const furnitureProductData = [
    {
        imageUrl: './images/HomePage/Today_best_deals/furniture/plastic_storage.png',
        title: 'Plastic Storage Cabinet',
        price: 99,
        detail: 'Lockable,Lightweight',
        reviews: 121,
    },
    {
        imageUrl: './images/HomePage/Today_best_deals/furniture/foldable_sofa.png',
        title: 'Foldable Sofa/Cums Bed',
        price: 99,
        detail: 'Foldable',
        reviews: 121,
    },
    {
        imageUrl: './images/HomePage/Today_best_deals/furniture/wall_hanger.png',
        title: 'Wall Shelf',
        price: 159,
        detail: 'Easy to hang on wall',
        reviews: 121,
    },
    {
        imageUrl: './images/HomePage/Today_best_deals/furniture/gaming_chair.png',
        title: 'Sniper Gaming Chair',
        price: 1259,
        detail: 'Adjustable Headrest & Lumbar Support',
        reviews: 121,
    },
    {
        imageUrl: './images/HomePage/Today_best_deals/furniture/bean_bag.png',
        title: 'Bean Bag',
        price: 59,
        detail: 'Faux Leather',
        reviews: 121,
    },
    {
        imageUrl: './images/HomePage/Today_best_deals/furniture/swing_chair.png',
        title: 'Hanging Swing Chair',
        price: 59,
        detail: 'Lightweight and easily portable',
        reviews: 121,
    },
    {
        imageUrl: './images/HomePage/Today_best_deals/furniture/sofa_set.png',
        title: 'L Shape Sofa Set',
        price: 299,
        detail: 'Space Saving',
        reviews: 121,
    },
    {
        imageUrl: './images/HomePage/Today_best_deals/furniture/bed.png',
        title: 'Queen Size Bed',
        price: 559,
        detail: 'Walnut Finish',
        reviews: 121,
    }
]

const newFurnitureProductList = furnitureProductData.map(createSingleProductList);
furnitureProductList.append(...newFurnitureProductList);
furnitureButton.addEventListener('click', () => handleButtonClick(furnitureButton));


//Sneakers Product List

const sneakersProductData = [
    {
        imageUrl: './images/HomePage/Today_best_deals/sneakers/asian.png',
        title: 'ASIAN Mens Tarzan-11',
        price: 99,
        detail: 'Non Slip & Shockproof',
        reviews: 121,
    },
    {
        imageUrl: './images/HomePage/Today_best_deals/sneakers/polo.png',
        title: 'U.S. POLO ASSN.',
        price: 99,
        detail: 'Polyurethane',
        reviews: 121,
    },
    {
        imageUrl: './images/HomePage/Today_best_deals/sneakers/bacca_bucci.png',
        title: 'Bacca Bucci Balancer',
        price: 159,
        detail: 'Ethylene Vinyl Acetate',
        reviews: 121,
    },
    {
        imageUrl: './images/HomePage/Today_best_deals/sneakers/centrino.png',
        title: 'Centrino',
        price: 1259,
        detail: 'Thermoplastic Elastomers',
        reviews: 121,
    },
    {
        imageUrl: './images/HomePage/Today_best_deals/sneakers/puma.png',
        title: 'Puma',
        price: 59,
        detail: 'Rubber',
        reviews: 121,
    },
    {
        imageUrl: './images/HomePage/Today_best_deals/sneakers/symbol.png',
        title: 'Symbol',
        price: 59,
        detail: 'Leather',
        reviews: 121,
    },
    {
        imageUrl: './images/HomePage/Today_best_deals/sneakers/sparx.png',
        title: 'Sparx',
        price: 299,
        detail: 'TPR & EVA',
        reviews: 121,
    },
    {
        imageUrl: './images/HomePage/Today_best_deals/sneakers/michael_angelo.png',
        title: 'Michael Angelo',
        price: 559,
        detail: 'Thermoplastic Elastomers',
        reviews: 121,
    }
]

const newSneakersProductList = sneakersProductData.map(createSingleProductList);
sneakersProductList.append(...newSneakersProductList);
sneakersButton.addEventListener('click', () => handleButtonClick(sneakersButton));


// Most Selling Products

const mostSellingProductList = document.querySelector('.most_selling_product_list');

const newMostSellingProductList = todayDealsData.map(createTodayDealElement);
mostSellingProductList.append(... newMostSellingProductList);
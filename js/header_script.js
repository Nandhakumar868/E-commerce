// Popular Categoty List

const popularCategoryitems = document.querySelector('.popular_category_items');
const popularCategory = document.querySelector('.popular_category');

popularCategoryitems.addEventListener('click', () => {
    popularCategory.style.display = 'block';
});

document.addEventListener('click', handleClickOutside);

function handleClickOutside(event){
    const clickedElement = event.target;

    if(!popularCategoryitems.contains(clickedElement)){
        popularCategory.style.display = 'none';
    }
}

popularCategory.addEventListener('click', (event) => {
    event.stopPropagation();
});

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



const searchInput = document.getElementById('search_input')

searchInput.addEventListener('keyup', function() {
    const searchTerm = this.value.toLowerCase();
  
    if (searchTerm === 'headphones' || searchTerm.includes('headphones')) {
      // Redirect to the headphones page URL
      window.location.href = '/headphonepage.html'; // Assuming headphones page URL is '/headphones'
    } else {
      // Handle non-headphones search (optional: display a message)
      console.log('Search term is not "headphones".');
    }
});
  
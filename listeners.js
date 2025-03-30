document.addEventListener('DOMContentLoaded', () => {
    const searchButton = document.querySelector('input[name="btnK"]'); // The search button on Google

    if (searchButton) {
        searchButton.addEventListener('click', () => {
            alert('Search button pressed!');
        });
    } else {
        console.error('Search button not found');
    }
});
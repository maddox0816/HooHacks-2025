console.log(document.title);

document.addEventListener('DOMContentLoaded', () => {
 
    const searchButton = window.document.getElementsByClassName("gNO89b");
    console.log("Search Button: " + searchButton);

    if (searchButton) {
        searchButton.addEventListener('click', () => {
            alert('Search button pressed!');
        });
    } else {
        console.error('Search button not found');
    }
});
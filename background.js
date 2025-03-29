// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', () => {
    // Select the Google search button
    const searchButton = document.querySelector('input[name="btnK"]');

    if (searchButton) {
        // Add a click event listener to the search button
        searchButton.addEventListener('click', () => {
            // Get the current counter from local storage
            chrome.storage.local.get(['searchCounter'], (result) => {
                let counter = result.searchCounter || 0;

                // Increment the counter
                counter++;

                // Save the updated counter back to local storage
                chrome.storage.local.set({ searchCounter: counter }, () => {
                    console.log(`Search counter updated: ${counter}`);
                });
                console.log(`Search button clicked. Counter: ${counter}`);
            });
        });
    }
    console.log('Search button listener added.');
});
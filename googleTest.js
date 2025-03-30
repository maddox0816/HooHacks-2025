// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', () => {
    // Select the Google search button
    const searchButton = document.getElementsByClassName('gNO89b')[0]; // This class name may change, so check the current one

    if (searchButton) {
        // Add a click event listener to the search button
        console.log('Search button found, adding event listener.');
        searchButton.addEventListener('click', () => {
            // Send a message to the background script to update the counter
            console.log('Search button clicked, sending message to background script.');
            chrome.runtime.sendMessage({ type: 'INCREMENT_COUNTER' });
        });
    } else {
        console.log('Search button not found.');
    }
    console.log('Search button listener added.');
});

console.log("Background script loaded and listening for messages.");
chrome.runtime.sendMessage({ type: 'INCREMENT_COUNTER' });
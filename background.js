// Listen for messages from the content script
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type === 'INCREMENT_COUNTER') {
        // Get the current counter from local storage
        chrome.storage.local.get(['searchCounter'], (result) => {
            let counter = result.searchCounter || 0;

            // Increment the counter
            counter++;

            // Save the updated counter back to local storage
            chrome.storage.local.set({ searchCounter: counter }, () => {
                console.log(`Search counter updated: ${counter}`);
            });
        });
    }
    if( message.type === 'NEW_VISIT') {
        // Handle new visit message
        console.log('New visit:', message.hostname, message.seconds, message.date);
    }
});
// Listen for messages from other parts of the extension or webpage
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type === 'updateSaveData') {
        // Assuming message.data contains the new save data
        const newSaveData = message.data;

        // Save the data to Chrome's storage
        chrome.storage.local.set({ saveData: newSaveData }, () => {
            if (chrome.runtime.lastError) {
                console.error('Error saving data:', chrome.runtime.lastError);
                sendResponse({ success: false, error: chrome.runtime.lastError });
            } else {
                console.log('Save data updated successfully');
                sendResponse({ success: true });
            }
        });

        // Return true to indicate that the response will be sent asynchronously
        return true;
    }
});
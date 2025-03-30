console.log("Background script loaded and listening for messages.");
chrome.runtime.sendMessage({ type: 'NEW_VISIT', hostname: window.location.hostname, date: new Date().toISOString() }, (response) => {
    console.log('Response from background script:', response.data);
});
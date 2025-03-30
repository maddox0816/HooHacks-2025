console.log("Background script loaded and listening for messages.");
chrome.runtime.sendMessage({ type: 'NEW_VISIT', hostname: window.location.hostname, seconds: 3, date: new Date().toISOString() }, (response) => {
    console.log('Response from background script:', response);
});
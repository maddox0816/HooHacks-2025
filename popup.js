// popup.js

document.addEventListener('DOMContentLoaded', function () {
    // Add your popup logic here
    console.log('Popup loaded successfully!');

    function getActiveTabURL(callback) {
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            if (tabs.length > 0) {
                callback(tabs[0].url);
            }
        })
    }


  });
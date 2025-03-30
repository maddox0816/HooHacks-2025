// popup.js

document.addEventListener('DOMContentLoaded', function () {
    // Add your popup logic here
    console.log('Popup loaded successfully!');

   //make button a link
    document.getElementById('emission-breakdown-button').addEventListener('click', function() {
        window.open('http://chatgpt.com', '_blank');
    });

    function getActiveTabURL(callback) {
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            if (tabs.length > 0) {
                callback(tabs[0].url);
            }
        })
    }


  });
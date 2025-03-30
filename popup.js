// popup.js
var userelectricityUsage = 0;
var usercarbonEmissions = 0;
document.addEventListener('DOMContentLoaded', function () {
    // Add your popup logic here

    
    

    function updateComparisons(){
      document.getElementById("electricity-usage").textContent = "10";
    }

    function getActiveTabURL(callback) {
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            if (tabs.length > 0) {
                callback(tabs[0].url);
            }
        })
    }




  });
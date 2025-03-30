// popup.js

document.addEventListener("DOMContentLoaded", async function () {
    const electricityUsageElement = document.getElementById("electricity-usage");
    const carbonEmissionsElement = document.getElementById("carbon-emissions");
    const ratingElement = document.getElementById("carbon-rating-value");

    //get visits from local storage
    chrome.storage.local.get(['visits'], (result) => {
        console.log('Visits:', result.visits);
        let visits = result.visits || [];

        //find the details of the visit that matches the current hostname of the active tab
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            const currentHostname = new URL(tabs[0].url).hostname;
            let visitDetails = visits.find(visit => visit.hostname === currentHostname);
            console.log('Visit Details:', visitDetails);

            if (visitDetails) {
                electricityUsageElement.textContent = visitDetails.electricity.toFixed(2);
                carbonEmissionsElement.textContent = visitDetails.emissions.toFixed(2);
                ratingElement.textContent = visitDetails.rating;

            } else {
                electricityUsageElement.textContent = "Data unavailable";
                carbonEmissionsElement.textContent = "Data unavailable";
                ratingElement.textContent = "N/A";
            }
        });
        
        let visitDetails = visits.find(visit => visit.hostname === currentHostname);
        console.log('Visit Details:', visitDetails);
    
    });

});
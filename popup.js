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
            if (tabs.length === 0 || !tabs[0].url){
                console.log("No active Tab")
                return;
            }
            const currentHostname = new URL(tabs[0].url).hostname;
            let visitDetails = visits.find(visit => visit.hostname === currentHostname);
            console.log('Visit Details:', visitDetails);

            if (visitDetails) {
                electricityUsageElement.textContent = visitDetails.electricity.toFixed(6);
                carbonEmissionsElement.textContent = visitDetails.emissions.toFixed(2);
                ratingElement.textContent = visitDetails.rating;

            } else {
                //refresh page if no visit details are found
                console.log("No visit details found for this hostname.");
                ratingElement.textContent = "N/A";
                //do a fancy. then .. then ... in the text
                let dots = 0;
                const loadingAnimation = setInterval(() => {
                    dots = (dots + 1) % 4; // Cycle between 0, 1, 2, 3
                    const dotsText = ".".repeat(dots);
                    electricityUsageElement.textContent = dotsText;
                    carbonEmissionsElement.textContent = dotsText;
                    ratingElement.textContent = "N/A";
                }, 500);

                setTimeout(() => {
                    clearInterval(loadingAnimation);
                    window.location.reload();
                }, 2000); // Stop animation after 2 seconds
            }
        });

    });

});
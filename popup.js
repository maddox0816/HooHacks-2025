// popup.js

document.addEventListener("DOMContentLoaded", async function () {
    const electricityUsageElement = document.getElementById("electricity-usage");
    const carbonEmissionsElement = document.getElementById("carbon-emissions");
    const carbonRating = document.getElementById("carbon-rating-value")

    // Get the current active tab
    chrome.tabs.query({ active: true, currentWindow: true }, async function (tabs) {
        if (tabs.length === 0) return;
        const url = tabs[0].url; // Should directly use URL

        // URL in the console
        console.log("Current URL: " + url);

        //Encode URL for the API use
        const encodedUrl = encodeURIComponent(url);

        // Fetch CO2 emissions and kWh usage from Website Carbon API
        try {
            const response = await fetch(`https://api.websitecarbon.com/site?url=${url}`);
            const data = await response.json();

            // Log the full API response to the console
            console.log("API Response:", data);

            // Extract energy and CO2 data
            const energyKWh = data.statistics.energy; // Energy in kWh
            const co2Grams = data.statistics.co2.grid.grams; // CO2 in grams
            const carbonRatingValue = data.statistics.carbonRating;

            electricityUsageElement.textContent = (energyKWh * 1000).toFixed(10); // Convert to Wh
            carbonEmissionsElement.textContent = (co2Grams / 1000).toFixed(10); // Convert to kg
            carbonRating.textContent = carbonRatingValue;
        } catch (error) {
            console.error("Error fetching data:", error);
            electricityUsageElement.textContent = "Data unavailable";
            carbonEmissionsElement.textContent = "Data unavailable";
        }
    });
});

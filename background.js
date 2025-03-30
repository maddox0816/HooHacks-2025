// Listen for messages from the content script
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if( message.type === 'NEW_VISIT') {
        // Handle new visit message
        console.log('New visit:', message.hostname);
        let time = new Date().toISOString(); // Get current date and time in ISO format

        tempData = getURLDetails(message.hostname);
        //turn promise into values
        tempData.then((tempData) => {
            console.log("DATA ARRIVED!");
            console.log("Temp data:", tempData);
            let TempelectricityUsed = tempData[0]; // Get electricity used from the tempData array
            let TempemissionsCO2 = tempData[1]; // Get emissions from the tempData array
            let rating = tempData[2]; // Get rating from the tempData array
            let electricityUsed, emissionsCO2;
            
            if(TempelectricityUsed === "Data unavailable" || TempemissionsCO2 === "Data unavailable"){
                console.log("Data unavailable, not saving visit.");
                sendResponse({ status: 'error', message: 'Data unavailable' });
                return;
            }else{
                console.log("Data available, saving visit.");
            }

            //turn them back into numbers
            if(TempelectricityUsed !== "Data unavailable" && TempemissionsCO2 !== "Data unavailable"){
                console.log("Data available, converting to numbers.");
                electricityUsed = parseFloat(TempelectricityUsed);
                emissionsCO2 = parseFloat(TempemissionsCO2);
            }
            console.log("Electricity used:", electricityUsed);
            console.log("Emissions CO2:", emissionsCO2);
            
            
            //create a list of the hostname, seconds, emissions, electricity, and date
            let visitData = {
                date: time,
                electricity: electricityUsed,
                emissions: emissionsCO2,
                hostname: message.hostname,
                rating: rating,
            };


            console.log("Visit data to be saved:", visitData);

            //append to the list of lists in chrome.storage.local
            chrome.storage.local.get(['visits'], (result) => {
                let visits = result.visits || [];
                visits.push(visitData);
                console.log('Visits:', visits);

                // Save the updated visits back to local storage
                chrome.storage.local.set({ visits: visits }, () => {
                    console.log('Visits updated:', visits);
                    sendResponse({ status: 'success', data: visits });
                });
            });
        });
        
        return true;
    }
});

async function getURLDetails(url){
    let electricityUsage = 0;
    let carbonEmissions = 0;
    let rating = 'F'; // Default rating
    // URL in the console
    console.log("Current URL: " + url);

    //Encode URL for the API use
    const encodedUrl = encodeURIComponent(url);

    // Fetch CO2 emissions and kWh usage from Website Carbon API
    try {
        const response = await fetch(`https://api.websitecarbon.com/site?url=${encodedUrl}`);
        const data = await response.json();

        // Log the full API response to the console
        console.log("API Response:", data);

        // Extract data
        const energyKWh = data.statistics.energy; // Energy in kWh
        const co2Grams = data.statistics.co2.grid.grams; // CO2 in grams
        rating = data.rating; // Rating

        electricityUsage = (energyKWh * 1000).toFixed(10); // Convert to Wh
        carbonEmissions = (co2Grams ).toFixed(10);
    } catch (error) {
        console.error("Error fetching data:", error);
        electricityUsage = "Data unavailable";
        carbonEmissions = "Data unavailable";
        rating = "Data unavailable";
    }
    let data = [electricityUsage, carbonEmissions, rating];
    console.log("Data:", data);
    return data;
}
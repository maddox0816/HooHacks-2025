// Listen for messages from the content script
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if( message.type === 'NEW_VISIT') {
        // Handle new visit message
        console.log('New visit:', message.hostname, message.date);

        // Convert data size (bytes) to gigabytes (GB)
        let dataSizeInGB = message.dataSize / (1024 * 1024 * 1024); // Convert bytes to GB

        // Estimate electricity usage (kWh) based on data size
        let electricityUsed = 5 * dataSizeInGB; // 5 kWh per GB of data transferred

        // Calculate emissions based on electricity used
        let emissions = 0.3175 * electricityUsed; // kg CO2 (assuming 0.3175 kg CO2 per kWh)

        
        
        //create a list of the hostname, seconds, emissions, electricity, and date
        let visitData = {
            date: message.date,
            electricity: electricityUsed,
            emissions: emissions,
            hostname: message.hostname,
        };

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
        
    }
});
// Listen for messages from the content script
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if( message.type === 'NEW_VISIT') {
        // Handle new visit message
        console.log('New visit:', message.hostname, message.date);

        let electircityUsed = 0.6 * message.dataSize; // kWh
        // Example calculation for emissions based on electricity used
        let emissions = 0.3175 * electircityUsed; // kg CO2 (assuming 0.3175 kg CO2 per kWh)
        console.log('Electricity used:', electircityUsed, 'kWh');
        
        //create a list of the hostname, seconds, emissions, electricity, and date
        let visitData = {
            date: message.date,
            electricity: electircityUsed,
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
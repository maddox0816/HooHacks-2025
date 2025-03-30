const electricityUsageElement = document.getElementById("electricity-usage");
const carbonEmissionsElement = document.getElementById("carbon-emissions");
const avgAIkWh = 0.0025;
const avgAIcarbon = avgAIkWh * 369 // average carbon density for the united states in gCO2/kWh (2023 data)

function debugClick(){
    console.log("debuggingClicker start");
    document.addEventListener('click', function(event) {
            console.log('Event:', event);
            console.log('Target:', event.target); // Log the clicked element
            console.log('Target ID:', event.target.id); // Log the ID of the clicked element
            console.log('Target Class:', event.target.className); // Log the class of the clicked element
            console.log('Target Tag:', event.target.tagName); // Log the tag name of the clicked element
    });
    console.log("debuggingClicker end");
}


function addChatGPTListener() {
    console.log("Adding ChatGPT listener...");
    document.addEventListener('click', function(event) {
        const button = event.target.closest('[data-testid="send-button"]'); // Adjust the selector to match your button class
        if(button){
            console.log('Button clicked:', button); // Log the clicked button
            if(button.getAttribute('data-testid') === 'send-button'){
                console.log('ChatGPT button clicked!');
                var kWh = Number(electricityUsageElement);
                var carbon = Number(carbonEmissionsElement);
                kWh += avgAIkWh;
                carbon += avgAIcarbon;
                electricityUsageElement.textContent = avgAIkWh;
                carbonEmissionsElement.textContent = avgAIcarbon;
                
            }
        }
    });
}

function addGeminiListener() {
    console.log("Adding Gemini listener...");
    document.addEventListener('click', function(event) {
        const button = event.target.closest('[data-mat-icon-name="send"]'); // Adjust the selector to match your button class
        if(button){
            console.log('Button clicked:', button); // Log the clicked button
            if(button.getAttribute('data-mat-icon-name') === 'send'){
                console.log('Gemini button clicked!');
                alert('Gemini button clicked!');
            }
        }
    });
}

function addPerplexityListener() {
    console.log("Adding Perplexity listener...");
    document.addEventListener('click', function(event) {
        const button = event.target.closest('[aria-label="Submit"]'); // Adjust the selector to match your button class
        if(button){
            console.log('Button clicked:', button); // Log the clicked button
            if(button.getAttribute('aria-label') === 'Submit'){
                console.log('Perplexity button clicked!');
                alert('Perplexity button clicked!');
            }
        }
    });
}

function updatePopup(){
    
}

if(document.readyState === 'loading') {
    // Loading hasn't finished yet
    document.addEventListener('DOMContentLoaded', function() {
        console.log("DOM fully loaded and parsed");
        addChatGPTListener();
        addGeminiListener();
        addPerplexityListener();
    });
} else {
    addChatGPTListener();
    addGeminiListener();
    addPerplexityListener();
}
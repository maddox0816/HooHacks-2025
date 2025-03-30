function makeDrewHappy(){
    console.log("Drew is happy!");
    document.addEventListener('click', function(event) {
            console.log('Event:', event);
            console.log('Target:', event.target); // Log the clicked element
            console.log('Target ID:', event.target.id); // Log the ID of the clicked element
            console.log('Target Class:', event.target.className); // Log the class of the clicked element
            console.log('Target Tag:', event.target.tagName); // Log the tag name of the clicked element
    });
    console.log("Drew is happy!");
}


function addChatGPTListener() {
    console.log("Adding ChatGPT listener...");
    document.addEventListener('click', function(event) {
        const button = event.target.closest('[data-testid="send-button"]'); // Adjust the selector to match your button class
        if(button){
            console.log('Button clicked:', button); // Log the clicked button
            if(button.getAttribute('data-testid') === 'send-button'){
                console.log('ChatGPT button clicked!');
                alert('ChatGPT button clicked!');
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

if(document.readyState === 'loading') {
    // Loading hasn't finished yet
    document.addEventListener('DOMContentLoaded', function() {
        console.log("DOM fully loaded and parsed");
        makeDrewHappy();
        addChatGPTListener();
        addGeminiListener();
        addPerplexityListener();
    });
} else {
    makeDrewHappy();
    addChatGPTListener();
    addGeminiListener();
    addPerplexityListener();
}
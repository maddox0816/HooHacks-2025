console.log("Background script loaded and listening for messages.");
//wait for dom to load
function onDomLoaded(){
    console.log("DOM fully loaded");

    chrome.runtime.sendMessage({ type: 'LOADING' }, function(response) {
        console.log("Response from background script:", response);
    });

    //pass url to service worker to do its thing    

    chrome.runtime.sendMessage({ type: 'NEW_VISIT', hostname: window.location.hostname}, function(response) {
        console.log("Response from background script:", response);
        if(response.status === 'success'){
            console.log("Data saved successfully:", response.data);
        }else{
            console.log("Error saving data:", response.message);
        }
        chrome.runtime.sendMessage({ type: 'LOADED' }, function(response) {
            console.log("Response from background script:", response);
        });
    });
    
}




if(document.readyState === 'loading') {
    // Loading hasn't finished yet
    document.addEventListener('DOMContentLoaded', function() {
        console.log("DOM fully loaded and parsed");
        onDomLoaded();
    });
} else {

    onDomLoaded();
    console.log("DOM was already loaded, calling onDomLoaded directly.");
}


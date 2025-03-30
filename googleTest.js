console.log("Background script loaded and listening for messages.");
//wait for dom to load
function onDomLoaded(){
    console.log("DOM fully loaded");
    //get the size of data used to load the tab
    var dataSize = performance.getEntriesByType("navigation")[0].transferSize;
    console.log("Data size:", dataSize);

    chrome.runtime.sendMessage({ type: 'NEW_VISIT', hostname: window.location.hostname, date: new Date().toISOString(), dataSize: dataSize }, function (response) {
        console.log('Response from background script:', response);
    });
    

    console.log("Message sent to background script with dataSize:", dataSize);

}


if(document.readyState === 'loading') {
    // Loading hasn't finished yet
    document.addEventListener('DOMContentLoaded', function() {
        console.log("DOM fully loaded and parsed");
        onDomLoaded();
    });
} else {

    onDomLoaded();
}


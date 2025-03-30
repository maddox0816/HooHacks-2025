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




if(document.readyState === 'loading') {
    // Loading hasn't finished yet
    document.addEventListener('DOMContentLoaded', function() {
        console.log("DOM fully loaded and parsed");
        makeDrewHappy();
    });
} else {
    makeDrewHappy();
}
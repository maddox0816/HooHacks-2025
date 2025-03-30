// web.js
var userelectricityUsage = 0;
var usercarbonEmissions = 0;
document.addEventListener('DOMContentLoaded', function () {


    function updateComparisons(){
        document.getElementById("electricity-usage").textContent = "10";
    }


    // Begin by getting emmision and electricity usage data from the storage
    let emmisions = 0;
    let electricity = 0;
    //get visits from local storage
    chrome.storage.local.get(['visits'], (result) => {
        console.log('Visits:', result.visits);
        let visits = result.visits || [];

        // Loop through the visits and add up the emissions and electricity usage
        for (let i = 0; i < visits.length; i++) {
            emmisions += visits[i].emissions;
            electricity += visits[i].electricity;
        }
        //update global variables
        userelectricityUsage = electricity;
        usercarbonEmissions = emmisions;

        // Display the emissions and electricity usage in the popup
        document.getElementById('electricity-usage').textContent = electricity.toFixed(6);
        document.getElementById('carbon-emissions').textContent = emmisions.toFixed(6);
        //update comparisons
        calculateNumOfiPhoneCharges(electricity);
        calculateNumOfRegularGoogleCharges(electricity);
    })

    function calculateNumOfiPhoneCharges(electricityUsageElement) {
        console.log("Calculating number of iPhone charges...");
        console.log("Electricity used:", electricity);
        const iPhoneChargesElement = document.getElementById("iPhone-Charges");
        const numiPhoneChargesElement = electricityUsageElement / 0.0178.toFixed(2);


        //Display number of iPhone Charges
        document.getElementById('iPhone-Charges').textContent = numiPhoneChargesElement.toFixed(2);
    }

    function calculateNumOfRegularGoogleCharges(electricityUsageElement)
    {
        console.log("Calculating number of Regular Google Searches...");
        console.log("Electricity used:", electricity);
        const regGoogleSearchesid = document.getElementById("reg-google-searches");
        const numRegGoogleSearchesElement = electricityUsageElement / 0.0003.toFixed(6);

        //Display number of iPhone Charges
        document.getElementById('reg-google-searches').textContent = numRegGoogleSearchesElement.toFixed(6);
    }

});


// web.js
var userelectricityUsage = 0;
var usercarbonEmissions = 0;
document.addEventListener('DOMContentLoaded', function () {


    // Begin by getting emmision and electricity usage data from the storage
    let emissions = 0;
    let electricity = 0;
    //get visits from local storage
    chrome.storage.local.get(['visits'], (result) => {
        console.log('Visits:', result.visits);
        let visits = result.visits || [];

        // Loop through the visits and add up the emissions and electricity usage
        for (let i = 0; i < visits.length; i++) {
            emissions += visits[i].emissions;
            electricity += visits[i].electricity;
        }
        //update global variables
        userelectricityUsage = electricity;
        usercarbonEmissions = emissions;

        // Display the emissions and electricity usage in the popup
        document.getElementById('electricity-usage').textContent = electricity.toFixed(6);
        document.getElementById('carbon-emissions').textContent = emissions.toFixed(2);
        //update comparisons
        calculateNumOfiPhoneCharges(electricity);
        calculateNumOfRegularGoogleCharges(electricity);
    })

    function calculateNumOfiPhoneCharges(electricityUsageElement) {
        console.log("Calculating number of iPhone charges...");
        console.log("Electricity used:", electricityUsageElement);
        const numiPhoneChargesElement = electricityUsageElement * 0.0178;

        //Display number of iPhone Charges
        document.getElementById('iPhone-Charges').textContent = numiPhoneChargesElement.toFixed(2);
    }

    function calculateNumOfRegularGoogleCharges(electricityUsageElement)
    {
        console.log("Calculating number of Regular Google Searches...");
        console.log("Electricity used:", electricity);
        const regGoogleSearchesid = document.getElementById("reg-google-searches");
        const numRegGoogleSearchesElement = electricityUsageElement * 0.00003;

        //Display number of iPhone Charges
        document.getElementById('reg-google-searches').textContent = numRegGoogleSearchesElement.toFixed(2);
    }

});


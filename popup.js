// popup.js
var userelectricityUsage = 0;
var usercarbonEmissions = 0;
document.addEventListener('DOMContentLoaded', function () {
    // Add your popup logic here

    
    

    function updateComparisons(){
      document.getElementById("electricity-usage").textContent = "10";
    }

   //make button a link
    document.getElementById('emission-breakdown-button').addEventListener('click', function()
    {
        window.open('http://chatgpt.com', '_blank');
    });

    function getActiveTabURL(callback) {
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            if (tabs.length > 0) {
                callback(tabs[0].url);
            }
        })
    }

    async function checkGreenStatus(domain)  {
        // gather info from the api
        // register if domain is in database or not
        try {
            const response = await fetch(`https://api.thegreenwebfoundation.org/api/v3/greencheck/${domain}`);
            const data = await response.json();
            console.log("API Response", data);
            return data;
        }

        //Catch error if website not in API database
        catch (error) {
            console.error("Website not in database:", error);
            return null;
        }
    }

    //get and test the active tab URL
    getActiveTabURL((URL) => {
        console.log("Active Tab URL:", URL);
        const domain = new URL(URL).hostname; //Extract domain from the URL

        checkGreenStatus(domain).then((data) => {
            const resultElement = document.getElementById("result");

            if (data && data.green !== undefined) {
                const isGreen = data?.green ?? null; // If green is missing default to null
                // Conditional to determine if a website is green or not
                resultElement.textContent = isGreen === null
                    ? "⚠️ Green status is unidentifiable"
                    : isGreen
                    ? `✅ ${domain} is hosted on green energy`
                    : `❌ ${domain} is NOT hosted on green energy`;

            }

            else {
                resultElement.textContent = "⚠️ Green status is unidentifiable";
            }
        });

    })
  });
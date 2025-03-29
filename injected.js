// Injected script
window.postMessage({ type: "SAVE_DATA", data: "example data" }, "*");

// Content script
window.addEventListener("message", function(event) {
  if (event.source !== window || event.data.type !== "SAVE_DATA") return;
  chrome.runtime.sendMessage({ type: "SAVE_DATA", data: event.data.data });
});

// Background script
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.type === "SAVE_DATA") {
    chrome.storage.local.set({ key: request.data }, function() {
      console.log("Data saved!");
    });
  }
});

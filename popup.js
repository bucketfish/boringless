



chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    // Injects JavaScript code into a page
    // chrome.tabs.executeScript(tabs[0].id, { file: 'main.js' });

    // dd click handlers for buttons
    document.getElementById('enable-oversimulator').addEventListener('click', () => {

        chrome.tabs.sendMessage(tabs[0].id, {'showVideo': true});

    });


});

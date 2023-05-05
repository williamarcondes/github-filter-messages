chrome.action.onClicked.addListener((tab) => {
  if (tab.url.includes("github.com")) {
    chrome.scripting.executeScript({
      target: {tabId: tab.id},
      files: ['content.js']
    });
  }
});
function embiggen() {
  // the div the effects the size of the breakout room menu
  const theBox = document.querySelector(".R3Gmyc");

  // either increase the size or unset the inline style
  if (!theBox.classList.contains("bigboye")) {
    theBox.style.width = "98%";
    theBox.classList.add("bigboye");
  } else {
    theBox.style.width = "";
    theBox.classList.remove("bigboye");
  }
}

chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: embiggen,
  });
});

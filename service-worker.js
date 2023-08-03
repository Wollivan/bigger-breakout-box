function embiggen() {
  // the div the effects the size of the breakout room menu
  const theBox = document.querySelector(".R3Gmyc");
  const borBoxes = document.querySelectorAll(".fRqe8");

  // either increase the size or unset the inline style
  if (!theBox.classList.contains("bigboye")) {
    theBox.classList.add("bigboye");
    theBox.style.width = "98%";

    // make the breakout room boxes half size
    for (let i = 0; i < borBoxes.length; i++) {
      borBoxes[i].style.width = "48%";
      borBoxes[i].style.display = "inline-block";
    }
  } else {
    theBox.style.width = "";
    theBox.classList.remove("bigboye");
    for (let i = 0; i < borBoxes.length; i++) {
      borBoxes[i].style.width = "";
      borBoxes[i].style.display = "";
    }
  }
}

chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: embiggen,
  });
});

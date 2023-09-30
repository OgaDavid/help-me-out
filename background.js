// function injectControlPanel() {
//   const controlPanel = document.createElement("div");
//   controlPanel.id = "controlPanel";
//   controlPanel.className = "controlPanel";
//   controlPanel.style.position = "fixed";
//   controlPanel.style.bottom = "20px";
//   controlPanel.style.right = "20px";
//   controlPanel.style.zIndex = "9999";
//   controlPanel.style.display = "flex";
//   controlPanel.style.flexDirection = "column";
//   controlPanel.style.alignItems = "center";
//   controlPanel.style.justifyContent = "center";
//   controlPanel.style.backgroundColor = "black";
//   controlPanel.style.borderRadius = "5px";
//   controlPanel.style.padding = "10px";
//   controlPanel.style.boxShadow = "0 0 10px rgba(0,0,0,0.5)";
//   controlPanel.style.fontFamily = "sans-serif";
//   controlPanel.style.fontSize = "16px";
//   controlPanel.style.color = "white";
//   controlPanel.style.cursor = "pointer";
//   controlPanel.style.userSelect = "none";
//   controlPanel.style.msUserSelect = "none";
//   controlPanel.style.MozUserSelect = "none";
//   controlPanel.style.webkitUserDrag = "none";
//   controlPanel.style.webkitTapHighlightColor = "transparent";
//   controlPanel.style.webkitTouchCallout = "none";
//   controlPanel.style.outline = "none";
//   controlPanel.style.border = "none";
//   controlPanel.style.textAlign = "center";
//   controlPanel.style.textDecoration = "none";
//   // Add your control panel styles here
//   document.body.appendChild(controlPanel);
// }


chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === "complete" && /^http/.test(tab.url)) {
    chrome.scripting
      .executeScript({
        target: { tabId },
        files: ["./content.js"],
      })
      .then(() => {
        console.log("INJECTED content.js");
      })
      .catch((err) => console.log(err, "error injecting content.js"));
  }
  
});

chrome.action.onClicked.addListener(() => {
  const controlPanel = document.createElement("div");
  controlPanel.id = "controlPanel";
  controlPanel.className = "controlPanel";
  controlPanel.style.position = "fixed";
  controlPanel.style.bottom = "20px";
  controlPanel.style.right = "20px";
  controlPanel.style.zIndex = "9999";
  controlPanel.style.display = "flex";
  controlPanel.style.flexDirection = "column";
  controlPanel.style.alignItems = "center";
  controlPanel.style.justifyContent = "center";
  controlPanel.style.backgroundColor = "black";
  controlPanel.style.borderRadius = "5px";
  controlPanel.style.padding = "10px";
  controlPanel.style.boxShadow = "0 0 10px rgba(0,0,0,0.5)";
  controlPanel.style.fontFamily = "sans-serif";
  controlPanel.style.fontSize = "16px";
  controlPanel.style.color = "white";
  controlPanel.style.cursor = "pointer";
  controlPanel.style.userSelect = "none";
  controlPanel.style.msUserSelect = "none";
  controlPanel.style.MozUserSelect = "none";
  controlPanel.style.webkitUserDrag = "none";
  controlPanel.style.webkitTapHighlightColor = "transparent";
  controlPanel.style.webkitTouchCallout = "none";
  controlPanel.style.outline = "none";
  controlPanel.style.border = "none";
  controlPanel.style.textAlign = "center";
  controlPanel.style.textDecoration = "none";
  // Add your control panel styles here
  document.body.appendChild(controlPanel);
});
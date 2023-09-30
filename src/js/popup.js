document.addEventListener("DOMContentLoaded", () => {
  const closeButton = document.querySelector("img#closeBtn");
  const startRecordingButton = document.querySelector(
    "button#startRecordingBtn"
  );
  const stopRecordingButton = document.querySelector("button#stopRecordingBtn");

  closeButton.addEventListener("click", () => {
    window.close();
  });

  // adding event listeners

  startRecordingButton.addEventListener("click", () => {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(
        tabs[0].id,
        { action: "start_recording" },
        function (response) {
          if (!chrome.runtime.lastError) {
            console.log(response);
          } else {
            console.log(chrome.runtime.lastError, "error line 17");
          }
        }
      );
    });
  });

  stopRecordingButton.addEventListener("click", () => {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(
        tabs[0].id,
        { action: "stop_recording" },
        function (response) {
          if (!chrome.runtime.lastError) {
            console.log(response);
          } else {
            console.log(chrome.runtime.lastError, "error line 27");
          }
        }
      );
    });
  });
});

console.log("hello from content.js");

var recorder = null;
function recordingApproved(stream) {
  recorder = new MediaRecorder(stream);

  recorder.start();

  recorder.onStop = function () {
    stream.getTracks().forEach(function (track) {
      if (track.readyState == "live" && track.kind === "video") {
        track.stop();
      }
    });
  };

  recorder.ondataavailable = function (blob) {
    let recorderBlob = blob.data;
    let url = URL.createObjectURL(recorderBlob);

    let a = document.createElement("a");

    a.href = url;

    a.style.display = "none";

    a.download = "screen-recording.webm";

    document.body.appendChild(a);

    a.click();

    document.body.removeChild(a);

    URL.revokeObjectURL(url);
  };
}


chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "start_recording") {
    console.log("start recording");

    sendResponse(`processed: ${message.action}`);

    navigator.mediaDevices
      .getDisplayMedia({
        audio: true,
        video: {
          width: 9999999,
          height: 9999999,
        },
      })
      .then((stream) => {
        recordingApproved(stream);
      });
  }

  if (message.action === "stop_recording") {
    console.log("stop recording");

    sendResponse(`processed: ${message.action}`);

    if (!recorder) {
      return console.log("no recorder");
    }

    recorder.stop();
  }
});

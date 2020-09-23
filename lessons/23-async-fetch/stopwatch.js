// Existing DOM elements
const stopwatchContainer = document.querySelector("#stopwatch");

let stopwatchState = "STOPPED";
let timerId;

const startTimer = (updateDisplayCallback) => {
  let timerValue = 0;
  stopwatchState = "COUNTING";
  timerId = setInterval(() => {
    timerValue += 10;
    updateDisplayCallback(timerValue);
  }, 10);
};

const stopTimer = () => {
  clearInterval(timerId);
  stopwatchState = "STOPPED";
};

const addControls = () => {
  const startButton = document.createElement("button");
  startButton.innerText = "START";
  const stopButton = document.createElement("button");
  stopButton.innerText = "stop";

  const timerDisplay = document.createElement("p");
  timerDisplay.innerText = "00:00";

  stopwatchContainer.append(timerDisplay, startButton, stopButton);

  startButton.addEventListener("click", () => {
    if (stopwatchState === "STOPPED")
      startTimer((timerValue) => {
        timerDisplay.innerText = timerValue.toString();
      });
  });

  stopButton.addEventListener("click", () => {
    if (stopwatchState === "COUNTING") {
      stopTimer();
    }
  });
};

addControls();

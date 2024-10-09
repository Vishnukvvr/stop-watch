let timer;
let isRunning = false;
let seconds = 0;
let minutes = 0;
let hours = 0;

const h1 = document.querySelector("h1");
const playButton = document.querySelector(".bi-play-circle-fill");
const stopButton = document.querySelector(".bi-stop-circle");
const resetButton = document.querySelector(".bi-arrow-clockwise");

function startTimer() {
  if (!isRunning) {
    isRunning = true;
    timer = setInterval(() => {
      seconds++;
      if (seconds == 60) {
        seconds = 0;
        minutes++;
      }
      if (minutes == 60) {
        minutes = 0;
        hours++;
      }
      h1.textContent = `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
    }, 1000);
  }
}

function stopTimer() {
  clearInterval(timer);
  isRunning = false;
}

function resetTimer() {
  clearInterval(timer);
  isRunning = false;
  seconds = 0;
  minutes = 0;
  hours = 0;
  h1.textContent = "00:00:00";
}

playButton.addEventListener("click", startTimer);
stopButton.addEventListener("click", stopTimer);
resetButton.addEventListener("click", resetTimer);

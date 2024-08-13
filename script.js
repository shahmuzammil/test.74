let hours = 0;
let minutes = 0;
let seconds = 0;
let intervalId = null;
let isRunning = false;

const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');
const startButton = document.getElementById('start-button');
const resetButton = document.getElementById('reset-button');

startButton.addEventListener('click', startStopwatch);
resetButton.addEventListener('click', resetStopwatch);

function startStopwatch() {
  if (!isRunning) {
    intervalId = setInterval(updateTime, 1000);
    isRunning = true;
    startButton.textContent = 'Stop';
  } else {
    clearInterval(intervalId);
    isRunning = false;
    startButton.textContent = 'Start';
  }
}

function resetStopwatch() {
  hours = 0;
  minutes = 0;
  seconds = 0;
  hoursElement.textContent = '00';
  minutesElement.textContent = '00';
  secondsElement.textContent = '00';
  clearInterval(intervalId);
  isRunning = false;
  startButton.textContent = 'Start';
}

function updateTime() {
  seconds++;
  if (seconds === 60) {
    minutes++;
    seconds = 0;
  }
  if (minutes === 60) {
    hours++;
    minutes = 0;
  }
  hoursElement.textContent = pad(hours);
  minutesElement.textContent = pad(minutes);
  secondsElement.textContent = pad(seconds);
}

function pad(number) {
  return (number < 10 ? '0' : '') + number;
}
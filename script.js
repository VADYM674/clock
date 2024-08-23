const timeDisplay = document.querySelector("#timeDisplay");
const startBtn = document.querySelector("#startBtn");
const resetBtn = document.querySelector("#resetBtn");
const pauseBtn = document.querySelector("#pauseBtn");

let startTime = 0;
let elapsedtime = 0;
let currenttime = 0;
let paused = true;
let intervaliid;
let hrs = 0;
let mins = 0;
let secs = 0;

startBtn.addEventListener("click", () => {
  if (paused) {
    paused = false;
    startTime = Date.now() - elapsedtime;
    intervaliid = setInterval(updatetime, 1000);
  }
});

pauseBtn.addEventListener("click", () => {
  if (!paused) {
    paused = true;
    elapsedtime = Date.now() - startTime;
    clearInterval(intervaliid);
  }
});

resetBtn.addEventListener("click", () => {
  paused = true;
  clearInterval(intervaliid);
  startTime = 0;
  elapsedtime = 0;
  hrs = 0;
  mins = 0;
  secs = 0;
  timeDisplay.textContent = "00:00:00";
});

function updatetime() {
  elapsedtime = Date.now() - startTime;

  secs = Math.floor((elapsedtime / 1000) % 60);
  mins = Math.floor((elapsedtime / (1000 * 60)) % 60);
  hrs = Math.floor((elapsedtime / (1000 * 60 * 60)) % 24);

  secs = pad(secs);
  mins = pad(mins);
  hrs = pad(hrs);

  timeDisplay.textContent = `${hrs}:${mins}:${secs}`;

  function pad(unit) {
    return ("0" + unit).slice(-2);
  }
}

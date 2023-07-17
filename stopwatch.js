const circle = document.querySelector('.circle');
const dot = document.querySelector('.dot');
const timerDisplaySec = document.getElementById('seconds');
const timerDisplaySecc = document.getElementById('secc');
const timerDisplayMin = document.getElementById('minutes');
const timerDisplayMinn = document.getElementById('minn');
const timerDisplayHour = document.getElementById('hours');
const timerDisplayHourr = document.getElementById('hourr');
const timerDisplaymilli = document.getElementById('milliseconds');
const ResetTimer = document.getElementById('timer');
const timerDisplaylap = document.getElementById('lap');
const resetdisplay = document.getElementById('list');

let timerInterval;
let angle = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;
let milliseconds = 0;
let active = false;
let lap = 0;
let minn = 0;
let secc = 0;
let hourr = 0;

function startTimer() {
  console.log("start");
  if (!timerInterval) {
    timerInterval = setInterval(updateTimer, 10);
  }
}

function resetTimer() {
  console.log("reset");
  clearInterval(timerInterval);
  timerInterval = null;
  seconds = 0;
  minutes = 0;
  hours = 0;
  milliseconds = 0;
  lap = 0;

  timerDisplaySec.textContent = '0';
  timerDisplaySecc.style.display = 'inline-block';
  timerDisplayMin.textContent = '0';
  timerDisplayMinn.style.display = 'inline-block';
  timerDisplayHour.textContent = '0';
  timerDisplaymilli.textContent = '00';
  resetdisplay.innerHTML = '';
}

function stopTimer() {
  console.log("stop");
  clearInterval(timerInterval);
  timerInterval = null;
}

function updateTimer() {
 milliseconds += 1;
  timerDisplaymilli.textContent = milliseconds;
  
  if (milliseconds >= 100) {
    milliseconds = 0;
    seconds += 1;
  }
  
  timerDisplaySec.textContent = seconds;
  
  if (seconds > 9) {
    timerDisplaySecc.style.display = "none";
  }
  
  if (seconds >= 60) {
    seconds = 0;
    timerDisplaySec.textContent = '0';
    timerDisplaySecc.style.display = "inline-block";
    minutes += 1;
  }
  timerDisplayMin.textContent = minutes;

   if (minutes > 9) {
    timerDisplayMinn.style.display = "none";
  }
  if(minutes>59){
    minutes=0;
        hours+=1;
  }

  if (hours > 9) {
    timerDisplayHourr.style.display = "none";
  }
}

function deleteItem(event) {
  const item = event.target.closest('li');
  if (item) {
    item.remove();
  }
}

function lapping() {
  const li = document.createElement('li');
  const lapObject = {
    lap: lap++,
    hours,
    hourr,
    minutes,
    minn,
    secc,
    seconds,
    milliseconds
  };
  console.log('lap' + lap);

  if (seconds < 9) {
    li.innerHTML = `
    <label for="lapObject">Lap ${lapObject.lap}</label>
    <span>${lapObject.hourr}${lapObject.hours}:${lapObject.minn}${lapObject.minutes}:${lapObject.secc}${lapObject.seconds}.${lapObject.milliseconds}</span>
    <i class="fa-regular fa-trash-can delete"></i>
  `;
    resetdisplay.appendChild(li);
  } else if (seconds >= 10) {
    li.innerHTML = `
    <label for="lapObject">Lap ${lapObject.lap}</label>
    <span>${lapObject.hourr}${lapObject.hours}:${lapObject.minn}${lapObject.minutes}:${lapObject.seconds}.${lapObject.milliseconds}</span>
    <i class="fa-regular fa-trash-can delete"></i>
  `;
    resetdisplay.appendChild(li);
  }

  li.querySelector('.delete').addEventListener('click', deleteItem);
}

document.getElementById('start').addEventListener('click', startTimer);
document.getElementById('stop').addEventListener('click', stopTimer);
document.getElementById('reset').addEventListener('click', resetTimer);
document.getElementById('lap').addEventListener('click', lapping);

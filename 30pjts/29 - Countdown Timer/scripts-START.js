const timerDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('[data-time]');
let countdown;

function timer(seconds) {
  // clear any exiksting timers
  clearInterval(countdown);

  const now = Date.now();
  const then = now + seconds * 1000; // to match with now's number
  displayTimeLeft(seconds);
  displayEndTime(then);

  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000); // const now is captured when it ran, so we need to use Date.now() again
    if (secondsLeft < 0) {
      clearInterval(countdown);
      return;
    }
    displayTimeLeft(secondsLeft)
  }, 1000);
}

function displayTimeLeft(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainderSeconds = seconds % 60;
  const display = `${minutes}:${remainderSeconds < 10 ? '0' + remainderSeconds : remainderSeconds}`;
  document.title = display;
  timerDisplay.textContent = display;
}

function displayEndTime(timestamp) {
  const end = new Date(timestamp);
  const hour = end.getHours();
  const minute = end.getMinutes();
  endTime.textContent = `Be Back At ${hour > 12 ? hour - 12 : hour}:${minute < 10 ? '0' + minute : minute}`;
}

function startTimer(e) {
  let seconds;
  if (this.dataset.time) seconds = parseInt(this.dataset.time);
  else {
    e.preventDefault();
    seconds = (this.minutes.value) * 60;
    this.reset();
  }
  timer(seconds);
}


buttons.forEach(button => button.addEventListener('click', startTimer));
document.customForm.addEventListener('submit', startTimer);
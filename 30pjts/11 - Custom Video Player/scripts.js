const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipBtns = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

function togglePlay() {
  const method = video.paused ? 'play' : 'pause';
  video[method]();
}

function updateButton() {
  const icon = this.paused ? '▶️' : '⏸️';
  toggle.textContent = icon;
}

function skip() {
  video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate() {
  video[this.name] = this.value;
}

function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}
[video, toggle].forEach(el => el.addEventListener('click', togglePlay));
video.addEventListener('timeupdate', handleProgress);
['play', 'pause'].forEach(evt => video.addEventListener(evt, updateButton));
skipBtns.forEach(btn => btn.addEventListener('click', skip));
ranges.forEach(range => {
  ['change', 'mousemove'].forEach(evt => {
    range.addEventListener(evt, handleRangeUpdate);
  })
});
let mousedown = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => { mousedown && scrub(e) });
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);
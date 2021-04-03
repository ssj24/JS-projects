const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const image4 = document.getElementById('image4');
const textBox = document.getElementById('text-box');

// Dark or Light Images
function imageMode(mode) {
  image1.src = `img/undraw_online_resume_${mode}.svg`;
  image2.src = `img/undraw_Calendar_${mode}.svg`;
  image3.src = `img/undraw_Co_workers_${mode}.svg`;
  image4.src = `img/undraw_Reading_${mode}.svg`;
}

// Dark or Light css
function switchStyle(theme) {
  const mode = (theme === 'dark') ? true : false;
  nav.style.backgroundColor = mode ? 'rgb(0 0 0 / 50%)' : 'rgb(255 255 255 / 50%)';
  textBox.style.backgroundColor = mode ? 'rgb(255 255 255 / 50%)' : 'rgb(0 0 0 / 50%)';
  toggleIcon.children[0].textContent = mode ? 'Dark Mode' : 'Light Mode';
  mode ? toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon') : toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
}

// Switch Theme Dynamically
function switchTheme(event) {
  const mode = event.target.checked ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', mode);
  localStorage.setItem('theme', mode);
  switchStyle(mode);
  imageMode(mode);
};

// Event Listener
toggleSwitch.addEventListener('change', switchTheme);

// Check Local Storage For Theme
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
  document.documentElement.setAttribute('data-theme', currentTheme);
  if (currentTheme === 'dark') {
    toggleSwitch.checked = true;
    switchStyle(currentTheme);
    imageMode(currentTheme);
  }
}
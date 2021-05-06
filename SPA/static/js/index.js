import nav from './views/nav.js';
import mole from './views/whackAMole.js';

const gamesContent = document.getElementById('gamesContent');
const features = document.getElementById('features');
const featuresTitle = document.querySelector('.add_shadow');
const walk = 50;

function router(e) {
  let hash = window.location.hash.slice(1);
  switch (hash) {
    case 'mole':
      gamesContent.innerHTML = mole.generateHtml();
      break;
  
    default:
      break;
  }
}

function shadow(e) {
  const { offsetWidth: width, offsetHeight: height } = features;
  let { offsetX: x, offsetY: y } = e;

  if (this !== e.target) {
    x = x + e.target.offsetLeft;
    y = y + e.target.offsetTop;
  }
  const xWalk = Math.round((x / width * walk) - (walk / 2));
  const yWalk = Math.round((y / height * walk) - (walk / 2));

  featuresTitle.style.textShadow = `
    ${xWalk}px ${yWalk}px 0 rgba(255, 204, 0, 0.3),
    ${xWalk * -1}px ${yWalk}px 0 rgba(82, 203, 255, 0.3),
    ${yWalk}px ${xWalk - 1}px 0 rgba(255, 29, 255, 0.3),
    ${yWalk * -1}px ${xWalk}px 0 rgba(3, 43, 18, 0.3)
  `;
}

window.addEventListener('hashchange', router);
window.addEventListener('load', router);
features.addEventListener('mousemove', shadow);

nav();
mole.load();

import nav from './views/nav.js';
import mole from './views/whackAMole.js';

const gamesContent = document.getElementById('gamesContent');



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

window.addEventListener('hashchange', router);

window.addEventListener('load', router);

nav();
mole.load();

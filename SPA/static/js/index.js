import nav from './views/nav.js';
import paint from './views/paint.js';
import Error404 from './views/error.js';
nav();

const routes = {
  '/paint' : paint,
};

const router = async () => {
  const content = null || document.getElementById('content');
  let request = Utils.parseRequestURL()

  let parsedURL = (request.resource ? '/' + request.resource : '/') + (request.id ? '/:id' : '');

  let page = routes[parsedURL] ? routes[parsedURL] : Error404
  content.innerHTML = await Error404.render();
  // content.innerHTML = await page.render();
  // await page.after_render();
}

window.addEventListener('hashchange', router);

window.addEventListener('load', router);
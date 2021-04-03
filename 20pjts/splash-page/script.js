const { body } = document;

function changeBackground(number) {
  // Check if background already showing
  if (body.className === `background-${number}`) {
    body.className = '';
    return;
  };
  body.className = '';
  body.classList.add(`background-${number}`);
}
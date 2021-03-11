const button = document.getElementById('button');
const audioElement = document.getElementById('audio');

// Disable/Enable Button
function toggleButton() {
  button.disabled = !button.disabled;
};

// Passing Joke to VoiceRSS API
function tellMe(joke) {
  const jokeString = joke.trim().replace(/ /g, '%20');
  VoiceRSS.speech({
    key: '<API_KEY></API_KEY>',
    src: joke,
    hl: 'en-us',
    r: 0, 
    c: 'mp3',
    f: '44khz_16bit_stereo',
    ssml: false
  });
};

// Get Jokes from Joke API
async function getJokes() {
  let joke = '';
  const apiUrl = 'https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit';
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    if (data.setup) { // It means the joke is twopart
      joke = `${data.setup} ... ${data.delivery}`;
    } else { // otherwise, it's a single
      joke = data.joke;
    }
    // Text-to-Speech
    tellMe(joke);
    // Disable Button
    toggleButton();
  } catch (error) {
    console.log('oops', error);
  }
};

// Event Listeners
button.addEventListener('click', getJokes);
audioElement.addEventListener('ended', toggleButton);
class WhackAMole {
  _holes = document.querySelectorAll('.hole');
  _scoreBoard = document.querySelector('.score');
  moles = document.querySelectorAll('.mole');
  _timeUP = true;
  _lastHole;
  _score = 0;

  randomTime(min, max) {
    return Math.round(Math.random() * (max - min) + min);
  }
  
  randomHole(holes) {
    const idx = Math.floor(Math.random() * holes.length);
    const hole = holes[idx];
    if (hole === lastHole) {
      return randomHole(holes);
    }
    lastHole = hole;
    return hole;
  }
  
  peep() {
    const time = randomTime(200, 1000);
    const hole = randomHole(holes);
    hole.classList.add('up');
    setTimeout(() => {
      hole.classList.remove('up');
      if (!timeUp) peep();
    }, time);
  }
  
  startGame() {
    score = 0;
    scoreBoard.textContent = 0;
    timeUp = false;
    peep();
    setTimeout(() => {
      timeUp = true;
    }, 10000)
  }
  
  bonk(e) {
    if (!e.isTrusted) return; // cheated
    score++;
    scoreBoard.textContent = score;
    this.parentNode.classList.remove('up');
  }
  
  generateHtml() {
    return `
      <div class="whackAMole">
        <h1>Whack-a-mole! <span class="score">0</span></h1>
        <button id="startButton">Start!</button>
      
        <div class="game">
          <div class="hole hole1">
            <div class="mole"></div>
          </div>
          <div class="hole hole2">
            <div class="mole"></div>
          </div>
          <div class="hole hole3">
            <div class="mole"></div>
          </div>
          <div class="hole hole4">
            <div class="mole"></div>
          </div>
          <div class="hole hole5">
            <div class="mole"></div>
          </div>
          <div class="hole hole6">
            <div class="mole"></div>
          </div>
        </div>
      </div>
    `;
  }
  load(){
    moles.forEach(mole => mole.addEventListener('click', bonk));
    document.getElementById('startButton').addEventListener('click', startGame);
  }
}

export default new WhackAMole();



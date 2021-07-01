const colorCode = document.querySelector("h1");
const newBtn = document.getElementById("new");
const elements = document.querySelector(".wrapper").querySelectorAll("div");
const scoreEl = document.getElementById("scoreNum");
let scoreNum = 0;
scoreEl.innerText = scoreNum;
let answer;

function changeColor() {
    let a;
    let b;
    let c;
    elements.forEach(el => {
        el.classList.remove("wrong");
        a = getRandomNum(0, 255);
        b = getRandomNum(0, 255);
        c = a - b >= 0 ? a - b : Math.abs(a - b);
        el.style.background = `rgb(${a}, ${b}, ${c})`;
    })
    let randomNum = getRandomNum(0, 5);
    colorCode.innerText = elements[randomNum].style.backgroundColor;
}
function getRandomNum(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max-min + 1) + min);
}
function guessColor() {
    const clicked = event.target.style.backgroundColor;
    if (colorCode.innerText == clicked) {
        scoreNum++;
        scoreEl.innerText = scoreNum;
        changeColor();
    }
    else event.target.classList.add("wrong");
}

window.addEventListener("load", changeColor);
newBtn.addEventListener("click", changeColor);
elements.forEach(el => el.addEventListener("click", guessColor))
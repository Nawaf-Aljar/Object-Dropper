/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/

let timer
let score = 0
let winner = false
let gameOver = false

let characterPosition = 160
let fallingSpeed = 1
let fallingInterval
let objectInterval

/*------------------------ Cached Element References ------------------------*/

const buttonElement = document.querySelector("#button")
const displayMessageElement = document.querySelector(".display")
const gameAreaElement = document.querySelector(".game")
const characterElement = document.getElementById("character")
const fallingElement = document.getElementById("fallingObject")

/*-------------------------------- Functions --------------------------------*/
function startGame() {
    characterElement.classList.remove("hidden")
    fallingElement.classList.remove("hidden")
    fallingElement.style.left = Math.random() * 370 + 'px';
    fallingElement.style.top = '0px'
    fallingInterval = setInterval(moveObject, fallingSpeed);
    
}

function moveObject() {
    let objectTop = parseInt(fallingElement.style.top);
    objectTop += fallingSpeed;
    fallingElement.style.top = objectTop + 'px';
    if (objectTop > 570 && objectTop < 600 && 
        parseInt(fallingElement.style.left) > characterPosition - 30 && 
        parseInt(fallingElement.style.left) < characterPosition + 80) {
        score++;
        displayMessageElement.innerText = 'Score: ' + score;
        resetObject();
    }
    if (objectTop > 600) {
        resetObject();
    }
}
function resetObject() {
    fallingElement.style.top = '0px';
    fallingElement.style.left = Math.random() * 370 + 'px';
}
function checkGameOver(){

}
function checkForWinner(){

}
/*----------------------------- Event Listeners -----------------------------*/
document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft' && characterPosition > 0) {
        characterPosition -= 20;
        characterElement.style.left = characterPosition + 'px';
    } else if (event.key === 'ArrowRight' && characterPosition < 320) {
        characterPosition += 20;
        characterElement.style.left = characterPosition + 'px';
    }
});
buttonElement.addEventListener("click",startGame)


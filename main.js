
const startGame = document.querySelector(".game-start");
const gameBox = document.querySelector(".game-container");
const selectionBox = document.querySelector("#theme");
const buttonOpenSelection = document.querySelector(".chang-theme");
const prettyPara = document.querySelector(".ordem");
let randomNumber = Math.floor(Math.random() * 100) + 1;
const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const hint = document.querySelector('.hint');
const enviarInput = document.querySelector('.enviarInput');
const campoInput = document.querySelector('.campoInput');
let turno = 1;
let resetButton;

guesses.style["display"] ="none";
lastResult.style["display"] ="none";
hint.style["display"] ="none";

startGame.addEventListener("click", function() {
  gameBox.style["display"] = "flex";
  startGame.style["display"] = "none";

})

function verificarResposta() {
    lastResult.style["display"] ="block";
    hint.style["display"] ="block";
    guesses.style["display"] = "block";
    let userGuess = Number(campoInput.value);
    if (turno === 1) {
      guesses.textContent = 'Sugestões anteriores: ';
      document.getElementById("campoInput").style["background-color"] = "white";
    }
    guesses.textContent += userGuess + ' ';
  
    if (userGuess === randomNumber) {
      lastResult.textContent = 'Você é o bixão mermo hein doido';
      lastResult.style.backgroundColor = 'green';
      hint.textContent = '';
      document.getElementById("hint").style["display"] ="none";
      setGameOver();
    } else if (turno === 10) {
      lastResult.textContent = 'Você perdeu :(';
      lastResult.style.backgroundColor = 'red';
      document.getElementById("hint").style["display"] ="block";
      hint.textContent = 'O número era: ' + randomNumber;
      setGameOver();
    } else {
      lastResult.textContent = 'Errou!';
      lastResult.style.backgroundColor = 'orange';
      if(userGuess < randomNumber) {
        hint.textContent = 'Número pequeno';
      } else if(userGuess > randomNumber) {
        hint.textContent = 'Número grande';
      }
    }
  
    turno++;
    campoInput.value = '';
    campoInput.focus();
}

function setGameOver() {
    campoInput.disabled = true;
    enviarInput.disabled = true;
    resetButton = document.createElement('p');
    resetButton.textContent = 'Começar outro jogo';
    document.getElementById("game-start").style["display"] ="flex";
    document.getElementById("game-start").style["color"] ="black";
    document.getElementById("game-start").appendChild(resetButton);
    resetButton.addEventListener('click', resetGame);
    prettyPara.textContent = ""
    gameBox.style["filter"] = "brightness(80%)";
}

function resetGame() {
    turno = 1;
    const resetTextContent = document.querySelectorAll('.game-itself p');

    for (let i = 0 ; i < resetTextContent.length ; i++) {
        resetTextContent[i].textContent = '';
    }
    
    resetButton.parentNode.removeChild(resetButton);
    document.getElementById("game-start").style["display"] ="none";
    lastResult.style.backgroundColor = 'black';

    hint.style["display"] ="none";
    guesses.style["display"] ="none";
    lastResult.style["display"] ="none";

    campoInput.disabled = false;
    enviarInput.disabled = false;
    campoInput.value = '';
    campoInput.focus();
    prettyPara.textContent = "Dê um palpite: "
    gameBox.style["filter"] = "brightness(100%)";
    randomNumber = Math.floor(Math.random() * 100) + 1;
    turno++
    guesses.textContent = 'Sugestões anteriores: ';
}

enviarInput.addEventListener("click", verificarResposta)

const selectOption = document.querySelector('select');
const allC = document.querySelector('.all-content');
const html = document.querySelector("html")
const apresentation = document.querySelector(".apresentation")

function update(boxColor, bgColor, textColor, especial, buttonB, buttonC) {
  allC.style.backgroundColor = bgColor;
  allC.style.color = textColor;
  html.style.backgroundColor = bgColor;
  apresentation.style.color = textColor;
  apresentation.style.backgroundColor = especial;
  startGame.style.backgroundColor = buttonB;
  startGame.style.color = buttonC;
  gameBox.style.backgroundColor = boxColor;
  prettyPara.style.color = textColor;
}

selectOption.onchange = function() {
  (selectOption.value === "black") ? update("rgb(0, 26, 102)","rgb(26, 0, 51)","white", "gray", "rgb(102, 0, 0)", "white") : update("rgb(255, 219, 77)","rgb(230, 255, 230)","black", "white", "rgb(102, 255, 204)", "black");
}

buttonOpenSelection.addEventListener("click", function(){
  selectionBox.style["display"]="block";
  buttonOpenSelection.style["display"]="none";
})
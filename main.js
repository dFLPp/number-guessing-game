
const startGame = document.querySelector(".game-start");
const gameBox = document.querySelector(".game-container");
const selectionBox = document.querySelector("#theme");
const buttonOpenSelection = document.querySelector(".chang-theme");

startGame.addEventListener("click", function() {
    gameBox.style["display"] = "flex";
    startGame.style["display"] = "none";
    if(selectionBox.style["display"]==="block"){
      selectionBox.style["display"]="none"
    }
    //buttonOpenSelection.style["display"] = "none";
})

let randomNumber = Math.floor(Math.random() * 100) + 1;

const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const hint = document.querySelector('.hint');

const enviarInput = document.querySelector('.enviarInput');
const campoInput = document.querySelector('.campoInput');

let turno = 1;
let resetButton;

function verificarResposta() {
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
      hint.textContent = '';
      document.getElementById("hint").style["display"] ="none";
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
    document.getElementById("hint").style["display"] ="flex";
    campoInput.disabled = false;
    enviarInput.disabled = false;
    campoInput.value = '';
    campoInput.focus();
  
    randomNumber = Math.floor(Math.random() * 100) + 1;
    turno++
}

enviarInput.addEventListener("click", verificarResposta)

const selectOption = document.querySelector('select');
const allC = document.querySelector('.all-content');
const html = document.querySelector("html")
const apresentation = document.querySelector(".apresentation")

function update(bgColor, textColor, especial, buttonB, buttonC) {
  allC.style.backgroundColor = bgColor;
  allC.style.color = textColor;
  html.style.backgroundColor = bgColor;
  apresentation.style.color = textColor;
  apresentation.style.backgroundColor = especial;
  startGame.style.backgroundColor = buttonB;
  startGame.style.color = buttonC;
}

selectOption.onchange = function() {
  (selectOption.value === "black") ? update("rgb(26, 0, 51)","white", "gray", "rgb(102, 0, 0)", "white") : update("rgb(230, 255, 230)","black", "white", "rgb(102, 255, 204)", "black");
}

buttonOpenSelection.addEventListener("click", function(){
  selectionBox.style["display"]="block";
  buttonOpenSelection.style["display"]="none";
})
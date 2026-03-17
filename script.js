const input = document.getElementById("guessInput");
const guessButton = document.getElementById("guessBtn");
const message = document.getElementById("message");
const attemptsText = document.getElementById("attempts");
const resetButton = document.getElementById("resetBtn");
const intentosAnteriores = document.getElementById("intentosAnteriores");

let secretNumber = Math.floor(Math.random() * 100);
let attempts = 0;
let listaIntentos = [];

input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") guessButton.click();
});

guessButton.addEventListener("click", function checkGuess() {

  const guess = input.value;

  if (guess < 0 || guess > 100 || guess == "") {

    message.innerText = "Ingresa un número entre 0 y 100"

  }
  else {
    attempts += 1;
    let listaIntentosString = "";

    attemptsText.innerText = attempts;

    if (guess == secretNumber) {
      message.innerText = "¡Ganaste!"
      resetButton.click();
    }

    else if (guess < secretNumber) {
      message.innerText = "El número es mayor";
    }

    else if (guess > secretNumber) {
      message.innerText = "El número es menor";
    };

    listaIntentos.push(guess);

    for(i = 0; i < listaIntentos.length; i++){
      if(i == listaIntentos.length - 1){
        listaIntentosString += listaIntentos[i];
      }
      else{
        listaIntentosString += listaIntentos[i] + ", ";
      }
    };

    intentosAnteriores.innerText = listaIntentosString;
  }
});

resetButton.addEventListener("click", function restartNumber() {
  listaIntentos = [];
  secretNumber = Math.floor(Math.random() * 100);
  attempts = 0;
  attemptsText.innerText = 0;
  input.value = ""
});
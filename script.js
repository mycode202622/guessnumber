let randomNumber = Math.floor(Math.random()*100) +1
// let randomNumber = 10;

const guessfield = document.querySelector(".guessfield");
const guessSubmit = document.querySelector(".guess-submit");
const guesses = document.querySelector(".guesses");
const lastResult = document.querySelector(".last-result");
const lowOrHigh = document.querySelector(".low-or-high");

let guessCount = 1;
const limit = 10
// const limit = 3;

guessfield.focus();

function checkGuess() {
  // console.log(randomNumber);
  console.log(guessfield.value);

  const userGuess = Number(guessfield.value);
  if (guessCount === 1) {
    guesses.textContent = "Попередні спроби : ";
  }
  guesses.textContent = guesses.textContent + userGuess + " ";

  if (randomNumber === userGuess) {
    // console.log("Числа однакові. Перемога");
    lastResult.textContent = "Числа однакові. Перемога";
    lastResult.style.backgroundColor = "green";
    lastResult.style.color = "white";
    lowOrHigh.textContent = "";
    setGameOver();
  } else if (guessCount === limit) {
    lastResult.textContent = "Гру закінчено";
    lastResult.style.backgroundColor = "red";
    lastResult.style.color = "white";
    lowOrHigh.textContent = "";
    setGameOver();
  } else {
    lastResult.textContent = "Не вірно";
    lastResult.style.backgroundColor = "orange";
    lastResult.style.color = "white";
    if (userGuess > randomNumber) {
      // console.log("Число більше");
      lowOrHigh.textContent = "Ваше число більше загаданного";
    } else if (userGuess < randomNumber) {
      // console.log("Число меньше");
      lowOrHigh.textContent = "Ваше число меньше загаданного";
    }
  }

  guessCount++;
  guessfield.value = "";
  guessfield.focus();
}

guessSubmit.addEventListener("click", checkGuess);

function setGameOver() {
  guessfield.disabled = true;
  guessSubmit.disabled = true;

  const resetButton = document.createElement("button");
  resetButton.textContent = "Почати нову гру";
  resetButton.addEventListener("click",resetGame);
  resetButton.id = "resetButton"
  document.body.appendChild(resetButton);
}

function resetGame() {
  // console.log("Скинути параметри");
  randomNumber = Math.floor(Math.random()*100) +1
  // randomNumber = 11
  guessCount = 1
  // guesses.textContent = ""
  // lastResult.textContent = ""
  // lowOrHigh.textContent = ""
const resultParams = [guesses,lastResult,lowOrHigh]
resultParams.forEach((param)=>{
  param.textContent = ""
})

  guessfield.disabled = false
  guessSubmit.disabled = false
  const resetButton = document.querySelector("#resetButton")
  resetButton.remove()
  guessfield.focus()
}


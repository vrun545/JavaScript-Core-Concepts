const body = document.body;
const form = document.querySelector(".form");
const container = document.querySelector(".container");
const input = document.querySelector("#input");
const lives = document.querySelector("#chances");
const result = document.querySelector("#result");
let resultList = [];
const randomNumber = randomNumberGenerator();
let chances = 5;
const resetButton = document.querySelector("#reset");
const submitButton = document.querySelector("#submit");


function randomNumberGenerator() {
    return Math.floor(Math.random()*100);
}


resetButton.addEventListener("click", function () {
    window.location.href = window.location.href;
});


form.addEventListener("submit", function (e) {
  e.preventDefault();
  const num = parseInt(input.value);
  console.log(randomNumber, num);
  if (chances > 0) {
    if (num === randomNumber) {
      result.innerHTML = `You Won. You Guessed It Right.`;
      result.style.color = "red";
      lives.innerHTML = "<b>Congratulations !!!</b>";
      lives.style.color = "red";
      chances -= 1;
    } else {
      resultList.push(num);
      result.innerHTML = `Previous Guesses are: <span>${resultList}</span>`;
      chances -= 1;
      lives.innerHTML = `<b>You Have ${chances} Chances Left</b>`;
    }
    if (chances == 0 && num !== randomNumber) {
      result.remove();
        submitButton.disabled = true;
      lives.innerHTML =
        "<b>Ooops !!!&nbsp; You Lose</b><br/><br/><b>Better Luck Next Time</b>";
      lives.style.color = "red";
    }
  }
});

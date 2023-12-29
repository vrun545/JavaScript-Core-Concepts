const body = document.body;
const button = document.querySelector("button");
const height = document.querySelector("#height");
const weight = document.querySelector("#weight");
const innerConatiner = document.querySelector(".container-inside");

const calculateBMI = () => {
  let value1 = height.value;
  const value2 = weight.value;
  value1 = value1 / 100;

  // Remove existing result if any
  const existingResult = innerConatiner.querySelector("p");
  if (existingResult) {
    existingResult.remove();
  }

  // Create and append the new result
  if (value1 === "" || value1 < 0 || isNaN(value1)) {
    const result = document.createElement("p");
    result.innerHTML = `<b>Please give a Valid height ${value1}</b>`;
  } else if (value2 === "" || value2 < 0 || isNaN(value2)) {
    const result = document.createElement("p");
    result.innerHTML = `<b>Please give a Valid weight ${value2}</b>`;
  } else {
    const BMI = (value2 / (value1 ** 2)).toFixed(3);
    const result = document.createElement("p");
    result.innerHTML = `<b>Your BMI is: ${BMI}</b>`;
    innerConatiner.appendChild(result);
  }
};

button.addEventListener("click", calculateBMI);

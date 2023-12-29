// Getting Elements
const body = document.body;
const blueButton = document.querySelector(".blue");
console.log(blueButton);
const yellowButton = document.querySelector(".yellow");
const whiteButton = document.querySelector(".white");
redButton = document.querySelector(".red");


// DOM Manipulation
const blue = function() {
    body.style.backgroundColor = "blue";
}

const yellow = function() {
    body.style.backgroundColor = "yellow";
}

const white = function() {
    body.style.backgroundColor = "white";
} 

const red = function() {
    body.style.backgroundColor = "red";
}


//  Event Listeners
blueButton.addEventListener("click", blue);

yellowButton.addEventListener("click", yellow);

whiteButton.addEventListener("click", white);

redButton.addEventListener("click", red);
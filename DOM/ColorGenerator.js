// Select Body of WebPage
const body = document.body;

const intervalId = setInterval( ()=> {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    const rgb = `rgb(${red},${green},${blue})`;
    body.style.background = rgb;
}, 500);


// Stop Button
const button = document.querySelector("button");

button.addEventListener("click", () => {
    clearInterval(intervalId);
    button.textContent = body.style.background;
})
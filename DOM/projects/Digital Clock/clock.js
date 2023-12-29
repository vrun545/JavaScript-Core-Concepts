const clock = document.getElementById("clock")

setInterval(()=> {
    let time = new Date().toLocaleTimeString();
    clock.textContent = time;
}, 1000)
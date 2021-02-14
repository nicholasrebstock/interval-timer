
let audio = new Audio("sound.wav");

let startButton = document.getElementById("startButton")
let interval
startButton.addEventListener('click', function() {
    clearInterval(interval)
    audio.play();
    interval = setInterval(function(){ audio.play(); }, 3000);
    stopButton.style.backgroundColor = "lightgrey"
    startButton.style.backgroundColor = "lightgreen"
});
let stopButton = document.getElementById("stopButton")
stopButton.addEventListener('click', function() {
    clearInterval(interval)
    stopButton.style.backgroundColor = "lightgreen"
    startButton.style.backgroundColor = "lightgrey"
});
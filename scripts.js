// Get elements by Id and assign to variables

let seconds = 00;
let tens = 00;
let appendTens = document.getElementById('tens');
let appendSeconds = document.getElementById('seconds');
let buttonStart = document.getElementById('button-start');
let buttonStop = document.getElementById('button-stop');
let buttonReset = document.getElementById('button-reset');
let Interval = 0;

// Define event when Start button is clicked

buttonStart.addEventListener('click', function(event){
    clearInterval(Interval);
    Interval = setInterval(startTimer, 10);
});

// Define event when Stop button is clicked

buttonStop.addEventListener('click', function(event){
    clearInterval(Interval);
});

// Define event when Reset button is clicked

buttonReset.addEventListener('click', function(event) {
    clearInterval(Interval);
    tens = "00";
    seconds = "00";
    appendTens.innerHTML = tens;
    appendSeconds.innerHTML = seconds;
});

// Define function to start timer

function startTimer() {

    tens++;

    if(tens <= 9) {
        appendTens.innerHTML = "0" + tens;
    }

    if (tens > 9) {
        appendTens.innerHTML = tens;
    }

    if (tens > 99) {
        seconds++;
        appendSeconds.innerHTML = "0" + seconds;
        tens = 0;
        appendTens.innerHTML = "0" + 0;
    }

    if (seconds > 9) {
        appendSeconds.innerHTML = seconds;
    }
};


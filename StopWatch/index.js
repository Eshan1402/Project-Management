let isRunning = false;

const display = document.getElementById('display');
const toggleButton = document.getElementById('toggle');
const resetButton = document.getElementById('reset');

let startTime = 0;
let intervalId;
let time = 0;

function updateDisplay(){
    display.textContent = formatTime(time);
}

function formatTime(time){
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function toggleTimer(){
    if(!isRunning){
        startTime = Date.now() - (time * 1000);
        intervalId = setInterval(()=>{
            time = Math.floor((Date.now() - startTime) / 1000);
            updateDisplay();
        }, 1000);
        toggleButton.textContent = 'Stop';
    } else {
        clearInterval(intervalId);
        toggleButton.textContent = 'Start';
    }
    isRunning = !isRunning;
}

function resetTimer(){
    clearInterval(intervalId);
    isRunning = false;
    startTime = 0;
    time = 0;
    updateDisplay();
    toggleButton.textContent = 'Start';
}

toggleButton.addEventListener('click', toggleTimer);
resetButton.addEventListener('click', resetTimer);


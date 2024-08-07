let timerInterval;
let elapsedTime = 0;  // The number of seconds elapsed

function startTimer() {
    const timerElement = document.getElementById('timer');

    // Clear the previous interval
    clearInterval(timerInterval);

    // Update the timer every second
    timerInterval = setInterval(function() {
        elapsedTime++;
        timerElement.textContent = 'Elapsed Time: ' + elapsedTime;
    }, 1000);
}

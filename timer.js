var currentQuestionIndex = 0;
var timer;

function startQuiz() {
    // Here you can add the code to start the quiz, such as showing the first question, etc.
    console.log('Quiz started');
    startTimer();
}

function startTimer() {
    var timeLeft = 30; // 30 seconds for each question

    // Update the timer every second
    timer = setInterval(function() {
        console.log(timeLeft + ' seconds left');
        timeLeft--;

        // When time is up, move to the next question
        if (timeLeft < 0) {
            clearInterval(timer);
            console.log('Time is up!');
            currentQuestionIndex++;
            // Here you can add the code to show the next question, such as showQuestion(currentQuestionIndex);
            startTimer();
        }
    }, 1000);
}

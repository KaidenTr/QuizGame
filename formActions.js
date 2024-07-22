document.getElementById('quiz-form').addEventListener('submit', function(event) {
    event.preventDefault();

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;

    // You can add more actions here, such as validating the form data, saving the data to a database, etc.

    console.log('Form submitted by: ' + name);
    console.log('Email: ' + email);

    // After form actions are complete, start the quiz
    startQuiz();
});

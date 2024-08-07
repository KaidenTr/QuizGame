function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

    const Questions = [
        {
            question: "What does S.H.I.E.L.D. stand for?",
            options: ["Strategic Homeland Intervention, Enforcement and Logistics Division.", "Some Hydra In Every Level, Damnit!","Stone heist in Endgame. Loki disappears", "Super Heroes In Every Level Dishonest"],
            answer: "Strategic Homeland Intervention, Enforcement and Logistics Division."
        },
        {
            question: "Sharon Carter is whose great-niece?",
            options: ["Pepper", "Peggy", "Diana"],
            answer: "Peggy"
        },
        {
            question: "Who was responsible for King T'Chaka's death?",
            options: ["Zen","Zemo","Zeke"],
            answer: "Zemo"
        },
        {
            question: "Wanda and her brother Pietro are from where",
            options: ["Sokovia","America"],
            answer: "Sokovia"
        },
        {
            question: "Pepper Potts is allergic to what?",
            options: ["fish", "pollen", "strawberries","nuts"],
            answer: "strawberries"
        },
        {
            question: "Pym Particles were created by who?",
            options: ["Hank","Jim","Peter"],
            answer: "Hank"
        },
        {
            question: "What's the name of the amulet Doctor Strange wears around his neck?",
            options: ["Just cool amulet", "The Eye of Agmotto", "The Eye"],
            answer: "The Eye of Agmotto"
        },
        {
            question: "Scott Lang was trapped in the Quantum Realm for how long?",
            options: ["Five Years", "Three Years", "Ten Years", "A Year"],
            answer: "Five Years"
        },
        {
            question: "What does TVA stand for?",
            options: ["Tic Verm Author", "Time Variance Authority", "Tennessee Valley Authority"],
            answer: "Time Variance Authority"
        },
        {
            question: "What's Mordo's full name?",
            options: ["Kal", "Kyle", "Karl", "Tim"],
            answer:  "Karl"
        },
        {
            question: "Who is the alter ego of Captain America?",
            options: ["Tony Stark", "Bruce Banner", "Steve Rogers", "Peter Parker"],
            answer:  "Steve Rogers"
        },
        {
            question: "Which planet is Thor originally from?",
            options: ["Earth", "Krypton", "Asgard", "Mars"],
            answer:  "Asgard"
        },
        {
            question: "What is the real name of Iron Man?",
            options: ["Clint Barton", "Tony Stark", "Steve Rogers", "Bruce Wayne"],
            answer:  "Tony Stark"
        },
        {
            question: "What is the name of the king and protector of Wakanda, also known as the Black Panther?",
            options: ["T-Challa", "Erik Killmonger", "M-Baku", "N-Jadaka"],
            answer:  "T-Challa"
        },
        {
            question: "Who is the green giant superhero in the Avengers team?",
            options: ["The Thing", "Hulk", "Groot", "Green Lantern"],
            answer:  "Hulk"
        },
        {
            question: "What is the name of the Marvel superheroine who can manipulate reality, also known as Wanda Maximoff?",
            options: ["Black Widow", "Scarlet Witch", "Jean Grey", "Mystique"],
            answer:  "Scarlet Witch"
        },
        {
            question: "Who is the Marvel superhero that can shrink and communicate with ants?",
            options: ["Spider-Man", "Ant-Man", "The Wasp", "Black Widow"],
            answer:  "Ant-Man"
        },
        {
            question: "Which Marvel superhero uses a suit of armor that grants superhuman strength, flight, and an array of weapons, and is a genius inventor?",
            options: ["Batman", "Iron Man", "Cyborg", "The Punisher"],
            answer:  "Iron Man"
        },
        {
            question: "Who is the Marvel superhero that was transformed into a super-soldier by a serum during World War II?",
            options: ["Wolverine", "Captain America", "The Punisher", "Deadpool"],
            answer:  "Captain America"
        },
        {
            question: "What is the name of the Marvel superhero who is a master of the mystic arts?",
            options: ["Doctor Strange", "Doctor Doom", "Doctor Fate", "Doctor Octopus"],
            answer:  "Doctor Strange"
        },
        //Add more questions here make sure it looks like the others
    ];

    function initQuiz() {
        if (currentQuestionIndex >= totalQuestions) {
            finishQuiz();
            return;
        }
    
        // Clear the GIF container
        const gifContainer = document.getElementById('gif-container');
        gifContainer.innerHTML = '';
    
        const currentQuestion = Questions[currentQuestionIndex];
    
        document.getElementById('questionText').textContent = currentQuestion.question;
    
        const optionsContainer = document.getElementById('options');
        optionsContainer.innerHTML = '';
    
        currentQuestion.options.forEach(option => {
            const optionElement = document.createElement('div');
            optionElement.classList.add('option');
            optionElement.textContent = option;
    
            optionElement.addEventListener('click', function() {
                document.querySelectorAll('.option').forEach(opt => opt.classList.remove('selected'));
                optionElement.classList.add('selected');
            });
    
            optionsContainer.appendChild(optionElement);
        });
    
        optionsContainer.dataset.answer = currentQuestion.answer;
        document.getElementById('progress').textContent = `Question ${currentQuestionIndex + 1}/${totalQuestions}`;
        startTimer();

        document.getElementById('submit-answer').style.display = 'block';
    }



let score = 0;
let currentQuestionIndex = 0;
const totalQuestions = 20;

shuffle(Questions);


const correctGifs = [
    'https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExZzd0MW9ta2MyNjE4aGhpaXlhNHloN3p4azVsNHBzbHZ5NHp0bWJ0YSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/A7Gpt39kH5sAg/200.gif',
    'https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExcXcyajNrZGRvY2llNjI4ZHF6N3dnZDQwMjdvYXhnOGtjMnZvcHcyeCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/SX6AoXlEp2ri2IM9Fr/giphy.gif',
    'https://media1.tenor.com/m/gqQaC_QM5i4AAAAC/captain-america-america.gif'
];

const incorrectGifs = [
    'https://media1.tenor.com/m/NTm1flBIAVMAAAAC/mcu-loki.gif',
    'https://media1.tenor.com/m/N4CS9Sjw_1IAAAAd/sad-spiderman.gif',
    'https://media1.tenor.com/m/yU4shJCkdKsAAAAC/thanos-sorry.gif'
];

function getRandomGif(gifs) {
    const randomIndex = Math.floor(Math.random() * gifs.length);
    return gifs[randomIndex];
}


function Answer() {
    const selectedOption = document.querySelector('.option.selected');
    if (!selectedOption) {
        document.getElementById('result').textContent = 'Please select an answer!';
        document.getElementById('result').className = '';  // Remove any existing classes
        document.getElementById('result').style.display = 'block';
        return;
    }

    const selectedAnswer = selectedOption.textContent;
    const correctAnswer = document.getElementById('options').dataset.answer;

    const correctSound = document.getElementById('correct-sound');
    const incorrectSound = document.getElementById('incorrect-sound');

    const gifContainer = document.getElementById('gif-container');
    gifContainer.innerHTML = '';  // Clear any existing GIF

        // Hide the submit button after clicking
    document.getElementById('submit-answer').style.display = 'none';

    if (selectedAnswer === correctAnswer) {
        score++;

        document.getElementById('result').textContent = 'Correct!';
        document.getElementById('result').className = 'correct';  // Add the correct class
        document.body.classList.add('correct-effect');  // Add the correct effect
        correctSound.play();  // Play correct sound

        const gif = document.createElement('img');
        gif.src = getRandomGif(correctGifs);
        gifContainer.appendChild(gif);


    } else {
        document.getElementById('result').textContent = 'Incorrect. The correct answer is: ' + correctAnswer;
        document.getElementById('result').className = 'incorrect';  // Add the incorrect class
        document.body.classList.add('incorrect-effect');  // Add the incorrect effect
        incorrectSound.play();  // Play incorrect sound

        const gif = document.createElement('img');
        gif.src = getRandomGif(incorrectGifs);
        gifContainer.appendChild(gif);

    }

    document.getElementById('result').style.display = 'block';
    document.getElementById('next-button').style.display = 'block';
    document.getElementById('score').textContent = 'Score: ' + score;  // Update the score display
    // Hide the submit button after clicking
    document.getElementById('submit-answer').style.display = 'none';

    // Remove the effect class after the animation ends
    setTimeout(() => {
        document.body.classList.remove('correct-effect', 'incorrect-effect');
    }, 500);  // Match the duration of the animation
}

function nextQuestion() {
    document.getElementById('result').style.display = 'none';
    document.getElementById('next-button').style.display = 'none';
    currentQuestionIndex++;
    initQuiz();
}


function finishQuiz() {
    clearInterval(timerInterval);  // Stop the timer
    window.location.href = `result.html?score=${score}&time=${elapsedTime}`;
}

document.addEventListener('DOMContentLoaded', function() {
    initQuiz();
});

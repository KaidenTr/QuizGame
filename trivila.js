    const Questions = [
        {
            question: "What does S.H.I.E.L.D. stand for?",
            options: ["Strategic Homeland Intervention, Enforcement and Logistics Division.", "Some Hydra In Every Level, Damnit!","Stone heist in Endgame. Loki disappears", "Super Heroes In Every Level Dishonest"],
            answer: "Strategic Homeland Intervention, Enforcement and Logistics Division."
        },
        {
            question: "Sharon Carter is whose great-niece?",
            options: ["Pepper", "Peggy", "Diana",""],
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

    const randomIndex = Math.floor(Math.random() * Questions.length);
    const currentQuestion = Questions[randomIndex];

    document.getElementById('questionText').textContent = currentQuestion.question;

    const optionsContainer = document.getElementById('options');
    optionsContainer.innerHTML = '';

    currentQuestion.options.forEach(option => {
        const optionElement = document.createElement('div');
        optionElement.classList.add('option');
        optionElement.textContent = option;
        optionsContainer.appendChild(optionElement);
    });

    optionsContainer.dataset.answer = currentQuestion.answer;
}

function Answer() {
    const selectedOption = document.querySelector('.option.selected');
    if (!selectedOption) {
        alert('Please select an answer!');
        return;
    }

    const selectedAnswer = selectedOption.textContent;
    const correctAnswer = document.getElementById('options').dataset.answer;

    if (selectedAnswer === correctAnswer) {
        alert('Correct!');
        initQuiz();
    } else {
        alert('Incorrect. The correct answer is: ' + correctAnswer);
        initQuiz();
    }
}

document.addEventListener('click', function(e) {
    if (e.target && e.target.classList.contains('option')) {

        const options = document.querySelectorAll('.option');
        options.forEach(option => option.classList.remove('selected'));

        e.target.classList.add('selected');
    }
});

document.addEventListener('DOMContentLoaded', function() {
    initQuiz();
});

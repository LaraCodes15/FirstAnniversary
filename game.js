const quizQuestions = [
    {
        question: "What is my favourite colour?",
        options: ["White", "Yellow", "Green", "Red"],
        correctAnswer: "Green"
    },
    {
        question: "What is the colour of my eyes?",
        options: ["Brown", "Green", "Blue"],
        correctAnswer: "Blue"
    },
    {
        question: "Where was I born?",
        options: ["Ludwigsburg", "Ludwigshafen", "Ludwigsfelde", "Ludwigslust"],
        correctAnswer: "Ludwigsfelde"
    },
    {
        question: "What is my favourite dish?",
        options: ["Pizza", "Ramen", "Pasta", "Thai Curry"],
        correctAnswer: "Ramen"
    },
    {
        question: "Which pet have I never owned?",
        options: ["Rabbit", "Hamster", "Dog", "Cat"],
        correctAnswer: "Cat"
    },
    {
        question: "Which one is my favourite holiday?",
        options: ["Christmas", "Halloween", "Eastern", "Thanksgiving"],
        correctAnswer: "Halloween"
        },
    {
        question: "Which crystal have I bought on the flea market to help with our rough patch?",
        options: ["Aventurine", "Rose Quartz", "Labradorite", "Tiger Eye"],
        correctAnswer: "Tiger Eye"
    },
    {
        question: "What was my dream job as a child?",
        options: ["Professional swimmer", "Veterinarian", "Being in the navy like my dad", "Fire Fighter"],
        correctAnswer: "Veterinarian"
    },
    {
        question: "Which instrument have I never played?",
        options: ["Piano", "Flute", "Xylophon", "Guitar"],
        correctAnswer: "Guitar"
    },
    {
        question: "Am I the best girlfriend that could ever exist?",
        options: ["Yes", "No"],
        correctAnswer: "Yes"
    },

];

const quizContainer = document.getElementById('quiz-container');
const questionContainer = document.getElementById('question-container');
const optionsContainer = document.getElementById('options-container');
const nextButton = document.getElementById('next-button');

let currentQuestionIndex = 0;
let userScore = 0;

// ... (previous code)

function startQuiz() {
    showQuestion();
}

function showQuestion() {
    const currentQuestion = quizQuestions[currentQuestionIndex];
    questionContainer.textContent = currentQuestion.question;
    optionsContainer.innerHTML = '';

    currentQuestion.options.forEach((option, index) => {
        const optionButton = document.createElement('button');
        optionButton.textContent = option;
        optionButton.addEventListener('click', handleOptionClick);
        optionButton.addEventListener('touchend', handleOptionClick);
        optionsContainer.appendChild(optionButton);
    });
}

function handleOptionClick(event) {
    const selectedOption = event.target.textContent;
    const correctAnswer = quizQuestions[currentQuestionIndex].correctAnswer;

    if (selectedOption === correctAnswer) {
        userScore++;
    }

    if (currentQuestionIndex < quizQuestions.length - 1) {
        currentQuestionIndex++;
        showQuestion();
    } else {
        endQuiz();
    }
}

function endQuiz() {
    quizContainer.innerHTML = `<h2>Your Score: ${userScore} out of ${quizQuestions.length}</h2>`;
    nextButton.style.display = 'none';

    const additionalSentenceContainer = document.createElement('div');
    additionalSentenceContainer.style.marginTop = '20px';
    additionalSentenceContainer.style.color = '#555';
    quizContainer.appendChild(additionalSentenceContainer);

    if (userScore <= 5) {
        additionalSentenceContainer.textContent = "Seems like we have to be together forever as you have to learn a lot more about me...😉 😘";
    } else {
        additionalSentenceContainer.textContent = "You know me well, I love you! 🥰";
    }
}

nextButton.addEventListener('click', showQuestion);
nextButton.addEventListener('touchend', showQuestion);

// Start the quiz
startQuiz();

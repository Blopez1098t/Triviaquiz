const questions = [
    {
        question: "Who is considered the Father of Relativity?",
        answers: [
            { text: "Issac Newton", correct: false},
            { text: "Albert Einstien", correct: true},
            { text: "Mogilski", correct: false},
            { text: "Shawn Mendez", correct: false},
        ]
    },
    {
        question: "In what year was the first iPhone released?",
        answers: [
            { text: "2005", correct: false},
            { text: "2006", correct: false},
            { text: "2007", correct: true},
            { text: "2010", correct: false},
        ]
    },
    {
        question: "Which planet is known as the Red Planet?",
        answers: [
            { text: "Venus", correct: false},
            { text: "Mars", correct: true},
            { text: "Jupiter", correct: false},
            { text: "Neptune", correct: false},
        ]
    },
    {
        question: "What is the national bird of the United States?",
        answers: [
            { text: "Eagle", correct: true},
            { text: "Bald Eagle", correct: false},
            { text: "Condor", correct: false},
            { text: "Pigeon", correct: false},
        ]
    },
    {
        question: "What does NASA stand for?",
        answers: [
            { text: "North American Satellite Association", correct: false},
            { text: "National American Space Association", correct: false},
            { text: "National Association of Space Astronauts", correct: false},
            { text: "North American Satellite Association", correct: true},
        ]
    },
    {
        question: "What is the capital city of Canada??",
        answers: [
            { text: "Vancouver", correct: false},
            { text: "Toronto", correct: false},
            { text: "Quebec City", correct: false},
            { text: "Ottawa ", correct: true},
        ]
    },
    {
        question: "What is the strongest muscle in the human body",
        answers: [
            { text: "Tongue", correct: false},
            { text: "Quadriceps", correct: false},
            { text: "Heart", correct: false},
            { text: "Jaw Muscle", correct: true},
        ]
    },
    {
        question: "What is the smallest country in the world?",
        answers: [
            { text: "Monaco", correct: false},
            { text: "Vatican City", correct: true},
            { text: "Peru", correct: false},
            { text: "Malta", correct: false},
        ]
    },
    {
        question: "What does WWW stand for?",
        answers: [
            { text: "World Wide Web", correct: true},
            { text: "World Web Warriors", correct: false},
            { text: "Wide World Web", correct: false},
            { text: "Web Wide World", correct: false},
        ]
    },
    {
        question: "What is the world's largest desert?",
        answers: [
            { text: "Mojave", correct: false},
            { text: "Siberian Desert", correct: false},
            { text: "Sahara", correct: false},
            { text: "Antarctic Desert", correct: true},
        ]
    },
];

const questionElement = document.getElementById('question');
const answerButtons = document.getElementById('answer-buttons');
const nextButton = document.getElementById('submit-btn');

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestions();
}

function showQuestions(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.
    question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerHTML = answer.text;
        button.classList.add('btn');
        answerButtons.appendChild(button);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

startQuiz();

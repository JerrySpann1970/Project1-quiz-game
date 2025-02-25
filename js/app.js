/*-------------------------------- Constants --------------------------------*/
const winnings = [100, 200, 300, 500, 1000,
                  2000, 4000, 8000, 16000, 32000,
                  64000, 125000, 250000, 500000, 1000000]

const testQuestions = [
    {
        question: 'What is the name of the MCDonalds kids meal?',

        a: 'Happy Meal',
        b: 'The Fry Guy',
        c: 'Lunch Time Meal',
        d: 'Unhealthy',

        correct: 'Happy Meal'
    },

    {
        question: 'What color is the sky?',

        a: 'Red',
        b: 'Yellow',
        c: 'Light-blue',
        d: 'Depends on the weather',

        correct: 'Depends on the weather'
    },

    {
        question: 'How many cards are there in a standard deck of playing cards?',

        a: 'Forty-five',
        b: 'Fifty-two',
        c: 'Thirteen',
        d: 'Four',

        correct: 'Fifty-two'
    },
];

const openingAudio = new Audio('./audio/opening.mp3')
const wrongAnswer = new Audio('./audio/wrongAnswer.mp3')
const correctAnswer = new Audio('./audio/correctAnswer.mp3')

/*-------------------------------- Variables --------------------------------*/
let score = 0
let count = 0
let currentQuestion;
let finalWinnings
let potentialWinnings
let guarenteedWinnings

/*------------------------ Cached Element References ------------------------*/

let scoreDisplay = document.getElementById('finalWinnings');
const question = document.querySelector('#questionContainer p');
const answersA = document.getElementById('answerA');
const answersB = document.getElementById('answerB');
const answersC = document.getElementById('answerC');
const answersD = document.getElementById('answerD');

/*-------------------------------- Functions --------------------------------*/


function questionAnswer() {
    let random = Math.floor(Math.random() * testQuestions.length)
    let randomQuestion = testQuestions[random]

    return randomQuestion
}

function updateDisplay(randomQuestion) {

    question.innerHTML = randomQuestion.question;

    answersA.innerHTML = `${randomQuestion.a}`
    answersB.innerHTML = `${randomQuestion.b}`
    answersC.innerHTML = `${randomQuestion.c}`
    answersD.innerHTML = `${randomQuestion.d}`
}

function handleChoice(event) {
    let choice = event.target.textContent
    let correctAnswer = currentQuestion.correct

    if (choice == correctAnswer) {
        score = winnings[count]
        count++;
        console.log(count)
        scoreDisplay.innerHTML = `Game Over. Final Winnings ${score}`
        nextQuestion()

    }
    else {
        wrongAnswer.play();
        
    }
}

function nextQuestion() {
    correctAnswer.play();
    currentQuestion = questionAnswer();
    updateDisplay(currentQuestion);
   
   
}

function init() {
    openingAudio.play();
    currentQuestion = questionAnswer();
    updateDisplay(currentQuestion);
}

function showWinnings(potentialWinnings) {
    potentialWinnings = finalWinnings
}
 

init()



/*----------------------------- Event Listeners -----------------------------*/

// document.getElementById('answerContainer').addEventListener('click', handleChoice)

answersA.addEventListener('click', handleChoice)
answersB.addEventListener('click', handleChoice)
answersC.addEventListener('click', handleChoice)
answersD.addEventListener('click', handleChoice)
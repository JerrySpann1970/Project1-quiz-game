/*-------------------------------- Constants --------------------------------*/
const winnings = [100, 200, 300, 500, 1000,
    2000, 4000, 8000, 16000, 32000,
    64000, 125000, 250000, 500000, 1000000]

const testQuestions = [
    {
        question: 'What is the name of the MCDonalds kids meal?',

        a: 'A: Happy Meal',
        b: 'B: The Fry Guy',
        c: 'C: Lunch Time Meal',
        d: 'D: Unhealthy',

        correct: 'A: Happy Meal'
    },

    {
        question: 'What color is the sky?',

        a: 'A: Red',
        b: 'B: Yellow',
        c: 'C: Light-blue',
        d: 'D: Green',

        correct: 'C: Light-blue'
    },

    {
        question: 'How many cards are there in a standard deck of playing cards?',

        a: 'A: Forty-five',
        b: 'B: Fifty-two',
        c: 'C: Thirteen',
        d: 'D: Four',

        correct: 'B: Fifty-two'
    },
    {
        question: 'What is the funciton of the &#60;p&#62; element in the HTML language?',

        a: 'A: Create a heading',
        b: 'B: Start a list',
        c: 'C: Create a paragraph',
        d: 'D: Print the page',

        correct: 'C: Create a paragraph'
    },

    {
        question: 'Who invented the Linux operating system',

        a: 'A: Elon Musk',
        b: 'B: Linus Torvald',
        c: 'C: Bill Gates',
        d: 'D: Stanley Miller',

        correct: 'B: Linus Torvald'
    },



];

const openingAudio = new Audio('./audio/opening.mp3');
const wrongAnswer = new Audio('./audio/wrongAnswer.mp3');
const correctAnswer = new Audio('./audio/correctAnswer.mp3');
const inGameMusic = new Audio('./audio/gameMusic.mp3')
/*-------------------------------- Variables --------------------------------*/

let score = 0;
let count = 0;
let currentQuestion;
let guarenteedWinnings = 0;

/*------------------------ Cached Element References ------------------------*/

let winningMessage = document.getElementById('WinnersMessage');
let scoreDisplay = document.getElementById('finalWinnings');
let winningsDisplay = document.getElementById('scoring');
let endGameMessage = document.getElementById('resultsScreen');
let finalMessage = document.getElementById('resultsMessage')
let startBtn = document.querySelector(".start-game-btn");
const endGameScreen = document.getElementById('hidden');
const question = document.querySelector('#questionContainer p');
const answersA = document.getElementById('answerA');
const answersB = document.getElementById('answerB');
const answersC = document.getElementById('answerC');
const answersD = document.getElementById('answerD');



/*-------------------------------- Functions --------------------------------*/



function questionAnswer() {
    let random;
    let randomQuestion
    let num = 0;
    while (num < 15) {
        random = Math.floor(Math.random() * testQuestions.length)
        randomQuestion = testQuestions[random]
        num++;
        return randomQuestion
    }
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
        winningsDisplay.innerHTML = `Level: $${score}`
        if (score !== 1000000) {
            nextQuestion();
        } else {
            endGame();
        };
    }

    else {
        wrongAnswer.play();
        //Checks to see if player reaches winning threshold
        if (score >= 32000) {
            guarenteedWinnings = 32000;
        }
        else if (score >= 1000) {
            guarenteedWinnings = 1000;
        };
        //Displays final score after game ends
        endGame(guarenteedWinnings)   
    };

}

function endGame(guarenteedWinnings) {
    inGameMusic.pause()
    endGameScreen.style.display = "none";
    endGameMessage.style.display = "flex";
    finalMessage.innerHTML = `You Won $${guarenteedWinnings}`
}

function nextQuestion() {
    correctAnswer.play();
    currentQuestion = questionAnswer();
    updateDisplay(currentQuestion);
}

function init() {
    openingAudio.play();
    inGameMusic.play();
    currentQuestion = questionAnswer();
    updateDisplay(currentQuestion);
}



/*----------------------------- Event Listeners -----------------------------*/

answersA.addEventListener('click', handleChoice);
answersB.addEventListener('click', handleChoice);
answersC.addEventListener('click', handleChoice);
answersD.addEventListener('click', handleChoice);

startBtn.addEventListener("click", () => {
    init();
});
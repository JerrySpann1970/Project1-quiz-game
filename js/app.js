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

    {
        question: 'What country in Europe has the biggest population?',

        a: 'A: France',
        b: 'B: China',
        c: 'C: Russia',
        d: 'D: India',

        correct: 'C: Russia'
    },

    {
        question: 'What is the largest mammal in the world?',

        a: 'A: Elephant',
        b: 'B: Blue Whale',
        c: 'C: Giraffe',
        d: 'D: Great White Shark',

        correct: 'B: Blue Whale'
    },

    {
        question: 'Which of the following gasses do plants absorb from the atmosphere?',

        a: 'A: Oxygen',
        b: 'B: Nitrogen',
        c: 'C: Carbon Dioxide',
        d: 'D: Hydrogen',

        correct: 'C: Carbon Dioxide'
    },

    {
        question: "If I was biting into a 'Granny Smith' what would I be eating?",

        a: 'A: Green Apple',
        b: 'B: Orange',
        c: 'C: Banana',
        d: 'D: Peach',

        correct: 'A: Green Apple'
    },

    {
        question: 'What is the most eaten food in the world?',

        a: 'A: Chicken',
        b: 'B: Beef',
        c: 'C: Corn',
        d: 'D: Rice',

        correct: 'D: Rice'
    },

    {
        question: "What was Walt Disney's first feature-length cartoon?",

        a: 'A: Fantasia',
        b: 'B: Pinocchio',
        c: 'C: Snow White',
        d: 'D: Peter Pan',

        correct: 'C: Snow White'
    },

    {
        question: 'According to Greek mythology who was the first woman on earth?',

        a: 'A: Eve',
        b: 'B: Pandora',
        c: 'C: Medusa',
        d: 'D: Luthor',

        correct: 'B: Pandora'
    },

    {
        question: 'What is the longest river in the world?',

        a: 'A: Mississippi',
        b: 'B: Trinity',
        c: 'C: Nile',
        d: 'D: San Jacinto',

        correct: 'C: Nile'
    },

    {
        question: 'If you were planning on making a pizza, what is the most common Italian cheese you would use?',

        a: 'A: American',
        b: 'B: Mozzerella',
        c: 'C: Swiss',
        d: 'D: Cheddar',

        correct: 'B: Mozzerella'
    },

    {
        question: 'What year was the Great Fire of London?',

        a: 'A: 1792',
        b: 'B: 1945',
        c: 'C: 2001',
        d: 'D: 1666',

        correct: 'D: 1666'
    },

    {
        question: 'What is a baby cat known as?',

        a: 'A: Kitten',
        b: 'B: Puppy',
        c: 'C: Rambuctous',
        d: 'D: Kid',

        correct: 'A: Kitten'
    },

    {
        question: "Which actress had the starring role in the 90's film The Bodyguard?",

        a: 'A: Dakota Fanning',
        b: 'B: Whitney Houston',
        c: 'C: Tina Turner',
        d: 'D: Brittany Murphy',

        correct: 'B: Whitney Houston'
    },

    {
        question: 'What does the BBC stand for?',

        a: 'A: Best Books Champs',
        b: 'B: British Broadcasting Corporation',
        c: 'C: Best Broadcasting Company',
        d: 'D: British Broadcasting Company',

        correct: 'D: British Broadcasting Company'
    },

    {
        question: 'In the movie Back to the Future Part II, who stole the Sports Almanac?',

        a: 'A: Biff Tannen',
        b: 'B: Needles',
        c: 'C: Doc Brown',
        d: 'D: Mr. Strickland',

        correct: 'A: Biff Tannen'
    },

    {
        question: "What state has a noodle in its state capital's name?",

        a: 'A: Texas',
        b: 'B: Missouri',
        c: 'C: Oklahoma',
        d: 'D: California',

        correct: 'D: California'
    },

    {
        question: 'What rock band wrote the song Rock of Ages?',

        a: 'A: Rush',
        b: 'B: AC/DC',
        c: 'C: Def Leppard',
        d: 'D: Doobie Brothers',

        correct: 'C: Def Leppard'
    },

    {
        question: 'What planet is known its Great Red Spot?',

        a: 'A: Saturn',
        b: 'B: Neptune',
        c: 'C: Mars',
        d: 'D: Jupiter',

        correct: 'D: Jupiter'
    },

    {
        question: 'In the classic series Doctor Who, who played the Forth Doctor?',

        a: 'A: Tom Baker',
        b: 'B: Christopher Reeve',
        c: 'C: James Taylor',
        d: 'D: Ben Franklin',

        correct: 'A: Tom Baker'
    },

    {
        question: 'What member of the rock and roll band KISS had his on reality series?',

        a: 'A: Ace Frehley',
        b: 'B: Peter Criss',
        c: 'C: Paul Stanley',
        d: 'D: Gene Simmons',

        correct: 'D: Gene Simmons'
    },

    {
        question: "Which fruit's seed is on the outside?",

        a: 'A: Banana',
        b: 'B: Strawberry',
        c: 'C: Apple',
        d: 'D: Orange',

        correct: 'B: Strawberry'
    },

    {
        question: 'What condiment was formerly sold as a medician?',

        a: 'A: Mayonaise',
        b: 'B: Mustard',
        c: 'C: Ketchup',
        d: 'D: Relish',

        correct: 'C: Ketchup'
    },

    {
        question: 'What most common fruit is mistaken for a nut?',

        a: 'A: Almond',
        b: 'B: Peanut',
        c: 'C: Apple',
        d: 'D: Tomato',

        correct: 'A: Almond'
    },

    {
        question: "What does the letters in the famous candy M & M's stand for?",

        a: 'A: More & More',
        b: 'B: Mars & Murrie',
        c: 'C: Mitch & Morris',
        d: 'D: Many & Many',

        correct: 'B: Mars & Murrie'
    },

    {
        question: 'Which plant was the first to be cultivated in space?',

        a: 'A: Carrot',
        b: 'B: Potato',
        c: 'C: Rose',
        d: 'D: Tree',

        correct: 'B: Potato'
    },

    {
        question: 'What is the main ingredient in ice cream?',

        a: 'A: Milk',
        b: 'B: Cream',
        c: 'C: Ice',
        d: 'D: Vanilla',

        correct: 'A: Milk'
    },

    {
        question: 'The character Simba and Nala appear in what movie?',

        a: 'A: Peter Pan',
        b: 'B: The Lion King',
        c: 'C: Tinkerbell',
        d: 'D: Escape to Witch Mountain',

        correct: 'B: The Lion King'
    },

    {
        question: "In Tennessee, it's illegal to drive if you are what?",

        a: 'A: Tired',
        b: 'B: Sad',
        c: 'C: Asleep',
        d: 'D: Angry',

        correct: 'C: Asleep'
    },

    {
        question: 'What establishment has a lower acceptance rate than Harvard?',

        a: 'A: Walmart',
        b: 'B: Six Flags',
        c: 'C: Disneyland',
        d: 'D: Warner Bros.',

        correct: 'A: Walmart'
    },

    {
        question: 'What is the official nickname of Texas?',

        a: 'A: The Show Me State',
        b: 'B: The Lone Star State',
        c: 'C: The Central Valley',
        d: 'D: The Cowboys Home',

        correct: 'B: The Lone Star State'
    },

    {
        question: 'What video game company released Donkey Kong?',

        a: 'A: Nintendo',
        b: 'B: X-Box',
        c: 'C: Sega',
        d: 'D: Play Station',

        correct: 'A: Nintendo'
    },

    {
        question: 'What company invented the Speak and Spell',

        a: 'A: Texas Instruments',
        b: 'B: Nintendo',
        c: 'C: Atari',
        d: 'D: Apple Computers',

        correct: 'A: Texas Instruments'
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

let showAnswerEl = document.getElementById('showAnswer');
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
const resetBtnEl = document.getElementById('reset');

/*-------------------------------- Functions --------------------------------*/

function questionAnswer() {
    let random = Math.floor(Math.random() * testQuestions.length);
    let randomQuestion = testQuestions[random];
    return randomQuestion;
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
        function pause(milliseconds) {
            return new Promise(resolve => setTimeout(resolve, milliseconds));
        }

        async function executeAfterPause() {
            await pause(1000);
            winningsDisplay.innerHTML = `Level: $${score}`;
            showAnswerEl.textContent = `Yes, the correct answer is ${correctAnswer}`;
            nextQuestion();
        }

        executeAfterPause();

        if (score === 1000000) {
            guarenteedWinnings = 1000000
            function pause(milliseconds) {
                return new Promise(resolve => setTimeout(resolve, milliseconds));
            }

            async function executeAfterPause() {
                await pause(10000);
                endGame(guarenteedWinnings)
            }

            executeAfterPause();
            return
        };
    }

    else {
        wrongAnswer.play();
        inGameMusic.pause()
        showAnswerEl.textContent = `No, the correct answer was ${correctAnswer}`

        if (score >= 32000) {
            guarenteedWinnings = 32000;
        }
        else if (score >= 1000) {
            guarenteedWinnings = 1000;
        };

        function pause(milliseconds) {
            return new Promise(resolve => setTimeout(resolve, milliseconds));
        }

        async function executeAfterPause() {
            await pause(10000);
            endGame(guarenteedWinnings)
        }

        executeAfterPause();
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
    endGameScreen.style.display = "flex";
    endGameMessage.style.display = "none";
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

resetBtnEl.addEventListener('click', () => {
    window.location.reload()
    init();
});
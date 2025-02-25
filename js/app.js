// Questions array
let currentQuestion
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
        c: 'lLight-blue',
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
]

// generate question

let score = 0

const question = document.querySelector('#questionContainer p');

// document.getElementById('answerContainer').addEventListener('click', handleChoice)


const answersA = document.getElementById('answerA');
const answersB = document.getElementById('answerB');
const answersC = document.getElementById('answerC');
const answersD = document.getElementById('answerD');

answersA.addEventListener('click', handleChoice)
answersB.addEventListener('click', handleChoice)
answersC.addEventListener('click', handleChoice)
answersD.addEventListener('click', handleChoice)

function questionAnswer() {
    let random = Math.floor(Math.random() * testQuestions.length)
    let randomQuestion = testQuestions[random]

    
    console.log(randomQuestion)
    return randomQuestion
}

function updateDisplay(randomQuestion) {
    question.innerHTML = randomQuestion.question;

    answersA.innerHTML = `${randomQuestion.a}`
    answersB.innerHTML = `${randomQuestion.b}`
    answersC.innerHTML = `${randomQuestion.c}`
    answersD.innerHTML = `${randomQuestion.d}`

    

}





console.log(currentQuestion)

function handleChoice(event) {
    let choice = event.target.textContent
    console.log(choice)
    let correctAnswer = currentQuestion.correct
  
    if (choice == correctAnswer) {
        console.log('Good Job')
    }

}

function init() {
    currentQuestion = questionAnswer()
    updateDisplay(currentQuestion)

    
}

init()





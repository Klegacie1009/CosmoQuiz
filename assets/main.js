let startButton = document.getElementById('start-btn')
let questionContainerEl = document.getElementById('question-container')
let questionEl = document.getElementById('question')
const answerButtonsEl = document.getElementsByClassName('btn')
let scoreEl = document.getElementById('score')
let endQuizEl = document.getElementById('end-quiz')
let highScoreEl = document.getElementById('highscores')
let endQuizBtn = document.getElementById('hs-btn')
let sumbitScoreEl = document.getElementById('submit-score');
let savedScoresEl = document.getElementById('score-board')
let score = 0;
let counter = 0;

const questions =
[
    {
        question: 'What is the darkest level of hair?',
        A: '4',
        B: '1',
        C: '10',
        D: '7',
        answer: '1'
    },
    {
        
        question: 'Does color lift color?',
        A: 'YES',
        B: 'Definitely No',
        C: 'Only Permanent Hair Color',
        D: 'Yes With Heat Applied',
        answer: 'Definitely No'
    },
    {
        question: 'When depositing more than two levels, what must we do?',
        A: 'Cut The Hair',
        B: 'Decolorize',
        C: 'Fill In Hair With Missing Pigments',
        D: 'Nothing',
        answer: 'Fill In Hair With Missing Pigments'

    },
    {
        question: 'Over direction creates what?',
        A: 'Short Layering',
        B: 'Length In the Opposite Direction',
        C: 'Texture',
        D: 'No Graduation',
        answer: 'Length In The Opposite Direction'
}];



// Timer 

var timeLeft = 60;
var timerId = setInterval(countdown, 1000);
let timeEl = document.getElementById('time')
function countdown() {
    if (timeLeft <= 0) {
        clearInterval(timerId);
        endQuiz();
    } else {
        timeEl.textContent = timeLeft;
        timeLeft--;
    }
}
// Game Function
function startGame() {
    countdown();
    console.log('started')
    startButton.classList.add('hide');
    questionContainerEl.classList.remove('hide');
    nextQuestion();
}
// End Function
function endQuiz() {
    console.log('done');
    questionContainerEl.classList.add('hide');
    endQuizEl.classList.remove('hide');
    endQuizBtn.classList.remove('hide');
    clearInterval(timerId);
}



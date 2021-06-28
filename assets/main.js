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
        question: 'Does color lift color?'
        A: 'YES',
        B: 'Definitely No',
        C: 'Only Permanent Hair Color',
        D: 'Yes With Heat Applied',
        answer: 'Definitely No'
    },
    {
        question: ''
    }
]


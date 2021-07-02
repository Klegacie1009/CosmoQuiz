// Elements
let startButton = document.getElementById('start-btn')
let questionContainerEl = document.getElementById('questions-container')
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
        0: '4',
        1: '1',
        2: '10',
        3: '7',
        answer: '1'
    },
    {
        question: 'Does color lift color?',
        0: 'YES',
        1: 'Definitely No',
        2: 'Only Permanent Hair Color',
        3: 'Yes With Heat Applied',
       answer: 'Definitely No'
    },
    {
        question: 'When depositing more than two levels, what must we do?',
        0: 'Cut The Hair',
        1: 'Decolorize',
        2: 'Fill In Hair With Missing Pigments',
        3: 'Nothing',
        answer: 'Fill In Hair With Missing Pigments'

    },
    {
        question: 'Over direction creates what?',
        0: 'Short Layering',
        1: 'Length In the Opposite Direction',
        2: 'Texture',
        3: 'No Graduation',
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
// Next Question Function
function nextQuestion() {
    questionEl.textContent = questions[counter].question
    for (let i = 0; i < questions.length; i++) {
        answerButtonsEl[i].textContent = questions[counter][i];
    }
}
function nextBtnClick(e) {
    e.preventDefault();
    if (e.target.localName==='button') {
        checkAnswer(e.target.textContent);
    }
    console.log(e);
}

// Check Right Answers
function checkAnswer(userAnswer) {
    console.log('correct answer' + questions[counter].answer);
    console.log('userAnswer' + userAnswer);
    if (questions[counter].answer === userAnswer) {
        score += 5;
        scoreEl.textContent = score;
        console.log('correct')
    } else {
        timeLeft -= 5;
        console.log('incorrect')
    }
    counter++;
    if (counter === questions.length) {
        endQuiz();
    } else {
        nextQuestion();
    }
}
function nextBtnClick(e) {
    e.preventDefault();
    if (e.target.localName==='button') {
        checkAnswer(e.target.textContent);
    }
    console.log(e);
}
// Check Wrong Answers
function checkAnswer(userAnswer) {
    console.log('correct answer' + questions[counter].answer);
    console.log('userAnswer' + userAnswer);
    if (questions[counter].answer === userAnswer) {
        score += 5;
        scoreEl.textContent = score;
        console.log('correct')
    } else {
        timeLeft -= 5;
        console.log('incorrect')
    }
    counter++;
    if (counter === questions.length) {
        endQuiz();
    } else {
        nextQuestion();
    }
}
// Write Initials For High Score
function sumbitScore() {
    let userScore = sumbitScoreEl.value.trim();
    if (userScore === "") {
        alert('Please type initials!')
    } else {
        let storedScores = JSON.parse(localStorage.getItem("highscores")) || [];
        let userInfo =
        {
            initials: userScore,
            score: score
        };
        storedScores.push(userInfo);
        localStorage.setItem("highscores", JSON.stringify(storedScores));
    }
}
// High Score Board
function highScoreBoard() {
    sumbitScore();
    endQuizEl.classList.add('hide');
    endQuizBtn.classList.add('hide');
    highScoreEl.classList.remove('hide')
    let storedScores = JSON.parse(localStorage.getItem("highscores")) || [];

    storedScores.forEach(function (score) {
        var scoreBoard = document.createElement('li');
        scoreBoard.textContent = score.initials + ' : ' + score.score;
        savedScoresEl.appendChild(scoreBoard);
    })

}
questionContainerEl.addEventListener('click', nextBtnClick)
startButton.addEventListener('click', startGame)
endQuizBtn.addEventListener('click', highScoreBoard)





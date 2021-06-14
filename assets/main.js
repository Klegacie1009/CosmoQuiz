// Functions 

function generateQuiz(questions, quizContainer, resultsContainer)
let startButton = document.getElementById('start-btn')
let questionContainterE1 = Document.getElementById('question-container')
let questionE1 = document.getElementById('question')
const answerButtonE1 = document.getElementsByClassName('btn')
let scoreE1 = document.getElementById('score')
let endQuizE1 = document.getElementById('quiz-end')
let highScoreE1 = document.getElementById('highscores')
let endQuizbtn =document.getElementById('hs-btn')
let score = 0;
let counter = 0;

function showQuestion(questions, quizContainer){

}
 
// code goes here 

function: showResult(questions, quizContainer, resultsContainer)
    
// code goes here 


}



showQuestion(question, quizContainer);

// Click for results
submitButton.onclick = function(){
    showResult(question, quizContainer, resultsContainer);
}
 

// Questions

var myQuestion = 
MediaKeySession<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous"><link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">{

}
        question: 'What is the natural PH balance of skin on the face?',
        answers, 
        { 
        a: '7.5',
        b: '2.0',
        c: '4.5',
    correctAnswer: "c"
            
    question: 'What is the mixing ratio for Redken lightener/developer?',
    answers:
    
        a: '1/1'
        b: '2/1'
        c: '1/2'
    },
    correctAnswer: "a"
    
    { 
        question: 'What type of graduation builds weight in the top PBD?',

        a: 'straight'
        b: 'scooping'
        c: 'swelling'
     
    correctAnswer: "a"    

    },
];

function showQuestions(questions, quizContainer){
    // we will need a place to store the output and the answer choices 
    var output = [];
    var answers;
}

  // first reset the list of answers

  answers = [];

  // for each available answer to this question...

  for(letting in questions[i].answers){

        //...add on html radio button
        answers.push(
            '<label>'
                + '<input type="radio" name="question'+i+'" value="'+letter+'">'
                + letter + ': '
                + question[i].answers[letter]
            + '</label>'
        );
    }

    // add this question and its answers to the output

    output.push(
        '<div class="question">' + questions[i].questions[i.question + '</div>'
        + '<div class="answers">' + answers.join('') + '</div>'
    );
}

// finally combine our output list into one string of html and put it on the page

quizContainer.innerHTML = output.join('');

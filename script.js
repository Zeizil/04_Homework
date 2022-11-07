// Variables
let timer = document.querySelector("#timer");
let currentHigh = document.querySelector("#highscore");
let score = document.querySelector("#score");
let answer1 = document.querySelector("answerText1");
let answer2 = document.querySelector("answerText2");
let answer3= document.querySelector("answerText3");
let answer4 = document.querySelector("answerText4");

let highScore = localStorage.getItem("highScore");
let isWin = false;
let timerSetUp;
let countdown;

// Set up questions and answers
const questions = ["What is JavaScript?", "What does the scope of a variable mean?", "What is the purpose of 'This' operator?"];
const answers1 = ["A heavyweight, interpreted programming language.", "A lightweight, interpreted programming language.", "An assembly-level language.", "A coffee maker."];
const answers2 = ["A plain JavaScript function passed to a method as an argument or option.", "The region of your program where the variable is defined.", "How a variable sees outside of the submarine.", "How important the varibale is to the whole code."];
const answers3 = ["A keyword that refers to the object it belongs to.", "To oppose 'That.'", "To be created whenever a variable outside the current scope is accessed from within some inner scope.", "To get the data type of its operand."];

// set up Current High Score
if(highScore){
    currentHigh.textContent = highScore;
} else {
    currentHigh.textContent = 0;
}

// Script for starting the quiz
function beginQuiz() {
    isWin = false;
    countdown = 30;
    startButton.disabled = true;
    renderQuestion();
    timerStart();
}

// Script for timer
function timerStart() {
    timerSetUp = setInterval(function(){
        countdown--;
        timer.textContent = countdown;
        if (countdown >= 0){
            if (isWin && countdown > 0){
                clearInterval(timerSetUp);
                gameWon();
            }
        }
        if (countdown === 0){
            clearInterval(timerSetUp);
            gameLost();
        }
    }, 1000);
}

// Script for rendering questions and their answers


// Script for win/lose

// Script for submitting score

// Script for detecting events

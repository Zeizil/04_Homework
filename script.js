// Variables
const startButton = document.querySelector(".startbtn");
let timer = document.querySelector("#timer");
let prevscore = document.querySelector("#prevscore");
let score = document.querySelector("#score");
let qustionEl = document.querySelector("#questionEl");
let answer1 = document.querySelector("answer1");
let answer2 = document.querySelector("answer2");
let answer3= document.querySelector("answer3");
let answer4 = document.querySelector("answer4");

let isWin = false;
let timerSetUp;
let countdown;

// Set up questions and answers
const questions = ["What is JavaScript?", "What does the scope of a variable mean?", "What is the purpose of 'This' operator?"];
const answers1 = ["A heavyweight, interpreted programming language.", "A lightweight, interpreted programming language.", "An assembly-level language.", "A coffee maker."];
const answers2 = ["A plain JavaScript function passed to a method as an argument or option.", "How a variable sees outside of the submarine.", "The region of your program where the variable is defined.", "How important the varibale is to the whole code."];
const answers3 = ["A keyword that refers to the object it belongs to.", "To oppose 'That.'", "To be created whenever a variable outside the current scope is accessed from within some inner scope.", "To get the data type of its operand."];

// get previous scores
function init() {
    getPrevScores();
}

function getPrevScores() {
    var storedScore = localStorage.getItems("lastscore");
    if(storedScore === null){
        prevscore.textContent = "None";
    } else {
        prevscore.textContent = storedScore;
    }
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
function renderQuestion() {
    chosenQuestion = questions[Math.floor(Math.random() * questions.length)];
    qustionEl.textContent = chosenQuestion;

    // Get the multiple choice answers and the correct answer for the question
    for(let i = 0; i < questions.length; i++){
        if(questions[i] == chosenQuestion){
            if(i == 0){
                multChoice = answers1;
                correctChoice = 2;
            } else if(i == 1){
                multChoice = answers2;
                correctChoice = 3;
            } else if(i == 1){
                multChoice = answers3;
                correctChoice = 1;
            }
        }
    }
    checkAnswer();
}

// Get the answer from the user
function checkAnswer(){

}

// Script for win/lose
function gameWon() {
    qustionEl.textContent = "Score: " + score;
    startButton.disabled = false;
    submitScore();
}

function gameLost() {
    qustionEl.textContent = "You ran out of time. Click the Start Button to try again.";
    startButton.disabled = false;
}

// Script for submitting score
function submitScore() {

}

// Script for detecting start being clicked
startButton.addEventListener("click", beginQuiz);
answer1.addEventListener("click", checkAnswer);
answer2.addEventListener("click", checkAnswer);
answer3.addEventListener("click", checkAnswer);
answer4.addEventListener("click", checkAnswer);
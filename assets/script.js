// Variables
const startButton = document.querySelector(".startbtn");
let timer = document.querySelector("#timer");
let prevscore = document.querySelector("#prevscore");
let scoreEl = document.querySelector("#score");
let qustionEl = document.querySelector("#questionEl");
let answer1 = document.querySelector("answer1");
let answer2 = document.querySelector("answer2");
let answer3= document.querySelector("answer3");
let answer4 = document.querySelector("answer4");

let isWin = false;
let timerSetUp;
let countdown;
let alreadyDone;
let score;

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
    timerStart();
    while(countdown != 0){
        alreadyDone = [];
        renderQuestion();
    }
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
    let isInList = true;
    while(isInList = true){
        chosenQuestion = questions[Math.floor(Math.random() * questions.length - 1)];
        if(alreadyDone.length > 0){
            for(let h = 0; h < alreadyDone.length; h++){
                if(alreadyDone[h] == chosenQuestion){
                    isInList = true;
                } else {
                    isInList = false;
                    alreadyDone.push(chosenQuestion);
                }
            }
        }
    }
    questionEl.textContent = chosenQuestion;

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
    // render the answers
    renderAnswers(multChoice);

    let chosenAnswer = getAnswer();
    checkAnswer(correctChoice, chosenAnswer);
}

// Render the answers
function renderAnswers(multChoice){
    answer1.textContent = multChoice[0];
    answer2.textContent = multChoice[1];
    answer3.textContent = multChoice[2];
    answer4.textContent = multChoice[3];
}

// Get the answer from the user
function getAnswer(){
    if(answer1.addEventListener("click")){
        return 1;
    }
    if(answer2.addEventListener("click")){
        return 2;
    }
    if(answer3.addEventListener("click")){
        return 3;
    }
    if(answer4.addEventListener("click")){
        return 4;
    }
}

// check the answer
function checkAnswer(correctChoice, chosenAnswer){
    if(correctChoice === chosenAnswer){
        // add to the score
        score += 1;
        scoreEl.textContent = score;
    } else if (correctChoice != chosenAnswer){
        // subtract time
        countdown -= 5;
    }
}

// Script for win/lose
function gameWon() {
    qustionEl.textContent = "Score: " + score + "/3";
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
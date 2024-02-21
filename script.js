/**
 * Script: script.js
 * Author: Andres Calandin Vega
 * 
 * Description:
 * Main script of the index.html website.
 */

// IMPORTS
import * as radio from './modules/radio_button.js';
import * as checks from './modules/check_button.js';
import * as yesno from './modules/yesno_buttons.js';
import * as drag_drop from './modules/drag_drop.js';
import * as order from './modules/order.js';
import * as dropdown from './modules/dropdown.js';
import * as image from './modules/image.js';

// GLOBAL VARIABLES
let exam_code; // Define a variable to store exam code
let questions; // Variable to store questions
let currentQuestionIndex = 0;
let score = 0;

const nextButton = document.getElementById("next-btn");
const valButton = document.getElementById("validate-btn");
const questionElement = document.getElementById("question");
const control = document.getElementById("control");

// GLOBAL FUNCTIONS
let f_createQuestion = function(){};
let f_evaluateQuestion = function(){};


// Fetch the JSON file
async function loadJSON(){
    try {
        const response = await fetch('preguntas.json');
        const data = await response.json();
        
        const exam_code = data.code;
        const questions = data.questions;
        
        // Log JSON fetched
        console.log(questions);

        return [exam_code, questions];
    } catch(error) {
        console.error('Error fetching JSON:', error);
        throw error; // Re-throw the error for further handling if needed
    }
}

function selectMethods(answerType){
    switch(answerType){
        case 0:
            f_createQuestion = radio.createRadioButton;
            f_evaluateQuestion = radio.validateAnswer;
            break;
        case 1:
            f_createQuestion = yesno.createYesNo;
            f_evaluateQuestion = yesno.validateAnswer;
            break;
        case 2:
            f_createQuestion = checks.createCheckbox;
            f_evaluateQuestion = checks.validateAnswer;
            break;
        case 3:
            f_createQuestion = dropdown.createDropdown;
            f_evaluateQuestion = dropdown.validateAnswer;
            break;
        case 4:
            break;
        case 5:
            break;
        case 6:
            break;
        default:
            f_createQuestion = function(){return 1};
            f_evaluateQuestion = function(){return 1};
    }
}

async function initialization(){
    const data = await loadJSON();
    exam_code = data[0];
    questions = data[1];

    document.title = "Exam certification " + exam_code;
    var test_title = document.getElementById("test_title");
    test_title.textContent = "Exam certification " + exam_code;
}

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    showQuestion();
}

async function main(){
    await initialization();
    startQuiz();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let question_type = currentQuestion.type;
    selectMethods(question_type);
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    f_createQuestion(currentQuestion.answers,control);

    valButton.addEventListener("click",function(){f_evaluateQuestion(score)});
}

function resetState(){
    while(control.firstChild){
        control.removeChild(control.firstChild);
    }
    nextButton.style.display = 'none';
    valButton.disabled = false;
}

function showScore(){
    resetState();
    questionElement.innerHTML = `Tu puntuación es ${score} de ${questions.length}`;
    nextButton.innerHTML = "Repetir Test";
    nextButton.style.display = "block";
}

function handleNextQuestion(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextQuestion();
    }else{
        startQuiz();
    }
});

main();
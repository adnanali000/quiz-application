//select all elements using getElementById

const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const qImg = document.getElementById("qImg")
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceD = document.getElementById("D");
const counter = document.getElementById("counter");
const timeGauge = document.getElementById("timeGauge");
const progress = document.getElementById("progress");
const score = document.getElementById("score");

//create questions

let questions = [
    {
        question : "what does HTML stand for",
        imgSrc : "img/html.png",
        choiceA : "Correct",
        choiceB : "Wrong",
        chocieD : "Wrong",
        correct :"A"      
    },{
        question : "what does CSS stand for",
        imgSrc : "img/css.png",
        choiceA : "wrong",
        chocieB : "correct",
        choiceD : "wrong",
        correct : "B"      
    },{
        question : "what does JS stand for",
        imgSrc : "img/html.png",
        choiceA : "wrong",
        chocieB : "Wrong",
        choiceD : "correct",
        correct : "A"      
    },
]

//create some variables
let lastQuestion = questions.length - 1;
let runningQuestion = 0;


//render a function

function renderQuestion(){
    let q = questions[runningQuestion];
    question.innerHTML = "<p>"+q.question+"</p>";
    qImg.innerHTML = "<img src =" + q.imgSrc + ">";
    choiceA.innerHTML = q.choiceA
    choiceB.innerHTML = q.choiceB
    choiceD.innerHTML = q.chocieD
     
}
start.style.display = "none";
renderQuestion();
quiz.style.display = "block";
renderProgress();

//render progress

function renderProgress(){

    for(let qIndex = 0; qIndex <= lastQuestion; qIndex++){
        progress.innerHTML += "<div class = 'prog' id = "+qIndex+"></div>"
    }
}

//counter render


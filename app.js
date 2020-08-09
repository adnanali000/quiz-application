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
const scoreDiv = document.getElementById("scoreContainer");

//create questions

let questions = [
    {
        question : "what does HTML stand for",
        imgSrc : "img/html.png",
        choiceA : "Hyper text markup language",
        choiceB : "hell to my life",
        chocieD : "h t m l",
        correct :"A"      
    },{
        
        question : "what does JS stand for",
        imgSrc : "img/js.png",
        choiceA : "Hyper text markup language",
        choiceB : "JAVASCRIPT",
        chocieD : "jquery",
        correct :"B"          
             
    },{
         
        question : "what does CSS stand for",
        imgSrc : "img/css.png",
        choiceA : "Hyper text markup language",
        choiceB : "C STYLE script",
        chocieD : "C STYLE",
        correct :"D"          
    }
]

//create some variables
let lastQuestion = questions.length - 1;
let runningQuestion = 0;
let count = 0;
let questionTime = 10; //10s
const guageWidth = 150; //150px
const guageUnit = guageWidth / questionTime; // 15px
let timer;
let score = 0;

//render a function

function renderQuestion(){
    let q = questions[runningQuestion];
    question.innerHTML = "<p>"+q.question+"</p>";
    qImg.innerHTML = "<img src =" + q.imgSrc + ">";
    choiceA.innerHTML = q.choiceA
    choiceB.innerHTML = q.choiceB
    choiceD.innerHTML = q.chocieD
     
}
//start quiz

start.addEventListener("click",startQUiz);
function startQUiz(){

start.style.display = "none";
renderQuestion();
quiz.style.display = "block";
renderProgress();
renderCounter();
timer = setInterval(renderCounter,1000); //1000ms = 1sec

}
//render progress

function renderProgress(){

    for(let qIndex = 0; qIndex <= lastQuestion; qIndex++){
        progress.innerHTML += "<div class = 'prog' id = "+qIndex+"></div>"
    }
}

//counter render

function renderCounter(){
    if(count <= questionTime){
        counter.innerHTML = count;
        timeGauge.style.width = count * guageUnit +"px";
        count++;
    }
    else{
        count = 0;
        answerIsWrong();
        if(runningQuestion < lastQuestion){
            runningQuestion++;
            renderQuestion();
        }else{
            //end quiz show the score
             clearInterval(timer);
             scoreRender();   
        }
        

    }
}


//check answer

function checkAnswer(answer){
    if(answer == questions[runningQuestion].correct){
        //answer is correct
        score++;
        //change progress colour to green
        answerIsCorrect();

    }else{
        //change progress colour red
        answerIsWrong();
    }
    count = 0;
    if(runningQuestion < lastQuestion){
        runningQuestion++;
        renderQuestion();
    }else{
        //end quiz show the score
         clearInterval(timer);
         scoreRender();

    }
}

//correct ans
function answerIsCorrect(){
    document.getElementById(runningQuestion).style.background = "#0f0";
}

//wrong ans
function answerIsWrong(){
    document.getElementById(runningQuestion).style.background = "red";
}


//score render
 
function scoreRender(){
    scoreDiv.style.display = "block"

    //calculate percentage
    const scorePercent = Math.round(100 * score / questions.length)

    //choose images on the basis of percentage

    let img = (scorePercent >= 80) ? "img/5.png" :
    (scorePercent >= 60) ? "img/4.png" :
    (scorePercent >= 40) ? "img/3.png" :
    (scorePercent >= 20) ? "img/2.png" :
    "img/1.png";

    scoreDiv.innerHTML = "<img src = "+ img +">";
    scoreDiv.innerHTML += "<p>" +scorePercent+ "%</p>";
}

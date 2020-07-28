egEZteg//Global Variables
//This is where you will define the variables you will be using in your project.
//#TODO: Create four variables to track each possible quiz outcome
var questionCount = 0;
var result1Score = 0;

var CinderellaScore = 0;
var JasmineScore = 0;
var BelleScore = 0;
var SnowwhiteScore = 0;




//#TODO: Use the DOM to create variables for the first quiz question.
var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q1a3 = document.getElementById("q1a3");
var q1a4 = document.getElementById("q1a4");

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q2a3 = document.getElementById("q2a3");
var q2a4 = document.getElementById("q2a4");

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");
var q3a3 = document.getElementById("q3a3");
var q3a4 = document.getElementById("q3a4");



//#TODO: Add Event Listeners to your answer choice variables.
q1a1.addEventListener("click", cinderella);
q1a2.addEventListener("click", jasmine);
q1a3.addEventListener("click", belle);
q1a4.addEventListener("click", snowwhite);

q2a1.addEventListener("click", cinderella);
q2a2.addEventListener("click", jasmine);
q2a3.addEventListener("click", belle);
q2a4.addEventListener("click", snowwhite);

q3a1.addEventListener("click", cinderella);
q3a2.addEventListener("click", jasmine);
q3a3.addEventListener("click", belle);
q3a4.addEventListener("click", snowwhite);










//#TODO: Define quiz functions here
function cinderella(){
  CinderellaScore += 1;
  questionCount =+ 1;
  alert(" One point to cinderella");
  
  if (questionCount >= 3){
       updateResult();
    
    
  }
  
}
function jasmine(){
  JasmineScore += 1;
  questionCount += 1;
  alert("One point to jasmine");
  
  if (questionCount >= 3){
    updateResult();
  }
  
}

function belle(){
  BelleScore += 1;
  questionCount += 1;
  alert("One point to belle");
  if (questionCount >= 3){
    updateResult();
  }
  
}

function snowwhite(){
  SnowwhiteScore += 1;
  questionCount += 1;
  alert("One point to snowwhite");
  if (questionCount >= 3){
    updateResult();
    
  }
var result = document.getElementById("result");

function updateResult(){
  if (CinderellaScore >=2){
    result.innerHTML = "Cinderella!";
    
  }
  else if(jasmine >=2){
    result.innerHTML = "Jasmine!";
  
  }
  else if(belle >= 2){
    result.innerHTML = "Belle!"
  }
  else if
}
//Global Variables
//This is where you will define the variables you will be using in your project.
//#TODO: Create four variables to track each possible quiz outcome
var questionCount = 0;
var result1Score = 0;

var Cinderella = 0;
var Jasmine = 0;
var Belle = 0;
var Snowwhite = 0;




//#TODO: Use the DOM to create variables for the first quiz question.
var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q1a3 = document.getElementById("q1a3");
var q1a4 = document.getElementById("q1a4");

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q2a3 = document.getElementById("q2a3");
var q2a4 = document.getElementById("q2a4");







//#TODO: Add Event Listeners to your answer choice variables.
q1a1.addEventListener("click", Cinderella);
q1a2.addEventListener("click", Jasmine);
q1a3.addEventListener("click", Belle);
q1a4.addEventListener("click", Snowwhite);









//#TODO: Define quiz functions here
function cinderella(){
  cinderella += 1;
  questionCount =+ 1;
  alert(" One point to cinderella");
  
}
function jasmine(){
  jasmine += 1;
  questionCount += 1;
  alert("One point to jasmine");
  
}

function belle(){
  belle += 1;
  questionCount += 1;
  alert("One point to belle");
  
}

function snowwhite(){
  snowwhite += 1;
  questionCount += 1;
  alert("One point to snowwhite");
}

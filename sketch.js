var canvas, backgroundImage;

var gameState = 0;
var contestantCount;
var allContestants;
var answer;
var database;
var immage;
var question, contestant, quiz;
function preload(){
immage=loadImage("images.png");
}
function setup(){
 
  canvas = createCanvas(600,600);
  database = firebase.database();
  quiz = new Quiz();
  quiz.getState();
  quiz.start();
}


function draw(){
  background(immage);
  if(contestantCount === 1){
    quiz.update(1);
  }
  if(gameState === 1){
    clear();
    quiz.play();
  }
}

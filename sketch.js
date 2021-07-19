var canvas, backgroundImage;

var gameState = 0;
var playerCount;

var database;

var form, player, game;
var allPlayers;

var car1, car2, car3, car4;
var carImg1, carImg2, carImg3, carImg4;
var cars

var track, trackImg;
var setting, settingImg;

function preload(){

  carImg1 = loadImage('images/car1.png');
  carImg2 = loadImage('images/car2.png');
  carImg3 = loadImage('images/car3.png');
  carImg4 = loadImage('images/car4.png');

  trackImg = loadImage('images/track.jpg');
  settingImg = loadImage('images/background.jpg');

}

function setup(){
  canvas = createCanvas(displayWidth-50, displayHeight-150);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();

  
}


function draw(){
  //background(settingImg);
 if(playerCount === 4){

     game.update(1);

 }

 if(gameState === 1){

      game.play();
 }

}


//play is not an automatic function and will raise error till created 
//display width and display height are automatic properties that adjust the canvas size
//Global Variables
var bananaImage, obstacleImage
var obstacleGroup
var background
var score



function preload(){
  backImage=loadImage("jungle.jpg");
  player_running = 
loadAnimation("Monkey_01.png", "Monkey_02.png", "Monkey_03.png", "Monkey_04.png", "Monkey_05.png", "Monkey_06.png", "Monkey_07.png", "Monkey_08.png", "Monkey_09.png", "Monkey_10.png");
  
  
  
  
  
  bananaImage = loadImage("Banana.png");
  obstacleImage = loadImage("stone.png");
  
}


function setup() {
  createCanvas(600,300);
  backdrop = createSprite(200,200,600,300);
  backdrop.addImage("background", backImage);
  backdrop.velocityX = -8;
  player = createSprite(100,200,20,20);
  player.addAnimation("running", player_running);
}


function draw(){
 background(255); 
  if(backdrop.x<0){
  backdrop.x=backdrop.width/2;
  }
  drawSprites();
}
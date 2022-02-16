var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database,drawWall = true,wallX,wallY,wall = [];

var form, player, game;

var cars, car1, car2, car3, car4;

var track, car1_img, car2_img, car3_img, car4_img;

function preload(){
  track = loadImage("../images/track.png");
  car1_img = loadImage("../images/car1.png");
  car2_img = loadImage("../images/car2.png");
  car3_img = loadImage("../images/car3.png");
  car4_img = loadImage("../images/car4.png");
  ground = loadImage("../images/ground.png");
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
 wallX = width/2;
  wallY = height-135;
  for(let i = 0; i< 9;i++){
    wall.push(createSprite(wallX,wallY,50,30));
    wallX+=50;
    console.log("wall")
  }
  wall.push(createSprite(wallX+5,wallY-10,50,30));
  wall[wall.length-1].rotation = -45;
  wallX+=25;
  wallY-=50;
  for(let i = 0; i < 8; i++) {
    wall.push(createSprite(wallX-20,wallY,50,50));
    wallY-=50;
  }
  wall.push(createSprite(wallX,wallY,30,50));
  wall[wall.length-1].rotation = -45;
  let temp = wallX;
  wallX -= 50;
  wallY-=30;
  for(let i = 0; i < 8; i++){
    wall.push(createSprite(wallX,wallY+50,50,100));
    wallX-=50;
  }
  wall.push(createSprite(wallX+10, wallY+30,30,70));
  wall.push(createSprite(wallX+350,wallY+130,160,70));
  wall[wall.length-1].rotation = 45;
  wall.push(createSprite(wallX+350,wallY+430,160,70));
  wall[wall.length-1].rotation = -45;
  wall.push(createSprite(wallX+40,wallY+270,430,160));
  wall.push(createSprite(wallX-175,wallY+100,10,350));
  wallY = 150;
  wallX = temp;
  for(let i = 0; i < 8; i++) {
    wall.push(createSprite(260,wallY,200,50));
    wallY+=50;
  }
  wallX=300;
  for(let i = 0; i < 8; i++){
    wall.push(createSprite(wallX,wallY+50,200,50));
    wallX+=50;
  }
}


function draw(){
  background(track);
  drawSprites()
}

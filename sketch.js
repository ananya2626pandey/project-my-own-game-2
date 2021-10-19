var bgImg,woodenLog1Img,woodenLog2Img,woodenboxImg,barrelImg,bombBoxImg;
var soldier, soldierImg;
var woodenLog1, woodenLog2, barrel , bombBox;
var woodenBox1, woodenBox2, woodenBox3,woodenBox4,woodenBox5,woodenBox6;
var terrorist, terroristImg;
var door;

function preload(){
  bgImg = loadImage("bg img for my game 2.jpg");
  soldierImg = loadImage("soldier.png");
  terroristImg = loadImage("enemy_soldier.png");
  woodenLog1Img= loadImage("wooden_log_1-removeBg-preview.png");
  woodenLog2Img= loadImage("log2-removebg-preview.png");
  barrelImg=loadImage("barrel-removebg-preview.png");
  bombBoxImg=loadImage("bombsBox-removebg-preview.png");
  woodenboxImg=loadImage("wooden box 1.jpg")

}

function setup() {
  createCanvas(800,800);

  soldier = createSprite(400, 600);
  soldier.addImage(soldierImg);
  soldier.scale = 0.25;
  
  woodenLog1 = createSprite(200,750);
  woodenLog1.addImage(woodenLog1Img);
  woodenLog1.scale = 0.70;

  woodenLog2 = createSprite(400,750);
  woodenLog2.addImage(woodenLog2Img);
  woodenLog2.scale = 0.85;

  woodenBox1 = createSprite(50,100);
  woodenBox1.addImage(woodenboxImg);
  woodenBox1.scale = 0.5;
  
  woodenBox2 = createSprite(745,350);
  woodenBox2.addImage(woodenboxImg);
  woodenBox2.scale = 0.5;

  woodenBox3 = createSprite(50,350);
  woodenBox3.addImage(woodenboxImg);
  woodenBox3.scale = 0.5;

  woodenBox4 = createSprite(750,100);
  woodenBox4.addImage(woodenboxImg);
  woodenBox4.scale = 0.5;

  woodenBox5 = createSprite(50,750);
  woodenBox5.addImage(woodenboxImg);
  woodenBox5.scale = 0.5;

  woodenBox6 = createSprite(400,350);
  woodenBox6.addImage(woodenboxImg);
  woodenBox6.scale = 0.5;

  barrel= createSprite(720,750);
  barrel.addImage( barrelImg);
  barrel.scale = 0.3;

  bombBox= createSprite(570,780);
  bombBox.addImage(bombBoxImg );
  bombBox.scale = 0.65;

  terrorist = createSprite(400,100);
  terrorist.addImage(terroristImg);
  terrorist.scale = 0.25;
  terrorist.velocityX = -10;

  door = createSprite(400,1,200,30);
  
}

function draw() {
 background(bgImg);
  
  createEdgeSprites();
  terrorist.bounceOff(woodenBox1);
  terrorist.bounceOff(woodenBox4);
  soldier.collide(woodenBox1);
  soldier.collide(woodenBox2);
  soldier.collide(woodenBox3);
  soldier.collide(woodenBox4);
  soldier.collide(woodenBox5);
  soldier.collide(woodenBox6);

  soldier.collide(woodenLog1);
  soldier.collide(woodenLog2);
  soldier.collide(bombBox);
  soldier.collide(barrel);
  

 if(keyWentDown(UP_ARROW)){
   soldier.velocityY = -8;
}

if(keyWentUp(UP_ARROW)){
  soldier.velocityY = 0;
}

if(keyWentDown(DOWN_ARROW)){
 soldier.velocityY = 8;
}

if(keyWentUp(DOWN_ARROW)){
soldier.velocityY = 0;
}

if(keyWentDown(RIGHT_ARROW)){
 soldier.velocityX = 8;
}

if(keyWentUp(RIGHT_ARROW)){
soldier.velocityX = 0;
}

if(keyWentDown(LEFT_ARROW)){
soldier.velocityX = -8;
}

if(keyWentUp(LEFT_ARROW)){
soldier.velocityX = 0;
}
if(soldier.isTouching(door)){
  fill("red");
  textSize(50);
  text("YOU WONN !!", 300,600);
  terrorist.velocityX = 0;
  if(keyWentDown(UP_ARROW)){
  soldier.velocityY = 0;
}

if(keyWentUp(UP_ARROW)){
  soldier.velocityY = 0;
}

if(keyWentDown(DOWN_ARROW)){
  soldier.velocityY = 0;
}

if(keyWentUp(DOWN_ARROW)){
soldier.velocityY = 0;
}

if(keyWentDown(RIGHT_ARROW)){
  soldier.velocityX = 0;
}

if(keyWentUp(RIGHT_ARROW)){
soldier.velocityX = 0;
}

if(keyWentDown(LEFT_ARROW)){
soldier.velocityX = 0;
}

if(keyWentUp(LEFT_ARROW)){
soldier.velocityX = 0;
}
}
  if(soldier.isTouching(terrorist)){
  fill("red");
  textSize(50);
  text("YOU LOSS !!", 300,600);
  terrorist.velocityX = 0;
  if(keyWentDown(UP_ARROW)){
  soldier.velocityY = 0;
}

  if(keyWentUp(UP_ARROW)){
  soldier.velocityY = 0;
}

if(keyWentDown(DOWN_ARROW)){
  soldier.velocityY = 0;
}

if(keyWentUp(DOWN_ARROW)){
soldier.velocityY = 0;
}

if(keyWentDown(RIGHT_ARROW)){
  soldier.velocityX = 0;
}

if(keyWentUp(RIGHT_ARROW)){
soldier.velocityX = 0;
}

if(keyWentDown(LEFT_ARROW)){
soldier.velocityX = 0;
}

if(keyWentUp(LEFT_ARROW)){
soldier.velocityX = 0;
}
}
fill("black")
textSize(20)
text("EXIT DOOR => ", 150,20)
 drawSprites();
}
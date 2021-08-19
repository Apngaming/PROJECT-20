var bg,sleep, brush, gym, eat, bath, move;
var astronaut;


function setup() {
  createCanvas(400,400);
 astronaut =  createSprite(300, 230);
 astronaut.addAnimation("sleeping",sleep);
 astronaut.scale = 0.1;
}

function preload(){
bg = loadImage("images/iss.png");
sleep = loadAnimation("images/sleep.png");
brush = loadAnimation("images/brush.png");
gym = loadAnimation("images/gym1.png","images/gym2.png");
bath = loadAnimation("images/bath1.png","images/bath2.png")
eat = loadAnimation("images/eat1.png","images/eat2.png");
move = loadAnimation("images/move.png","images/move1.png");
}

function draw() {

  background(bg);

  textSize(20);
  fill("white");
  text("instructions:",20,35);
  textSize(15);
  text("up Arrow = Brushing",20,55);
  text("down Arrow = Gyming",20,70);
  text("right Arrow = Bathing",20,85);
  text("left Arrow = Eating",20,100);
  text("m key = Moving",20,115);

  if(keyDown(UP_ARROW)){
  astronaut.addAnimation("brushing",brush);
  astronaut.changeAnimation("brushing");
  astronaut.y = 350;
  astronaut.velocityX = 0;
  astronaut.velocityY = 0;
 }
 if(keyDown(DOWN_ARROW)){
  astronaut.addAnimation("gyming",gym);
  astronaut.changeAnimation("gyming");
  astronaut.y = 350;
  astronaut.velocityX = 0;
  astronaut.velocityY = 0;
 }
 if(keyDown(LEFT_ARROW)){
  astronaut.addAnimation("eating",eat);
  astronaut.changeAnimation("eating");
  astronaut.y = 350;
  astronaut.velocityX = 0;
  astronaut.velocityY = 0;
 }
 if(keyDown(RIGHT_ARROW)){
  astronaut.addAnimation("bathing",bath);
  astronaut.changeAnimation("bathing");
  astronaut.y = 350;
  astronaut.velocityX = 0;
  astronaut.velocityY = 0;
 }
 
drawSprites();
}


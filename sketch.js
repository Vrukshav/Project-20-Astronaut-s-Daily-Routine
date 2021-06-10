var bg,sleep, brush, gym, eat, bath, move,gym2;
var astronaut;

function preload(){
  bg= loadImage("image/iss.png");
  sleep = loadAnimation("image/sleep.png");
  brush = loadAnimation("image/brush.png");
  gym = loadAnimation("image/gym1.png","image/gym2.png");
  eat = loadAnimation("image/eat1.png","image/eat1.png","image/eat2.png","image/eat2.png");
  bath = loadAnimation("image/bath1.png","image/bath1.png","image/bath2.png","image/bath2.png");
 move = loadAnimation("image/move1.png","image/move1.png","image/move2.png","image/move2.png");
  gym2 =
loadAnimation("image/gym11.png","image/gym11.png","image/gym12.png","image/gym12.png")
}

function setup() {
  createCanvas(605, 500);
  
  astronaut = createSprite(300,230);
  astronaut.addAnimation("sleeping", sleep);
  astronaut.scale = 0.1;
  
}

function draw() {
  background(bg);
  drawSprites();

  textSize(16);
  fill("white")
  text("Instructions:",20,35 );
  text("Up Arrow Key = Brushing",20, 60);
  text("Down Arrow Key = Gymming",20, 75);
  text("Left Arrow Key = Eating",20, 90);
  text("Right Arrow Key = Bathing",20, 105);
  text("M Key = Moving",20, 120);
  text("G Key = Gymming",20,135)
  
  edges=createEdgeSprites();
  astronaut.bounceOff(edges);
  
  if(keyDown("up")){
    astronaut.addAnimation("brushing", brush);
    astronaut.changeAnimation("brushing");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  
  if(keyDown("down")){
    astronaut.addAnimation("gym", gym);
    astronaut.changeAnimation("gym");
    astronaut.x = 300;
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  
  if(keyDown("left")){
    astronaut.addAnimation("eat", eat);
    astronaut.changeAnimation("eat");
    astronaut.x = 200;
    astronaut.y = 350;
    astronaut.velocityX = 1;
    astronaut.velocityY = 1;
  }
  
  if(keyDown("right")){
    astronaut.addAnimation("bath", bath);
    astronaut.changeAnimation("bath");
    astronaut.x = 300;
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if(keyDown("m")){
    astronaut.addAnimation("move", move);
    astronaut.changeAnimation("move");
    astronaut.velocityX = 1;
    astronaut.velocityY = 1;
  }
  if(keyDown("g")){
    astronaut.addAnimation("gymming", gym2);
    astronaut.changeAnimation("gymming");
    astronaut.x = 300;
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

}
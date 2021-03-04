  
var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  f2=createSprite(400,100,50,50);
f2.shapeColor="green"
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
 if(darksole(movingRect,f2)){
  movingRect.shapeColor = "red";
  f2.shapeColor = "red";
}
else {
  movingRect.shapeColor = "green";
  f2.shapeColor = "green";
}

 
  drawSprites();
}


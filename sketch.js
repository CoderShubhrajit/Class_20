var fixRect,movingRect;
var number;

function setup() {
  createCanvas(1200,800);
  fixRect = createSprite(400, 200, 50, 80);
  movingRect = createSprite(600,400,80,30);

  fixRect.shapeColor = "green";
  movingRect.shapeColor ="green";

  fixRect.debug = true;
  movingRect.debug = true;
}

function draw() {
  background("pink");

  //var check = movingRect.x-fixRect.x;
  //var check1 = fixRect.x-movingRect.x;

  number = fixRect.width/2+movingRect.width/2;

  //console.log(number);
  //console.log("check"+check1);

  if (fixRect.x-movingRect.x<fixRect.width/2+movingRect.width/2 
    && movingRect.x-fixRect.x<movingRect.width/2+fixRect.width/2
    && fixRect.y-movingRect.y<fixRect.height/2+movingRect.height/2
    && movingRect.y-fixRect.y<movingRect.height/2+fixRect.height/2){
      movingRect.shapeColor = "red";
      fixRect.shapeColor = "red";
    }else
    {fixRect.shapeColor = "green";
    movingRect.shapeColor ="green";
    }
  
  movingRect.x = mouseX;
  movingRect.y = mouseY;
  drawSprites();
}
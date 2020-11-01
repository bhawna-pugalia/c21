var fixedRect, movingRect;
var object1,object2,object3

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  object1=createSprite(100,50,50,50)
  object2=createSprite(200,50,50,50)
  object3=createSprite(300,50,50,50)

  object1.shapeColor="green"
  object2.shapeColor="green"
  object3.shapeColor="green"
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(object2,movingRect)){  //arguments
    object2.shapeColor = "pink";
    movingRect.shapeColor="pink"
  }
  else{
   object2.shapeColor = "green";
    movingRect.shapeColor = "green";
  }

  drawSprites();
}
function isTouching(ob1,ob2){   //parameters
  if (ob1.x -ob2.x < ob2.width/2 + ob1.width/2
    && ob2.x - ob1.x < ob2.width/2 + ob1.width/2
    && ob1.y - ob2.y < ob2.height/2 + ob1.height/2
    && ob2.y - ob1.y < ob2.height/2 + ob1.height/2) {
      return true; //boolean values
}
else {
  return false;
}
}
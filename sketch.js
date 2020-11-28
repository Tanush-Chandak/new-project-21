
var bullet,wall,thickness;
var speed,weight;




function setup() {
  createCanvas(1700,600);
 bullet= createSprite(50, 200, 50, 50);
speed=random(223,321);
weight=random(30,52);
thickness=random(22,83);
wall=createSprite(1200,200,thickness,height/2);

bullet.velocityX= speed;

}


function draw() {
  background(255,255,255);  
  drawSprites();
if(hasCollided(bullet,wall)){

bullet.velocityX=0;
var damage=0.5*weight*speed*speed/(thickness*thickness*thickness)

if(damage>10){

wall.shapeColor=color(255,0,0);
}
if(damage<10){

  wall.shapeColor=color(0,255,0);
}


}

}

function hasCollided(object1,object2){

rightEdge= object1.x+object1.width;
leftEdge=object2.x;

if(rightEdge>=leftEdge){
return true;
}

return false

  }









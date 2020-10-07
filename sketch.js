var bullet, wall, thickness;

var speed, weight;

function setup() {
  createCanvas(1600,400);

  bullet = createSprite(50,200,50,10);
  bullet.shapeColor = "white"
  

  wall = createSprite(1200,200,thickness,200);
  wall.shapeColor = color(80,80,80);
  
  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);
}

function draw() {
  background("lightblue");  

  bullet.velocityX = speed;
  
  if(hasCollided(bullet,wall))
  {
bullet.velocityX = 0;
var damage = 0.5*width*speed*speed/(thickness*thickness*thickness);

if(damage>10)
{
  wall.shapeColor = color(255,0,0);
}

if(damage<10)
{
  wall.shapeColor = color(0,255,0);
}

  }
  
  hasCollided()
  drawSprites();
}

function hasCollided(Lbullet, Lwall)
{
bulletRightEdge = bullet.x +bullet.width; 
wallLeftEdge = wall.x; 

if(bulletRightEdge>=wallLeftEdge)
{
return true

}
return false;


}
var seaImg,shipImg1,sea;
var spriteName,addImage,x;
function preload(){

  seaImg = loadImage("sea.png");
shipImg1 = loadAnimation(ship1,ship2,ship3,ship4);
  spriteName.addImage(seaImg);
}

function setup(){
  createCanvas(400,400);
  
}

function draw() {
  
  background("blue");

if(sea.x < 0){
sea.x = sea.width/2; 
  velocityX = 4;
}
    drawSprites();

 
}

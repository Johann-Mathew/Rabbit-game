var garden,rabbit;
var gardenImg,rabbitImg;
var appleImg;
var apple;
var leaf;
var leafImg;
var orng;
var orngImg;
function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  leafImg = loadImage("leaf.png");
  orngImg = loadImage("orangeLeaf.png");
}

function createApples(){
  apple = createSprite(random(50,350),40,10,10);
  apple.scale =0.07;
  apple.addImage(appleImg);
  apple.velocityY = 3;
  apple.lifetme = 160; 
}

function createLeaves(){

leaf = createSprite(random(50,350),40,10,10);
leaf.scale =0.07;
leaf.addImage(leafImg);
leaf.velocityY = 1.87;
leaf.lifetime = 150;
}

function createOrngLeaf(){

  orng = createSprite(random(50,350),40,10,10);
  orng.scale =0.07;
  orng.addImage(orngImg)
  orng.velocityY = 1.76;
  orng.lifetime = 150;
}





function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);

  createApples();
  createLeaves();
  createOrngLeaf();
}




function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  
  drawSprites();
  rabbit.x = mouseX;
var select_sprites = Math.round(random(1,2));
if (frameCount % 80 == 0){
  if (select_sprites == 1) {
  createApples();
}
else {
  createLeaves();
  createOrngLeaf();
}
}
}
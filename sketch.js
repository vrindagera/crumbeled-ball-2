
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dustbinImg
function preload(){
 dustbinImg  = loadImage ("dustbingreen.png")
}

function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;
 dustbin = createSprite(1000,500,20,20);
 dustbin.addImage(dustbinImg)
 dustbin.scale = 0.50;
	//Create the Bodies Here.
paper1 = new Paper(100,100,40);
 dustbin1 = new Dustbin(900,550,10,120);
 dustbin2 = new Dustbin(945,590,130,10);
 dustbin3 = new Dustbin(990,550,10,120);
 

 ground = new Ground(600,height,2000,20);
 

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);

  paper1.display();
  dustbin1.display();
  dustbin3.display();
  dustbin2.display();

  ground.display();
 
  drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x: 77,y:-79});
	}
}



const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
	
var engine,world;


function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	paper = new Paper(100,600,80)

	ground = new Ground(800,680,1600,20);

	dustbinObj=new Dustbin(1200,650)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);

  background(230);

  Engine.update(engine);
  
  paper.display();

  ground.display();

	
  
  dustbinObj.display();

  drawSprites();

}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:15,y:-15})
	}
}
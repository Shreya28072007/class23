var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bar1,bar2,bar3;
var bar1Sprite,bar2Sprite,bar3Sprite;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 200, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2
	


	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	bar1Sprite = createSprite(width/2,650,200,20);
	bar1Sprite.shapeColor="red";
	bar2Sprite = createSprite(290,610,20,100);
	bar2Sprite.shapeColor="red";
	bar3Sprite = createSprite(510,610,20,100);
	bar3Sprite.shapeColor="red";	

	engine = Engine.create();
	world = engine.world;
	

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	 bar1 = Bodies.rectangle(width/2,650,200,20,{isStatic:true});
	 World.add(world,bar1);

	 bar2 = Bodies.rectangle(290,610,20,100,{isStatic:true});
	 World.add(world,bar2);

	 bar3 = Bodies.rectangle(510,610,20,100,{isStatic:true});
	 World.add(world,bar3);
	//bar1 = new Bars(width/2,650,200,20);
	//bar2 = new Bars(;290,610,20,100)
	//bar3 = new Bars(510,610,20,100);

	Engine.run(engine);
  
}


function draw() {
  
  background(0);
 packageSprite.collide(bar1Sprite);
  keyPressed();	
drawSprites();
packageSprite.x= packageBody.position.x ;
packageSprite.y= packageBody.position.y ;

	rectMode(CENTER);
  


}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	
	
    Matter.Body.setStatic(packageBody,false);
	
  }
}




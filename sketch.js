const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var score = 0;

function preload()
{
	
}

function setup() {
 createCanvas(1800, 700);

 engine = Engine.create();
 world = engine.world;

 ground = new Ground(700,550,400,20)
 ground2 = new Ground(1200,350,400,20)
 polygon1=new polygon(200,500,30)

 chain1=new chain(polygon1.body,{x:200,y:500})
//level 1
 b1=new box(550,ground.body.position.y - 50)
 b2=new box(600,ground.body.position.y - 50)
 b3=new box(650,ground.body.position.y - 50)
 b4=new box(700,ground.body.position.y - 50)
 b5=new box(750,ground.body.position.y - 50)
 b6=new box(800,ground.body.position.y - 50)
 b7=new box(850,ground.body.position.y - 50)
//level 2
 b8=new box(600,b1.body.position.y - 50)
 b9=new box(650,b1.body.position.y - 50)
 b10=new box(700,b1.body.position.y - 50)
 b11=new box(750,b1.body.position.y - 50)
 b12=new box(800,b1.body.position.y - 50)
//level 3
 b13=new box(650,b8.body.position.y - 50)
 b14=new box(700,b8.body.position.y - 50)
 b15=new box(750,b8.body.position.y - 50)
//top block
 b16=new box(700,b13.body.position.y - 50)

 //second part || level 1
 b17 = new box(1050,ground2.body.position.y - 50);
 b18 = new box(1100,ground2.body.position.y - 50);
 b19 = new box(1150,ground2.body.position.y - 50);
 b20 = new box(1200,ground2.body.position.y - 50);
 b21 = new box(1250,ground2.body.position.y - 50);
 b22 = new box(1300,ground2.body.position.y - 50);
 b23 = new box(1350,ground2.body.position.y - 50);
  //level 2
 b24 = new box(1100,b17.body.position.y - 50);
 b25 = new box(1150,b17.body.position.y - 50);
 b26 = new box(1200,b17.body.position.y - 50);
 b27 = new box(1250,b17.body.position.y - 50);
 b28 = new box(1300,b17.body.position.y - 50);
 //level 3
 b29 = new box(1150,b24.body.position.y - 50);
 b30 = new box(1200,b24.body.position.y - 50);
 b31 = new box(1250,b24.body.position.y - 50);
 //top block
 b32 = new box(1200,b29.body.position.y - 50);

 Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);
  push()
  textSize(40); 
  fill("white");
  text("score: "+ score,650,50);
  textSize(30)
  fill("cyan")
  stroke("white")
  strokeWeight(3)
  text("DRAG THE HEXAGONAL STONE AND RELEASE IT TO LAUNCH IT TOWARDS THE BLOCKS",100,100)
  pop()

  ground.display()
  ground2.display()
  fill(255, 0, 110)
  b1.display()
  b2.display()
  b3.display()
  b4.display()
  b5.display()
  b6.display()
  b7.display()
  
  fill(255, 114, 182)
  b8.display()
  b9.display()
  b10.display()
  b11.display()
  b12.display()
  
  fill(255, 161, 226)
  b13.display()
  b14.display()
  b15.display()
  
  fill(255, 219, 235)
  b16.display()
 
  fill(255, 0, 110)
  b17.display()
  b18.display()
  b19.display()
  b20.display()
  b21.display()
  b22.display()
  b23.display()
  
  fill(255, 114, 182)
  b24.display()
  b25.display()
  b26.display()
  b27.display()
  b28.display()
  
  fill(255, 161, 226)
  b29.display()
  b30.display()
  b31.display()

  fill(255, 219, 235)
  b32.display()
  
  polygon1.display()
  chain1.display()

  b1.score();
  b2.score();
  b3.score();
  b4.score();
  b5.score();
  b6.score();
  b7.score();
  b8.score();
  b9.score(); 
  b10.score();
  b11.score();
  b12.score();
  b13.score();
  b14.score();
  b15.score();
  b16.score();
  b17.score();
  b18.score();
  b19.score();
  b20.score();
  b21.score();
  b22.score();
  b23.score();
  b24.score();
  b25.score();
  b26.score();
  b27.score();
  b28.score();
  b29.score();
  b30.score();
  b31.score();
  b32.score();

  drawSprites();
}

 function mouseDragged(){
  Matter.Body.setPosition(polygon1.body,{x:mouseX,y:mouseY})
    }

 function mouseReleased(){
 chain1.fly()
   }

 function keyPressed(){
 if (keyCode === 32){
  chain1.attach(polygon1.body);
    }
  }
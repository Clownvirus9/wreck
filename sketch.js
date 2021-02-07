

const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
const Constraint = Matter.Constraint;
var engine,world;
    var block1;
    var block2; 
    var block3;
    var block4; 
    var block5;
    var block6;
    var block7;
    var block8; 
    var block9; 
    var block10; 
    var block11; 
    var block12; 
    
    
    var lamborghini;
    var constraint;
    var bg;
    var ground;
    var CorvettE;
    var canvas;

function preload() {

bg = loadImage("2019-12-17_5df95c47afa15_Roads.jpg")
}

function setup() {
  canvas = createCanvas(3000, 1300);
  engine = Engine.create();
  world = engine.world;
  lamborghini = new Lamborghini(300,600,400,300);
  constraint = new launcher(lamborghini.body,{x:300,y:400})
  ground = new Ground(600,600,1200,10)
  block1 = new Rails(800,500);
  block2 = new Rails(800,490);
  block3 = new Rails(800,480);
  block4 = new Rails(800,470);
  block5 = new Rails(800,460);
  block6 = new Rails(800,450);

  block7 = new Rails(1000,500);
  block8 = new Rails(1000,490);
  block9 = new Rails(1000,480);
  block10 = new Rails(1000,470);
  block11 = new Rails(1000,460);
  block12 = new Rails(1000,450);
  
  CorvettE = new Corvette(1100,400,150,150);




  

}

function draw() {
  background(bg);
  Engine.update(engine);
  constraint.display();
  ground.display();
  lamborghini.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  CorvettE.display()
 
  if(CorvettE.body.position.x>1120){
    textSize(30)
    textFont("century gothic")
    text("You won!!",500,300)
  }
}

function mouseDragged(){
  Matter.Body.setPosition(lamborghini.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
  constraint.fly()
}
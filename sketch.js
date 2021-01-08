const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var box1, pig1, pig2;
var bgImg;
var platform;
var log6;
var slingShot;

function preload(){
bgImg = loadImage("sprites/bg.png");

}

function setup(){
    var canvas = createCanvas(1200,1000);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20)
    platform = new Ground(100,850,200,300);
    box1 = new Box(700,920,70,70);
    box2 = new Box(920,920,70,70);
    pig1 = new Pig(810,950);
    log1 = new Log(810,860,300, PI/2);

    box3 = new Box(700,840,70,70);
    box4 = new Box(920,840,70,70);
    pig2 = new Pig(810,820);

    log3 =  new Log(810,780,300, PI/2);

    box5 = new Box(810,760,70,70);
    log4 = new Log(760,720,150, PI/7);
    log5 = new Log(870,720,150, -PI/7);
    log6 = new Log(600,500,200,200, PI/2);

    bird = new Bird(125,520);
    slingShot = new SlingShot(bird.body,{x:85,y:530});
}

function draw(){
    background(bgImg);
    Engine.update(engine);
    box1.display();
    box2.display();
    ground.display();
    platform.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig2.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();
    log6.display();

    bird.display();
    slingShot.display();
}

function mouseDragged(){
    Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
    slingShot.fly();
}

function keyPressed(){
    if(keyCode == 32){
        slingShot.attach(bird.body)
    }
}
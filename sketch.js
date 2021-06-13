const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,bgimg;

function preload(){
bgimg=loadImage("backgroung.png")
}


function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
 
    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    box3= new Box(700,240,70,70);
    box4=new Box(920,240,70,70);
    box5=new Box(810,160,70,70);
    
    Pig1=new Pig(810,350);
    Pig2=new Pig(810,220);
    log1= new Log(810,260,300,PI);
    log2=new Log(810,180,300,PI);
    log3=new Log(760,120,150,PI/7);
    log4=new Log(870,120,150,-PI/7)
    ground = new Ground(600,height,1200,20)
    bird1=new Bird(100,100);
}

function draw(){
    background(bgimg);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    box3.display();
    box4.display();
    box5.display();
    log1.display();
    log2.display();
    log3.display();
    log4.display();
    bird1.display();
    Pig1.display();
    Pig2.display();
}
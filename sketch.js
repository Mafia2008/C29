const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;
//var sling3;
function preload() {
    backgroundImg = loadImage("sprites/bg.png");
    //sling3 = loadImage("sprites/sling3.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);

    bird = new Bird(200,50);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:200, y:50});
}

function draw(){
    background(backgroundImg);
    text(mouseX+","+mouseY, mouseX, mouseY);
    Engine.update(engine);
    strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    bird.display();
    platform.display();
    //log6.display();
    slingshot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
    
    /*var pointA = bird.body.position
    var pointBx = 200;
    var pointBy = 50;
    
        if(pointA.x<220){
            strokeWeight(8);
            stroke(48, 22, 8);
            line(pointA.x - 20, pointA.y, pointBx - 10, pointBy);
            line(pointA.x - 20, pointA.y, pointBx + 30, pointBy - 3);
            image(sling3, pointA.x - 30, pointA.y - 10, 15, 30);
        }else{
            strokeWeight(5);
            stroke(48, 22, 8);
            line(pointA.x + 25, pointA.y, pointBx + 20, pointBy);
            line(pointA.x + 25, pointA.y, pointBx - 25, pointBy - 3);
            image(sling3, pointA.x + 25, pointA.y - 10, 15, 30);
        }*/
}


function mouseReleased(){
    slingshot.fly();
}
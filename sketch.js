const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var ball;
var ball1;
var ball2;
var ball3;

var ground;

var stair;
var stair1;
var stair2;
var stair3;

var wall1;
var wall2;

var wedge;
var angle = 60;

function setup() {
    createCanvas(400,400);
    
    engine = Engine.create();
    world = engine.world;

    var ball_options = {
        restitution: 0.95,
        frictionAir:0.01
    }
    
    var ground_options={
        isStatic: true
    }

    var ball1_options = {
        restitution: 0.99,
        frictionAir: 0.001
    }

    var ball2_options = {
        restitution: 0.99,
        frictionAir: 0.01
    }

    var ball3_options = {
        restitution: 0.99,
        frictionAir: 0.01
    }

    var stair_options = {
        isStatic: true
    }

    var stair1_options = {
        isStatic: true
    }

    var stair2_options = {
        isStatic: true
    }

    var stair3_options = {
        isStatic: true
    }

    var wall1_options = {
        isStatic: true
    }

    var wall2_options = {
        isStatic: true
    }

    ball = Bodies.circle(100, 10, 20, ball_options);
    World.add(world, ball);
    ball1 = Bodies.circle(150, 10, 15, ball1_options);
    World.add(world, ball1);
    ball2 = Bodies.circle(270, 10, 30, ball2_options);
    World.add(world, ball2);
    ball3 = Bodies.circle(350, 10, 25, ball3_options);
    World.add(world, ball3);

    ground = Bodies.rectangle(200, 390, 400, 20, ground_options);
    World.add(world, ground);

    stair = Bodies.rectangle(66, 50, 50, 10, stair_options);
    World.add(world, stair)
    stair1 = Bodies.rectangle(178, 200, 50, 10, stair1_options);
    World.add(world, stair1)
    stair2 = Bodies.rectangle(240, 73, 50, 10, stair2_options);
    World.add(world,stair2);
    stair3 = Bodies.rectangle(382, 300, 50, 10, stair3_options);
    World.add(world, stair3);

    wall1 = Bodies.rectangle(0, 200, 10, 400, wall1_options);
    World.add(world, wall1);
    wall2 = Bodies.rectangle(400, 200, 10, 400, wall2_options);
    World.add(world, wall2);

    wedge = Bodies.rectangle(50, 200, 50, 10, wall2_options);
    World.add(world, wedge);
    rectMode(CENTER);
    ellipseMode(RADIUS);

}

function draw(){
    background("black");

    Engine.update(engine);

    Matter.Body.rotate(wedge, angle);
    push();
    translate(wedge.position.x, wedge.position.y);
    rotate(angle);
    rect(0, 0, 100, 20);
    pop();
    angle += 0.1;

    fill(0,220,220, 150);
    ellipse(ball2.position.x, ball2.position.y, 30);
    
    fill("blue");
    ellipse(ball1.position.x, ball1.position.y, 15);

    fill("green");
    ellipse(ball.position.x, ball.position.y, 20);

    fill("gray");
    ellipse(ball3.position.x, ball3.position.y, 25);

    rect(ground.position.x, ground.position.y, 400, 20);

    rect(stair.position.x, stair.position.y, 50, 10);
    rect(stair1.position.x, stair1.position.y, 50, 10);
    rect(stair2.position.x, stair2.position.y, 50, 10);
    rect(stair3.position.x, stair3.position.y, 50, 10);

    rect(wall1.position.x, wall1.position.y, 10, 400);
    rect(wall2.position.x, wall2.position.y, 10,400);
}
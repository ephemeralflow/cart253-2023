/**
 * Love Actually (?)
 * Scarlett Perez
 * 
 * I decided to play on the unwanted love and make a simulator on running away from a stalker who loves you which (obviously) you don't love back.
 * Your goal is to not get caught by the stalker or survive long enough that the stalker stops pursuing you.
 */

"use strict";

let circle1 = {
    x: 200,
    y: 300,
    size: 100,
    vx: 0,
    vy: 0,
    speed: 5, 
}

let circle2 = {
    x: 400,
    y: 300,
    size: 100,
    vx: 0,
    vy: 0,
    speed: 5, 
}

let timer = 15;

let state = `title`

function setup() {
    createCanvas(600, 600);

    circle1.vx = random(-circle1.speed, circle1.speed);
    circle1.vy = random(-circle1.speed, circle1.speed);
    circle2.vx = random(-circle2.speed, circle2.speed);
    circle2.vy = random(-circle2.speed, circle2.speed);
}


/**
 * Description of draw()
*/
function draw() {
    background(0);
    

    text(timer, 50, 50);

    if (state === `title`) {
        title();
      }
      else if (state === `simulation`) {
        simulation();
      }
      else if (state === `flee`) {
        flee();
      }
      else if (state === `lose`) {
        lose();
      }   
      else if (state === `survived`) {
        survived();
      }
      
}

function title() {
    textSize(64);
    fill(200,100,100);
    textAlign(CENTER,CENTER);
    text(`LOVE?`, width/2,height/2);
    textSize(20);
    textAlign(CENTER,CENTER);
    text(`Move by holding down the mouse`, width/2,350);
    text(`button and moving your mouse.`, width/2,380);
    textSize(10);
    textAlign(CENTER,CENTER);
    text(`You're being followed by someone who loves you.`, width/2,400);
    text(`They believe you love them back.`, width/2,410);
    text(`You don't know them.`, width/2,420);
    text(`Don't get caught in this stalker's twisted love.`, width/2,430);
}

function survival(){
    textSize(30);
    if (frameCount % 60 == 0 && timer > 0) {
        timer --;
    }

    if (timer == 0) {
        survived();
    }
}

function simulation(){
    move();
    checkOffscreen();
    checkOverlap();
    display();
    pursuit();
    survival();
}

function survived() {
    textSize(64);
    fill(200,100,100);
    textAlign(CENTER,CENTER);
    text(`You escaped!`, width/2,height/2);
}

function lose() {
    textSize(55);
    fill(200,100,100);
    textAlign(CENTER,CENTER);
    text(`"You love me too right?!"`, width/2,height/2);
}

function flee() {
    textSize(72);
    fill(200,100,100);
    textAlign(CENTER,CENTER);
    text(`You ran...`, width/2,height/2);
    textSize(50);
    text(`...and ran...`, width/2,380);
    textSize(40);
    text(`...and ran...`, width/2,450);
    textSize(30);
    text(`...and ran...`, width/2,500);
    textSize(20);
    text(`...and ran...`, width/2,530);
    textSize(10);
    text(`...and ran...`, width/2,550);
    textSize(5);
    text(`...and ran...`, width/2,570);
    textSize(2); 
    text(`...and ran...`, width/2,580);
}

function move() {
    circle2.x = circle2.x + circle2.vx;
    circle2.y = circle2.y + circle2.vy;
}

function pursuit() {
    let dx = circle2.x - mouseX; 
      let dy = circle2.y - mouseY; 

      if (dx < 0) { 
        circle2.vx = circle2.speed;
      }
      else if (dx > 0) { 
        circle2.vx = -circle2.speed;
      }
      
      if (dy < 0) {
        circle2.vy = circle2.speed;
      }
      else if (dy > 0) {
        circle2.vy = -circle2.speed;
      }
}

function checkOffscreen() {
    //Sad Ending
    if (circle1.x > width || circle1.x < 0 || circle1.y > height ||circle1.y <0 || circle2.x > width || circle2.x < 0 || circle2.y > height ||circle2.y <0){
        state = `flee`;
    }
}

function checkOverlap() {
    //True Love!
    let d = dist(circle1.x, circle1.y, circle2.x, circle2.y);
    if (d < circle1.size/2  && d < circle2.size/2 ){
        state = `lose`;
    } 
}

function display() {
    ellipse(circle1.x, circle1.y, circle1.size, circle1.size);
    ellipse(circle2.x, circle2.y, circle2.size, circle2.size);
}

function mousePressed() {
    if (state === `title`){
        state = `simulation`;
    }
}

function mouseDragged() {
    //Move one circle by dragging the mouse
    circle1.x = mouseX;
    circle1.y = mouseY;
    }
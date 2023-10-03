/**
 * Love (?)
 * Scarlett Perez
 * 
 * I decided to play on the unwanted love and make a simulator on running away from a stalker who loves you which (obviously) you don't love back.
 * Your goal is to not get caught by the stalker or survive long enough that the stalker stops pursuing you.
 */

"use strict";

let user = {
    x: 200,
    y: 300,
    size: 100,
    vx: 0,
    vy: 0,
    speed: 5, 
}

let stalker = {
    x: 400,
    y: 300,
    size: 100,
    vx: 0,
    vy: 0,
    speed: 5, 
}

//Setting the timer name and the images, also the current state
let timer = 15;
let state = `title`
let bgimg;
let ene;
let youcore;

function preload() {
    //preloading the images for later
    bgimg = loadImage ('assets/images/IMG_5452.jpg');
    ene = loadImage('assets/images/ene.png');
    youcore = loadImage('assets/images/youcore.png');
}

function setup() {
    //Setting up the canvas and the background
    createCanvas(600, 600);
    image(bgimg,0,0);
}


/**
 * Description of draw()
*/
function draw() {
    background(0);
    imageMode(CORNERS);
    image (bgimg, 0,0,600,600)

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
    push();
    textSize(64);
    fill(176,11,30);
    textAlign(CENTER,CENTER);
    text(`LOVE?`, width/2,260);
    textSize(20);
    textAlign(CENTER,CENTER);
    text(`Move by holding down the mouse\nbutton and moving your mouse.`, width/2,320);
    pop(); 

    push();
    fill(102,44,44)
    textSize(15);
    textAlign(CENTER,CENTER);
    text(`You're being followed by someone who loves you.\nThey believe you love them back.\nYou don't know them.\nDon't get caught in this stalker's twisted love.`, width/2,400);
    pop();
}


function simulation(){
    move();
    checkOffscreen();
    checkOverlap();
    display();
    pursuit();
    survival();
}

function lose() {
    //Text for bad ending
    push();
    textSize(55);
    fill(176,11,30);
    textAlign(CENTER,CENTER);
    text(`"You love me too right?!"`, width/2,height/2);
    pop();
}

function flee() {
    //Text for the ending that you get from leaving the canvas, neutral ending
    push();
    textSize(72);
    fill(176,11,30);
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
    pop();
}

function survival(){
    //Setting a timer that would count down for the amont of time the user has to hold out and survive
    textSize(30);
    if (frameCount % 60 == 0 && timer > 0) {
        timer --;
    }

    if (timer == 0) {
        survived();
        noLoop();
    }
}

function survived() {
    background(0);
    //reinstating the background image because if I didn't the user and stalker would stay on the canvas and I have no idea why but nothing that 2 lines of code can't fix!!!
    imageMode(CORNERS);
    image (bgimg, 0,0,600,600)
    //Text that shows that you won/fled
    textSize(64);
    fill(176,11,30);
    textAlign(CENTER,CENTER);
    text(`You escaped!`, width/2,height/2);
}
function move() {
    //Making it possible for the stalker to move
    stalker.x = stalker.x + stalker.vx;
    stalker.y = stalker.y + stalker.vy;
}

function pursuit() {
    //To make it that the stalker would follow the user's mouse position
    let dx = stalker.x - mouseX; 
      let dy = stalker.y - mouseY; 

      if (dx < 0) { 
        stalker.vx = stalker.speed;
      }
      else if (dx > 0) { 
        stalker.vx = -stalker.speed;
      }
      
      if (dy < 0) {
        stalker.vy = stalker.speed;
      }
      else if (dy > 0) {
        stalker.vy = -stalker.speed;
      }
}

function checkOffscreen() {
    //Checks if the user circle is off the canvas, giving you the ending of fleeing
    if (user.x > width || user.x < 0 || user.y > height ||user.y <0 || stalker.x > width || stalker.x < 0 || stalker.y > height ||stalker.y <0){
        state = `flee`;
    }
}

function checkOverlap() {
    //Checks if the user circle and the stalker overlap, making user lose but stalker win
    let d = dist(user.x, user.y, stalker.x, stalker.y);
    if (d < user.size/2  && d < stalker.size/2 ){
        state = `lose`;
    } 
}

function display() {
    //Displays the circles as images
    imageMode(CENTER);
    image (youcore, user.x, user.y)
    imageMode(CENTER);
    image (ene, stalker.x, stalker.y)
}
//When pressing the mouse, you will start the game
function mousePressed() {
    if (state === `title`){
        state = `simulation`;
    }
}

function mouseDragged() {
    //Move the user circle by dragging the mouse
    user.x = mouseX;
    user.y = mouseY;
    }
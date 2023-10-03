/**
 * Title of Project
 * Author Name
 * 
 * This is a template. You must fill in the title, author, 
 * and this description to match your project!
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

/**
 * Description of setup
*/

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

    if (state === `title`) {
        title();
      }
      else if (state === `simulation`) {
        simulation();
      }
      else if (state === `love`) {
        love();
      }
      else if (state === `sadness`) {
        sadness();
      }   
}

function title() {
    textSize(64);
    fill(200,100,100);
    textAlign(CENTER,CENTER);
    text(`LOVE?`, width/2,height/2);
}

function simulation(){
    move();
    checkOffscreen();
    checkOverlap();
    display();
}

function love() {
    textSize(64);
    fill(200,100,100);
    textAlign(CENTER,CENTER);
    text(`LOVE!!`, width/2,height/2);
}

function sadness() {
    textSize(64);
    fill(200,100,100);
    textAlign(CENTER,CENTER);
    text(`DDD:`, width/2,height/2);
}

function move() {
    circle1.x = circle1.x + circle1.vx;
    circle2.x = circle2.x + circle2.vx;
    circle1.y = circle1.y + circle1.vy;
    circle2.y = circle2.y + circle2.vy;
}

function checkOffscreen() {
    //Sad Ending
    if (circle1.x > width || circle1.x < 0 || circle1.y > height ||circle1.y <0 || circle2.x > width || circle2.x < 0 || circle2.y > height ||circle2.y <0){
        state = `sadness`
    }
}

function checkOverlap() {
    //True Love!
    let d = dist(circle1.x, circle1.y, circle2.x, circle2.y);
    if (d < circle1.size/2  && d < circle2.size/2 ){
        state = `love`;
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

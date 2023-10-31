/**
 * Title of Project
 * Author Name
 * 
 * This is a template. You must fill in the title, author, 
 * and this description to match your project!
 */

"use strict";

let paddle;
let gravityForce = 0.0025;
let balls = [];
let numBalls = 3;
let clubs = [];
let numClubs = 2;

/**
 * Description of preload
*/
function preload() {

}


/**
 * Description of setup
*/
function setup() {
    createCanvas(windowWidth, windowHeight);

    paddle = new Paddle (300,20);

    for (let i = 0; i < numBalls; i++) {
        let x = random(0,width);
        let y = random(-400,-100);
        let ball = new Ball(x,y);
        balls.push(ball);
        //balls[i] = createBall(random(0, width), random(0, height));
    }

    for (let i = 0; i < numClubs; i++) {
        let x = random(0,width);
        let y = random(-400,-100);
        let club = new Club(x,y);
        clubs.push(club);
    }
}

/*function createBall(x, y) {
    x = x;
    y = y;
    vx = 0;
    vy = 0;
    ax = 0;
    ay = 0;
    maxSpeed = 10;
    size = 50;
}*/


/**
 * Description of draw()
*/
function draw() {
    background(0);

    paddle.move();
    paddle.display();

    for (let i = 0; i < balls.length; i++) {
        let ball = balls[i];
        if (ball.active) {
            ball.gravity(gravityForce);
            ball.move();
            ball.bounce(paddle);
            ball.display();
            //balls[i] = createBall(random(0, width), random(0, height));
        }
    }

    for (let i = 0; i < clubs.length; i++) {
        let club = clubs[i];
        if (club.active) {
            club.gravity(gravityForce);
            club.move();
            club.bounce(paddle);
            club.display();
        }
    }

    endings()
}

/*function mousePressed() {
    let ball = createBall(mouseX, mouseY);
    balls.push(ball)
}*/

function endings() {
    if (numBalls = 0) {
        background(0);
        //reinstating the background image because if I didn't the user and stalker would stay on the canvas and I have no idea why but nothing that 2 lines of code can't fix!!!
        imageMode(CORNERS);
        image (bgimg, 0,0,600,600)
        //Text that shows that you won/fled
        push();
        textSize(64);
        fill(176,11,30);
        textAlign(CENTER,CENTER);
        text(`You Lost :[`, width/2,height/2);
        pop();
    }
}
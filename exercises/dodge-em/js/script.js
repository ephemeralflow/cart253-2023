/**
 * Title of Project
 * Author Name
 * 
 * This is a template. You must fill in the title, author, 
 * and this description to match your project!
 */

"use strict";

let img;
let frown;
function preload() {
    img = loadImage ('assets/images/CHEERING.jpg');
    frown = loadImage('assets/images/slightly-frowning-face.png');
}

let meanie = {
    x: 0,
    y: 250,
    size: 100,
    vx: 0,
    vy: 0,
    speed: 5,
}

let user = {
    x: undefined,
    y: undefined,
    size: 100,
    fill: 0,
}

let Static = 10000;

/**
 * Description of setup
*/
function setup() {
    image(img,0,0);
    image(frown,0,0);
    createCanvas(windowWidth, windowHeight);
    meanie.y = random(0, height);
    meanie.vx = meanie.speed
}


/**
 * Description of draw()
*/
function draw() {
    background(0);
    image (img, 10,10,windowWidth,windowHeight)
    // Loop for the static background, makes the points that flash around, it reminds me of those really old glitter images from back then in the internet, I think its kinda funny (and kinda ugly... but I like it)
    for (let i = 0; i < Static; i++) {
        let bgx = random(0, width);
        let bgy = random(0, height);
        stroke(255);
        point(bgx,bgy);
    }

    //Movement = shape of the MEANIE not wanting you to be happy circle
    meanie.x = meanie.x + meanie.vx;
    meanie.y = meanie.y + meanie.vy;
    image (frown, meanie.x, meanie.y)
    fill(0);

    //Makes it that the MEANIE changes height after reaching the end of the screen
    //how to make meanie follow you computer help
    if (meanie.x > width){
        meanie.x = 0
        meanie.y = random(0, height);
    }

    //makes it that if both MEANIE and USER touch, the program will end.
    let d = dist(meanie.x, meanie.y, user.x, user.y);
    if (d < meanie.size  && d < user.size ){
        noLoop();
    } 

    // Make circle chasing have less alpha further away? ITS NOT WORKING
    //I just changed everything and I know even less how to do that whoops
    /*if (d < meanie.size  && d < user.size ){
        fill(meanie.fill.r,meanie.fill.g,meanie.fill.b, meanie.fill.a);
    } else (d > meanie.size  && d > user.size);{
        meanie.fill.a = meanie.fill.a / 2;
        fill(meanie.fill.r,meanie.fill.g,meanie.fill.b, meanie.fill.a);
    }; */

    //User Circle
    fill(user.fill);
    ellipse(user.x, user.y, user.size, user.size);    
}

function mouseDragged() {
    // User circle, follows the mouse
    user.x = mouseX;
    user.y = mouseY;
    }
/**
 * Title of Project
 * Author Name
 * 
 * This is a template. You must fill in the title, author, 
 * and this description to match your project!
 */

"use strict";

let covid19 = {
    x: 0,
    y: 250,
    size: 100,
    vx: 0,
    vy: 0,
    speed: 5,
    fill: {
        r: 255,
        g: 0,
        b: 0
    }
}

let user = {
    x: undefined,
    y: undefined,
    size: 100,
    fill: 255,
}

let Static = 10000;

/**
 * Description of setup
*/
function setup() {
    createCanvas(windowWidth, windowHeight);
    covid19.y = random(0, height);
    covid19.vx = covid19.speed
}


/**
 * Description of draw()
*/
function draw() {
    background(0);
    // Loop for the static background, does the points that flahs around
    for (let i = 0; i < Static; i++) {
        let bgx = random(0, width);
        let bgy = random(0, height);
        stroke(255);
        point(bgx,bgy);
    }
    //Movement = shape of the COVID circle
    covid19.x = covid19.x + covid19.vx;
    covid19.y = covid19.y + covid19.vy;
    fill(covid19.fill.r,covid19.fill.g,covid19.fill.b);
    noStroke();
    ellipse(covid19.x, covid19.y, covid19.size, covid19.size);

    //Makes it that the COVID changes height after reaching the end of the screen
    if (covid19.x > width){
        covid19.x = 0
        covid19.y = random(0, height);
    }

    // User circle, follows the mouse
    user.x = mouseX;
    user.y = mouseY;
    fill(user.fill);
    ellipse(user.x, user.y, user.size, user.size);

    //makes it that if both COVID and USER touch, the program will end.
    let d = dist(covid19.x, covid19.y, user.x, user.y);
    if (d < covid19.size  && d < user.size ){
        noLoop();
    }

}
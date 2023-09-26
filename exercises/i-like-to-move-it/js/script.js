/**
 * I Like To Move It
 * Scarlett Perez
 * 
 * moving things
 */

"use strict";

/**
 * Description of preload
*/
function preload() {

}

//Variables
let bg = {
    r: 0,
    g: 0,
    b: 0,
};

let square1 = {
    x: 400,
    y: 250,
    size: 100,
    fillr: 100,
    fillg: 200,
    fillb: 40,
};

let ellipse1 = {
    x: 10,
    y: 10,
    w: 200,
    h: 300,
    fillr: 255,
    fillg: 0,
    fillb: 0,
    speed: 1.03,
};

let ellipse2 = {
    x: 10,
    y: 10,
    w: 100,
    h: 300,
    fillr: 72,
    fillg: 150,
    fillb: 80,
    speed: 1.03,
};

let circle1 = {
    size: 200,
    fillr: 143,
    fillg: 200,
    fillb: 206,
};

/**
 * Description of setup
*/
function setup() {
    createCanvas(500,500);
    noStroke();

}


/**
 * Description of draw()
*/
function draw() {
    //Background
    background(bg.r,bg.g,bg.b);
    bg.g = (bg.g + 1);
    bg.g = constrain(bg.g, 0, 77)

    // Square that grows
    fill(square1.fillr, square1.fillg, square1.fillb);
    rectMode(CENTER);
    square(square1.x, square1.y, square1.size);
    square1.size = square1.size + 1;
    square1.size = constrain(square1.size, 0, width);

    // Ellipse 1
    fill(ellipse1.fillr, ellipse1.fillg, ellipse1.fillb);
    ellipse(ellipse1.x, ellipse1.y, ellipse1.w, ellipse1.h);
    // Ellipse 1 X movement
    ellipse1.x = ellipse1.x * ellipse1.speed;
    ellipse1.x = constrain(ellipse1.x, 0, width);
    // Ellipse 1 Y movement
    ellipse1.y = ellipse1.y * ellipse1.speed
    ellipse1.y = constrain(ellipse1.y, 0, width);
    // Ellipse 1 X movement (2)
    ellipse1.x = ellipse1.x * ellipse1.speed;
    ellipse1.x = constrain(ellipse1.x, 0, width);

    // Circle 1
    fill(circle1.fillr, circle1.fillg, circle1.fillb);
    circle(mouseX, mouseY, circle1.size);
    
    circle1.size = circle1.size - 1;
    circle1.size = constrain(circle1.size, 20, width);

    // Ellipse 2
    
    fill(ellipse2.fillr, ellipse2.fillg, ellipse2.fillb);
    //I don't know how to explain this but spin explode 
    angleMode(DEGREES);
    for (let i = 0; i < 5; i++){
        rotate(30);
        ellipse(ellipse2.x, ellipse2.y, ellipse2.w, ellipse2.h);
    }
    // Ellipse 2 Y movement
    ellipse2.y = ellipse2.y * ellipse2.speed
    ellipse2.y = constrain(ellipse2.y, 0, width);
    
    
    
    


    
    






}
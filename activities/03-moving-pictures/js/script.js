/**
 * Title of Project
 * Author Name
 * 
 * This is a template. You must fill in the title, author, 
 * and this description to match your project!
 */

"use strict";

/**
 * Description of preload
*/
function preload() {

}

//Variables
let bg = {
    red: 0,
    green: 0,
    blue: 0,
};

let circle1 = {
    x: 0,
    y: 250,
    size: 100,
    fill: (255, 255, 255, 200),
    speed: 1,
    growth: 0.25,
    relativeSize: 2,
};

let circle2 = {
    x: 500, 
    y: 0,
    size: 50,
    speed: - 1,
    growth: 0.9
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
    background(bg.red, bg.green, bg.blue);
    bg.red = bg.red + 1;

    //Circle 1
        //Movement
    circle1.x = circle1.x + circle1.speed;
    circle1.x = constrain(circle1.x, 0, width / circle1.relativeSize);
        //Size
    circle1.size = circle1.size + circle1.growth;
    circle1.size = constrain(circle1.size, 0, width);
        //Shape
    fill(circle1.fill);
    ellipse(circle1.x, circle1.y, circle1.size, circle1.size);

    //Circle 2
        //Movement
    circle2.x = circle2.x + circle2.speed;
    circle2.x = constrain(circle2.x, width / circle1.relativeSize, width);
        //Size
    circle2.size = circle1.size * circle2.growth;
        //Shape
    ellipse(circle2.x, circle2.y, circle2.size, circle2.size);
    
}
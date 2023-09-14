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

let backgroundShade = 0;
let circle = {
    x: 0, // Back to 0 to it starts on the left
    y: 250,
    size: 100,
    fill: 255,
    speed: 5
}


/**
 * Description of setup
*/
function setup() {
    createCanvas(500,500);
}


/**
 * Description of draw()
*/
function draw() {
    background(backgroundShade);
    ellipse(circle.x, circle.y, circle.size);
    circle.x = circle.x + circle.speed; // Move the circle
    circle.x = constrain(circle.x, 0, width); // Constrain the circle's x position within 0-width

    /*
    console.log("circleX is " + circleX); 
    console.log("circleY is " + circleY);
    console.log(`circleX: ${circleX}, circleY: ${circleY}, circleSize: ${circleSize}, circleSpeed: ${circleSpeed}`);
    */
}
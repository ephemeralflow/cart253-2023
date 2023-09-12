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

let x = 0;

/**
 * Description of setup
*/
function setup() {
    createCanvas(500, 500);
    background(255, 100, 100);
    noStroke();

}


/**
 * Description of draw()
*/
function draw() {
    //(first three are colors last alpha (ew alpha))
    background (255, 100, 100)
    rect(x, 100, 100, 100);
    x += 3;

    if (x > width) {
        x = 0;
    }

}
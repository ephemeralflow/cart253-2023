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


/**
 * Description of setup
*/
function setup() {
    //Creates the canvas where the alien will be + set the color
    createCanvas(640, 480);
    background(255, 127, 127);

    //removes the stroke color
    noStroke();

    //Making of the body, setting the colour to grey and setting the shape
    fill(127, 127, 127);
    ellipse(320, 450, 300, 300);

    //Making of head
    fill(100, 100, 100);
    ellipse(320, 170, 200, 300);

    //Making of the eyes
    fill(0, 0, 0);
    ellipse(250, 170, 50, 150);
    ellipse(390, 170, 50, 150);

    //Making the nose
    ellipse(300, 250, 10, 10);
    ellipse(330, 250, 10, 10);

    //Making the mouth by enabling the stroke again
    stroke(255, 0, 0);
    strokeWeight(2);
    rectMode(CENTER);
    rect(320, 290, 100, 50);
}


/**
 * Description of draw()
*/
function draw() {

}
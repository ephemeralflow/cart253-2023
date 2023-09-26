/**
 * Title of Project
 * Author Name
 * 
 * This is a template. You must fill in the title, author, 
 * and this description to match your project!
 */

"use strict";

/* Star Sky
// We need to know how many stars we want to draw in the sky
let numStars = 100;

function setup() {
  createCanvas(500, 500);
  // White stroke because we're using point() on black
  stroke(255);
}

function draw() {
  // Black sky
  background(0);
  // randomSeed() lets us make random() predictable: it will generate the same sequence of numbers
  // each time draw() is called
  randomSeed(0);
  // Our for loop counts from 0 to numStars
  for (let i = 0; i < numStars; i++) {
    // Choose a random x and y position on the canvas
    let x = random(0, width);
    let y = random(0, height);
    // Draw a point (star) there
    point(x, y);
  }
}*/

// A variable to track whether or not the light is on...
let lightIsOn = false;

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(255);

  // Draw a red ellipse you can only see when the light is on!
  fill(255,0,0);
  ellipse(250,250,100,100);

  // If the light is off, draw a black rectangle on top of everything
  // to hide it (make it "dark")
  // Notice how we check if the light is NOT on by using ! in front of the variable
  if (!lightIsOn) {
    fill(0);
    rect(0,0,width,height);
  }
}

function mousePressed() {
  // When the mouse button is pressed, flip the variable
  lightIsOn = !lightIsOn;
  // Notice how we can flip the true/false value by using the NOT operator !
  // If lightIsOn is true, then ! will make it false
  // If lightIsOn is false, then ! will make it true
}
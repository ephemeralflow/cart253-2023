/**
 * Title of Project
 * Author Name
 * 
 * This is a template. You must fill in the title, author, 
 * and this description to match your project!
 */

"use strict";

/* Functions
let circle = {
    x: 0,
    y: 250,
    size: 100,
    vx: 1,
    vy: 0
  }
  
  function setup() {
    createCanvas(500, 500);
  }
  
  function draw() {
    background(0);
  
    move(); // Call our move function so the circle position is updates
    wrap(); // Call our wrap function so the circle moves back to the left if it reaches the right
    display(); // Call our display function so the circle is displayed
  }
  
  // Defining our move function
  function move() {
    circle.x = circle.x + circle.vx;
    circle.y = circle.y + circle.vy;
  }
  
  // Defining our wrap function
  function wrap() {
    if (circle.x > width) {
      reset();
    }
  }
  
  // Defining our reset function
  function reset() {
    circle.x = 0;
    circle.vx = circle.vx + 1;
    circle.size = circle.size + 5;
  }
  
  // Defining our display function
  function display() {
    fill(255,0,0);
    ellipse(circle.x, circle.y, circle.size);
  }
  
  function mousePressed() {
    // CALLING reset()
    reset();
  }*/

  /* 
  RETURN
  let circle = {
    x: 250,
    y: 250,
    size: 100,
    vx: 0,
    vy: 0
  }
  
  function setup() {
    createCanvas(500, 500)
    reset();
  }
  
  function draw() {
    background(0);
  
    move();
  
    let offScreen = circleIsOffScreen();
    if (offScreen) {
      reset();
    }
  
    ellipse(circle.x, circle.y, circle.size);
  }
  
  function circleIsOffScreen() {
    let result = (circle.x < 0 || circle.x > width || circle.y < 0 || circle.y > height);
    return result;
  }
  
  function move() {
    circle.x = circle.x + circle.vx;
    circle.y = circle.y + circle.vy;
  }
  
  function reset() {
    circle.x = 250;
    circle.y = 250;
    circle.vx = random(-10, 10);
    circle.vy = random(-10, 10);
  }*/

  function setup() {
    createCanvas(500, 500);
  }
  
  function draw() {
    background(127);
  
    textAlign(CENTER, CENTER);
    // Make the font size respond to the mouse
    let size = map(mouseX, 0, width, 12, 128);
    textSize(size);
    textStyle(BOLD);
  
    // Make the fill respond to the mouse
    let red = map(mouseX, 0, width, 100, 200);
    let green = map(mouseY, 0, height, 100, 200);
    let blue = map(mouseX + mouseY, 0, width + height, 100, 200);
    fill(red, green, blue);
  
    // Make the stroke color respond to the mouse
    let strokeShade = map(mouseX, 0, width, 0, 255);
    stroke(strokeShade);
  
    // Make the stroke weight respond to the mouse
    let weight = map(mouseY, 0, height, 0, 40);
    strokeWeight(weight);
  
    text(`Hello, World!`, 250, 250);
  }

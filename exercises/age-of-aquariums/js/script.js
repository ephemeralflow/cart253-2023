/**
 * Title of Project
 * Author Name
 * 
 * This is a template. You must fill in the title, author, 
 * and this description to match your project!
 */

"use strict";

let school = [];
let schoolSize = 40;
let state = `title`;

let timer = 15;
let fishpng;
let bg;

let user = {
    x: 0,
    y: 0,
    size: 100
};  

function preload() {
    //preloading the images for later
    fishpng = loadImage ('assets/images/fish.png');
    bg = loadImage ('assets/images/background.jpg');
}
function setup() {
  createCanvas(600, 600);

  for (let i = 0; i < schoolSize; i++) {
    // Create a fish
    let fish = createFish(random(0, width), random(0, height));
    // Add the fish to our array
    school.push(fish);
  }
}

function createFish(x, y) {
  let fish = {
    x: x,
    y: y,
    size: random(30,40),
    vx: 0,
    vy: 0,
    speed: 2,
    fill: {
        r: 200,
        g: random (50,100),
        b: random (50,150)
    }
  };
  return fish;
}

function draw() {
    background(0);
    imageMode(CORNERS);
    image (bg, 0,0,600,600)
    push()
    fill(0)
    textSize(30)
    text(timer, 50, 50);
    pop()

    if (state === `title`) {
      title();
    } else if (state === `simulation`) {
      simulation();
    }

    moveUser();
    displayUser();
    fishgone();
  
    for (let i = 0; i < school.length; i++) {
      moveFish(school[i]);
      displayFish(school[i]);
    }
    timetoeat()
    ending1()
    
}

function timetoeat() {
    push();
    textSize(30);
    if (frameCount % 60 == 0 && timer > 0) {
        timer --;
    }

    if (timer == 0) {
        ending2();
        noLoop();
    }
    pop();

    if (timer == 0 && (schoolSize >= 2 && schoolSize <= 38)) {
        ending3();
        noLoop();
    }
}


function moveFish(fish) {
  // Choose whether to change direction
  let change = random(0, 1);
  if (change < 0.05) {
    fish.vx = random(-fish.speed, fish.speed);
    fish.vy = random(-fish.speed, fish.speed);
  }

  // Move the fish
  fish.x = fish.x + fish.vx;
  fish.y = fish.y + fish.vy;

  // Constrain the fish to the canvas
  fish.x = constrain(fish.x, 0, width);
  fish.y = constrain(fish.y, 0, height);
}

// displayFish(fish)
// Displays the provided fish on the canvas
function displayFish(fish) {
  push();
  fill(fish.fill.r,fish.fill.g,fish.fill.b);
  noStroke();
  ellipse(fish.x, fish.y, fish.size);
  pop();
}

function fishgone() {
    for (let i = 0; i < school.length; i++) {
        let fish = school[i];
        // Calculate the distance between the mouse position and the fish
        let d = dist(mouseX, mouseY, fish.x, fish.y);
        if (d < (user.size / 2) + fish.size / 2) {
          school.splice(i, 1);
          schoolSize --;
          break;
        }
    }
}

function displayUser() {
    push();
    fill(255);
    imageMode(CENTER);
    image(fishpng,user.x,user.y)
    pop();
}

function moveUser() {
    user.x = mouseX;
    user.y = mouseY;
}

function ending1() {
    if (school == 0) {
        background(255)
        textSize(64);
        fill(176,11,30);
        textAlign(CENTER,CENTER);
        text(`You live another day\n Congrats!!!`, width/2,height/2);
    }
}

function ending2() {
    background(0);
    push();
    textSize(64);
    fill(176,11,30);
    textAlign(CENTER,CENTER);
    text(`You died\n That's for not eating!!!`, width/2,height/2);
    pop();
}

function ending3() {
    background(0);
    push();
    textSize(64);
    fill(176,11,30);
    textAlign(CENTER,CENTER);
    text(`You died`, width/2,height/2);
    pop();
}

function title() {
  background(0);
    push();
    textSize(64);
    fill(176,11,30);
    textAlign(CENTER,CENTER);
    text(`fish simulator`, width/2,height/2);
    textSize(30);
    text(`you've been fed go eat your food (or not)`, width/2,350);
    pop();
}


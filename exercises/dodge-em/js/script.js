/**
 * Happiness Simulator
 * Scarlett Perez
 * Your goal is to make sure you dont get touched by the ogre, imagine, as if your inner demons. It wants you to be upset and if touched, "you" will enter hysterics (hence the bg change). Imagine it as if your biggest enemy is actually yourself, but takes the form as the "meanie". Inner conflict!!!
**/
"use strict";

//Setting up all the labels that the program would use for it to work.
let img;
let frown;
let img2;
let userimg;
let userimg2;
function preload() {
    img = loadImage ('assets/images/CHEERING.jpg');
    frown = loadImage('assets/images/ogreemoji.png');
    img2 = loadImage ('assets/images/UNCHEERING.png')
    userimg = loadImage ('assets/images/happysmile.png')
    userimg2 = loadImage ('assets/images/slightly-frowning-face.png')
}

let meanie = {
    x: 0,
    y: 250,
    size: 120,
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

//setting up all the images so that they work + other labels + canvas
function setup() {
    image(img,0,0);
    image(frown,0,0);
    image(img2,0,0);
    image(userimg,0,0)
    createCanvas(windowWidth, windowHeight);
    meanie.y = random(0, height);
    meanie.vx = meanie.speed
}

function draw() {
    background(0);
    imageMode(CORNERS);
    image (img, 0,0,windowWidth,windowHeight)
    // Loop for the static background, makes the points that flash around, it reminds me of those really old glitter images from back then in the internet, I think its kinda funny (and kinda ugly... but I like it and I think it fits, imagine as if your mind is filled with static, something is wrong.)
    for (let i = 0; i < Static; i++) {
        let bgx = random(0, width);
        let bgy = random(0, height);
        stroke(255);
        point(bgx,bgy);
        fill(255);
    }

    //Shape of the MEANIE + image
    meanie.x = meanie.x + meanie.vx;
    meanie.y = meanie.y + meanie.vy;
    imageMode(CENTER);
    image (frown, meanie.x, meanie.y)
    fill(0);

    //Makes it that the MEANIE changes height after reaching the end of the screen
    if (meanie.x > width){
        meanie.x = 0
        meanie.y = random(0, height);
    } 

    //makes it that if both MEANIE and USER touch, the program will end.
    //Also changes the backhround image to an inverted "upset" version
    let d = dist(meanie.x, meanie.y, user.x, user.y);
    if (d < meanie.size  && d < user.size ){
        noLoop();
        imageMode(CORNER);
        image (img2, 0,0,windowWidth,windowHeight)
    } 
    //I couldn't make this work but I feel SO BAD not giving this sooner so what it was supposed to do was make the shape go faster depending on distance but it's not working </3
    else (d > meanie.size && d > user.size); {
        let i = 5; i < 50; i ++
        meanie.speed = i;
    };

    //User Circle + setting the image of the circle to a smile
    noStroke();
    fill(user.fill);4
    imageMode(CENTER);
    image(userimg, user.x, user.y)    

    if (d < meanie.size  && d < user.size ){
        //Changes the USER circle to a frown when hit by the "MEANIE"
        imageMode(CENTER);
        fill(user.fill);
        image(userimg2, user.x, user.y)    
    }
}

function mouseDragged() {
    // User circle, follows the mouse which you have to hold the right click button to move.
    user.x = mouseX;
    user.y = mouseY;
    }
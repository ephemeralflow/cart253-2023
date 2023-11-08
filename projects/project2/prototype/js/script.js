/**
 * PROTOTYPE
 * Scarlett Perez
 * 
 * STILL WORK IN PROGRESS the gallery isn't working right now and I don't know why so I'll fix it later counting as this is just a prototype. 
 * However, managed to add a menu that you can go back in forth with isn't that cool (I'm impressed with myself let me have this moment)
 */

"use strict";

let state = `title`
let scene = 0;


let name = " ";
let txt = " ";

let arrow;

let spriteOne;
let spriteTwo;
let spriteThree;

let CG1;

let startText = "Start"
let galleryText = "Gallery"
let creditText = "Credits"

/**
 * Description of preload
*/
function preload() {

    arrow = loadImage('assets/images/right-arrow.png');
    spriteOne = loadImage('assets/images/1.png');
    spriteTwo = loadImage('assets/images/2.png');
    spriteThree = loadImage('assets/images/3.png');
    CG1 = loadImage('assets/images/CG1.png');

}

let choice1a = "what."
let choice1b = "what?"

/**
 * Description of setup
*/
function setup() {
    createCanvas(1280, 720);
}


/**
 * Description of draw()
*/
function draw() {
    background(0);

    if (state === `title`) {
        title();
    }
    else if (state === `simulation`) {
        simulation();
    }
    else if (state === `gallery`) {
        gallery();
    }
    else if (state === `credits`) {
        credits();
    }
    else if (state === `menu`) {
        menu();
    }
}



function title() {
    push();
    textSize(64);
    fill(176, 11, 30);
    textAlign(CENTER, CENTER);
    text(`TITLE`, width / 2, 260);
    textSize(20);
    textAlign(CENTER, CENTER);
    text(`TEXT 1.`, width / 2, 320);
    pop();

    push();
    fill(102, 44, 44)
    textSize(15);
    textAlign(CENTER, CENTER);
    text(`TEXT 2.`, width / 2, 365);
    pop();

    // Buttons 

    //START
    push()
    rectMode(CENTER)
    rect(1000, 200, 300, 100);
    textSize(30)
    textAlign(CENTER, CENTER);
    text(startText, 1000, 200)
    pop()

    //GALLERY
    push()
    rectMode(CENTER)
    rect(1000, 350, 300, 100);
    textSize(30)
    textAlign(CENTER, CENTER);
    text(galleryText, 1000, 350)
    pop()

    //CREDITS
    push()
    rectMode(CENTER)
    rect(1000, 500, 300, 100);
    textSize(30)
    textAlign(CENTER, CENTER);
    text(creditText, 1000, 500)
    pop()

    /*push() //TESTING RECTANGLE
    fill(255, 0, 0)
    rect(1150, 550, 300, 100);
    pop()*/
}

function gallery() {
    rect(100, 100, 300, 200);
    rect(70, 600, 150, 60);

    push()
    fill(255, 0, 0)
    textSize(30)
    text("< BACK", 90, 640)
    pop()

    push()
    imageMode(CORNER)
    image(CG1, 100, 100, 300, 200);
    pop()
}

function credits() {
    rect(500, 50, 500, 625);
    push();
    fill(0)
    textSize(30)
    text("Code: Me \n\n\nIllustrations: Myself \n\n\nUnexisting Music: I", 550, 100)
    pop();


    rect(70, 600, 150, 60);
    push()
    fill(255, 0, 0)
    textSize(30)
    text("< BACK", 90, 640)
    pop()
}

function simulation() {
    mainimgs();
    vntext();
    choices();
}

function menu() {
    push()
    rectMode(CENTER)
    rect(width / 2, height / 2, 500, 500);
    pop()

    push()
    fill(0)
    textSize(30)
    textAlign(CENTER)
    text("Are you sure you want to go back\nto the main menu?\n(You'll lose all your current progress)", width / 2, 200)
    text("YES", 500, 500)
    text("NO", 750, 500)
    pop()
}

function mainimgs() {

    if (scene !== 3 && scene !== 4 && scene !== 5) {
        push();
        imageMode(CENTER);
        image(spriteOne, width / 2, 500, 390, 961);
        pop();
    }

    if (scene == 3) {
        push();
        imageMode(CENTER);
        image(spriteTwo, width / 2, 500, 390, 961);
        pop();
    }

    if (scene == 4) {
        push();
        imageMode(CENTER);
        image(spriteTwo, 426, 500, 390, 961);
        image(spriteThree, 852, 500, 390, 961);
        pop();
    }

    if (scene == 5) {
        push();
        imageMode(CENTER);
        image(spriteTwo, 426, 500, 390, 961);
        image(spriteThree, 852, 500, 390, 961);
        pop();
    }

    //TEXTBOX
    push()
    fill(255);
    rectMode(CENTER);
    rect(130, 465, 100, 50);
    rect(width / 2, 600, 1180, 200);
    pop()
    image(arrow, 1100, 550, 100, 100)

    push()
    fill(255);
    rectMode(CORNER);
    rect(30, 30, 150, 60);
    fill(0)
    textSize(30)
    text("MENU", 60, 70)
    pop()
}

function vntext() {
    //Displaying the text by using the arrays strings from earlier and also wrapping it by word so it doesn't overflow in case the lines are too long.
    push();
    fill(0);
    textSize(30);
    textWrap(WORD);
    text(scenes[scene].txt, 100, 520, 1125, 242);
    text(scenes[scene].name, 100, 450, 300);
    pop();
}

function choices() {

    // CHOICE TEXT BOXES
    if (scene == 5) {
        push();
        fill(255, 255, 255, 200);
        rectMode(CENTER);
        strokeWeight(2)
        rect(width / 2, 297, 350, 55);
        rect(width / 2, 417, 350, 55);
        pop();

        push();
        textAlign(CENTER)
        textSize(30)
        text(choice1a, width / 2, 307)
        text(choice1b, width / 2, 427)
        pop();
    }
}

function mousePressed() {
    allMenuButtons()

    if (mouseX >= 1100 && mouseX <= 1200 && mouseY >= 550 && mouseY <= 650) {
        scene += 1;
    }

    //CHOICE 1
    if (mouseX >= 490 && mouseX <= 790 && mouseY >= 273 && mouseY <= 327 && scene == 5) {
        scene = 6;
    }

    //BAD CHOICE 1
    if (mouseX >= 430 && mouseX <= 850 && mouseY >= 390 && mouseY <= 444 && scene == 5) {
        scene = 7;
    }
}

function allMenuButtons() {
    if (state === `title` && mouseX >= 850 && mouseY >= 150 && mouseX <= 1150 && mouseY <= 250) {
        state = `simulation`;
    }

    if (state === `title` && mouseX >= 850 && mouseY >= 250 && mouseX <= 1150 && mouseY <= 450) {
        state = `gallery`;
    }

    if (state === `title` && mouseX >= 850 && mouseY >= 450 && mouseX <= 1150 && mouseY <= 550) {
        state = `credits`;
    }

    if (state === `gallery` && mouseX >= 70 && mouseY >= 600 && mouseX <= 220 && mouseY <= 660) {
        state = `title`;
    }

    if (state === `credits` && mouseX >= 70 && mouseY >= 600 && mouseX <= 220 && mouseY <= 660) {
        state = `title`;
    }

    if (state === `simulation` && mouseX >= 30 && mouseY >= 30 && mouseX <= 180 && mouseY <= 90) {
        state = `menu`;
    }

    if (state === `menu` && mouseX >= 470 && mouseY >= 478 && mouseX <= 528 && mouseY <= 500) {
        state = `title`;
    }

    if (state === `menu` && mouseX >= 730 && mouseY >= 478 && mouseX <= 770 && mouseY <= 500) {
        state = `simulation`;
    }

    if (state === `gallery` && mouseX >= 100 && mouseY >= 100 && mouseX <= 400 && mouseY <= 300) {
        galleryImages();
    }
}

function galleryImages() {
    push()
    imageMode(CORNER)
    image(CG1, 0, 0, 1280, 720);
    pop()
}


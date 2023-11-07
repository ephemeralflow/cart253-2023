/**
 * Title of Project
 * Author Name
 * 
 * This is a template. You must fill in the title, author, 
 * and this description to match your project!
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

}

/*let scenes = [{
    name: "v",
    txt: "hello everynyaaaaa",
}, {
    name: "v",
    txt: "how are you",
}, {
    name: "v",
    txt: "fine? zank you",
}, {
    name: "l",
    txt: ":O",
}, {
    name: "a",
    txt: "oh mah gaaawd",
}, {
    name: "a",
    txt: "???",
}, {
    name: "v",
    txt: "woot woot",
}
    , {
    name: "v",
    txt: "yoss",
}]*/

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
    rect(width / 2, 300, 300, 55);
    //test rectangle
}

function credits() {
    rect(width / 2, 300, 300, 55);
}

function simulation() {
    mainimgs();
    vntext();
    choices();
}

function mainimgs() {

    if (scene !== 3 && scene !== 4) {
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
}

function vntext() {
    //Displaying the text by using the arrays strings from earlier and also wrapping it by word so it doesn't overflow in case the lines are too long.
    fill(0);
    textSize(30);
    textWrap(WORD);
    text(scenes[scene].txt, 100, 520, 1125, 242);
    text(scenes[scene].name, 100, 450, 300);
}

function choices() {

    //This is where the text boxes are for each choice. First displaying the box itself and then the text. The nearby coordinates for the box is then used in mouse pressed so like that when you press on the box you will get to the choice you chose.
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
        text(choice1a, width / 2, 307)
        text(choice1b, width / 2, 427)
        pop();
    }
}

function mousePressed() {
    if (state === `title` && mouseX >= 850 && mouseY >= 150 && mouseX <= 1150 && mouseY <= 250) {
        state = `simulation`;
    }

    if (state === `title` && mouseX >= 850 && mouseY >= 250 && mouseX <= 1150 && mouseY <= 350) {
        state = `gallery`;
    }

    if (state === `title` && mouseX >= 850 && mouseY >= 450 && mouseX <= 1150 && mouseY <= 550) {
        state = `credits`;
    }

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


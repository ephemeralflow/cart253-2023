/**
 * Title of Project
 * Author Name
 * 
 * This is a template. You must fill in the title, author, 
 * and this description to match your project!
 */

"use strict";

let state = `simulation`
let scene = 47;

let name = " ";
let txt = " ";

//IMAGES
let arrow;
let kitchenGun;

//SPRITES
let focashock;

//MENU TEXT
let startText = "Start"
let galleryText = "Gallery"
let creditText = "Credits"

let elevatorMusic;
let elevatorMusicVolume = 0;
let elevator;

let kitchenGunSound;

//PIANO
let synth;
let notes = [`F4`, `G4`, `Ab4`, `Bb4`, `C4`, `Db4`, `Eb4`, `F5`];
let currentNote = 0;
let interval;

//PIANO TIMER
let endPianoTimer = 0;
let pianoPartLength = 60 * 5;

//let elevatorMus = false;

/**
 * Description of preload
*/
function preload() {
    arrow = loadImage('assets/images/right-arrow.png');
    kitchenGun = loadImage('assets/images/KITCHEN GUN.png');

    focashock = loadImage('assets/images/focasprite1.png');

    elevatorMusic = loadSound('assets/sounds/Local Forecast - Elevator.mp3')
    kitchenGunSound = loadSound('assets/sounds/Kitchen Gun.mp3')
}

let choice1a = "Kinda?"
let choice1b = "No, not really."

let choice2a = "bruh"
let choice2b = "..."

let choice3a = "Does it matter?"
let choice3b = "idk"

/**
 * Description of setup
*/
function setup() {
    createCanvas(1280, 720);
    userStartAudio();
    synth = new p5.PolySynth();
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

    //checkMusicScene()
}

function keyPressed() {
    if (scene == 31) {

        //THIS IS NOT WORKING 
        endPianoTimer++;
        if (endPianoTimer >= pianoPartLength) {
            scene = 32
            console.log(endPianoTimer)
        }
        //THIS IS NOT WORKING
        //after some time, that the "piano" plays, it will go to the next scene


        // Start our interval, calling playNextNote every 500 milliseconds
        // Assign the result to interval to remember the interval
        if (interval === undefined) {
            interval = setInterval(playNextNote, 500);
        } else {
            // If they click when it's playing, clear the interval and set interval
            // back to undefined to stop play
            clearInterval(interval);
            interval = undefined;
        }
    }
}

function playNextNote() {
    // Chose the note at the current position
    let note = notes[currentNote];
    // Play it
    synth.play(note, 0.2, 0, 0.4);
    // Increase the current position and go back to 0 when we reach the end
    currentNote = currentNote + 1;
    if (currentNote === notes.length) {
        currentNote = 0;
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
    //image(CG1, 100, 100, 300, 200);
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
    elevatorButtons();
    cinematicGraphics();
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

    /*if (scene !== 3 && scene !== 4 && scene !== 5) {
        push();
        imageMode(CENTER);
        image(spriteOne, width / 2, 500, 390, 961);
        pop();
    }*/

    //TEXTBOX
    push()
    fill(255);
    rectMode(CENTER);
    rect(130, 465, 170, 50);
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
    if (scene == 8) {
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

    if (scene == 38) {
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
        text(choice2a, width / 2, 307)
        text(choice2b, width / 2, 427)
        pop();
    }

    if (scene == 52) {
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
        text(choice3a, width / 2, 307)
        text(choice3b, width / 2, 427)
        pop();
    }
}

function mousePressed() {
    allMenuButtons()
    elevatorButtons()

    if (mouseX >= 1100 && mouseX <= 1200 && mouseY >= 550 && mouseY <= 650) {
        scene += 1;
        console.log(scene)

        if (scene === 49) {
            // Start the music
            elevatorMusic.play();
            // Fade it in
            elevatorMusic.setVolume(0);
            elevatorMusic.setVolume(1, 2);
        }

        if (scene === 72) {
            // Start the music
            kitchenGunSound.play();
            // Fade it in
            kitchenGunSound.setVolume(0);
            kitchenGunSound.setVolume(1, 2);

            //Fade out elevator music
            elevatorMusic.setVolume(0, 2);
        }
    }

    //CHOICE 1
    if (mouseX >= 490 && mouseX <= 790 && mouseY >= 273 && mouseY <= 327 && scene == 8) {
        scene = 9;
    }

    //BAD CHOICE 1
    if (mouseX >= 430 && mouseX <= 850 && mouseY >= 390 && mouseY <= 444 && scene == 8) {
        scene = 11;
    }

    if (mouseX >= 1100 && mouseX <= 1200 && mouseY >= 550 && mouseY <= 650 && scene == 10) {
        scene = 12;
    }

    //CHOICE 2
    if (mouseX >= 490 && mouseX <= 790 && mouseY >= 273 && mouseY <= 327 && scene == 38) {
        scene = 39;
    }

    //BAD CHOICE 2
    if (mouseX >= 430 && mouseX <= 850 && mouseY >= 390 && mouseY <= 444 && scene == 38) {
        scene = 43;
    }

    //CHOICE 3
    if (mouseX >= 490 && mouseX <= 790 && mouseY >= 273 && mouseY <= 327 && scene == 52) {
        scene = 53;
    }

    //BAD CHOICE 3
    if (mouseX >= 430 && mouseX <= 850 && mouseY >= 390 && mouseY <= 444 && scene == 52) {
        scene = 57;
    }

    //After choice 3 is finished, take to scene 60 to continue the story and not overlap with what the second choice gives
    if (mouseX >= 1100 && mouseX <= 1200 && mouseY >= 550 && mouseY <= 650 && scene == 56) {
        scene = 60;
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

function elevatorButtons() {

    if (scene == 64) {
        push()
        fill(255)
        ellipseMode(CENTER)
        circle(320, 250, 200)
        circle(640, 250, 200)
        circle(960, 250, 200)
        // circle(320, 550, 200)
        // circle(640, 550, 200)
        // circle(960, 550, 200)
        pop()

        push();
        textAlign(CENTER)
        fill(255, 0, 0);
        textSize(60)
        text("1", 320, 270)
        text("2", 640, 270)
        text("3", 960, 270)
        pop();
    }

    // push() //TESTING RECTANGLE
    // fill(255, 0, 0)
    // rect(860, 350, 300, 100);
    // pop()

    //CIRCLE 1
    if (mouseX >= 220 && mouseX <= 420 && mouseY >= 150 && mouseY <= 350 && mouseIsPressed && scene == 64) {
        scene = 65;
    }

    //CIRCLE2
    if (mouseX >= 540 && mouseX <= 740 && mouseY >= 150 && mouseY <= 350 && mouseIsPressed && scene == 64) {
        scene = 80;
    }

    //CIRCLE3
    if (mouseX >= 860 && mouseX <= 1060 && mouseY >= 150 && mouseY <= 350 && mouseIsPressed && scene == 64) {
        scene = 43;
    }
}

function cinematicGraphics() {

    if (scene >= 72 && scene <= 79) {
        push();
        imageMode(CORNER);
        image(kitchenGun, 0, 0, 1280, 720);
        pop();
    }

    if (scene >= 72 && scene <= 79) {
        push()
        imageMode(CENTER);
        image(focashock, width / 2, 500, 390, 961);
        pop()
        mainimgs();
        vntext();
        choices();
    }
}
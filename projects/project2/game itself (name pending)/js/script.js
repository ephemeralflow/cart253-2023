/**
 * PROTOTYPE
 * Scarlett Perez
 * 
 * STILL WORK IN PROGRESS the gallery isn't working right now and I don't know why so I'll fix it later counting as this is just a prototype. 
 * However, managed to add a menu that you can go back in forth with isn't that cool (I'm impressed with myself let me have this moment)
 */

"use strict";

//CURRENT STATE + SCENE
let state = `simulation`
let scene = 154;

//variables for the name and the text they dau
let name = " ";
let txt = " ";

let arrow;

//testing CG
let CG1;

//Ending CGS
let endCG1;
let endCG3;

let startText = "Start"
let galleryText = "Gallery"
let creditText = "Credits"

//VARIABLES
let guardTalk = false;
let vLikeBar = 0;
let mobiusLikeBar = 0; //???
let doctorLikeBar = 0;

//PIANO
let oscillator;
let synth;
let notes = [`F4`, `G4`, `Ab4`, `Bb4`, `C4`, `Db4`, `Eb4`, `F5`];
let currentNote = 0;

//PIANO TIMER
let endPianoTimer = 0;
let pianoPartLength = 10;

//SPRITES
let doctorSerious;
let doctorSmile;
let doctorGrin;

let vSmile;

let mobiusSerious;

let deltaSerious;
let deltaSmile;

let guard;

// let spriteNames = ["doctorSerious", "doctorSmile"];
// let characterSprites = {};

let backgroundNames = ["doctorSerious", "doctorSmile", "doctorGrin"];
let backgrounds = {};



/**
 * Description of preload
*/
function preload() {

    arrow = loadImage('assets/images/right-arrow.png');
    CG1 = loadImage('assets/images/CG1.png');
    endCG1 = loadImage('assets/images/EndCG1.png');
    endCG3 = loadImage('assets/images/EndCG3.png');

    doctorSerious = loadImage('assets/images/sprites/doctorSerious.png');
    doctorSmile = loadImage('assets/images/sprites/doctorSmile.png');
    doctorGrin = loadImage('assets/images/sprites/doctorGrin.png');

    vSmile = loadImage('assets/images/sprites/vSmile.png');

    mobiusSerious = loadImage('assets/images/sprites/mobiusSerious.png');

    deltaSerious = loadImage('assets/images/sprites/deltaSerious.png');
    deltaSmile = loadImage('assets/images/sprites/deltaSmile.png');

    guard = loadImage('assets/images/sprites/guard.png');

    // for (let i = 0; i < backgroundNames.length; i++) {
    //     let backgroundName = backgroundNames[i];
    //     backgrounds[backgroundName] = loadImage(`assets/images/sprites/${backgroundName}.png`);
    // }

}

let choice1A = "Go back."
let choice1B = "Push on."

let choice2A = "Hm?"
let choice2B = "..."

let choice3A = "It's fine."
let choice3B = "Maybe you're right."

let choice4A = "Cool."
let choice4B = "..."

let choice5A = "Yeah."
let choice5B = "No (lol)."

let choice6A = "What is the procedure exactly?"
let choice6B = "Are there any side effects?"
let choice6C = "I don’t have any questions."

let choice7A = "Sign the contract."
let choice7B = "Back out."

/**
 * Description of setup
*/
function setup() {
    createCanvas(1280, 720);

    userStartAudio();
    synth = new p5.PolySynth();

    //Creating a new oscillator
    oscillator = new p5.Oscillator(0, `sine`);
    //Setting the oscillator amplitude down.
    oscillator.amp(0.25);
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
    sprites();
    mainimgs();
    vntext();
    choices();
    cinematicGraphics()
    specialText()
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

    // push()
    // let bgName = scenes[scene].bg;
    // imageMode(CENTER)
    // image(backgrounds[bgName], width / 2, 500);
    // pop()

    //TEXTBOX
    push()
    fill(255, 200);
    rectMode(CENTER);
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
    text(scenes[scene].txt, 100, 550, 1000, 242);
    text(scenes[scene].name, 100, 510, 300);
    pop();

    if (scene == 156) {
        push();
        rectMode(CENTER)
        rect(width / 2, height / 2, 500, 200)
        fill(0)
        textSize(30)
        textAlign(CENTER);
        text("To play the piano,\n press any key.", width / 2, 350)
        pop();
    }
}

function choices() {

    // CHOICE TEXT BOXES
    //CHOICE 1
    if (scene == 10) {
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
        text(choice1A, width / 2, 307)
        text(choice1B, width / 2, 427)
        pop();
    }

    //CHOICE 2
    if (scene == 25) {
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
        text(choice2A, width / 2, 307)
        text(choice2B, width / 2, 427)
        pop();
    }

    //CHOICE 3
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
        text(choice3A, width / 2, 307)
        text(choice3B, width / 2, 427)
        pop();
    }

    //CHOICE 4
    if (scene == 77) {
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
        text(choice4A, width / 2, 307)
        text(choice4B, width / 2, 427)
        pop();
    }

    //CHOICE 5
    if (scene == 98) {
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
        text(choice5A, width / 2, 307)
        text(choice5B, width / 2, 427)
        pop();
    }

    //CHOICE 6
    if (scene == 114) {
        push();
        fill(255, 255, 255, 200);
        rectMode(CENTER);
        strokeWeight(2)
        rect(width / 2, 170, 350, 55);
        rect(width / 2, 297, 350, 55);
        rect(width / 2, 417, 350, 55);
        pop();

        push();
        textAlign(CENTER)
        textSize(25)
        text(choice6A, width / 2, 180)
        text(choice6B, width / 2, 307)
        text(choice6C, width / 2, 427)
        pop();

        // push() //TESTING RECTANGLE //143
        // fill(255, 0, 0)
        // rect(462, 197, 300, 100);
        // pop()
    }

    //CHOICE 7
    if (scene == 122) {
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
        text(choice7A, width / 2, 307)
        text(choice7B, width / 2, 427)
        pop();
    }
}

function sprites() {
    //GUARD SCENE ALONE
    if (scene >= 25 && scene <= 54) {
        push();
        imageMode(CENTER);
        image(guard, width / 2, 400, 425, 739);
        pop();
    }

    //GUARD + V
    if (scene >= 55 && scene <= 65) {
        push();
        imageMode(CENTER);
        image(vSmile, 426, 420, 369, 609);
        image(guard, 852, 400, 425, 739);
        pop();
    }

    //V ALONE
    if (scene >= 66 && scene <= 90) {
        push();
        imageMode(CENTER);
        image(vSmile, width / 2, 420, 369, 609);
        pop();
    }

    //V + DOCTOR
    if (scene >= 91 && scene <= 105) {
        push();
        imageMode(CENTER);
        image(vSmile, 426, 420, 369, 609);
        image(doctorSmile, 852, 400, 425, 739);
        pop();
    }

    //DOCTOR ALONE
    if (scene >= 106 && scene <= 135) {
        push();
        imageMode(CENTER);
        image(doctorSmile, width / 2, 400, 425, 739);
        pop();
    }

    //DOCTOR + MOBIUS
    if (scene >= 136 && scene <= 146) {
        push();
        imageMode(CENTER);
        image(mobiusSerious, 426, 420, 410, 732);
        image(doctorSmile, 852, 400, 425, 739);
        pop();
    }

    //MOBIUS ALONE
    if (scene >= 147 && scene <= 151) {
        push();
        imageMode(CENTER);
        image(mobiusSerious, width / 2, 420, 410, 732);
        pop();
    }
}

function mousePressed() {
    allMenuButtons()
    //backToMainMenu()

    if (mouseX >= 1100 && mouseX <= 1200 && mouseY >= 550 && mouseY <= 650 && scene !== 52 && scene !== 77 && scene !== 82 && scene !== 156) {
        scene += 1;
        console.log(scene)
    }

    //CHOICE 1
    //CHOICE 1A
    if (mouseX >= 490 && mouseX <= 790 && mouseY >= 273 && mouseY <= 327 && scene == 10) {
        scene = 11;
    }

    //CHOICE 1B
    if (mouseX >= 430 && mouseX <= 850 && mouseY >= 390 && mouseY <= 444 && scene == 10) {
        scene = 17;
    }

    //CHOICE 2
    //CHOICE 2A
    if (mouseX >= 490 && mouseX <= 790 && mouseY >= 273 && mouseY <= 327 && scene == 25) {
        scene = 26;
        guardTalk = true;
    }

    //CHOICE 2B
    if (mouseX >= 430 && mouseX <= 850 && mouseY >= 390 && mouseY <= 444 && scene == 25) {
        scene = 49;
    }

    //CHOICE 3
    //CHOICE 3A
    if (mouseX >= 490 && mouseX <= 790 && mouseY >= 273 && mouseY <= 327 && scene == 38) {
        scene = 48;
    }

    //CHOICE 3B
    if (mouseX >= 430 && mouseX <= 850 && mouseY >= 390 && mouseY <= 444 && scene == 38) {
        scene = 39;
    }

    //Guard TEXT (52)
    if (mouseX >= 1100 && mouseX <= 1200 && mouseY >= 550 && mouseY <= 650 && scene == 52 && guardTalk == true) {
        scene += 1;
    }

    if (mouseX >= 1100 && mouseX <= 1200 && mouseY >= 550 && mouseY <= 650 && scene == 52) {
        scene = 54;
    }

    //CHOICE 4
    //CHOICE 4A
    if (mouseX >= 490 && mouseX <= 790 && mouseY >= 273 && mouseY <= 327 && scene == 77) {
        scene = 78;
    }

    if (mouseX >= 1100 && mouseX <= 1200 && mouseY >= 550 && mouseY <= 650 && scene == 82) {
        scene = 86;
    }

    //CHOICE 4B
    if (mouseX >= 430 && mouseX <= 850 && mouseY >= 390 && mouseY <= 444 && scene == 77) {
        scene = 83;
    }

    //CHOICE 5
    //CHOICE 5A
    if (mouseX >= 490 && mouseX <= 790 && mouseY >= 273 && mouseY <= 327 && scene == 98) {
        scene = 99;
        doctorLikeBar++
        vLikeBar++
    }

    if (mouseX >= 1100 && mouseX <= 1200 && mouseY >= 550 && mouseY <= 650 && scene == 101) {
        scene = 102;
    }

    //CHOICE 5B
    if (mouseX >= 430 && mouseX <= 850 && mouseY >= 390 && mouseY <= 444 && scene == 98) {
        scene = 101;
    }

    //CHOICE 6
    //CHOICE 6A
    if (mouseX >= 430 && mouseX <= 850 && mouseY >= 143 && mouseY <= 197 && scene == 114) {
        scene = 115;
    }

    if (mouseX >= 1100 && mouseX <= 1200 && mouseY >= 550 && mouseY <= 650 && scene == 118) {
        scene = 114;
    }

    //CHOICE 6B
    if (mouseX >= 430 && mouseX <= 850 && mouseY >= 273 && mouseY <= 327 && scene == 114) {
        scene = 118;
    }

    if (mouseX >= 1100 && mouseX <= 1200 && mouseY >= 550 && mouseY <= 650 && scene == 121) {
        scene = 114;
    }

    //CHOICE 6C
    if (mouseX >= 430 && mouseX <= 850 && mouseY >= 390 && mouseY <= 444 && scene == 114) {
        scene = 121;
    }

    //CHOICE 7
    //CHOICE 7A
    if (mouseX >= 490 && mouseX <= 790 && mouseY >= 273 && mouseY <= 327 && scene == 122) {
        scene = 128;
    }

    //CHOICE 7B
    if (mouseX >= 430 && mouseX <= 850 && mouseY >= 390 && mouseY <= 444 && scene == 122) {
        scene = 123;
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
        scene = 0;
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

function cinematicGraphics() {

    if (scene == 16) {
        push()
        imageMode(CORNER);
        image(endCG1, 0, 0, 1280, 720);
        fill(255, 0, 0)
        textSize(40)
        text("END 1 - Honestly, \nmaybe France isn’t so bad.", 500, 450)
        pop()

        backToMainMenu()
    }

    if (scene == 47) {
        push()
        imageMode(CORNER);
        image(endCG1, 0, 0, 1280, 720);
        fill(255, 0, 0)
        textSize(40)
        text("END 2: Maybe \nyou should trust your gut feeling more.", 500, 450)
        pop()

        backToMainMenu()
    }

    if (scene == 127) {
        push()
        imageMode(CORNER);
        image(endCG3, 0, 0, 1280, 720);
        fill(255, 0, 0)
        textSize(40)
        text("END 3: Stuck as a newfound puppet (name pending).", 500, 450)
        pop()

        backToMainMenu()
    }
}

function backToMainMenu() {
    push()
    fill(255)
    strokeWeight(3)
    rect(600, 200, 300, 100)
    fill(0)
    textSize(30)
    text("Replay?", 700, 260)
    pop()

    if (mouseX >= 600 && mouseY >= 200 && mouseX <= 900 && mouseY <= 300 && mouseIsPressed) {
        state = `title`;
        scene = 0;
    }
}

function specialText() {
    if (scene == 64) {
        textStyle(ITALIC)
    } if (scene == 65) {
        textStyle(NORMAL)
    }
}

function keyPressed() {
    if (scene == 156) {

        playNextNote()
        endPianoTimer++;
        if (endPianoTimer >= pianoPartLength) {
            scene = 157
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
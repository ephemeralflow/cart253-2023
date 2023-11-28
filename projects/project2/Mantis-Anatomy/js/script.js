/**
 * MANTIS ANATOMY
 * Scarlett Perez
 * 
 * STILL WORK IN PROGRESS 
 */
"use strict";

//CURRENT STATE + SCENE
let state = `simulation`
let scene = 156;

//variables for the name and the text they dau
let name = " ";
let txt = " ";

let arrow;

let content = "";
let nameContent = "name";

//TITLE SCREEN
let titleScreen;
let act1Arrow;
let act2Arrow;

let act1ArrowOriginalPos = 257;
let act2ArrowOriginalPos = 257;

let actButtonsShow = false;

let act2Available = false;

//CGS
let CG1;
let CG2;
let galleryPlaceholder;
let galleryPlaceholder2;
let galleryPlaceholder3;
let galleryPlaceholder4;
let galleryPlaceholder5;
let galleryPlaceholder6;

//Gallery Unlock
let CG1Unlock = false;
let CG2Unlock = false;
let CG3Unlock = false;
let CG4Unlock = false;
let CG5Unlock = false;
let CG6Unlock = false;

//Ending CGS
let endCG1;
let endCG3;

let endCG6;
let endCG62;

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
let vWorried;

let mobiusSerious;

let deltaSerious;
let deltaSmile;
let deltaShy;

let guardNeutral;

let furinaDream;

//BACKGROUNDS
let backgroundNames = ["snowBG", "officeBG", "hallwayBG", "piano", "pianoBG1", "blackSquare", "roomBG", "experimentationBG", "transparent"];
let backgrounds = {};

// let spriteNames = ["doctorSerious", "doctorSmile"];
// let characterSprites = {};

let currentScene = "intro";
let currentDialog = 0;

let textInput;
let textInputBox;
let dreamName = name;
// let secretEnding = false;

/**
 * Description of preload
*/
function preload() {

    titleScreen = loadImage('assets/images/title.png');
    act1Arrow = loadImage('assets/images/act1Arrow.png');
    act2Arrow = loadImage('assets/images/act2Arrow.png');
    arrow = loadImage('assets/images/right-arrow.png');
    CG1 = loadImage('assets/images/CGS/CG1.png');

    galleryPlaceholder = loadImage('assets/images/galleryPlaceholder.png');
    galleryPlaceholder2 = loadImage('assets/images/galleryPlaceholder2.png');
    galleryPlaceholder3 = loadImage('assets/images/galleryPlaceholder3.png');
    galleryPlaceholder4 = loadImage('assets/images/galleryPlaceholder4.png');
    galleryPlaceholder5 = loadImage('assets/images/galleryPlaceholder5.png');
    galleryPlaceholder6 = loadImage('assets/images/galleryPlaceholder6.png');

    endCG1 = loadImage('assets/images/EndCG1.png');
    endCG3 = loadImage('assets/images/EndCG3.png');
    endCG6 = loadImage('assets/images/ENDCGS/EndCG6-1.png');
    endCG62 = loadImage('assets/images/ENDCGS/EndCG6-2.png');

    doctorSerious = loadImage('assets/images/sprites/doctorSerious.png');
    doctorSmile = loadImage('assets/images/sprites/doctorSmile.png');
    doctorGrin = loadImage('assets/images/sprites/doctorGrin.png');

    vSmile = loadImage('assets/images/sprites/vSmile.png');
    vWorried = loadImage('assets/images/sprites/vWorried.png');

    mobiusSerious = loadImage('assets/images/sprites/mobiusSerious.png');

    deltaSerious = loadImage('assets/images/sprites/deltaSerious.png');
    deltaSmile = loadImage('assets/images/sprites/deltaSmile.png');
    deltaShy = loadImage('assets/images/sprites/deltaShy.png');

    guardNeutral = loadImage('assets/images/sprites/guardNeutral.png');

    furinaDream = loadImage('assets/images/sprites/furinaDream.png');

    // snowBG = loadImage('assets/images/bgs/snow.jpeg');

    for (let i = 0; i < backgroundNames.length; i++) {
        let backgroundName = backgroundNames[i];
        backgrounds[backgroundName] = loadImage(`assets/images/bgs/${backgroundName}.png`);
    }

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

let choice8A = "Greet them."
let choice8B = "Ask them what they are doing."

let choice9A = "Show a thumbs up."
let choice9B = "Show a thumbs down."

let choice10A = "Respond snappy."
let choice10B = "Say nothing."

let choice11A = "Please help me."
let choice11B = "I'm good."

let choice12A = "Help V."
let choice12B = "Help Delta."
let choice12C = "Walk away."

let choice13A = "Come with me."
let choice13B = "...Okay."

let choice14A = "Follow Delta."
let choice14B = "Check on V."

let choice15A = "No, I'll stay."
let choice15B = "Fine."

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
    if (state === `actButtons`) {
        actButtons();
    }
    else if (state === `simulation`) {
        simulation();
    }
    else if (state === `gallery`) {
        gallery();
        if (mouseIsPressed && mouseX >= 100 && mouseY >= 100 && mouseX <= 400 && mouseY <= 300 && CG1Unlock == true) {
            galleryImages();
        }
    }
    else if (state === `credits`) {
        credits();
    }
    else if (state === `menu`) {
        menu();
    }
}

function title() {
    push()
    imageMode(CORNER)
    image(titleScreen, 0, 0, 1280, 720);
    pop()
}

function actButtons() {
    title()
    push()
    imageMode(CORNER)
    image(act1Arrow, 946, act1ArrowOriginalPos, 177, 20);
    if (act2Available == false) {
        push()
        tint(255, 100)
        image(act2Arrow, 946, act2ArrowOriginalPos, 177, 20);
        pop()
    } else if (act2Available == true) {
        push()
        tint(255, 255)
        image(act2Arrow, 946, act2ArrowOriginalPos, 177, 20);
        pop()
    }
    pop()

    if (actButtonsShow == false) {
        act1ArrowOriginalPos = act1ArrowOriginalPos + 5
        act2ArrowOriginalPos = act2ArrowOriginalPos + 8
    }

    if (actButtonsShow == true) {
        act1ArrowOriginalPos = 310
        act2ArrowOriginalPos = 350
    }

    if (act1ArrowOriginalPos > 310 || act2ArrowOriginalPos > 350) {
        actButtonsShow = true
    }
}
function gallery() {
    rect(100, 100, 330, 200);
    rect(500, 100, 330, 200);
    rect(900, 100, 330, 200);
    //second row
    rect(100, 370, 330, 200);
    rect(500, 370, 330, 200);
    rect(900, 370, 330, 200);

    //back rectangle
    rect(70, 600, 150, 60);

    push()
    fill(255, 0, 0)
    textSize(30)
    text("< BACK", 90, 640)
    pop()

    //CG 1
    push()
    if (CG1Unlock == false) {
        imageMode(CORNER)
        image(galleryPlaceholder, 100, 100, 330, 200);
    }
    if (CG1Unlock == true) {
        imageMode(CORNER)
        image(CG1, 100, 100, 330, 200);
    }
    pop()

    //CG 2
    push()
    if (CG2Unlock == false) {
        imageMode(CORNER)
        image(galleryPlaceholder6, 500, 100, 330, 200);
    }
    if (CG2Unlock == true) {
        imageMode(CORNER)
        image(galleryPlaceholder, 100, 100, 330, 200);
    }
    pop()

    //CG 3
    push()
    if (CG3Unlock == false) {
        imageMode(CORNER)
        image(galleryPlaceholder4, 900, 100, 330, 200);
    }
    if (CG3Unlock == true) {
        imageMode(CORNER)
        image(galleryPlaceholder, 100, 100, 330, 200);
    }
    pop()

    //CG 4
    push()
    if (CG4Unlock == false) {
        imageMode(CORNER)
        image(galleryPlaceholder3, 100, 370, 330, 200);
    }
    if (CG5Unlock == true) {
        imageMode(CORNER)
        image(galleryPlaceholder, 100, 100, 330, 200);
    }
    pop()

    //CG 5
    push()
    if (CG4Unlock == false) {
        imageMode(CORNER)
        image(galleryPlaceholder5, 500, 370, 330, 200);
    }
    if (CG5Unlock == true) {
        imageMode(CORNER)
        image(galleryPlaceholder, 100, 100, 330, 200);
    }
    pop()

    //CG 6
    push()
    if (CG4Unlock == false) {
        imageMode(CORNER)
        image(galleryPlaceholder2, 900, 370, 330, 200);
    }
    if (CG5Unlock == true) {
        imageMode(CORNER)
        image(galleryPlaceholder, 100, 100, 330, 200);
    }
    pop()
}

function galleryImageUnlock() {
    if (scene == 55 && CG1Unlock == false) {
        CG1Unlock = true;
    }
}

function credits() {
    rect(500, 50, 500, 625);
    push();
    fill(0)
    textSize(30)
    text("Code: Me \n\n\nIllustrations: Myself \n\n\nUnexisting Music: I\n\n\n (I'll add full credits when\n I'm done in true animator\n fashion)", 550, 100)
    pop();


    rect(70, 600, 150, 60);
    push()
    fill(255, 0, 0)
    textSize(30)
    text("< BACK", 90, 640)
    pop()
}

function simulation() {
    backgroundsForScenes();
    sprites();
    cinematicGraphics();
    mainimgs();
    vntext();
    choices();
    endingGraphics();
    overlayGraphic();
    specialText();
    nameInput()

    if (scene == 153) {
        act2Available = true;
    }

    galleryImageUnlock()
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

    if (scene == 156 || scene == 192 || scene == 271) {
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

    //CHOICE 8
    if (scene == 200) {
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
        text(choice8A, width / 2, 307)
        textSize(25)
        text(choice8B, width / 2, 427)
        pop();
    }

    //CHOICE 9
    if (scene == 207) {
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
        text(choice9A, width / 2, 307)
        text(choice9B, width / 2, 427)
        pop();
    }

    //CHOICE 10
    if (scene == 256) {
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
        text(choice10A, width / 2, 307)
        text(choice10B, width / 2, 427)
        pop();
    }

    //CHOICE 11
    if (scene == 297) {
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
        text(choice11A, width / 2, 307)
        text(choice11B, width / 2, 427)
        pop();
    }

    //CHOICE 12
    if (scene == 332) {
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
        textSize(30)
        text(choice12A, width / 2, 180)
        text(choice12B, width / 2, 307)
        text(choice12C, width / 2, 427)
        pop();

        // push() //TESTING RECTANGLE //143
        // fill(255, 0, 0)
        // rect(815, 197, 300, 100);
        // pop()
    }

    //CHOICE 13
    if (scene == 339) {
        push();
        fill(255, 255, 255, 200);
        rectMode(CENTER);
        strokeWeight(2)
        if (vLikeBar == 3) {
            rect(width / 2, 297, 350, 55);
        }
        rect(width / 2, 417, 350, 55);
        pop();

        push();
        textAlign(CENTER)
        textSize(30)
        if (vLikeBar == 3) {
            text(choice13A, width / 2, 307)
        }
        text(choice13B, width / 2, 427)
        pop();
    }

    //CHOICE 14
    if (scene == 359) {
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
        text(choice14A, width / 2, 307)
        text(choice14B, width / 2, 427)
        pop();
    }

    //CHOICE 15
    if (scene == 371) {
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
        text(choice15A, width / 2, 307)
        text(choice15B, width / 2, 427)
        pop();
    }
}

function sprites() {
    //GUARD SCENE ALONE
    if (scene >= 25 && scene <= 54) {
        push();
        imageMode(CENTER);
        image(guardNeutral, width / 2, 400, 425, 739);
        pop();
    }

    //GUARD + V
    if (scene >= 55 && scene <= 65) {
        push();
        imageMode(CENTER);
        image(vSmile, 426, 420, 369, 609);
        image(guardNeutral, 852, 400, 425, 739);
        pop();
    }

    //V ALONE
    if ((scene >= 66 && scene <= 90) || (scene >= 199 && scene <= 224)) {
        push();
        imageMode(CENTER);
        image(vSmile, width / 2, 420, 369, 609);
        pop();
    }

    //V WORRIED
    if ((scene >= 333 && scene <= 348)) {
        push();
        imageMode(CENTER);
        image(vWorried, width / 2, 420, 369, 609);
        pop();
    }

    //V WORRIED + DELTA
    if ((scene >= 309 && scene <= 332)) {
        push();
        imageMode(CENTER);
        image(vWorried, 426, 420, 369, 609);
        image(deltaSerious, 852, 400, 425, 739);
        pop();
    }

    //V + MOBIUS
    if (scene >= 225 && scene <= 228) {
        push();
        imageMode(CENTER);
        image(vSmile, 426, 420, 369, 609);
        image(mobiusSerious, 852, 420, 410, 732);
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
    if ((scene >= 106 && scene <= 135) || (scene >= 183 && scene <= 187) || (scene >= 238 && scene <= 268)) {
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
    if ((scene >= 147 && scene <= 151) || (scene >= 229 && scene <= 236)) {
        push();
        imageMode(CENTER);
        image(mobiusSerious, width / 2, 420, 410, 732);
        pop();
    }

    //DELTA ALONE
    if ((scene >= 162 && scene <= 175) || (scene >= 276 && scene <= 308) || (scene >= 349 && scene <= 372) || (scene >= 375 && scene <= 390)) {
        push();
        imageMode(CENTER);
        image(deltaSerious, width / 2, 400, 425, 739);
        pop();
    }

    //DELTA SHY
    if (scene >= 373 && scene <= 374) {
        push();
        imageMode(CENTER);
        image(deltaShy, width / 2, 400, 425, 739);
        pop();
    }

    //DOCTOR + DELTA
    if (scene >= 176 && scene <= 182) {
        push();
        imageMode(CENTER);
        image(deltaSerious, 426, 400, 425, 739);
        image(doctorSmile, 852, 400, 425, 739);
        pop();
    }

    //FURINA
    if ((scene >= 158 && scene <= 160) || (scene >= 194 && scene <= 196 || (scene >= 272 && scene <= 273))) {
        push();
        imageMode(CENTER);
        image(furinaDream, width / 2, 420, 369, 609);
        pop();
    }
}

function backgroundsForScenes() {
    // if (scene >= 0) {
    //     push();
    //     imageMode(CORNER);
    //     image(snowBG, 0, 0, 2200, 739);
    //     pop();
    // }

    let bgName = scenes[scene].bg;
    background(backgrounds[bgName]);

    if (scenes[scene] !== undefined) {
        image(backgrounds[bgName], 0, 0, 1280, 720);
    }
}

function mousePressed() {
    allMenuButtons()
    nameInput()
    //backToMainMenu()


    if (mouseX >= 1100 && mouseX <= 1200 && mouseY >= 550 && mouseY <= 650 && scene !== 10 && scene !== 16 && scene !== 25 && scene !== 38 && scene !== 47 && scene !== 52 && scene !== 77 && scene !== 82 && scene !== 98 && scene !== 114 && scene !== 122 && scene !== 127 && scene !== 156 && scene !== 192 && scene !== 200 && scene !== 207 && scene !== 256 && scene !== 271 && scene !== 297 && scene !== 332 && scene !== 339 && scene !== 344 && scene !== 348 && scene !== 359 && scene !== 371) {
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
        vLikeBar++
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

    //CHOICE 8B
    if (((mouseX >= 490 && mouseX <= 790 && mouseY >= 273 && mouseY <= 327) || (mouseX >= 430 && mouseX <= 850 && mouseY >= 390 && mouseY <= 444)) && scene == 200) {
        scene++;
    }

    //CHOICE 9
    //CHOICE 9A
    if (mouseX >= 490 && mouseX <= 790 && mouseY >= 273 && mouseY <= 327 && scene == 207) {
        scene = 207;
    }

    if (mouseX >= 1100 && mouseX <= 1200 && mouseY >= 550 && mouseY <= 650 && scene == 214) {
        scene = 218;
    }

    //CHOICE 9B
    if (mouseX >= 430 && mouseX <= 850 && mouseY >= 390 && mouseY <= 444 && scene == 207) {
        scene = 214;
        vLikeBar++
    }

    //CHOICE 10
    //CHOICE 10A
    if (mouseX >= 490 && mouseX <= 790 && mouseY >= 273 && mouseY <= 327 && scene == 256) {
        scene = 257;
    }

    if (mouseX >= 1100 && mouseX <= 1200 && mouseY >= 550 && mouseY <= 650 && scene == 259) {
        scene = 260;
    }

    //CHOICE 10B
    if (mouseX >= 430 && mouseX <= 850 && mouseY >= 390 && mouseY <= 444 && scene == 256) {
        scene = 259;
    }

    //CHOICE 11
    //CHOICE 11A
    if (mouseX >= 490 && mouseX <= 790 && mouseY >= 273 && mouseY <= 327 && scene == 297) {
        scene = 298;
    }

    if (mouseX >= 1100 && mouseX <= 1200 && mouseY >= 550 && mouseY <= 650 && scene == 300) {
        scene = 304;
    }

    //CHOICE 11B
    if (mouseX >= 430 && mouseX <= 850 && mouseY >= 390 && mouseY <= 444 && scene == 297) {
        scene = 300;
    }

    //CHOICE 12
    //CHOICE 12A
    if (mouseX >= 465 && mouseX <= 815 && mouseY >= 143 && mouseY <= 197 && scene == 332) {
        scene = 333;
    }

    //CHOICE 12B
    if (mouseX >= 465 && mouseX <= 815 && mouseY >= 273 && mouseY <= 327 && scene == 332) {
        scene = 349;
    }

    //CHOICE 12C
    // if (mouseX >= 465 && mouseX <= 815 && mouseY >= 390 && mouseY <= 444 && scene == 332) {
    //     scene = 121;
    // }

    //CHOICE 13A
    if (mouseX >= 465 && mouseX <= 815 && mouseY >= 273 && mouseY <= 327 && scene == 339 && vLikeBar >= 3) {
        scene = 340;
    }

    //CHOICE 13B
    if (mouseX >= 465 && mouseX <= 815 && mouseY >= 390 && mouseY <= 444 && scene == 339) {
        scene = 345;
    }

    //CHOICE 14A
    if (mouseX >= 465 && mouseX <= 815 && mouseY >= 273 && mouseY <= 327 && scene == 359) {
        scene = 360;
    }

    //CHOICE 14B
    if (mouseX >= 465 && mouseX <= 815 && mouseY >= 390 && mouseY <= 444 && scene == 359) {
        scene = 335;
    }

    //CHOICE 15A
    if (mouseX >= 465 && mouseX <= 815 && mouseY >= 273 && mouseY <= 327 && scene == 371) {
        scene = 372;
    }

    //CHOICE 15B
    // if (mouseX >= 465 && mouseX <= 815 && mouseY >= 390 && mouseY <= 444 && scene == 371) {
    //     scene = 335;
    // }
}

function nameInput() {

    // push()
    // fill(255)
    // rectMode(CENTER)
    // rect(width/2,height/2,300,100)
    // pop()

    // if (content === nameContent) {

    // }
}



// function enterText() {
//     if (scene == 275) {
//         if (textInput.value() == dreamName) {
//             //go to the next scene
//             secretEnding = true;
//         } else {
//             //go to the next scene
//         }
//     }
// }

function allMenuButtons() {
    // if (state === `title` && mouseX >= 926 && mouseY >= 237 && mouseX <= 1193 && mouseY <= 287) {
    //     state = `simulation`;
    // }

    if (state === `title` && mouseX >= 926 && mouseY >= 237 && mouseX <= 1193 && mouseY <= 287) {
        state = `actButtons`;
    }

    if (state === `actButtons` && mouseX >= 946 && mouseY >= 310 && mouseX <= 1125 && mouseY <= 330) {
        state = `simulation`;
    }

    if (state === `actButtons` && mouseX >= 946 && mouseY >= 350 && mouseX <= 1125 && mouseY <= 370 && act2Available == true) {
        state = `simulation`;
        scene = 154;
    }

    if (state === `title` && mouseX >= 926 && mouseX <= 1193 && mouseY >= 395 && mouseY <= 449) {
        state = `gallery`;
    }

    if (state === `actButtons` && mouseX >= 926 && mouseX <= 1193 && mouseY >= 395 && mouseY <= 449) {
        state = `gallery`;

        act1ArrowOriginalPos = 257;
        act2ArrowOriginalPos = 257;
        actButtonsShow = false;
    }

    if (state === `title` && mouseX >= 926 && mouseY >= 552 && mouseX <= 1193 && mouseY <= 602) {
        state = `credits`;
    }

    if (state === `actButtons` && mouseX >= 926 && mouseY >= 552 && mouseX <= 1193 && mouseY <= 602) {
        state = `credits`;

        act1ArrowOriginalPos = 257;
        act2ArrowOriginalPos = 257;
        actButtonsShow = false;
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

        act1ArrowOriginalPos = 257;
        act2ArrowOriginalPos = 257;
        actButtonsShow = false;
    }

    if (state === `menu` && mouseX >= 730 && mouseY >= 478 && mouseX <= 770 && mouseY <= 500) {
        state = `simulation`;
    }
}

// function mousePressed() {
//      allMenuButtons();
//     let line = script[currentScene][currentDialog];

//     if (line.type === "speech") {
//         currentDialog++;
//     }
//     else if (line.type === "choice") {
//         // Work out which choice they clicked!
//         for (let i = 0; i < line.choices.length; i++) {
//             let choice = line.choices[i];
//             if (mouseX > choice.button.x &&
//                 mouseX < choice.button.x + choice.button.w &&
//                 mouseY > choice.button.y &&
//                 mouseY < choice.button.y + choice.button.h) {
//                 // It was clicked
//                 currentScene = choice.nextScene;
//                 currentDialog = 0;
//             }
//         }
//     }

// }
function galleryImages() {
    push()
    imageMode(CORNER)
    image(CG1, 0, 0, 1280, 720);
    pop()
}

function overlayGraphic() {
    if (scene == 384) {
        push()
        imageMode(CORNER);
        image(endCG6, 0, 0, 1280, 720);
        pop()
    }
}

function cinematicGraphics() {
    if (scene >= 55 && scene <= 60) {
        push()
        imageMode(CORNER);
        image(CG1, 0, 0, 1280, 720);
        pop()
    }

    if (scene >= 384) {
        push()
        imageMode(CORNER);
        image(endCG6, 0, 0, 1280, 720);
        pop()
    }

    //DELTA OVERLAY SPRITE
    if (scene >= 385) {
        push();
        imageMode(CENTER);
        image(deltaSerious, width / 2, 400, 425, 739);
        pop();
    }

    if (scene == 391) {
        push()
        imageMode(CORNER);
        image(endCG62, 0, 0, 1280, 720);
        pop()
    }
}

function endingGraphics() {

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

    if (scene == 348) {
        push()
        imageMode(CORNER);
        image(endCG1, 0, 0, 1280, 720);
        fill(255, 0, 0)
        textSize(40)
        text("END 4: Escaped the lab thanks to V LOL.", 500, 450)
        pop()

        backToMainMenu()
    }

    if (scene == 344) {
        push()
        imageMode(CORNER);
        image(endCG1, 0, 0, 1280, 720);
        fill(255, 0, 0)
        textSize(40)
        text("END 5: Escaped the lab WITH V YIPPEE.", 500, 450)
        pop()

        backToMainMenu()
    }

    if (scene == 392) {
        push()
        imageMode(CORNER);
        image(endCG62, 0, 0, 1280, 720);
        fill(255, 0, 0)
        textSize(40)
        text("END 6: YIPPEEE YOPPIEEEE", 500, 450)
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
        act1ArrowOriginalPos = 257;
        act2ArrowOriginalPos = 257;
        actButtonsShow = false;
    }
}

function specialText() {
    if (scene == 64) {
        //textStyle(ITALIC)
    } if (scene == 65) {
        textStyle(NORMAL)
    }
}

function keyPressed() {
    if (scene == 156) {
        playNextNote()
        endPianoTimer++;
        console.log(endPianoTimer)
        if (endPianoTimer >= pianoPartLength) {
            scene = 157
            endPianoTimer = 0;
            pianoPartLength = 15;
        }
    }

    if (scene == 192) {
        
        playNextNote()
        endPianoTimer++;
        console.log(endPianoTimer)
        if (endPianoTimer >= pianoPartLength) {
            scene = 193
            endPianoTimer = 0;
            pianoPartLength = 20;
        }
    }

    if (scene == 271) {
        playNextNote()
        endPianoTimer++;
        console.log(endPianoTimer)
        if (endPianoTimer >= pianoPartLength) {
            scene = 272
            endPianoTimer = 0;
            pianoPartLength = 10;
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


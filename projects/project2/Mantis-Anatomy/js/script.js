/**
 * M.A.N.T.I.S. ANATOMY
 * Scarlett Perez
 * 
 * STILL WORK IN PROGRESS 
 */
"use strict";

//CURRENT STATE + SCENE
let state = `gallery`
let scene = 300;

//variables for the name and the text they dau
let name = " ";
let txt = " ";

let arrow;

let content = "";
let nameContent = "furina";

//TITLE SCREEN
let titleScreen;
let altMenu;
let act1Arrow;
let act2Arrow;

let act1ArrowOriginalPos = 257;
let act2ArrowOriginalPos = 257;

let actButtonsShow = false;

let act2Available = false;

//Variables for the CG images
let CG1;
let CG2;
let CG3;
let CG4;
let CG5;
let CG6;
let CG7;
let CG8;
let CG9;
let CG10;

//VARIABLES FOR GALLERY PLACEHOLDERS (aka locked gallery) 
let galleryPlaceholder;
let galleryPlaceholder2;
let galleryPlaceholder3;
let galleryPlaceholder4;
let galleryPlaceholder5;
let galleryPlaceholder6;

//Variables (if it is false, the gallery will not show the image until it is shown to be true passing a scene
let CG1Unlock = false;
let CG2Unlock = false;
let CG3Unlock = false;
let CG4Unlock = false;
let CG5Unlock = false;
let CG6Unlock = false;
let CG7Unlock = false;
let CG8Unlock = false;
let CG9Unlock = false;
let CG10Unlock = false;

//Ending CGS
let endCG1;
let endCG2;
let endCG3;
let endCG4;
let endCG5;
let endCG6;
let endCG7;
let endCG8;
let endCG9;
let endCG10;
let endCG11;

let endCG62;

let startText = "Start"
let galleryText = "Gallery"
let creditText = "Credits"

//VARIABLES
let guardTalk = false;
let vLikeBar = 0;

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

let deltaShy;

let guardNeutral;

let furinaDream;
let furinaSmile;

let neuviletteNeutral;

//BACKGROUNDS
let backgroundNames = ["snowBG", "officeBG", "hallwayBG", "piano", "pianoBG1", "blackSquare", "roomBG", "experimentationBG", "transparent"];
let backgrounds = {};

//MUSIC
let snowMusic;
let lastMusic;
let oldDoll;
let doomedMusic;

let currentScene = "intro";
let currentDialog = 0;

let textInput;
let textInputBox;

let secretEnding = false;

/**
 * Preloading all the images (sprites, CGS) and music to be used later in the game 
*/
function preload() {

    titleScreen = loadImage('assets/images/title.png');
    altMenu = loadImage('assets/images/altMenu.png');
    act1Arrow = loadImage('assets/images/act1Arrow.png');
    act2Arrow = loadImage('assets/images/act2Arrow.png');
    arrow = loadImage('assets/images/right-arrow.png');

    CG1 = loadImage('assets/images/CGS/CG1.png');
    CG2 = loadImage('assets/images/EndCG1.png');
    CG3 = loadImage('assets/images/CGS/CG3.png');
    CG4 = loadImage('assets/images/CGS/CG4.png');
    CG5 = loadImage('assets/images/CGS/CG5.png');
    CG6 = loadImage('assets/images/CGS/CG6.png');
    CG7 = loadImage('assets/images/CGS/CG7.png');
    CG8 = loadImage('assets/images/CGS/CG8.png');
    CG9 = loadImage('assets/images/CGS/CG9.png');
    CG10 = loadImage('assets/images/CGS/CG10.png');

    galleryPlaceholder = loadImage('assets/images/galleryPlaceholder.png');
    galleryPlaceholder2 = loadImage('assets/images/galleryPlaceholder2.png');
    galleryPlaceholder3 = loadImage('assets/images/galleryPlaceholder3.png');
    galleryPlaceholder4 = loadImage('assets/images/galleryPlaceholder4.png');
    galleryPlaceholder5 = loadImage('assets/images/galleryPlaceholder5.png');
    galleryPlaceholder6 = loadImage('assets/images/galleryPlaceholder6.png');

    endCG1 = loadImage('assets/images/EndCG1.png');
    endCG2 = loadImage('assets/images/ENDCGS/EndCG2.png');
    endCG3 = loadImage('assets/images/ENDCGS/EndCG3.png');
    endCG4 = loadImage('assets/images/ENDCGS/EndCG4.png');
    endCG5 = loadImage('assets/images/ENDCGS/EndCG5.png');
    endCG6 = loadImage('assets/images/ENDCGS/endCG6.png');
    endCG7 = loadImage('assets/images/ENDCGS/endCG7.png');
    endCG8 = loadImage('assets/images/ENDCGS/endCG8.png');
    endCG9 = loadImage('assets/images/ENDCGS/endCG9.png');
    endCG10 = loadImage('assets/images/ENDCGS/endCG10.png');
    endCG11 = loadImage('assets/images/ENDCGS/endCG11.png');

    endCG62 = loadImage('assets/images/ENDCGS/EndCG6-2.png');

    doctorSerious = loadImage('assets/images/sprites/doctorSerious.png');
    doctorSmile = loadImage('assets/images/sprites/doctorSmile.png');
    doctorGrin = loadImage('assets/images/sprites/doctorGrin.png');

    vSmile = loadImage('assets/images/sprites/vSmile.png');
    vWorried = loadImage('assets/images/sprites/vWorried.png');

    mobiusSerious = loadImage('assets/images/sprites/mobiusSerious.png');

    deltaSerious = loadImage('assets/images/sprites/deltaSerious.png');
    deltaShy = loadImage('assets/images/sprites/deltaShy.png');

    guardNeutral = loadImage('assets/images/sprites/guardNeutral.png');

    furinaDream = loadImage('assets/images/sprites/furinaDream.png');
    furinaSmile = loadImage('assets/images/sprites/furinaSmile.png');

    neuviletteNeutral = loadImage('assets/images/sprites/neuviletteNeutral.png');

    snowMusic = loadSound('assets/sounds/Snowfall.mp3');
    lastMusic = loadSound('assets/sounds/One Last Glance.mp3');
    oldDoll = loadSound('assets/sounds/Old Doll.mp3');
    doomedMusic = loadSound('assets/sounds/DOOMED.mp3');


    // snowBG = loadImage('assets/images/bgs/snow.jpeg');

    for (let i = 0; i < backgroundNames.length; i++) {
        let backgroundName = backgroundNames[i];
        backgrounds[backgroundName] = loadImage(`assets/images/bgs/${backgroundName}.png`);
    }

}

//Variables for all the choices, these are so the choices can be shown on when the choices are supposed to appear. They are just lines so instead of inserting the text itself I just decided to make variables instead for easier finding.
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

let choice16A = "Nuh uh."
let choice16B = "What do you want."

let choice17A = "Okay."
let choice17B = "No."

/**
 * Description of setup
*/
function setup() {
    //creates canvas at 720p 
    createCanvas(1280, 720);

    // makes it that the music/sound will only play when the user clicks the game itself
    userStartAudio();
    //synth for the piano part of the game, it’s the sound that plays basically (the instrument)
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

    //setting up the states of the game so when a certain state the game will change to said state 
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
        //the mouse pressed makes it that if the mouse is around the area of the gallery on top of a CG and the CG is unlocked, it will call for “gallery images” which opens the CG you have selected into a bigger frame to be able to see it full screen
        if (mouseIsPressed && mouseX >= 75 && mouseY >= 100 && mouseX <= 405 && mouseY <= 300 && CG1Unlock == true) {
            galleryImages();
        } else if (mouseIsPressed && mouseX >= 475 && mouseY >= 100 && mouseX <= 805 && mouseY <= 300 && CG2Unlock == true) {
            galleryImages();
        } else if (mouseIsPressed && mouseX >= 875 && mouseY >= 100 && mouseX <= 1205 && mouseY <= 300 && CG3Unlock == true) {
            galleryImages();
        } else if (mouseIsPressed && mouseX >= 75 && mouseY >= 370 && mouseX <= 405 && mouseY <= 570 && CG4Unlock == true) {
            galleryImages();
        } else if (mouseIsPressed && mouseX >= 475 && mouseY >= 370 && mouseX <= 805 && mouseY <= 570 && CG5Unlock == true) {
            galleryImages();
        } else if (mouseIsPressed && mouseX >= 875 && mouseY >= 370 && mouseX <= 1205 && mouseY <= 570 && CG6Unlock == true) {
            galleryImages();
        }
    } else if (state === `gallery2`) {
        gallery2();
        //this is the same as previously stated with the whole calling gallery images but instead working on page 2 of the gallery, a different function to call for different things 
        if (mouseIsPressed && mouseX >= 75 && mouseY >= 100 && mouseX <= 405 && mouseY <= 300 && CG7Unlock == true) {
            galleryImages2();
        } else if (mouseIsPressed && mouseX >= 475 && mouseY >= 100 && mouseX <= 805 && mouseY <= 300 && CG8Unlock == true) {
            galleryImages2();
        } else if (mouseIsPressed && mouseX >= 875 && mouseY >= 100 && mouseX <= 1205 && mouseY <= 300 && CG9Unlock == true) {
            galleryImages2();
        } else if (mouseIsPressed && mouseX >= 75 && mouseY >= 370 && mouseX <= 405 && mouseY <= 570 && CG10Unlock == true) {
            galleryImages2();
        }
    }
    else if (state === `gallery3`) {
        gallery3();
        //the mouse pressed makes it that if the mouse is around the area of the gallery on top of a CG and the CG is unlocked, it will call for “gallery images” which opens the CG you have selected into a bigger frame to be able to see it full screen
        if (mouseIsPressed && mouseX >= 75 && mouseY >= 100 && mouseX <= 405 && mouseY <= 300 && CG1Unlock == true) {
            galleryImages();
        } else if (mouseIsPressed && mouseX >= 475 && mouseY >= 100 && mouseX <= 805 && mouseY <= 300 && CG2Unlock == true) {
            galleryImages();
        } else if (mouseIsPressed && mouseX >= 875 && mouseY >= 100 && mouseX <= 1205 && mouseY <= 300 && CG3Unlock == true) {
            galleryImages();
        } else if (mouseIsPressed && mouseX >= 75 && mouseY >= 370 && mouseX <= 405 && mouseY <= 570 && CG4Unlock == true) {
            galleryImages();
        } else if (mouseIsPressed && mouseX >= 475 && mouseY >= 370 && mouseX <= 805 && mouseY <= 570 && CG5Unlock == true) {
            galleryImages();
        } else if (mouseIsPressed && mouseX >= 875 && mouseY >= 370 && mouseX <= 1205 && mouseY <= 570 && CG6Unlock == true) {
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
    //the title screen display
    //All it does is display the image I made for the title screen in the canvas definition
    push()
    imageMode(CORNER)
    image(titleScreen, 0, 0, 1280, 720);
    pop()
}

/**
 * this function is specifically for when you press start and it displays the act buttons. These are all the display components.
*/
function actButtons() {
    //calls the title function
    title()
    push()
    imageMode(CORNER)
    image(act1Arrow, 946, act1ArrowOriginalPos, 177, 20);

    //if act 2 is not available yet, the act 2 text will not appear in full opacity and be slightly greyed out (to show it’s not available) 
    // however if act 2 is true (which the available marker is at a certain scene) it will make the text be full opacity aka white
    if (act2Available === false) {
        push()
        tint(255, 100)
        image(act2Arrow, 946, act2ArrowOriginalPos, 177, 20);
        pop()
    } else if (act2Available === true) {
        push()
        tint(255, 255)
        image(act2Arrow, 946, act2ArrowOriginalPos, 177, 20);
        pop()
    }
    pop()

    //if the start button is pressed, then the act button would change from false to true. In this part is says, if the buttons are not being shown, move the text of the acts downwards gradually 
    if (actButtonsShow === false) {
        act1ArrowOriginalPos = act1ArrowOriginalPos + 5
        act2ArrowOriginalPos = act2ArrowOriginalPos + 8
    }

    //if it’s true however, it will stop at those specific positions 
    if (actButtonsShow === true) {
        act1ArrowOriginalPos = 310
        act2ArrowOriginalPos = 350
    }

    //which is what this code does. Telling that if the first act button is bigger than 310 or act two is bigger than 350 (y value) then the buttons that are being shown and sliding will stop
    if (act1ArrowOriginalPos > 310 || act2ArrowOriginalPos > 350) {
        actButtonsShow = true
    }
}

/**
 * The gallery function, which is also a state, is broken in two parts (gallery2 being the other part)
*/
function gallery() {
    //back rectangle
    rect(70, 600, 150, 60);

    push()
    fill(255)
    textSize(30)
    text("CGS ... Page 1.", 90, 80)
    pop()

    push()
    fill(255, 0, 0)
    textSize(30)
    text("< BACK", 90, 640)
    pop()

    //next rectangle
    rect(1060, 600, 150, 60);

    push()
    fill(255, 0, 0)
    textSize(30)
    text("NEXT >", 1080, 640)
    pop()

    push()
    fill(255, 0, 0)
    rect(405, 570, 100, 80)
    pop()

    //CG 1
    push()
    if (CG1Unlock == false) {
        imageMode(CORNER)
        image(galleryPlaceholder, 75, 100, 330, 200);
    }
    if (CG1Unlock == true) {
        imageMode(CORNER)
        image(CG1, 75, 100, 330, 200);
    }
    pop()

    //CG 2
    push()
    if (CG2Unlock == false) {
        imageMode(CORNER)
        image(galleryPlaceholder6, 475, 100, 330, 200);
    }
    if (CG2Unlock == true) {
        imageMode(CORNER)
        image(CG2, 475, 100, 330, 200);
    }
    pop()

    //CG 3
    push()
    if (CG3Unlock == false) {
        imageMode(CORNER)
        image(galleryPlaceholder4, 875, 100, 330, 200);
    }
    if (CG3Unlock == true) {
        imageMode(CORNER)
        image(CG3, 875, 100, 330, 200);
    }
    pop()

    //CG 4
    push()
    if (CG4Unlock == false) {
        imageMode(CORNER)
        image(galleryPlaceholder3, 75, 370, 330, 200);
    }
    if (CG4Unlock == true) {
        imageMode(CORNER)
        image(CG4, 75, 370, 330, 200);
    }
    pop()

    //CG 5
    push()
    if (CG5Unlock == false) {
        imageMode(CORNER)
        image(galleryPlaceholder5, 475, 370, 330, 200);
    }
    if (CG5Unlock == true) {
        imageMode(CORNER)
        image(CG5, 475, 370, 330, 200);
    }
    pop()

    //CG 6
    push()
    if (CG6Unlock == false) {
        imageMode(CORNER)
        image(galleryPlaceholder2, 875, 370, 330, 200);
    }
    if (CG6Unlock == true) {
        imageMode(CORNER)
        image(CG6, 875, 370, 330, 200);
    }
    pop()
}

function gallery2() {
    //back rectangle
    rect(70, 600, 150, 60);

    push()
    fill(255)
    textSize(30)
    text("CGS ... Page 2.", 90, 80)
    pop()

    push()
    fill(255, 0, 0)
    textSize(30)
    text("< BACK", 90, 640)
    pop()

    //next rectangle
    rect(1060, 600, 150, 60);

    push()
    fill(255, 0, 0)
    textSize(30)
    text("NEXT >", 1080, 640)
    pop()

    //CG 1
    push()
    if (CG7Unlock == false) {
        imageMode(CORNER)
        image(galleryPlaceholder, 75, 100, 330, 200);
    }
    if (CG7Unlock == true) {
        imageMode(CORNER)
        image(CG7, 75, 100, 330, 200);
    }
    pop()

    //CG 2
    push()
    if (CG8Unlock == false) {
        imageMode(CORNER)
        image(galleryPlaceholder6, 475, 100, 330, 200);
    }
    if (CG8Unlock == true) {
        imageMode(CORNER)
        image(CG8, 475, 100, 330, 200);
    }
    pop()

    //CG 3
    push()
    if (CG9Unlock == false) {
        imageMode(CORNER)
        image(galleryPlaceholder4, 875, 100, 330, 200);
    }
    if (CG9Unlock == true) {
        imageMode(CORNER)
        image(CG9, 875, 100, 330, 200);
    }
    pop()

    //CG 4
    push()
    if (CG10Unlock == false) {
        imageMode(CORNER)
        image(galleryPlaceholder3, 75, 370, 330, 200);
    }
    if (CG10Unlock == true) {
        imageMode(CORNER)
        image(CG10, 75, 370, 330, 200);
    }
    pop()
}

function gallery3() {
    //back rectangle
    rect(70, 600, 150, 60);

    push()
    fill(255)
    textSize(30)
    text("Ending Cards ... Page 1.", 90, 80)
    pop()

    push()
    fill(255, 0, 0)
    textSize(30)
    text("< BACK", 90, 640)
    pop()

    //next rectangle
    rect(1060, 600, 150, 60);

    push()
    fill(255, 0, 0)
    textSize(30)
    text("NEXT >", 1080, 640)
    pop()

    //CG 1
    push()
    if (CG7Unlock == false) {
        imageMode(CORNER)
        image(galleryPlaceholder, 75, 100, 330, 200);
    }
    if (CG7Unlock == true) {
        imageMode(CORNER)
        image(CG7, 75, 100, 330, 200);
    }
    pop()

    //CG 2
    push()
    if (CG8Unlock == false) {
        imageMode(CORNER)
        image(galleryPlaceholder6, 475, 100, 330, 200);
    }
    if (CG8Unlock == true) {
        imageMode(CORNER)
        image(CG8, 475, 100, 330, 200);
    }
    pop()

    //CG 3
    push()
    if (CG9Unlock == false) {
        imageMode(CORNER)
        image(galleryPlaceholder4, 875, 100, 330, 200);
    }
    if (CG9Unlock == true) {
        imageMode(CORNER)
        image(CG9, 875, 100, 330, 200);
    }
    pop()

    //CG 4
    push()
    if (CG10Unlock == false) {
        imageMode(CORNER)
        image(galleryPlaceholder3, 75, 370, 330, 200);
    }
    if (CG10Unlock == true) {
        imageMode(CORNER)
        image(CG10, 75, 370, 330, 200);
    }
    pop()
}

function galleryImageUnlock() {
    if (scene == 55 && CG1Unlock == false) {
        CG1Unlock = true;
    }

    if (scene == 55 && CG2Unlock == false) {
        CG2Unlock = true;
    }

    if (scene == 317 && CG3Unlock == false) {
        CG3Unlock = true;
    }

    if (scene == 323 && CG4Unlock == false) {
        CG4Unlock = true;
    }

    if (scene == 335 && CG5Unlock == false) {
        CG5Unlock = true;
    }

    if (scene == 349 && CG6Unlock == false) {
        CG6Unlock = true;
    }

    if ((scene == 384 || scene == 411) && CG7Unlock == false) {
        CG7Unlock = true;
    }

    if (scene == 417 && CG8Unlock == false) {
        CG8Unlock = true;
    }

    if (scene == 434 && CG9Unlock == false) {
        CG9Unlock = true;
    }

    if (scene == 452 && CG10Unlock == false) {
        CG10Unlock = true;
    }
}

function credits() {
    push()
    imageMode(CORNER)
    image(altMenu, 0, 0, 1280, 720);
    pop()

    push()
    fill(255, 255, 255, 150)
    rect(500, 50, 500, 625);
    pop()

    push();
    fill(0)
    textSize(20)
    text("CREDITS!!!\n\n\nCode: Me \n\nllustrations: Me!!! Also background from Adobe \nStock cuz I am not drawing backgrounds do I \nlook like I understand perspective.\nAlso character inspirations to my homie miHoYo \n\nUnexisting Music: Snowfall by Scott Buckley\nOne Last Glance and DOOMED by Invadable \nHarmony\nOld Doll by Bluerra-sai\n\n\n (I'll add full credits when\n I'm done in true animator\n fashion)", 550, 100)
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
    if (scene === 275) {
        nameInput();
    }

    if (scene == 153) {
        act2Available = true;
    }

    galleryImageUnlock();
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

    //CHOICE 16
    if (scene == 424) {
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
        text(choice16A, width / 2, 307)
        text(choice16B, width / 2, 427)
        pop();
    }

    //CHOICE 17
    if (scene == 444) {
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
        text(choice17A, width / 2, 307)
        text(choice17B, width / 2, 427)
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

    //FURINA
    if (scene >= 439 && scene <= 463) {
        push();
        imageMode(CENTER);
        image(furinaSmile, 426, 400, 425, 739);
        pop();
    }

    //NEUVILETTE
    if (scene >= 439 && scene <= 463) {
        push();
        imageMode(CENTER);
        image(neuviletteNeutral, 852, 400, 425, 739);
        pop();
    }
}

function backgroundsForScenes() {
    let bgName = scenes[scene].bg;
    background(backgrounds[bgName]);

    if (scenes[scene] !== undefined) {
        image(backgrounds[bgName], 0, 0, 1280, 720);
    }
}

function mousePressed() {
    allMenuButtons()
    nameInput()

    if (state === `simulation` && mouseX >= 1100 && mouseX <= 1200 && mouseY >= 550 && mouseY <= 650 && scene !== 10 && scene !== 16 && scene !== 25 && scene !== 38 && scene !== 47 && scene !== 52 && scene !== 77 && scene !== 82 && scene !== 98 && scene !== 114 && scene !== 122 && scene !== 127 && scene !== 156 && scene !== 192 && scene !== 200 && scene !== 207 && scene !== 256 && scene !== 271 && scene !== 275 && scene !== 297 && scene !== 308 && scene !== 332 && scene !== 339 && scene !== 344 && scene !== 348 && scene !== 359 && scene !== 371 && scene !== 392 && scene !== 406 && scene !== 424 && scene !== 426 && scene !== 432 && scene !== 444 && scene !== 459 && scene !== 463) {
        scene += 1;
        console.log(scene)

        music();
    }

    //SECRET ENDING
    if (mouseX >= 1100 && mouseX <= 1200 && mouseY >= 550 && mouseY <= 650 && scene == 308 && secretEnding == true) {
        scene = 433;
    } else if (mouseX >= 1100 && mouseX <= 1200 && mouseY >= 550 && mouseY <= 650 && scene == 308 && secretEnding == false) {
        scene++;
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
        scene = 208;
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

    // CHOICE 12C
    if (mouseX >= 465 && mouseX <= 815 && mouseY >= 390 && mouseY <= 444 && scene == 332) {
        scene = 408;
    }

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
    if (mouseX >= 465 && mouseX <= 815 && mouseY >= 390 && mouseY <= 444 && scene == 371) {
        scene = 393;
    }

    //CHOICE 16A
    if (mouseX >= 465 && mouseX <= 815 && mouseY >= 273 && mouseY <= 327 && scene == 424) {
        scene = 425;
    }

    if (mouseX >= 1100 && mouseX <= 1200 && mouseY >= 550 && mouseY <= 650 && scene == 427) {
        scene = 428;
    }

    //CHOICE 16B
    if (mouseX >= 465 && mouseX <= 815 && mouseY >= 390 && mouseY <= 444 && scene == 424) {
        scene = 427;
    }

    //CHOICE 17A
    if (mouseX >= 465 && mouseX <= 815 && mouseY >= 273 && mouseY <= 327 && scene == 444) {
        scene = 461;
    }

    //CHOICE 17B
    if (mouseX >= 465 && mouseX <= 815 && mouseY >= 390 && mouseY <= 444 && scene == 444) {
        scene = 445;
    }
}

function nameInput() {

    if (scene === 275) {
        push()
        fill(255)
        rectMode(CENTER)
        rect(width / 2, 250, 500, 100)
        fill(0)
        textAlign(CENTER)
        textSize(25)
        text("write your answer... then press enter...\n (lowercase)", width / 2, 250)
        pop()
        push()
        fill(255);
        textSize(30);
        textAlign(CENTER)
        text(content, width / 2, height / 2);
        pop()
    }
    console.log(secretEnding)

    if (scene === 275) {
        if (content === nameContent) {
            secretEnding = true;
        } if (content !== nameContent) {
            secretEnding = false;
        }
    }
}

function keyTyped() {
    if (scene === 275) {
        content += key;

        if (key === 'Enter') {
            scene++
        }
    }

}

function keyReleased() {
    if (keyCode == BACKSPACE) {
        content = content.substring(0, content.length - 1);
    }
}

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

    if (state === `gallery2` && mouseX >= 70 && mouseY >= 600 && mouseX <= 220 && mouseY <= 660) {
        state = `gallery`;
    }

    if (state === `gallery` && mouseX >= 1060 && mouseY >= 600 && mouseX <= 1210 && mouseY <= 660) {
        state = `gallery2`;
    }

    if (state === `gallery2` && mouseX >= 1060 && mouseY >= 600 && mouseX <= 1210 && mouseY <= 660) {
        state = `gallery3`;
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
        secretEnding = false
        content = ""
        vLikeBar = 0

        doomedMusic.setVolume(0, 2);
        oldDoll.setVolume(0, 2);
        snowMusic.setVolume(0, 2);
        lastMusic.setVolume(0, 2);
    }

    if (state === `menu` && mouseX >= 730 && mouseY >= 478 && mouseX <= 770 && mouseY <= 500) {
        state = `simulation`;
    }
}

function galleryImages() {
    if (mouseIsPressed && mouseX >= 75 && mouseY >= 100 && mouseX <= 405 && mouseY <= 300 && CG1Unlock == true) {
        push()
        imageMode(CORNER)
        image(CG1, 0, 0, 1280, 720);
        pop()
    }

    if (mouseIsPressed && mouseX >= 475 && mouseY >= 100 && mouseX <= 805 && mouseY <= 300 && CG2Unlock == true) {
        push()
        imageMode(CORNER)
        image(CG2, 0, 0, 1280, 720);
        pop()
    }

    if (mouseIsPressed && mouseX >= 875 && mouseY >= 100 && mouseX <= 1205 && mouseY <= 300 && CG3Unlock == true) {
        push()
        imageMode(CORNER)
        image(CG3, 0, 0, 1280, 720);
        pop()
    }

    if (mouseIsPressed && mouseX >= 75 && mouseY >= 370 && mouseX <= 405 && mouseY <= 570 && CG4Unlock == true) {
        push()
        imageMode(CORNER)
        image(CG4, 0, 0, 1280, 720);
        pop()
    }

    if (mouseIsPressed && mouseX >= 475 && mouseY >= 370 && mouseX <= 805 && mouseY <= 570 && CG5Unlock == true) {
        push()
        imageMode(CORNER)
        image(CG5, 0, 0, 1280, 720);
        pop()
    }

    if (mouseIsPressed && mouseX >= 875 && mouseY >= 370 && mouseX <= 1205 && mouseY <= 570 && CG6Unlock == true) {
        push()
        imageMode(CORNER)
        image(CG6, 0, 0, 1280, 720);
        pop()
    }

}

function galleryImages2() {
    if (mouseIsPressed && mouseX >= 75 && mouseY >= 100 && mouseX <= 405 && mouseY <= 300 && CG7Unlock == true) {
        push()
        imageMode(CORNER)
        image(CG7, 0, 0, 1280, 720);
        pop()
    }

    if (mouseIsPressed && mouseX >= 475 && mouseY >= 100 && mouseX <= 805 && mouseY <= 300 && CG8Unlock == true) {
        push()
        imageMode(CORNER)
        image(CG8, 0, 0, 1280, 720);
        pop()
    }

    if (mouseIsPressed && mouseX >= 875 && mouseY >= 100 && mouseX <= 1205 && mouseY <= 300 && CG9Unlock == true) {
        push()
        imageMode(CORNER)
        image(CG9, 0, 0, 1280, 720);
        pop()
    }

    if (mouseIsPressed && mouseX >= 75 && mouseY >= 370 && mouseX <= 405 && mouseY <= 570 && CG10Unlock == true) {
        push()
        imageMode(CORNER)
        image(CG10, 0, 0, 1280, 720);
        pop()
    }

    if (mouseIsPressed && mouseX >= 475 && mouseY >= 370 && mouseX <= 805 && mouseY <= 570 && CG5Unlock == true) {
        push()
        imageMode(CORNER)
        image(CG5, 0, 0, 1280, 720);
        pop()
    }

    if (mouseIsPressed && mouseX >= 875 && mouseY >= 370 && mouseX <= 1205 && mouseY <= 570 && CG6Unlock == true) {
        push()
        imageMode(CORNER)
        image(CG6, 0, 0, 1280, 720);
        pop()
    }

}

function overlayGraphic() {
    if (scene == 384) {
        push()
        imageMode(CORNER);
        image(CG7, 0, 0, 1280, 720);
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

    if ((scene >= 317 && scene <= 323) || (scene >= 333 && scene <= 334)) {
        push()
        imageMode(CORNER);
        image(CG3, 0, 0, 1280, 720);
        pop()
    }

    if (scene >= 323 && scene <= 332) {
        push()
        imageMode(CORNER);
        image(CG4, 0, 0, 1280, 720);
        pop()
    }

    if (scene >= 335 && scene <= 347) {
        push()
        imageMode(CORNER);
        image(CG5, 0, 0, 1280, 720);
        pop()
    }

    if (scene >= 349 && scene <= 351) {
        push()
        imageMode(CORNER);
        image(CG6, 0, 0, 1280, 720);
        pop()
    }

    if ((scene >= 384 && scene <= 392) || (scene >= 411 && scene <= 416)) {
        push()
        imageMode(CORNER);
        image(CG7, 0, 0, 1280, 720);
        pop()
    }

    //DELTA OVERLAY SPRITE
    if (scene >= 385 && scene <= 392) {
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

    if (scene >= 417 && scene <= 432) {
        push()
        imageMode(CORNER);
        image(CG8, 0, 0, 1280, 720);
        pop()
    }

    if (scene >= 434 && scene <= 438) {
        push()
        imageMode(CORNER);
        image(CG9, 0, 0, 1280, 720);
        pop()
    }

    if (scene >= 452 && scene <= 459) {
        push()
        imageMode(CORNER);
        image(CG10, 0, 0, 1280, 720);
        pop()
    }
}

function endingGraphics() {

    //ENDING 1
    if (scene == 16) {
        push()
        imageMode(CORNER);
        image(endCG1, 0, 0, 1280, 720);
        pop()

        backToMainMenu()
    }

    //ENDING 2
    if (scene == 47) {
        push()
        imageMode(CORNER);
        image(endCG2, 0, 0, 1280, 720);
        pop()

        backToMainMenu()
    }

    //ENDING 3
    if (scene == 127) {
        push()
        imageMode(CORNER);
        image(endCG3, 0, 0, 1280, 720);
        pop()

        backToMainMenu()
    }

    //ENDING 4
    if (scene == 348) {
        push()
        imageMode(CORNER);
        image(endCG4, 0, 0, 1280, 720);
        pop()

        backToMainMenu()
    }

    //ENDING 5
    if (scene == 344) {
        push()
        imageMode(CORNER);
        image(endCG5, 0, 0, 1280, 720);
        pop()

        backToMainMenu()
    }

    //ENDING 6
    if (scene == 392) {
        push()
        imageMode(CORNER);
        image(endCG6, 0, 0, 1280, 720);

        backToMainMenu()
    }

    //ENDING 7
    if (scene == 406) {
        push()
        imageMode(CORNER);
        image(endCG7, 0, 0, 1280, 720);

        backToMainMenu()
    }

    //ENDING 8
    if (scene == 426) {
        push()
        imageMode(CORNER);
        image(endCG8, 0, 0, 1280, 720);

        backToMainMenu()
    }

    //ENDING 9
    if (scene == 432) {
        push()
        imageMode(CORNER);
        image(endCG9, 0, 0, 1280, 720);
        pop()

        backToMainMenu()
    }

    //ENDING 10
    if (scene == 459) {
        push()
        imageMode(CORNER);
        image(endCG10, 0, 0, 1280, 720);
        pop()

        backToMainMenu()
    }

    //ENDING 11
    if (scene == 463) {
        push()
        imageMode(CORNER);
        image(endCG11, 0, 0, 1280, 720);
        pop()

        backToMainMenu()
    }
}

function backToMainMenu() {
    push()
    fill(255, 255, 255, 200)
    strokeWeight(3)
    rect(80, 550, 300, 100)
    fill(0)
    textSize(30)
    text("Replay?", 180, 610)
    pop()

    if (mouseX >= 80 && mouseY >= 550 && mouseX <= 380 && mouseY <= 650 && mouseIsPressed) {
        state = `title`;
        scene = 0;
        act1ArrowOriginalPos = 257;
        act2ArrowOriginalPos = 257;
        actButtonsShow = false;
        secretEnding = false;
        content = "";
        vLikeBar = 0;

        doomedMusic.setVolume(0, 2);
        oldDoll.setVolume(0, 2);
        snowMusic.setVolume(0, 2);
        lastMusic.setVolume(0, 2);
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

function music() {
    if (scene === 4) {
        snowMusic.play();
        snowMusic.loop();
        snowMusic.setVolume(0);
        snowMusic.setVolume(1, 2);
    }

    if (scene === 305) {
        doomedMusic.play();
        doomedMusic.loop();
        doomedMusic.setVolume(0);
        doomedMusic.setVolume(1, 2);
    }

    if (scene === 317) {
        doomedMusic.setVolume(0, 2);

        lastMusic.play();
        lastMusic.loop();
        lastMusic.setVolume(0);
        lastMusic.setVolume(1, 2);
    }

    if ((scene === 384) || (scene === 411)) {
        lastMusic.setVolume(0, 2);

        oldDoll.play();
        oldDoll.loop();
        oldDoll.setVolume(0);
        oldDoll.setVolume(1, 2);
    }

}


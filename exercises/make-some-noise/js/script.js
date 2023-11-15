/**
 * How, When and WhyDid This Happen To Me?!
 * Scarlett Perez
 * 
 * A visual novel that I unfortunately can't call simple as it has my blood, sweat and tears. It's extremely nonesensical but I promise it's at least a little bit entertaining! 
 * All the credits are in game in the "credits" button on the main menu :]
 */

"use strict";

let state = `title`
let scene = 0;

let name = " ";
let txt = " ";

//Stating the variables for all the images
let arrow;

//Backgrounds
let bg1;
let piano;
let elevatorBG;
let kitchenGun;
let kitchenGunEnd;
let greyOne;
let greyTwo;
let greyThree;
let end3D;

//SPRITES
let focaShock;
let focaSerious;
let foca3DUpset;
let foca3DScowl;
let foca3DShock;

let neuvi;
//MENU TEXT
let startText = "Start"
let sillyText = "Silly Room"
let creditText = "Credits"

//SOUND
let mainMusic;
let kitchenGunSound;
let shock;
let cheering;
let oscillator;
let spotlight;
let elevatorMusic;

//PIANO
let synth;
let notes = [`F4`, `G4`, `Ab4`, `Bb4`, `C4`, `Db4`, `Eb4`, `F5`];
let currentNote = 0;

//PIANO TIMER
let endPianoTimer = 0;
let pianoPartLength = 10;

//To check if you have pressed the 3rd elevator button before
let button3 = false;

//Preloading all the images + audio
function preload() {
    arrow = loadImage('assets/images/right-arrow.png');

    //Backgrounds
    bg1 = loadImage('assets/images/AdobeStock_291240419.jpeg');
    piano = loadImage('assets/images/AdobeStock_187844777.jpeg');
    elevatorBG = loadImage('assets/images/AdobeStock_127288091.jpeg');
    kitchenGun = loadImage('assets/images/KITCHEN GUN.png');
    kitchenGunEnd = loadImage('assets/images/KITCHEN GUN END.png');

    greyOne = loadImage('assets/images/cg 2-1.png');
    greyTwo = loadImage('assets/images/cg 2-2.png');
    greyThree = loadImage('assets/images/cg 2-2.5.png');
    end3D = loadImage('assets/images/cg 2-3.png');

    focaShock = loadImage('assets/images/focasprite1.png');
    focaSerious = loadImage('assets/images/focasprite.png');

    foca3DUpset = loadImage('assets/images/foca3D1.png');
    foca3DScowl = loadImage('assets/images/foca3D2.png');
    foca3DShock = loadImage('assets/images/foca3D3.png');
    neuvi = loadImage('assets/images/neuvi.png');

    //AUDIO
    mainMusic = loadSound('assets/sounds/“bread” by lukrembo.mp3')
    elevatorMusic = loadSound('assets/sounds/Local Forecast - Elevator.mp3')
    kitchenGunSound = loadSound('assets/sounds/Kitchen Gun.mp3')
    cheering = loadSound('assets/sounds/Kids Cheering - Sound Effect (HD).mp3')
    shock = loadSound('assets/sounds/shocked sound effects.mp3')
    spotlight = loadSound('assets/sounds/spotlight.mp3')
}

//Putting variables for the choices that happen during the story.
let choice1a = "Kinda?"
let choice1b = "No, not really."

let choice2a = "bruh"
let choice2b = "..."

let choice3a = "Does it matter?"
let choice3b = "idk"

//Creating the canvas and making it that when you press the actual game itself (or rather tab) the audio will be commanded to start. There is also the synth for the "piano" and the oscillator for the silly room that is also being created and having it's amp turned down as to not have it bleed ones eardrums
function setup() {
    createCanvas(1280, 720);
    userStartAudio();
    synth = new p5.PolySynth();

    //Creating a new oscillator
    oscillator = new p5.Oscillator(0, `sine`);
    //Setting the oscillator amplitude down.
    oscillator.amp(0.25);
}

//Setting the background (which is honestly more for menu items) as well as stating all the states. If the state is called "title" then it will go to the function that is called title. Same with simulation and so on and so forth.
function draw() {
    background(0);

    if (state === `title`) {
        title();
    }
    else if (state === `simulation`) {
        simulation();
    }
    else if (state === `sillyRoom`) {
        sillyRoom();
    }
    else if (state === `credits`) {
        credits();
    }
    else if (state === `menu`) {
        menu();
    }
}

//Specifically for the piano scene. When it is the piano scene (aka scene 31) the piano will be able to be played with the key being pressed. When the length of the piano part has ended (aka, 10 random notes have been played) it will go to the next scene (32)
function keyPressed() {
    if (scene == 31) {

        playNextNote()
        endPianoTimer++;
        if (endPianoTimer >= pianoPartLength) {
            scene = 32
        }
    }
}

//Goes hand in hand with the previous function, also with the piano scene (31). This function is as to that after you play one note with the key pressed, the next note will be randomly chosen from the array as to continue the sequence.
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

//The function for the main menu and it's buttons that are around. The title itself is just using a blue fill that makes it go blue (obviously) then different aligns for the text to be aligned by the center and not any other place. There is also the text size for the title itself. As for the menu buttons. They have a similar formula as they also use the same way for the text but the only difference is that they have a rectangle that goes right under it to emulate what would be the button itself.
function title() {
    push();
    textSize(64);
    fill(30, 11, 176);
    textAlign(CENTER, CENTER);
    text(`How, When and Why\nDid This Happen To Me?!`, 400, 260);
    textSize(20);
    text(`The visual novel`, 200, 370);
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

    //SILLYROOM
    push()
    rectMode(CENTER)
    rect(1000, 350, 300, 100);
    textSize(30)
    textAlign(CENTER, CENTER);
    text(sillyText, 1000, 350)
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

//Straightforward function, big rectangle (which is white) and then the text who was positioned inside the rectangle snuggly. Finally there is also the text size and a "back" button that uses the same formula as the original menu buttons.
function credits() {
    rect(500, 50, 500, 625);
    push();
    fill(0)
    textSize(30)
    text("Code: Me \n\n\nIllustrations & Models: Me \nand (character) models by \nMiHoYo  \n\n\nMusic & Sound Effects: \nGaming Sound FX, Kevin \nMacLeod, BBC, lukrembo,\nrealsoundFX and You :]\n\n\nThank You for Playing!", 550, 100)
    pop();


    rect(70, 600, 150, 60);
    push()
    fill(255, 0, 0)
    textSize(30)
    text("< BACK", 90, 640)
    pop()
}

//Calling all the functions for making the actual game run (after pressing start)
function simulation() {
    backgrounds();
    mainimgs();
    vntext();
    choices();
    elevatorButtons();
    cinematicGraphics();
    sprites()

}

//Function for the pause menu, big white rectangle with then the text that is inside it in different positions.
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

//This is a function for displaying the textbox itself and the one holding where the names would go in as well. They are plain white rectangles that are settled right on top of everything. There is also the arrow to press for the next scene and finally the rectangle that is for the pause menu right in the corner of the screen. Fill to be sure that everything stays either black or white.
function mainimgs() {
    //TEXTBOX
    push()
    fill(255);
    rectMode(CENTER);
    rect(145, 465, 170, 50);
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
    //Displaying the text by using the arrays strings from the other javascript file and also wrapping it by word so it doesn't overflow in case the lines are too long.
    push();
    fill(0);
    textSize(30);
    textWrap(WORD);
    text(scenes[scene].txt, 100, 520, 1000, 242);
    textAlign(CENTER)
    text(scenes[scene].name, 0, 450, 300);
    pop();

    //Unique textbox that appears only on the piano scene (31), a white box appears with then text that has been filled black with a font size of 30. It has been also aligned nin the middle with then the text itself.
    if (scene == 31) {
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

//The textboxes for the choices. The boxes themselves are drawn on with rect to make a rectangle, the fill being white with a tinge of transparency so you can still see the character behing the choice buttons. Then the actual words of the choices are set right on top of the slightly transparent boxes to show which choice you are choosing
function choices() {
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

    //When the mouse is on the area of the arrow and presses said arrow, one will get scene to the scene right after. There are exceptions however, those exceptions are when there are choices (hence the !==) which means you can't just click next for the choices and have to decide.
    if (mouseX >= 1100 && mouseX <= 1200 && mouseY >= 550 && mouseY <= 650 && scene !== 8 && scene !== 31 && scene !== 38 && scene !== 52 && scene !== 64 && scene !== 99) {
        scene += 1;

        //When scene 1, start playing the main BGM. The set volume makes it that the music can fade in
        if (scene === 1) {
            mainMusic.play();
            mainMusic.loop();
            mainMusic.setVolume(0);
            mainMusic.setVolume(1, 2);
        }

        //However, in the piano scene, which is scene 31, the music will fade out to leave space for the piano itself.
        if (scene === 31) {
            mainMusic.setVolume(0, 2);
        }

        //Then after the piano scene, the music will fade back in as if nothing.
        if (scene === 35) {
            mainMusic.setVolume(0);
            mainMusic.setVolume(1, 2);
        }

        //Making the main BGM fade out, it leaves space for the elevator music (second BGM) to fade in with the same strategy of setting it's volume. The play making it that the audio will start playing and then await a "command" which is the set volume.
        if (scene === 49) {
            mainMusic.setVolume(0, 1);
            // Start the music
            elevatorMusic.play();
            // Fade it in
            elevatorMusic.setVolume(0);
            elevatorMusic.setVolume(1, 2);
        }

        //When the scene is 72, the elevator music will fade out and give space for the kitchen gun sommercial to play instead.
        if (scene === 72) {
            // Start the music
            kitchenGunSound.play();
            // Fade it in
            kitchenGunSound.setVolume(0);
            kitchenGunSound.setVolume(1, 2);
            //Fade out elevator music
            elevatorMusic.setVolume(0, 2);
        }

        //If the scene is 81 the elevator music will fade away
        if (scene === 81) {
            elevatorMusic.setVolume(0, 2);
        }

        //The next three say the same thing, as in, when they play their respective scenes, the sound itself will play (without fade) and only play once.
        if (scene === 88) {
            shock.play();
        }

        if (scene == 84) {
            spotlight.play()
        }

        if (scene === 93) {
            cheering.play();
        }
    }

    //CHOICE 1 (Top choice)
    //When the mouse is in these coordinates and in the specific scene, it will go to a specific scene in response.
    if (mouseX >= 490 && mouseX <= 790 && mouseY >= 273 && mouseY <= 327 && scene == 8) {
        scene = 9;
    }

    //CHOICE 1 (Bottom Choice)
    //Same as the top choice only that the coordinates and resulting scene is different
    if (mouseX >= 430 && mouseX <= 850 && mouseY >= 390 && mouseY <= 444 && scene == 8) {
        scene = 11;
    }

    //After the scene is done, skip what would be the result of the other choice and so go to the part that is after both choices.
    if (mouseX >= 1100 && mouseX <= 1200 && mouseY >= 550 && mouseY <= 650 && scene == 10) {
        scene = 12;
    }

    //CHOICE 2 (Top Choice)
    if (mouseX >= 490 && mouseX <= 790 && mouseY >= 273 && mouseY <= 327 && scene == 38) {
        scene = 39;
    }

    //CHOICE 2 (Bottom Choice)
    if (mouseX >= 430 && mouseX <= 850 && mouseY >= 390 && mouseY <= 444 && scene == 38) {
        scene = 43;
    }

    //CHOICE 3 (Top Choice)
    if (mouseX >= 490 && mouseX <= 790 && mouseY >= 273 && mouseY <= 327 && scene == 52) {
        scene = 53;
    }

    //CHOICE 3 (Bottom Choice)
    if (mouseX >= 430 && mouseX <= 850 && mouseY >= 390 && mouseY <= 444 && scene == 52) {
        scene = 57;
    }

    //After choice 3 is finished, take to scene 60 to continue the story and not overlap with what the second choice gives
    if (mouseX >= 1100 && mouseX <= 1200 && mouseY >= 550 && mouseY <= 650 && scene == 56) {
        scene = 60;
    }
}

//The buttons on all menus. Basically, if the x and y coordinates are at a specific location and mouse pressed (as I had stated this function in mouse pressed) if will change states.
function allMenuButtons() {
    if (state === `title` && mouseX >= 850 && mouseY >= 150 && mouseX <= 1150 && mouseY <= 250) {
        state = `simulation`;
    }

    if (state === `title` && mouseX >= 850 && mouseY >= 250 && mouseX <= 1150 && mouseY <= 450) {
        state = `sillyRoom`;
    }

    if (state === `title` && mouseX >= 850 && mouseY >= 450 && mouseX <= 1150 && mouseY <= 550) {
        state = `credits`;
    }

    if (state === `sillyRoom` && mouseX >= 70 && mouseY >= 600 && mouseX <= 220 && mouseY <= 660) {
        state = `title`;
    }

    if (state === `credits` && mouseX >= 70 && mouseY >= 600 && mouseX <= 220 && mouseY <= 660) {
        state = `title`;
    }

    if (state === `simulation` && mouseX >= 30 && mouseY >= 30 && mouseX <= 180 && mouseY <= 90) {
        state = `menu`;
    }

    //If you are in the middle of the simulation and you leave mid game, the music will stop and you will get sent to the main menu.
    if (state === `menu` && mouseX >= 470 && mouseY >= 478 && mouseX <= 528 && mouseY <= 500) {
        state = `title`;
        scene = 0;
        mainMusic.setVolume(0, 1);
        elevatorMusic.setVolume(0, 1);
        kitchenGunSound.setVolume(0, 1);
    }

    if (state === `menu` && mouseX >= 730 && mouseY >= 478 && mouseX <= 770 && mouseY <= 500) {
        state = `simulation`;
    }
}

//Elevator buttons. The first part is saying that if it's specifically the scene where the elevator is, then 3 circles, which are the elevator buttons will appear, the second part says that if the x and y coordinates fit under specific parts, it will then take you to different scenes. This function was also mentioned in the mouse pressed function as to make it that instead of hovering on the buttons and you get taken to the scene, you have to press the actual button itself to then get taken to the scenes.
function elevatorButtons() {

    if (scene == 64) {
        push()
        fill(255)
        ellipseMode(CENTER)
        circle(320, 250, 200)
        circle(640, 250, 200)
        circle(960, 250, 200)
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

    if (scene == 99) {
        push()
        fill(255)
        ellipseMode(CENTER)
        circle(320, 250, 200)
        circle(640, 250, 200)
        circle(960, 250, 200)
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

    //CIRCLE 1
    if (mouseX >= 220 && mouseX <= 420 && mouseY >= 150 && mouseY <= 350 && mouseIsPressed && (scene == 64 || scene == 99)) {
        scene = 65;
    }

    //CIRCLE2
    if (mouseX >= 540 && mouseX <= 740 && mouseY >= 150 && mouseY <= 350 && mouseIsPressed && (scene == 64 || scene == 99)) {
        scene = 80;
    }

    //CIRCLE3
    //When you press this one, the button 3 function will turn into true, making it that the dialogue would change and take you back to the buttons again
    if (mouseX >= 860 && mouseX <= 1060 && mouseY >= 150 && mouseY <= 350 && mouseIsPressed && scene == 64) {
        scene = 94;
        button3 = true;
    }

    //As here now the function being extremely similar to the previous one but now asking for the button3 to be true, which would take you to a different scene
    if (mouseX >= 860 && mouseX <= 1060 && mouseY >= 150 && mouseY <= 350 && mouseIsPressed && scene == 99 && button3 == true) {
        scene = 100;
    }

    //If you insist on pressing button 3 you will be extremely disappointed because your in game character refuses to continue pressing and you'll probably be stuck in a loop yourself over the program because of how much you're pressing.
    if (mouseX >= 1100 && mouseX <= 1200 && mouseY >= 550 && mouseY <= 650 && scene == 100 && mouseIsPressed) {
        scene = 99;
    }
}

//If certain scenes, an image will appear 
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
        image(focaShock, width / 2, 500, 390, 961);
        pop()
        mainimgs();
        vntext();
        choices();
    }

    if (scene == 78) {
        push()
        imageMode(CORNER);
        image(kitchenGunEnd, 0, 0, 1280, 720);
        pop();
        fill(255, 0, 0)
        textSize(80)
        text("KITCHEN\nEND", 800, 550)
        textSize(20)
        text("Thanks BBC", 800, 700)
        noLoop();
    }

    if (scene >= 81 && scene <= 84) {
        push()
        imageMode(CORNER);
        image(greyOne, 0, 0, 1280, 720);
        pop();
        mainimgs();
        vntext();
        choices();
    }

    if (scene >= 84 && scene <= 87) {
        push()
        imageMode(CORNER);
        image(greyTwo, 0, 0, 1280, 720);
        pop();
        mainimgs();
        vntext();
        choices();
    }

    if (scene == 88) {
        push()
        imageMode(CENTER);
        image(greyTwo, 0, 1000, 2780, 2220);
        pop();
        mainimgs();
        vntext();
    }

    if (scene >= 89 && scene <= 92) {
        push()
        imageMode(CORNER);
        image(greyThree, 0, 0, 1280, 720);
        pop();
        mainimgs();
        vntext();
    }

    if (scene == 93) {
        push()
        imageMode(CORNER);
        image(end3D, 0, 0, 1280, 720);
        pop();
        noLoop();
    }
}

//same as the previous one only for sprites, sometimes some parts from the simluation will be reinstated because the program will mess up the layering so I just recalled everything to be sure that it always appeared right.
function sprites() {

    if ((scene >= 0 && scene <= 30) || (scene >= 35 && scene <= 46)) {
        push()
        imageMode(CENTER);
        image(focaSerious, width / 2, 400);
        pop()
        mainimgs();
        vntext();
        choices();
    }

    if (scene == 84 || scene == 85) {
        push()
        imageMode(CENTER);
        image(foca3DUpset, width / 2, 400);
        pop()
        mainimgs();
        vntext();
        choices();
    }

    if (scene == 86) {
        push()
        imageMode(CENTER);
        image(foca3DScowl, width / 2, 400);
        pop()
        mainimgs();
        vntext();
        choices();
    }

    if (scene >= 89 && scene <= 92) {
        push()
        imageMode(CENTER);
        image(foca3DUpset, 426, 400);
        image(neuvi, 852, 400);
        pop()
        mainimgs();
        vntext();
        choices();
    }

    if (scene == 87) {
        push()
        imageMode(CENTER);
        image(foca3DUpset, width / 2, 400);
        pop()
        mainimgs();
        vntext();
        choices();
    }

    if (scene == 88) {
        push()
        imageMode(CENTER);
        image(foca3DShock, width / 2, 400);
        pop()
        mainimgs();
        vntext();
        choices();
    }
}

//same as the previous one, if certain scenes play, then certain backgrounds will appear, this is the same as the cinematic one not gonna lie.
function backgrounds() {
    if ((scene >= 0 && scene <= 30) || (scene >= 35 && scene <= 46)) {
        push()
        imageMode(CORNER);
        image(bg1, 0, 0, 1280, 720);
        pop();
    }

    if (scene >= 31 && scene <= 34) {
        push()
        imageMode(CORNER);
        image(piano, 0, 0, 1280, 720);
        pop();
    }

    if (scene >= 51 && scene <= 62) {
        push()
        imageMode(CORNER);
        image(elevatorBG, 0, 0, 1280, 720);
        pop();
    }
}

//Silly room code! This one is just the actual back button (setting the rectangle and then adding the words of back) and then calling for the actual sillysound function
function sillyRoom() {

    rect(70, 600, 150, 60);

    push()
    fill(255, 0, 0)
    textSize(30)
    text("< BACK", 90, 640)
    pop()

    sillySound()

}

//This is just an oscillator function 
function sillySound() {
    //This will generate a random number
    let r = random(0, 1);
    //So then the number that was randomly chosen will get mapped to a frequency range
    let newFreq = map(r, 0, 1, 440, 880);

    //Then finally the frequency of the oscillator will be set with the one previously randomized!
    oscillator.freq(newFreq);

    if (mouseIsPressed) {
        //when the mouse is pressed, the actual oscillator will start playing
        oscillator.start();
    }

    //Text inside the silly room, with it's fill set to white, an align to the center of the screen and it's size changed to 60.
    push();
    fill(255);
    textAlign(CENTER);
    textSize(60);
    text("I didn't know what to do with this room\nBut I didn't want to remove a button so...\nWhen it stops, you can press\nmouse key to start again.", width / 2, height / 2)
    textSize(10);
    text("You can kinda leave and come back multiple times and it will stop (I don't know why it's so broken)", width / 2, 200)
    pop();

    //If the "back" button is pressed, the oscillator will stop.
    if (state === `sillyRoom` && mouseX >= 70 && mouseY >= 600 && mouseX <= 220 && mouseY <= 660 && mouseIsPressed) {
        oscillator.stop();
    }
    //Like the previous one but without the mouseIsPressed as for some reason if I put it, it wouldn't stop the oscillator completely and I don't know why.
    if (state === `sillyRoom` && mouseX >= 70 && mouseY >= 600 && mouseX <= 220 && mouseY <= 660) {
        oscillator.stop();
    }
}
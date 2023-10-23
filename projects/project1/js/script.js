/**
 * Sweet Escape 🍬
 * Scarlett Perez
 * 
 * Visual novel project. Sorry it's so ugly I can't graphic design I hope the sprites (that I made!!) make up for it. I tried to add variables around but it would break the program??? I'm not sure what happened so sorry not all the numbers are variables. 
 * 
 * Background (c) Happy Elements
 * Death CG (c) Dark Souls
 */

"use strict";

//Variable for where you are in the visual novel + x value for the flowers
let scene = 0;
let state = `title`;
let x = 0;

//Variable to hold the text strings
let name = " ";
let txt = " ";

//Variables for all images (except sprites)
let bg;
let bgalt;
let bgtitle;
let titleicon;
let arrow;
let death;
let goodend;
let neutralend;
let badend;
let flower;

//Variables for the sprites
let smile;
let smilealt;
let happy;
let happyalt;
let serious;
let glare;
let grin;
let bashful;
let sad;
let confused;

//Variables for the endings
let acounter = 0;

/**
 * Description of preload
*/
function preload() {
    //preloading all the images in the game
    bg = loadImage ('assets/images/bg.png');
    bgalt = loadImage ('assets/images/bgalt.png');
    bgtitle = loadImage ('assets/images/bgtitle.png');
    titleicon = loadImage ('assets/images/titleicon.png');

    //Mika Sprites
    smile = loadImage ('assets/images/smile.png');
    smilealt = loadImage ('assets/images/smile (alt).png');
    happy = loadImage ('assets/images/happy.png');
    happyalt = loadImage ('assets/images/happyalt.png');
    serious = loadImage ('assets/images/serious.png');
    glare = loadImage ('assets/images/glare.png');
    grin = loadImage ('assets/images/grin.png');
    bashful = loadImage ('assets/images/bashful.png');
    sad = loadImage ('assets/images/sad.png');
    confused = loadImage ('assets/images/confused.png');
    
    arrow = loadImage('assets/images/right-arrow.png');
    death = loadImage ('assets/images/youdied.jpg');
    flower = loadImage('assets/images/flower.png');

    goodend = loadImage('assets/images/GoodEndCG.png');
    neutralend = loadImage('assets/images/NeutralEndCG.png');
    badend = loadImage('assets/images/BadEndCG.png');
    
}

//Script
let scenes = [{
    name: "Mika",
    txt: "Hello!"
}, {
    name: "Mika",
    txt: "Ya could make it!"
}, {
    name: " ",
    txt: "This is Mika. He's a boy that just asked you out."
}, {
    name: " ",
    txt: "You accepted because he was cute.", //3
}, {
    name: " ",
    txt: "He was shy and was now currently trying to grab your hand." //4
}, {
    name: " ",
    txt: "With you reciprocating his approach, a rose tinted blush covered his cheeks. Unfortunately it was short lived."
}, {
    name: " ",
    txt: "You moved your hand away, it's too early for pre-marital h*nd h*lding."
}, {
    name: " ",
    txt: "With your action, Mika frowned slightly. Though it was barely noticeable though as a smile returned to his face soon after." // 7 
}, {
    name: "Mika",
    txt: "I think we could go... that way?" //8
}, {
    name: " ",
    txt: "Should you?" 
}, {
    name: "Mika",
    txt: "Mika looked at you confused."
}, {
    name: "Mika",
    txt: "But didn't... we agree..?"
}, {
    name: " ",
    txt: "He stayed silent for awhile before he flashed a smile trying to lighten the mood." //12
}, {
    name: " ",
    txt: "You must have been joking right?" //13
}, {
    name: "Mika",
    txt: "Um..."
}, {
    name: "Mika",
    txt: "Anyways-"
}, {
    name: "Mika",
    txt: "There's this real cool ice cream shop that's nearby."//16
}, {
    name: "Mika",
    txt: "My friend recommended it to me so I thought we could see it together and see if it's good yeah?"
}, {
    name: " ",
    txt: "Yeah?" //18 choice3
}, {
    name: "Mika",
    txt: "Hm..." //19 Choice 3b
}, {
    name: "Mika",
    txt: "Well I don't really have anywhere else we could go."
}, {
    name: "Mika",
    txt: "Everything's kinda closed right now or full of people already"
}, {
    name: " ",
    txt: " " //22 choice4
}, {
    name: "Mika",
    txt: "Hey, I really don't appreciate that." //23 choice4a (glare)
}, {
    name: "Mika",
    txt: "I don't really like people that are mean like that."
}, {
    name: "Mika",
    txt: "What are you trying to do? Take my money? Take everything and leave me with nothing?"
}, {
    name: "Mika",
    txt: "Well it ain't workin'."
}, {
    name: "Mika",
    txt: "'m leavin'.'" //27 BAD END
}, {
    name: "Mika",
    txt: "Really?" //28 choice4a
}, {
    name: "Mika",
    txt: "Okay."
}, {
    name: "Mika",
    txt: "Cool!"  //30 Choice 3a
}, {
    name: "Mika",
    txt: "The good thing is that we are literally right here so-"
}, {
    name: "Mika",
    txt: "Let's see the menu."
}, {
    name: " ",
    txt: "You both look at the menu."
}, {
    name: " ",
    txt: "Not really knowing exactly what to take"
}, {
    name: " ",
    txt: "After all there were so many options."
}, {
    name: " ",
    txt: "You briefly look at Mika beside you who was currently frowning, probably focused in trying to decide."
}, {
    name: " ",
    txt: "After awhile, you think you have decided. You tapped Mika's shoulder."
}, {
    name: "Mika",
    txt: "You decided?"
}, {
    name: "Mika",
    txt: "I think I'll go with soda (ramune) and strawberry."
}, {
    name: "Mika",
    txt: "You?"
}, {
    name: " ",
    txt: "You tell Mika what you want to order."
}, {
    name: " ",
    txt: "He nods, you both approach the shop to order."
}, {
    name: " ",
    txt: "He stops you with a hand." //43
}, {
    name: "Mika",
    txt: "This is on me!"
}, {
    name: " ",
    txt: "He orders both of your choices and pays for them."
}, {
    name: "Mika",
    txt: "He orders his own and pays for it, motioning for you to go next."
}, {
    name: " ",
    txt: "You both wait for the order." //47
}, {
    name: " ",
    txt: "After awhile you both got called for your dessert."
}, {
    name: "Mika",
    txt: "Wow! This is so good!"
}, {
    name: " ",
    txt: " " //50
}, {
    name: "You",
    txt: "It was a good idea coming here!" 
}, {
    name: " ",
    txt: "Mika grinned in response." 
}, {
    name: " ",
    txt: "He looked happy that you enjoyed yourself." //53
}, {
    name: " ",
    txt: "Mika frowned slightly."//54
}, {
    name: "Mika",
    txt: "Well you didn't buy it so might as well enjoy yourself."
}, {
    name: " ",
    txt: "He said it in such a bitter tone." 
}, {
    name: " ",
    txt: "Perhaps you should sound at least somewhat grateful." 
}, {
    name: " ",
    txt: "It's true you didn't waste your money here." //58
}, {
    name: "Mika",
    txt: "Hm." //59
}, {
    name: "Mika",
    txt: "Well, I like it." 
}, {
    name: "Mika",
    txt: "It's sweet and tasty." 
}, {
    name: "Mika",
    txt: "Makes me happy." 
}, {
    name: "Mika",
    txt: "Unlike you." 
}, {
    name: " ",
    txt: "Mika whispered that last part, barely audible."
}, {
    name: " ",
    txt: "Truth be told, he was starting to regret even taking you out." 
}, {
    name: " ",
    txt: "But-" 
}, {
    name: " ",
    txt: "It was rude to just leave in the middle he thinks." 
}, {
    name: " ",
    txt: "And he won't sweep as low as you have." //68
}, {
    name: " ",
    txt: "You continued talking until the sun was starting to set, the sky becoming an orange tint." //69
}, {
    name: "Mika",
    txt: "It's getting late." 
}, {
    name: " ",
    txt: "You looked up to the sky." //71 CHOICE 6
}, {
    name: "Mika",
    txt: "Me too." //72
}, {
    name: " ",
    txt: "His smile was endearing." 
},
// ENDINGS
{
    name: "Mika",
    txt: "Ya know..." //74 GOOD END
}, {
    name: "Mika",
    txt: "'m real glad that you agreed to come with me." 
}, {
    name: "Mika",
    txt: "On this date, I mean." 
}, {
    name: " ",
    txt: "I really liked it... and enjoyed it a lot too."
}, {
    name: "Mika",
    txt: "Maybe... we could go out again another day..?" //78 
}, {
    name: " ",
    txt: " " //79 GOOD END 
}, {
    name: "Mika",
    txt: "I have'ta go home now." //80 NEUTRAL END
}, {
    name: "Mika",
    txt: "Busy 'n stuff." 
}, {
    name: "Mika",
    txt: "Maybe we could give it another chance another time?" 
}, {
    name: " ",
    txt: " " //83 NEUTRAL END 
}, {
    name: "Mika",
    txt: "I have'ta go home now." //84 BAD END
}, {
    name: " ",
    txt: "He looked a bit awkward." 
}, {
    name: "Mika",
    txt: "Bye." 
}, {
    name: " ",
    txt: " " //87 BAD END
}

];

//String for the choices
let choice1a = "Move your hand closer.";
let choice1b = "Move your hand further away.";

let choice2a = "Sure.";
let choice2b = "No thank you 💀";

let choice3a = "Yeah!";
let choice3b = "no.";

let choice4a = "Then figure it out!";
let choice4b = "That's okay, we can do your original plans."

let choice5a = "Totally!";
let choice5b = "No way this was a terrible idea."

let choice6a  = "Say nothing.";
let choice6b = "I had a good time."

function setup() {
    //Creation of the canvas
    createCanvas(1280, 720);
}


/**
 * Description of draw()
*/
function draw() {
    //Stating the states to know whether it's in the title, the tutorial, or the main part

    if (state === `title`) {
        title();
      } else if (state === `tutorial`) {
        tutorial();
      } else if (state === `simulation`) {
        simulation();
    }
}

function title() {
    //Putting the background for the title screen
    push();
    imageMode(CORNER);
    image(bgtitle, 0, 0, 1280, 720);
    imageMode(CENTER);
    //Icon image so the text is visible
    image(titleicon, width/2, height/2, 900,900);
    //Text for the title
    textSize(50);
    fill(0);
    textAlign(CENTER,CENTER);
    text(`Sweet Escape 🍬`, width/2,260);
    textSize(20);
    text(`Warning: Extremely early alpha development! \n Nothing shown in this alpha is of end product!`, width/2,350);
    text(`Press anywhere to start the game.`, width/2, 400)
    pop();
}

function tutorial() {
    push();
    //Same as the title
    imageMode(CORNER);
    image(bgtitle, 0, 0, 1280, 720);
    imageMode(CENTER);
    image(titleicon, width/2, height/2, 900,900);
    textSize(50);
    fill(0);
    textAlign(CENTER,CENTER);
    textSize(20);
    text(`You have a bar to fill\n the affection up!\n Pink means good, blue means bad!`, width/2,250);
    text(`Press the arrow at the bottom \nright to advance the story.`, width/2,350);
    text(`And finally, have fun!`, width/2,420);
    pop();
}

function simulation() {
    //Calling for all the main functions for the program to work.
    mainimgs();
    affectionbar();
    vntext();
    choices();
    endings();
}

function mainimgs() {

    //Changing the background depending on the scene (first one for the day the second for the afternoon to make it as if time passed)
    if (scene <= 68) {
        image(bg, 0, 0);
    } else if (scene >= 68) {
        image(bgalt, 0, 0);
    }

    //Putting that the sprite is the default one (smile) except in all the scenes where other sprites are used
    if (scene !== 5 && scene !== 6 && scene !== 19 && scene !== 30 && scene !== 31 && scene !== 36 && scene !== 37 && scene !== 44 && scene !== 49 && scene !== 74 && scene !== 75 && scene !== 76 && scene !== 77 && scene !== 78 && scene !== 52 && scene !== 53 && scene !== 10 && scene !== 11 && scene !== 14 && scene !== 20 && scene !== 21 && scene !== 59 &&  scene !== 63 && scene !== 64 && scene !== 65 && scene !== 66 && scene !== 67 && scene !== 68 && scene !== 23 && scene !== 24 && scene !== 25 && scene !== 26 && scene !== 27) {
        push();
        imageMode(CENTER);
        image(smile, width/2, 500, 390, 961);
        pop();
    }

    //All the sprites follow the same formula so I'll only comment once but it's taking the sprite and then only displaying them in certain parts of the game
    if (scene == 19 || scene == 36 || scene == 37 || scene == 14 || scene == 20 || scene == 21 || scene == 59 || scene == 63 || scene == 64 || scene == 65 || scene == 66 || scene == 67 || scene == 68) {
        push();
        imageMode(CENTER);
        image(serious, width/2, 500, 390, 961);
        pop();
    }

    if (scene == 5 || scene == 74 || scene == 75 || scene == 78) {
        push();
        imageMode(CENTER);
        image(smilealt, width/2, 500, 390, 961);
        pop();
    }

    if (scene == 30 || scene == 31 || scene == 44 || scene == 49) {
        push();
        imageMode(CENTER);
        image(happy, width/2, 500, 390, 961);
        pop();
    }

    if (scene == 52 || scene == 53) {
        push();
        imageMode(CENTER);
        image(grin, width/2, 500, 390, 961);
        pop();
    }
    
    if (scene == 76 || scene == 77) {
        push();
        imageMode(CENTER);
        image(bashful, width/2, 500, 390, 961);
        pop();
    }

    if (scene == 6) {
        push();
        imageMode(CENTER);
        image(sad, width/2, 500, 390, 961);
        pop();
    }

    if (scene == 10 || scene == 11) {
        push();
        imageMode(CENTER);
        image(confused, width/2, 500, 390, 961);
        pop();
    }

    if (scene == 23 || scene == 24 || scene == 25 || scene == 26 || scene == 27) {
        push();
        imageMode(CENTER);
        image(glare, width/2, 500, 390, 961);
        pop();
    }

    //Displaying the flowers that appear on only ONE line
    if (scene == 78) {
        push();
        imageMode(CENTER);
        x+= 0.05;
        translate (500, 100);
        rotate(x);
        image(flower, 0, 0, 100, 100);
        pop();

        //Rotate the flowers to make it seem as if happiness
        push();
        imageMode(CENTER);
        //the x value makes it that it the rotate value would keep rotating forever
        x+= 0.05;
        translate (800, 200);
        rotate(x);
        image(flower, 0, 0, 100, 100);
        pop();
    }

    // Displaying the textbox + the arrow that you press to continue
    push()
    fill(255);
    rectMode(CENTER);
    rect(130, 465, 100, 50);
    rect(width/2, 600, 1180, 200);
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


function mousePressed() {

    //when the mouse is pressed anywhere in tutorial or title, it will change to the next state
    if (state === `title`){
        state = `tutorial`;
    } else if (state === `tutorial`){
        state = `simulation`
    }

    //When the mouse is pressed, it will go to the next scene. The exceptions are all scenes that have choices, you can only press the choices.
    if (mouseX >= 1100 && mouseX <= 1200 && mouseY >= 550 && mouseY <= 650 && scene !== 4 && scene!== 9 && scene!== 5 && scene!== 29 && scene!== 22 && scene!== 18 && scene!== 50 && scene!== 71) {
        scene += 1;
    }   

    //Just like the sprites, this is pretty straight forward so I'll explain the next few lines here. Basically, this is where you would have to select for your choices. You can only press in the boxes that have the choices in them and you will increase the a(affection)counter or decrease it according to your choices. Depending on the choices, you will be sent to a different scene as well
    //Choice 1
    if (mouseX >= 490 && mouseX <= 790 && mouseY >= 273 && mouseY <= 327 && scene == 4) {
        scene = 5;
        acounter += 1;
    } 

    if (mouseX >= 1100 && mouseY >= 550 && scene == 5) {
        scene = 8;
    } 

    //Bad Choice 1
    if (mouseX >= 430 && mouseX <= 850 && mouseY >= 390 && mouseY <= 444 && scene == 4) {
        scene = 6;
        acounter -= 3;
    }

    //Choice 2
    if (mouseX >= 490 && mouseX <= 790 && mouseY >= 273 && mouseY <= 327 && scene == 9) {
        scene = 16;
        acounter += 1;
    }

    //Bad Choice 2
    if (mouseX >= 490 && mouseX <= 790 && mouseY >= 392 && mouseY <= 447 && scene == 9) {
        scene = 10;
        acounter -= 1;
    }

    //Choice 3
    if (mouseX >= 490 && mouseX <= 790 && mouseY >= 273 && mouseY <= 327 && scene == 18) {
        scene = 30;
        acounter += 1;
    }

    //Bad Choice 3
    if (mouseX >= 490 && mouseX <= 790 && mouseY >= 392 && mouseY <= 447 && scene == 18) {
        scene = 19;
        acounter -= 1;
    }
    
    //Bad Choice 4
    if (mouseX >= 340 && mouseX <= 790 && mouseY >= 273 && mouseY <= 327 && scene == 22) {
        scene = 23;
        acounter -= 1;
    }

    //Choice 4
    if (mouseX >= 490 && mouseX <= 940 && mouseY >= 392 && mouseY <= 447 && scene == 22) {
        scene = 28;
    }

    if (scene == 29) {
        scene = 31;
    }

    if (acounter == 3 && scene == 46) {
        scene = 47;
    }

    if (acounter <= 2 && scene == 43) {
        scene = 46;
    }

    //Choice 5
    if (mouseX >= 490 && mouseX <= 790 && mouseY >= 273 && mouseY <= 327 && scene == 50) {
        scene = 51;
        acounter += 1;
    }

    //Bad Choice 5
    if (mouseX >= 400 && mouseX <= 880 && mouseY >= 392 && mouseY <= 447 && scene == 50 && acounter == 3) {
        scene = 54;
        acounter -= 1;
    }

    if (mouseX >= 400 && mouseX <= 880 && mouseY >= 392 && mouseY <= 447 && scene == 50 && acounter <= 2 ) {
        acounter -= 1;
        scene = 59
    }

    if(mouseX >= 1100 && mouseY >= 550 && (scene == 54 || scene == 59 || scene == 69)) {
        scene = 69;
    }

    //Bad Choice 6
    //If acounter is less than 0 you will be sent to the bad ending
    if (mouseX >= 490 && mouseX <= 790 && mouseY >= 273 && mouseY <= 327 && scene == 71 && acounter <= 0) {
        scene = 84;
        acounter -= 1;
    }
    
    //If acounter is 1,2 or 3, you will get the neutral ending
    if (mouseX >= 490 && mouseX <= 790 && mouseY >= 273 && mouseY <= 327 && scene == 71 && (acounter == 1 || acounter == 2 || acounter == 3)) {
        scene = 80;
        acounter -= 1;
    }
    
    //if acounter is 4, you will get the good ending, having 4 will open the option that will lead you to the good ending.
    if (mouseX >= 490 && mouseX <= 790 && mouseY >= 392 && mouseY <= 447 && scene == 71 && acounter == 4) {
        scene = 72;
        acounter += 1;
    } 

    if (mouseX >= 1100 && mouseY >= 550 && scene == 73 && acounter == 5) {
        scene = 74;
    }
}

function choices() {

    //This is where the text boxes are for each choice. First displaying the box itself and then the text. The nearby coordinates for the box is then used in mouse pressed so like that when you press on the box you will get to the choice you chose.
    if (scene == 4) {
        push();
        fill(255,255,255,200);
        rectMode(CENTER);
        strokeWeight(2)
        rect (width/2,297,350,55);
        rect (width/2,417,420,55);
        pop();
    
        push();
        textAlign(CENTER)
        text(choice1a, width/2, 307)
        text(choice1b, width/2, 427)
        pop();
    }

    if (scene == 9) {
        push();
        fill(255,255,255,200);
        rectMode(CENTER);
        strokeWeight(2)
        rect (width/2,300,300,55);
        rect (width/2,420,300,55);
        pop();
    
        push();
        textAlign(CENTER)
        text(choice2a, width/2, 310)
        text(choice2b, width/2, 430)
        pop();
    }

    if (scene == 18) {
        push();
        fill(255,255,255,200);
        rectMode(CENTER);
        strokeWeight(2)
        rect (width/2,300,300,55);
        rect (width/2,420,300,55);
        pop();
    
        push();
        textAlign(CENTER)
        text(choice3a, width/2, 310)
        text(choice3b, width/2, 430)
        pop();
    }

    if (scene == 22) {
        push();
        fill(255,255,255,200);
        rectMode(CENTER);
        strokeWeight(2)
        rect (width/2,300,300,55);
        rect (width/2,420,600,55);
        pop();
    
        push();
        textAlign(CENTER)
        text(choice4a, width/2, 310)
        text(choice4b, width/2, 430)
        pop();
    }

    if (scene == 50) {
        push();
        fill(255,255,255,200);
        rectMode(CENTER);
        strokeWeight(2)
        rect (width/2,300,300,55);
        rect (width/2,420,480,55);
        pop();
    
        push();
        textAlign(CENTER)
        text(choice5a, width/2, 310)
        text(choice5b, width/2, 430)
        pop();
    }

    if (scene == 71) {
        push();
        fill(255,255,255,200);
        rectMode(CENTER);
        strokeWeight(2)
        rect (width/2,300,300,55);
        pop();

        push();
        textAlign(CENTER)
        text(choice6a, width/2, 310)
        pop();
    
        //The choice will only appear if you have acounter at 4.
        if (acounter == 4) {
            push();
            fill(255,255,255,200);
            rectMode(CENTER);
            strokeWeight(2)
            rect (width/2,420,300,55);
            textAlign(CENTER)
            fill(0);
            text(choice6b, width/2, 430)
            pop();
        }
        
    }

    
}

function endings() {
    //Depending on the choices, different images will appear depending on your ending. The game will then end when you reach an ending.
    if (scene == 7) {
        push();
        imageMode(CORNER);
        image(death, 0, 0, 1280,720);
        noLoop();
        pop();
    }

    if (scene == 27) {
        push();
        imageMode(CORNER);
        image(death, 0, 0, 1280,720);
        noLoop();
        pop();
    }

    if (scene == 79) {
        push();
        image(goodend, 0, 0, 1280,720);
        noLoop();
        pop();
    }

    if (scene == 83) {
        push();
        image(neutralend, 0, 0, 1280,720);
        noLoop();
        pop();
    }

    if (scene == 87) {
        push();
        image(badend, 0, 0, 1280,720);
        noLoop();
        pop();
    }
}

function affectionbar() {
    //The (white) bar that shows the affection bar
    push();
    fill(255,255,255,200);
    rectMode(CORNER);
    strokeWeight(2)
    rect (20,10,500,40);
    pop();

    //it will display a heart at the start when acounter is at 0
    if (acounter == 0) {
        push()
        textSize(60);
        text(`❤️`, -25,50);
        pop()
    }
    
    //it will display the heart more advanced and then a pink bar to show the progression
    if (acounter == 1) {
        push();
        fill(255,125,125,200);
        rectMode(CORNER);
        strokeWeight(2)
        rect (20,10,100,40);
        pop();
        push()
        textSize(60);
        text(`❤️`, 80,45);
        pop()
    }

    //same as the previous
    if (acounter == 2) {
        push();
        fill(255,125,125,200);
        rectMode(CORNER);
        strokeWeight(2)
        rect (20,10,200,40);
        pop();
        push()
        textSize(60);
        text(`❤️`, 180,45);
        pop()
    }

    if (acounter == 3) {
        push();
        fill(255,125,125,200);
        rectMode(CORNER);
        strokeWeight(2)
        rect (20,10,300,40);
        pop();
        push()
        textSize(60);
        text(`❤️`, 280,45);
        pop()
    }

    if (acounter == 4) {
        push();
        fill(255,125,125,200);
        rectMode(CORNER);
        strokeWeight(2)
        rect (20,10,400,40);
        pop();
        push()
        textSize(60);
        text(`❤️`, 380,45);
        pop()
    }

    if (acounter == 5) {
        push();
        fill(255,125,125,200);
        rectMode(CORNER);
        strokeWeight(2)
        rect (20,10,500,40);
        pop();
        push()
        textSize(60);
        text(`💘`, 480,45);
        pop()
    }

    //however, if acounter becomes negative, the bar will be blue and you'll get a heartbroken icon
    if (acounter == -1) {
        push();
        fill(125,125,255,200);
        rectMode(CORNER);
        strokeWeight(2)
        rect (20,10,166,40);
        pop();
        push()
        textSize(60);
        text(`💔`, 146,45);
        pop()
    }

    if (acounter == -2) {
        push();
        fill(125,125,255,200);
        rectMode(CORNER);
        strokeWeight(2)
        rect (20,10,332,40);
        pop();
        push()
        textSize(60);
        text(`💔`, 312,45);
        pop()
    }

    if (acounter == -3) {
        push();
        fill(125,125,255,200);
        rectMode(CORNER);
        strokeWeight(2)
        rect (20,10,500,40);
        pop();
        push()
        textSize(60);
        text(`💔`, 480,45);
        pop()
    }
}
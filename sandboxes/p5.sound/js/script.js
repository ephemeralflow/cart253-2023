/**
 * Title of Project
 * Author Name
 * 
 * This is a template. You must fill in the title, author, 
 * and this description to match your project!
 */

"use strict";

let barkSFX;
let oscillator;
let theramin;
let synth;
let notes = [`F4`, `G4`, `Ab4`, `Bb4`, `C4`, `Db4`, `Eb4`, `F5`];

/**
 * Description of preload
*/
function preload() {
    barkSFX = loadSound(`assets/sounds/bark.wav`);
}


/**
 * Description of setup
*/
function setup() {
    createCanvas(600, 600);
    userStartAudio()

    synth = new p5.PolySynth();
}


/**
 * Description of draw()
*/
function draw() {
    background(0);
}

function mousePressed() {
    synth.play(`C4`, 1, 0, 1);
    //barkSFX.loop();
}

function mouseReleased() {
    theramin.stop();
}

function keyPressed() {
    playRandomNote()
}

function playRandomNote() {
    let note = random(notes);
    synth.play(note, 1, 0, 1);
}
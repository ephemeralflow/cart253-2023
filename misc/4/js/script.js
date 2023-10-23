/**
 * Title of Project
 * Author Name
 * 
 * This is a template. You must fill in the title, author, 
 * and this description to match your project!
 */

"use strict";

let square = {
        x: 400,    
        y: 100,
        size: 100,
    fill: {
        r:255,
        g:0,
        b:0,
        a: 255
    },
    //alphaChange:1,
    alphaAngle: 0,
}

/**
 * Description of preload
*/
function preload() {

}


/**
 * Description of setup
*/
function setup() {

}
var novel_script;

function Character(charactername) {

}

/**
 * Description of draw()
*/
function draw() {
    background (172,242,178);

    let sinValue = sin(quare.alphaAngle);
    square.fill.a = map (sinValue, -1,1,0,255);

    /*square.fill.a += square.alphaChange;
    if(square.fill.a >= 255) {
        square.alphaChange += -1;
    } else if (square.fill.a <=0) {
        square.alphaChange += -1;
    }*/

    rectMode (CENTER);
    noStroke();
    fill (square.fill.r, square.fill.g, square.fill.b, square.fill.a)
    rect (square.x, square.y, square.size);

    square.alphaAngle += 1;


}
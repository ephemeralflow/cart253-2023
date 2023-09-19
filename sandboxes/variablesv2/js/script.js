/**
 * Title of Project
 * Author Name
 * 
 * This is a template. You must fill in the title, author, 
 * and this description to match your project!
 */

"use strict";

let me = {
    x: 0,
    y: 250,
    //w: 30,
    h: 100,
    speed: 1,
    fill: 255,
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
    createCanvas(500,500);
    background (0);
    colorMode(HSL);

}


/**
 * Description of draw()
*/
function draw() {
    //if {frameCount % 30 === 0}
    /*me.fill.r = random(0,255);
    me.fill.g = random(0,255);
    me.fill.b = random(0,255);*/
    
    //gay-dient
    /*let hue = map (me.x,0,width,255,0);
    stroke (hue,50,50);
    line(me.x,me.y,me.x,me.y-me.h);
    me.x = me.x + me.speed;*/

    //idk the rest 
    //background(frameCount % 360)


    //fill(me.fill.r, me.fill.g, me.fill.b);
    //rect(me.x,me.y,me.w, me.h);

    //stroke(me.fill.r, me.fill.g, me.fill.b);

    /*
    stroke(me.fill);
    line(me.x,me.y,me.x,me.y-me.h);
    //update position
    me.x = me.x + me.speed;
    */

    //me.speed = me.speed * 1.02;
    //update color
    //me.fill = me.fill - 0.1;
    
    function setBackgroundToRainbowGradient(){
        let gradient = drawingContext.createLinearGradient(0,0,width,height);
        gradient.addColorStop(0,"red");
        gradient.addColorStop(2/6,"orange");
        gradient.addColorStop(2/6,"yellow");
        gradient.addColorStop(3/6,"green");
        gradient.addColorStop(4/6,"blue");
        gradient.addColorStop(5/6,"indigo");
        gradient.addColorStop(6/6,"violet");
        drawingContext.fillStyle = gradient;
        drawingContext.fillRect(0,0,width,height);
    }

    /* gradient 
    stroke(me.fill);
    line(me.x,me.y,me.x,me.y-me.h);
    me.x = me.x + me.speed;
    me.fill = me.fill - 0.1;*/

}
/**
 * Title of Project
 * Author Name
 * 
 * This is a template. You must fill in the title, author, 
 * and this description to match your project!
 * As reference, I used Leon and Alice's, Tasha's and David's code for a Visual Novel Engine.
 * I'll add the links later
 * 1 
 * 2 (https://app.qoom.io/tutorials/vnengine/guide.md)
 * 3 (https://langintro.com/js-vine/docs/index.html)
 */

"use strict";

//var script;

/*var protagImage;
var roomImage;

//The other script
var script;
var mika;
var iv;
var photo;

var leftSide;
var rightSide;
var upperCenter;*/

/*place1 = new Position(300,400,0,0);
place2 = new Position(300, 400, 0.5, 0.5);
place3 = new Position(300, 400, 1, 0);

leftSide = new Position(0, .75, 0, 1);
rightSide = new Position(800, 450, 1, 1);
upperCenter = new Position(0.5, 0.3, 0.5, 0.5);
rightTop = new Position(0.9, 0.1, 1, 0);

photo = new Character("", {position: upperCenter});*/

const dialog = "/dialog.json";

var TEXT_MAP = new Map()
var sampleText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

var TEXTAREA_HEIGHT = 150;
var MARGIN_BOTTOM = 10;
var MARGIN_SIDE = 5;
var TEXT_MARGIN = 5;
var TEXT_LINE_SPACING = 5;

let json, to;

var pageNum = 0;
var currentPage;

//take 2
async function grabData() {
	// Load the data
	
	//Fetches the data from the server
	const resp = await fetch(dialog)

	//Putting the data into an array 
	json = await resp.json();
	
	currentPage = Object.keys(json.Scene1.PAGES)[pageNum];
	
	// Initialize the data 
	initialize(json);
	handleOptions(json);
}

//Makes it that both the image and background are guaranteed to load in together
function preload() {
    protagImage = new Image();
    roomImage = new Image();
  
    protagImage.src = "assets/images/placeholderkun.png"
    roomImage.src = "assets/images/yumenosaki.png"
  
    protagImage.addEventListener("preload", e1 => {
      roomImage.addEventListener("preload", e2 => {
          keyPressed();
      })
    });
}

/**
 * Description of setup
*/
function setup() {

}


/**
 * Description of draw()
*/
function draw() {
    let canvas = document.getElementById("VNScreen");
    drawImages(canvas);
    drawTextArea(canvas, sampleText);
}

function drawImages(canvas){
    let ctx = canvas.getContext("2d");
    ctx.drawImage(roomImage, 0, 0);
    ctx.drawImage(protagImage, 400, 80);
}

function drawTextArea(canvas, text){
    drawTextAreaBackground(canvas);
    drawText(canvas, text);
}

function drawTextAreaBackground(canvas){
    let textArea_width = canvas.width - (MARGIN_SIDE * 2);
    
    let textArea_x = MARGIN_SIDE;
    let textArea_y = canvas.height - TEXTAREA_HEIGHT - MARGIN_BOTTOM;

    //BG Area
    let ctx = canvas.getContext("2d");
    ctx.fillStyle = '#f4e9f5';
    ctx.fillRect(textArea_x, textArea_y, textArea_width, TEXTAREA_HEIGHT);

    //Border
    ctx.beginPath();
    ctx.lineWidth = "2";
    ctx.StrokeStyle = "black";
    ctx.rect(textArea_x, textArea_y, textArea_width, TEXTAREA_HEIGHT);
    ctx.stroke();
}

function drawText(canvas, text){
    let ctx = canvas.getContext("2d");
    ctx.font = "30px verdana";
    ctx.fillStyle = 'black';

    let textLineHeight = ctx.measureText(text).fontBoundingBoxAscent + TEXT_LINE_SPACING;
    let canvasHeight = canvas.height;
    let canvasWidth = canvas.width; 

    createTextObjectIfneeded(text, ctx, textLineHeight, canvasWidth)

    let textObject = TEXT_MAP.get(text);
    let paragraph = textObject.paragraphs[textObject.paraIndex]

    //draw everything before the current line
    for(let i = 0; i < textObject.lineIndex; i++) {
        drawTextLine(paragraph[i], ctx, i, canvasHeight, textLineHeight)
    }

    //draw current line
    let partialText = paragraph[textObject.lineIndex].substring(0, textObject.charIndex + 1)
    drawTextLine(partialText, ctx, textObject.lineIndex, canvasHeight, textLineHeight);

}

function drawTextLine(text, ctx, lineIndex, canvasHeight, textLineHeight){
    ctx.fillText(
        text,
        MARGIN_SIDE + TEXT_MARGIN, //x-coord
        canvasHeight - MARGIN_BOTTOM - TEXTAREA_HEIGHT + ((lineIndex + 1) * textLineHeight)//y-coord
    );
}

function createTextObjectIfneeded(text, ctx, textLineHeight, canvasWidth){
    let maxLines = Math.floor(TEXTAREA_HEIGHT / textLineHeight);
    let maxTextWidth = canvasWidth - (MARGIN_SIDE * 2) - (TEXT_MARGIN * 2);

    if(!TEXT_MAP.has(text)){
        let textObject = new Object();
        TEXT_MAP.set(text,textObject);

        //New Variables, position of text indexes
        textObject.charIndex = 0;
        textObject.lineIndex = 0;
        textObject.paraIndex = 0;

        //object to generate paragraphs
        textObject.paragraphs = generateParagraphs(text, ctx, maxLines,maxTextWidth);
    };
}

function generateParagraphs(text, ctx, maxLines, maxTextWidth) {
    //making the spaces between the lines to make the paragraphs
    let textSplits = text.split(" ");
    let lineText = "" + textSplits[0];

    let paragraph = new Array();
    let currLineIndex = 0;

    let paragraphArray = new Array();
    let PA_Index = 0;

    //making it that the moment that a word goes past the rectangle that holds the words (overflows) it will start a new line
    for(let i = 1; i <textSplits.length; i++){
        let nextWord = textSplits[i];
        let tempText = lineText + " " + nextWord;
        let tempMeasure = ctx.measureText(tempText);

        if(tempMeasure.width > maxTextWidth){
            //If the text is too long, this if statement will check if it needs to create a new paragraph
            if(currLineIndex > maxLines - 1){
                //If yes, it will create a new paragraph and a new line
                paragraphArray[PA_Index++] = paragraph; 
                paragraph = new Array(maxLines);

                //saving new line on new paragraph
                currLineIndex = 0;
                paragraph[currLineIndex++] = lineText;
                //new line with the next word
                lineText = "" + nextWord;
            } else {
                //if not, it will create only a new line
                paragraph[currLineIndex++] = lineText;
                lineText = "" + nextWord;
            }

        } else {
            //if it's not too long, it will just be added to the line until it is too long
            lineText += " " + nextWord
        }
    }
    paragraph[currLineIndex] = lineText;
    paragraphArray[PA_Index] = paragraph;
    
    return paragraphArray
}

function keyPressed() {

    if (key === "q"){
        for (let i = 0; i <= 200; i++) {
            draw();
            paragraphAdvance();
            console.log("h");
        }
    }
}

function paragraphAdvance(){

    let textObj = TEXT_MAP.get(sampleText);
    let paragraphs = textObj.paragraphs;

    let paraIndex = textObj.paraIndex;
    let lineIndex = textObj.lineIndex;
    let charIndex = textObj.charIndex;

    if(charIndex + 1 >= paragraphs[paraIndex][lineIndex].length ){
        if(lineIndex + 1 >= paragraphs[paraIndex].length){
           //new paragraph and new line
           textObj.charIndex = 0;
           textObj.lineIndex = 0;
           textObj.paraIndex++;
        }else{
             //new line
             textObj.charIndex = 0;
             textObj.lineIndex++;
        }
    }else{
        //NO new paragraph OR new line
        textObj.charIndex++;
    }

    /*if (paraIndex=0) {
        
    }*/
}

function mousePressed() {

}

function scene2() {

}

preload();
/*
The square_pack is an algorithm, that calculates the longest possible
side (S) of any number (N) squares, in a given rectangle (W x H) and
returns the number of columns (C) and rows (R). The code was originally
written in phyton, by Markus Murschitz (Vienna, 2018).

@libs    This is a basic example of an animated html5 canvas drawing the results
         to the screen. I'm using the P5 JavaScript library (http://p5.js.org)
         to render this animation.

@author   Matthias Jäger
*/


/* Main Program */

function setup() {
   // p5.setup executes before p5.draw
   // Program starts with an empty canvas
   createCanvas(windowWidth, windowHeight);
}

function draw() {
   // p5.draw contious animation loop
   // clear background with white
   background(255);
   textAlign(CENTER, CENTER);

   // animation timing
   let limit = 100;
   let slow = 3;
   let high = 60;

   if(frameCount < limit) {
      frameRate(slow);
   } else {
      frameRate(high);
   }

   // renders animation frames
   // see render.square_pack.js
   renderSquarePack(frameCount, width, height);
}

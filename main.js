/* *
*  How to pack a specified number of squares
*  in any given browser window?
*
*  @author Matthias Jäger
*
*  Each animation frame calc(n,w,h) in square_pack.js
*  is called with three parameters and returns a grid.
*
*  @params  (n):(number of squares to pack)
*           (w):(width of the window)
*           (h):(height of the window)
*
*  @return  (s):(optimized side of a single square)
*           (c):(number of columns)
*           (r):(number of rows)
*
*  The returend results are rendered as rectangles
*  with a textbox, showing the element number in a
*  an responsive html5 canvas element.
*
*  Watch the poor algorithm trying to pack an increasing
*  number of squares on the screen until it eventually breaks
*  the loop when (s) is reaching 1.
*
*  This JavaScript code is based on square_pack by Markus Murschitz,
*  who wrote the code for calc() in phyton, after talking to me about
*  the problem on a lazy afternoon in Austria.
*
*  Have a look at his version: https://github.com/mamut-m/square-pack
*
*  @libs   I'm also using the P5 JavaScript library (http://p5.js.org)
*          to render this animation in the browser window.
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

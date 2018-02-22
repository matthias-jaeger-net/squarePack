/*
*  @function P5 setup
*
*  The setup() function defines the global variables
*  before draw() is called in a continous loop.
*   
*/

function setup() {

   // full width window
   canvas = createCanvas(windowWidth, windowHeight);

   // at least there is one square
   number = 1;

   // empty
   squares = [];

   // set Cousine Regular
   textFont(font);
}

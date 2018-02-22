/*
*  @function P5 setup
*
*  The keyPressed() function is called once every time a key is pressed.
*  The keyCode for the key that was pressed is stored in the keyCode variable.
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

/* *
*  How to pack a specified number of squares in
*  a given browser window, maintaining an optimal side length?
*
*  Matthias Jäger
*  Februar, Graz, 2018
*
*  P5 Structure:
*  - - - - - - - - - - - - - - - -
*  preload()   happens first
*  setup()     defined variables
*  draw()      animation loop
*
*  Events:
*  - - - - - - - - - - - - - - - -
*  windowResized()   recalculate
*  keyPressed()      save image
*
*  Custom utilities
*  - - - - - - - - - - - - - - - -
*  squarePack()   algorithm
*  Square()       single square
*
*  Documentation: https://github.com/matthias-jaeger-net/square_pack.js
*  Markus Murschitz version: https://github.com/mamut-m/square-pack
*  P5 library: http://p5js.org/
*  Fontface: https://fonts.google.com/specimen/Cousine
*
*/

/*
*  Variables declared within setup() are not accessible
*  within other functions, including draw().
*/

// given area
let canvas;
// specified number
let number;
// list of Square instances
let squares;
// recalculates every frame in draw()
let grid;
// defined in preload()
let font;

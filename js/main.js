/* *
*  How to pack a specified number of squares
*  in any given browser window?
*
*  Matthias Jäger
*  Februar, Graz, 2018
*
*  Documentation: https://github.com/matthias-jaeger-net/square_pack.js
*/

// defined in setup
let canvas;
let squares;
let number;

// defined in draw
let grid;

function setup() {
   // given area
   canvas = createCanvas(windowWidth, windowHeight);
   // specified number (at least) 1 square
   number = 1;
   // stores Square instances
   squares = [];
}

function draw() {
   // slow animation
   frameRate(2);
   // clear background
   background(230);

   // calc() returns rows, columns and side length
   grid = calc(number, width, height);
   rows = grid.row;
   cols = grid.col;
   cell = grid.len;

   // calculate grid
   let countcells = 1;
   for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
         if (countcells <= number) {
            let x = col * cell;
            let y = row * cell;
            squares.push(new Square(x, y, cell, countcells));
            countcells++;
         } else {
            // No more elements to add
            break;
         }
      }
   }

   // render all squares after calculating the grid
   for (let sqr of squares) {
      sqr.render();
   }

   // clear array
   squares = [];

   // increasing the number of squares
   number++;
}


/* *
*  You came to the end of this file.
*  Check out the other ones:
*
*  js/square_pack.js
*  js/square.js
*  js/events.js
*/


/*
   @func   render.square_pack.js

   @descr   renders the results calculated with square_pack.js to the canvas

   @params  (elements)     Number of elements given as positve integer
            (gridwidth)    Available windowWidth, calculated by p5, in pixel
            (gridheight)   Available windowHeight, calculated by p5, in pixel

   @author   Matthias Jäger
*/

function renderSquarePack(elements, gridwidth, gridheight) {
   // calling calc(), see libraries/square_pack.js
   // stores the returned results in grid
   let grid = calc(elements, gridwidth, gridheight);
   let scl = grid.scl;
   let cols =  grid.col;
   let rows =  grid.row;

   // only display grid cells
   let counter = 0, row, col, x, y;

   // draws the whole grid with cols and rows
   for (row = 0; row < rows; row++) {
      for (col = 0; col < cols; col++) {
         // calculate x, y coordinates for all cells
         x = col * scl;
         y = row * scl;
         // but there are possibly more cells than elements
         if (counter <= elements) {
            fill(255);
            rect(x, y, scl, scl);
            counter++;
         } else {
            break;
         }
         // only show visible text
         if (scl > 20) {
            fill(0);
            // responsive text size
            textSize(map(scl, height, 1, 160, 5));
            text(counter, x + scl/2, y + scl/2);
         }
      }
   }
}

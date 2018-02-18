/*
renders the resulting grid to the canvas

@params  (elements) Number of elements given as positve integer
         (gridwidth) windowWidth, calculated by p5, in pixels
         (gridheight) windowHeight, calculated by p5, in pixels

@author   Matthias Jäger
*/

function renderSquarePack(elements, gridwidth, gridheight) {
   // calling calc(), see libraries/square_pack.js
   // stores the returned results in grid
   let grid = calc(elements, gridwidth, gridheight);
   let scl = grid.scl;
   let cols = grid.col;
   let rows = grid.row;

   // only display grid cells
   let counter = 0;

   // draws the whole grid with cols and rows
   for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
         // calculate x, y coordinates for all cells
         let x = col * scl;
         let y = row * scl;
         // but there are possibly more cells than elements
         if (counter < elements) {
            fill(255);
            rect(x, y, scl, scl);
         } else {
            break;
         }
         // only show visible text
         if (scl > 20) {
            fill(0);
            // responsive text size
            textSize(map(scl, height, 1, 160, 5));
            text(counter+1, x + scl/2, y + scl/2);
         }
         counter++;
      }
   }
}

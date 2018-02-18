/*
*  Renders the results of a call to calc() as a grid to the canvas.
*  Each cell is given an outline and a label, containing it's index.
*
*  @params  (elements) Number of elements given as positve integer
*           (gridw) windowWidth, calculated by p5, in pixels
*           (gridh) windowHeight, calculated by p5, in pixels
*
*  @author   Matthias Jäger
*/

function renderSquarePack(elements, gridw, gridh) {
   // call to calc()
   let grid = calc(elements, gridw, gridh);
   // returned results stored in grid
   let scl = grid.scl;
   let cols = grid.col;
   let rows = grid.row;

   // lable grid cells
   let index = 1;

   // draw the results as a grid
   for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
         // calculate coordinates
         let x = col * scl;
         let y = row * scl;
         // only draw actual elements
         if (index <= elements) {
            // outline square
            fill(255);
            rect(x, y, scl, scl);
            // label square
            fill(0);
            textSize(map(scl, height, 1, 160, 5));
            text(index, x + scl/2, y + scl/2);
         } else {
            // No more elements to render
            break;
         }
         index++;
      }
   }
}

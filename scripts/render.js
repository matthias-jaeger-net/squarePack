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

   // a call to calc() returns rows, columns and scale
   let grid = calc(elements, gridw, gridh);

   // lable grid cells starting with 1
   let index = 1;

   // for every row create every colum
   for (let row = 0; row < grid.row; row++) {
      for (let col = 0; col < grid.col; col++) {
         // only draw actual elements
         if (index <= elements) {

            // calculate coordinates
            let x = col * grid.scl;
            let y = row * grid.scl;

            // outline square
            fill(255);
            rect(x, y, grid.scl, grid.scl);

            // label square
            fill(0);
            textSize(map(grid.scl, gridh, 1, 160, 5));
            text(index, x + grid.scl/2, y + grid.scl/2);
            // increase index
            index++;
         } else {
            // No more elements to render
            break;
         }
      }
   }
}

/*
*  @function P5 draw
*
*  Called directly after setup(), the draw() function continuously
*  increasess the (number) and renders the resulting (grid) until
*  the program breaks when the length of a single Square() becomes smaller
*  then 1 pixel, therefore it can't be rendered anymore.
*/

function draw() {
   // slow animation
   frameRate(2);

   // clear background
   background(230);

   // define bounding box
   gridw = width;
   gridh = height;

   // calculate grid
   grid = squarePack(number, gridw, gridh);

   // add resulting squares
   renderGrid(grid, gridw, gridh);

   // render after calculating
   for (let sqr of squares) {
      sqr.render();
   }

   // clear array
   squares = [];

   // increase the number of squares
   number++;
}

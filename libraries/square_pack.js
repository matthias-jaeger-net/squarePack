/*
*  calculate the size of squares and the grid (nx times ny cells)
*  they can be placed in to optimaly fill a rectangle
*
*  @author: Markus Murschitz
*  @javascript_version: Matthias Jäger
*
*  @param ns: number of squares
*  @param w: width of the available space in pixels
*  @param h: height of the available space in pixels
*  @return: (square length(=height) in pixels, number of columns, and number of rows)
*
*  Example:
*  >>> calc(6, 640 ,480)
*  (213, 3, 2)
*/

function calc(ns, w, h) {

   // returned variables
   let scl, col, row;

   // errors
   if (ns > w * h){
      console.log("can not fit " + ns + " squares (of a at least 1x1 px) in an image of size " + w + " x " + h);
   }
   if (ns == 0) {
      console.log("can not fit 0 squares");
   }

   // calculate biggest possible area
   const a_opt = floor(sqrt(w * h / ns));

   // store the result
   scl = a_opt;

   // reduce area until it is optimized
   while (scl > 0) {
      col = floor(w / scl);
      row = floor(h / scl);
      scl = scl - 1;
      if(col > 0 && row > 0 && row * col >= ns) {
         break;
      }
   }

   // return the final solution
   return {
      scl: scl,
      col: col,
      row: row
   }
}

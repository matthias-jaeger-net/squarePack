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
   // returns
   let a, col, row;

   // errors
   if (ns > w * h){
      console.log("can not fit " + ns + " squares (of a at least 1x1 px) in an image of size " + w + " x " + h);
   }
   if (ns == 0) {
      console.log("can not fit 0 squares");
   }

   // calculate biggest possible area
   const a_opt = floor(sqrt(w * h / ns));

   // store the result in a
   a = a_opt;

   while (a > 0) {
      col = floor(w / a);
      row = floor(h / a);
      a--;
      if(col > 0 && row > 0 && row * col >= ns) {
         break;
      }
   }

   // return the final solution
   return {
      scl: a,
      col: col,
      row: row
   }
}

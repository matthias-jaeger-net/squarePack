/*
*  @title   square_pack.js
*
*  @original_author: Markus Murschitz
*  @javascript_version: Matthias Jäger
*
*  @descr   calculate the size of squares and the grid
*           (nx times ny cells) they can be placed in
*           to optimaly fill a rectangle
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
   // prevent errors
   if (ns > w * h){
      console.log("can not fit " + ns + " squares (of a at least 1x1 px) in an image of size " + w + " x " + h);
   }
   if (ns == 0) {
      console.log("can not fit 0 squares");
   }
   // calculate biggest possible square side
   let a_opt = round(sqrt(w * h / ns));
   let a = a_opt, nx, ny;
   while (a > 0) {
      nx = floor(w / a);
      ny = floor(h / a);
      a--;
      if(nx > 0 && ny > 0 && nx * ny >= ns) {
         break;
      }
   }
   // return the final solution
   return {
      scl: a,
      col: nx,
      row: ny
   }
}

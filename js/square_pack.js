/*
*  calculate the size of squares and the grid (col times row cells)
*  they can be placed in to optimaly fill a rectangle
*
*  @author  Matthias Jäger
*
*  @params   (n) number of squares
*           (w) width of the available space in pixels
*           (h) height of the available space in pixels
*  @return  square length (=height) in pixels, number of columns, and number of rows
*
*  Example:
*  >>> calc(6, 640 ,480)
*  {
*     len: 213,
*     col: 3,
*     row: 2
*   }
*/

function calc(n, w, h) {

   // returned variables
   let len, col, row;

   // calculate biggest possible length
   const len_opt = floor(sqrt(w * h / n));

   // starts with optimum
   len = len_opt;

   while (len > 0) {
      // calculate optimal grid
      col = floor(w / len);
      row = floor(h / len);
      // len is reduced until
      len = len - 1;
      // row * col equals or is grater than n
      if(col > 0 && row > 0 && row * col >= n) {
         // this means n squares with current len
         // fit on the area because they divide into
         // a grid with at least n spots then ..
         break;
      }
   }
   // and return the final solution as an object
   return {
      len: len,
      col: col,
      row: row
   }
}

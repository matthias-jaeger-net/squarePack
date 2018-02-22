/*
*  @class Square
*
*  A single square of the grid calculated in draw()
*
*  @param (x) Position in the canvas
*  @param (y) Position in the canvas
*  @param (len) length of a side in pixels
*  @param (lbl) number or text to be displayed insde the square
*
*  @author   Matthias Jäger
*/

class Square {
   constructor(x, y, len, lbl) {
      this.x = x;
      this.y = y;
      this.len = len;
      this.lable = lbl;
   }
   render() {
      // draw square
      rect(this.x, this.y, this.len, this.len);
      // center lable
      textAlign(CENTER, CENTER);
      // gridh is defined in setup()
      textSize(map(this.len, gridh, 0, 200, 0));
      // draw lable at position
      text(this.lable, this.x + this.len/2, this.y + this.len/2);
   }
}

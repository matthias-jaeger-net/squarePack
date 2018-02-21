/*
*  A single element of the grid calculated in draw()
*
*  @params  (x) Position in the canvas
*           (y) Position in the canvas (0,0,0 = top left)
*           (len) length of a side in pixels
*           (lbl) number or text to be displayed insde the square
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
      textSize(map(this.len, height, 1, 160, 5));
      text(this.lable, this.x + this.len/2, this.y + this.len/2);
   }
}

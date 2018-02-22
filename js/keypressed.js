/*
*  @function P5 keyPressed
*
*  The keyPressed() function is called once every time a key is pressed.
*  The keyCode for the key that was pressed is stored in the keyCode variable.
*/

function keyPressed() {
   if (keyCode == BACKSPACE) {
      // save an image
      saveCanvas(canvas, "Frame-"+frameCount, "jpg");
   }
}

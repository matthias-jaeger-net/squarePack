/*
*  Events
*
*  Browserwindow has changed
*  User has pressed keyboard
*/

// p5.windowResized
function windowResized() {
   // recalculate everything
   resizeCanvas(windowWidth, windowHeight);
   renderSquarePack(frameCount, width, height);
}

// save current canvas as an image
function keyPressed() {
   if (key == " ") {
      saveCanvas(canvas, "Frame-"+frameCount, "jpg");
   }
}

/*
*  @function P5 windowResized
*
*  The windowResized() function is called once
*  every time the browser window is resized.
*/

// Browserwindow has changed
function windowResized() {
   // recalculate everything
   resizeCanvas(windowWidth, windowHeight);
}

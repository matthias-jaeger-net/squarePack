/* Events */

function windowResized() {
   // p5.windowResized Browserwindow has changed
   // recalculate everything
   resizeCanvas(windowWidth, windowHeight);
   renderSquarePack(frameCount, width, height);
}

function keyPressed() {
   if (key == " ") {
      saveCanvas(canvas, "Frame-"+frameCount, "jpg");
   } {
      
   }
}

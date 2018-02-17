/* Events */

function windowResized() {
   // p5.windowResized Browserwindow has changed
   // recalculate everything
   resizeCanvas(windowWidth, windowHeight);
   renderSquarePack(frameCount, width, height);
}

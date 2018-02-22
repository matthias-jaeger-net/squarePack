/*
*  @function P5 preload
*
*  Calling loadFont() inside preload() guarantees
*  that the load operation will have completed
*  before setup() and draw() are called.
*/

function preload() {
  font = loadFont('font/Cousine-Regular.ttf');
}

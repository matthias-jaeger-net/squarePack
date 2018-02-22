# How to pack a specified number of squares in a given browser window, maintaining an optimal side length?

Watch our poor algorithm trying to pack an increasing
number of squares on the screen until it eventually breaks
the loop when (s) is reaching 1.

https://matthias-jaeger-net.github.io/squarePack/

![Frame 86](output/Frame-86.jpg)

## About the problem  
Imagine you would want to place N squares in a given area,
defined by its width and height. Our algorithm is based on code
by Markus Murschitz, who wrote a python version of this, that
I translated poorly into JavaScript.

Have a look at Markus version: https://github.com/mamut-m/square-pack

# Test results with a landscape setup

![Frame 1](output/Frame-1.jpg)
![Frame 2](output/Frame-2.jpg)
![Frame 3](output/Frame-3.jpg)
![Frame 4](output/Frame-4.jpg)
![Frame 5](output/Frame-5.jpg)
![Frame 6](output/Frame-6.jpg)
![Frame 7](output/Frame-7.jpg)

## About this program  

I render an animation using the P5 JavaScript library.
Each animation frame our algorithm, defined in `squarePack(n,w,h)`,
located in `js/squarepack.js` is called with with a constantly
increasing specified number and the current size of the window.
In a variable I named `let grid;` I store the returned parameters,
containing the length of a single square, the number of columns and
the number of rows.

### setup the animation
```JavaScript
// given area
canvas = createCanvas(windowWidth, windowHeight);
// specified number (at least) 1 square
number = 1;
// stores Square instances
squares = [];
```

### each frame squarePack() returns rows, columns and side length
```JavaScript
// stores the results in grid
grid = calc(number, width, height);
```

### in squarePack() an optimal square is calculated
```JavaScript
// calculate biggest possible length
const optimum = floor(sqrt(width * height / number));

// current optimal length
len = optimum;

// try how many squares fit in the sceen
while (len > 0) {
   col = floor(width / len);
   row = floor(height / len);
   len = len - 1;
   // len is reduced until
   if(col > 0 && row > 0 && row * col >= number) {
      // this means the number of squares with current
      // optimal length fit on the area because they divide into
      // a grid with equal or larger number of spots then ..
      break;
   }
}
```

https://matthias-jaeger.net

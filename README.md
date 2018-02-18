<<<<<<< HEAD
# square_pack
Packs a given number of squares in any rectangular area
Written in phyton, by Markus Murschitz (Vienna, 2018).
https://github.com/mamut-m/square-pack


## About square_pack.js
The square_pack is an algorithm, that calculates the longest possible
side (S) of any number (N) squares, in a given rectangle (W x H) and
returns the number of columns (C) and rows (R). I translated Markus
phyton code to JavaScript and set up a basic example, drawing the results
to an html5 <canvas>. I'm using the P5 JavaScript library (http://p5.js.org)
to render this animation.
=======
# How to pack a specified number of squares in any given browser window?

![Frame 86](output/Frame-86.jpg)

## How the program works.  

Each animation frame `calc(n,w,h)` in square_pack.js is
called with three parameters and returns a grid layout.

### params  
(n):(number of squares to pack)
(w):(width of the window)
(h):(height of the window)

### return  
(s):(optimized side of a single square)
(c):(number of columns)
(r):(number of rows)

The returned results are showed as rectangles
with a text, displaying the element number and
rendered in a responsive html5 canvas.

## Working example:  

Watch the poor algorithm trying to pack an increasing
number of squares on the screen until it eventually breaks
the loop when (s) is reaching 1.

https://matthias-jaeger-net.github.io/square_pack.js/

## Results

![Frame 1](output/Frame-1.jpg)
![Frame 2](output/Frame-2.jpg)
![Frame 3](output/Frame-3.jpg)
![Frame 4](output/Frame-4.jpg)
![Frame 5](output/Frame-5.jpg)
![Frame 6](output/Frame-6.jpg)
![Frame 7](output/Frame-7.jpg)



## About square_pack in python
This JavaScript code is based on square_pack by Markus Murschitz,
who wrote the code for calc() in python, after talking to me about
the problem on a lazy afternoon in Austria.

Have a look at his version: https://github.com/mamut-m/square-pack

## libs   
I'm also using the P5 JavaScript library to render this
animation in the browser window.

http://p5.js.org
>>>>>>> master

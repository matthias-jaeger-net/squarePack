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

# Results

## n = 1
![Frame 1](output/Frame-1.jpg)

In this case the biggest square is built from the shorter side.


## n = 2
![Frame 2](output/Frame-2.jpg)

Jumping to the longer side and building two squares in a row.

## n = 3
![Frame 3](output/Frame-3.jpg)

Three squares? Best fits with three in a row in this case.

## n = 4
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

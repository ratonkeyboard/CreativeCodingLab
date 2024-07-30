/*
  Check our the GOAL and the RULES of this exercise at the bottom of this file.
  
  After that, follow these steps before you start coding:

  1. rename the dancer class to reflect your name (line 35).
  2. adjust line 20 to reflect your dancer's name, too.
  3. run the code and see if a square (your dancer) appears on the canvas.
  4. start coding your dancer inside the class that has been prepared for you.
  5. have fun.
*/

let dancer;

function setup() {
  // no adjustments in the setup function needed...
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("p5-canvas-container");

  // ...except to adjust the dancer's name on the next line:
  dancer = new dancingRat(width / 2, height / 2);
}

function draw() {
  // you don't need to make any adjustments inside the draw loop
  background(0);
  drawFloor(); // for reference only

  dancer.update();
  dancer.display();
}

// You only code inside this class.
// Start by giving the dancer your name, e.g. LeonDancer.

class dancingRat {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
    // add properties for your dancer here:
    //..
    this.bodyX = 0;
    this.bodyY = -10;
    this.headX = 0;
    this.headY = 40;
    this.bodyWidth = 80;
    this.bodyHeight = 100;
    this.headCircum = 60;

    // Nose point that moves
    this.noseX = this.headX - this.headCircum / 4;
    this.noseY = this.headY + this.headCircum / 2 + 10;
    this.noseMinX = this.headX - this.headCircum / 4; // Minimum X boundary
    this.noseMaxX = this.headX + this.headCircum / 4 - 7; // Maximum X boundary
    

    this.noseSpeed = 1
    this.direction = 1

    // Tail point move
    this.tailX = this.bodyX - this.bodyWidth / 2;

    this.tailSpeed = 1
    this.direction2 = 1
    this.tailMinX = this.bodyX - this.bodyWidth / 2
    this.tailMaxX = this.bodyX + this.bodyWidth / 2

    // head move
    this.headSpeed = 1
    this.direction3 = 1


    //  Body rotate
    this.bodyAngle = 0;
    this.bodySpeed = 1;
    this.bodyDirection = 1;

    //..
    //..
  }
  update() {
    // update properties here to achieve
    // your dancer's desired moves and behaviour
  
    this.moveTail();
    this.moveHead();
    this.moveNose();
    this.bodyRotate();

  }
  display() {
    // the push and pop, along with the translate 
    // places your whole dancer object at this.x and this.y.
    // you may change its position on line 19 to see the effect.


    push();
    translate(this.x, this.y);


    // ******** //
    // ⬇️ draw your dancer from here ⬇️
    fill(255);
    stroke(1);

    // Tail
    strokeWeight(2);
    stroke(255, 0, 0); // Red tail color
    // helper tail point
    let tail1x = this.tailX;
    let tail1y = this.bodyY - this.bodyHeight;
    line(tail1x, tail1y, this.bodyX, this.bodyY - this.bodyHeight / 2);

    strokeWeight(1);
    stroke(0);

    // Body
    // call the drawBody function
    this.drawBody(this.bodyX, this.bodyY);

    // How to untab a bunch of things: command and {, in the right direction
    // ears
    circle(this.headX - this.headCircum/2, this.headY - 29, 50);
    circle(this.headX + this.headCircum/2, this.headY - 29, 50);

    // head
    ellipse(this.headX, this.headY, this.headCircum, this.headCircum)

    // eyes
    fill(0);
    circle(this.headX - this.headCircum/4 + 2 , this.headY - 8, 7);
    circle(this.headX + this.headCircum/4 -2, this.headY - 8, 7);

    // Nose

    // Location of nose triangle points
    let pointNose1x = this.headX - this.headCircum / 4;
    let pointNose1y = this.headY + 3;
    let pointNose2x = this.headX + this.headCircum / 4 - 7;
    let pointNose2y = this.headY + 3;
    let pointNose3x = this.noseX;
    let pointNose3y = this.noseY;

    // Whiskers
    fill(255, 200, 200);
    let pointWx1 = ((this.headX - this.headCircum / 4)+this.noseX)/2;
    let pointWy1 = ((this.headY + 3)+this.noseY)/2;
    let pointWx2 = (((this.headX - this.headCircum / 4)+this.noseX)/2)+ (this.noseX/1000) + 4;
    let pointWy2 = (((this.headY + 3)+this.noseY)/2) - 6;
    let pointWx3 = ((this.headX + this.headCircum / 4 - 7)+this.noseX)/2;
    let pointWy3 = ((this.headY + 3)+this.noseY)/2;
    let pointWx4 = (((this.headX + this.headCircum / 4 - 7)+this.noseX)/2)+ (this.noseX/1000) -4;
    let pointWy4 = (((this.headY + 3)+this.noseY)/2) - 6;


    let pointEndx1 = pointWx1 - 28
    let pointEndy1 = pointWy1 + 3
    let pointEndx2 = pointWx2 - 30
    let pointEndy2 = pointWy2 - 5
    let pointEndx3 = pointWx3 + 28
    let pointEndy3 = pointWy3 + 3
    let pointEndx4 = pointWx4 + 30
    let pointEndy4 = pointWy4 - 5


    // circle(pointWx1, pointWy1, 5);
    // circle(pointWx2, pointWy2, 5);
    // circle(pointWx3, pointWy3, 5);
    // circle(pointWx4, pointWy4, 5);
    // circle(pointEndx1, pointEndy1, 5);
    // circle(pointEndx2, pointEndy2, 5);
    // circle(pointEndx3, pointEndy3, 5);
    // circle(pointEndx4, pointEndy4, 5);

    strokeWeight(2);
    stroke(255,200,200);
    line(pointEndx1, pointEndy1, pointWx1, pointWy1);
    line(pointEndx2, pointEndy2, pointWx2, pointWy2);
    line(pointEndx3, pointEndy3, pointWx3, pointWy3);
    line(pointEndx4, pointEndy4, pointWx4, pointWy4);
    strokeWeight(1);
    stroke(0);


    // nose triangle
    fill(255);
    triangle(pointNose1x, pointNose1y, pointNose2x, pointNose2y, pointNose3x, pointNose3y);

    // nose tip
    fill(255); // Set fill color to red
    circle(pointNose3x, pointNose3y, 10);




    // ⬆️ draw your dancer above ⬆️
    // ******** //

    // the next function draws a SQUARE and CROSS
    // to indicate the approximate size and the center point
    // of your dancer.
    // it is using "this" because this function, too, 
    // is a part if your Dancer object.
    // comment it out or delete it eventually.
    this.drawReferenceShapes()

    pop();
  }
  drawReferenceShapes() {
    noFill();
    stroke(255, 0, 0);
    line(-5, 0, 5, 0);
    line(0, -5, 0, 5);
    stroke(255);
    rect(-100, -100, 200, 200);
    fill(255);
    stroke(0);
  }

  moveNose(){
  // Move the nose based on the direction
  push();
  translate(this.headX,this.headY)
    this.noseX += this.noseSpeed * this.direction;

    // Check if the nose has hit the boundaries
    if (this.noseX >= 30 || this.noseX <= -30) {
      this.direction *= -1; // Reverse the direction
    }


  pop();
    //if (this.noseX >= this.noseMaxX || this.noseX <= this.noseMinX)
  }

  moveHead(){
    // Move the nose based on the direction
      this.headX += this.headSpeed * this.direction3;
  
      // Check if the nose has hit the boundaries
      if (this.headX >= 20 || this.headX <= -20) {
        this.direction3 *= -1; // Reverse the direction
      }
    }

  moveTail(){
    // Move the nose based on the direction
      this.tailX += this.tailSpeed * this.direction2;
  
      // Check if the nose has hit the boundaries
      if (this.tailX >= this.tailMaxX || this.tailX <= this.tailMinX) {
        this.direction2 *= -1; // Reverse the direction
      }
    }
  
  drawBody(bodyX, bodyY){
      push();
      translate(bodyX, bodyY);
      rotate(radians(this.bodyAngle));
      // rotate(radians(wheelAngle));
        stroke(0);
        ellipse(this.bodyX, this.bodyY, this.bodyWidth, this.bodyHeight);
      pop();

  }
  bodyRotate() {
    this.bodyAngle += this.bodySpeed * this.bodyDirection;
    // Check if the body has hit the boundaries
    if (this.bodyAngle >= radians(1000) || this.bodyAngle <= radians(-1000)) {
      this.bodyDirection *= -1; // Reverse the direction
    }
  }
}



/*
GOAL:
The goal is for you to write a class that produces a dancing being/creature/object/thing. In the next class, your dancer along with your peers' dancers will all dance in the same sketch that your instructor will put together. 

RULES:
For this to work you need to follow one rule: 
  - Only put relevant code into your dancer class; your dancer cannot depend on code outside of itself (like global variables or functions defined outside)
  - Your dancer must perform by means of the two essential methods: update and display. Don't add more methods that require to be called from outside (e.g. in the draw loop).
  - Your dancer will always be initialized receiving two arguments: 
    - startX (currently the horizontal center of the canvas)
    - startY (currently the vertical center of the canvas)
  beside these, please don't add more parameters into the constructor function 
  - lastly, to make sure our dancers will harmonize once on the same canvas, please don't make your dancer bigger than 200x200 pixels. 
*/
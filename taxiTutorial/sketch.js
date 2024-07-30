let instanceOfTaxi1;
let instanceOfTaxi2;
let honk1;
let honk2;
let ambience;


function preload(){
  honk1 = loadSound("assets/honk1.mp3");
  honk2 = loadSound("assets/honk2.mp3");
  ambience = loadSound("assets/ambience.mp3");
}

function mousePressed(){
  // honk1.play();
}


function setup() {
    let canvas = createCanvas(400, 400);
    canvas.parent('canvasParent');
    instanceOfTaxi1 = new taxi(300, 300);
    instanceOfTaxi2 = new taxi(100, 300);
    
    // the ambience loop is in set up but it doesn't play, because you need some interaction with the website before it start playing sounds.
    // so, for the sound to start running, you have to tap the website randomly. Then it'll play
    ambience.loop();

  }
  
function draw() {
    background(255);

    // You can call the spinWheel here, or put it in the display function
    // instanceOfTaxi.spinWheel();

    instanceOfTaxi1.display();
    instanceOfTaxi1.update();
    instanceOfTaxi1.maybeHonk()


    instanceOfTaxi2.display();
  }

class taxi{
  constructor(startX, startY){
    this.x = startX;
    this.y = startY;
    this.s = 1
    this.wheelAngle = 45;
    this.wheelSpeed = 3;
    this.speed = 3;

  }

  display(){
    push();
    translate(this.x, this.y);
    scale(this.s);

        noStroke();
        fill(240, 220, 60);

        // base:
        rect(-50, -50, 100, 30);
        // top"
        rect(-25, -70, 50, 20);
        // wheel 1:
        this.drawWheel(-30, -15);
        // wheel 2:
        this.drawWheel( 30, -15);

        // just to see origin 
        // of translation matrix:
        fill("red");
        circle(0, 0, 5); 


    pop();
  }

  drawWheel(wheelx, wheely){
      push();
      translate(wheelx, wheely);
      rotate(radians(this.wheelAngle));
      // rotate(radians(wheelAngle));

          noStroke();
          fill(0);
          circle(0,0,30);
          // ellipse(0,0,30, 27);

          stroke(255, 0, 0);
          strokeWeight(2);
          line(0,0,15,0);

      pop();

  }
  spinWheel(){
    this.wheelAngle += this.wheelSpeed;
  }
  move(){
    this.x += this.speed;
    if(this.x > width){
      this.x = 0;
    }
  }
  update(){
    this.spinWheel();
    this.move();

  }

  maybeHonk(){
    if(random(0,100) < 1){
      if(random(0,100) < 50){
        honk1.play();
      } else {
        honk2.play();
      }
      
    }


  }

}
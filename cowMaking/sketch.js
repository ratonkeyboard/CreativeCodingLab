let cow1;
let cowIMG;

let cowLots = [];
let numCows = 20;


function preload(){
  cowIMG = loadImage("assets/cow-poster.png");
}


function setup() {
    let canvas = createCanvas(400, 400);
    canvas.parent('canvasParent');

    // cow1 = new Cow(200, 200, cowIMG);

    // Interestingly, command + \ is creating a duplicate of the current window

    for(let i = 0; i< numCows; i ++){  // This we need numCows we need a fix number
      let oneCow = new Cow(random(width), random(height), cowIMG);
      cowLots.push(oneCow);

    }


    
  }
  
function draw() {
  // background(255);
  // fill(230,230,255);
  // circle(200,200,100);
  // strokeWeight(2);
  // line(100,200,300,200);

  background(200,100,100);

  // Original one cow code 
  // cow1.display();
  // cow1.update();

  for(let i = 0; i< cowLots.length; i ++){ // Here we use cowLots.length and this is good bc number of cows change
    cowLots[i].display();
    cowLots[i].update();
    
  }

}

class Cow{
  constructor(startX, startY, img){
    this.x = startX;
    this.y = startY;
    this.xSpeed = 3;


    this.image = img;
    this.scaleFactor = random(0.1,0.5) // Make the cow a different size everytime
    


  }

  display(){
    push();

    translate(this.x, this.y);
    scale(this.scaleFactor);

    // rect(0,0,50,50);

    // Scale the cow according to origin point (since auto origin point is top left corner of rectangle image, not the middle of the cow)
    let imgW = this.image.width;
    let imgH = this.image.height;
    image(this.image,-imgW/2 ,-imgH + 90);
    //Helper circle
    fill(255,0,0);
    circle(0,0,5);
    fill(255);


    pop();
  }

  update(){
    this.x = this.x + this.xSpeed

    if (this.x > width){
      this.x = 0;
    }
  }
}

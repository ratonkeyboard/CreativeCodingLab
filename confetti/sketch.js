let confettis = [];
let numConfetti = 100;
let backgroundHue;

function setup() {
  createCanvas(400, 400);
  
  // comment out for now to test the mousepressed
  // for(let i = 0; i < numConfetti; i++){
  //   confettis.push(new Confetti(width/2, height/2))
  // }
  
  colorMode(HSB);
  backgroundHue = random(0,360);

}

function draw() {
  // This is the pastel background
  background(backgroundHue, 20, 200);


  // This is the black background
  // background(0,0,0);

  confettis.push(new Confetti(mouseX, mouseY));

  for(let i = 0; i < confettis.length; i++){
    confettis[i].update();
    confettis[i].checkOnCanvas();
    confettis[i].display();
  }

  
  //textColor(255);
  text(confettis.length, 20, 20);

  // Use this to prevent having toooo many confettis
  // Solution if loop
  // if(confettis.length > 30){
  //   confettis.splice(0,1);  // this remove 1 thing from index 0
  // }
  

  // solution while loop as well, so as long as it is >100, delete one element


  // BEST SOLUTION: As long as confettis left the screen, we delete them
  for(let i = 0; i < confettis.length; i++){
    if (confettis[i].onCanvas == false){  // .onCanvas is an easy way to get the value of an attribute
      confettis.splice(i,1);
    }
  }
}

class Confetti{
  constructor(startX, startY){
    this.x = startX;
    this.y = startY;
    this.size = random(2, 10);
    
    this.speedX = random(-2, 2);
    this.speedY = random(-1, -3);   

    this.confHue = random(0,360);
    this.onCanvas = true;


  }
  update(){
    this.x+=this.speedX;
    this.y+=this.speedY;

    // Appy gravity to y speed
    // Right now, the gravity is negative --> 0(stand still) --> positive(going down)
    this.speedY += 0.05;
    this.speedX *= 0.99;
  }
  display(){    
    push();
    translate(this.x, this.y);

      fill(this.confHue, 255, 100);
      noStroke();
      circle(0, 0, this.size);
   
    pop();
  }

  checkOnCanvas(){
    if (this.y > height){
      this.onCanvas = false;
    }
  }
}


// function mousePressed(){
//   for(let i = 0; i < numConfetti; i++){
//     confettis.push(new Confetti(mouseX, mouseY))
//   }
// }
function setup() {
    let canvas = createCanvas(900, 400);
    canvas.parent('canvasParent');
  }
  
  function draw() {
    background(255);
    fill(230,230,255);
    circle(200,200,100);
    strokeWeight(2);
    line(100,200,300,200);
  }
function setup() {
    let canvas = createCanvas(800, 500);
    canvas.parent('p5-canvas-container')
    background(255);
  
    // cat1(); 
    // cat2();
    // cat3();
  }
  
  function draw() {
    // Nothing to draw continuously
    background(220, 220, 250);
    generateClouds()
    grass()
    cat4(200,350)
    // cat2();
  }
  // This is some kitty cat
  // Cloud background 
  
  function generateClouds() {
     // noStroke();
    for (let i = 0; i < 50; i++) { // Adjust the number of clouds
      let cloudX = random(width);
      let cloudY = random(height / 2); // Clouds only in the upper half
      let cloudSize = random(50, 150); // Size of each cloud
  
      // Draw individual cloud puffs
      for (let j = 0; j < 10; j++) {
        let puffX = cloudX + random(-cloudSize / 2, cloudSize / 2);
        let puffY = cloudY + random(-cloudSize / 4, cloudSize / 4);
        let puffSize = cloudSize / 2 + random(cloudSize / 2);
        fill(255, 255, 255, random(50, 150)); // White with random transparency
        ellipse(puffX, puffY, puffSize, puffSize / 1.5); // Slightly elliptical puffs
      }
    }
  }
  
  
  // Grass ground
  function grass(){
      let waveHeight = 10;  // Height of the sine wave
    let waveSpeed = 0.05;  // Speed of the wave movement
  
    // Draw the sine wave
    stroke(34, 139, 34);
    fill(34, 139, 34);
    let yPrev = height * 4 / 5;
    for (let x = 0; x <= width; x++) {
      let y = map(sin(x * 0.02 + frameCount * waveSpeed), -1, 1, height * 4 / 5 - waveHeight, height * 4 / 5 + waveHeight);
      line(x - 1, yPrev, x, y);
      yPrev = y;
    }
  
    // Fill the area below the sine wave with green
    noStroke();
    fill(34, 139, 34);
    rect(0, height * 4 / 5 + waveHeight, width, height / 5);
  }
  
  // Cat version 1
  
  function cat1(){
    push();
    translate(width / 2, height / 2);
  
    // Cat body
    stroke(0);
    let bodyWidth = 200;
    let bodyHeight = 100;
    let bodyX = 0;
    let bodyY = 50;
    
    fill(150, 75, 0);
    ellipse(bodyX, bodyY, bodyWidth, bodyHeight);
    
    // Cat head
    let headSize = 100;
    let headX = bodyX;
    let headY = bodyY - bodyHeight / 2 - headSize / 2;
    
    ellipse(headX, headY, headSize, headSize);
    
    // Cat ears
    let earSize = 30;
    fill(250, 220, 220);
    triangle(headX - headSize / 2, headY - headSize / 3, headX - headSize / 2, headY - headSize / 3 - earSize, headX - headSize / 5, headY - headSize / 2);
    triangle(headX + headSize / 2, headY - headSize / 3, headX + headSize / 2, headY - headSize / 3 - earSize, headX + headSize / 5, headY - headSize / 2);
    
    // Cat eyes
    fill(0);
    ellipse(headX - headSize / 6, headY - headSize / 6, 10, 10);
    ellipse(headX + headSize / 6, headY - headSize / 6, 10, 10);
    
    // Cat nose
    fill(255, 182, 193);
    triangle(headX - 5, headY, headX + 5, headY, headX, headY + 5);
    
    // Cat mouth
    noFill();
    stroke(0);
    strokeWeight(1);
    line(headX, headY + 5, headX - 5, headY + 10);
    line(headX, headY + 5, headX + 5, headY + 10);
    
    // Cat whiskers
    line(headX - 10, headY + 5, headX - 30, headY + 10);
    line(headX - 10, headY + 10, headX - 30, headY + 15);
    line(headX + 10, headY + 5, headX + 30, headY + 10);
    line(headX + 10, headY + 10, headX + 30, headY + 15);
    
    // Cat tail
    fill(150, 75, 0);
    rect(bodyX + bodyWidth / 2, bodyY - 10, 20, 80, 10);
    pop();
  }
  
  function cat2(){
    push();
    translate(width / 2, height / 2);
  
    // Cat colors
    stroke(0);
    let catColor = color(255, 239, 186);
  
    // Cat body
    let bodyWidth = 200;
    let bodyHeight = 100;
    let bodyX = 0;
    let bodyY = 0;
    
    fill(catColor);
    ellipse(bodyX, bodyY, bodyWidth, bodyHeight);
    
    // Cat head
    let headSize = 100;
    let headX = bodyX - bodyWidth / 2 - headSize / 2;
    let headY = bodyY - bodyHeight / 4;
    
    ellipse(headX, headY, headSize, headSize);
    
    // Cat ears
    let earSize = 30;
    fill(250, 220, 220);
    triangle(headX - headSize / 2, headY - headSize / 3, headX - headSize / 2, headY - headSize / 3 - earSize, headX - headSize / 5, headY - headSize / 2);
    triangle(headX + headSize / 2, headY - headSize / 3, headX + headSize / 2, headY - headSize / 3 - earSize, headX + headSize / 5, headY - headSize / 2);
    
    // Cat eyes
    fill(0);
    ellipse(headX - headSize / 6, headY - headSize / 6, 10, 10);
    ellipse(headX + headSize / 6, headY - headSize / 6, 10, 10);
    
    // Cat nose
    fill(255, 182, 193);
    triangle(headX - 5, headY, headX + 5, headY, headX, headY + 5);
    
    // Cat mouth
    noFill();
    stroke(0);
    strokeWeight(1);
    line(headX, headY + 5, headX - 5, headY + 10);
    line(headX, headY + 5, headX + 5, headY + 10);
    
    // Cat whiskers
    line(headX - 10, headY + 5, headX - 30, headY + 10);
    line(headX - 10, headY + 10, headX - 30, headY + 15);
    line(headX + 10, headY + 5, headX + 30, headY + 10);
    line(headX + 10, headY + 10, headX + 30, headY + 15);
    
    // Cat legs with paws
    let legWidth = 20;
    let legHeight = 50;
    let pawSize = 20;
  
    // Front left leg
    rect(bodyX - bodyWidth / 4, bodyY + bodyHeight / 2 - legHeight / 2, legWidth, legHeight);
    ellipse(bodyX - bodyWidth / 4 + legWidth / 2, bodyY + bodyHeight / 2 + legHeight / 2, pawSize, pawSize);
  
    // Front right leg
    rect(bodyX + bodyWidth / 4 - legWidth, bodyY + bodyHeight / 2 - legHeight / 2, legWidth, legHeight);
    ellipse(bodyX + bodyWidth / 4 - legWidth / 2, bodyY + bodyHeight / 2 + legHeight / 2, pawSize, pawSize);
  
    // Back left leg
    rect(bodyX - bodyWidth / 4, bodyY + bodyHeight / 2 - legHeight / 2 + 20, legWidth, legHeight);
    ellipse(bodyX - bodyWidth / 4 + legWidth / 2, bodyY + bodyHeight / 2 + legHeight / 2 + 20, pawSize, pawSize);
  
    // Back right leg
    rect(bodyX + bodyWidth / 4 - legWidth, bodyY + bodyHeight / 2 - legHeight / 2 + 20, legWidth, legHeight);
    ellipse(bodyX + bodyWidth / 4 - legWidth / 2, bodyY + bodyHeight / 2 + legHeight / 2 + 20, pawSize, pawSize);
    
    // Cat tail
    fill(catColor);
    rect(bodyX + bodyWidth / 2, bodyY - 20, 20, 80, 10);
    pop();
    
  }
  
  function cat3(){
    push();
    translate(width / 2, height / 2);
  
    // Cat colors
    stroke(0);
    let catColor = color(255, 239, 186);
    fill(catColor);
    
    // Cat body
    let bodyWidth = 200;
    let bodyHeight = 100;
    let bodyX = 0;
    let bodyY = 0;
    
      // Cat legs with paws
    let legWidth = 20;
    let legHeight = 50;
    let pawSize = 20;
  
    // Front left leg
    rect(bodyX - bodyWidth / 4, bodyY + bodyHeight / 2 - legHeight / 2, legWidth, legHeight);
    ellipse(bodyX - bodyWidth / 4 + legWidth / 2, bodyY + bodyHeight / 2 + legHeight / 2, pawSize, pawSize);
  
    // Front right leg
    rect(bodyX + bodyWidth / 4 - legWidth, bodyY + bodyHeight / 2 - legHeight / 2, legWidth, legHeight);
    ellipse(bodyX + bodyWidth / 4 - legWidth / 2, bodyY + bodyHeight / 2 + legHeight / 2, pawSize, pawSize);
  
  
    ellipse(bodyX, bodyY, bodyWidth, bodyHeight);
    
    // Cat head
    let headSize = 100;
    let headX = bodyX - bodyWidth / 2 + 20;
    let headY = bodyY - bodyHeight / 4;
    
    ellipse(headX, headY, headSize, headSize);
    
    // Cat ears
    let earSize = 30;
    fill(250, 220, 220);
    triangle(headX - headSize / 2, headY - headSize / 3, headX - headSize / 2, headY - headSize / 3 - earSize, headX - headSize / 5, headY - headSize / 2);
    triangle(headX + headSize / 2, headY - headSize / 3, headX + headSize / 2, headY - headSize / 3 - earSize, headX + headSize / 5, headY - headSize / 2);
    
    // Cat eyes
    fill(0);
    ellipse(headX - headSize / 6, headY - headSize / 6, 15, 15);
    ellipse(headX + headSize / 6, headY - headSize / 6, 15, 15);
    
    // Cat nose
    fill(255, 182, 193);
    triangle(headX - 5, headY, headX + 5, headY, headX, headY + 5);
    
    // Cat mouth
    noFill();
    stroke(0);
    strokeWeight(1);
    line(headX, headY + 5, headX - 5, headY + 10);
    line(headX, headY + 5, headX + 5, headY + 10);
    
    // Cat whiskers
    line(headX - 10, headY + 5, headX - 30, headY + 10);
    line(headX - 10, headY + 10, headX - 30, headY + 15);
    line(headX + 10, headY + 5, headX + 30, headY + 10);
    line(headX + 10, headY + 10, headX + 30, headY + 15);
    
    
    // Cat tail
    fill(catColor);
    rect(bodyX + bodyWidth / 2, bodyY - 10, 80, 20, 10);
    pop();
    
  }
  
  
  // Cat version 4 (grumpy face when mouse over tail)
  function cat4(x,y) {
    push();
    translate(x, y);
  
    // Cat colors
    stroke(0);
    let catColor = color(255, 239, 186);
    fill(catColor);
    
    // Cat body
    let bodyWidth = 200;
    let bodyHeight = 100;
    let bodyX = 0;
    let bodyY = 0;
    
    // Cat legs with paws
    let legWidth = 20;
    let legHeight = 50;
    let pawSize = 20;
  
    // Front left leg
    rect(bodyX - bodyWidth / 4, bodyY + bodyHeight / 2 - legHeight / 2, legWidth, legHeight);
    ellipse(bodyX - bodyWidth / 4 + legWidth / 2, bodyY + bodyHeight / 2 + legHeight / 2, pawSize, pawSize);
  
    // Front right leg
    rect(bodyX + bodyWidth / 4 - legWidth, bodyY + bodyHeight / 2 - legHeight / 2, legWidth, legHeight);
    ellipse(bodyX + bodyWidth / 4 - legWidth / 2, bodyY + bodyHeight / 2 + legHeight / 2, pawSize, pawSize);
  
    ellipse(bodyX, bodyY, bodyWidth, bodyHeight);
    
    // Cat head
    let headSize = 100;
    let headX = bodyX - bodyWidth / 2 + 20;
    let headY = bodyY - bodyHeight / 4;
    
    ellipse(headX, headY, headSize, headSize);
    
    // Cat ears
    let earSize = 30;
    fill(250, 220, 220);
    triangle(headX - headSize / 2, headY - headSize / 3, headX - headSize / 2, headY - headSize / 3 - earSize, headX - headSize / 5, headY - headSize / 2);
    triangle(headX + headSize / 2, headY - headSize / 3, headX + headSize / 2, headY - headSize / 3 - earSize, headX + headSize / 5, headY - headSize / 2);
    
    // Check if mouse is over the tail
    let tailX = x + bodyWidth / 2;
    let tailY = y - 10;
    let tailWidth = 80;
    let tailHeight = 20;
    let isMouseOverTail = mouseX > tailX && mouseX < tailX + tailWidth && mouseY > tailY && mouseY < tailY + tailHeight;
    
    if (isMouseOverTail) {
      // Grumpy face
      fill(0);
      strokeWeight(2)
      line(headX - 15, headY - 15, headX - 5, headY - 5); // Left angry eye
  
   // Right angry eye
      line(headX + 15, headY - 15, headX + 5, headY - 5);
      
      fill(255, 182, 193);
      triangle(headX - 5, headY, headX + 5, headY, headX, headY + 5); // Nose
      
      stroke(0);
      strokeWeight(2);
      line(headX - 10, headY + 10, headX - 5, headY + 5); // Mouth
      line(headX + 10, headY + 10, headX + 5, headY + 5);
    } else {
      // Normal face
      fill(0);
      ellipse(headX - headSize / 6, headY - headSize / 6, 15, 15); // Eyes
      ellipse(headX + headSize / 6, headY - headSize / 6, 15, 15);
      
      fill(255, 182, 193);
      triangle(headX - 5, headY, headX + 5, headY, headX, headY + 5); // Nose
      
      noFill();
      stroke(0);
      strokeWeight(1);
      line(headX, headY + 5, headX - 5, headY + 10); // Mouth
      line(headX, headY + 5, headX + 5, headY + 10);
    }
    
    // Cat whiskers
    line(headX - 10, headY + 5, headX - 30, headY + 10);
    line(headX - 10, headY + 10, headX - 30, headY + 15);
    line(headX + 10, headY + 5, headX + 30, headY + 10);
    line(headX + 10, headY + 10, headX + 30, headY + 15);
    
    // Cat tail
    fill(catColor);
    rect(bodyX + bodyWidth / 2, bodyY - 10, 80, 20, 10);
    
    // helper circle
    fill('red')
    ellipse(0,0,5)
    pop();
  }
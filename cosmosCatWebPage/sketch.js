let angle = 0; // in degrees

let answer = [];
let sol0 = [];
let sol1 = [4, 0, 0];
let sol2 = ['-', 3];
let sol3 = [1,9];
let sol4 = [5];
let sol5 = [3,3,5];

function setup() {
    let canvas = createCanvas(800, 500);
    canvas.parent('p5-canvas-container')
    background(255);

}

function arraysEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}


function keyPressed() {
  if (key === '1') {
    answer.push(1);
    console.log(answer);
  } else if ( key === 'x'){
    answer = [];
  } else if (key === '2'){
    answer.push(2);
  }else if (key === '3'){
    answer.push(3);
  }else if (key === '4'){
    answer.push(4);
  }else if (key === '5'){
    answer.push(5);
  }else if (key === '6'){
    answer.push(6);
  }else if (key === '7'){
    answer.push(7);
  }else if (key === '8'){
    answer.push(8);
  }else if (key === '9'){
    answer.push(9);
  }else if (key === '0'){
    answer.push(0);
  }else if (key === '-'){
    answer.push('-');
  }
}

function draw() {
  let blueBackground = color(222, 240, 250);
  
 if (arraysEqual(answer, sol1)) {
  painting1();
  cat2(400, 350);
  cat4(200,350);
  cat1(600, 350);
  } else if (arraysEqual(answer, sol2)) {
  painting2();
  cat2(400, 350);
  cat4(200,350);
  cat1(600, 350);
  } else if (arraysEqual(answer, sol3)) {
  painting3();
  cat2(400, 350);
  cat4(200,350);
  cat1(600, 350);
  } else if (arraysEqual(answer, sol4)) {
  painting4();
  cat2(400, 350);
  cat4(200,350);
  cat1(600, 350);
  }else if (arraysEqual(answer, sol5)) {
  painting5();
  cat2(400, 350);
  cat4(200,350);
  cat1(600, 350);
  }else {
  timeChange()
  cloudBackground();
  
  // cloudBackground(300,0) 
  // generateClouds();
  // generateGrass();
   grass();
    flowerBackground();
    
  cat2(400, 350);
  cat4(200,350);
  cat1(600, 350);
    
  fill(240, 200, 130)
  textSize(80); // Set font size to 32 pixels
  text(answer, 100, 180);
    
  } 
  
  textSize(50);
  text('⭐️',180,250);
  textSize(10);
  fill(0);
  text("Reset", 190, 230)
  // circle(180,250,5);
  
}



function generateGrass() {
  stroke(0, 100, 0);
  for (let g = 0; g < 30; g+= 1) {
    let x = random(0, 800);
    let y = random(50, 500);
    let length = random(10, 20);
    line(x, y, x, y - length);
  }
}



// Grass ground
function grass(){

  strokeWeight(1);
  noStroke();
  fill(225, 239, 202);
  rect(0, height * 4 / 5 + 10, width, height / 5);
}

// cat 1.1
function cat1(x, y) {
  push();
  translate(x, y);

  // Draw wings
  let wingWidth = 80;
  let wingHeight = 30;
  fill(255, 255, 255, 230); // semi-transparent white for wings
  noStroke();

  let leftWingX = 90;
  let leftWingY = 40;
  let rightWingX = -90;
  let rightWingY = 40;

  // Left wing
  push();
  rotate(-(1 / 12) * PI);
  ellipse(leftWingX, leftWingY, wingWidth, wingHeight);
  pop();
  push();
  rotate(-(1 / 7) * PI);
  ellipse(leftWingX, leftWingY, wingWidth, wingHeight);
  pop();
  push();
  rotate(-(1 / 5) * PI);
  ellipse(leftWingX, leftWingY, wingWidth, wingHeight);
  pop();

  // Right wing
  push();
  rotate((1 / 12) * PI);
  ellipse(rightWingX, rightWingY, wingWidth, wingHeight);
  pop();
  push();
  rotate((1 / 7) * PI);
  ellipse(rightWingX, rightWingY, wingWidth, wingHeight);
  pop();
  push();
  rotate((1 / 5) * PI);
  ellipse(rightWingX, rightWingY, wingWidth, wingHeight);
  pop();

  // Cat body
  stroke(0);
  let bodyWidth = 200;
  let bodyHeight = 100;
  let bodyX = 0;
  let bodyY = 50;

  fill(220, 230, 255);
  ellipse(bodyX, bodyY, bodyWidth, bodyHeight);

  // Check if mouse is over the body
  let isMouseOverBody = mouseX > x - bodyWidth / 2 && mouseX < x + bodyWidth / 2 && mouseY > y && mouseY < y + bodyHeight;

  // Cat head
  let headSize = 100;
  let headX = bodyX;
  let headY = bodyY - bodyHeight / 2 - headSize / 2;

  if (isMouseOverBody) {
    headY -= 50;
  }

  ellipse(headX, headY, headSize, headSize);

  // Cat ears
  let earSize = 30;
  fill(250, 220, 220);
  let leftEarX1 = headX - headSize / 2;
  let leftEarY1 = headY - headSize / 3 + 15;
  let leftEarX2 = headX - headSize / 2;
  let leftEarY2 = headY - headSize / 3 - earSize + 5;
  let leftEarX3 = headX - headSize / 5;
  let leftEarY3 = headY - headSize / 2 + 5;

  let rightEarX1 = headX + headSize / 2;
  let rightEarY1 = headY - headSize / 3 + 15;
  let rightEarX2 = headX + headSize / 2;
  let rightEarY2 = headY - headSize / 3 - earSize + 5;
  let rightEarX3 = headX + headSize / 5;
  let rightEarY3 = headY - headSize / 2 + 5;

  triangle(leftEarX1, leftEarY1, leftEarX2, leftEarY2, leftEarX3, leftEarY3);
  triangle(rightEarX1, rightEarY1, rightEarX2, rightEarY2, rightEarX3, rightEarY3);

  // Check if mouse is over the left ear
  let isMouseOverLeftEar = mouseX > x + leftEarX2 && mouseX < x + leftEarX3 && mouseY > y + leftEarY2 && mouseY < y + leftEarY1;

  // Mouth area
  let mouthWidth = 30;
  let mouthHeight = 20;
  let mouthX = headX - mouthWidth / 2;
  let mouthY = headY + 5;

  // Check if mouse is over the mouth area
  let isMouseOverMouth = mouseX > x + mouthX && mouseX < x + mouthX + mouthWidth && mouseY > y + mouthY && mouseY < y + mouthY + mouthHeight;

  // Check if mouse is over the wings (using rectangles)
  let isMouseOverLeftWing = mouseX > x + leftWingX - wingWidth / 2 && mouseX < x + leftWingX + wingWidth / 2 && mouseY > (y + leftWingY - wingHeight / 2) - wingHeight && mouseY < (y + leftWingY + wingHeight / 2) - wingHeight;
  let isMouseOverRightWing = mouseX > x + rightWingX - wingWidth / 2 && mouseX < x + rightWingX + wingWidth / 2 && mouseY > (y + rightWingY - wingHeight / 2) - wingHeight && mouseY < (y + rightWingY + wingHeight / 2) - wingHeight;

  if (isMouseOverLeftEar) {
    // Happy face
    fill(0);
    ellipse(headX - headSize / 6, headY - headSize / 6, 10, 10); // Eyes
    ellipse(headX + headSize / 6, headY - headSize / 6, 10, 10);

    fill(255, 182, 193);
    triangle(headX - 5, headY, headX + 5, headY, headX, headY + 5); // Nose

    noFill();
    stroke(0);
    strokeWeight(1);

    // Cat whiskers
    line(headX - 15, headY + 5, headX - 30, headY - 5);
    line(headX - 15, headY + 10, headX - 30, headY);
    line(headX + 15, headY + 5, headX + 30, headY - 5);
    line(headX + 15, headY + 10, headX + 30, headY);

    // Cat mouth
    arc(headX, headY + 10, 20, 20, 0, PI); // Smile
    
    textSize(25);
    text('0, 1, 1, 2, 3, 5, 8, 11, ?', -500, -250);
    
  } else if (isMouseOverBody){
    // pass
    // some interesting face
    fill(0);
    ellipse(headX - headSize / 6, headY - headSize / 6, 10, 10); // Eyes
    ellipse(headX + headSize / 6, headY - headSize / 6, 10, 10);

    fill(255, 182, 193);
    triangle(headX - 5, headY, headX + 5, headY, headX, headY + 5); // Nose

    noFill();
    stroke(0);
    strokeWeight(1);
    
    fill(250, 150, 150);
    ellipse(headX, headY + 12, 10)
    // line(headX, headY + 5, headX - 5, headY + 10); // Mouth

    // Cat whiskers
    line(headX - 10, headY + 5, headX - 30, headY + 10);
    line(headX - 10, headY + 10, headX - 30, headY + 15);
    line(headX + 10, headY + 5, headX + 30, headY + 10);
    line(headX + 10, headY + 10, headX + 30, headY + 15);

    // Cat nose
    fill(255, 182, 193);
    triangle(headX - 5, headY, headX + 5, headY, headX, headY + 5);
    
    // }
    textSize( 25);
    text('You buy a cow that cost $10. You sell the cow for $13', -500, -280);
      text('You buy the cow for $15. You sell the cow for $17.', -500, -250);
    text('How much did you gain or lose?', -500, -220);
    
  } else if (isMouseOverMouth) {
    // Happy face
    fill(0);
    line(headX - headSize / 6, headY - headSize / 6, (headX - headSize / 6) + 10, (headY - headSize / 6)); // Eyes
    ellipse(headX + headSize / 6, headY - headSize / 6, 10, 10);

    fill(255, 182, 193);
    triangle(headX - 5, headY, headX + 5, headY, headX, headY + 5); // Nose

    noFill();
    stroke(0);
    strokeWeight(1);

    // Cat mouth
    arc(headX, headY + 10, 20, 20, 0, PI); // Smile

    // Cat whiskers
    line(headX - 15, headY + 5, headX - 30, headY - 5);
    line(headX - 15, headY + 10, headX - 30, headY);
    line(headX + 15, headY + 5, headX + 30, headY - 5);
    line(headX + 15, headY + 10, headX + 30, headY);
    
    textSize( 25);
    text('5, 23, 59, 119, 209, ?', -500, -250);
    
  } else if (isMouseOverLeftWing || isMouseOverRightWing) {
    // Annoyed face
    fill(0);
    strokeWeight(2);
    line(headX - headSize / 6 - 5, headY - headSize / 6, headX - headSize / 6 + 5, headY - headSize / 6); // Left eye (straight line)
    line(headX + headSize / 6 - 5, headY - headSize / 6, headX + headSize / 6 + 5, headY - headSize / 6); // Right eye (straight line)

    noFill();
    stroke(0);
    strokeWeight(1);

    fill(255, 182, 193);
    triangle(headX - 5, headY, headX + 5, headY, headX, headY + 5); // Nose

    // Cat whiskers
    line(headX - 10, headY + 5, headX - 30, headY + 10);
    line(headX - 10, headY + 10, headX - 30, headY + 15);
    line(headX + 10, headY + 5, headX + 30, headY + 10);
    line(headX + 10, headY + 10, headX + 30, headY + 15);

    // Cat mouth
    strokeWeight(2);
    line(headX - 5, headY + 7, headX + 5, headY + 7); // Flat mouth
    
    textSize( 25);
    text('hmm...', -500, -250);
    
  } else {
    // Normal face
    fill(0);
    ellipse(headX - headSize / 6, headY - headSize / 6, 10, 10); // Eyes
    ellipse(headX + headSize / 6, headY - headSize / 6, 10, 10);

    fill(255, 182, 193);
    triangle(headX - 5, headY, headX + 5, headY, headX, headY + 5); // Nose

    noFill();
    stroke(0);
    strokeWeight(1);
    line(headX, headY + 5, headX - 5, headY + 10); // Mouth
    line(headX, headY + 5, headX + 5, headY + 10);

    // Cat whiskers
    line(headX - 10, headY + 5, headX - 30, headY + 10);
    line(headX - 10, headY + 10, headX - 30, headY + 15);
    line(headX + 10, headY + 5, headX + 30, headY + 10);
    line(headX + 10, headY + 10, headX + 30, headY + 15);

    // Cat nose
    fill(255, 182, 193);
    triangle(headX - 5, headY, headX + 5, headY, headX, headY + 5);
  }

  // Cat tail
  strokeWeight(1);
  fill(250, 220, 220);
  rect(bodyWidth / 2 - 20, bodyY + 20, 80, 20, 10);

  // Helper circle
  // fill(255, 0, 0);
  // ellipse(0, 0, 5, 5);

  pop();
}

// Cat version 2
function cat2(x, y) {
  push();
  translate(x, y);

  // Cat colors
  stroke(0);
  let catColor = color(254, 225, 232);
  let earColor = color(255, 239, 186)

  // Cat body (vertical oval)
  let bodyWidth = 130;
  let bodyHeight = 180;
  let bodyX = 0;
  let bodyY = 0;
  
  // Bow
  let bowX1 = - bodyWidth/2
  let bowX2 = bodyWidth/2
  let bowY1 = -(bodyHeight/2) + 30
  let bowY2 = -(bodyHeight/2) - 30
  let bowY3 = -(bodyHeight/2)
  
  let bowColor = color(204,226,203)
  fill(bowColor);
  // ellipse(bowX1, bowY1,5,5)
  // ellipse(bowX1, bowY2,5,5)
  // ellipse(0, bowY3,25,25)
  triangle(bowX1, bowY1, bowX1, bowY2, 0, bowY3);
  triangle(bowX2, bowY1, bowX2, bowY2, 0, bowY3);
  
  
  fill(catColor);
  ellipse(bodyX, bodyY, bodyWidth, bodyHeight);
  
  // Cat head
  let headSize = 100;
  let headX = bodyX;
  let headY = bodyY - bodyHeight / 2 - headSize / 2;
  
  ellipse(headX, headY, headSize, headSize);
  
  // Cat ears
  let earSize = 25;
  fill(earColor);
  triangle((headX - headSize / 2) + 5, (headY - headSize / 3) + 10,
           (headX - headSize / 2) + 5, (headY - headSize / 3 - earSize) + 3 , 
           (headX - headSize / 5) + 5, (headY - headSize / 2)+ 3 );
  
  triangle((headX + headSize / 2) - 5, (headY - headSize / 3) + 10 , (headX + headSize / 2) - 5 , (headY - headSize / 3 - earSize) + 3 , (headX + headSize / 5) -5 , (headY - headSize / 2) + 3 ) ;

  // Check if mouse is over the cat's face
  let isMouseOverFace = mouseX > x + headX - headSize / 2 && mouseX < x + headX + headSize / 2 && mouseY > y + headY - headSize / 2 && mouseY < y + headY + headSize / 2;
  
    // Check if mouse is over the cat's body
  let isMouseOverBody = mouseX > x - bodyWidth / 2 && mouseX < x + bodyWidth / 2 && mouseY > y - bodyHeight / 2 && mouseY < y + bodyHeight / 2;
  
  
  if (isMouseOverFace) {
    // Funny face
    fill(0);
    ellipse(headX - headSize / 6, headY - headSize / 6, 15, 15); // Eyes
    ellipse(headX + headSize / 6, headY - headSize / 6, 15, 15);

    fill(255, 182, 193);
    triangle(headX - 5, headY, headX + 5, headY, headX, headY + 10); // Nose
    
    noFill();
    stroke(0);
    strokeWeight(1);
    arc(headX, headY + 20, 30, 20, 0, PI); // Big smile
    
    // Funny whiskers
    line(headX - 10, headY + 5, headX - 40, headY + 15);
    line(headX - 10, headY + 10, headX - 40, headY + 20);
    line(headX + 10, headY + 5, headX + 40, headY + 15);
    line(headX + 10, headY + 10, headX + 40, headY + 20);
    
    } else if (isMouseOverBody) {
    // Purring face
    fill(0);
    ellipse(headX - headSize / 6, headY - headSize / 6, 10, 10); // Eyes
    ellipse(headX + headSize / 6, headY - headSize / 6, 10, 10);

    fill(255, 182, 193);
    triangle(headX - 5, headY, headX + 5, headY, headX, headY + 5); // Nose
    
    noFill();
    stroke(0);
    strokeWeight(1);
    arc(headX, headY + 5, 20, 10, 0, PI); // Smile with closed mouth
    
    // Whiskers
    line(headX - 10, headY + 5, headX - 30, headY + 10);
    line(headX - 10, headY + 10, headX - 30, headY + 15);
    line(headX + 10, headY + 5, headX + 30, headY + 10);
    line(headX + 10, headY + 10, headX + 30, headY + 15);
      
  } else {
    // Normal face
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
  }
  
  // Cat legs with paws (inside the body)
  let legWidth = 20;
  let legHeight = 50;
  let pawSize = 20;

  // Front left leg
  fill(catColor);
  rect(bodyX - bodyWidth / 4, bodyY + bodyHeight / 4 - legHeight / 2, legWidth, legHeight);
  ellipse(bodyX - bodyWidth / 4 + legWidth / 2, bodyY + bodyHeight / 4 + legHeight / 2, pawSize, pawSize);

  // Front right leg
  rect(bodyX + bodyWidth / 4 - legWidth, bodyY + bodyHeight / 4 - legHeight / 2, legWidth, legHeight);
  ellipse(bodyX + bodyWidth / 4 - legWidth / 2, bodyY + bodyHeight / 4 + legHeight / 2, pawSize, pawSize);

  // Cat tail
  // fill(earColor);
  rect(bodyX + bodyWidth / 2, bodyY - 20, 20, 80, 10);
  
  
  
  // Middle of the bow 
  fill(bowColor)
  rect(bowX1/2 + 12, bowY2 + 24, 40, 15);
  
  
  // Helper circle
  // fill(bowColor);
  // ellipse(0, 0, 5, 5);
  
  
  

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
  let frontLeftLegX = bodyX - bodyWidth / 4;
  let frontLeftLegY = bodyY + bodyHeight / 2 - legHeight / 2;
  rect(frontLeftLegX, frontLeftLegY, legWidth, legHeight);
  
  ellipse(frontLeftLegX + legWidth / 2, (frontLeftLegY + legHeight / 2) + 20 , pawSize, pawSize);


  // Front right leg
  rect(bodyX + bodyWidth / 4 - legWidth, bodyY + bodyHeight / 2 - legHeight / 2, legWidth, legHeight);
  ellipse(bodyX + bodyWidth / 4 - legWidth / 2, (bodyY + bodyHeight / 2 + legHeight / 2) - 5, pawSize, pawSize);

  // Body
  ellipse(bodyX, bodyY, bodyWidth, bodyHeight);
  
  // Cat head
  let headSize = 100;
  let headX = bodyX - bodyWidth / 2 + 20;
  let headY = bodyY - bodyHeight / 4;
  
  ellipse(headX, headY, headSize, headSize);
  
  // Cat ears
  let earSize = 25;
  fill(250, 220, 220);
  triangle((headX - headSize / 2) + 5, (headY - headSize / 3) + 10,
           (headX - headSize / 2) + 5, (headY - headSize / 3 - earSize) + 3 , 
           (headX - headSize / 5) + 5, (headY - headSize / 2)+ 3 );
  
  triangle((headX + headSize / 2) - 5, (headY - headSize / 3) + 10 , (headX + headSize / 2) - 5 , (headY - headSize / 3 - earSize) + 3 , (headX + headSize / 5) -5 , (headY - headSize / 2) + 3 ) ;
  
  
  // Check if mouse is over the tail
  let tailX = x + bodyWidth / 2;
  let tailY = y - 10;
  let tailWidth = 80;
  let tailHeight = 20;
  let isMouseOverTail = mouseX > tailX && mouseX < tailX + tailWidth && mouseY > tailY && mouseY < tailY + tailHeight;
  
  
   // Check if mouse is over the body
  let isMouseOverBody = mouseX > x - bodyWidth / 2 && mouseX < x + bodyWidth / 2 && mouseY > y - bodyHeight / 2 && mouseY < y + bodyHeight / 2;
  
  // Check if mouse is over leg
  let isMouseOverFrontLeftLeg = mouseX > x + frontLeftLegX && mouseX < x + frontLeftLegX + legWidth && mouseY > y + frontLeftLegY && mouseY < y + frontLeftLegY + legHeight;

  
  
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
    
    stroke(1);
    textSize(25);
    text('15, 29, 56, 108, 208', -100, -250);
    
    
  } else if (isMouseOverBody) {
    // Very pleasant face
    fill(0);
    ellipse(headX - headSize / 6, headY - headSize / 6, 14, 14); // Eyes
    ellipse(headX + headSize / 6, headY - headSize / 6, 14, 14);

    fill(255, 182, 193);
    triangle(headX - 5, headY, headX + 5, headY, headX, headY + 5); // Nose
    
    noFill();
    stroke(0);
    strokeWeight(1);
    arc(headX, headY + 10, 30, 20, 0, PI); // Big smile
    
  } else if (isMouseOverFrontLeftLeg) {
    // pass
    // Input face with angry spiral whiskers here
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
    rect(headX - 10, headY + 10, 20, 10)
    // line(headX - 10, headY + 10, headX - 5, headY + 5); // Mouth
    // line(headX + 10, headY + 10, headX + 5, headY + 5);
    
    stroke(1);
    textSize(25);
    text('1, 0, 1, -1, 2, ?', -100, -250);
    
    
  } else {
    // Normal face
    fill(0);
    ellipse(headX - headSize / 6, headY - headSize / 6, 11, 11); // Eyes
    ellipse(headX + headSize / 6, headY - headSize / 6, 11, 11);

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
  strokeWeight(1);
  fill(catColor);
  rect(bodyX + bodyWidth / 2, bodyY - 10, 80, 20, 10);

  
  // helper circle
  // fill('red')
  // ellipse(0,0,5)
  pop();
}

function catToy(x,y){
  
}


function mousePressed(){ // will be automatically called ONCE with mouse is pressed
  if(mouseX > 180 && mouseX < 230 && mouseY > 200 && mouseY < 250){
    answer = [];
    // the mouse was clicked and
    // the click was on the button
  }

}

function openingScene(){
  
}


function painting1(){
   for (let i = 0; i < 100; i++) {
    let x = random(width);
    let y = random(height);
    let w = random(10, 50);
    let h = random(10, 50);
    
    let shapeType = random(3); // Randomly choose between 0 and 2
    
    if (shapeType < 1) {
      // Draw a circle
      fill(random(255), random(255), random(255), 150); // Semi-transparent
      noStroke();
      ellipse(x, y, w, w);
    } else if (shapeType < 2) {
      // Draw a rectangle
      fill(random(255), random(255), random(255), 150); // Semi-transparent
      noStroke();
      rect(x, y, w, h);
    } else {
      // Draw a line
      stroke(random(255), random(255), random(255), 150); // Semi-transparent
      line(x, y, x + w, y + h);
    }
  }
}

function painting2(){
  let circleX = random(0, width);
  let circleY = random(0, height);
  let circleWidth = random(50,100);
  let colorCircle1 = color(random(230,255), random(230,255), 255);
  let colorCircle2 = color(random(230,255), 255, random(230,255));
  let colorCircle3 = color(255, random(230,255), random(230,255));
  let colorCircle4 = color(255, 255, random(230,255));
  
  
  noStroke();
  let speedCircle = random(1,10);
  if(speedCircle > 9.5){
  fill(colorCircle1);
  circle(circleX, circleY, circleWidth);
  } else if(speedCircle > 9){
  fill(colorCircle2);
  circle(circleX, circleY, circleWidth);
  fill(colorCircle3);
  rect(circleX, circleY,circleWidth,circleWidth )
} else if(speedCircle > 8.5){
  fill(colorCircle2);
  circle(circleX, circleY, circleWidth);
} else if(speedCircle > 8){
  fill(colorCircle3);
  circle(circleX, circleY, circleWidth);
} else if(speedCircle > 7.5){
  fill(colorCircle4);
  circle(circleX, circleY, circleWidth);
  }else if(speedCircle > 7.4){
    background(255);
  }
}

function painting3(){
  background(0);
  fill(255);

  for (let i = 0; i < 20; i++) {
    let offset = i * 0.9;
    let sinOutput = sin(angle + offset); // between -1 and 1
    let cosOutput = cos(angle + offset); // between -1 and 1
    
    let orbitX = map(sinOutput, -1, 1, random(40, 280), random(320, 680));
    let orbitY = map(cosOutput, -1, 1, random(40, 100), random(120, 580));
    
    circle(orbitX, orbitY, random(3, 10));
  }
  
  angle += 0.05;
}

function painting4(){
  background(0, 50); // Black background with slight transparency
  
  for (let i = 0; i < 100; i++) {
    let x = random(width);
    let y = random(height);
    let size = random(10, 20);
    let colorR = random(255);
    let colorG = random(255);
    let colorB = random(255);
    
    fill(colorR, colorG, colorB, 150);
    circle(x, y, size);
  }
  
}
function painting5(){
  
  
  for (let i = 0; i < 50; i++) {
      let sinOutput = sin(angle); 
  let dark = map(sinOutput, -1, 1, 0, 255); 
  background(dark, 200); // translucent
  
  angle += 0.0001; 
    
    let x = random(width);
    let y = random(height);
    let w = random(10, 20);
    let h = random(50, 200);
    
    // Generate pastel colors by setting random values between 200 and 255
    let colorR = random(200, 255);
    let colorG = random(200, 255);
    let colorB = random(200, 255);
    
    fill(colorR, colorG, colorB, 150);
    rect(x, y, w, h);
  }
}

function flower(x,y){
  push();
  translate(x,y);
  
  fill(255,128,133)
  circle(8,10,15);
  circle(13,-5,15);
  circle(-13,-5,15);
  circle(-8,10,15);
  circle(0,-13,15);
  
  fill(255, 197, 50)
  circle(0,0,15);
  
  pop();
}

function flowerMove(x,y, a, b, c){
  // circle 1
  push();
  translate(x,y);
  let sinOutput = sin(angle); // between -1 and 1
  let flowerX = map(sinOutput, -1, 1, a, b);
  let flowerY = map(sinOutput, -1, 1, a, b);
  // let flowerZ = map(flowerX, 20, 100, 30, 200)
  flower(flowerX, random(0,1));
  // display text
  fill(0);
  // text(round(circle1X), circle1X, height/2);
  
  angle = angle + 0.005;
  pop();
}

function flowerBackground(){
  flowerMove(0,400, 20,100);
  flowerMove(200,450, 20,50);
  flowerMove(400,400, 20,100);
  flowerMove(500,470, 20,50);
  flowerMove(400,400, 10,20);
  flowerMove(600,470, 20,100);
}

function cloudPop(x,y){
  push();
  translate(x,y);
  
    for(let dia = 10;  dia < 130; dia+=5){
    noStroke();
    fill(255, 8); // second value is transparency
    circle(x, y, dia)
  }
  
  pop();
}

function cloudMove(x,y){
  push();
  translate(x,y);
  let sinOutput = sin(angle); // between -1 and 1
  let flowerX = map(sinOutput, -1, 1, -10, 50);
  let flowerY = map(sinOutput, -1, 1, -10, 10);
  // let flowerZ = map(flowerX, 20, 100, 30, 200)
  cloudPop(flowerX, random(0,3));
  // display text
  fill(0);
  // text(round(circle1X), circle1X, height/2);
  
  angle = angle + 0.0000000000001;
  pop();
}


function cloudBackground(){
  // push();
  // translate(x,y);
  cloudMove(200,100);
  cloudMove(250,70);
  cloudMove(300,170);
  cloudMove(300,130);
  cloudMove(270,150);
  cloudMove(600,250);
  cloudMove(600,150);
  cloudMove(400,150);
  cloudMove(450,200);
  cloudMove(450,0);
  cloudMove(450,150);
  cloudMove(400,50);
  cloudMove(500,50);
  cloudMove(700,150);
  cloudMove(700,100);
  cloudMove(650,50);
  cloudMove(650,100);
  cloudMove(50,50);
  cloudMove(150,100);
  cloudMove(0,50);
  cloudMove(50,200);
  cloudMove(-150,100);
  cloudMove(0,50);
  cloudMove(-50,200);
    cloudMove(800,100);
  cloudMove(850,70);
  cloudMove(900,170);
  cloudMove(900,130);

  // pop();
}

function timeChange(){
  let sinOutput = sin(angle); 
  let blueChannel = map(sinOutput, -1, 1, 210, 240);
  let redChannel = map(sinOutput, -1, 1, 240, 220);
  let greenChannel = map(sinOutput, -1, 1, 230, 250);
  let dark = map(sinOutput, -1, 1, 0, 255);
  background(redChannel,greenChannel,blueChannel);
  //background(dark);
  
  angle += 0.00001;
}

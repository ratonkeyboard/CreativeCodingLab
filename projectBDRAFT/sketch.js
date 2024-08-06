let canvas;
let offsetX = 0;
let offsetY = 0;
const moveAmount = 5; // Amount to move the canvas with each step
let moveInterval;

// Define objects
let objects = [
    { type: 'circle', x: 200, y: 200, size: 100, description: 'This is a blue circle.' },
    { type: 'square', x: 400, y: 200, size: 100, description: 'This is a red square.' },
    { type: 'circle', x: 600, y: 200, size: 100, description: 'This is another blue circle.' },
    { type: 'square', x: 800, y: 200, size: 100, description: 'This is another red square.' }
];

let selectedObject = null;

function setup() {
    canvas = createCanvas(900, 400);
    canvas.parent('canvasParent');
    canvas.mousePressed(handleMousePressed); // Add mouse pressed handler
}

function draw() {
    background(255);

    // Draw objects
    objects.forEach(obj => {
        if (obj.type === 'circle') {
            fill(230, 230, 255);
            circle(obj.x + offsetX, obj.y + offsetY, obj.size);
        } else if (obj.type === 'square') {
            fill(255, 100, 100);
            rect(obj.x + offsetX - obj.size / 2, obj.y + offsetY - obj.size / 2, obj.size, obj.size);
        }
    });

    // Draw description box if an object is selected
    if (selectedObject) {
        fill(255);
        stroke(0);
        rect(50, 50, 200, 100);
        fill(0);
        textSize(16);
        text(selectedObject.description, 60, 80, 180, 80);
    }
}

function moveCanvas(direction) {
    switch (direction) {
        case 'up':
            offsetY += moveAmount;
            break;
        case 'down':
            offsetY -= moveAmount;
            break;
        case 'left':
            offsetX += moveAmount;
            break;
        case 'right':
            offsetX -= moveAmount;
            break;
    }
}

function startMoving(direction) {
    if (moveInterval) {
        clearInterval(moveInterval);
    }
    moveInterval = setInterval(() => {
        moveCanvas(direction);
        draw(); // Update the canvas
    }, 50);
}

function stopMoving() {
    clearInterval(moveInterval);
}

function handleMousePressed() {
    let found = null;
    objects.forEach(obj => {
        let distance = dist(mouseX - offsetX, mouseY - offsetY, obj.x, obj.y);
        if (obj.type === 'circle' && distance < obj.size / 2) {
            found = obj;
        } else if (obj.type === 'square' &&
                   mouseX - offsetX > obj.x - obj.size / 2 &&
                   mouseX - offsetX < obj.x + obj.size / 2 &&
                   mouseY - offsetY > obj.y - obj.size / 2 &&
                   mouseY - offsetY < obj.y + obj.size / 2) {
            found = obj;
        }
    });
    selectedObject = found;
}

// Event listeners for the buttons
document.getElementById('upButton').addEventListener('mousedown', () => startMoving('up'));
document.getElementById('upButton').addEventListener('mouseup', stopMoving);
document.getElementById('upButton').addEventListener('mouseleave', stopMoving);

document.getElementById('downButton').addEventListener('mousedown', () => startMoving('down'));
document.getElementById('downButton').addEventListener('mouseup', stopMoving);
document.getElementById('downButton').addEventListener('mouseleave', stopMoving);

document.getElementById('leftButton').addEventListener('mousedown', () => startMoving('left'));
document.getElementById('leftButton').addEventListener('mouseup', stopMoving);
document.getElementById('leftButton').addEventListener('mouseleave', stopMoving);

document.getElementById('rightButton').addEventListener('mousedown', () => startMoving('right'));
document.getElementById('rightButton').addEventListener('mouseup', stopMoving);
document.getElementById('rightButton').addEventListener('mouseleave', stopMoving);

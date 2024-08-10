let canvas;
let offsetX = 0;
let offsetY = 0;
const moveAmount = 5; // Amount to move the canvas with each step
let moveInterval;

let cow1; // global cow instance
let cowIMG;  // Global var to load cow image
let chickenIMG;

let animals = [];  // Q: So what get stored in this array? What is AN INSTANCE of cow/chicken/whatever like?
let numAnimals = 4;

function preload() { // function to load the assets, defind before setup function
    // cowIMG = loadImage("assets/cow-poster.png");
    // chickenIMG = loadImage("assets/chicken_480.png");
}

// Define a class for movable objects
class MovableObject {
    constructor(type, x, y, size, description) {
        this.type = type;
        this.x = x;
        this.y = y;
        this.size = size;
        this.description = description;
        this.isDragged = false;
        this.dragOffsetX = 0; // Offset for dragging
        this.dragOffsetY = 0; // Offset for dragging
    }

    display() {
        if (this.type === 'circle') {
            fill(230, 230, 255);
            circle(this.x + offsetX, this.y + offsetY, this.size);
        } else if (this.type === 'square') {
            fill(255, 100, 100);
            rect(this.x + offsetX - this.size / 2, this.y + offsetY - this.size / 2, this.size, this.size);
        }
    }

    checkIfPressed() {
        let distance = dist(mouseX - offsetX, mouseY - offsetY, this.x, this.y);
        if (this.type === 'circle' && distance < this.size / 2) {
            this.isDragged = true;
            // Calculate the offset
            this.dragOffsetX = (mouseX - offsetX) - this.x;
            this.dragOffsetY = (mouseY - offsetY) - this.y;
        } else if (this.type === 'square' &&
            mouseX - offsetX > this.x - this.size / 2 &&
            mouseX - offsetX < this.x + this.size / 2 &&
            mouseY - offsetY > this.y - this.size / 2 &&
            mouseY - offsetY < this.y + this.size / 2) {
            this.isDragged = true;
            // Calculate the offset
            this.dragOffsetX = (mouseX - offsetX) - this.x;
            this.dragOffsetY = (mouseY - offsetY) - this.y;
        }
    }

    update() {
        if (this.isDragged) {
            // Update position based on mouse position and the calculated offsets
            this.x = mouseX - offsetX - this.dragOffsetX; 
            this.y = mouseY - offsetY - this.dragOffsetY;
        }
    }
}

let objects = [
    new MovableObject('circle', 200, 200, 100, 'This is a blue circle.'),
    new MovableObject('square', 400, 200, 100, 'This is a red square.'),
    new MovableObject('circle', 600, 200, 100, 'This is another blue circle.'),
    new MovableObject('square', 800, 200, 100, 'This is another red square.')
];

let selectedObject = null;

function setup() {
    canvas = createCanvas(900, 400);
    canvas.parent('canvasParent');
    canvas.mousePressed(handleMousePressed); // Add mouse pressed handler
}

function draw() {
    background(255);

    // Update and draw objects
    objects.forEach(obj => {
        obj.update();
        obj.display();
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
        obj.checkIfPressed(); // Check if the object is pressed
        if (obj.isDragged) {
            found = obj; // Keep reference to the dragged object
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

// Mouse released event
function mouseReleased() {
    objects.forEach(obj => {
        obj.isDragged = false; // Stop dragging the object
    });
}

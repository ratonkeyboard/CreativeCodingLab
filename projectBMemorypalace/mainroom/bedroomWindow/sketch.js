let canvas;
let offsetX = 0;
let offsetY = 0;
const moveAmount = 20; // Amount to move the canvas with each step
const boundary = {
    left: -1000,
    right: 1000,
    top: -500,
    bottom: 500
};
let moveInterval;

let deskIMG;  // Global var to load cow image

let objects = [];  // Array to store movable objects
let selectedObject = null; // Track the selected object for description

function preload() { // Load the assets before setup
    deskIMG = loadImage("assets/desk.png");
    shelfIMG = loadImage("assets/shelf.png");
    shelf2IMG = loadImage("assets/shelf2.png");
    window1IMG = loadImage("assets/window.png");
    teddyIMG = loadImage("assets/teddy.png");
    flowerIMG = loadImage("assets/flower.png"); 
    flower1IMG = loadImage("assets/flower1.png"); 
}

// Define a class for movable objects
class MovableObject {
    constructor(img, x, y, sizex, sizey, description) {
        this.photo = img;
        this.x = x;
        this.y = y;
        this.sizex = sizex;
        this.sizey = sizey;
        this.description = description;
        this.isDragged = false;
        this.dragOffsetX = 0; // Offset for dragging
        this.dragOffsetY = 0; // Offset for dragging
    }

    display() {
        // Draw the image centered at (this.x, this.y)
        image(this.photo, this.x + offsetX - this.sizex / 2, this.y + offsetY - this.sizey / 2, this.sizex, this.sizey);
    }

    checkIfPressed() {
        if (
            mouseX - offsetX > this.x - this.sizex / 2 &&
            mouseX - offsetX < this.x + this.sizex / 2 &&
            mouseY - offsetY > this.y - this.sizey / 2 &&
            mouseY - offsetY < this.y + this.sizey / 2
        ) {
            this.isDragged = true; // Start dragging
            this.dragOffsetX = mouseX - offsetX - this.x; // Calculate offset
            this.dragOffsetY = mouseY - offsetY - this.y; // Calculate offset
            selectedObject = this; // Set the selected object for description
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

function setup() {
    canvas = createCanvas(1200, 800);
    canvas.parent('canvasParent');
    canvas.mousePressed(handleMousePressed);
    canvas.mouseReleased(mouseReleased);

//________________________________________________________________________________________________________________________
//________________________________________________________________________________________________________________________


    // Initialize objects
    objects.push(new MovableObject(window1IMG, 582, 407, 1200, 800, 'This is flower painting.'));
    objects.push(new MovableObject(flower1IMG, 431, 680, 200, 150, 'This is my closet.'));


    // Add event listeners for keyboard arrow keys
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

//________________________________________________________________________________________________________________________
//________________________________________________________________________________________________________________________




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
        text(selectedObject.description, 60, 80, 180, 40);
        text(`X: ${selectedObject.x.toFixed(2)}`, 60, 120);
        text(`Y: ${selectedObject.y.toFixed(2)}`, 60, 140);
    }
}

function moveCanvas(direction) {
    switch (direction) {
        case 'up':
            if (offsetY < boundary.bottom - height / 2) {
                offsetY += moveAmount;
            }
            break;
        case 'down':
            if (offsetY > boundary.top + height / 2) {
                offsetY -= moveAmount;
            }
            break;
        case 'left':
            if (offsetX < boundary.right - width / 2) {
                offsetX += moveAmount;
            }
            break;
        case 'right':
            if (offsetX > boundary.left + width / 2) {
                offsetX -= moveAmount;
            }
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
    // Loop through objects in reverse order to prioritize the top object
    for (let i = objects.length - 1; i >= 0; i--) {
        objects[i].checkIfPressed(); 
        if (objects[i].isDragged) break; // Stop if an object is being dragged
    }
}

function mouseReleased() {
    objects.forEach(obj => {
        obj.isDragged = false; // Stop dragging the object
    });
    selectedObject = null; // Clear the selected object when mouse is released
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

// Handle key down events
function handleKeyDown(event) {
    switch (event.key) {
        case 'ArrowUp':
            event.preventDefault();
            startMoving('up');
            break;
        case 'ArrowDown':
            event.preventDefault();
            startMoving('down');
            break;
        case 'ArrowLeft':
            event.preventDefault();
            startMoving('left');
            break;
        case 'ArrowRight':
            event.preventDefault();
            startMoving('right');
            break;
    }
}

// Handle key up events
function handleKeyUp(event) {
    switch (event.key) {
        case 'ArrowUp':
        case 'ArrowDown':
        case 'ArrowLeft':
        case 'ArrowRight':
            event.preventDefault();
            stopMoving();
            break;
    }
}

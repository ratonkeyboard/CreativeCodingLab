// OPTION + SHIFT + F TO CLEAN UP THE CODE!!!!!

let cow1; // global cow instance
let cowIMG;  // Global var to load cow image
let chickenIMG;

let animals = [];  // Q: So what get stored in this array? What is AN INSTANCE of cow/chicken/whatever like?
let numAnimals = 4;

function preload() { // function to load the assets, defind before setup function
    cowIMG = loadImage("assets/cow-poster.png");
    chickenIMG = loadImage("assets/chicken_480.png");
}

function setup() {
    let cnv = createCanvas(windowWidth, windowHeight);
    cnv.parent("canvas-parent");

    // cow1 = new Cow(300, 200, cowIMG); // instantiate cow object
    // console.log(cow1)

    // MAKE INITIAL COWS and put the into the cows array
    for (let i = 0; i < numAnimals; i++) {
        let ranX = random(50, (width - 50));
        let ranY = random(50, height / 2)
        if (random() < 0.5) {
            let oneCow = new Animal(ranX, ranY, cowIMG, "cow");
            animals.push(oneCow)
        } else {
            let oneChicken = new Animal(ranX, ranY, chickenIMG, "chicken");
            animals.push(oneChicken)
        }

    }
    console.log(animals)
}

function draw() {
    background(220, 50, 120);
    // cow1.display(); // display the cow
    // cow1.update(); // update the cow

    // DO STUFF FOR EACH COW --> loop over the cows array
    for (let i = 0; i < animals.length; i++) {
        animals[i].display();
        animals[i].update();
    }


    line(0, height / 2, width, height / 2);
    line(width / 2, height / 2, width / 2, height);



}

class Animal {
    constructor(startX, startY, cowimg, animalType) {
        this.x = startX;
        this.y = startY;
        this.photo = cowimg;
        this.scaleFactor = random(0.4, 0.5);

        this.xSpeed = 1;
        this.ySpeed = 1;

        this.type = animalType;
        this.isDragged = false;
    }
    update() {
        if (this.isDragged == true) {
            this.x = mouseX;
            this.y = mouseY;
        }


        // Dance if in the right box
        if (this.x < (width/2) && this.y > (height/2) && this.animalType == 'cow') {
            this.x += random(-10, 10);
        }

        if (this.x > (width/2) && this.y > (height/2) && this.animalType == 'chicken') {
            this.x += random(-10, 10);
        }

    }
    display() {
        push();
        translate(this.x, this.y);
        scale(this.scaleFactor);

        // Dragging area (a square over the animal)
        if (this.isDragged == true) {
            fill(255, 0, 0);
        } else {
            fill(255);
        }
        rect(-150, -280, 300, 300);

        // we reposition the img to 
        // better fit this object's origin point (this.x, this.y)
        let imgW = this.photo.width;
        let imgH = this.photo.height;
        //       the img      x        y 
        image(this.photo, -imgW / 2, -imgH + 90);


        fill("blue");
        circle(0, 0, 5);

        pop();
    }

    checkIfPressed() {
        // Idea is checking a square area over each of the animal
        if (mouseX > this.x - (150) * this.scaleFactor &&
            mouseX < this.x + (150) * this.scaleFactor &&
            mouseY > this.y - (280) * this.scaleFactor &&
            mouseY < this.y + (20) * this.scaleFactor) {
            console.log('correct location');
            this.isDragged = true;
        }

        // Checking the y axis
        // if(mouseY > this.y - (280)*this.scaleFactor && mouseY < this.y + (20)*this.scaleFactor){
        //     console.log('correct y');
        //     this.isDragged = true;
        // }

    }
}


// Mouse pressed is function on mousedown, mouse release fires on mouse being released
function mousePressed() {
    console.log('Mouse is pressed (not released yet)');
    for (let i = 0; i < animals.length; i++) { // Check over every single animal to see if we are pressing them
        animals[i].checkIfPressed();
    }
}

function mouseReleased() {
    console.log('Mouse just released')
    for (let i = 0; i < animals.length; i++) { // Check over every single animal to see if we are pressing them
        animals[i].isDragged = false;
    }
}
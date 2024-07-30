let birds = [];
let numBirds = 1;

function setup() {
    let cnv = createCanvas(400, 400);
    cnv.parent("canvas-parent");

    for (let i = 0; i < numBirds; i++) {
        birds.push(new Bird(random(100, 400), random(100, 400)));
    }
}

function draw() {
    background(225);

    for (let i = 0; i < birds.length; i++) {
        birds[i].update();
        birds[i].display();
    }

    // delete/clean up loop:
    for (let i = birds.length - 1; i >= 0; i--) {
        if (birds[i].active1 == true) {
            birds[i].moveToDes1();
        }
    }

    for (let i = birds.length - 1; i >= 0; i--) {
        if (birds[i].active2 == true) {
            birds[i].moveToDes2();
        }
    }

}

class Bird {
    constructor(startX, startY) {
        this.x = startX;
        this.y = startY;
        this.dia = 30;
        this.active1 = false;
        this.active2 = false;

        // Location of destination 1
        this.des1X = 100;
        this.des1Y = 100;
        this.disToDes1 = 50;

        // Location of destination 2
        this.des2X = 300;
        this.des2Y = 300;
        this.disToDes2 = 50;
    }


    update() {
        this.checkMouseToDes1();
        this.checkMouseToDes2();
    }

    display() {
        push();
        translate(this.x, this.y);

        fill(30);
        noStroke();
        circle(0, 0, this.dia);

        fill(255, 0, 0);
        // Helper circle for destination 1 
        circle(this.des1X - this.x, this.des1Y - this.y, 10); // Adjust relative position

        // Helper circle for destination 2 
        circle(this.des2X - this.x, this.des2Y - this.y, 10); // Adjust relative position

        // if (this.active1 == true) {
        //     fill("red");
        //     circle(0, 0, 5);
        // }

        pop();
    }

    moveToDes1() {
        let stepLength = 100; 
        let stepX = (this.des1X - this.x) / stepLength;
        let stepY = (this.des1Y - this.y) / stepLength;

        if (Math.abs(this.des1X - this.x) > 30) {
            this.x += stepX;
        }

        if (Math.abs(this.des1Y - this.y) > 30) {
            this.y += stepY;
        }
        text('You will find something interesting there, you know...', 20, 20);
    }

    

    checkMouseToDes1() {
        let distanceToMouse = dist(mouseX, mouseY, this.des1X, this.des1Y);
        if (distanceToMouse < this.disToDes1) {
            this.active1 = true;
            this.active2 = false;
            text('True', 20, 20);
        }
    }


    moveToDes2() {
        let stepLength = 100; 
        let stepX = (this.des2X - this.x) / stepLength;
        let stepY = (this.des2Y - this.y) / stepLength;

        if (Math.abs(this.des2X - this.x) > 30) {
            this.x += stepX;
        }

        if (Math.abs(this.des2Y - this.y) > 30) {
            this.y += stepY;
        }
    }

    

    checkMouseToDes2() {
        let distanceToMouse = dist(mouseX, mouseY, this.des2X, this.des2Y);
        if (distanceToMouse < this.disToDes2) {
            this.active2 = true;
            this.active1 = false;
            text('True', 20, 20);
        }
    }

}

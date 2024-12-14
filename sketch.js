let circles = []; // Array to store circle objects
let randomImage; // To store the current random image
let showImage = false; // Flag to control image display
let imageStartTime; // To track when image started showing
let tickerX;
const TICKER_HEIGHT = 40

function setup() {
  createCanvas(400, 400);
  // Create 5 circles to start
  for (let i = 0; i < 5; i++) {
    circles.push(new Circle());
  }
}

function draw() {
  background(220);
  // Update and display each circle
  for (let circle of circles) {
    circle.move();
    circle.display();
  }
}

// Circle class
class Circle {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.diameter = random(20, 60);
    this.speedX = random(-5, 5);
    this.speedY = random(-5, 5);
    this.color = color(random(255), random(255), random(255));
  }

  move() {
    // Move the circle
    this.x += this.speedX;
    this.y += this.speedY;
    
    // Bounce off edges
    if (this.x < 0 || this.x > width) {
      this.speedX *= -1;
    }
    if (this.y < 0 || this.y > height) {
      this.speedY *= -1;
    }
  }

  display() {
    // Draw the circle
    fill(this.color);
    noStroke();
    circle(this.x, this.y, this.diameter);
  }
}

// Click to add new circles
function mousePressed() {
  circles.push(new Circle());
}

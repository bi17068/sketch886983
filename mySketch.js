function setup() {
	createCanvas(windowWidth, windowHeight);
	background(255);
}

function draw() {
	if (mouseIsPressed) {
		fill(random(250), random(250), random(250), random(50, 200))
		noStroke();
		ellipse(mouseX + random(-80, 80), mouseY + random(-80, 80), random(10, 60));
	}
}
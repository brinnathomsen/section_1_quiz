function setup() {
	// create a place to draw
	createCanvas(640, 360);
}

function draw() {
	// clear the background
	background(0, 0, 50);

	// set the drawing style
	fill(0, 80, 50);
	noStroke();

	// draw ground
	rect(0, 250, 640, 110);

	//draw trees
	for (var i = 0; i < 15; i++) {
		fill(0, 40, 25);
		triangle(-50 + i * 50, 250, 0 + i * 50, 180, 50 + i * 50, 250);
	}

	fill(100, 100, 100);
	ellipse(mouseX, mouseY, 50, 50);
	ellipse(mouseX, mouseY + 20, 100, 50);

	fill(50, 50, 50);
	ellipse(mouseX + 50, mouseY + 20, 10, 10);
	ellipse(mouseX - 50, mouseY + 20, 10, 10);
	ellipse(mouseX + 20, mouseY + 20, 10, 10);
	ellipse(mouseX - 20, mouseY + 20, 10, 10);

	if (!mouseIsPressed) {} else {
		fill(random(0, 100), random(0, 100), random(0, 100));
		rect(0, 250, 640, 110);


		fill(random(0, 255), random(0, 255), random(0, 255));
		ellipse(mouseX + 50, mouseY + 20, 10, 10);
		ellipse(mouseX - 50, mouseY + 20, 10, 10);
		ellipse(mouseX + 20, mouseY + 20, 10, 10);
		ellipse(mouseX - 20, mouseY + 20, 10, 10);



		ellipse(mouseX, 275, 50, 10);
		for (var i = 0; i < 15; i++) {
			fill(0, 30, 15);
			triangle(-50 + i * 50, 250, 0 + i * 50, 180, 50 + i * 50, 250);
		}

	}

}

var s;
var vsize = 20;
var inputUsername = document.getElementById(Username);
var Username = prompt("Please enter your name,", "");
localStorage.setItem(Username, Username);
var drops = [];

var food;

function setup() {
	createCanvas(500, 500);
	s = new Snake();
	frameRate(10);
	pickLocation();
	for (var i = 0; i < 500; i++) {
	 drops[i] = new Snow();
	}
}

function pickLocation() {
  var cols = floor(width/vsize);
  var rows = floor(height/vsize);
  food = createVector(floor(random(cols)), floor(random(rows)));
  food.mult(vsize);
}


function draw() {
	background(	135,206,235);
	
	for (var i = 0; i < 500; i++) {
	  drops[i].fall();
	  drops[i].show();
	}
	
	if (s.eat(food)) {
	  pickLocation();
	  s.total++;
	}
	s.death();
	s.update();
	s.show();
	
	
	fill(211, 211, 211);
	ellipse(food.x, food.y, vsize, vsize);
}

function keyPressed() {
	if (keyCode === UP_ARROW && s.ypseed != 1) {
		s.dir(0, -1);
	} 	else if (keyCode === DOWN_ARROW && s.ypseed != -1) {
			s.dir(0, 1);
	}	else if (keyCode === RIGHT_ARROW && s.xspeed != -1) {
			s.dir(1, 0);
	}	else if (keyCode === LEFT_ARROW && s.xspeed != 1) {
			s.dir(-1, 0);
	}
}

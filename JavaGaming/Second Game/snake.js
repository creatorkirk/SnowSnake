function Snake() {
	this.x = 0;
	this.y = 0;
	this.xspeed = 1;
	this.yspeed = 0;
	this.total = 0;
	this.tail = [];
	
	var currentscore = 0;
	
		this.eat = function(pos) {
		var d = dist(this.x, this.y, pos.x, pos.y);
		if (d < 1) {
		  return true;
		} else {
		  return false;
		}
	}
		
	this.dir = function(x, y) {
		this.xspeed = x;
		this.yspeed = y;
	}
	
	this.death = function() {
	  for (var i = 0; i < this.tail.length; i++) {
	    var pos = this.tail[i];
	    var d = dist(this.x, this.y, pos.x, pos.y);
	    if (d < 1) {
	      var storedValue = localStorage.getItem(Username);
	      var line1 = "GAME OVER";
	      var line2 = storedValue + "'s score:";
	      var line3 = this.currentscore = 17 * this.total
	      window.alert("line1\nline2\nline3");
	      //window.alert(storedValue + "'s score:")
	      //window.alert(this.currentscore = 17 * this.total);
	      //console.log('Starting Over');
	      //console.log(storedValue + "'s score:")
	     // console.log(this.currentscore = 17 * this.total);
	      this.total = 0;
	      this.tail = [];
	    }
	  }
	}
	
	this.update = function() {
	  if (this.total === this.tail.length) {
	    for (var i = 0; i < this.tail.length - 1; i++) {
	      this.tail[i] = this.tail[i + 1];
	    }
	  }
	  this.tail[this.total - 1] = createVector(this.x, this.y);
	  
		this.x = this.x + this.xspeed*vsize;
		this.y = this.y + this.yspeed*vsize;
		
		this.x = constrain(this.x, 0, width-vsize);
		this.y = constrain(this.y, 0, height-vsize);
	}
	
	this.show = function() {
		fill(255);
		for (var i = 0; i < this.tail.length; i++) {
		  ellipse(this.tail[i].x, this.tail[i].y, vsize, vsize)
		}
		ellipse(this.x, this.y, vsize, vsize);
	}
	
}
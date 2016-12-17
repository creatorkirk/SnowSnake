function Snow() {
    this.x  = random(width);
    this.y  = random(-500, -50);
    this.z  = random(0, 20);
    this.len = map(z, 0, 20, 10, 20);
    this.yspeed  = map(z, 0, 20, 1, 20);

    function fall() {
      this.y = this.y + this.yspeed;
      this.grav = map(z, 0, 20, 0, 0.2);
      this.yspeed = this.yspeed + this.grav;
  
      if (y > height) {
        this.y = random(-200, -100);
        this.yspeed = map(z, 0, 20, 4, 10);
      }
    }
  
    function show() {
      this.thick = map(z, 0, 20, 1, 3);
      strokeWeight(thick);
      stroke(138, 43, 226);
      line(x, y, x, y+len);
    }
}
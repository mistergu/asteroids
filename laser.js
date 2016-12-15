function Laser(spos, angle) {
  this.pos = createVector(spos.x,spos.y);
  this.vel = p5.Vector.fromAngle(angle);
  this.vel.mult(8);

  this.update = function() {
    this.pos.add(this.vel);
  }
  this.render = function() {
    push();
    stroke(250);
    strokeWeight(3);
    point(this.pos.x, this.pos.y);
    pop();
  }

  this.hits = function(asteroids) {
    var d = dist(this.pos.x, this.pos.y, asteroids.pos.x, asteroids.pos.y);
      if (d < asteroids.r) {
        return true;
      } else {
        return false;
      }

  }


}

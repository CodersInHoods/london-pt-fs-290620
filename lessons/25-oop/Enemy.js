class Enemy extends Entity {
  color = "red";
  speed = 1;

  moveTowards = (targetX, targetY) => {
    if (this.x < targetX) {
      this.direction.x = this.speed;
    }
    if (this.x > targetX) {
      this.direction.x = -this.speed;
    }
    if (this.y < targetY) {
      this.direction.y = this.speed;
    }
    if (this.y > targetY) {
      this.direction.y = -this.speed;
    }

    this.move();
  };
}

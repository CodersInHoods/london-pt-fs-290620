class FastRect extends Rectangle {
  speed = 2;
  move = () => {
    this.x += this.speed;
    this.y += this.speed;
  };
}

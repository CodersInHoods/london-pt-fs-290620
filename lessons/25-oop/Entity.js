class Entity extends Rectangle {
  direction = {
    x: 0,
    y: 0,
  };

  move = () => {
    this.x += this.direction.x;
    this.y += this.direction.y;
  };
}

class Rectangle {
  x = 0;
  y = 0;
  width = 30;
  height = 30;
  color = "yellow";

  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  draw = (context) => {
    context.fillStyle = this.color;
    context.fillRect(this.x, this.y, this.width, this.height);
  };
}

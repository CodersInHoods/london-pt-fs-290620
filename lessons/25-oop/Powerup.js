function fillCircle(contextObj, x, y, r) {
  contextObj.beginPath();
  contextObj.arc(x, y, r, 0, 2 * Math.PI);
  contextObj.fill();
}

class Powerup {
  x = 0;
  y = 0;
  radius = 5;
  color = "pink";

  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  draw = (context) => {
    context.fillStyle = this.color;
    fillCircle(context, this.x, this.y, this.radius);
  };
}

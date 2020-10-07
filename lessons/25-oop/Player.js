class Player extends Entity {
  color = "blue";
  speed = 2;

  constructor() {
    super(250, 250);

    document.addEventListener("keydown", (event) => {
      if (event.key === "ArrowLeft") {
        this.direction.x = -this.speed;
      }
      if (event.key === "ArrowRight") {
        this.direction.x = this.speed;
      }
      if (event.key === "ArrowUp") {
        this.direction.y = -this.speed;
      }
      if (event.key === "ArrowDown") {
        this.direction.y = this.speed;
      }
    });
    document.addEventListener("keyup", (event) => {
      if (event.key === "ArrowLeft") {
        this.direction.x = 0;
      }
      if (event.key === "ArrowRight") {
        this.direction.x = 0;
      }
      if (event.key === "ArrowUp") {
        this.direction.y = 0;
      }
      if (event.key === "ArrowDown") {
        this.direction.y = 0;
      }
    });
  }

  checkForPowerupCollision = (powerups, destroyCallback) => {
    powerups.forEach((powerup) => {
      if (
        Math.abs(this.x - powerup.x) < powerup.radius &&
        Math.abs(this.y - powerup.y) < powerup.radius
      ) {
        this.speed += 1;
        destroyCallback(powerup);
      }
    });
  };
}

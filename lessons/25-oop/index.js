const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

const enemies = [
  new Enemy(Math.random() * canvas.width, Math.random() * canvas.height),
];
const player = new Player();

const powerups = [];

setInterval(() => {
  enemies.push(
    new Enemy(Math.random() * canvas.width, Math.random() * canvas.height)
  );
}, 1500);

setInterval(() => {
  powerups.push(
    new Powerup(Math.random() * canvas.width, Math.random() * canvas.height)
  );
}, 2500);

const destroyPowerup = (powerup) => {
  const powerupIndex = powerups.indexOf(powerup);

  powerups.splice(powerupIndex, 1);
};

const update = () => {
  //   x++;
  //   y++;
  player.move();
  player.checkForPowerupCollision(powerups, destroyPowerup);
  enemies.forEach((enemy) => enemy.moveTowards(player.x, player.y));
};

const draw = () => {
  context.clearRect(0, 0, canvas.width, canvas.height);

  player.draw(context);
  enemies.forEach((enemy) => enemy.draw(context));
  powerups.forEach((powerup) => powerup.draw(context));
};

const main = () => {
  update();
  draw();

  requestAnimationFrame(main);
};

requestAnimationFrame(main);

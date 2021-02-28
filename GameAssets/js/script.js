var game = {
  canvas: undefined,
  ctx: undefined,
  characterSprite: undefined,
};

game.start = function () {
  game.canvas = document.getElementById("mycanvas");
  game.ctx = game.canvas.getContext("2d");
  game.characterSprite = new Image();
  game.characterSprite.src = "assets/character/player.png";
  game.mainLoop();
};

game.mainLoop = function () {
  game.draw();
  window.setTimeout(game.mainLoop, 5000 / 60);
};

game.draw = function () {
  game.drawImage(game.characterSprite, { x: 1, y: 1 });
};

game.drawImage = function (sprite, position) {
  game.ctx.save();
  game.ctx.translate(position.x, position.y);
  game.ctx.drawImage(sprite, 0, 0, 230, 160);
  game.ctx.restore();
};

document.addEventListener("DOMContentLoaded", game.start);

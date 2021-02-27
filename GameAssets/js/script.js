var Game = {
  canvas: undefined,
  ctx: undefined,
  characterSprite: undefined,
};

Game.start = function () {
  Game.canvas = document.getElementById("mycanvas");
  Game.ctx = Game.canvas.getContext("2d");
  Game.characterSprite = new Image();
  Game.characterSprite.src = "assets/character/player.png";
  Game.mainLoop();
};

Game.mainLoop = function () {
  Game.draw();
  window.setTimeout(Game.mainLoop, 5000 / 60);
};

Game.draw = function () {
  Game.drawImage(Game.characterSprite, { x: 1, y: 1 });
};

Game.drawImage = function (sprite, position) {
  Game.ctx.save();
  Game.ctx.translate(position.x, position.y);
  Game.ctx.drawImage(sprite, 0, 0, 230, 160);
  Game.ctx.restore();
};

document.addEventListener("DOMContentLoaded", Game.start);

"use strict";
var game = {
  canvas: undefined,
  canvasContext: undefined,
  rectanglePosition: 0,
  backgroundRect: undefined,
};

game.start = function () {
  game.canvas = document.getElementById("mycanvas");
  game.canvasContext = game.canvas.getContext("2d");
  game.mainLoop();
};

game.update = function () {
  var date = new Date();
  game.rectanglePosition = date.getTime() % game.canvas.width;
};

game.draw = function () {
  game.canvasContext.fillStyle = game.backgroundRect();
  game.canvasContext.fillRect(game.rectanglePosition, 100, 50, 50);
};

game.clearCanvas = function () {
  game.canvasContext.clearRect(0, 0, game.canvas.width, game.canvas.height);
};

game.mainLoop = function () {
  game.clearCanvas();
  game.update();
  game.draw();
  window.setTimeout(game.mainLoop, 5000 / 60);
};

game.backgroundRect = function () {
  var x = Math.floor(Math.random() * 256);
  var y = Math.floor(Math.random() * 256);
  var z = Math.floor(Math.random() * 256);
  return "rgb(" + x + "," + y + "," + z + ")";
};

document.addEventListener("DOMContentLoaded", game.start);

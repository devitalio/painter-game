//contains objects for particular painter game
//dipatches actions to objects from game loop
"use strict";

function PainterGameWorld ()
{
    this.cannon = new Cannon();
    this.ball = new Ball();
};

PainterGameWorld.prototype.handleInput = function (delta) {
    this.ball.handleInput(delta);
    this.cannon.handleInput(delta);
};

PainterGameWorld.prototype.update = function (delta) {
    this.ball.update(delta);
    this.cannon.update(delta);
};

PainterGameWorld.prototype.draw = function () {
    Canvas2D.drawImage(sprites.background, { x: 0, y: 0 }, 0, { x: 0, y: 0 }); //probably should leave it here as background doesn't really changes
    this.ball.draw();
    this.cannon.draw();
};

PainterGameWorld.prototype.reset = function () {
    this.ball.reset();
    this.cannon.reset();
};

PainterGameWorld.prototype.isOutsideWorld = function (position) {
    return position.x < 0 || position.x > Game.size.width || position.y > Game.size.height;
};

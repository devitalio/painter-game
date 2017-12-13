//contains objects for particular painter game
//dipatches actions to objects from game loop
"use strict";

function PainterGameWorld ()
{
    this.cannon = new Cannon();
    this.ball = new Ball();
    this.can1 = new PaintCan(450, Color.red);
    this.can2 = new PaintCan(575, Color.green);
    this.can3 = new PaintCan(700, Color.blue);
    this.lives = 5;
};

PainterGameWorld.prototype.handleInput = function (delta) {
    this.ball.handleInput(delta);
    this.cannon.handleInput(delta);
};

PainterGameWorld.prototype.update = function (delta) {
    this.ball.update(delta);
    this.cannon.update(delta);
    this.can1.update(delta);
    this.can2.update(delta);
    this.can3.update(delta);
};

PainterGameWorld.prototype.draw = function () {
    Canvas2D.drawImage(sprites.background, Vector2.zero, 0, Vector2.zero); //probably should leave it here as background doesn't really changes
    for (var i = 0; i < this.lives; i++) {
        Canvas2D.drawImage(sprites.lives, new Vector2(i * (sprites.lives.width + 5) + 15, 60), 0, Vector2.zero);
    }
    this.ball.draw();
    this.cannon.draw();
    this.can1.draw();
    this.can2.draw();
    this.can3.draw();
};

PainterGameWorld.prototype.reset = function () {
    this.ball.reset();
    this.cannon.reset();
    this.can1.reset();
    this.can2.reset();
    this.can3.reset();
};

PainterGameWorld.prototype.isOutsideWorld = function (position) {
    return position.x < 0 || position.x > Game.size.width || position.y > Game.size.height;
};

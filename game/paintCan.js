"use strict";

function PaintCan(xposition, targetColor) {
    ThreeColorGameObject.call(this, sprites.can_red, sprites.can_green, sprites.can_blue); //first call superclass constructor
    this.position = new Vector2(xposition, -200);
    this.minVelocity = 30;
    this.targetColor = targetColor;
    this.reset();
};
PaintCan.prototype = Object.create(ThreeColorGameObject.prototype);

PaintCan.prototype.update = function (delta) {
    ThreeColorGameObject.prototype.update.call(this, delta);

    if (this.velocity.y === 0) {
        this.velocity = this.calculateRandomVelocity();
        this.color = this.calculateRandomColor();
    }

    //collision detection
    var ball = Game.gameWorld.ball;
    var distance = ball.position.add(ball.center).substractFrom(this.position).substractFrom(this.center);
    if (Math.abs(distance.x) < this.center.x && Math.abs(distance.y) < this.center.y) {
        this.color = ball.color;
        ball.reset();
    }

    this.rotation = Math.sin(this.position.y / 40 ) * 0.3;

    if (Game.gameWorld.isOutsideWorld(this.position)) {
        if (this.color !== this.targetColor) {
            Game.gameWorld.lives--;
            console.log(Game.gameWorld.lives);
        } else {
            sounds.collect_points.play();
            Game.gameWorld.score += 10;
        }

        this.reset();
    }

    this.minVelocity += 0.01;
};

PaintCan.prototype.reset = function () {
    this.moveToTop();
};

PaintCan.prototype.moveToTop = function () {
    this.position = new Vector2(this.position.x, -200);
    this.velocity = Vector2.zero;
};

PaintCan.prototype.calculateRandomVelocity = function () {
    return new Vector2(0, Math.random() * 30 + this.minVelocity);
};

PaintCan.prototype.calculateRandomColor = function () {
    var randomval = Math.floor(Math.random() * 3);
    if (randomval == 0)
        return Color.red;
    else if (randomval == 1)
        return Color.green;
    else
        return Color.blue;
};

"use strict";

function Ball() {
    ThreeColorGameObject.call(this, sprites.ball_red, sprites.ball_green, sprites.ball_blue); //first call superclass constructor
    this.isShooting = false;
    this.reset();
}
Ball.prototype = Object.create(ThreeColorGameObject.prototype);


Ball.prototype.update = function(delta) {
    ThreeColorGameObject.prototype.update.call(this, delta);

    if (this.isShooting) {
        this.velocity.x *= 0.99;
        this.velocity.y += 6;
    }
    else {
        this.color = Game.gameWorld.cannon.color;
        this.position = Game.gameWorld.cannon.ballPosition.substract(this.center);
    }

    if (Game.gameWorld.isOutsideWorld(this.position))
        this.reset();
};

Ball.prototype.reset = function() {
    this.position = Vector2.zero;
    this.isShooting = false;
};

Ball.prototype.draw = function () {
    if (!this.isShooting) {
        return;
    }

    Canvas2D.drawImage(this.currentColor, this.position, 0, this.origin);
}

Ball.prototype.handleInput = function (delta) {
    if (Mouse.leftPressed && !this.isShooting) {
        this.isShooting = true;
        this.velocity = Mouse.position.substract(this.position.multiply(1.3));

        console.log(this.velocity.toString());
    }
};

"use strict";

function Ball () {
    this.position = Vector2.zero;
    this.velocity = Vector2.zero;
    this.origin = Vector2.zero;
    this.currentColor = sprites.ball_red;
    this.isShooting = false;
}

Ball.prototype.update = function(delta) {
    if (this.isShooting) {

        this.velocity.x *= 0.99;
        this.velocity.y += 6;
        this.position.addTo(this.velocity.multiply(delta));

    } else {

        if (Game.gameWorld.cannon.currentColor == sprites.cannon_red) {
            this.currentColor = sprites.ball_red;
        } else if (Game.gameWorld.cannon.currentColor == sprites.cannon_blue) {
            this.currentColor = sprites.ball_blue;
        } else {
            this.currentColor = sprites.ball_green;
        }

        var center = new Vector2(this.currentColor.width / 2, this.currentColor.height / 2);
        this.position = Game.gameWorld.cannon.ballPosition.substract(center);
    }

    if (Game.gameWorld.isOutsideWorld(this.position))
        this.reset();
};

Ball.prototype.reset = function() {
    this.position = new Vector2();
    this.isShooting = false;
};

Ball.prototype.draw = function () {
    if (!this.isShooting) {
        return;
    }

    Canvas2D.drawImage(this.currentColor, this.position, this.rotation, this.origin);
}

Ball.prototype.handleInput = function (delta) {
    if (Mouse.leftPressed && !this.isShooting) {
        this.isShooting = true;
        this.velocity = Mouse.position.substract(this.position.multiply(1.3));

        console.log(this.velocity.toString());
    }
};

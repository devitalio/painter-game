"use strict";

function Ball () {
    this.position = { x: 0, y: 0 };
    this.velocity = { x: 0, y: 0 };
    this.origin = { x: 0, y: 0 };
    this.currentColor = sprites.ball_red;
    this.isShooting = false;
};

Ball.prototype.update = function(delta) {
    if (this.isShooting) {
        this.velocity.x = this.velocity.x * 0.99;
        this.velocity.y = this.velocity.y + 6;
        this.position.x = this.position.x + this.velocity.x * delta;
        this.position.y = this.position.y + this.velocity.y * delta;
    } else {

        if (Game.gameWorld.cannon.currentColor == sprites.cannon_red)
            this.currentColor = sprites.ball_red;
        else if (Game.gameWorld.cannon.currentColor == sprites.cannon_blue) {
            this.currentColor = sprites.ball_blue;
        }
        else {
            this.currentColor = sprites.ball_green;
        }

        this.position = Game.gameWorld.cannon.ballPosition();
        this.position.x = this.position.x - this.currentColor.width / 2;
        this.position.y = this.position.y - this.currentColor.height / 2;
    }

    if (Game.gameWorld.isOutsideWorld(this.position))
        this.reset();
};

Ball.prototype.reset = function() {
    this.position = { x: 0, y: 0 };
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
        this.velocity.x = Mouse.position.x - this.position.x * 1.3;
        this.velocity.y = Mouse.position.y - this.position.y * 1.3;
        console.log(this.velocity.x +' ' + this.velocity.y)
    }
};

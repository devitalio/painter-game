"use strict";

function PaintCan (xposition) {
    this.position = {x:xposition, y:-200};
    this.velocity = { x: 0, y: 0 };
    this.origin = { x: 0, y: 0 };
    this.currentColor = sprites.can_red;
    this.minVelocity = 30;
    this.reset();
};

PaintCan.prototype.update = function(delta) {
    if (this.velocity.y === 0) {
        this.velocity = this.calculateRandomVelocity();
        this.currentColor = this.calculateRandomColor();
    }

    this.position.x = this.position.x + this.velocity.x * delta;
    this.position.y = this.position.y + this.velocity.y * delta;

    if (Game.gameWorld.isOutsideWorld(this.position)) {
        this.reset();
    }

    this.minVelocity += 0.01;
};

PaintCan.prototype.reset = function () {
    this.moveToTop();
};

PaintCan.prototype.moveToTop = function () {
    this.position = { x: this.position.x, y: -200 };
    this.velocity = { x: 0, y: 0 };
};

PaintCan.prototype.calculateRandomVelocity = function () {
    return { x: 0, y: Math.random() * 30 + this.minVelocity };
};

PaintCan.prototype.calculateRandomColor = function () {
    var randomval = Math.floor(Math.random() * 3);
    if (randomval == 0)
        return sprites.can_red;
    else if (randomval == 1)
        return sprites.can_green;
    else
        return sprites.can_blue;
};

PaintCan.prototype.draw = function () {
    Canvas2D.drawImage(this.currentColor, this.position, 0, this.origin);
}


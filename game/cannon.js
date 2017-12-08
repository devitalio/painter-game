"use strict";

function Cannon () {
    this.position = new Vector2(72, 405);
    this.colorPosition = new Vector2(55, 388);
    this.origin =  new Vector2(34, 34);
    this.currentColor = sprites.cannon_red;
    this.rotation = 0;
};

Cannon.prototype.update = function (delta) { };
Cannon.prototype.reset = function() {
    this.position = new Vector2(72, 405);
};

Cannon.prototype.draw = function () {
    Canvas2D.drawImage(sprites.cannon_barrel, this.position, this.rotation, this.origin);
    Canvas2D.drawImage(this.currentColor, this.colorPosition, 0, new Vector2());
}

Cannon.prototype.handleInput = function (delta) {
    var opposite = Mouse.position.y - this.position.y;
    var adjacent = Mouse.position.x - this.position.x;
    this.rotation = Math.atan2(opposite, adjacent);

    if (Keyboard.key === "g")
        this.currentColor = sprites.cannon_green;
    if (Keyboard.key === "r")
        this.currentColor = sprites.cannon_red;
    if (Keyboard.key === "b")
        this.currentColor = sprites.cannon_blue;
};

Cannon.prototype.ballPosition = function () {
    var opposite = Math.sin(this.rotation) * sprites.cannon_barrel.width * 0.8;
    var adjacent = Math.cos(this.rotation) * sprites.cannon_barrel.width * 0.8;
    return new Vector2( this.position.x + adjacent, this.position.y + opposite);
};

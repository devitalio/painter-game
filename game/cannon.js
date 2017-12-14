"use strict";

function Cannon() {
    ThreeColorGameObject.call(this, sprites.cannon_red, sprites.cannon_green, sprites.cannon_blue); //superclass constructor call
    this.position = new Vector2(72, 405);
    this.origin =  new Vector2(34, 34);
};

Cannon.prototype = Object.create(ThreeColorGameObject.prototype);

Cannon.prototype.update = function (delta) { };

Cannon.prototype.reset = function () {
    this.position = new Vector2(72, 405);
};

Cannon.prototype.draw = function () {
    if (!this.visible)
        return;

    var colorPosition = this.position.substract(this.size.divide(2));
    Canvas2D.drawImage(sprites.cannon_barrel, this.position, this.rotation, this.origin);
    Canvas2D.drawImage(this.currentColor, colorPosition);
}

Cannon.prototype.handleInput = function (delta) {
    var opposite = Mouse.position.y - this.position.y;
    var adjacent = Mouse.position.x - this.position.x;
    this.rotation = Math.atan2(opposite, adjacent);

    if (Keyboard.key === "g")
        this.color = Color.green;
    if (Keyboard.key === "r")
        this.color = Color.red;
    if (Keyboard.key === "b")
        this.color = Color.blue;
};


Object.defineProperty(Cannon.prototype, "ballPosition",
{
    get: function() {
        var opposite = Math.sin(this.rotation) * sprites.cannon_barrel.width * 0.8;
        var adjacent = Math.cos(this.rotation) * sprites.cannon_barrel.width * 0.8;
        return new Vector2(this.position.x + adjacent, this.position.y + opposite);
    }
});

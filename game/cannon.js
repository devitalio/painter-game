"use strict";

function Cannon () {
    this.position = new Vector2(72, 405);
    this.origin =  new Vector2(34, 34);
    this.currentColor = sprites.cannon_red;
    this.rotation = 0;
};

Cannon.prototype.update = function (delta) { };

Cannon.prototype.reset = function () {
    this.position = new Vector2(72, 405);
};

Cannon.prototype.draw = function () {
    var colorPosition = this.position.substract(this.size.divide(2));
    Canvas2D.drawImage(sprites.cannon_barrel, this.position, this.rotation, this.origin);
    Canvas2D.drawImage(this.currentColor, colorPosition, 0, new Vector2());
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

Object.defineProperty(Cannon.prototype, "center",
    {
        get: function() {
            return new Vector2(this.width / 2, this.height / 2);
        }
    });

Object.defineProperty(Cannon.prototype, "size",
{
    get: function() {
        return new Vector2(this.currentColor.width, this.currentColor.height);
    }
});

Object.defineProperty(Cannon.prototype, "height",
{
    get: function() {
        return this.currentColor.height;
    }
});

Object.defineProperty(Cannon.prototype, "width",
{
    get: function () {
        return this.currentColor.width;
    }
});

Object.defineProperty(Cannon.prototype, "ballPosition",
{
    get: function() {
        var opposite = Math.sin(this.rotation) * sprites.cannon_barrel.width * 0.8;
        var adjacent = Math.cos(this.rotation) * sprites.cannon_barrel.width * 0.8;
        return new Vector2(this.position.x + adjacent, this.position.y + opposite);
    }
});

Object.defineProperty(Cannon.prototype,"color",
    {
        get: function() {
            if (this.currentColor === sprites.cannon_red) {
                return Color.red;
            }

            if (this.currentColor === sprites.cannon_blue) {
                return Color.blue;
            }

            if (this.currentColor === sprites.cannon_green) {
                return Color.green;
            }
        },
        set: function(value) {
            if (value === Color.red) {
                this.currentColor = sprites.cannon_red
            }

            if (value === Color.blue) {
                this.currentColor = sprites.cannon_blue;
            }

            if (value === Color.green) {
                this.currentColor = sprites.cannon_green;
            }
        }
});

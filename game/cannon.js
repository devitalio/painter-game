"use strict";

var cannon = {};

cannon.initialize = function () {
    cannon.position = { x: 72, y: 405 };
    cannon.colorPosition = { x: 55, y: 388 };
    cannon.origin = { x: 34, y: 34 };
    cannon.currentColor = sprites.cannon_red;
    cannon.rotation = 0;
};

cannon.update = function (delta) { };
cannon.reset = function () { };

cannon.draw = function () {
    Canvas2D.drawImage(sprites.cannon_barrel, this.position, this.rotation, this.origin);
    Canvas2D.drawImage(this.currentColor, this.colorPosition, 0, { x: 0, y: 0 });
}

cannon.handleInput = function (delta) {
    var opposite = Mouse.position.y - cannon.position.y;
    var adjacent = Mouse.position.x - cannon.position.x;
    cannon.rotation = Math.atan2(opposite, adjacent);

    if (Keyboard.key === "g")
        cannon.currentColor = sprites.cannon_green;
    if (Keyboard.key === "r")
        cannon.currentColor = sprites.cannon_red;
    if (Keyboard.key === "b")
        cannon.currentColor = sprites.cannon_blue;
};

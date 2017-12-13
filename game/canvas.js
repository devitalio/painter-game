"use strict";

var Canvas2D = {
    canvas: undefined,
    canvasContext: undefined
}

Canvas2D.clear = function () {
    this.canvasContext.clearRect(0, 0, this.canvas.width, this.canvas.height);
}

Canvas2D.drawImage = function (sprite, position, rotation, origin) {

    position = typeof position !== 'undefined' ? position : Vector2.zero;
    rotation = typeof rotation !== 'undefined' ? rotation : 0;
    origin = typeof origin !== 'undefined' ? origin : Vector2.zero

    this.canvasContext.save();
    this.canvasContext.translate(position.x, position.y);
    this.canvasContext.rotate(rotation);
    this.canvasContext.drawImage(sprite, 0, 0, sprite.width, sprite.height,
        -origin.x, -origin.y, sprite.width, sprite.height);
    this.canvasContext.restore();
}

Canvas2D.initialize = function(canvas) {
    Canvas2D.canvas = document.getElementById(canvas);
    Canvas2D.canvasContext = Canvas2D.canvas.getContext('2d');
}
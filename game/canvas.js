"use strict";

var Canvas2D = {
    canvas: undefined,
    canvasContext: undefined
}

Canvas2D.clear = function () {
    this.canvasContext.clearRect(0, 0, this.canvas.width, this.canvas.height);
}

Canvas2D.drawImage = function (sprite, position, rotation, origin) {
    this.canvasContext.save();
    this.canvasContext.translate(position.x, position.y);
    this.canvasContext.rotate(rotation);
    this.canvasContext.drawImage(sprite, 0, 0, sprite.width, sprite.height,
        -origin.x, -origin.y, sprite.width, sprite.height);
    this.canvasContext.restore();
}
"use strict";

var Mouse = {
    position: new Vector2(),
    leftDown: false,
    leftPressed: false,
};

Mouse.initialize = function () {
    document.onmousemove = Mouse.handleMouseMove;
    document.onmousedown = Mouse.handelMouseDown;
    document.onmouseup = Mouse.handelMouseUp;
};

Mouse.handelMouseUp = function (evt) {
    if (evt.which === 1)
        Mouse.leftDown = false;
};

Mouse.handelMouseDown = function (evt) {
    if (evt.which === 1) {
        if (!Mouse.leftDown)
            Mouse.leftPressed = true;
        Mouse.leftDown = true;
    }
};

Mouse.handleMouseMove = function (evt) {
    Mouse.position = new Vector2(evt.pageX, evt.pageY);
};

Mouse.reset = function () {
    Mouse.leftPressed = false;
};

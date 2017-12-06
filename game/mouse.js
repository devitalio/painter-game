"use strict";

var Mouse = {
    position: { x: 0, y: 0 },
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
    Mouse.position = { x: evt.pageX, y: evt.pageY };
};

Mouse.reset = function () {
    Mouse.leftPressed = false;
};

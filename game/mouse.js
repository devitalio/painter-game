"use strict";

var Mouse = {
    position: { x: 0, y: 0 },
    leftDown: false,
    leftPressed: false,

    handelMouseDown: function (evt) {
        if (evt.which === 1) {
            if (!Mouse.leftDown)
                Mouse.leftPressed = true;
            Mouse.leftDown = true;
        }
    },

    handelMouseUp: function (evt) {
        if (evt.which === 1)
            Mouse.leftDown = false;
    },

    mouseMove: function (evt) {
        Mouse.position = { x : evt.pageX, y : evt.pageY };
    },

    reset: function () {
        Mouse.leftPressed = false;
    }

}
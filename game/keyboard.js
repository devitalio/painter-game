"use strict";

var Keyboard = { key: -1 };

Keyboard.handleKeyDown = function handleKeyDown(evt) {
    Keyboard.key = evt.key;
};

Keyboard.handleKeyUp = function (evt) {
    Keyboard.key = -1;
};

Keyboard.initialize = function () {
    document.onkeydown = Keyboard.handleKeyDown;
    document.onkeyup = Keyboard.handleKeyUp;
};
"use strict";

var Keyboard = {
    keyDown: undefined,
    handleKeyDown: function(evt) {
        Keyboard.keydown = evt.key;
        //console.log(Keyboard.keydown);
    }
}
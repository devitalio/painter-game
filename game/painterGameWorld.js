//contains objects for particular painter game
//dipatches actions to objects from game loop
"use strict";

var painterGameWorld = {};

painterGameWorld.handleInput = function (delta) {
    ball.handleInput(delta);
    cannon.handleInput(delta);
};

painterGameWorld.update = function (delta) {
    ball.update(delta);
    cannon.update(delta);
};

painterGameWorld.draw = function () {
    Canvas2D.drawImage(sprites.background, { x: 0, y: 0 }, 0, { x: 0, y: 0 }); //probably should leave it here as background doesn't really changes
    ball.draw();
    cannon.draw();
};

painterGameWorld.reset = function () {
    ball.reset();
    cannon.reset();
};

painterGameWorld.isOutsideWorld = function (position) {
    return position.x < 0 || position.x > Game.size.x || position.y > Game.size.y;
};

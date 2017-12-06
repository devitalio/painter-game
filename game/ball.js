"use strict";

var ball = {};

ball.initialize = function () {
    ball.position = { x: 0, y: 0 };
    ball.velocity = { x: 0, y: 0 };
    ball.origin = { x: 0, y: 0 };
    ball.currentColor = sprites.ball_red;
    ball.isShooting = false;
};

ball.update = function (delta) { };

ball.reset = function() {
    ball.position = { x: 0, y: 0 };
    ball.isShooting = false;
};

ball.draw = function () {
    if (!ball.isShooting) {
        return;
    }

    Canvas2D.drawImage(ball.currentColor, ball.position, ball.rotation, ball.origin);
}

ball.handleInput = function (delta) {
    
};

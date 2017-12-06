"use strict";

window.requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
    function (callback) {
        window.setTimeout(callback, 1000 / 60);
    };


var Game = {
    spritesStillLoading: 0,
    gameWorld: undefined
};

Game.start = function (canvas, canvasWidth, canvasHeight) {
    Canvas2D.initialize(canvas);
    Game.size = { width: canvasWidth, height: canvasHeight }; //to refactor to use canvas2D
    Keyboard.initialize();
    Mouse.initialize();
    Game.loadAssets();
    Game.assetLoadingLoop();
};

Game.loadSprite = function (path) {
    var img = new Image();
    img.src = path;
    Game.spritesStillLoading += 1;
    img.onload = function () { Game.spritesStillLoading -= 1; }
    return img;
}

//overload in a specific to game method in app.js
Game.loadAssets = function () { };

Game.initialize = function () { };

Game.assetLoadingLoop = function () {
    if (Game.spritesStillLoading > 0)
        requestAnimationFrame(Game.assetLoadingLoop);
    else {
        Game.initialize();
        requestAnimationFrame(Game.mainLoop);
    }
}

Game.mainLoop = function () {

    var delta = 1 / 60; // wtf ?

    Game.gameWorld.handleInput(delta);
    Game.gameWorld.update(delta);
    Canvas2D.clear();
    Game.gameWorld.draw();
    Mouse.reset();
    requestAnimationFrame(Game.mainLoop);
};


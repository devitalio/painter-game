"use strict";

window.requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
    function (callback) {
        window.setTimeout(callback, 1000 / 60);
    };

function Game_Singleton() {
    this.size = null,
    this.spritesStillLoading = 0;
    this.gameWorld = undefined;
}



Game_Singleton.prototype.start = function (canvas, x ,y) {
    Canvas2D.initialize(canvas);
    console.log('canvas width ' + Canvas2D.canvas.width + ' and canvas height ' + Canvas2D.canvas.height);
    this.size = new Vector2(x, y);
    Keyboard.initialize();
    Mouse.initialize();
    this.loadAssets();
    this.assetLoadingLoop();
};

Game_Singleton.prototype.loadSprite = function (path) {
    var img = new Image();
    img.src = path;
    Game.spritesStillLoading += 1;
    img.onload = function () { Game.spritesStillLoading -= 1; }
    return img;
}

//overload in a specific to game method in app.js
Game_Singleton.prototype.loadAssets = function () { };

Game_Singleton.prototype.initialize = function() {
    Game.gameWorld = new PainterGameWorld();
};

Game_Singleton.prototype.assetLoadingLoop = function () {
    if (Game.spritesStillLoading > 0)
        requestAnimationFrame(Game.assetLoadingLoop);
    else {
        Game.initialize();
        requestAnimationFrame(Game.mainLoop);
    }
}

Game_Singleton.prototype.mainLoop = function () {

    var delta = 1 / 60; // wtf ?

    Game.gameWorld.handleInput(delta);
    Game.gameWorld.update(delta);
    Canvas2D.clear();
    Game.gameWorld.draw();
    Mouse.reset();
    requestAnimationFrame(Game.mainLoop);
};

var Game = new Game_Singleton();

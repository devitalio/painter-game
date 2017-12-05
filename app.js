"use strict";

window.requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
    function (callback) {
        window.setTimeout(callback, 1000 / 60);
    };

var sprites = {};

var Game = {
    backgroundSprite: undefined,
    spriteFolder: './assets/sprites/',
    spritesStillLoading: 0
}

var background = {
    img: undefined,
    initialize: function () { this.img = Game.loadSprite("spr_background.jpg"); },
    draw: function() {
        Canvas2D.drawImage(this.img, { x: 0, y: 0 }, 0, { x: 0, y: 0 });
    }
}

var cannon = {
    barrelSprite: undefined,
    colorPosition: undefined,
    position: undefined,
    origin: undefined,
    currentColor: undefined,
    rotation: 0,
    shouldCalculateAngle : false
}

cannon.initialize = function() {
    cannon.position = { x: 72, y: 405 };
    cannon.colorPosition = { x: 55, y: 388 };
    cannon.origin = { x: 34, y: 34 };
    cannon.currentColor = sprites.cannon_red;
    cannon.rotation = 0;
    cannon.barrelSprite = Game.loadSprite("spr_cannon_barrel.png");
}

cannon.draw = function() {
    Canvas2D.drawImage(this.barrelSprite, this.position, this.rotation, this.origin);
    Canvas2D.drawImage(this.currentColor, this.colorPosition, 0, {x:0, y:0});
}


Game.start = function (canvas) {
    Canvas2D.canvas = document.getElementById(canvas);
    Canvas2D.canvasContext = Canvas2D.canvas.getContext('2d');

    document.onkeydown = Keyboard.handleKeyDown;
    document.onmousemove = Mouse.mouseMove;
    document.onmousedown = Mouse.handelMouseDown;
    document.onmouseup = Mouse.handelMouseUp;

    sprites.cannon_red = Game.loadSprite("spr_cannon_red.png");
    sprites.cannon_green = Game.loadSprite("spr_cannon_green.png");
    sprites.cannon_blue = Game.loadSprite("spr_cannon_blue.png");

    background.initialize();
    cannon.initialize();

    Game.assetLoadingLoop();
};

Game.assetLoadingLoop = function() {
    if (Game.spritesStillLoading > 0)
        requestAnimationFrame(Game.assetLoadingLoop);
    else {
        //Game.initialize();
        Game.mainLoop();
    }
}

Game.loadSprite = function(path) {
    var img = new Image();
    img.src = Game.spriteFolder + path;
    Game.spritesStillLoading += 1;
    img.onload = function () { Game.spritesStillLoading -= 1;}
    return img;
}


Game.mainLoop = function() {
    Game.update();
    Game.draw();
    Mouse.reset();
    requestAnimationFrame(Game.mainLoop);
};

Game.update = function () {

    if (Mouse.leftPressed)
        cannon.calculateAngle = !cannon.calculateAngle;

    if (cannon.calculateAngle) {
        var opposite = Mouse.position.y - cannon.position.y;
        var adjacent = Mouse.position.x - cannon.position.x;
        cannon.rotation = Math.atan2(opposite, adjacent);
    } else {
        cannon.rotation = 0;
    }

    if (Keyboard.keydown === "g")
        cannon.currentColor = sprites.cannon_green;
    if (Keyboard.keydown === "r")
        cannon.currentColor = sprites.cannon_red;
    if (Keyboard.keydown === "b")
        cannon.currentColor = sprites.cannon_blue;
};

Game.draw = function () {
    Canvas2D.clear();
    background.draw();
    cannon.draw();
};
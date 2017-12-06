"use strict";

var sprites = {};

//override from Game.js specific to this game
Game.loadAssets = function () {
    var loadSprite = function (sprite) {
        return Game.loadSprite("./assets/sprites/" + sprite);
    };

    sprites.background = loadSprite("spr_background.jpg");
    sprites.cannon_barrel = loadSprite("spr_cannon_barrel.png");
    sprites.cannon_red = loadSprite("spr_cannon_red.png");
    sprites.cannon_green = loadSprite("spr_cannon_green.png");
    sprites.cannon_blue = loadSprite("spr_cannon_blue.png");
    sprites.ball_red = loadSprite("spr_ball_red.png");
    sprites.ball_green = loadSprite("spr_ball_green.png");
    sprites.ball_blue = loadSprite("spr_ball_blue.png");
};

Game.initialize = function () {

    console.log("Creating game world");
    cannon.initialize();
    ball.initialize();
    Game.gameWorld = painterGameWorld;
};





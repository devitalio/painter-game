"use strict";

var sprites = {};
var sounds = {};

//override from Game.js specific to this game
Game.loadAssets = function () {
    var assetsDir = "./assets/";
    var loadSprite = function (sprite) {
        return Game.loadSprite(assetsDir + "sprites/" + sprite);
    };

    var loadSound = function (sound, looping) {
        return new Sound(assetsDir + "sounds/"+ sound, looping)
    }

    sprites.background = loadSprite("spr_background.jpg");
    sprites.cannon_barrel = loadSprite("spr_cannon_barrel.png");
    sprites.cannon_red = loadSprite("spr_cannon_red.png");
    sprites.cannon_green = loadSprite("spr_cannon_green.png");
    sprites.cannon_blue = loadSprite("spr_cannon_blue.png");
    sprites.ball_red = loadSprite("spr_ball_red.png");
    sprites.ball_green = loadSprite("spr_ball_green.png");
    sprites.ball_blue = loadSprite("spr_ball_blue.png");
    sprites.can_red = loadSprite("spr_can_red.png");
    sprites.can_green = loadSprite("spr_can_green.png");
    sprites.can_blue = loadSprite("spr_can_blue.png");
    sprites.lives = loadSprite("spr_lives.png");
    sprites.gameOver = loadSprite("spr_gameover_click.png");

    sounds.music = loadSound("snd_music", true);
    sounds.collect_points = loadSound("snd_collect_points", false);
    sounds.shoot_paint = loadSound("snd_shoot_paint", false);
};


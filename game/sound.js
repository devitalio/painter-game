"use strict";

function Sound(sound, looping) {
    this.looping = typeof looping !== 'undefined' ? looping : false;
    this.snd = new Audio();
    if (this.snd.canPlayType("audio/ogg")) {
        this.snd.src = sound + ".ogg";
    }
    if (this.snd.canPlayType("audio/mp3")) {
        this.snd.src = sound + ".mp3";
    } else {
        this.snd = null;
    }
}

Sound.prototype.play = function () {
    if (this.snd === null) return;
    this.snd.load();
    this.snd.autoplay = true;

    if (!this.looping) return;

    this.snd.addEventListener("ended", function() {
        this.load();
        this.autoplay = true;
    }, false);
};

Object.defineProperty(Sound.prototype, "volume",
{
    get: function () {
        return this.snd.volume;
    },

    set: function () {
        this.snd.volume = value;
    }
});

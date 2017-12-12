"use strict";

function PaintCan (xposition) {
    this.position = new Vector2(xposition, -200);
    this.velocity = Vector2.zero;
    this.origin = Vector2.zero;
    this.currentColor = sprites.can_red;
    this.minVelocity = 30;
    this.reset();
};

Object.defineProperty(PaintCan.prototype, "color",
    {
        get: function () {
            if (this.currentColor === sprites.can_red)
                return Color.red;
            else if (this.currentColor === sprites.can_green)
                return Color.green;
            else
                return Color.blue;
        },
        set: function (value) {
            if (value === Color.red)
                this.currentColor = sprites.can_red;
            else if (value === Color.green)
                this.currentColor = sprites.can_green;
            else if (value === Color.blue)
                this.currentColor = sprites.can_blue;
        }
    });

Object.defineProperty(PaintCan.prototype, "width",
    {
        get: function () {
            return this.currentColor.width;
        }
    });

Object.defineProperty(PaintCan.prototype, "height",
    {
        get: function () {
            return this.currentColor.height;
        }
    });

Object.defineProperty(PaintCan.prototype, "size",
    {
        get: function () {
            return new Vector2(this.currentColor.width, this.currentColor.height);
        }
    });

Object.defineProperty(PaintCan.prototype, "center",
    {
        get: function () {
            return new Vector2(this.currentColor.width / 2, this.currentColor.height / 2);
        }
    });

PaintCan.prototype.update = function(delta) {
    if (this.velocity.y === 0) {
        this.velocity = this.calculateRandomVelocity();
        this.color = this.calculateRandomColor();
    }
    this.position.addTo(this.velocity.multiply(delta));

    //collision detection
    var ball = Game.gameWorld.ball;
    var distance = ball.position.add(ball.center).substractFrom(this.position).substractFrom(this.center);
    if (Math.abs(distance.x) < this.center.x && Math.abs(distance.y) < this.center.y) {
        this.color = ball.color;
        ball.reset();
    }



    if (Game.gameWorld.isOutsideWorld(this.position)) {
        this.reset();
    }

    this.minVelocity += 0.01;
};

PaintCan.prototype.reset = function () {
    this.moveToTop();
};

PaintCan.prototype.moveToTop = function () {
    this.position = new Vector2(this.position.x, -200);
    this.velocity = Vector2.zero;
};

PaintCan.prototype.calculateRandomVelocity = function () {
    return new Vector2(0, Math.random() * 30 + this.minVelocity);
};

PaintCan.prototype.calculateRandomColor = function () {
    var randomval = Math.floor(Math.random() * 3);
    if (randomval == 0)
        return Color.red;
    else if (randomval == 1)
        return Color.green;
    else
        return Color.blue;
};

PaintCan.prototype.draw = function () {
    Canvas2D.drawImage(this.currentColor, this.position, 0, this.origin);
}

